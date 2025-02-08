function scrollToTop(event) {
    event.preventDefault(); // Mencegah scrolling default
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll ke atas
}

function buttonmenu() {
    var menu = document.querySelector(".menu");
    menu.classList.toggle("active");
}
// Menutup menu saat klik link
document.querySelectorAll('.menu li a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('menu').classList.remove('active');
    });
});

// Menutup menu setelah scroll
window.addEventListener('scroll', () => {
    document.getElementById('menu').classList.remove('active');
});

// Smooth scroll untuk navigasi
function scrollToTop(event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}