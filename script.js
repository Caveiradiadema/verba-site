// Particles (carrega config do arquivo JSON)
fetch('particles.json')
  .then(r => r.json())
  .then(cfg => particlesJS('particles-js', cfg))
  .catch(()=> {
    // fallback simples
    particlesJS("particles-js",{
      particles:{ number:{value:70}, color:{value:"#ffffff"},
        shape:{type:"circle"}, opacity:{value:0.4,random:true},
        size:{value:2,random:true},
        line_linked:{enable:true,distance:150,color:"#ffffff",opacity:0.15,width:1},
        move:{enable:true,speed:1.1,out_mode:"out"}
      },
      interactivity:{events:{onhover:{enable:false},onclick:{enable:false}}},
      retina_detect:true
    });
  });

// GSAP – animações de entrada
window.addEventListener('DOMContentLoaded', () => {
  gsap.set(['.site-header .logo','.subtitle','.hero-title','.hero-tip','.btn-cta'], {opacity:0, y:10});
  gsap.to('.site-header .logo',{opacity:1,y:0,duration:.6,ease:"power2.out"});
  gsap.to('.subtitle',{opacity:1,y:0,duration:.6,delay:.1,ease:"power2.out"});
  gsap.to('.hero-title',{opacity:1,y:0,duration:.7,delay:.2,ease:"power2.out"});
  gsap.to('.hero-tip',{opacity:1,y:0,duration:.7,delay:.35,ease:"power2.out"});
  gsap.to('.btn-cta',{opacity:1,y:0,duration:.7,delay:.45,ease:"power2.out"});

  // anima cada card quando entra na viewport
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        gsap.fromTo(e.target, {y:20, opacity:0}, {y:0, opacity:1, duration:.45, ease:"power2.out"});
        obs.unobserve(e.target);
      }
    });
  },{threshold:0.15});

  document.querySelectorAll('.card').forEach(c=>obs.observe(c));
});

// Modal (reservado)
const modal = document.getElementById('galeria-modal');
if(modal){
  modal.querySelector('.fechar')?.addEventListener('click',()=>modal.hidden=true);
  modal.querySelector('.share-btn')?.addEventListener('click',()=>{
    navigator.clipboard.writeText(location.href).then(()=>alert('Link copiado!'));
  });
}
