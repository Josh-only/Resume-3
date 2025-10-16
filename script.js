// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;
const icon = document.getElementById('theme-icon');

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  icon.classList.toggle('fa-moon');
  icon.classList.toggle('fa-sun');
  localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
});

// Persist Theme
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  icon.classList.replace('fa-moon', 'fa-sun');
}

// Mobile Menu
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Reveal Animation
const sections = document.querySelectorAll('.section');
window.addEventListener('scroll', () => {
  const trigger = window.innerHeight * 0.85;
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < trigger) sec.classList.add('visible');
  });
});

// Typing Animation
const typedName = document.getElementById("typed-name");
const nameText = "Toluwani Oyebade";
let i = 0;
function type() {
  if (i < nameText.length) {
    typedName.textContent += nameText.charAt(i);
    i++;
    setTimeout(type, 120);
  }
}
document.addEventListener("DOMContentLoaded", type);

// EmailJS Setup
(function(){
  emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS key
})();

document.getElementById("contact-form").addEventListener("submit", function(e){
  e.preventDefault();
  emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
    .then(() => alert("Message sent successfully!"))
    .catch(() => alert("Failed to send message."));
});
