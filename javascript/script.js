document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const mainMenu = document.getElementById('main-menu');

    // Toggle the menu visibility on hamburger click
    hamburger.addEventListener('click', () => {
        mainMenu.classList.toggle('active');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('.navbar a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Highlight the current section in the navigation bar
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar ul li a');

    window.addEventListener('scroll', () => {
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (`#${currentSection}` === link.getAttribute('href')) {
                link.classList.add('active');
            }
        });
    });
});