/**
 * Second Chance Physics – Landing Page Interactivity
 * – Intersection Observer for scroll‑triggered reveals
 * – Staggered delays for children (60–120ms increments)
 * – Hero animation staggered on load (logical entry order)
 * – Smooth scroll for anchor links
 * – Zero DOM modifications to app.html
 */

(function () {
  // Elements that should animate into view
  const revealElements = document.querySelectorAll(
    '.feature-item, .step, .pricing-card, .demo-container, .hero-text, .hero-preview'
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          // Determine delay based on sibling order among same‑type siblings
          const parent = target.parentNode;
          const siblings = Array.from(parent.children).filter((el) =>
            el.classList.contains('reveal') || el === target
          );
          const index = siblings.indexOf(target);
          const delay = index >= 0 ? index * 90 + 60 : 60; // 60–120ms steps
          target.style.transitionDelay = `${delay}ms`;
          target.classList.add('visible');
          observer.unobserve(target);
        }
      });
    },
    { threshold: 0.2 }
  );

  revealElements.forEach((el) => {
    // Ensure the reveal class exists (some already have it in HTML)
    el.classList.add('reveal');
    observer.observe(el);
  });

  // Smooth scrolling for in‑page links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
})();
