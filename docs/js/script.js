function toggleNavigation(visible) {
  document.querySelector('.navigation').classList.toggle('show', visible);
}

document.querySelector('.fa-bars').addEventListener('click', function(e) {
  e.preventDefault();
  toggleNavigation();
});