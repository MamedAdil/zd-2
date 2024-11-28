document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', event => {
        const submenu = event.target.nextElementSibling;
        if (submenu && submenu.classList.contains('submenu')) {
            submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
        }
    });
});