// ========================================
// LOADING SCREEN ANIMATION
// ========================================
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    const mainPage = document.getElementById('main-page');
    
    // Hide loading screen after 4 seconds
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        mainPage.classList.add('visible');
    }, 4000);
});

// ========================================
// MOBILE PROJECTS CAROUSEL CENTER HIGHLIGHT
// ========================================
function updateCenterCard() {
    if (window.innerWidth <= 768) {
        const projectsGrid = document.querySelector('.projects-grid');
        const projectCards = document.querySelectorAll('.project-card');
        
        if (projectsGrid && projectCards.length > 0) {
            const scrollLeft = projectsGrid.scrollLeft;
            const containerCenter = scrollLeft + projectsGrid.offsetWidth / 2;
            
            projectCards.forEach(card => {
                const cardLeft = card.offsetLeft;
                const cardCenter = cardLeft + card.offsetWidth / 2;
                const distance = Math.abs(containerCenter - cardCenter);
                
                if (distance < card.offsetWidth / 2) {
                    card.classList.add('center-card');
                } else {
                    card.classList.remove('center-card');
                }
            });
        }
    }
}

// Initialize on load
window.addEventListener('load', () => {
    setTimeout(updateCenterCard, 100);
});

// Update on scroll
const projectsGrid = document.querySelector('.projects-grid');
if (projectsGrid) {
    projectsGrid.addEventListener('scroll', updateCenterCard);
}

// Update on window resize
window.addEventListener('resize', updateCenterCard);

// ========================================
// MOBILE NAVIGATION DROPDOWN
// ========================================
const dropdownToggle = document.querySelector('.nav-dropdown-toggle');
const dropdownMenu = document.querySelector('.nav-dropdown-menu');

if (dropdownToggle && dropdownMenu) {
    dropdownToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdownMenu.classList.toggle('active');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-dropdown')) {
            dropdownMenu.classList.remove('active');
        }
    });

    // Close dropdown when clicking on a link
    const dropdownLinks = dropdownMenu.querySelectorAll('.nav-link');
    dropdownLinks.forEach(link => {
        link.addEventListener('click', () => {
            dropdownMenu.classList.remove('active');
        });
    });
}

// ========================================
// SMOOTH SCROLL NAVIGATION
// ========================================
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80; // 80px offset for fixed header
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// ACTIVE SECTION HIGHLIGHTING
// ========================================
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 100; // 100px trigger offset
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// ========================================
// TYPING EFFECT
// ========================================
const typingText = document.querySelector('.typing-text');
const texts = [
    'Full-Stack MERN Developer',
    'Flutter Developer',
    'React Native Developer',
    'Robotics Engineer',
    'AI/ML Enthusiast'
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100; // 100ms per character
let deletingSpeed = 50; // 50ms per character

function type() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
        // Deleting characters
        typingText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = deletingSpeed;
        
        if (charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typingSpeed = 500; // Pause before typing next word
        }
    } else {
        // Typing characters
        typingText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
        
        if (charIndex === currentText.length) {
            isDeleting = true;
            typingSpeed = 1000; // 1-second pause when complete
        }
    }
    
    setTimeout(type, typingSpeed);
}

// Start typing effect after loading screen
setTimeout(() => {
    type();
}, 4000);

// ========================================
// SCROLL REVEAL ANIMATIONS
// ========================================
const revealElements = document.querySelectorAll(
    '.home-container, .about-container, .projects-container, .achievements-container, .services-container, .contact-container'
);

function reveal() {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        const revealPoint = 150; // 150px before element enters viewport
        
        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('reveal');
        }
    });
}

window.addEventListener('scroll', reveal);
// Initial check on page load
setTimeout(() => {
    reveal();
}, 4100);

// ========================================
// BACK TO TOP BUTTON
// ========================================
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ========================================
// CARD HOVER ANIMATIONS
// ========================================
const projectCards = document.querySelectorAll('.project-card');
const skillCards = document.querySelectorAll('.c1');
const serviceCards = document.querySelectorAll('.service-card');
const achievementCards = document.querySelectorAll('.achievement-card');

// Project Cards Hover
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-8px) scale(1.05)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Skill Cards Hover
skillCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-8px) scale(1.05)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Service Cards Hover
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-8px) scale(1.05)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Achievement Cards Hover
achievementCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// ========================================
// EMAILJS FORM SUBMISSION
// ======================================== 
// Initialize EmailJS with your Public Key
(function() {
    emailjs.init("1ewkjiNtyXHZa_U-b");
})();

const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Show loading message
    formStatus.style.display = 'block';
    formStatus.textContent = 'Sending...';
    formStatus.style.color = 'var(--purple-primary)';
    
    // Send email using EmailJS
    emailjs.sendForm(
        'service_fq71jzq',
        'template_wl6tuf9',
        contactForm
    )
    .then(() => {
        formStatus.textContent = '✓ Message sent successfully! I\'ll get back to you soon.';
        formStatus.style.color = '#10b981';
        contactForm.reset();
        
        // Hide status after 5 seconds
        setTimeout(() => {
            formStatus.style.display = 'none';
        }, 5000);
    })
    .catch((error) => {
        formStatus.textContent = '✗ Failed to send message. Please try again or email directly.';
        formStatus.style.color = '#ef4444';
        console.error('EmailJS Error:', error);
    });
});

// ========================================
// FOOTER NAVIGATION SMOOTH SCROLL
// ========================================
const footerLinks = document.querySelectorAll('.footer-nav a');

footerLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// PREVENT HORIZONTAL SCROLL
// ========================================
document.body.style.overflowX = 'hidden';
document.documentElement.style.overflowX = 'hidden';
