// Theme Toggle Functionality
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
body.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    themeIcon.textContent = theme === 'light' ? '🌙' : '☀️';
    themeToggle.setAttribute('aria-label', `Switch to ${theme === 'light' ? 'dark' : 'light'} mode`);
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            // Use different offset for mobile vs desktop
            const headerOffset = window.innerWidth <= 768 ? 150 : 80;
            const elementPosition = target.offsetTop;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Contact Form Handling with Toast Notifications
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // Basic form validation
        if (!name || !email || !message) {
            showToast('Please fill in all fields.', 'error');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showToast('Please enter a valid email address.', 'error');
            return;
        }

        // Show loading state
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;

        // Submit to Formspree using fetch API
      fetch('https://formspree.io/f/xvgdlnrg?noRedirect=1', {
  method: 'POST',
  body: formData,
  headers: {
      'Accept': 'application/json'
  }
})
.then(response => {
            
            return response.json().then(data => {
                if (data.ok) {
                    showToast('Your message has been sent successfully! I\'ll get back to you soon.', 'success');
                    contactForm.reset();
                } else {
                    throw new Error(data.error || 'Form submission failed');
                }
            });
        }).catch(error => {
            showToast('Sorry, there was an error sending your message. Please try again or contact me directly at sinujalal@gmail.com.', 'error');
        }).finally(() => {
            // Reset button state
            submitBtn.textContent = originalText;
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
        });
        });
    } else {
    }
});

// Toast notification function
function showToast(message, type = 'success') {
    
    // Remove any existing toasts
    const existingToasts = document.querySelectorAll('.toast');
    existingToasts.forEach(toast => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    });

    // Create new toast
    const toast = document.createElement('div');
    toast.className = `toast ${type === 'error' ? 'error' : ''}`;
    toast.innerHTML = `
        <span class="toast-icon">${type === 'error' ? '✗' : '✓'}</span>
        <span class="toast-message">${message}</span>
    `;

    // Add to page
    document.body.appendChild(toast);

    // Show toast with delay to ensure DOM is ready
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    // Hide toast after 5 seconds
    setTimeout(() => {
        if (toast) {
            toast.classList.remove('show');
            setTimeout(() => {
                if (toast && toast.parentNode) {
                    toast.remove();
                }
            }, 300);
        }
    }, 5000);
}

// Intersection Observer for Fade-in Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe all sections for animation
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Add loading animation to page
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Mobile Navigation Toggle (if needed in future)
function initMobileNav() {
    const nav = document.querySelector('.nav-links');
    const toggle = document.createElement('button');
    toggle.className = 'mobile-nav-toggle';
    toggle.innerHTML = '☰';
    toggle.style.display = 'none';

    document.querySelector('.nav-container').insertBefore(toggle, nav);

    toggle.addEventListener('click', () => {
        nav.classList.toggle('mobile-nav-open');
    });

    // Close menu when clicking on menu items
    const menuItems = nav.querySelectorAll('a');
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('mobile-nav-open');
        });
    });

    // Show mobile toggle on small screens
    function checkScreenSize() {
        if (window.innerWidth <= 768) {
            toggle.style.display = 'block';
            nav.classList.add('mobile-nav');
        } else {
            toggle.style.display = 'none';
            nav.classList.remove('mobile-nav', 'mobile-nav-open');
        }
    }

    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();
}

// Initialize mobile navigation
initMobileNav();

// Add some interactive effects to skill tags
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });

    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Add click tracking for project links (placeholder for analytics)
document.querySelectorAll('.project-links a, .writing-card a').forEach(link => {
    link.addEventListener('click', function(e) {
        // Here you could add analytics tracking
    });
});

// Keyboard navigation improvements
document.addEventListener('keydown', (e) => {
    // Close mobile nav with Escape key
    if (e.key === 'Escape') {
        document.querySelector('.nav-links')?.classList.remove('mobile-nav-open');
    }
});

// Performance optimization: Lazy load images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
lazyLoadImages();