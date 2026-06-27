/* =========================================================
   NOIR & BLOOM — INTERACTIONS
========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- LOADER ---------- */
  const loader = document.getElementById('loader');
  window.addEventListener('load', () => {
    setTimeout(() => loader.classList.add('is-hidden'), 350);
  });
  // fallback in case 'load' already fired
  setTimeout(() => loader && loader.classList.add('is-hidden'), 1600);

  /* ---------- NAVBAR SCROLL STATE ---------- */
  const navbar = document.getElementById('navbar');
  const onScrollNav = () => {
    navbar.classList.toggle('is-scrolled', window.scrollY > 60);
  };
  onScrollNav();
  window.addEventListener('scroll', onScrollNav, { passive: true });

  /* ---------- MOBILE MENU ---------- */
  const burger = document.getElementById('burger');
  const navLinks = document.getElementById('navLinks');
  burger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', String(isOpen));
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---------- HERO PARALLAX ---------- */
  const heroBg = document.querySelector('.hero__bg');
  const hero = document.querySelector('.hero');
  if (heroBg && hero) {
    window.addEventListener('scroll', () => {
      const offset = window.scrollY;
      if (offset < hero.offsetHeight) {
        heroBg.style.transform = `scale(1.08) translateY(${offset * 0.18}px)`;
      }
    }, { passive: true });
  }

  /* ---------- SCROLL INDICATOR CLICK ---------- */
  const scrollIndicator = document.getElementById('scrollIndicator');
  scrollIndicator?.addEventListener('click', () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  });

  /* ---------- SCROLL REVEAL ---------- */
  const revealEls = document.querySelectorAll('[data-reveal]');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => revealObserver.observe(el));

  /* ---------- ANIMATED STAT COUNTERS ---------- */
  const statEls = document.querySelectorAll('.stat__num');
  const animateCount = (el) => {
    const target = parseInt(el.dataset.count, 10);
    const duration = 1600;
    const start = performance.now();
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target).toLocaleString();
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target.toLocaleString();
    };
    requestAnimationFrame(step);
  };
  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        statObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  statEls.forEach(el => statObserver.observe(el));

  /* ---------- TESTIMONIAL CAROUSEL ---------- */
  const track = document.getElementById('testimonialTrack');
  const dotsWrap = document.getElementById('testimonialDots');
  if (track && dotsWrap) {
    const slides = track.children.length;
    let current = 0;

    for (let i = 0; i < slides; i++) {
      const dot = document.createElement('button');
      dot.setAttribute('aria-label', `Go to testimonial ${i + 1}`);
      if (i === 0) dot.classList.add('is-active');
      dot.addEventListener('click', () => goTo(i));
      dotsWrap.appendChild(dot);
    }

    function goTo(index) {
      current = index;
      track.style.transform = `translateX(-${current * 100}%)`;
      [...dotsWrap.children].forEach((d, i) => d.classList.toggle('is-active', i === current));
    }

    let autoplay = setInterval(() => goTo((current + 1) % slides), 5500);
    track.parentElement.addEventListener('mouseenter', () => clearInterval(autoplay));
    track.parentElement.addEventListener('mouseleave', () => {
      autoplay = setInterval(() => goTo((current + 1) % slides), 5500);
    });
  }

  /* ---------- RIPPLE BUTTON EFFECT ---------- */
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.remove('is-rippling');
      // restart animation
      requestAnimationFrame(() => btn.classList.add('is-rippling'));
      setTimeout(() => btn.classList.remove('is-rippling'), 650);
    });
  });

  /* ---------- ADD TO CART FEEDBACK ---------- */
  document.querySelectorAll('.btn--icon').forEach(btn => {
    const original = btn.textContent;
    btn.addEventListener('click', () => {
      btn.textContent = 'Added ✓';
      btn.style.background = 'var(--success)';
      btn.style.color = '#fff';
      btn.style.borderColor = 'var(--success)';
      setTimeout(() => {
        btn.textContent = original;
        btn.style.background = '';
        btn.style.color = '';
        btn.style.borderColor = '';
      }, 1600);
    });
  });

  /* ---------- NEWSLETTER FORM ---------- */
  const newsletterForm = document.getElementById('newsletterForm');
  const newsletterNote = document.getElementById('newsletterNote');
  newsletterForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    newsletterNote.textContent = 'Thank you — welcome to the inner circle.';
    newsletterForm.reset();
  });

  /* ---------- CONTACT FORM ---------- */
  const contactForm = document.getElementById('contactForm');
  const contactNote = document.getElementById('contactNote');
  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    contactNote.textContent = 'Message sent — we\'ll reply within one business day.';
    contactForm.reset();
  });

  /* ---------- BACK TO TOP ---------- */
  const backToTop = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('is-visible', window.scrollY > 600);
  }, { passive: true });
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

});
