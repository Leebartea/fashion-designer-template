/**
 * js/config.js
 * =============================================================
 * Elegant Fashion Palace — Site Configuration
 * Single source of truth for all editable site settings.
 * =============================================================
 * EDIT HERE: All values in this file can be changed to rebrand
 * the template. See EDIT_PLAN.md for step-by-step instructions.
 */

const SITE_CONFIG = {

  // ── BUSINESS IDENTITY ──────────────────────────────────────
  // EDIT HERE: Change these to match your business
  businessName: 'Elegant Fashion Palace',
  tagline: 'Dressing You in Elegance, Adorning You in Luxury',
  description: 'Elegant Fashion Palace — premium ready-to-wear and bespoke African fashion in Ibadan, Nigeria. Flowing bubu gowns, stylish jumbo pants, elegant maxi skirts, kimonos, and beautiful jewellery accessories for every woman.',
  logoEmoji: '👑',  // EDIT HERE: Remove or replace with <img> tag in components.js

  // ── CONTACT & WHATSAPP ─────────────────────────────────────
  // EDIT HERE: Replace with your actual WhatsApp number (no + or spaces)
  whatsappNumber: '2348012345678',  // EDIT: e.g. '2348099876543'
  // EDIT HERE: Default WhatsApp message when customer clicks order buttons
  whatsappMessage: 'Hello Elegant Fashion Palace! I found you on your website and I\'d love to place an order or learn more about your collections.',
  // EDIT HERE: Replace with your actual phone number
  phone: '+234 801 234 5678',  // EDIT: your display number
  // EDIT HERE: Replace with your actual email address
  email: 'hello@elegantfashionpalace.com',  // EDIT
  // EDIT HERE: Studio address
  address: 'Olowo Cocoa Shopping Complex, Babanla Oluwo, Ibadan, Oyo',
  mapUrl: 'https://maps.app.goo.gl/1ayUgazzzSjBNvF96',  // Real Google Maps link
  // EDIT HERE: Update your opening hours
  studioHours: {
    weekdays: 'Monday – Friday: 9:00 AM – 6:00 PM',
    saturday: 'Saturday: 10:00 AM – 5:00 PM',
    sunday: 'Sunday: By Appointment Only',
  },

  // ── SOCIAL MEDIA ───────────────────────────────────────────
  // EDIT HERE: Replace # with your actual social media profile URLs
  social: {
    instagram: 'https://instagram.com/elegantfashionpalace',
    facebook:  'https://facebook.com/mariam.adedayo',  // EDIT: confirm exact profile URL
    tiktok:    'https://tiktok.com/@omowumy_01',
    twitter:   '',   // Leave empty to hide icon
    pinterest: '',   // Leave empty to hide icon
  },

  // ── ANNOUNCEMENT BAR ───────────────────────────────────────
  // EDIT HERE: Set show:false to hide the announcement bar
  announcement: {
    show: true,
    text: '✨ New arrivals now available — Bubu gowns, Kimonos & Jewellery!',
    link: 'shop.html',
    linkText: 'Shop Now',
  },

  // ── NAVIGATION ─────────────────────────────────────────────
  // EDIT HERE: Add, remove, or rename navigation links
  navLinks: [
    { label: 'Home',        href: 'index.html' },
    { label: 'Shop',        href: 'shop.html' },
    { label: 'Bespoke',     href: 'bespoke.html' },
    { label: 'Gallery',     href: 'gallery.html' },
    { label: 'Wedding',     href: 'wedding.html' },
    { label: 'About',       href: 'about.html' },
    { label: 'FAQ',         href: 'faq.html' },
  ],

  // ── CURRENCY & LOCALE ──────────────────────────────────────
  // EDIT HERE: Change currency symbol and locale for your market
  currency: '₦',
  currencyLocale: 'en-NG',  // Used for number formatting

  // ── SEO & META ─────────────────────────────────────────────
  // EDIT HERE: Update with your actual domain and OG image
  siteUrl: 'https://elegantfashionpalace.com',  // EDIT: your live domain
  ogImage: 'assets/images/WhatsApp Image 2026-03-13 at 11.43.22.jpeg',
  twitterHandle: '@elegantfashion',  // EDIT

  // ── THEME ──────────────────────────────────────────────────
  // EDIT HERE: 'light' or 'dark' — default theme for first-time visitors
  defaultTheme: 'light',

};

// Export for use in other scripts
if (typeof module !== 'undefined') module.exports = SITE_CONFIG;
