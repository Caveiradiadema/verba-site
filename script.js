/* Partículas + animações AOS  */
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

/* Nenhuma geração de cards aqui!  
   A vitrine é totalmente estática no HTML. */
