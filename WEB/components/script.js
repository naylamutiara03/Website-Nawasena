document.addEventListener('DOMContentLoaded', () => {
  // Ambil nama halaman dari URL
  const currentPage = window.location.pathname.split('/').pop();

  // Pilih semua tautan di navigasi dan menu dropdown
  const navLinks = document.querySelectorAll('nav a, #mobile-menu a');

  // Tambahkan class 'active-link' jika URL cocok
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && (href === currentPage || href.includes(currentPage))) {
      link.classList.add('active-link');
    }
  });
});
  