// Smooth scrolling only for internal links
document.querySelectorAll('a').forEach(anchor => {
  const href = anchor.getAttribute("href");

  // Only apply smooth scroll if it's an internal section (starts with "#")
  if (href && href.startsWith("#")) {
    anchor.addEventListener("click", function(e) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  }
});

// Scroll reveal effect
const faders = document.querySelectorAll('.card, section h2');
window.addEventListener('scroll', () => {
  faders.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('show');
    }
  });
});

// 3D Tilt Effect on Cards
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * 10;
    card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = "rotateX(0) rotateY(0) scale(1)";
  });
});
// Mobile hamburger toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

// Toggle menu when hamburger clicked
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// Close menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
  });
});
