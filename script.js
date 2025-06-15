document.addEventListener("DOMContentLoaded", function() {

    // --- Скрипт для анімації приховування хедера ---
    const header = document.querySelector('.header');
    if (header) {
        let lastScrollTop = 0;
        window.addEventListener('scroll', function() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop && scrollTop > header.offsetHeight) {
                header.classList.add('header-hidden');
            } else {
                header.classList.remove('header-hidden');
            }
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        });
    }

    // --- Скрипт для анімації появи елементів ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, { threshold: 0.1 });

    const elementsToAnimate = document.querySelectorAll('.fade-in-element');
    elementsToAnimate.forEach(element => { observer.observe(element); });

    // --- Скрипт для Гамбургер-меню ---
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const navList = document.querySelector('.main-nav-list');
    if (hamburgerBtn && navList) {
        hamburgerBtn.addEventListener('click', () => {
            navList.classList.toggle('nav-open');
        });
    }

    // --- Скрипт для перемикача теми ---
    const themeSwitcherBtn = document.querySelector('.theme-switcher-btn');
    const body = document.body;

    const applyTheme = (theme) => {
        body.classList.remove('dark-theme', 'light-theme');
        body.classList.add(theme);
        localStorage.setItem('theme', theme);
    };

    const savedTheme = localStorage.getItem('theme') || 'light-theme';
    applyTheme(savedTheme);

    // Обробник кліку на кнопку
    if (themeSwitcherBtn) {
        themeSwitcherBtn.addEventListener('click', () => {
            const newTheme = body.classList.contains('light-theme') ? 'dark-theme' : 'light-theme';
            applyTheme(newTheme);
        });
    }

});