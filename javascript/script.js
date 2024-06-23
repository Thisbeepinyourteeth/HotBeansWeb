document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const mainMenu = document.getElementById('main-menu');

    // Toggle the menu visibility on hamburger click
    hamburger.addEventListener('click', () => {
        mainMenu.classList.toggle('active');
    });

