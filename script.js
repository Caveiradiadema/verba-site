/* ---------- libs / partículas de fundo ---------- */
AOS.init();
particlesJS('particles-js', {
  particles: {
    number: { value: 60 },
    size:   { value: 3 },
    color:  { value: '#ffffff' },
    line_linked: { enable: true, opacity: 0.2, color: '#ffffff' },
    move: { speed: 1 }
  },
  interactivity: { events: { onhover: { enable: true, mode: 'repulse' } } }
});

/* ---------- dados ---------- */
const signos = [
  {
    nome: 'peixes',
    titulo: 'Peixes',
    img: 'Peixes.png',
    galeria: ['Peixes.png', 'salaPeixes1.png', 'salaPeixes2.png'],
    comprar: 'https://produto.mercadolivre.com.br/MLB-5492866158-quadro-peixes-40x50-cm-arte-exclusiva-estilo-impressionismo-_JM',
    ml: true
  },
  {
    nome: 'aries',
    titulo: 'Áries',
    img: 'Aries.png',
    galeria: ['Aries.png', 'salaAries1.png', 'salaAries2.png'],
    comprar: 'https://produto.mercadolivre.com.br/MLB-5459201494',
    ml: true
  },
  {
    nome: 'touro',
    titulo: 'Touro',
    img: 'touro.png',
    galeria: ['touro.png', 'tourosala1.png', 'tourosala2.png'],
    comprar: 'https://produto.mercadolivre.com.br/MLB-4123612691-quadro-touro-4050-cm-arte-art-nouveau-vidro-e-madeira-_JM',
    ml: true
  },
  {
    nome: 'gemeos',
    titulo: 'Gêmeos',
    img: 'gemeos.png',
    galeria: ['gemeos.png', 'gemeossala1.png', 'gemeossala2.png'],
    comprar: 'https://wa.me/5511993957268?text=Quero%20comprar%20o%20quadro%20Gêmeos!',
    ml: false
  },
  {
    nome: 'cancer',
    titulo: 'Câncer',
    img: 'cancer.png',
    galeria: ['cancer.png', 'cancersala1.png', 'cancersala2.png'],
    comprar: 'https://wa.me/5511993957268?text=Quero%20comprar%20o%20quadro%20Câncer!',
    ml: false
  },
  {
    nome: 'leao',
    titulo: 'Leão',
    img: 'leao.png',
    galeria: ['leao.png', 'leaosala1.png', 'leaosala2.png'],
    comprar: 'https://wa.me/5511993957268?text=Quero%20comprar%20o%20quadro%20Leão!',
    ml: false
  },
  {
    nome: 'virgem',
    titulo: 'Virgem',
    img: 'virgem.png',
    galeria: ['virgem.png', 'virgemsala1.png', 'virgemsala2.png'],
    comprar: 'https://wa.me/5511993957268?text=Quero%20comprar%20o%20quadro%20Virgem!',
    ml: false
  },
  {
    nome: 'libra',
    titulo: 'Libra',
    img: 'libra.png',
    galeria: ['libra.png', 'librasala1.png', 'librasala2.png'],
    comprar: 'https://wa.me/5511993957268?text=Quero%20comprar%20o%20quadro%20Libra!',
    ml: false
  },
  {
    nome: 'escorpiao',
    titulo: 'Escorpião',
    img: 'escorpiao.png',
    galeria: ['escorpiao.png', 'escorpiaosala1.png', 'escorpiaosala2.png'],
    comprar: 'https://wa.me/5511993957268?text=Quero%20comprar%20o%20quadro%20Escorpião!',
    ml: false
  },
  {
    nome: 'sagitario',
    titulo: 'Sagitário',
    img: 'sargitario.png',
    galeria: ['sargitario.png', 'sargitariosala1.png', 'sargitariosala2.png'],
    comprar: 'https://wa.me/5511993957268?text=Quero%20comprar%20o%20quadro%20Sagitário!',
    ml: false
  },
  {
    nome: 'capricornio',
    titulo: 'Capricórnio',
    img: 'capricornio.png',
    galeria: ['capricornio.png', 'capricorniosala1.png', 'capricorniosala2.png'],
    comprar: 'https://wa.me/5511993957268?text=Quero%20comprar%20o%20quadro%20Capricórnio!',
    ml: false
  },
  {
    nome: 'aquario',
    titulo: 'Aquário',
    img: 'aquario.png',
    galeria: ['aquario.png', 'aquariosala1.png', 'aquariosala2.png'],
    comprar: 'https://wa.me/5511993957268?text=Quero%20comprar%20o%20quadro%20Aquário!',
    ml: false
  }
];

/* ---------- monta vitrine (cards) ---------- */
const vitrine = document.getElementById('vitrine');

signos.forEach(s => {
  vitrine.insertAdjacentHTML('beforeend', `
    <article class="quadro-card" data-aos="fade-up">
      <a href="${s.nome}.html" class="noselect">
        <img
          src="${s.img}"
          alt="Quadro Signo ${s.titulo} 40x50 cm em canvas"
          class="quadro-thumb"
          loading="lazy"
          width="280"
          height="350"
        >
      </a>
      <h2>Quadro ${s.titulo}</h2>
      <p class="price">R$ 429,99<br><small style="font-size:.75rem;color:#bbb">em&nbsp;8× R$ 53,75&nbsp;sem juros</small></p>
      <a class="buy-btn" href="${s.comprar}" target="_blank" rel="noopener">
        ${s.ml ? 'Comprar no Mercado&nbsp;Livre' : 'Comprar pelo&nbsp;WhatsApp'}
      </a>
      <button class="ml-info">${s.ml ? 'Por que comprar pelo ML?' : 'Por que comprar pelo ML?'}</button>
      <div class="ml-tooltip">
        O Mercado Livre oferece <strong>Proteção ao Comprador</strong>:<br>
        – pagamento seguro via Mercado Pago;<br>
        – reembolso 100% no caso de problemas;<br>
        – envio rastreado.<br><br>
        Para a VERBA, acelera a logística e evita golpes.
      </div>
    </article>
  `);
});

/* ---------- galeria + horóscopo (para quem usa modal) ---------- */
const nomesAPI = {
  aries:'aries', touro:'taurus', gemeos:'gemini', cancer:'cancer',
  leao:'leo', virgem:'virgo', libra:'libra', escorpiao:'scorpio',
  sagitario:'sagittarius', capricornio:'capricorn',
  aquario:'aquarius', peixes:'pisces'
};

async function abrirGaleria(signoNome) {
  const dados = signos.find(s => s.nome === signoNome);
  if (!dados) return;

  const cont = document.getElementById('galeria-conteudo');
  const hor  = document.getElementById('horoscopo');
  cont.innerHTML = '';
  hor.textContent = 'Carregando horóscopo…';

  dados.galeria.forEach(src => {
    cont.insertAdjacentHTML('beforeend', `<img src="${src}" alt="Quadro ${dados.titulo} em ambiente">`);
  });
  document.getElementById('galeria-modal').style.display = 'block';

  try {
    const proxy = 'https://api.allorigins.win/raw?url=' +
      encodeURIComponent('https://ohmanda.com/api/horoscope/' + nomesAPI[signoNome]);
    const { horoscope } = await (await fetch(proxy)).json();

    const traducao = await (await fetch(
      'https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=pt-BR&dt=t&q=' +
      encodeURIComponent(horoscope)
    )).json();

    const textoPt = traducao[0].map(t => t[0]).join('');
    hor.textContent = `Horóscopo de hoje — ${dados.titulo.toUpperCase()}:\n\n${textoPt}`;
  } catch (e) {
    hor.textContent = 'Não foi possível carregar o horóscopo no momento.';
    console.error(e);
  }
}

function fecharGaleria() {
  document.getElementById('galeria-modal').style.display = 'none';
}

window.onclick = e => {
  if (e.target.id === 'galeria-modal') fecharGaleria();
};
