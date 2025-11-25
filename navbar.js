const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');
const overlay = document.getElementById('overlay');

// Toggle menu when clicking hamburger
hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navbar.classList.toggle('active');
    overlay.classList.toggle('active');
});

// Close menu when clicking overlay
overlay.addEventListener('click', function() {
    hamburger.classList.remove('active');
    navbar.classList.remove('active');
    overlay.classList.remove('active');
});

// Close menu when clicking on a link
const navLinks = document.querySelectorAll('.navbar li a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navbar.classList.remove('active');
        overlay.classList.remove('active');
    });
});