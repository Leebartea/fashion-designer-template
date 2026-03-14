/**
 * js/collections-render.js
 * =============================================================
 * Elegant Fashion Palace — Shop Grid Renderer
 * =============================================================
 * Reads from: data/collections.js (COLLECTIONS array)
 * Used on: shop.html (full grid), index.html (featured cards)
 *
 * Target elements:
 *   #shop-grid — full product grid (shop.html)
 *   #shop-filters — filter button row (shop.html)
 *   #featured-grid — featured cards (index.html, max 3)
 *
 * URL query: ?filter=women pre-selects a category
 */

(function () {
  'use strict';

  var currentFilter = 'all';

  // ── Read URL filter param ─────────────────────────────────
  function getUrlFilter() {
    try {
      return new URLSearchParams(window.location.search).get('filter') || 'all';
    } catch (e) {
      return 'all';
    }
  }

  // ── Build WhatsApp order URL ──────────────────────────────
  function buildOrderUrl(item) {
    var text = item.whatsappText || ('Hello! I\'m interested in the ' + item.name + ' (' + formatPrice(item.price) + '). Is it available?');
    return 'https://wa.me/' + SITE_CONFIG.whatsappNumber + '?text=' + encodeURIComponent(text);
  }

  // ── Format price ──────────────────────────────────────────
  function formatPrice(amount) {
    var sym = SITE_CONFIG.currency || '₦';
    try {
      return sym + new Intl.NumberFormat('en-NG').format(amount);
    } catch (e) {
      return sym + amount.toLocaleString();
    }
  }

  // ── Badge HTML ────────────────────────────────────────────
  function renderBadge(badge) {
    if (!badge) return '';
    var cls = 'badge ';
    if (badge === 'New')            cls += 'badge-new';
    else if (badge === 'Bestseller') cls += 'badge-primary';
    else if (badge === 'Limited')   cls += 'badge-accent';
    else if (badge === 'Bridal')    cls += 'badge-accent';
    else                            cls += 'badge-primary';
    return '<span class="' + cls + '">' + badge + '</span>';
  }

  // ── Sizes HTML ────────────────────────────────────────────
  function renderSizes(sizes) {
    if (!sizes || !sizes.length) return '';
    return sizes.map(function (s) {
      return '<span class="size-chip">' + s + '</span>';
    }).join('');
  }

  // ── Single Card HTML ──────────────────────────────────────
  function renderCard(item) {
    var orderUrl = buildOrderUrl(item);
    return (
      '<article class="collection-card" data-category="' + item.category + '" data-id="' + item.id + '">' +
        '<div class="collection-card__image">' +
          (item.badge ? '<div class="absolute top-3 left-3 z-10">' + renderBadge(item.badge) + '</div>' : '') +
          '<img src="' + item.image + '" alt="' + item.altText + '" loading="lazy" width="480" height="640">' +
        '</div>' +
        '<div class="collection-card__body">' +
          '<div class="flex items-start justify-between gap-2">' +
            '<div>' +
              '<h3 class="font-heading font-semibold text-lg leading-tight" style="color:var(--color-text)">' + item.name + '</h3>' +
              '<p class="text-xs mt-0.5" style="color:var(--color-text-muted)">' + item.fabric + '</p>' +
            '</div>' +
            '<p class="font-heading font-bold text-lg flex-shrink-0" style="color:var(--color-primary)">' + formatPrice(item.price) + '</p>' +
          '</div>' +
          '<p class="text-sm leading-relaxed line-clamp-2" style="color:var(--color-text-muted)">' + item.tagline + '</p>' +
          (item.sizes && item.sizes[0] !== 'Custom'
            ? '<div class="flex flex-wrap gap-1.5 mt-1">' + renderSizes(item.sizes) + '</div>'
            : '<p class="text-xs italic mt-1" style="color:var(--color-accent)">Made to your measurements</p>') +
          '<a href="' + orderUrl + '" target="_blank" rel="noopener noreferrer" ' +
            'class="btn btn-whatsapp w-full mt-3" ' +
            'aria-label="Order ' + item.name + ' via WhatsApp">' +
            '<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>' +
            'Order via WhatsApp' +
          '</a>' +
        '</div>' +
      '</article>'
    );
  }

  // ── Render Full Shop Grid ─────────────────────────────────
  function renderShopGrid(container, filter) {
    if (!container || !window.COLLECTIONS) return;

    var items = filter === 'all'
      ? COLLECTIONS
      : COLLECTIONS.filter(function (c) { return c.category === filter; });

    if (!items.length) {
      container.innerHTML =
        '<div class="empty-state col-span-full">' +
          '<svg class="w-14 h-14 opacity-20 mx-auto mb-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"/></svg>' +
          '<h3 class="font-heading text-xl font-semibold mb-2" style="color:var(--color-text)">No items in this category yet</h3>' +
          '<p class="text-sm" style="color:var(--color-text-muted)">Check back soon or browse all collections.</p>' +
          '<button class="btn btn-outline mt-4" onclick="setFilter(\'all\')">View All</button>' +
        '</div>';
      return;
    }

    container.innerHTML = items.map(renderCard).join('');
  }

  // ── Render Filter Buttons ─────────────────────────────────
  function renderFilters(filterContainer, gridContainer) {
    if (!filterContainer) return;

    // EDIT HERE: Add/remove/rename filter categories
    var filters = [
      { value: 'all',        label: 'All Collections' },
      { value: 'women',      label: 'Women' },
      { value: 'children',   label: 'Children' },
      { value: 'formal',     label: 'Formal' },
      { value: 'couples',    label: 'Couples' },
      { value: 'bespoke',    label: 'Bespoke' },
      { value: 'wedding',    label: 'Wedding' },
    ];

    filterContainer.innerHTML = filters.map(function (f) {
      return (
        '<button class="filter-btn' + (f.value === currentFilter ? ' active' : '') + '" ' +
          'data-filter="' + f.value + '" ' +
          'aria-pressed="' + (f.value === currentFilter ? 'true' : 'false') + '">' +
          f.label +
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
        currentFilter = this.getAttribute('data-filter');
        renderShopGrid(gridContainer, currentFilter);
      });
    });
  }

  // ── Render Featured (Homepage) ────────────────────────────
  function renderFeatured(container) {
    if (!container || !window.COLLECTIONS) return;
    var featured = COLLECTIONS.filter(function (c) { return c.featured; }).slice(0, 3);
    if (!featured.length) {
      featured = COLLECTIONS.slice(0, 3);
    }
    container.innerHTML = featured.map(renderCard).join('');
  }

  // ── Global setFilter (called from empty state button) ─────
  window.setFilter = function (filter) {
    var filterContainer = document.getElementById('shop-filters');
    var gridContainer = document.getElementById('shop-grid');
    if (filterContainer) {
      filterContainer.querySelectorAll('.filter-btn').forEach(function (b) {
        b.classList.toggle('active', b.getAttribute('data-filter') === filter);
        b.setAttribute('aria-pressed', b.getAttribute('data-filter') === filter ? 'true' : 'false');
      });
    }
    currentFilter = filter;
    renderShopGrid(gridContainer, filter);
  };

  // ── Init ─────────────────────────────────────────────────
  function init() {
    // Shop page
    var shopGrid = document.getElementById('shop-grid');
    var shopFilters = document.getElementById('shop-filters');
    if (shopGrid) {
      currentFilter = getUrlFilter();
      renderFilters(shopFilters, shopGrid);
      renderShopGrid(shopGrid, currentFilter);

      // Sync active filter button with URL param
      if (shopFilters && currentFilter !== 'all') {
        var btn = shopFilters.querySelector('[data-filter="' + currentFilter + '"]');
        if (btn) {
          shopFilters.querySelectorAll('.filter-btn').forEach(function (b) {
            b.classList.remove('active');
            b.setAttribute('aria-pressed', 'false');
          });
          btn.classList.add('active');
          btn.setAttribute('aria-pressed', 'true');
        }
      }
    }

    // Homepage featured
    var featuredGrid = document.getElementById('featured-grid');
    if (featuredGrid) {
      renderFeatured(featuredGrid);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
