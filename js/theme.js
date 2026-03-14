/**
 * js/theme.js
 * =============================================================
 * Elegant Fashion Palace — Theme Manager
 * =============================================================
 * CRITICAL: This file's content is INLINED inside every <head>
 * as a <script> tag to prevent Flash of Unstyled Content (FOUC).
 * Do NOT load this as an external script — copy the content
 * directly into the <head> of each HTML page.
 *
 * The inline version is the IIFE below. This file also serves
 * as the canonical source you edit and then copy to all pages.
 */

(function () {
  // Read stored theme — fall back to 'light'
  var stored = localStorage.getItem('theme');
  var theme = stored === 'dark' ? 'dark' : 'light';

  // Apply dark class BEFORE paint to eliminate FOUC
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  // Suppress all CSS transitions during initial render
  document.documentElement.classList.add('no-transition');
  window.addEventListener('load', function () {
    setTimeout(function () {
      document.documentElement.classList.remove('no-transition');
    }, 50);
  });

  // ── ThemeManager API ─────────────────────────────────────
  window.ThemeManager = {
    /**
     * Returns the current active theme ('light' | 'dark')
     */
    getCurrent: function () {
      return localStorage.getItem('theme') || 'light';
    },

    /**
     * Toggles between light and dark mode and persists choice
     */
    toggle: function () {
      var current = this.getCurrent();
      var next = current === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', next);
      document.documentElement.classList.toggle('dark', next === 'dark');
      this.updateButtons(next);
    },

    /**
     * Syncs all theme toggle button icons across the page
     * @param {string} theme - 'light' | 'dark'
     */
    updateButtons: function (theme) {
      // Show sun icon when dark mode is active (click to go light)
      document.querySelectorAll('.icon-sun').forEach(function (el) {
        el.classList.toggle('hidden', theme === 'light');
      });
      // Show moon icon when light mode is active (click to go dark)
      document.querySelectorAll('.icon-moon').forEach(function (el) {
        el.classList.toggle('hidden', theme === 'dark');
      });
    },

    /**
     * Call after DOM is ready to sync icon states on page load
     */
    init: function () {
      this.updateButtons(this.getCurrent());
    },
  };
})();
