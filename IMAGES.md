# IMAGES.md — Complete Image Map for Stitch & Soul Studio Template

This file documents every image used in the template, where it appears, and what category it falls under.

---

## REAL PHOTOS (Already in assets/images/)

These are the actual photos provided by the client. Use them exactly as referenced.

### Group 1: WhatsApp Images — Women's Fashion

| Filename | Content | Used In | Category |
|----------|---------|---------|---------|
| `WhatsApp Image 2026-03-13 at 11.43.22.jpeg` | Professional model in terracotta/adire wide-sleeve gown | **HERO IMAGE** (index.html bg), About page hero, Gallery | women |
| `WhatsApp Image 2026-03-13 at 11.43.14.jpeg` | 4 Ankara halter dresses on mannequins (4 colorways) | Homepage studio section, Shop grid (col w-002), Gallery | women |
| `WhatsApp Image 2026-03-13 at 11.43.33.jpeg` | Lady in green/gold Ankara tiered ruffle dress | Final CTA section bg (index.html), Shop card (w-005), Gallery | women |
| `WhatsApp Image 2026-03-13 at 11.43.35.jpeg` | Green adire backless halter dress | Shop card (w-003), About studio images, Gallery, Bespoke fabric section | women |
| `WhatsApp Image 2026-03-13 at 11.43.39.jpeg` | Orange kaftan with circular Ankara appliqués | Shop card (w-004), Homepage studio section, About studio images, Gallery | women |
| `WhatsApp Image 2026-03-13 at 11.43.26.jpeg` | Emerald green abaya with gold trim | Shop card (w-006), Gallery (g-007), About studio images | women |

### Group 2: WhatsApp Images — Formal & Wedding

| Filename | Content | Used In | Category |
|----------|---------|---------|---------|
| `WhatsApp Image 2026-03-13 at 11.43.24.jpeg` | Black velvet peplum + white pleated maxi (gold mannequin) | Shop card (f-001), Bespoke hero bg, Category card (Bespoke), Gallery (g-006), Wedding page | formal |
| `WhatsApp Image 2026-03-13 at 11.43.30.jpeg` | White beaded formal gown with pleated skirt | Shop card (f-002), Shop card (wd-001), Wedding hero bg, Bespoke fabric section | formal / wedding |

### Group 3: WhatsApp Images — Children

| Filename | Content | Used In | Category |
|----------|---------|---------|---------|
| `WhatsApp Image 2026-03-13 at 11.43.15.jpeg` | Red sequin layered ball gown (child) | Shop card (c-001), Category card (Children), Gallery (g-010) | children |
| `WhatsApp Image 2026-03-13 at 11.43.16.jpeg` | Child in green striped traditional kaftan | Shop card (c-002), Gallery (g-011) | children |
| `WhatsApp Image 2026-03-13 at 11.43.19.jpeg` | Colorful striped kimono/bubu (child) | Shop card (c-003), Gallery (g-012) | children |
| `WhatsApp Image 2026-03-13 at 11.43.28.jpeg` | Purple star-print tulle ball gown (child) | Shop card (c-004), Gallery (g-013) | children |
| `WhatsApp Image 2026-03-13 at 11.43.43.jpeg` | Children's rose print shirt+skirt set (flat lay) | Shop card (c-005), Gallery (g-014) | children |
| `WhatsApp Image 2026-03-13 at 11.43.47.jpeg` | Child's Ankara+tulle dress (flat lay) | Shop card (c-006), Gallery (g-015) | children |

### Group 4: WhatsApp Images — Couples

| Filename | Content | Used In | Category |
|----------|---------|---------|---------|
| `WhatsApp Image 2026-03-13 at 11.43.50.jpeg` | Couple in matching brown outfits (outdoor) | Shop card (cp-001), Category card (Couples/Wedding), Gallery (g-020), Wedding page | couples |

### Group 5: SKIP — Unusable images
The following images were flagged as unusable and are NOT used in the template:
- `WhatsApp Image 2026-03-13 at 11.43.18.jpeg`
- `WhatsApp Image 2026-03-13 at 11.43.21.jpeg`
- `WhatsApp Image 2026-03-13 at 11.43.32.jpeg`

---

## PLACEHOLDER IMAGES (loremflickr.com)

These are used for items where no real photo is available. Replace them with real photos as you build the client's portfolio.

| URL | Used For |
|-----|---------|
| `https://loremflickr.com/600/750/african,fashion,corporate,woman?lock=301` | Bespoke Corporate Blazer Set (f-003) |
| `https://loremflickr.com/600/750/couple,ankara,african,fashion?lock=401` | Ankara Couple Co-ord Set (cp-002) |
| `https://loremflickr.com/600/750/nigerian,couple,traditional,wedding?lock=402` | Traditional Wedding Couple Set (cp-003) |
| `https://loremflickr.com/600/750/evening,gown,african,fashion?lock=501` | Bespoke Evening Gown (b-001) |
| `https://loremflickr.com/600/750/nigerian,fashion,lace,group?lock=502` | Aso-ebi Group Sets (b-002) |
| `https://loremflickr.com/600/750/agbada,nigerian,menswear,formal?lock=503` | Men's Bespoke Agbada (b-003) |
| `https://loremflickr.com/600/750/bridesmaids,african,wedding,fashion?lock=601` | Bridal Party Package (wd-002) |
| `https://loremflickr.com/600/750/nigerian,bride,traditional,ankara?lock=602` | Traditional Bridal Iro & Buba (wd-003) |
| Various gallery placeholders | Gallery items g-008, g-009, g-016–g-019, g-021–g-024 |

---

## IMAGE REPLACEMENT GUIDE

### To replace a collection product image:
1. Open `data/collections.js`
2. Find the item by its `id` (e.g., `'w-001'`)
3. Change the `image` value: `image: 'assets/images/NEW_PHOTO.jpg'`
4. Update the `altText` to describe the new image

### To replace a gallery image:
1. Open `js/gallery-filter.js`
2. Find the item in `GALLERY_ITEMS` by its `id`
3. Change both `src` and `thumb` values to the new image path

### To replace the hero image:
1. Open `index.html`
2. Search for `WhatsApp Image 2026-03-13 at 11.43.22.jpeg`
3. Replace with your new hero image path
4. Update the `alt` text to describe the new image

---

## RECOMMENDED IMAGE DIMENSIONS

| Usage | Width | Height | Format | Notes |
|-------|-------|--------|--------|-------|
| Hero background | 1920px | 1080px+ | WebP/JPEG | High quality, large file OK |
| Product cards | 480px | 640px | WebP/JPEG | Aspect ratio 3:4 |
| Gallery items | 600px | 600–900px | WebP/JPEG | Variable height for masonry |
| Category cards | 600px | 800px | WebP/JPEG | Aspect ratio 3:4 |
| About/Studio images | 800px | 600–900px | WebP/JPEG | Square or portrait |
| Testimonial avatars | 100px | 100px | WebP/JPEG | Square, circular crop |
| Logo | 400px | 120px | SVG preferred | Transparent background |

### Format Recommendation:
- Use **WebP** for all new photos (30–40% smaller than JPEG with same quality)
- Keep JPEG as a fallback using the `<picture>` element
- Compress all images to under 200KB per card image, under 500KB for hero images
- Use `loading="lazy"` on all below-fold images (already implemented)

---

## ADDING NEW IMAGES

1. Place the image file in `assets/images/`
2. Use filenames without spaces — use hyphens: `ankara-maxi-dress.jpg`
3. Reference as: `assets/images/ankara-maxi-dress.jpg`
4. Add meaningful `alt` text describing what the image shows

---

## CURRENT IMAGE COUNT

| Category | Real Photos | Placeholders |
|----------|------------|-------------|
| Women's Fashion | 6 | 0 |
| Children's Wear | 6 | 1 |
| Formal | 2 | 1 |
| Couples | 1 | 2 |
| Bespoke | 0 | 3 |
| Wedding | 1 | 2 |
| Gallery extras | 0 | 8 |
| **Total** | **16** | **17** |
