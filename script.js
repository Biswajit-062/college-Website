const burger = document.querySelector('.burger');
const topNav = document.querySelector('.top-nav');
const bottomNav = document.querySelector('.bottom-nav');

burger.addEventListener('click', () => {
    topNav.classList.toggle('active');
    bottomNav.classList.toggle('active');
});
