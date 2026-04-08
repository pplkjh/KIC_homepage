/**
 * KIC Industrial Theme — Main JavaScript
 * Version: 1.0.0
 * Author: KIC (Korea Industrial Company)
 */

(function() {
  'use strict';

  /* =========================================
   * HEADER: Sticky + Scroll Shadow
   * ========================================= */
  const header = document.getElementById('kic-header');
  let lastScrollY = window.scrollY;

  function handleHeaderScroll() {
    const currentScrollY = window.scrollY;
    if (!header) return;

    if (currentScrollY > 80) {
      header.classList.add('kic-header--scrolled');
    } else {
      header.classList.remove('kic-header--scrolled');
    }
    lastScrollY = currentScrollY;
  }

  window.addEventListener('scroll', handleHeaderScroll, { passive: true });

  // Add scrolled styles dynamically
  const headerScrollStyle = document.createElement('style');
  headerScrollStyle.textContent = `
    .kic-header--scrolled .kic-header__nav {
      box-shadow: 0 2px 20px rgba(26, 58, 92, 0.1);
    }
    .kic-header--scrolled .kic-header__announcement {
      max-height: 0;
      overflow: hidden;
      padding: 0;
      transition: max-height 0.3s ease, padding 0.3s ease;
    }
  `;
  document.head.appendChild(headerScrollStyle);


  /* =========================================
   * MOBILE MENU
   * ========================================= */
  const hamburger = document.getElementById('kic-hamburger');
  const mobileMenu = document.getElementById('kic-mobile-menu');
  const mobileClose = document.getElementById('kic-mobile-close');
  const menuOverlay = document.getElementById('kic-menu-overlay');

  function openMobileMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.add('open');
    mobileMenu.setAttribute('aria-hidden', 'false');
    menuOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    if (hamburger) hamburger.setAttribute('aria-expanded', 'true');
  }

  function closeMobileMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.remove('open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    menuOverlay.classList.remove('open');
    document.body.style.overflow = '';
    if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
  }

  if (hamburger) hamburger.addEventListener('click', openMobileMenu);
  if (mobileClose) mobileClose.addEventListener('click', closeMobileMenu);
  if (menuOverlay) menuOverlay.addEventListener('click', closeMobileMenu);

  // Mobile accordion menus
  const accordionBtns = document.querySelectorAll('.kic-mobile-menu__accordion-btn');
  accordionBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const sub = this.nextElementSibling;
      const icon = this.querySelector('i');
      const isOpen = sub.classList.contains('open');

      // Close all open submenus
      document.querySelectorAll('.kic-mobile-menu__sub.open').forEach(s => {
        s.classList.remove('open');
      });
      document.querySelectorAll('.kic-mobile-menu__accordion-btn i').forEach(i => {
        i.style.transform = '';
      });

      if (!isOpen && sub) {
        sub.classList.add('open');
        if (icon) icon.style.transform = 'rotate(180deg)';
      }
    });
  });

  // Keyboard: ESC closes menu
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeMobileMenu();
      closeRFQModal();
    }
  });


  /* =========================================
   * RFQ MODAL
   * ========================================= */
  const rfqModal = document.getElementById('kic-rfq-modal');
  const rfqOverlay = document.getElementById('kic-rfq-overlay');

  function openRFQModal(productName) {
    if (!rfqModal) return;
    rfqModal.classList.add('open');
    document.body.style.overflow = 'hidden';

    // Pre-fill product if provided
    if (productName) {
      const productHint = document.getElementById('rfq-modal-product-hint');
      const productSelect = document.getElementById('rfq-modal-product');
      if (productHint) {
        productHint.innerHTML = `<i class="fas fa-box"></i> Product of interest: <strong>${productName}</strong>`;
        productHint.style.display = 'flex';
      }
      if (productSelect && productName) {
        // Try to match product in dropdown
        Array.from(productSelect.options).forEach(opt => {
          if (opt.text.toLowerCase().includes(productName.toLowerCase().split(' ')[0])) {
            productSelect.value = opt.value;
          }
        });
      }
    }

    // Focus first input
    setTimeout(() => {
      const firstInput = rfqModal.querySelector('input:not([type="checkbox"])');
      if (firstInput) firstInput.focus();
    }, 100);
  }

  function closeRFQModal() {
    if (!rfqModal) return;
    rfqModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Open triggers (header button, footer button, product card buttons)
  document.querySelectorAll('#open-rfq-modal, #open-rfq-modal-mobile, #open-rfq-modal-footer').forEach(btn => {
    if (btn) btn.addEventListener('click', () => openRFQModal());
  });

  // Product-specific RFQ triggers
  document.querySelectorAll('.kic-rfq-trigger').forEach(btn => {
    btn.addEventListener('click', function() {
      openRFQModal(this.dataset.product || '');
    });
  });

  // Close modal
  const rfqModalClose = document.getElementById('kic-rfq-modal-close');
  if (rfqModalClose) rfqModalClose.addEventListener('click', closeRFQModal);
  if (rfqOverlay) rfqOverlay.addEventListener('click', function(e) {
    if (e.target === rfqOverlay) closeRFQModal();
  });

  // Expose for global use
  window.openRFQModal = openRFQModal;
  window.closeRFQModal = closeRFQModal;


  /* =========================================
   * SCROLL ANIMATIONS
   * ========================================= */
  if ('IntersectionObserver' in window) {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -60px 0px'
    };

    const fadeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          // For counter elements
          if (entry.target.classList.contains('kic-stats-bar__item')) {
            const countEl = entry.target.querySelector('[data-count]');
            if (countEl) animateCounter(countEl);
          }
          fadeObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Animate hero elements immediately
    document.querySelectorAll('.kic-hero .animate-fadeInUp').forEach(el => {
      el.classList.add('animated');
    });

    // Observe all other animatable elements
    const animationTargets = [
      '.kic-stats-bar__item',
      '.kic-about__media',
      '.kic-about__content',
      '.kic-product-card',
      '.kic-industry-card',
      '.kic-value-card',
      '.kic-timeline__item',
      '.kic-cert-card',
      '.kic-blog-card',
      '.kic-rfq-section__info',
      '.kic-rfq-section__form-wrap'
    ];

    // Add animation CSS
    const animStyle = document.createElement('style');
    animStyle.textContent = `
      ${animationTargets.join(', ')} {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
      }
      ${animationTargets.map((s, i) => `${s}:nth-child(${i % 6 + 1}) { transition-delay: ${(i % 6) * 0.08}s; }`).join('\n')}
      ${animationTargets.map(s => `${s}.in-view`).join(', ')} {
        opacity: 1;
        transform: translateY(0);
      }
    `;
    document.head.appendChild(animStyle);

    const elementObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('in-view');
          }, 50);
          elementObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -50px 0px' });

    animationTargets.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        elementObserver.observe(el);
      });
    });
  }


  /* =========================================
   * PRODUCT CATEGORY TABS
   * ========================================= */
  const tabs = document.querySelectorAll('.kic-products__tab');
  const productCards = document.querySelectorAll('.kic-product-card[data-category]');

  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      // Update active tab
      tabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');

      const selectedCategory = this.dataset.tab;

      // Filter products
      productCards.forEach(card => {
        if (selectedCategory === 'all') {
          card.style.display = '';
          setTimeout(() => { card.style.opacity = '1'; card.style.transform = ''; }, 10);
        } else {
          const cardCategory = card.dataset.category;
          if (cardCategory && cardCategory.includes(selectedCategory)) {
            card.style.display = '';
            setTimeout(() => { card.style.opacity = '1'; card.style.transform = ''; }, 10);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'scale(0.95)';
            setTimeout(() => { card.style.display = 'none'; }, 300);
          }
        }
      });
    });
  });


  /* =========================================
   * STATS COUNTER ANIMATION
   * ========================================= */
  function animateCounter(el) {
    const target = el.dataset.count;
    const hasPlus = target.includes('+');
    const hasText = isNaN(parseInt(target));

    if (hasText) return; // Don't animate text-only values

    const numericValue = parseInt(target.replace(/[^0-9]/g, ''));
    const duration = 1500;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * numericValue);

      el.textContent = current + (hasPlus ? '+' : '');

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }

  // Observe stats items for counter
  if ('IntersectionObserver' in window) {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const countEl = entry.target.querySelector('[data-count]');
          if (countEl) animateCounter(countEl);
          statsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    document.querySelectorAll('.kic-stats-bar__item').forEach(el => {
      statsObserver.observe(el);
    });
  }


  /* =========================================
   * RFQ FORM: INLINE SECTION FORM VALIDATION
   * ========================================= */
  function setupFormValidation(formEl) {
    if (!formEl) return;

    formEl.addEventListener('submit', function(e) {
      let valid = true;
      const requiredFields = formEl.querySelectorAll('[required]');

      requiredFields.forEach(field => {
        field.classList.remove('kic-field-error');
        if (!field.value.trim()) {
          field.classList.add('kic-field-error');
          valid = false;
        }
        if (field.type === 'email' && field.value && !isValidEmail(field.value)) {
          field.classList.add('kic-field-error');
          valid = false;
        }
      });

      if (!valid) {
        e.preventDefault();
        const firstError = formEl.querySelector('.kic-field-error');
        if (firstError) {
          firstError.focus();
          firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    });

    // Add error styles
    const errorStyle = document.createElement('style');
    errorStyle.textContent = `
      .kic-field-error {
        border-color: #e53e3e !important;
        box-shadow: 0 0 0 3px rgba(229, 62, 62, 0.1) !important;
      }
    `;
    if (!document.getElementById('kic-error-styles')) {
      errorStyle.id = 'kic-error-styles';
      document.head.appendChild(errorStyle);
    }
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // Setup for all RFQ forms
  document.querySelectorAll('#rfq-inline-form, #rfq-modal-form').forEach(form => {
    setupFormValidation(form);
  });


  /* =========================================
   * LANGUAGE SELECTOR (Future: Shopify Markets)
   * ========================================= */
  const langLinks = document.querySelectorAll('.kic-header__lang-dropdown a:not(.kic-coming-soon)');
  langLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const lang = this.dataset.lang;
      if (lang) {
        // In future Shopify Markets implementation, navigate to localized URL
        // For now: store preference and show message
        localStorage.setItem('kic_preferred_lang', lang);

        // Update active state
        langLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');

        // Update button text
        const langBtn = document.querySelector('.kic-header__lang-btn span');
        if (langBtn) langBtn.textContent = lang.toUpperCase();
      }
    });
  });


  /* =========================================
   * SMOOTH SCROLL for anchor links
   * ========================================= */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = (header ? header.offsetHeight : 70) + 16;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });


  /* =========================================
   * COOKIE BANNER
   * ========================================= */
  const cookieBanner = document.getElementById('kic-cookie-banner');
  if (cookieBanner) {
    const cookieAccepted = localStorage.getItem('kic_cookie_accepted');
    if (!cookieAccepted) {
      setTimeout(() => {
        cookieBanner.style.display = 'flex';
        cookieBanner.classList.add('visible');
      }, 2000);
    }

    const acceptBtn = cookieBanner.querySelector('#kic-cookie-accept');
    if (acceptBtn) {
      acceptBtn.addEventListener('click', function() {
        localStorage.setItem('kic_cookie_accepted', '1');
        cookieBanner.classList.remove('visible');
        setTimeout(() => { cookieBanner.style.display = 'none'; }, 400);
      });
    }
  }


  /* =========================================
   * MOBILE MENU: Open RFQ from mobile
   * ========================================= */
  const openRFQMobile = document.getElementById('open-rfq-modal-mobile');
  if (openRFQMobile) {
    openRFQMobile.addEventListener('click', function() {
      closeMobileMenu();
      setTimeout(() => openRFQModal(), 350);
    });
  }


  /* =========================================
   * INIT
   * ========================================= */
  document.addEventListener('DOMContentLoaded', function() {
    console.log('%cKIC Industrial Theme v1.0.0 — Ready 🇰🇷', 'color: #1a3a5c; font-weight: bold; font-size: 12px;');

    // Trigger hero animations after load
    setTimeout(() => {
      document.querySelectorAll('.kic-hero .animate-fadeInUp').forEach((el, i) => {
        setTimeout(() => {
          el.style.animation = `fadeInUp 0.65s ease ${i * 0.15}s both`;
        }, 100);
      });
    }, 100);
  });

})();
