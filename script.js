document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking a nav link
    const navLinks = document.querySelectorAll('.navbar-menu a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });
    
    // Highlight active section in navigation
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.navbar-menu a');
    
    function highlightNav() {
        let scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');
            
            if (
                scrollPosition >= sectionTop && 
                scrollPosition < sectionTop + sectionHeight
            ) {
                navItems.forEach(item => {
                    item.classList.remove('active');
                    if (sectionId && item.getAttribute('href') === `#${sectionId}`) {
                        item.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightNav);
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Add sticky navbar on scroll
    const navbar = document.querySelector('.navbar');
    
    function toggleStickyNav() {
        if (window.scrollY > 100) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    }
    
    window.addEventListener('scroll', toggleStickyNav);
    
    // Code highlighting effect
    const codeBlocks = document.querySelectorAll('.code-content, .sample-code');
    
    codeBlocks.forEach(block => {
        const code = block.querySelector('code');
        if (code) {
            const codeText = code.innerHTML;
            
            // Primitive syntax highlighting for JavaScript
            const highlightedCode = codeText
                // Keywords
                .replace(/\b(const|let|var|function|return|if|else|try|catch|for|while|import|export|from|class|extends|new|this)\b/g, '<span class="keyword">$1</span>')
                // Strings
                .replace(/(['"`])(.*?)\1/g, '<span class="string">$1$2$1</span>')
                // Comments
                .replace(/\/\/(.*)/g, '<span class="comment">\/\/$1</span>')
                // Numbers
                .replace(/\b(\d+)\b/g, '<span class="number">$1</span>')
                // Functions
                .replace(/(\w+)(\s*\()/g, '<span class="function">$1</span>$2')
                // React/JSX specific
                .replace(/(&lt;\/?)(\w+)/g, '$1<span class="tag">$2</span>')
                .replace(/\b(className|onClick|useState|React|ReactDOM)\b/g, '<span class="react">$1</span>');
            
            code.innerHTML = highlightedCode;
        }
    });
    
    // Add CSS for the syntax highlighting
    const style = document.createElement('style');
    style.textContent = `
        .keyword { color: #c678dd; }
        .string { color: #98c379; }
        .comment { color: #7f848e; font-style: italic; }
        .number { color: #d19a66; }
        .function { color: #61afef; }
        .tag { color: #e06c75; }
        .react { color: #56b6c2; }
    `;
    document.head.appendChild(style);
    
    // Animation for feature cards
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.feature-card, .use-case-card, .security-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animate');
            }
        });
    };
    
    // Add animation class
    const animationStyle = document.createElement('style');
    animationStyle.textContent = `
        .feature-card, .use-case-card, .security-card {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.5s ease, transform 0.5s ease;
        }
        
        .feature-card.animate, .use-case-card.animate, .security-card.animate {
            opacity: 1;
            transform: translateY(0);
        }
        
        .feature-card:nth-child(2), .use-case-card:nth-child(2), .security-card:nth-child(2) {
            transition-delay: 0.1s;
        }
        
        .feature-card:nth-child(3), .use-case-card:nth-child(3), .security-card:nth-child(3) {
            transition-delay: 0.2s;
        }
        
        .feature-card:nth-child(4), .use-case-card:nth-child(4) {
            transition-delay: 0.3s;
        }
        
        .feature-card:nth-child(5) {
            transition-delay: 0.4s;
        }
        
        .feature-card:nth-child(6) {
            transition-delay: 0.5s;
        }
    `;
    document.head.appendChild(animationStyle);
    
    window.addEventListener('scroll', animateOnScroll);
    // Trigger once on load
    animateOnScroll();
    
    // Add active class to navbar
    const addActiveClass = () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 0) {
            navbar.classList.add('active');
        } else {
            navbar.classList.remove('active');
        }
    };
    
    window.addEventListener('scroll', addActiveClass);
    addActiveClass(); // Call on load
    
    // Fix CSS for sticky navbar
    const navbarStyle = document.createElement('style');
    navbarStyle.textContent = `
        .navbar.sticky {
            background-color: rgba(255, 255, 255, 0.98);
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        
        .navbar.active {
            background-color: white;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
    `;
    document.head.appendChild(navbarStyle);
});