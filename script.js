// Mobile Navigation
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links a');

burger.addEventListener('click', () => {
    // Toggle Nav
    nav.classList.toggle('active');
    burger.classList.toggle('active');

    // Animate Links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
});

// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Check for saved theme preference or use the system preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark' || (!savedTheme && prefersDarkScheme.matches)) {
    body.classList.add('dark-theme');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    
    // Save the preference to localStorage
    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu if open
            nav.classList.remove('active');
            burger.classList.remove('active');
        }
    });
});

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.classList.remove('scrolled');
        return;
    }
    
    if (currentScroll > lastScroll && !nav.classList.contains('active')) {
        // Scrolling down
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        navbar.style.transform = 'translateY(0)';
        navbar.classList.add('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Menu Category Filtering
const categoryButtons = document.querySelectorAll('.category-btn');
const menuItems = document.querySelectorAll('.menu-item');

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const category = button.getAttribute('data-category');
        
        menuItems.forEach(item => {
            if (category === 'all' || item.getAttribute('data-category') === category) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, 100);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Form Validation
const form = document.querySelector('.reservation-form');
const inputs = form.querySelectorAll('input');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
    
    if (isValid) {
        // Simulate form submission
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
        
        setTimeout(() => {
            submitButton.textContent = 'Reservation Sent!';
            form.reset();
            
            setTimeout(() => {
                submitButton.disabled = false;
                submitButton.textContent = originalText;
            }, 2000);
        }, 1500);
    }
});

// Input Focus Effects
inputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', () => {
        if (!input.value) {
            input.parentElement.classList.remove('focused');
        }
    });
});

// Scroll to Top Button
const scrollButton = document.createElement('button');
scrollButton.className = 'scroll-to-top';
scrollButton.innerHTML = '↑';
document.body.appendChild(scrollButton);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollButton.classList.add('visible');
    } else {
        scrollButton.classList.remove('visible');
    }
});

scrollButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.menu-item, .section').forEach(element => {
    observer.observe(element);
});

// Operating Hours
const operatingHours = {
    weekdays: { open: 11, close: 22 },
    weekends: { open: 10, close: 23 }
};

function updateOperatingStatus() {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();
    const isWeekend = day === 0 || day === 6;
    const hours = isWeekend ? operatingHours.weekends : operatingHours.weekdays;
    
    const statusElement = document.querySelector('.operating-status');
    if (statusElement) {
        const isOpen = hour >= hours.open && hour < hours.close;
        statusElement.innerHTML = `
            <div class="status-indicator ${isOpen ? 'open' : 'closed'}">
                <span class="dot"></span>
                <span>${isOpen ? 
                    `We're open! Come in today until ${hours.close}:00` : 
                    `We're closed. We open again at ${hours.open}:00`}
                </span>
            </div>
        `;
    }
}

// Update status every minute
setInterval(updateOperatingStatus, 60000);
updateOperatingStatus();

// Hero Text Animation
const heroText = document.querySelector('.hero-content');
if (heroText) {
    const words = heroText.querySelector('h1').textContent.split(' ');
    heroText.querySelector('h1').innerHTML = words.map(word => 
        `<span style="opacity: 0;">${word}</span>`
    ).join(' ');
    
    const spans = heroText.querySelectorAll('h1 span');
    spans.forEach((span, index) => {
        setTimeout(() => {
            span.style.opacity = '1';
            span.style.animation = 'fadeIn 0.5s ease forwards';
        }, index * 200);
    });
}

// Daily Specials
const dailySpecials = [
    {
        name: "Chef's Special Pasta",
        price: "$24",
        description: "Handmade pasta with truffle cream sauce and wild mushrooms"
    },
    {
        name: "Grilled Octopus",
        price: "$28",
        description: "Tender octopus with smoked paprika and lemon aioli"
    },
    {
        name: "Lobster Risotto",
        price: "$32",
        description: "Creamy arborio rice with fresh lobster and saffron"
    }
];

function displayDailySpecials() {
    const specialsContainer = document.querySelector('.daily-specials');
    if (specialsContainer) {
        // Shuffle array and pick 2-3 items
        const shuffled = dailySpecials.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, Math.floor(Math.random() * 2) + 2);
        
        specialsContainer.innerHTML = selected.map(special => `
            <div class="special-item">
                <h4>${special.name} <span class="price">${special.price}</span></h4>
                <p>${special.description}</p>
            </div>
        `).join('');
    }
}

// Initialize daily specials
displayDailySpecials();

// Scroll to Top Button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.innerHTML = '↑';
scrollToTopBtn.setAttribute('aria-label', 'Scroll to top');
document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}); 