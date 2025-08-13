// Lista de obras (usa PNGs que você tem na pasta /art)
const OBRAS = [
  { slug:'aries',      signo:'Áries',       estilo:'Bauhaus',          img:'art/aries.png' },
  { slug:'touro',      signo:'Touro',       estilo:'Art Nouveau',      img:'art/touro.png' },

  // << Peixes agora é o 3º >>
  { slug:'peixes',     signo:'Peixes',      estilo:'Impressionismo',   img:'art/peixes.png' },

  { slug:'cancer',     signo:'Câncer',      estilo:'Romantismo',       img:'art/cancer.png' },
  { slug:'leao',       signo:'Leão',        estilo:'Barroco',          img:'art/leao.png' },
  { slug:'virgem',     signo:'Virgem',      estilo:'Minimalismo',      img:'art/virgem.png' },
  { slug:'libra',      signo:'Libra',       estilo:'Neoclássico',      img:'art/libra.png' },
  { slug:'escorpiao',  signo:'Escorpião',   estilo:'Expressionismo',   img:'art/escorpiao.png' },
  { slug:'sagitario',  signo:'Sagitário',   estilo:'Futurismo',        img:'art/sagitario.png' },
  { slug:'capricornio',signo:'Capricórnio', estilo:'Construtivismo',   img:'art/capricornio.png' },
  { slug:'aquario',    signo:'Aquário',     estilo:'Surrealismo',      img:'art/aquario.png' },

  // Gêmeos foi movido pra cá (12º, por ex.)
  { slug:'gemeos',     signo:'Gêmeos',      estilo:'Cubismo',          img:'art/gemeos.png' }
];

(function renderVitrine(){
  const vitrine = document.getElementById('vitrine');
  if(!vitrine) return;

  vitrine.innerHTML = OBRAS.map(o => `
    <article class="card">
      <a href="./${o.slug}.html" aria-label="Abrir quadro de ${o.signo}">
        <img class="card-img" src="${o.img}" alt="Quadro ${o.signo} — ${o.estilo}" loading="lazy" />
        <div class="card-body">
          <h3 class="card-title">${o.signo}</h3>
          <p class="card-sub">${o.estilo}</p>
        </div>
      </a>
    </article>
  `).join('');
})();
