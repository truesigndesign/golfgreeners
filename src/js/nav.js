// Variables
var CSbody = document.querySelector("body");
const CSnavbarMenu = document.querySelector("#cs-navigation");
const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");

// Mobile Navigation Toggle
CShamburgerMenu.addEventListener('click', function () {
    CShamburgerMenu.classList.toggle("cs-active");
    CSnavbarMenu.classList.toggle("cs-active");
    CSbody.classList.toggle("cs-open");
    ariaExpanded();
});

// Update aria-expanded value
function ariaExpanded() {
    const csUL = document.querySelector('#cs-expanded');
    const csExpanded = csUL.getAttribute('aria-expanded');

    if (csExpanded === 'false') {
        csUL.setAttribute('aria-expanded', 'true');
    } else {
        csUL.setAttribute('aria-expanded', 'false');
    }
}

// Scroll-based Navbar Class Toggle
document.addEventListener('scroll', () => {
    const scroll = document.documentElement.scrollTop;
    if (scroll >= 100) {
        document.body.classList.add('scroll');
    } else {
        document.body.classList.remove('scroll');
    }

    // Update Active Links After Scroll
    updateActiveLinks();
});

// Dropdown Toggle Code for Mobile
const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
dropDowns.forEach((item) => {
    const onClick = () => item.classList.toggle('cs-active');
    item.addEventListener('click', onClick);
});

// Function to Update Active Links
function updateActiveLinks() {
    const currentPath = window.location.pathname;

    document.querySelectorAll('.cs-li-link').forEach((link) => {
        // Remove active class
        link.classList.remove('cs-active');

        // Add active class if the path matches
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('cs-active');

            // Highlight parent dropdown (if applicable)
            const parentDropdown = link.closest('.cs-dropdown');
            if (parentDropdown) {
                parentDropdown.classList.add('cs-active');
            }
        }
    });
}

// Initial Call to Set Active Links on Page Load
updateActiveLinks();
