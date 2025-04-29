// Script da Landing Page (script.js)
// Responsável pelas animações de scroll e comportamento do header.

document.addEventListener('DOMContentLoaded', () => {

    // --- Inicialização do ScrollReveal (Animações de Entrada) ---
    // Verifica se a biblioteca ScrollReveal foi carregada corretamente
    if (typeof ScrollReveal === 'function') {
        const sr = ScrollReveal({
            distance: '65px',         // Distância que o elemento se move
            duration: 1800,         // Duração da animação em ms
            easing: 'cubic-bezier(0.5, 0, 0, 1)', // Curva de aceleração
            reset: false,           // Animação ocorre apenas uma vez
            delay: 200              // Delay padrão antes da animação começar
        });

        // Aplica animações a elementos específicos com delays variados
        sr.reveal('.hero h2', { origin: 'bottom', delay: 200 });
        sr.reveal('.hero .subtitle', { origin: 'bottom', delay: 350 });
        sr.reveal('.hero-buttons', { origin: 'bottom', delay: 500 });

        sr.reveal('.section-title', { origin: 'top', delay: 200 });
        sr.reveal('.section-intro', { origin: 'top', delay: 300 });

        sr.reveal('.feature-item', { origin: 'bottom', interval: 150, delay: 400 }); // Intervalo entre itens

        sr.reveal('.stat-item', { origin: 'bottom', interval: 150, delay: 300 }); // Intervalo entre itens

        sr.reveal('.teste-section .section-title', { origin: 'top', delay: 200 });
        sr.reveal('.teste-section .section-intro', { origin: 'top', delay: 300 });
        sr.reveal('.teste-button-container', { origin: 'bottom', delay: 400 });
        sr.reveal('.teste-section .footnote', { origin: 'bottom', delay: 500 });

        sr.reveal('.cta-final h2', { origin: 'bottom', delay: 200 });
        sr.reveal('.cta-final p', { origin: 'bottom', delay: 300 });
        sr.reveal('.cta-final .cta-button', { origin: 'bottom', delay: 400, scale: 0.95 }); // Ajuste leve na escala inicial

    } else {
        // Aviso caso o ScrollReveal não seja carregado
        console.warn("A biblioteca ScrollReveal não foi carregada. As animações de scroll não funcionarão.");
    }

    // --- Comportamento do Header ao Rolar a Página ---
    const header = document.querySelector('.header');

    // Verifica se o elemento header existe na página
    if (header) {
        let lastScrollTop = 0; // Guarda a última posição de scroll

        window.addEventListener('scroll', () => {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            // Adiciona a classe 'scrolled' se o scroll for maior que 50px
            if (scrollTop > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }

            // Atualiza a última posição de scroll (pode ser usado para outras lógicas, como esconder/mostrar header)
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;

        }, false); // O 'false' é o padrão para useCapture
    }

}); // Fim do DOMContentLoaded