const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');

  document.body.style.overflow = navLinks.classList.contains('active') ? "hidden" : "auto";

  });

document.addEventListener('click', (e) => {
  if(navLinks.classList.contains('active') && 
  !navLinks.contains(e.target) && !hamburger.contains(e.target)) {
      navLinks.classList.remove('active');
      hamburger.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
    document.body.style.overflow = 'auto';
});
});