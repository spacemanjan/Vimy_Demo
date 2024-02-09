document.addEventListener('DOMContentLoaded', function () {
    const arrowDown = document.querySelector('.arrow-down');
    const sections = document.querySelectorAll('main > section');

    arrowDown.addEventListener('click', function () {
        const currentIndex = getCurrentSectionIndex();
        if (currentIndex < sections.length - 1) {
            const nextSection = sections[currentIndex + 1];
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    });

    // Function to get the index of the current visible section
    function getCurrentSectionIndex() {
        return Array.from(sections).findIndex(section => {
            const rect = section.getBoundingClientRect();
            return rect.top >= 0 && rect.bottom <= window.innerHeight;
        });
    }

    // Function to handle the scroll event
    function handleScroll() {
        const currentIndex = getCurrentSectionIndex();
        // If the current section is not the last one, show the arrow
        if (currentIndex < sections.length - 1) {
            arrowDown.style.opacity = '1';
        } else {
            // If the user is at the last section, hide the arrow
            arrowDown.style.opacity = '0';
        }
    }

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Initially hide the arrow if the user is already at the last section
    handleScroll();
});

function redirectToExperience() {
    window.location.href = 'experience.html';
}

function toggleMenu() {
    const menu = document.querySelector('.navigation-menu');
    menu.classList.toggle('show-menu');
}