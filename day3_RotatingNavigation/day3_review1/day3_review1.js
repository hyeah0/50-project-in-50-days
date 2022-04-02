const d3r1CircleContainer = document.querySelector('.d3r1-circle-container');
const d3r1Container = document.querySelector('.d3r1-container');
const d3r1Nav = document.querySelector('.d3r1-nav');
const d3r1CloseNav = document.querySelector('.d3r1-close-nav');

d3r1Nav.addEventListener('click',() => {
    d3r1CircleContainer.classList.add('d3r1-circle-rotate');
    d3r1Container.classList.add('d3r1-rotate');
})

d3r1CloseNav.addEventListener('click',() => {
    d3r1CircleContainer.classList.remove('d3r1-circle-rotate');
    d3r1Container.classList.remove('d3r1-rotate');
})