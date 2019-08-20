function createDiv() {
  let div = document.createElement('div');
  div.classList.add('goUp');
  let detailsSection = document.getElementById('details');
  div.addEventListener('click', toTop);
  document.body.insertBefore(div, detailsSection);
}

function showHide() {
  let arrow = document.querySelector('.goUp');
  if (window.scrollY > 500 && !document.body.contains(arrow)) {
    createDiv();
  }

  if (window.scrollY < 500 && document.body.contains(arrow)) {
    arrow.remove();
  }
}

function handleChange() {
  showHide();
}

function toTop() {
  window.scrollTo(0, 0);
}

window.addEventListener('scroll', handleChange);
