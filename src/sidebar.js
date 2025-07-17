
// Sidebar Menu (mobile)
document.addEventListener('DOMContentLoaded', () => {
    const sideMenu = document.getElementById('sideMenu');

    // Ensure the sideMenu exists before assigning functions
    if (sideMenu) {
        const openMenu = () => {
            sideMenu.style.right = '0'; // Show the menu
        };

        const closeMenu = () => {
            sideMenu.style.right = '-200px'; // Hide the menu
        };

        // Attach the functions to the global window object
        window.openMenu = openMenu;
        window.closeMenu = closeMenu;
    }
});

