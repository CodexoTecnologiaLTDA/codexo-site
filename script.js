document.addEventListener('DOMContentLoaded', () => {

    // LÓGICA PARA O MENU HAMBURGER (MOBILE)
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Troca o ícone de barras para 'X' e vice-versa
        const icon = hamburger.querySelector('i');
        if (icon.classList.contains('fa-bars')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // LÓGICA PARA ANIMAÇÃO AO ROLAR (SCROLL)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1 // A animação começa quando 10% do elemento está visível
    });

    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    elementsToAnimate.forEach(el => observer.observe(el));

    // LÓGICA SIMPLES PARA O FORMULÁRIO DE CONTATO
    /*const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Impede o recarregamento da página
        alert('Obrigado pelo seu contato! Retornaremos em breve.');
        contactForm.reset(); // Limpa o formulário
    });*/

    // LÓGICA DE RETORNO FORMSPREE
    document.querySelector('.contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        var form = this;
        fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
            headers: { 'Accept': 'application/json' }
        }).then(function(response) {
            if (response.ok) {
                alert('Obrigado pelo seu contato! Retornaremos em breve!');
                form.reset();
            } else {
                alert('Ocorreu um erro ao enviar. Tente novamente.');
            }
        });
    });

});