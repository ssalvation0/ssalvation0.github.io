
function initializeWebsite() {

    /**
     * Ініціалізує налаштування для Lightbox (швидкість анімації).
     */
    function initLightboxOptions() {
        if (typeof lightbox !== 'undefined') {
            lightbox.option({
                'fadeDuration': 300,
                'resizeDuration': 400,
            });
        }
    }

    /**
     * Ініціалізує логіку приховування хедера при скролі.
     */
    function initHeaderScroll() {
        const header = document.querySelector('.header');
        if (!header) return;

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

    /**
     * Ініціалізує анімацію появи елементів при скролі за допомогою IntersectionObserver.
     */
    function initScrollAnimations() {
        const elementsToAnimate = document.querySelectorAll('.fade-in-element');
        if (elementsToAnimate.length === 0) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        elementsToAnimate.forEach(element => { observer.observe(element); });
    }

    /**
     * Ініціалізує роботу мобільного (гамбургер) меню.
     */
    function initMobileMenu() {
        const hamburgerBtn = document.querySelector('.hamburger-btn');
        const navList = document.querySelector('.main-nav-list');
        if (hamburgerBtn && navList) {
            hamburgerBtn.addEventListener('click', () => {
                navList.classList.toggle('nav-open');
            });
        }
    }

    /**
     * Ініціалізує перемикач світлої/темної теми та зберігає вибір користувача.
     */
    function initThemeSwitcher() {
        const themeSwitcherBtn = document.querySelector('.theme-switcher-btn');
        if (!themeSwitcherBtn) return;
        
        const body = document.body;
        const applyTheme = (theme) => {
            body.classList.remove('dark-theme', 'light-theme');
            body.classList.add(theme);
            localStorage.setItem('theme', theme);
        };

        const savedTheme = localStorage.getItem('theme') || 'light-theme';
        applyTheme(savedTheme);

        themeSwitcherBtn.addEventListener('click', () => {
            const newTheme = body.classList.contains('light-theme') ? 'dark-theme' : 'light-theme';
            applyTheme(newTheme);
        });
    }

    // --- Послідовний виклик усіх ініціалізаційних функцій ---
    initLightboxOptions();
    initHeaderScroll();
    initScrollAnimations();
    initMobileMenu();
    initThemeSwitcher();
}

// Додати обробник події для завантаження сторінки, щоб приховати лоадер
window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    if (loader) {
      loader.style.opacity = '0';
      loader.style.transition = 'opacity 0.3s ease';
      setTimeout(() => loader.remove(), 300);
    }
  });
document.addEventListener("DOMContentLoaded", initializeWebsite);