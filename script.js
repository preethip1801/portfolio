// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Typing Effect
const typingText = "Frontend Developer | Python Enthusiast";
let i = 0;
function typeEffect() {
    const title = document.querySelector('header p');
    if (i < typingText.length) {
        title.innerHTML += typingText.charAt(i);
        i++;
        setTimeout(typeEffect, 100);
    }
}
document.addEventListener('DOMContentLoaded', typeEffect);

// Scroll Reveal Animation
const sections = document.querySelectorAll('.section');
window.addEventListener('scroll', () => {
    const scrollPosition = window.innerHeight + window.scrollY;
    sections.forEach(section => {
        if (scrollPosition > section.offsetTop + 100) {
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
        }
    });
});