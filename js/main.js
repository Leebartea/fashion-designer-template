/**
 * js/main.js
 * =============================================================
 * Elegant Fashion Palace — Main Initialisation
 * =============================================================
 * Handles: sticky header, scroll-reveal, smooth scroll,
 * announcement bar dismiss, back-to-top, general page init.
 *
 * Loads after: config.js, components.js
 */

(function () {
  'use strict';

  // ── Sticky Header ─────────────────────────────────────────
  function initStickyHeader() {
    var header = document.querySelector('.header-sticky');
    if (!header) return;

    var scrollThreshold = 20;

    function updateHeader() {
      if (window.scrollY > scrollThreshold) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    window.addEventListener('scroll', updateHeader, { passive: true });
    updateHeader(); // run on load in case page is pre-scrolled
  }

  // ── Scroll Reveal (IntersectionObserver) ──────────────────
  function initScrollReveal() {
    var elements = document.querySelectorAll('.reveal');
    if (!elements.length) return;

    // If browser doesn't support IntersectionObserver, just show everything
    if (!('IntersectionObserver' in window)) {
      elements.forEach(function (el) { el.classList.add('visible'); });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    elements.forEach(function (el) { observer.observe(el); });
  }

  // ── Smooth Scroll for Anchor Links ────────────────────────
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        var targetId = this.getAttribute('href');
        if (!targetId || targetId === '#') return;

        var target = document.querySelector(targetId);
        if (!target) return;

        e.preventDefault();

        var headerHeight = 80; // approximate sticky header height
        var targetTop = target.getBoundingClientRect().top + window.scrollY - headerHeight;

        window.scrollTo({ top: targetTop, behavior: 'smooth' });
      });
    });
  }

  // ── Back to Top Button ────────────────────────────────────
  function initBackToTop() {
    var btn = document.getElementById('back-to-top');
    if (!btn) return;

    window.addEventListener('scroll', function () {
      btn.classList.toggle('opacity-100', window.scrollY > 500);
      btn.classList.toggle('opacity-0', window.scrollY <= 500);
      btn.classList.toggle('pointer-events-none', window.scrollY <= 500);
    }, { passive: true });

    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ── Stats Counter Animation ───────────────────────────────
  function initStatsCounter() {
    var stats = document.querySelectorAll('[data-count]');
    if (!stats.length) return;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var el = entry.target;
          var target = parseInt(el.getAttribute('data-count'), 10);
          var duration = 1800;
          var start = 0;
          var startTime = null;

          function step(timestamp) {
            if (!startTime) startTime = timestamp;
            var progress = Math.min((timestamp - startTime) / duration, 1);
            var eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            el.textContent = Math.floor(eased * target).toLocaleString();
            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              el.textContent = target.toLocaleString();
            }
          }

          requestAnimationFrame(step);
          observer.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );

    stats.forEach(function (el) { observer.observe(el); });
  }

  // ── WhatsApp Link Helper (global) ─────────────────────────
  // EDIT HERE: Called by other scripts to generate WhatsApp URLs
  window.getWhatsAppLink = function (message) {
    var num = SITE_CONFIG.whatsappNumber;
    var msg = encodeURIComponent(message || SITE_CONFIG.whatsappMessage);
    return 'https://wa.me/' + num + '?text=' + msg;
  };

  // ── Format Price Helper (global) ──────────────────────────
  window.formatPrice = function (amount) {
    var locale = SITE_CONFIG.currencyLocale || 'en-NG';
    var sym = SITE_CONFIG.currency || '₦';
    try {
      return sym + new Intl.NumberFormat(locale).format(amount);
    } catch (e) {
      return sym + amount.toLocaleString();
    }
  };

  // ── Active Nav Highlight (extra pass for edge cases) ──────
  function highlightActiveNav() {
    var page = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('a[href]').forEach(function (link) {
      var href = link.getAttribute('href');
      if (href === page || (page === '' && href === 'index.html')) {
        link.setAttribute('aria-current', 'page');
      }
    });
  }

  // ── Init ─────────────────────────────────────────────────
  function init() {
    initStickyHeader();
    initScrollReveal();
    initSmoothScroll();
    initBackToTop();
    initStatsCounter();
    highlightActiveNav();

    // Theme icon sync (belt-and-braces after components inject)
    if (window.ThemeManager) {
      ThemeManager.init();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
