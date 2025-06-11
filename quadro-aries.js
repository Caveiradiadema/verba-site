AOS.init();

particlesJS("particles-js", {
  particles: {
    number: { value: 40, density: { enable: true, value_area: 800 } },
    color: { value: "#d4af37" },
    shape: { type: "circle" },
    opacity: { value: 0.3, random: true },
    size: { value: 3, random: true },
    move: { enable: true, speed: 1, direction: "none", out_mode: "out" }
  },
  interactivity: {
    events: { onhover: { enable: true, mode: "repulse" } },
    modes: { repulse: { distance: 80, duration: 0.4 } }
  },
  retina_detect: true
});

function mudarImagem(caminho) {
  const img = document.getElementById("quadroExibido");
  if (img) {
    img.src = caminho;
    img.alt = `Visualização de ${caminho.split('.')[0]}`;
  }
}

document.querySelectorAll('.carousel-vertical button').forEach(function(btn) {
  btn.addEventListener('click', function(){
    mudarImagem(this.dataset.img);
  });
});
