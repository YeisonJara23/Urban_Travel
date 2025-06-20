// ---------- REVEAL ON SCROLL ----------
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('active');
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ---------- TESTIMONIALS SLIDER ----------
let index = 0;
const slides = document.querySelectorAll('.slider .slide');
if (slides.length) {
  setInterval(() => {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
  }, 4500);
}

// ---------- BIENVENIDA ----------
window.addEventListener("load", () => {
  const welcome = document.getElementById("welcome-message");
  if (welcome) {
    welcome.classList.add("show");
    setTimeout(() => {
      welcome.classList.remove("show");
    }, 5000);
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slider .slide");
  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) slide.classList.add("active");
    });
  }

  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  // Mostrar primer slide y rotar cada 5 segundos
  showSlide(current);
  setInterval(nextSlide, 5000);
});
