// Wait for the DOM to be fully loaded before running the script.
document.addEventListener('DOMContentLoaded', () => {

    // Get the mobile menu button and the navigation links container.
    // The ID 'mobile-menu-button' is used to match the index.html file.
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const navLinks = document.getElementById('nav-links');

    // Check if both elements exist before adding the event listener.
    if (mobileMenuButton && navLinks) {
        // Add a click event listener to the menu button.
        mobileMenuButton.addEventListener('click', () => {
            // Toggle the 'active' class on the nav-links element.
            // The CSS will handle showing/hiding the menu based on this class.
            navLinks.classList.toggle('active');
            
            // You could also add an accessibility attribute here if needed,
            // but toggling the class is enough for basic functionality.
        });
    } else {
        console.error('Mobile menu button or nav links element not found.');
    }
});
