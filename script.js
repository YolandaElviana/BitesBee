// Sticky Header
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile Menu Toggle
const mobileMenu = () => {
    const menuBtn = document.createElement('button');
    menuBtn.className = 'mobile-menu-btn';
    menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    
    const nav = document.querySelector('.nav-container');
    nav.appendChild(menuBtn);

    menuBtn.addEventListener('click', () => {
        const menu = document.querySelector('.nav-menu');
        menu.classList.toggle('active');
        menuBtn.innerHTML = menu.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : 
            '<i class="fas fa-bars"></i>';
    });
};

// Product Cards Animation
const animateProducts = () => {
    const products = document.querySelectorAll('.product-grid > div');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.1 });

    products.forEach(product => observer.observe(product));
};

// ... existing code ...

// Testimonial Slider
class TestimonialSlider {
    constructor() {
        this.slider = document.querySelector('.testimonial-slider');
        // Menghilangkan animasi dengan tidak menginisialisasi autoplay
        if (this.slider) {
            this.updateSlider(); // Hanya mengatur posisi awal
        }
    }

    updateSlider() {
        this.slider.style.transform = 'translateX(0%)'; // Tetap di posisi awal
    }
}

// ... existing code ...

// Loading Animation
const showLoadingAnimation = () => {
    const loader = document.createElement('div');
    loader.className = 'loader';
    loader.innerHTML = '<div class="bee-loader"></div>';
    document.body.appendChild(loader);

    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => loader.remove(), 500);
        }, 1000);
    });
};

// Initialize all features
document.addEventListener('DOMContentLoaded', () => {
    mobileMenu();
    animateProducts();
    new TestimonialSlider();
    showLoadingAnimation();
});

// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    if (hero) {
        hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
    }
});

// Form Validation for Contact Form (if exists)
const validateForm = (form) => {
    const inputs = form.querySelectorAll('input, textarea');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });

    return isValid;
};

// Add to Cart Animation
const addToCartAnimation = (button) => {
    button.classList.add('adding');
    setTimeout(() => {
        button.classList.remove('adding');
        button.classList.add('added');
        setTimeout(() => button.classList.remove('added'), 2000);
    }, 1000);
};