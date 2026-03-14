# EDIT_PLAN.md — Rebrand Guide for Stitch & Soul Studio Template

Follow these steps in order to fully rebrand this template for a new fashion business.
**Estimated time: 20–30 minutes** for a complete rebrand.

---

## CHANGE 1 — Business Name & WhatsApp Number
**File:** `js/config.js`

```js
businessName: 'YOUR BUSINESS NAME HERE',
whatsappNumber: 'YOUR WHATSAPP NUMBER HERE',  // No +, no spaces. e.g. 2348099887766
whatsappMessage: 'Your default opening message when customer clicks WhatsApp buttons',
logoEmoji: '🪡',  // Change or remove this emoji
```

After saving, the business name and WhatsApp number update automatically across the entire site.

---

## CHANGE 2 — Phone, Email, Address & Hours
**File:** `js/config.js`

```js
phone: '+234 XXX XXX XXXX',
email: 'hello@yourdomain.com',
address: 'Your street address, City, State, Country',
studioHours: {
  weekdays: 'Monday – Friday: 9:00 AM – 6:00 PM',
  saturday: 'Saturday: 10:00 AM – 4:00 PM',
  sunday: 'Sunday: By Appointment Only',
},
```

---

## CHANGE 3 — Social Media Links
**File:** `js/config.js`

```js
social: {
  instagram: 'https://instagram.com/YOUR_HANDLE',
  facebook:  'https://facebook.com/YOUR_PAGE',
  tiktok:    'https://tiktok.com/@YOUR_HANDLE',
  twitter:   'https://twitter.com/YOUR_HANDLE',
  pinterest: 'https://pinterest.com/YOUR_HANDLE',
},
```

Replace `#` with your actual social profile URLs. Leave as `#` for any platforms you don't use.

---

## CHANGE 4 — Brand Colors
**File:** `assets/css/input.css` — `:root` block (light mode) and `.dark` block (dark mode)

```css
:root {
  --color-primary: #8B1A1A;   /* Change to your primary brand color */
  --color-accent:  #C9A96E;   /* Change to your accent/gold color */
  --color-bg:      #FAF7F2;   /* Page background — warm ivory */
}
.dark {
  --color-primary: #C9A96E;   /* Dark mode primary */
  --color-accent:  #8B1A1A;   /* Dark mode accent */
}
```

Also update the matching values in the inline `<style>` block inside each HTML file's `<head>`.

**Also update** `tailwind.config.js`:
```js
colors: {
  primary: { DEFAULT: '#YOUR_COLOR' },
  accent:  { DEFAULT: '#YOUR_COLOR' },
}
```

---

## CHANGE 5 — Collections / Products
**File:** `data/collections.js`

Each item in the `COLLECTIONS` array is one product card. To add a new item:

```js
{
  id: 'w-007',              // Unique ID — just make it up
  category: 'women',        // women | children | formal | couples | bespoke | wedding
  name: 'Your Product Name',
  tagline: 'One-line tagline',
  price: 45000,             // In NGN as a number
  badge: 'New',             // 'New' | 'Bestseller' | 'Limited' | 'Made to Order' | 'Bridal' | null
  description: 'Longer description...',
  sizes: ['S', 'M', 'L', 'XL'],  // or ['Custom'] for bespoke
  fabric: 'Fabric type',
  image: 'assets/images/YOUR_IMAGE.jpg',   // or full URL
  altText: 'Describe the image for accessibility',
  featured: true,           // true = shows on homepage
  whatsappText: 'Pre-filled WhatsApp order message',
},
```

To remove a product: delete the entire object from the array.
To change which items appear on the homepage: set `featured: true` on up to 3 items.

---

## CHANGE 6 — Gallery Images
**File:** `js/gallery-filter.js` — `GALLERY_ITEMS` array (top of file)

Each gallery item:
```js
{
  id: 'g-025',
  category: 'women',        // women | children | events | couples | bespoke
  src: 'assets/images/YOUR_PHOTO.jpg',
  thumb: 'assets/images/YOUR_PHOTO.jpg',  // Same as src for now
  caption: 'Caption shown in lightbox',
  size: 'tall',             // 'tall' | 'wide' | 'square'
},
```

---

## CHANGE 7 — Testimonials
**File:** `data/testimonials.js`

Replace the placeholder testimonials with real client reviews:

```js
{
  id: 'tst-001',
  name: 'Client Full Name',
  role: 'Bride, City',
  stars: 5,
  review: 'The actual review text...',
  avatar: 'https://loremflickr.com/100/100/woman?lock=101',  // or real photo URL
  location: 'City, State',
  itemOrdered: 'Name of the item they ordered',
},
```

---

## CHANGE 8 — FAQ Content
**File:** `data/faq.js`

Edit, add, or remove questions. Each item:
```js
{
  id: 'faq-021',
  category: 'ordering',    // ordering | measurements | fabrics | delivery | bespoke | care | payment | sizing
  question: 'Your question here?',
  answer: 'Detailed answer here...',
},
```

---

## CHANGE 9 — About Page Text
**File:** `about.html`

Search for the comment `<!-- EDIT HERE:` or look for the founder section. Update:
- Founder name (currently "Adaeze Obi-Johnson")
- Founder title / role
- Business founding year (currently 2018)
- Story paragraphs (currently 3 paragraphs of placeholder biography)
- Studio location in the images section
- Stats (500+ clients, 6 years, 12 countries) — update to match your real numbers

---

## CHANGE 10 — Bespoke Page Pricing
**File:** `bespoke.html`

Search for the pricing table. Update the prices in each `<td>` to match your actual rates:
```html
<td style="...;color:var(--color-primary);font-weight:600;">₦25,000</td>  <!-- Change this price -->
```

Also update the currency symbol if needed (₦ for Naira, $ for USD, etc.)

---

## CHANGE 11 — Page Titles & SEO Meta
**File:** Each `.html` file

In each HTML file's `<head>`, update:
```html
<title>Your Page Title — Your Business Name</title>
<meta name="description" content="Your page description for Google search results.">
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<link rel="canonical" href="https://YOURDOMAIN.com/page">
```

Also update `siteUrl` and `twitterHandle` in `js/config.js`:
```js
siteUrl: 'https://yourdomain.com',
twitterHandle: '@yourhandle',
```

---

## CHANGE 12 — Logo
**File:** `js/components.js`

The default logo is an emoji (`🪡`) plus the business name in text. To use a real logo image:

Find this section in `components.js`:
```js
'<span class="text-2xl" aria-hidden="true">' + SITE_CONFIG.logoEmoji + '</span>'
```

Replace with:
```js
'<img src="assets/images/logo.svg" alt="' + SITE_CONFIG.businessName + '" class="h-10 w-auto">'
```

Upload your logo to `assets/images/logo.svg` (or `.png`). Recommended logo dimensions:
- SVG: any size (vector scales perfectly)
- PNG: 400 × 120px minimum, transparent background

---

## CHANGE 13 — Announcement Bar
**File:** `js/config.js`

```js
announcement: {
  show: true,           // Set to false to hide the bar completely
  text: 'Your announcement message here',
  link: 'appointment.html',  // Page to link to
  linkText: 'Book Now',      // Link text
},
```

---

## CHANGE 14 — Map Embed (Appointment Page)
**File:** `appointment.html`

Find the map placeholder div and replace it with a real Google Maps embed:

1. Go to [maps.google.com](https://maps.google.com)
2. Search for your address
3. Click Share → Embed a map → Copy HTML
4. Paste the `<iframe>` inside the map placeholder div
5. Add `class="w-full h-full border-0"` to the iframe

---

## Quick Reference: Where Each Thing is Controlled

| What | File |
|------|------|
| Business name, phone, WhatsApp | `js/config.js` |
| Brand colors | `assets/css/input.css` + inline `<style>` in each HTML |
| Navigation links | `js/config.js` → `navLinks` |
| Navbar & footer HTML | `js/components.js` |
| Products/collections | `data/collections.js` |
| Gallery images | `js/gallery-filter.js` → `GALLERY_ITEMS` |
| Testimonials | `data/testimonials.js` |
| FAQ questions | `data/faq.js` |
| About page content | `about.html` |
| Bespoke pricing table | `bespoke.html` |
| Sizing chart | `policy.html` |
| SEO titles & descriptions | Each `.html` file `<head>` |
| Fonts | `assets/css/input.css` → `--font-heading`, `--font-body` + Google Fonts `<link>` |
