function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  // toggle aria-expanded for accessibility
  const expanded = icon.getAttribute('aria-expanded') === 'true';
  icon.setAttribute('aria-expanded', String(!expanded));
  }
  
document.addEventListener('DOMContentLoaded', () => {
  // Enhanced scroll reveal with stagger effect
  const reveals = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || index * 100;
        setTimeout(() => {
          entry.target.classList.add('is-visible');
        }, delay);
      }
    });
  }, {threshold: 0.1, rootMargin: '0px 0px -50px 0px'});
  
  reveals.forEach((r, index) => {
    r.dataset.delay = index * 150;
    obs.observe(r);
  });

  // Enhanced typing effect for role with more roles
  const typedEl = document.getElementById('typed-role');
  if (typedEl) {
    const roles = ['Software Engineering Graduand', 'IT Support Specialist', 'Mobile & Web Developer', 'Full‑stack Developer', 'Problem Solver'];
    let roleIndex = 0; let charIndex = 0; let deleting = false;
    const speed = 100;
    function tick(){
      const full = roles[roleIndex];
      if (!deleting) {
        typedEl.textContent = full.slice(0, ++charIndex);
        if (charIndex === full.length) { deleting = true; setTimeout(tick, 2000); return; }
      } else {
        typedEl.textContent = full.slice(0, --charIndex);
        if (charIndex === 0) { deleting = false; roleIndex = (roleIndex+1) % roles.length; }
      }
      setTimeout(tick, deleting ? speed/2 : speed);
    }
    setTimeout(tick, 500); // Start delay
  }

  // Enhanced header background on scroll with parallax effect
  const header = document.querySelector('nav');
  const progress = document.getElementById('scroll-progress');
  let lastScroll = 0;
  let ticking = false;
  
  function onScroll(){
    const currentScroll = window.scrollY;
    
    // Header background
    if(currentScroll > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    // Parallax effect for profile section
    const profileSection = document.getElementById('profile');
    if (profileSection && currentScroll < window.innerHeight) {
      const profilePic = profileSection.querySelector('.section__pic-container');
      if (profilePic) {
        const translateY = currentScroll * 0.3;
        profilePic.style.transform = `translateY(${translateY}px)`;
      }
    }

    // Scroll progress indicator
    if (progress) {
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docH > 0 ? (currentScroll / docH) * 100 : 0;
      progress.style.width = `${Math.min(100, Math.max(0, pct))}%`;
    }
    
    lastScroll = currentScroll;
  }
  
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        onScroll();
        ticking = false;
      });
      ticking = true;
    }
  }, {passive:true});
  onScroll(); // initial state

  // Enhanced smooth scroll for anchor links with offset
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (href.length > 1) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const headerHeight = header.offsetHeight;
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Contact form handler with validation and feedback
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const subject = document.getElementById('subject').value.trim() || 'Portfolio contact';
      const message = document.getElementById('message').value.trim();
      
      // Basic validation
      if (!name || !email || !message) {
        alert('Please fill in all required fields.');
        return;
      }
      
      if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
      }
      
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
      const mailto = `mailto:chethiyasankalpa456@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
      window.location.href = mailto;
      
      // Reset form
      contactForm.reset();
    });
  }
  
  // Email validation helper
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Add hover effect to cards
  const cards = document.querySelectorAll('.details-container');
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-12px) scale(1.02)';
    });
    card.addEventListener('mouseleave', function() {
      this.style.transform = '';
    });
  });

  // Add animation to social icons
  const socialIcons = document.querySelectorAll('#socials-container .icon');
  socialIcons.forEach((icon, index) => {
    icon.style.animationDelay = `${index * 0.1}s`;
  });
});
