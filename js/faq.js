/**
 * js/faq.js
 * =============================================================
 * Elegant Fashion Palace — FAQ Accordion + Category Filter
 * =============================================================
 * Reads from: data/faq.js (FAQ_ITEMS array)
 * Used on: faq.html, and as a preview on index.html / bespoke.html
 *
 * Usage:
 *   <div id="faq-container"></div>
 *   <div id="faq-filters"></div>  <!-- optional filter buttons -->
 *
 * Options via data attributes on #faq-container:
 *   data-limit="4"      — limit number of items shown
 *   data-category="bespoke" — pre-filter to a category
 */

(function () {
  'use strict';

  var currentCategory = 'all';

  // ── Render FAQ Items ──────────────────────────────────────
  function renderFAQ(container, items, limit) {
    if (!container) return;

    var toRender = limit ? items.slice(0, limit) : items;

    if (!toRender.length) {
      container.innerHTML =
        '<div class="empty-state">' +
          '<svg class="w-12 h-12 opacity-30 mx-auto mb-3" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"/></svg>' +
          '<p class="text-sm">No questions found in this category.</p>' +
        '</div>';
      return;
    }

    container.innerHTML = toRender.map(function (item) {
      return (
        '<div class="faq-item mb-3" data-id="' + item.id + '" data-category="' + item.category + '" role="listitem">' +
          '<button class="faq-question" aria-expanded="false" aria-controls="faq-answer-' + item.id + '">' +
            '<span>' + item.question + '</span>' +
            '<svg class="faq-chevron" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" aria-hidden="true">' +
              '<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>' +
            '</svg>' +
          '</button>' +
          '<div class="faq-answer" id="faq-answer-' + item.id + '" role="region" aria-labelledby="faq-btn-' + item.id + '">' +
            '<p>' + item.answer + '</p>' +
          '</div>' +
        '</div>'
      );
    }).join('');

    // Attach accordion behaviour
    container.querySelectorAll('.faq-question').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var item = this.closest('.faq-item');
        var answer = item.querySelector('.faq-answer');
        var isOpen = item.classList.contains('open');

        // Close all others (one-at-a-time mode)
        container.querySelectorAll('.faq-item.open').forEach(function (openItem) {
          openItem.classList.remove('open');
          openItem.querySelector('.faq-answer').classList.remove('open');
          openItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        });

        // Toggle current
        if (!isOpen) {
          item.classList.add('open');
          answer.classList.add('open');
          this.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  // ── Filter Logic ──────────────────────────────────────────
  function filterAndRender(container, limit) {
    if (!window.FAQ_ITEMS) return;

    var filtered = currentCategory === 'all'
      ? FAQ_ITEMS
      : FAQ_ITEMS.filter(function (item) { return item.category === currentCategory; });

    renderFAQ(container, filtered, limit);
  }

  // ── Render Category Filter Buttons ────────────────────────
  function renderFilters(filterContainer, faqContainer, limit) {
    if (!filterContainer || !window.FAQ_ITEMS) return;

    // Collect unique categories
    var cats = ['all'];
    FAQ_ITEMS.forEach(function (item) {
      if (cats.indexOf(item.category) === -1) cats.push(item.category);
    });

    var labels = {
      all: 'All Questions',
      ordering: 'Ordering',
      measurements: 'Measurements',
      fabrics: 'Fabrics',
      delivery: 'Delivery',
      bespoke: 'Bespoke',
      care: 'Garment Care',
      payment: 'Payment',
      sizing: 'Sizing',
    };

    filterContainer.innerHTML = cats.map(function (cat) {
      return (
        '<button class="filter-btn' + (cat === 'all' ? ' active' : '') + '" ' +
          'data-filter="' + cat + '" ' +
          'aria-pressed="' + (cat === 'all' ? 'true' : 'false') + '">' +
          (labels[cat] || cat.charAt(0).toUpperCase() + cat.slice(1)) +
        '</button>'
      );
    }).join('');

    filterContainer.querySelectorAll('.filter-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterContainer.querySelectorAll('.filter-btn').forEach(function (b) {
          b.classList.remove('active');
          b.setAttribute('aria-pressed', 'false');
        });
        this.classList.add('active');
        this.setAttribute('aria-pressed', 'true');
        currentCategory = this.getAttribute('data-filter');
        filterAndRender(faqContainer, limit);
      });
    });
  }

  // ── Init ─────────────────────────────────────────────────
  function init() {
    var container = document.getElementById('faq-container');
    if (!container) return;
    if (!window.FAQ_ITEMS) {
      console.warn('faq.js: FAQ_ITEMS not found. Load data/faq.js first.');
      return;
    }

    var limit = container.getAttribute('data-limit')
      ? parseInt(container.getAttribute('data-limit'), 10)
      : null;

    var preCategory = container.getAttribute('data-category');
    if (preCategory) currentCategory = preCategory;

    var filterContainer = document.getElementById('faq-filters');
    if (filterContainer && !preCategory) {
      renderFilters(filterContainer, container, limit);
    }

    filterAndRender(container, limit);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
