// Script da Landing Page (script.js - Final)

document.addEventListener('DOMContentLoaded', () => {

    if (typeof ScrollReveal === 'function') {
        const sr = ScrollReveal({
            distance: '65px', duration: 1800, easing: 'cubic-bezier(0.5, 0, 0, 1)',
            reset: false, delay: 200 });

        sr.reveal('.hero h2', { origin: 'bottom', delay: 200 });
        sr.reveal('.hero .subtitle', { origin: 'bottom', delay: 350 });
        sr.reveal('.hero-buttons', { origin: 'bottom', delay: 500 });
        sr.reveal('.section-title', { origin: 'top', delay: 200 });
        sr.reveal('.section-intro', { origin: 'top', delay: 300 });
        sr.reveal('.feature-item', { origin: 'bottom', interval: 150, delay: 400 });
        sr.reveal('.stat-item', { origin: 'bottom', interval: 150, delay: 300 });
        sr.reveal('.teste-section .section-title', { origin: 'top', delay: 200 });
        sr.reveal('.teste-section .section-intro', { origin: 'top', delay: 300 });
        sr.reveal('.teste-button-container', { origin: 'bottom', delay: 400 });
        sr.reveal('.teste-section .footnote', { origin: 'bottom', delay: 500 });
        sr.reveal('.cta-final h2', { origin: 'bottom', delay: 200 });
        sr.reveal('.cta-final p', { origin: 'bottom', delay: 300 });
        sr.reveal('.cta-final .cta-button', { origin: 'bottom', delay: 400, scale: 0.9 });

    } else { console.warn("ScrollReveal não carregado."); }

    const header = document.querySelector('.header');
    if (header) {
        let lastScrollTop = 0;
        window.addEventListener('scroll', () => {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > 50) { header.classList.add('scrolled'); }
            else { header.classList.remove('scrolled'); }
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        }, false);
    }

}); // Fim do DOMContentLoaded