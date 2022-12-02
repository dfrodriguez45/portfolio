// Anchors
const home = document.querySelector('a[href="#"]');
const about = document.querySelector('a[href="#about"]');
const projects = document.querySelector('a[href="#projects"]');
const contact = document.querySelector('a[href="#contact"]');


// Navegation
home.addEventListener('click', function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0
  });
});

about.addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector(this.getAttribute('href')).scrollIntoView();
});

projects.addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector(this.getAttribute('href')).scrollIntoView();
});

contact.addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector(this.getAttribute('href')).scrollIntoView();
});