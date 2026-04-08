/* ============================================================
   KIC POWERBAND — Shopify Theme JS
   Version: 1.0.0
   ============================================================ */

(function () {
  'use strict';

  // ── 1. Sticky Header ──────────────────────────────────────
  const header = document.getElementById('site-header');
  if (header) {
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ── 2. Mobile Menu ────────────────────────────────────────
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu   = document.getElementById('mobile-menu');

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
      mobileMenu.setAttribute('aria-hidden', !isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!header.contains(e.target) && mobileMenu.classList.contains('open')) {
        mobileMenu.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }
    });

    // Mobile accordion nav parents
    document.querySelectorAll('.mobile-nav-parent').forEach((btn) => {
      btn.addEventListener('click', () => {
        const children = btn.nextElementSibling;
        const isOpen   = children.classList.toggle('open');
        btn.setAttribute('aria-expanded', isOpen);
        const chevron = btn.querySelector('.chevron');
        if (chevron) chevron.style.transform = isOpen ? 'rotate(180deg)' : '';
      });
    });
  }

  // ── 3. Desktop Dropdown ───────────────────────────────────
  document.querySelectorAll('.has-dropdown > .nav-link').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const item    = btn.closest('.nav-item');
      const dropdown = item.querySelector('.nav-dropdown');
      const isOpen   = item.classList.toggle('force-open');
      btn.setAttribute('aria-expanded', isOpen);
      if (dropdown) { dropdown.style.opacity = isOpen ? '1' : ''; dropdown.style.pointerEvents = isOpen ? 'all' : ''; }
    });
  });

  // ── 4. Language Picker ────────────────────────────────────
  const langPicker = document.getElementById('lang-picker');
  if (langPicker) {
    const btn = langPicker.querySelector('.lang-picker-btn');
    btn && btn.addEventListener('click', () => {
      const isOpen = langPicker.classList.toggle('open');
      btn.setAttribute('aria-expanded', isOpen);
    });
    document.addEventListener('click', (e) => {
      if (!langPicker.contains(e.target)) langPicker.classList.remove('open');
    });
    // Auto-submit on language selection
    langPicker.querySelectorAll('.lang-option').forEach((opt) => {
      opt.addEventListener('click', () => {
        opt.closest('form') && opt.closest('form').submit();
      });
    });
  }

  // ── 5. Product Filter Tabs ────────────────────────────────
  const tabs    = document.querySelectorAll('.product-tab');
  const cards   = document.querySelectorAll('.product-card');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const filter = tab.dataset.filter;

      tabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');

      cards.forEach((card) => {
        const match = filter === 'all' || card.dataset.category === filter;
        card.dataset.hidden = match ? 'false' : 'true';
        card.style.display  = match ? '' : 'none';

        // Re-trigger animation for visible cards
        if (match) {
          card.classList.remove('in-view');
          requestAnimationFrame(() => card.classList.add('in-view'));
        }
      });
    });
  });

  // ── 6. Scroll Reveal (IntersectionObserver) ───────────────
  const revealEls = document.querySelectorAll('.animate-on-scroll');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('in-view'));
  }

  // ── 7. Counter Animation ──────────────────────────────────
  function animateCount(el, target, suffix) {
    const dur   = 1800;
    let   start = null;

    function step(ts) {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / dur, 1);
      const eased    = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target) + (suffix || '');
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  const counterEls = document.querySelectorAll('[data-count]');
  if (counterEls.length && 'IntersectionObserver' in window) {
    const counterIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el     = entry.target;
            const target = parseFloat(el.dataset.count);
            const suffix = el.dataset.suffix || '';
            if (!isNaN(target)) animateCount(el, target, suffix);
            counterIO.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );
    counterEls.forEach((el) => counterIO.observe(el));
  }

  // ── 8. Smooth Scroll for anchor links ─────────────────────
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const id     = link.getAttribute('href').slice(1);
      const target = id && document.getElementById(id);
      if (target) {
        e.preventDefault();
        const offset = (header ? header.offsetHeight : 0) + 16;
        const top    = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
        // Close mobile menu if open
        if (mobileMenu) {
          mobileMenu.classList.remove('open');
          if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'false');
          document.body.style.overflow = '';
        }
      }
    });
  });

  // ── 9. Active Nav link on scroll ──────────────────────────
  const sections   = document.querySelectorAll('section[id]');
  const navLinks   = document.querySelectorAll('.nav-link');

  function updateActiveNav() {
    const scrollY = window.scrollY + (header ? header.offsetHeight : 0) + 40;
    sections.forEach((sec) => {
      const top    = sec.offsetTop;
      const bottom = top + sec.offsetHeight;
      if (scrollY >= top && scrollY < bottom) {
        navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === '#' + sec.id);
        });
      }
    });
  }

  if (sections.length) {
    window.addEventListener('scroll', updateActiveNav, { passive: true });
    updateActiveNav();
  }

  // ── 10. Localization form auto-submit ─────────────────────
  document.querySelectorAll('.localization-form button[type="submit"]').forEach((btn) => {
    btn.addEventListener('click', () => {
      setTimeout(() => btn.closest('form').submit(), 50);
    });
  });

})();
