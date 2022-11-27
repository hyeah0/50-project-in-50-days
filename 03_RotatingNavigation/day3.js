const day3Open = document.getElementById('day3-open');
const day3Close = document.getElementById('day3-close');
const day3Container = document.querySelector('.day3-container');

day3Open.addEventListener('click', () => day3Container.classList.add('day3-show-nav'));
day3Close.addEventListener('click', () => day3Container.classList.remove('day3-show-nav'));