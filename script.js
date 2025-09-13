// script.js

document.addEventListener('DOMContentLoaded', () => {
    console.log('Presentación FE-NIX MUSIC inicializada y completa.');

    // --- Lógica del Acordeón ---
    const accordionButtons = document.querySelectorAll('.accordion-button');
    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const parentAccordion = button.closest('.accordion-layout');
            if (parentAccordion) {
                parentAccordion.querySelectorAll('.accordion-button').forEach(otherButton => {
                    if (otherButton !== button && otherButton.classList.contains('active')) {
                        otherButton.classList.remove('active');
                        otherButton.nextElementSibling.style.maxHeight = null;
                    }
                });
            }

            button.classList.toggle('active');
            const content = button.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });

    // --- Lógica para animaciones al hacer scroll ---
    const sectionsToFadeIn = document.querySelectorAll('.fade-in-section');
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.05 };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    sectionsToFadeIn.forEach(section => observer.observe(section));
});
