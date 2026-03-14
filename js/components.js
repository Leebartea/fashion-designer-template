/**
 * js/components.js
 * =============================================================
 * Elegant Fashion Palace — Shared UI Components
 * =============================================================
 * Injects: Announcement Bar, Navbar, Footer, Floating WhatsApp Button
 * Depends on: js/config.js (must load first)
 *
 * EDIT HERE: To change the logo, navbar, or footer, edit the
 * template strings inside each inject function below.
 */

(function () {
  'use strict';

  // ── Helpers ────────────────────────────────────────────────

  /**
   * Build a WhatsApp URL from the global config
   * @param {string} [customText] - Optional override message
   * @returns {string} Full wa.me URL
   */
  function buildWhatsAppUrl(customText) {
    var num = SITE_CONFIG.whatsappNumber;  // EDIT HERE in js/config.js
    var msg = encodeURIComponent(customText || SITE_CONFIG.whatsappMessage);
    return 'https://wa.me/' + num + '?text=' + msg;
  }

  /**
   * Detect which page is active based on the current URL
   * @returns {string} filename like 'index.html' or ''
   */
  function getActivePage() {
    var path = window.location.pathname;
    var parts = path.split('/');
    return parts[parts.length - 1] || 'index.html';
  }

  /**
   * Render navigation links, marking the active page
   * @param {boolean} isMobile - whether to render mobile version
   * @returns {string} HTML string of nav links
   */
  function renderNavLinks(isMobile) {
    var active = getActivePage();
    return SITE_CONFIG.navLinks.map(function (link) {
      var isActive = link.href === active;
      if (isMobile) {
        return '<a href="' + link.href + '" class="block px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200 ' +
          (isActive
            ? 'bg-primary/10 text-primary dark:bg-primary-dark/20 dark:text-primary-dark'
            : 'text-[var(--color-text)] hover:bg-[var(--color-bg-alt)] dark:hover:bg-[var(--color-bg-alt)]') +
          '" ' + (isActive ? 'aria-current="page"' : '') + '>' + link.label + '</a>';
      }
      return '<a href="' + link.href + '" class="nav-link relative text-sm font-medium transition-colors duration-200 ' +
        (isActive
          ? 'text-primary dark:text-primary-dark after:scale-x-100'
          : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)]') +
        '" ' + (isActive ? 'aria-current="page"' : '') + '>' + link.label + '</a>';
    }).join('');
  }

  // ── Announcement Bar ───────────────────────────────────────
  function injectAnnouncementBar() {
    if (!SITE_CONFIG.announcement.show) return;
    var bar = document.getElementById('announcement-bar');
    if (!bar) return;

    bar.innerHTML =
      '<div class="max-w-7xl mx-auto px-4 flex items-center justify-center gap-3 text-sm font-medium">' +
        '<span class="hidden sm:inline">✨</span>' +
        '<span>' + SITE_CONFIG.announcement.text + '</span>' +
        (SITE_CONFIG.announcement.link
          ? '<a href="' + SITE_CONFIG.announcement.link + '" class="underline underline-offset-2 font-semibold hover:no-underline transition-all">' +
              SITE_CONFIG.announcement.linkText + ' &rarr;</a>'
          : '') +
      '</div>';

    bar.classList.remove('hidden');
  }

  // ── Navbar ─────────────────────────────────────────────────
  function injectNavbar() {
    var nav = document.getElementById('main-nav');
    if (!nav) return;

    var whatsappUrl = buildWhatsAppUrl();

    nav.innerHTML =
      '<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">' +
        '<div class="flex items-center justify-between h-16 lg:h-20">' +

          // Logo
          // EDIT HERE: Replace logoEmoji + businessName in js/config.js
          '<a href="index.html" class="flex items-center gap-2 flex-shrink-0" aria-label="' + SITE_CONFIG.businessName + ' — Home">' +
            '<span class="text-2xl" aria-hidden="true">' + SITE_CONFIG.logoEmoji + '</span>' +
            '<div class="leading-tight">' +
              '<span class="block font-heading font-bold text-lg text-[var(--color-primary)] dark:text-primary-dark tracking-wide">' + SITE_CONFIG.businessName + '</span>' +
            '</div>' +
          '</a>' +

          // Desktop Nav Links
          '<nav class="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Primary navigation">' +
            renderNavLinks(false) +
          '</nav>' +

          // Desktop Actions
          '<div class="hidden lg:flex items-center gap-3">' +
            // Theme Toggle
            '<button id="theme-toggle-desktop" onclick="ThemeManager.toggle()" aria-label="Toggle dark mode" class="p-2 rounded-full text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-bg-alt)] transition-all duration-200">' +
              '<svg class="icon-sun w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>' +
              '<svg class="icon-moon w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>' +
            '</button>' +
            // WhatsApp CTA
            '<a href="' + whatsappUrl + '" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" class="flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white text-sm font-semibold rounded-full hover:bg-[#1ebe5d] transition-all duration-200 shadow-sm">' +
              '<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>' +
              '<span>WhatsApp</span>' +
            '</a>' +
          '</div>' +

          // Mobile Actions
          '<div class="flex lg:hidden items-center gap-2">' +
            '<button id="theme-toggle-mobile" onclick="ThemeManager.toggle()" aria-label="Toggle dark mode" class="p-2 rounded-full text-[var(--color-text-muted)] hover:bg-[var(--color-bg-alt)] transition-all duration-200">' +
              '<svg class="icon-sun w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>' +
              '<svg class="icon-moon w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>' +
            '</button>' +
            '<button id="mobile-menu-btn" aria-label="Open navigation menu" aria-expanded="false" aria-controls="mobile-menu" class="p-2 rounded-lg text-[var(--color-text-muted)] hover:bg-[var(--color-bg-alt)] transition-all duration-200">' +
              '<svg id="hamburger-icon" class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>' +
              '<svg id="close-icon" class="w-6 h-6 hidden" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>' +
            '</button>' +
          '</div>' +

        '</div>' +

        // Mobile Menu Dropdown
        '<div id="mobile-menu" class="lg:hidden hidden pb-4" role="dialog" aria-label="Mobile navigation">' +
          '<nav class="flex flex-col gap-1 pt-2" aria-label="Mobile navigation links">' +
            renderNavLinks(true) +
          '</nav>' +
          '<div class="mt-4 pt-4 border-t border-[var(--color-border)]">' +
            '<a href="' + whatsappUrl + '" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-2 w-full px-4 py-3 bg-[#25D366] text-white font-semibold rounded-xl hover:bg-[#1ebe5d] transition-all duration-200">' +
              '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>' +
              'Chat on WhatsApp' +
            '</a>' +
          '</div>' +
        '</div>' +

      '</div>';

    // Mobile menu toggle logic
    var menuBtn = document.getElementById('mobile-menu-btn');
    var mobileMenu = document.getElementById('mobile-menu');
    var hamburgerIcon = document.getElementById('hamburger-icon');
    var closeIconEl = document.getElementById('close-icon');

    if (menuBtn && mobileMenu) {
      menuBtn.addEventListener('click', function () {
        var isOpen = !mobileMenu.classList.contains('hidden');
        mobileMenu.classList.toggle('hidden', isOpen);
        hamburgerIcon.classList.toggle('hidden', !isOpen);
        closeIconEl.classList.toggle('hidden', isOpen);
        menuBtn.setAttribute('aria-expanded', String(!isOpen));
      });

      // Close menu when a link is clicked
      mobileMenu.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          mobileMenu.classList.add('hidden');
          hamburgerIcon.classList.remove('hidden');
          closeIconEl.classList.add('hidden');
          menuBtn.setAttribute('aria-expanded', 'false');
        });
      });

      // Close menu on outside click
      document.addEventListener('click', function (e) {
        if (!nav.contains(e.target) && !mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.add('hidden');
          hamburgerIcon.classList.remove('hidden');
          closeIconEl.classList.add('hidden');
          menuBtn.setAttribute('aria-expanded', 'false');
        }
      });
    }
  }

  // ── Footer ─────────────────────────────────────────────────
  function injectFooter() {
    var footer = document.getElementById('main-footer');
    if (!footer) return;

    var whatsappUrl = buildWhatsAppUrl();
    var year = new Date().getFullYear();

    footer.innerHTML =
      '<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">' +

        // Main footer grid
        '<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-14">' +

          // Column 1: Brand
          '<div class="lg:col-span-1">' +
            '<a href="index.html" class="flex items-center gap-2 mb-4" aria-label="' + SITE_CONFIG.businessName + '">' +
              '<span class="text-3xl" aria-hidden="true">' + SITE_CONFIG.logoEmoji + '</span>' +
              '<span class="font-heading font-bold text-xl text-[var(--color-primary)] dark:text-primary-dark">' + SITE_CONFIG.businessName + '</span>' +
            '</a>' +
            '<p class="text-sm text-[var(--color-text-muted)] leading-relaxed mb-5">' + SITE_CONFIG.tagline + '</p>' +
            // Social icons
            '<div class="flex items-center gap-3">' +
              renderSocialIcon('instagram', SITE_CONFIG.social.instagram, 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z') +
              renderSocialIcon('facebook', SITE_CONFIG.social.facebook, 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z') +
              renderSocialIcon('tiktok', SITE_CONFIG.social.tiktok, 'M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z') +
              renderSocialIcon('pinterest', SITE_CONFIG.social.pinterest, 'M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z') +
            '</div>' +
          '</div>' +

          // Column 2: Quick Links
          '<div>' +
            '<h3 class="font-heading font-semibold text-base mb-4 text-[var(--color-text)]">Quick Links</h3>' +
            '<ul class="space-y-2">' +
              footerLink('index.html', 'Home') +
              footerLink('shop.html', 'Shop Collections') +
              footerLink('bespoke.html', 'Bespoke Orders') +
              footerLink('gallery.html', 'Gallery') +
              footerLink('wedding.html', 'Wedding & Events') +
              footerLink('about.html', 'About Us') +
            '</ul>' +
          '</div>' +

          // Column 3: Services
          '<div>' +
            '<h3 class="font-heading font-semibold text-base mb-4 text-[var(--color-text)]">Our Services</h3>' +
            '<ul class="space-y-2">' +
              footerLink('bespoke.html', 'Bespoke Tailoring') +
              footerLink('shop.html?filter=ankara', 'Ankara Collections') +
              footerLink('shop.html?filter=ready-to-wear', 'Ready-to-Wear') +
              footerLink('wedding.html', 'Bridal & Wedding') +
              footerLink('appointment.html', 'Book Appointment') +
              footerLink('faq.html', 'FAQ') +
            '</ul>' +
          '</div>' +

          // Column 4: Contact
          '<div>' +
            '<h3 class="font-heading font-semibold text-base mb-4 text-[var(--color-text)]">Get in Touch</h3>' +
            '<address class="not-italic space-y-3">' +
              '<div class="flex items-start gap-3 text-sm text-[var(--color-text-muted)]">' +
                '<svg class="w-4 h-4 mt-0.5 flex-shrink-0 text-[var(--color-primary)]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>' +
                '<span>' + SITE_CONFIG.address + '</span>' +
              '</div>' +
              '<a href="tel:' + SITE_CONFIG.phone.replace(/\s/g, '') + '" class="flex items-center gap-3 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors duration-200">' +
                '<svg class="w-4 h-4 flex-shrink-0 text-[var(--color-primary)]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>' +
                SITE_CONFIG.phone +
              '</a>' +
              '<a href="mailto:' + SITE_CONFIG.email + '" class="flex items-center gap-3 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors duration-200">' +
                '<svg class="w-4 h-4 flex-shrink-0 text-[var(--color-primary)]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>' +
                SITE_CONFIG.email +
              '</a>' +
              '<a href="' + whatsappUrl + '" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 text-sm font-semibold text-[#25D366] hover:underline">' +
                '<svg class="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>' +
                'Chat on WhatsApp' +
              '</a>' +
            '</address>' +
          '</div>' +

        '</div>' +

        // Bottom bar
        '<div class="border-t border-[var(--color-border)] py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--color-text-muted)]">' +
          '<p>&copy; <span id="footer-year">' + year + '</span> ' + SITE_CONFIG.businessName + '. All rights reserved.</p>' +
          '<div class="flex items-center gap-4">' +
            '<a href="policy.html" class="hover:text-[var(--color-primary)] transition-colors duration-200">Sizing &amp; Policy</a>' +
            '<span aria-hidden="true">&middot;</span>' +
            '<a href="appointment.html" class="hover:text-[var(--color-primary)] transition-colors duration-200">Book Appointment</a>' +
          '</div>' +
        '</div>' +

      '</div>';
  }

  // ── Floating WhatsApp Button ───────────────────────────────
  function injectFloatingWhatsApp() {
    var container = document.getElementById('whatsapp-float');
    if (!container) return;

    var whatsappUrl = buildWhatsAppUrl();

    container.innerHTML =
      '<a href="' + whatsappUrl + '" target="_blank" rel="noopener noreferrer" ' +
        'aria-label="Chat with us on WhatsApp" ' +
        'class="flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 relative">' +
        '<span class="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 pointer-events-none" aria-hidden="true"></span>' +
        '<svg class="w-7 h-7 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">' +
          '<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>' +
        '</svg>' +
      '</a>';
  }

  // ── Helper: Footer link ─────────────────────────────────────
  function footerLink(href, label) {
    return '<li><a href="' + href + '" class="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors duration-200">' + label + '</a></li>';
  }

  // ── Helper: Social icon ─────────────────────────────────────
  function renderSocialIcon(name, href, svgPath) {
    if (!href || href === '#') {
      return '<a href="#" aria-label="' + name + '" class="w-9 h-9 flex items-center justify-center rounded-full bg-[var(--color-bg-alt)] text-[var(--color-text-muted)] hover:bg-[var(--color-primary)] hover:text-white transition-all duration-200">' +
        '<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="' + svgPath + '"/></svg></a>';
    }
    return '<a href="' + href + '" target="_blank" rel="noopener noreferrer" aria-label="Follow us on ' + name + '" class="w-9 h-9 flex items-center justify-center rounded-full bg-[var(--color-bg-alt)] text-[var(--color-text-muted)] hover:bg-[var(--color-primary)] hover:text-white transition-all duration-200">' +
      '<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="' + svgPath + '"/></svg></a>';
  }

  // ── Init: Run all injections on DOM ready ──────────────────
  function init() {
    injectAnnouncementBar();
    injectNavbar();
    injectFooter();
    injectFloatingWhatsApp();

    // Sync theme button icons after DOM is built
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
