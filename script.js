/* ---------- REVEAL ON SCROLL ---------- */
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* When visible, add simple fade‑up animation via CSS */
const style = document.createElement('style');
style.innerHTML = `
.reveal { opacity: 0; transform: translateY(40px); transition: 0.8s ease-out; }
.reveal.visible { opacity: 1; transform: translateY(0); }
`;
document.head.appendChild(style);

/* ---------- TESTIMONIALS SLIDER ---------- */
let index = 0;
const slides = document.querySelectorAll('#slider .slide');
if (slides.length) {
  setInterval(() => {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
  }, 4500); // 4.5 s por slide
}

// Mostrar mensaje de bienvenida al entrar
window.addEventListener("load", () => {
  setTimeout(() => {
    alert("¡Bienvenido a Urban Travel! Gracias por confiar en nuestro servicio VIP 🚗✨");
  }, 1000);
});

// Animación de entrada de secciones al hacer scroll
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  for (const el of reveals) {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  }
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
