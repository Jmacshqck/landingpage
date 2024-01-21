document.addEventListener("DOMContentLoaded", () => {
  const hash = window.location.hash.substr(1);
  if (hash) {
    const targetSection = document.getElementById(hash);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  }
});

// Smooth scroll when clicking on navigation links
document.querySelectorAll('.header ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const targetSectionId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetSectionId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});