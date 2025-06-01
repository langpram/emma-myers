import Typed from "typed.js";

const typed = new Typed("#typed", {
  strings: [
    "Actress Extraordinaire",
    "Enid Sinclair in Wednesday",
    "Inspiration to Millions",
    "Rising Star",
    "Authentic & Talented",
  ],
  typeSpeed: 60,
  backSpeed: 40,
  backDelay: 1000,
  loop: true,
  showCursor: true,
  cursorChar: "|",
});

// Slideshow for hero section
const slides = document.querySelectorAll(".slideshow img");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("opacity-100", i === index);
    slide.classList.toggle("opacity-0", i !== index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

showSlide(currentSlide);
setInterval(nextSlide, 5000);

// Scroll-triggered animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".animate-on-scroll").forEach((element) => {
  observer.observe(element);
});
