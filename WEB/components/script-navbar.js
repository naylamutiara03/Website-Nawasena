// Menangani klik pada tombol menu untuk menampilkan/menyembunyikan menu mobile
document.getElementById("menu-button").addEventListener("click", function () {
    const menu = document.getElementById("mobile-menu");
    menu.classList.toggle("hidden");
    menu.classList.toggle("menu-enter-active");
});

// Menyoroti tautan aktif di navbar desktop
document.querySelectorAll(".nav-link").forEach(link => {
    const currentPath = window.location.pathname; // Path URL saat ini
    if (link.getAttribute("href") === currentPath) {
        link.classList.add("active-link");
    }
});

// Menyoroti tautan aktif di dropdown menu mobile
document.querySelectorAll("#mobile-menu .nav-link").forEach(link => {
    const currentPath = window.location.pathname;
    if (link.getAttribute("href") === currentPath) {
        link.classList.add("active-link");
    }
});