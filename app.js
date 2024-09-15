// Dynamic Text for Home Page
const introTexts = [
    "Hello! I build as a",
    "Crafting code as a",
    "Fueling innovation as a",
    "Driven to create as a",
    "Exploring tech as a",
    "Turning ideas into reality as a"
];

const titles = [
    "Software Developer",
    "Full-Stack Developer",
    "Backend Developer",
    "Frontend Developer",
    "Web Developer"
];

const introTextElement = document.querySelector('.intro-text');
const dynamicTitleElement = document.querySelector('.dynamic-title');

let introIndex = 0;
let titleIndex = 0;

function updateTitle() {
    introTextElement.textContent = introTexts[introIndex];
    dynamicTitleElement.textContent = titles[titleIndex];

    introIndex = (introIndex + 1) % introTexts.length;
    titleIndex = (titleIndex + 1) % titles.length;
}

setInterval(updateTitle, 3000);

// Hamburger Menu Toggle for Mobile
document.getElementById('hamburger').addEventListener('click', function() {
    var navLinks = document.getElementById('nav-links');
    if (navLinks.classList.contains('mobile')) {
        navLinks.classList.remove('mobile');
    } else {
        navLinks.classList.add('mobile');
    }
});
// Scroll Animation for Education Section
const educationList = document.querySelector('.education-list');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            educationList.classList.add('visible');
        }
    });
}, { threshold: 0.5 });

observer.observe(educationList);
