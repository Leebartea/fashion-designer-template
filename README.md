# Stitch & Soul Studio — Fashion Designer Website Template

A complete, production-ready multi-page website template for African fashion designers and tailoring studios. Built with Tailwind CSS, vanilla JavaScript, and fully optimised for WhatsApp-first conversion.

---

## Quick Start (No Build Step Required)

All HTML pages load Tailwind via CDN. You can open any `.html` file directly in a browser and it works.

```bash
# Optional: Run a local dev server for best experience
npx serve .
# or
python3 -m http.server 8080
```

Then open `http://localhost:8080` in your browser.

---

## Folder Structure

```
Fashion Designer/
├── index.html              # Homepage
├── about.html              # About the studio
├── shop.html               # Full collections grid with filters
├── bespoke.html            # Bespoke orders + measurement form
├── gallery.html            # Portfolio gallery with lightbox
├── appointment.html        # Book a consultation
├── faq.html                # Frequently asked questions
├── wedding.html            # Wedding & events services
├── policy.html             # Sizing, returns, care, delivery
│
├── assets/
│   ├── css/
│   │   ├── input.css       # Tailwind source — run CLI build
│   │   └── style.css       # Built output (generated — gitignored)
│   └── images/             # All real photos (WhatsApp + PHOTO- files)
│
├── js/
│   ├── config.js           # ALL site settings — start here when rebranding
│   ├── theme.js            # Dark/light mode manager
│   ├── components.js       # Navbar, footer, WhatsApp float injection
│   ├── main.js             # Scroll reveal, sticky header, stats counter
│   ├── collections-render.js  # Renders shop grid from data/collections.js
│   ├── gallery-filter.js   # Gallery masonry grid + lightbox
│   ├── slider.js           # Testimonial auto-slider
│   ├── faq.js              # FAQ accordion + category filter
│   └── measurement-form.js # Bespoke form → WhatsApp redirect
│
├── data/
│   ├── collections.js      # All product/collection data
│   ├── testimonials.js     # Customer review data
│   └── faq.js              # FAQ data
│
├── tailwind.config.js      # Tailwind configuration
├── package.json            # npm scripts for CLI build
├── vercel.json             # Vercel routing + cache headers
├── .gitignore
├── LICENSE
├── README.md               # This file
├── EDIT_PLAN.md            # Step-by-step rebrand guide
├── IMAGES.md               # Image placement map
├── CONTENT.md              # All text content for editing
└── DEPLOY_CHECKLIST.md     # Pre-launch checklist
```

---

## Build with Tailwind CLI (Optional — for production)

The CDN version is fine for development. For production deployment, build an optimised CSS file:

```bash
# Install dependencies
npm install

# Build once (minified)
npm run build

# Watch for changes during development
npm run watch
```

The built file outputs to `assets/css/style.css`. All HTML pages already link to it — it just won't exist until you run the build.

---

## Deployment

### Option 1: Netlify (Recommended — Free)
1. Go to [netlify.com](https://netlify.com) and sign up
2. Click "Add new site" → "Deploy manually"
3. Drag and drop the entire `Fashion Designer/` folder
4. Your site is live in seconds with a `.netlify.app` URL
5. Add your custom domain in Site Settings → Domains

### Option 2: Vercel
1. Go to [vercel.com](https://vercel.com) and sign up
2. Install Vercel CLI: `npm i -g vercel`
3. Run `vercel` in the project folder
4. Follow the prompts — your site will be live in under a minute

### Option 3: cPanel / Shared Hosting
1. ZIP the entire project folder
2. Upload via File Manager or FTP to `public_html/`
3. Extract and ensure `index.html` is in the root
4. Your site is live at your domain

---

## Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| HTML5 | Semantic | Markup |
| Tailwind CSS | 3.4+ | Styling (CDN or CLI) |
| Vanilla JavaScript | ES6+ | All interactivity |
| Google Fonts | — | Cormorant Garamond + Inter |

No frameworks. No build tool required. No dependencies at runtime.

---

## Browser Support

- Chrome 90+ (primary target)
- Firefox 88+
- Safari 14+
- Samsung Internet 14+
- Edge 90+

Mobile tested at: 320px, 375px, 390px, 768px, 1024px, 1280px, 1440px

---

## Credits

- Typography: [Google Fonts — Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) + [Inter](https://fonts.google.com/specimen/Inter)
- CSS Framework: [Tailwind CSS](https://tailwindcss.com)
- Placeholder images: [LoremFlickr](https://loremflickr.com)
- WhatsApp integration: [wa.me](https://wa.me) direct link API

---

## License

MIT — see LICENSE file. You are free to use, modify, and sell products built with this template.
