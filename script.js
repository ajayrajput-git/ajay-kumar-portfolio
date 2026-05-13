// script.js

// CURSOR GLOW

const glow = document.querySelector('.cursor-glow');

document.addEventListener('mousemove', (e) => {

  glow.style.transform = `
    translate(
      ${e.clientX - 150}px,
      ${e.clientY - 150}px
    )
  `;

});

// GSAP ANIMATIONS

gsap.registerPlugin(ScrollTrigger);

// HERO

gsap.from(".hero-tag",{
  opacity:0,
  y:40,
  duration:1
});

gsap.from(".hero h1",{
  opacity:0,
  y:60,
  duration:1,
  delay:.2
});

gsap.from(".hero p",{
  opacity:0,
  y:40,
  duration:1,
  delay:.4
});

gsap.from(".hero-buttons",{
  opacity:0,
  y:40,
  duration:1,
  delay:.6
});

// PROJECT CARDS

gsap.utils.toArray(".project-card").forEach((card)=>{

  gsap.from(card,{
    opacity:0,
    y:100,
    duration:1,
    scrollTrigger:{
      trigger:card,
      start:"top 80%",
    }
  });

});
