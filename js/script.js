const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');

  document.body.style.overflow = navLinks.classList.contains('active') ? "hidden" : "auto";

  if(navLinks.classList.contains('active')) {
    hamburger.innerHTML = '&times;';
  } else {
    hamburger.innerHTML = '&#9776;';
  }
  });

document.addEventListener('click', (e) => {
  if(navLinks.classList.contains('active')) {
    if(!navLinks.contains(e.target) && e.target !== hamburger) {
      navLinks.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  }
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    document.body.style.overflow = 'auto';
});
});