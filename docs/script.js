const menu = document.querySelector('.menu');
const burger = document.querySelector('.burger');

// is the burger menu open?
let open = false;

function toTop() {
  window.scrollTo(0, 0);
}

function createDiv() {
  let div = document.createElement('div');
  div.classList.add('goUp');
  let detailsSection = document.getElementById('details');
  div.addEventListener('click', toTop);
  document.body.insertBefore(div, detailsSection);
}

function showBackToTop() {
  let arrow = document.querySelector('.goUp');
  if (window.scrollY > 500 && !document.body.contains(arrow)) {
    createDiv();
  }

  if (window.scrollY < 500 && document.body.contains(arrow)) {
    arrow.remove();
  }
}

function handleChange() {
  showBackToTop();
}

function toggleMenu() {
  open = !open;
  if (open === true) {
    menu.classList.add('active');
    burger.classList.add('close');
  } else {
    menu.classList.remove('active');
    burger.classList.remove('close');
  }
}

window.addEventListener('scroll', handleChange);
burger.addEventListener('click', toggleMenu);
