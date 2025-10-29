document.addEventListener('DOMContentLoaded', () => {
    ['navToggle', 'navToggle2', 'navToggle3', 'navToggle4', 'navToggle5', 'navToggle6'].forEach(id => {
        const btn = document.getElementById(id);
        const navId = 'mainNav' + (id === 'navToggle' ? '' : id.replace('navToggle', ''));
        const nav = document.getElementById(navId) || document.querySelector('.nav');
        if (btn && nav) {
            btn.addEventListener('click', () => {
                nav.style.display = (nav.style.display === 'flex' || nav.style.display === '') ? 'none' : 'flex';
            });
        }
    });

    document.querySelectorAll('.nav a').forEach(a => {
        a.addEventListener('click', () => {
            const nav = document.querySelector('.nav');
            if (window.innerWidth < 640 && nav) nav.style.display = 'none';
        });
    });

    document.querySelectorAll('.hero-video').forEach(v => {
        v.addEventListener('error', () => {
            const hero = v.closest('.hero');
            if (hero) hero.classList.add('no-video');
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });

});



