/*  libs / background */
AOS.init();
particlesJS('particles-js', {
  particles:{number:{value:60},size:{value:3},color:{value:'#ffffff'},
             line_linked:{enable:true,opacity:0.2,color:'#ffffff'},move:{speed:1}},
  interactivity:{events:{onhover:{enable:true,mode:'repulse'}}}
});

/*  dados  (todos já prontos)  */
const signos = [
  {
    nome:'aries',   titulo:'Áries',   img:'Aries.png',
    galeria:['Aries.png','salaAries1.png','salaAries2.png'],
    comprar:'https://produto.mercadolivre.com.br/MLB-5459201494'
  },
  {
    nome:'touro',   titulo:'Touro',   img:'touro.png',
    galeria:['touro.png','tourosala1.png','tourosala2.png'],
    comprar:'https://wa.me/5511993957268?text=Quero%20comprar%20o%20quadro%20Touro!'
  },
  {
    nome:'gemeos',  titulo:'Gêmeos',  img:'gemeos.png',
    galeria:['gemeos.png','gemeossala1.png','gemeossala2.png'],
    comprar:'https://wa.me/5511993957268?text=Quero%20comprar%20o%20quadro%20Gêmeos!'
  },
  {
    nome:'cancer',  titulo:'Câncer',  img:'cancer.png',
    galeria:['cancer.png','cancersala1.png','cancersala2.png'],
    comprar:'https://wa.me/5511993957268?text=Quero%20comprar%20o%20quadro%20Câncer!'
  },
  {
    nome:'leao',    titulo:'Leão',    img:'leao.png',
    galeria:['leao.png','leaosala1.png','leaosala2.png'],
    comprar:'https://wa.me/5511993957268?text=Quero%20comprar%20o%20quadro%20Leão!'
  },
  {
    nome:'virgem',  titulo:'Virgem',  img:'virgem.png',
    galeria:['virgem.png','virgemsala1.png','virgemsala2.png'],
    comprar:'https://wa.me/5511993957268?text=Quero%20comprar%20o%20quadro%20Virgem!'
  },
  {
    nome:'libra',   titulo:'Libra',   img:'libra.png',
    galeria:['libra.png','librasala1.png','librasala2.png'],
    comprar:'https://wa.me/5511993957268?text=Quero%20comprar%20o%20quadro%20Libra!'
  },
  {
    nome:'escorpiao',titulo:'Escorpião',img:'escorpiao.png',
    galeria:['escorpiao.png','escorpiaosala1.png','escorpiaosala2.png'],
    comprar:'https://wa.me/5511993957268?text=Quero%20comprar%20o%20quadro%20Escorpião!'
  },
  {
    nome:'sagitario',titulo:'Sagitário',img:'sargitario.png',
    galeria:['sargitario.png','sargitariosala1.png','sargitariosala2.png'],
    comprar:'https://wa.me/5511993957268?text=Quero%20comprar%20o%20quadro%20Sagitário!'
  },
  {
    nome:'capricornio',titulo:'Capricórnio',img:'capricornio.png',
    galeria:['capricornio.png','capricorniosala1.png','capricorniosala2.png'],
    comprar:'https://wa.me/5511993957268?text=Quero%20comprar%20o%20quadro%20Capricórnio!'
  },
  {
    nome:'aquario', titulo:'Aquário', img:'aquario.png',
    galeria:['aquario.png','aquariosala1.png','aquariosala2.png'],
    comprar:'https://wa.me/5511993957268?text=Quero%20comprar%20o%20quadro%20Aquário!'
  },
  {
    nome:'peixes',  titulo:'Peixes',  img:'Peixes.png',
    galeria:['Peixes.png','salaPeixes1.png','salaPeixes2.png'],
    comprar:'https://produto.mercadolivre.com.br/MLB-5460314820'
  }
];

/* monta vitrine */
const vitrine = document.getElementById('vitrine');
signos.forEach(s => {
  vitrine.insertAdjacentHTML('beforeend', `
    <article class="quadro-card" data-aos="fade-up">
      <img src="${s.img}" alt="Quadro ${s.titulo}" class="quadro-thumb"
           loading="lazy" width="280" height="350" onclick="abrirGaleria('${s.nome}')">
      <h2>Quadro ${s.titulo}</h2>
      <p class="price">R$ 329,99</p>
      <a class="buy-btn" href="${s.comprar}" target="_blank" rel="noopener">Comprar</a>
    </article>
  `);
});

/* abre galeria + horóscopo traduzido */
const nomesAPI = {aries:'aries',touro:'taurus',gemeos:'gemini',cancer:'cancer',leao:'leo',
                  virgem:'virgo',libra:'libra',escorpiao:'scorpio',sagitario:'sagittarius',
                  capricornio:'capricorn',aquario:'aquarius',peixes:'pisces'};

async function abrirGaleria(signo){
  const dados = signos.find(x=>x.nome===signo);
  if(!dados) return;
  const g = document.getElementById('galeria-conteudo');
  const h = document.getElementById('horoscopo');
  g.innerHTML = ''; h.textContent = 'Carregando horóscopo…';

  dados.galeria.forEach(src=>{
    g.insertAdjacentHTML('beforeend',`<img src="${src}" alt="Quadro ${dados.titulo}">`);
  });
  document.getElementById('galeria-modal').style.display='block';

  try{
    const api = `https://api.allorigins.win/raw?url=${encodeURIComponent('https://ohmanda.com/api/horoscope/'+nomesAPI[signo])}`;
    const {horoscope} = await (await fetch(api)).json();
    const tr = await (await fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=pt-BR&dt=t&q='+encodeURIComponent(horoscope))).json();
    h.textContent = `Horóscopo de hoje — ${dados.titulo}:\n\n${tr[0].map(t=>t[0]).join('')}`;
  }catch(e){
    h.textContent = 'Não foi possível carregar o horóscopo agora.';
  }
}
function fecharGaleria(){document.getElementById('galeria-modal').style.display='none';}
window.onclick = e=>{if(e.target.id==='galeria-modal')fecharGaleria();}
