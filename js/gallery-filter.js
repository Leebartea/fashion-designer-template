/**
 * js/gallery-filter.js
 * =============================================================
 * Elegant Fashion Palace — Gallery Filter + Lightbox
 * =============================================================
 * Used on: gallery.html
 * Features: category filter, masonry grid, full lightbox
 *   with keyboard (Esc / arrows), touch swipe, mouse drag.
 *
 * EDIT HERE: Add/remove items from GALLERY_ITEMS below.
 * Categories: "women" | "children" | "events" | "couples" | "bespoke"
 */

// ── Gallery Data ──────────────────────────────────────────────
// EDIT HERE: Update image paths, captions, and categories
var GALLERY_ITEMS = [
  // ── Women ────────────────────────────────────────────────
  {
    id: 'g-001',
    category: 'women',
    src: 'assets/images/WhatsApp Image 2026-03-13 at 11.43.22.jpeg',
    thumb: 'assets/images/WhatsApp Image 2026-03-13 at 11.43.22.jpeg',
    caption: 'Terracotta Adire Wide-Sleeve Gown',
    size: 'tall', // 'tall' | 'wide' | 'square'
  },
  {
    id: 'g-002',
    category: 'women',
    src: 'assets/images/WhatsApp Image 2026-03-13 at 11.43.14.jpeg',
    thumb: 'assets/images/WhatsApp Image 2026-03-13 at 11.43.14.jpeg',
    caption: 'Ankara Halter Dress Collection — Four Colorways',
    size: 'square',
  },
  {
    id: 'g-003',
    category: 'women',
    src: 'assets/images/WhatsApp Image 2026-03-13 at 11.43.35.jpeg',
    thumb: 'assets/images/WhatsApp Image 2026-03-13 at 11.43.35.jpeg',
    caption: 'Green Adire Backless Halter Dress',
    size: 'tall',
  },
  {
    id: 'g-004',
    category: 'women',
    src: 'assets/images/WhatsApp Image 2026-03-13 at 11.43.39.jpeg',
    thumb: 'assets/images/WhatsApp Image 2026-03-13 at 11.43.39.jpeg',
    caption: 'Orange Kaftan with Ankara Circular Appliqués',
    size: 'tall',
  },
  {
    id: 'g-005',
    category: 'women',
    src: 'assets/images/WhatsApp Image 2026-03-13 at 11.43.33.jpeg',
    thumb: 'assets/images/WhatsApp Image 2026-03-13 at 11.43.33.jpeg',
    caption: 'Green & Gold Ankara Tiered Ruffle Dress',
    size: 'tall',
  },
  {
    id: 'g-006',
    category: 'women',
    src: 'assets/images/WhatsApp Image 2026-03-13 at 11.43.24.jpeg',
    thumb: 'assets/images/WhatsApp Image 2026-03-13 at 11.43.24.jpeg',
    caption: 'Black Velvet Peplum & White Pleated Maxi Set',
    size: 'tall',
  },
  {
    id: 'g-007',
    category: 'women',
    src: 'assets/images/WhatsApp Image 2026-03-13 at 11.43.26.jpeg',
    thumb: 'assets/images/WhatsApp Image 2026-03-13 at 11.43.26.jpeg',
    caption: 'Emerald Green Abaya with Gold Trim',
    size: 'tall',
  },
  {
    id: 'g-008',
    category: 'women',
    src: 'assets/images/WhatsApp Image 2026-03-13 at 11.43.40.jpeg',
    thumb: 'assets/images/WhatsApp Image 2026-03-13 at 11.43.40.jpeg',
    caption: 'Elegant Studio Collection Piece',
    size: 'tall',
  },
  {
    id: 'g-009',
    category: 'women',
    src: 'assets/images/WhatsApp Image 2026-03-13 at 11.43.42.jpeg',
    thumb: 'assets/images/WhatsApp Image 2026-03-13 at 11.43.42.jpeg',
    caption: 'Ready-to-Wear Women\'s Collection',
    size: 'square',
  },

  // ── Children ─────────────────────────────────────────────
  {
    id: 'g-010',
    category: 'children',
    src: 'assets/images/WhatsApp Image 2026-03-13 at 11.43.15.jpeg',
    thumb: 'assets/images/WhatsApp Image 2026-03-13 at 11.43.15.jpeg',
    caption: 'Red Sequin Layered Ball Gown — Children\'s Events',
    size: 'tall',
  },
  {
    id: 'g-011',
    category: 'children',
    src: 'assets/images/WhatsApp Image 2026-03-13 at 11.43.16.jpeg',
    thumb: 'assets/images/WhatsApp Image 2026-03-13 at 11.43.16.jpeg',
    caption: 'Green Striped Traditional Kaftan — Junior',
    size: 'tall',
  },
  {
    id: 'g-012',
    category: 'children',
    src: 'assets/images/WhatsApp Image 2026-03-13 at 11.43.19.jpeg',
    thumb: 'assets/images/WhatsApp Image 2026-03-13 at 11.43.19.jpeg',
    caption: 'Colorful Striped Kimono Bubu — Little Ones',
    size: 'tall',
  },
  {
    id: 'g-013',
    category: 'children',
    src: 'assets/images/WhatsApp Image 2026-03-13 at 11.43.28.jpeg',
    thumb: 'assets/images/WhatsApp Image 2026-03-13 at 11.43.28.jpeg',
    caption: 'Purple Star-Print Tulle Ball Gown',
    size: 'tall',
  },
  {
    id: 'g-014',
    category: 'children',
    src: 'assets/images/WhatsApp Image 2026-03-13 at 11.43.43.jpeg',
    thumb: 'assets/images/WhatsApp Image 2026-03-13 at 11.43.43.jpeg',
    caption: 'Rose Print Shirt & Skirt Set — Flat Lay',
    size: 'square',
  },
  {
    id: 'g-015',
    category: 'children',
    src: 'assets/images/WhatsApp Image 2026-03-13 at 11.43.47.jpeg',
    thumb: 'assets/images/WhatsApp Image 2026-03-13 at 11.43.47.jpeg',
    caption: 'Ankara & Tulle Dress — Flat Lay',
    size: 'square',
  },
  {
    id: 'g-016',
    category: 'children',
    src: 'assets/images/WhatsApp Image 2026-03-13 at 11.43.45.jpeg',
    thumb: 'assets/images/WhatsApp Image 2026-03-13 at 11.43.45.jpeg',
    caption: 'Children\'s Special Occasion Outfit',
    size: 'tall',
  },

  // ── Events ───────────────────────────────────────────────
  {
    id: 'g-017',
    category: 'events',
    src: 'assets/images/WhatsApp Image 2026-03-13 at 11.43.30.jpeg',
    thumb: 'assets/images/WhatsApp Image 2026-03-13 at 11.43.30.jpeg',
    caption: 'White Beaded Formal Gown — Wedding / Events',
    size: 'tall',
  },
  {
    id: 'g-018',
    category: 'events',
    src: 'assets/images/WhatsApp Image 2026-03-13 at 11.43.49.jpeg',
    thumb: 'assets/images/WhatsApp Image 2026-03-13 at 11.43.49.jpeg',
    caption: 'Event & Occasion Wear',
    size: 'tall',
  },
  {
    id: 'g-019',
    category: 'events',
    src: 'assets/images/WhatsApp Image 2026-03-13 at 11.43.51.jpeg',
    thumb: 'assets/images/WhatsApp Image 2026-03-13 at 11.43.51.jpeg',
    caption: 'Ceremony Collection',
    size: 'wide',
  },

  // ── Couples ──────────────────────────────────────────────
  {
    id: 'g-020',
    category: 'couples',
    src: 'assets/images/WhatsApp Image 2026-03-13 at 11.43.50.jpeg',
    thumb: 'assets/images/WhatsApp Image 2026-03-13 at 11.43.50.jpeg',
    caption: 'Matching Brown Outfits — Couple Session',
    size: 'wide',
  },
  {
    id: 'g-021',
    category: 'couples',
    src: 'assets/images/WhatsApp Image 2026-03-13 at 11.43.52.jpeg',
    thumb: 'assets/images/WhatsApp Image 2026-03-13 at 11.43.52.jpeg',
    caption: 'Coordinated Couple Outfits',
    size: 'wide',
  },
  {
    id: 'g-022',
    category: 'couples',
    src: 'assets/images/WhatsApp Image 2026-03-13 at 11.43.54.jpeg',
    thumb: 'assets/images/WhatsApp Image 2026-03-13 at 11.43.54.jpeg',
    caption: 'Elegant Couple\'s Collection',
    size: 'tall',
  },

  // ── Bespoke ──────────────────────────────────────────────
  {
    id: 'g-023',
    category: 'bespoke',
    src: 'assets/images/WhatsApp Image 2026-03-13 at 11.44.01.jpeg',
    thumb: 'assets/images/WhatsApp Image 2026-03-13 at 11.44.01.jpeg',
    caption: 'Bespoke Made-to-Order Piece',
    size: 'tall',
  },
  {
    id: 'g-024',
    category: 'bespoke',
    src: 'assets/images/WhatsApp Image 2026-03-13 at 11.44.02.jpeg',
    thumb: 'assets/images/WhatsApp Image 2026-03-13 at 11.44.02.jpeg',
    caption: 'Custom Design — Elegant Fashion Palace',
    size: 'tall',
  },
  {
    id: 'g-025',
    category: 'bespoke',
    src: 'assets/images/WhatsApp Image 2026-03-13 at 11.44.03.jpeg',
    thumb: 'assets/images/WhatsApp Image 2026-03-13 at 11.44.03.jpeg',
    caption: 'Handcrafted with Precision',
    size: 'square',
  },
];

// ── Gallery Module ────────────────────────────────────────────
(function () {
  'use strict';

  var currentCategory = 'all';
  var currentIndex = 0;
  var filteredItems = [];

  // ── Filter ────────────────────────────────────────────────
  function getFiltered() {
    if (currentCategory === 'all') return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter(function (item) {
      return item.category === currentCategory;
    });
  }

  // ── Render Grid ───────────────────────────────────────────
  function renderGrid(container) {
    filteredItems = getFiltered();

    if (!filteredItems.length) {
      container.innerHTML =
        '<div class="empty-state col-span-full">' +
          '<p>No images found in this category.</p>' +
        '</div>';
      return;
    }

    container.innerHTML = filteredItems.map(function (item, idx) {
      var heightClass = item.size === 'tall'
        ? 'aspect-[3/4]'
        : item.size === 'wide'
          ? 'aspect-[4/3]'
          : 'aspect-square';

      return (
        '<div class="masonry-item gallery-item ' + heightClass + '" ' +
          'data-index="' + idx + '" ' +
          'data-category="' + item.category + '" ' +
          'role="button" tabindex="0" ' +
          'aria-label="View: ' + item.caption + '">' +
          '<img src="' + item.src + '" alt="' + item.caption + '" loading="lazy">' +
          '<div class="gallery-item__overlay">' +
            '<p class="text-white text-sm font-medium">' + item.caption + '</p>' +
          '</div>' +
        '</div>'
      );
    }).join('');

    // Attach click + keyboard
    container.querySelectorAll('.gallery-item').forEach(function (item) {
      item.addEventListener('click', function () {
        openLightbox(parseInt(this.getAttribute('data-index'), 10));
      });
      item.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(parseInt(this.getAttribute('data-index'), 10));
        }
      });
    });
  }

  // ── Filter Buttons ────────────────────────────────────────
  function initFilters(filterContainer, gridContainer) {
    if (!filterContainer) return;

    var categories = [
      { value: 'all',      label: 'All' },
      { value: 'women',    label: 'Women' },
      { value: 'children', label: 'Children' },
      { value: 'events',   label: 'Events' },
      { value: 'couples',  label: 'Couples' },
      { value: 'bespoke',  label: 'Bespoke' },
    ];

    filterContainer.innerHTML = categories.map(function (cat) {
      return (
        '<button class="filter-btn' + (cat.value === 'all' ? ' active' : '') + '" ' +
          'data-filter="' + cat.value + '" ' +
          'aria-pressed="' + (cat.value === 'all' ? 'true' : 'false') + '">' +
          cat.label +
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
        renderGrid(gridContainer);
      });
    });
  }

  // ── Lightbox ──────────────────────────────────────────────
  function buildLightbox() {
    if (document.getElementById('lightbox')) return;

    var lb = document.createElement('div');
    lb.id = 'lightbox';
    lb.setAttribute('role', 'dialog');
    lb.setAttribute('aria-modal', 'true');
    lb.setAttribute('aria-label', 'Image lightbox');
    lb.innerHTML =
      '<button id="lb-close" class="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10" aria-label="Close lightbox">' +
        '<svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>' +
      '</button>' +
      '<button id="lb-prev" class="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10" aria-label="Previous image">' +
        '<svg class="w-10 h-10" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg>' +
      '</button>' +
      '<div class="flex flex-col items-center gap-4 max-w-5xl w-full" style="position:relative">' +
        '<img id="lb-img" src="" alt="" class="rounded-xl" style="max-width:90vw;max-height:80vh;object-fit:contain;">' +
        '<p id="lb-caption" class="text-white text-sm text-center opacity-80"></p>' +
        '<p id="lb-counter" class="text-white/50 text-xs"></p>' +
      '</div>' +
      '<button id="lb-next" class="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10" aria-label="Next image">' +
        '<svg class="w-10 h-10" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>' +
      '</button>';

    document.body.appendChild(lb);

    // Close on backdrop click
    lb.addEventListener('click', function (e) {
      if (e.target === lb) closeLightbox();
    });

    document.getElementById('lb-close').addEventListener('click', closeLightbox);
    document.getElementById('lb-prev').addEventListener('click', function () { navigateLightbox(-1); });
    document.getElementById('lb-next').addEventListener('click', function () { navigateLightbox(1); });

    // Keyboard navigation
    document.addEventListener('keydown', function (e) {
      if (!lb.classList.contains('active')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') navigateLightbox(1);
      if (e.key === 'ArrowLeft') navigateLightbox(-1);
    });

    // Touch/swipe support
    var touchStartX = 0;
    lb.addEventListener('touchstart', function (e) {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    lb.addEventListener('touchend', function (e) {
      var diff = touchStartX - e.changedTouches[0].screenX;
      if (Math.abs(diff) > 50) navigateLightbox(diff > 0 ? 1 : -1);
    });
  }

  function openLightbox(index) {
    currentIndex = index;
    updateLightboxContent();
    var lb = document.getElementById('lightbox');
    lb.classList.add('active');
    document.body.style.overflow = 'hidden';
    document.getElementById('lb-img').focus();
  }

  function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
    document.body.style.overflow = '';
  }

  function navigateLightbox(direction) {
    currentIndex = (currentIndex + direction + filteredItems.length) % filteredItems.length;
    updateLightboxContent();
  }

  function updateLightboxContent() {
    var item = filteredItems[currentIndex];
    if (!item) return;
    var img = document.getElementById('lb-img');
    var caption = document.getElementById('lb-caption');
    var counter = document.getElementById('lb-counter');
    img.src = item.src;
    img.alt = item.caption;
    caption.textContent = item.caption;
    counter.textContent = (currentIndex + 1) + ' / ' + filteredItems.length;
  }

  // ── Init ─────────────────────────────────────────────────
  function init() {
    var gridContainer = document.getElementById('gallery-grid');
    if (!gridContainer) return;

    var filterContainer = document.getElementById('gallery-filters');
    buildLightbox();
    initFilters(filterContainer, gridContainer);
    renderGrid(gridContainer);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
