// --- Hamburger Menu Logic ---
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// --- Slider Logic ---
let index = 0;
const slides = document.getElementById("slides");
const totalSlides = slides.children.length;

function showSlide() {
    slides.style.transform = `translateX(${-index * (100 / totalSlides)}%)`;
}

function nextSlide() {
    if (index < totalSlides - 1) {
        index++;
    } else {
        index = 0; // Loop back to the beginning
    }
    showSlide();
}

function prevSlide() {
    if (index > 0) {
        index--;
    } else {
        index = totalSlides - 1; // Loop to the end
    }
    showSlide();
}

// Optional: Auto-slide functionality
setInterval(nextSlide, 5000);