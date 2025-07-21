// Mobile Menu Toggle
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        document.getElementById('nav-links').classList.remove('show'); // Close menu on click
    });
});

// Dark Mode Toggle
const darkModeBtn = document.createElement('button');
darkModeBtn.textContent = '🌙';
darkModeBtn.style.position = 'fixed';
darkModeBtn.style.bottom = '20px';
darkModeBtn.style.right = '20px';
darkModeBtn.style.padding = '10px';
darkModeBtn.style.borderRadius = '50%';
darkModeBtn.style.border = 'none';
darkModeBtn.style.background = '#ff4a57';
darkModeBtn.style.color = '#fff';
darkModeBtn.style.fontSize = '18px';
darkModeBtn.style.cursor = 'pointer';
darkModeBtn.style.boxShadow = '0 0 10px #ff4a57';
document.body.appendChild(darkModeBtn);

darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    if (document.body.classList.contains('light-mode')) {
        darkModeBtn.textContent = '☀️';
    } else {
        darkModeBtn.textContent = '🌙';
    }
});
