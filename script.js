// Inicializa as bibliotecas externas
AOS.init();
particlesJS('particles-js', {
  particles: {
    number: { value: 60 }, size: { value: 3 }, color: { value: '#ffffff' },
    line_linked: { enable: true, opacity: 0.2, color: '#ffffff' },
    move: { speed: 1 }
  },
  interactivity: { events: { onhover: { enable: true, mode: 'repulse' } } }
});

// --- Dados do nosso site ---
const signos = [
    { nome: 'aries', pronto: true, preco: 'R$ 329,99', img: 'Aries.png', galeria: ['Aries.png', 'salaAries1.png', 'salaAries2.png'] },
    { nome: 'peixes', pronto: true, preco: 'R$ 329,99', img: 'Peixes.png', galeria: ['Peixes.png', 'salaPeixes1.png', 'salaPeixes2.png'] },
    ...['touro','gemeos','cancer','leao','virgem','libra','escorpiao','sagitario','capricornio','aquario'].map(s => ({
      nome: s,
      pronto: false,
      img: `placeholder-${s}.png`,
      galeria: [`placeholder-${s}.png`]
    }))
];

const nomesExibicao = {
    aries: 'Áries', touro: 'Touro', gemeos: 'Gêmeos', cancer: 'Câncer', leao: 'Leão', virgem: 'Virgem',
    libra: 'Libra', escorpiao: 'Escorpião', sagitario: 'Sagitário', capricornio: 'Capricórnio',
    aquario: 'Aquário', peixes: 'Peixes'
};

const nomesAPI = {
  aries: 'aries', touro: 'taurus', gemeos: 'gemini', cancer: 'cancer',
  leao: 'leo', virgem: 'virgo', libra: 'libra', escorpiao: 'scorpio',
  sagitario: 'sagittarius', capricornio: 'capricorn',
  aquario: 'aquarius', peixes: 'pisces'
};


// --- Funções Principais ---

// Gera os cards dos produtos que ainda não estão prontos
function gerarCardsEmBreve() {
    const vitrine = document.querySelector('.vitrine');
    signos.filter(s => !s.pronto).forEach(s => {
        vitrine.innerHTML += `
          <div class="quadro-card" data-aos="fade-up">
            <img src="${s.img}" class="quadro-thumb" alt="Quadro ${nomesExibicao[s.nome]} - Em Breve" onclick="abrirGaleria('${s.nome}')">
            <h2>Quadro ${nomesExibicao[s.nome]}</h2>
            <p class="price">Em breve</p>
            <a class="buy-btn" href="https://wa.me/5511993957268" target="_blank">Fale no WhatsApp</a>
          </div>
        `;
    });
}

async function abrirGaleria(signoNome) {
  const dados = signos.find(s => s.nome === signoNome);
  if (!dados) return;

  const galeria = document.getElementById('galeria-conteudo');
  const horoscopo = document.getElementById('horoscopo');

  galeria.innerHTML = '';
  horoscopo.innerText = 'Carregando e traduzindo horóscopo...';

  dados.galeria.forEach(img => {
    const tag = document.createElement('img');
    tag.src = img;
    tag.alt = `Imagem do quadro de ${nomesExibicao[signoNome]}`;
    galeria.appendChild(tag);
  });

  document.getElementById('galeria-modal').style.display = 'block';

  try {
    const nomeParaAPI = nomesAPI[signoNome];
    const urlHoroscopo = `https://api.allorigins.win/raw?url=${encodeURIComponent('https://ohmanda.com/api/horoscope/' + nomeParaAPI)}`;
    const resHoroscopo = await fetch(urlHoroscopo);
    const objHoroscopo = await resHoroscopo.json();
    const textoEmIngles = objHoroscopo.horoscope || '';

    if (!textoEmIngles) {
      throw new Error('Texto do horóscopo não encontrado na API original.');
    }

    const urlTraducao = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=pt-BR&dt=t&q=${encodeURIComponent(textoEmIngles)}`;
    const resTraducao = await fetch(urlTraducao);
    const arrayTraducao = await resTraducao.json();
    
    const textoTraduzido = arrayTraducao[0].map(segmento => segmento[0]).join('');

    horoscopo.innerText = `Horóscopo de hoje para ${nomesExibicao[signoNome]}:\n\n${textoTraduzido}`;

  } catch (error) {
    console.error("Falha ao buscar ou traduzir horóscopo:", error);
    horoscopo.innerText = 'Não foi possível carregar o horóscopo no momento.';
  }
}

function fecharGaleria() {
  document.getElementById('galeria-modal').style.display = 'none';
}


// --- Execução e Eventos ---

// Gera os cards "Em Breve" assim que a página carrega
gerarCardsEmBreve();

// Adiciona o evento de clique para fechar o modal
window.onclick = function (event) {
  const modal = document.getElementById('galeria-modal');
  if (event.target === modal) {
    fecharGaleria();
  }
};