const navContainer = document.getElementById('navContainer');
const navbarOpenBtn = document.getElementById('navbarOpenBtn');
const navbarCloseBtn = document.getElementById('navbarCloseBtn');

document.addEventListener('DOMContentLoaded', () => {

    navbarOpenBtn.addEventListener('click', () => {
        navContainer.classList.add('nav-container--show');
    });

    navbarCloseBtn.addEventListener('click', () => {
        navContainer.classList.remove('nav-container--show');
    });

});