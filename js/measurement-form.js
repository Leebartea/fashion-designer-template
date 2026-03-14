/**
 * js/measurement-form.js
 * =============================================================
 * Elegant Fashion Palace — Bespoke Measurement Form
 * =============================================================
 * Used on: bespoke.html, appointment.html
 *
 * On valid submit: builds a WhatsApp pre-filled message
 * with all measurements and redirects to wa.me link.
 *
 * Form ID: #measurement-form
 */

(function () {
  'use strict';

  // ── Validation Helpers ────────────────────────────────────

  function isValidPhone(value) {
    // Allow Nigerian and international formats
    return /^[\+]?[\d\s\-\(\)]{8,15}$/.test(value.trim());
  }

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
  }

  function showError(field, msg) {
    field.classList.add('error');
    var errorEl = field.parentElement.querySelector('.form-error');
    if (errorEl) {
      errorEl.textContent = msg;
      errorEl.classList.add('visible');
    }
  }

  function clearError(field) {
    field.classList.remove('error');
    var errorEl = field.parentElement.querySelector('.form-error');
    if (errorEl) {
      errorEl.textContent = '';
      errorEl.classList.remove('visible');
    }
  }

  // ── Build WhatsApp Message from Form Data ─────────────────
  function buildWhatsAppMessage(data) {
    var lines = [
      '👗 *Bespoke Order Request — Elegant Fashion Palace*',
      '',
      '*Client Details*',
      '• Name: ' + data.name,
      '• Phone: ' + data.phone,
      (data.email ? '• Email: ' + data.email : ''),
      '',
      '*Outfit Details*',
      '• Style / Design: ' + data.stylePreference,
      '• Occasion: ' + data.occasion,
      '• Budget: ' + data.budget,
      '• Delivery Timeline: ' + data.timeline,
      '',
      '*Measurements (inches unless noted)*',
    ];

    if (data.bust)      lines.push('• Bust/Chest: ' + data.bust + '"');
    if (data.waist)     lines.push('• Waist: ' + data.waist + '"');
    if (data.hips)      lines.push('• Hips: ' + data.hips + '"');
    if (data.height)    lines.push('• Height: ' + data.height);
    if (data.shoulder)  lines.push('• Shoulder Width: ' + data.shoulder + '"');
    if (data.inseam)    lines.push('• Inseam: ' + data.inseam + '"');
    if (data.sleeve)    lines.push('• Sleeve Length: ' + data.sleeve + '"');

    if (data.notes) {
      lines.push('');
      lines.push('*Additional Notes*');
      lines.push(data.notes);
    }

    lines.push('');
    lines.push('_Sent from elegantfashionpalace.com_');

    return lines.filter(function (l) { return l !== undefined; }).join('\n');
  }

  // ── Form Submit Handler ───────────────────────────────────
  function handleSubmit(e) {
    e.preventDefault();

    var form = e.target;
    var isValid = true;

    // Clear all previous errors
    form.querySelectorAll('.form-input, .form-select, .form-textarea').forEach(clearError);

    // ── Required field validation ──────────────────────────
    var nameField  = form.querySelector('#field-name');
    var phoneField = form.querySelector('#field-phone');
    var styleField = form.querySelector('#field-style');
    var occasionField = form.querySelector('#field-occasion');
    var budgetField   = form.querySelector('#field-budget');
    var timelineField = form.querySelector('#field-timeline');

    if (nameField && !nameField.value.trim()) {
      showError(nameField, 'Please enter your full name.');
      isValid = false;
    }

    if (phoneField) {
      if (!phoneField.value.trim()) {
        showError(phoneField, 'Please enter your phone number.');
        isValid = false;
      } else if (!isValidPhone(phoneField.value)) {
        showError(phoneField, 'Please enter a valid phone number.');
        isValid = false;
      }
    }

    var emailField = form.querySelector('#field-email');
    if (emailField && emailField.value.trim() && !isValidEmail(emailField.value)) {
      showError(emailField, 'Please enter a valid email address.');
      isValid = false;
    }

    if (styleField && !styleField.value.trim()) {
      showError(styleField, 'Please describe your desired style or design.');
      isValid = false;
    }

    if (occasionField && !occasionField.value) {
      showError(occasionField, 'Please select an occasion.');
      isValid = false;
    }

    if (budgetField && !budgetField.value) {
      showError(budgetField, 'Please select your budget range.');
      isValid = false;
    }

    if (timelineField && !timelineField.value) {
      showError(timelineField, 'Please select your delivery timeline.');
      isValid = false;
    }

    if (!isValid) {
      // Scroll to first error
      var firstError = form.querySelector('.form-input.error, .form-select.error, .form-textarea.error');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        firstError.focus();
      }
      return;
    }

    // ── Collect data ───────────────────────────────────────
    var data = {
      name:            nameField ? nameField.value.trim() : '',
      phone:           phoneField ? phoneField.value.trim() : '',
      email:           emailField ? emailField.value.trim() : '',
      stylePreference: styleField ? styleField.value.trim() : '',
      occasion:        occasionField ? occasionField.value : '',
      budget:          budgetField ? budgetField.value : '',
      timeline:        timelineField ? timelineField.value : '',
      bust:            getVal(form, '#field-bust'),
      waist:           getVal(form, '#field-waist'),
      hips:            getVal(form, '#field-hips'),
      height:          getVal(form, '#field-height'),
      shoulder:        getVal(form, '#field-shoulder'),
      inseam:          getVal(form, '#field-inseam'),
      sleeve:          getVal(form, '#field-sleeve'),
      notes:           getVal(form, '#field-notes'),
    };

    var message = buildWhatsAppMessage(data);
    var url = 'https://wa.me/' + SITE_CONFIG.whatsappNumber + '?text=' + encodeURIComponent(message);

    // Show success state briefly, then redirect
    var submitBtn = form.querySelector('[type="submit"]');
    if (submitBtn) {
      submitBtn.textContent = 'Opening WhatsApp...';
      submitBtn.disabled = true;
    }

    setTimeout(function () {
      window.open(url, '_blank', 'noopener,noreferrer');
      if (submitBtn) {
        submitBtn.textContent = 'Send Measurements';
        submitBtn.disabled = false;
      }
      // Show success message
      var successMsg = document.getElementById('form-success');
      if (successMsg) {
        successMsg.classList.remove('hidden');
        successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 400);
  }

  function getVal(form, selector) {
    var el = form.querySelector(selector);
    return el ? el.value.trim() : '';
  }

  // ── Live Validation (on blur) ─────────────────────────────
  function initLiveValidation(form) {
    form.querySelectorAll('.form-input, .form-select, .form-textarea').forEach(function (field) {
      field.addEventListener('blur', function () {
        if (this.hasAttribute('required') && !this.value.trim()) {
          showError(this, 'This field is required.');
        } else {
          clearError(this);
        }
      });
      field.addEventListener('input', function () {
        if (this.classList.contains('error')) clearError(this);
      });
    });
  }

  // ── Init ─────────────────────────────────────────────────
  function init() {
    var form = document.getElementById('measurement-form');
    if (!form) return;

    form.addEventListener('submit', handleSubmit);
    initLiveValidation(form);

    // Unit toggle (inches / cm)
    var unitToggle = document.getElementById('unit-toggle');
    var unitLabel  = document.getElementById('unit-label');
    if (unitToggle && unitLabel) {
      unitToggle.addEventListener('change', function () {
        unitLabel.textContent = this.checked ? 'cm' : 'inches';
        form.querySelectorAll('.unit-hint').forEach(function (el) {
          el.textContent = unitToggle.checked ? 'cm' : '"';
        });
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
