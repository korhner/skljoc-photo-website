document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    // Add current year to footer copyright
    const copyright = document.querySelector('.copyright');
    if (copyright) {
        const year = new Date().getFullYear();
        copyright.innerHTML = copyright.innerHTML.replace('{{year}}', year);
    }

    // Package selector tabs
    const packageTabs = document.querySelectorAll('.package-tab');

    packageTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Get the parent selector and details container
            const selector = this.closest('.package-selector');
            const packageOptions = this.closest('.package-options');
            const packageName = this.getAttribute('data-package');

            // Remove active class from all tabs in this selector
            selector.querySelectorAll('.package-tab').forEach(t => {
                t.classList.remove('active');
            });

            // Add active class to clicked tab
            this.classList.add('active');

            // Hide all package details
            packageOptions.querySelectorAll('.package-details').forEach(details => {
                details.classList.remove('active');
            });

            // Show the selected package details
            packageOptions.querySelector(`.package-details.${packageName}`).classList.add('active');
        });
    });
});