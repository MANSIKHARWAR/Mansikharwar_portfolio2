// Wait for the DOM to load completely
document.addEventListener('DOMContentLoaded', () => {

    // Toggle Mobile Menu Navigation Matrix
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('nav');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        // Simple icon transformation toggle
        const icon = menuToggle.querySelector('i');
        if (icon.classList.contains('fa-bars')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });

    // Handle Active Link Highlights on Scrolling Events
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Evaluates active region dynamically minus nav offset padding
            if (window.scrollY >= (sectionTop - 150)) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(currentSectionId)) {
                link.classList.add('active');
            }
        });

        // Close mobile nav menu gracefully upon click-scroll events
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });

    // Contact Form Interactive Intercept
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const userName = document.getElementById('name').value;
        const userEmail = document.getElementById('email').value;
        
        // Custom message confirmation instead of direct database routing defaults
        alert(`Thank you for reaching out, ${userName}! Your message was processed successfully. Mansi will get back to you at ${userEmail}.`);
        contactForm.reset();
    });
});
// Add this inside your existing document.addEventListener('DOMContentLoaded', () => { ... })

const words = ["CSE-AI Student", "Tech Enthusiast", "Full-Stack Developer"];
let i = 0;
let timer;

function typingEffect() {
    let word = words[i].split("");
    var loopTyping = function() {
        if (word.length > 0) {
            document.querySelector('.typing-text').innerHTML += word.shift();
        } else {
            setTimeout(deletingEffect, 2000);
            return false;
        }
        timer = setTimeout(loopTyping, 100);
    };
    loopTyping();
}

function deletingEffect() {
    let word = words[i].split("");
    var loopDeleting = function() {
        if (word.length > 0) {
            word.pop();
            document.querySelector('.typing-text').innerHTML = word.join("");
        } else {
            if (words.length > (i + 1)) {
                i++;
            } else {
                i = 0;
            }
            setTimeout(typingEffect, 500);
            return false;
        }
        timer = setTimeout(loopDeleting, 60);
    };
    loopDeleting();
}

// Initialize the striking text rotation execution
typingEffect();
// Tab Switching Controller Matrix Engine
const tabControls = document.querySelectorAll('.tab-control');
const techPanels = document.querySelectorAll('.tech-panel');

tabControls.forEach(control => {
    control.addEventListener('click', () => {
        // Step 1: Remove active styling hooks from all selectors
        tabControls.forEach(btn => btn.classList.remove('active'));
        techPanels.forEach(panel => panel.classList.remove('active'));

        // Step 2: Establish active target properties on matching arrays
        control.classList.add('active');
        const targetId = control.getAttribute('data-target');
        const targetPanel = document.getElementById(targetId);
        
        if (targetPanel) {
            targetPanel.classList.add('active');
        }
    });
});
// --- Interactive Custom Cursor Engine ---

document.addEventListener('DOMContentLoaded', () => {
    const cursorDot = document.querySelector('.custom-cursor-dot');
    const cursorOutline = document.querySelector('.custom-cursor-outline');

    if (cursorDot && cursorOutline) {
        // Step 1: Track mouse coordinates globally across viewports
        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            // The outline tracking benefits beautifully from the slight CSS linear transition lag
            cursorOutline.style.left = `${posX}px`;
            cursorOutline.style.top = `${posY}px`;
        });

        // Step 2: Detect interactive intersections to activate the "Attention-Seeker" expansion
        const interactiveElements = document.querySelectorAll('a, button, input, textarea, .tab-control, .anchor-card');

        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                document.body.classList.add('cursor-hovering');
            });
            
            element.addEventListener('mouseleave', () => {
                document.body.classList.remove('cursor-hovering');
            });
        });
    }
});