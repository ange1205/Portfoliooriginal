const text = "Angélique Manga";  // Texte animé
let i = 0;
const typingElement = document.getElementById("typing");

function typeWriter() {
  if (i < text.length) {
    typingElement.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 150); // vitesse d'écriture
  } else {
    // Après avoir écrit, attendre 8 secondes puis recommencer
    setTimeout(() => {
      typingElement.textContent = "";
      i = 0;
      typeWriter();
    }, 8000);
  }
}

// Lancer l’effet
typeWriter();





const slides = document.querySelectorAll('.testimonial-card');
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'block' : 'none';
  });
}

// Affiche le premier slide
showSlide(currentIndex);

// Change de slide toutes les 9 secondes (9000 ms)
setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}, 9000);