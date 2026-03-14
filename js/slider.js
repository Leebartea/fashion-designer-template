/**
 * js/slider.js
 * =============================================================
 * Elegant Fashion Palace — Testimonial Slider
 * =============================================================
 * Reads from: data/testimonials.js (TESTIMONIALS array)
 * Target element: #testimonials-slider
 *
 * Features: auto-play (5s), dot navigation, touch/mouse drag,
 * pause on hover, responsive visible slide count.
 */

(function () {
  'use strict';

  var currentIndex = 0;
  var autoPlayTimer = null;
  var isMouseDown = false;
  var mouseStartX = 0;
  var touchStartX = 0;
  var sliderTrack = null;
  var totalSlides = 0;
  var visibleCount = 1;
  var AUTO_PLAY_DELAY = 5000;

  // ── Star Rating HTML ──────────────────────────────────────
  function renderStars(count) {
    var stars = '';
    for (var i = 0; i < 5; i++) {
      stars += '<svg class="w-4 h-4 ' + (i < count ? 'text-amber-400' : 'text-gray-300 dark:text-gray-600') +
        '" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">' +
        '<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>' +
        '</svg>';
    }
    return stars;
  }

  // ── Render Slides ─────────────────────────────────────────
  function renderSlides(container) {
    if (!container || !window.TESTIMONIALS) return;

    totalSlides = TESTIMONIALS.length;

    container.innerHTML = TESTIMONIALS.map(function (t) {
      return (
        '<div class="testimonial-slide flex-shrink-0 px-3" role="group" aria-label="Testimonial from ' + t.name + '">' +
          '<div class="testimonial-card h-full">' +
            // Stars
            '<div class="flex gap-0.5" aria-label="' + t.stars + ' out of 5 stars">' +
              renderStars(t.stars) +
            '</div>' +
            // Review
            '<blockquote class="text-sm leading-relaxed flex-1" style="color:var(--color-text-muted)">' +
              '&ldquo;' + t.review + '&rdquo;' +
            '</blockquote>' +
            // Author
            '<div class="flex items-center gap-3 pt-4 border-t" style="border-color:var(--color-border)">' +
              '<img src="' + t.avatar + '" alt="' + t.name + '" ' +
                'class="w-10 h-10 rounded-full object-cover flex-shrink-0" loading="lazy" width="40" height="40">' +
              '<div>' +
                '<p class="font-semibold text-sm" style="color:var(--color-text)">' + t.name + '</p>' +
                '<p class="text-xs" style="color:var(--color-text-muted)">' + t.role + '</p>' +
                '<p class="text-xs italic" style="color:var(--color-accent)">' + t.itemOrdered + '</p>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>'
      );
    }).join('');
  }

  // ── Responsive visible count ──────────────────────────────
  function getVisibleCount() {
    var w = window.innerWidth;
    if (w >= 1024) return 3;
    if (w >= 640)  return 2;
    return 1;
  }

  // ── Update Slide Position ─────────────────────────────────
  function goToSlide(index) {
    visibleCount = getVisibleCount();
    var maxIndex = Math.max(0, totalSlides - visibleCount);
    currentIndex = Math.max(0, Math.min(index, maxIndex));

    var slideWidth = sliderTrack.parentElement.offsetWidth / visibleCount;
    sliderTrack.style.transform = 'translateX(-' + (currentIndex * slideWidth) + 'px)';

    // Update slide widths
    sliderTrack.querySelectorAll('.testimonial-slide').forEach(function (slide) {
      slide.style.width = (100 / visibleCount) + '%';
    });

    updateDots();
  }

  // ── Dots ──────────────────────────────────────────────────
  function renderDots(dotsContainer) {
    if (!dotsContainer) return;
    visibleCount = getVisibleCount();
    var dotCount = Math.max(1, totalSlides - visibleCount + 1);

    dotsContainer.innerHTML = '';
    for (var i = 0; i < dotCount; i++) {
      var dot = document.createElement('button');
      dot.className = 'slider-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
      dot.setAttribute('data-index', i);
      dot.addEventListener('click', (function (idx) {
        return function () {
          goToSlide(idx);
          resetAutoPlay();
        };
      })(i));
      dotsContainer.appendChild(dot);
    }
  }

  function updateDots() {
    var dotsContainer = document.getElementById('slider-dots');
    if (!dotsContainer) return;
    dotsContainer.querySelectorAll('.slider-dot').forEach(function (dot, i) {
      dot.classList.toggle('active', i === currentIndex);
    });
  }

  // ── Auto-play ─────────────────────────────────────────────
  function startAutoPlay() {
    clearInterval(autoPlayTimer);
    autoPlayTimer = setInterval(function () {
      var maxIndex = Math.max(0, totalSlides - getVisibleCount());
      var next = currentIndex >= maxIndex ? 0 : currentIndex + 1;
      goToSlide(next);
    }, AUTO_PLAY_DELAY);
  }

  function resetAutoPlay() {
    clearInterval(autoPlayTimer);
    startAutoPlay();
  }

  // ── Touch / Mouse Drag ────────────────────────────────────
  function initDrag(wrapper) {
    // Touch
    wrapper.addEventListener('touchstart', function (e) {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    wrapper.addEventListener('touchend', function (e) {
      var diff = touchStartX - e.changedTouches[0].screenX;
      if (Math.abs(diff) > 50) {
        goToSlide(diff > 0 ? currentIndex + 1 : currentIndex - 1);
        resetAutoPlay();
      }
    });

    // Mouse drag
    wrapper.addEventListener('mousedown', function (e) {
      isMouseDown = true;
      mouseStartX = e.clientX;
      wrapper.style.cursor = 'grabbing';
    });

    window.addEventListener('mouseup', function (e) {
      if (!isMouseDown) return;
      isMouseDown = false;
      wrapper.style.cursor = '';
      var diff = mouseStartX - e.clientX;
      if (Math.abs(diff) > 50) {
        goToSlide(diff > 0 ? currentIndex + 1 : currentIndex - 1);
        resetAutoPlay();
      }
    });

    // Pause on hover
    wrapper.addEventListener('mouseenter', function () { clearInterval(autoPlayTimer); });
    wrapper.addEventListener('mouseleave', function () { startAutoPlay(); });
  }

  // ── Init ─────────────────────────────────────────────────
  function init() {
    var slider = document.getElementById('testimonials-slider');
    if (!slider) return;
    if (!window.TESTIMONIALS || !TESTIMONIALS.length) {
      console.warn('slider.js: TESTIMONIALS not found. Load data/testimonials.js first.');
      return;
    }

    sliderTrack = slider.querySelector('.slider-track');
    if (!sliderTrack) return;

    var dotsContainer = document.getElementById('slider-dots');
    var prevBtn = document.getElementById('slider-prev');
    var nextBtn = document.getElementById('slider-next');

    renderSlides(sliderTrack);
    totalSlides = TESTIMONIALS.length;

    renderDots(dotsContainer);
    goToSlide(0);
    startAutoPlay();
    initDrag(slider);

    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        goToSlide(currentIndex - 1);
        resetAutoPlay();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        goToSlide(currentIndex + 1);
        resetAutoPlay();
      });
    }

    // Re-calculate on resize
    var resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        renderDots(dotsContainer);
        goToSlide(Math.min(currentIndex, Math.max(0, totalSlides - getVisibleCount())));
      }, 250);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
