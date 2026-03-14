/**
 * data/faq.js
 * =============================================================
 * Elegant Fashion Palace — Frequently Asked Questions
 * =============================================================
 * EDIT HERE: Update questions and answers to match your business.
 * Categories: "ordering" | "measurements" | "fabrics" | "delivery"
 *             | "bespoke" | "care" | "payment" | "sizing"
 */

const FAQ_ITEMS = [

  // ── ORDERING ─────────────────────────────────────────────
  {
    id: 'faq-001',
    category: 'ordering',
    question: 'How do I place an order?',
    answer: 'Ordering is simple! Browse our Shop or Collections page, find what you love, and click the "Order via WhatsApp" button. This opens a pre-filled WhatsApp message to our studio. You can also DM us directly on Instagram or visit our studio in Ibadan, Oyo. For bespoke orders, fill in our Bespoke Request Form and we\'ll get back to you within 24 hours.',
  },

  {
    id: 'faq-002',
    category: 'ordering',
    question: 'Can I order from outside Nigeria?',
    answer: 'Absolutely! We ship internationally. We\'ve fulfilled orders to the UK, USA, Canada, Germany, and across Africa. International shipping typically takes 7–14 business days via DHL or FedEx. Shipping costs are calculated at checkout based on destination and weight. Contact us on WhatsApp to get an exact quote for your location.',
  },

  {
    id: 'faq-003',
    category: 'ordering',
    question: 'Can I order for a group or event (Aso-ebi)?',
    answer: 'Yes! Group orders are one of our specialties. We offer group discounts for Aso-ebi orders of 4 or more sets. Simply send us a message on WhatsApp with your event date, number of people, and your chosen fabric (or let us suggest options). We recommend placing group orders at least 6 weeks before your event date.',
  },

  {
    id: 'faq-004',
    category: 'ordering',
    question: 'Do you have a physical store I can visit?',
    answer: 'Yes! Our studio is at 14 Bode Thomas Street, Ibadan, Oyo. We\'re open Monday–Friday 9AM–6PM and Saturday 10AM–4PM. Sunday visits are by appointment only. We\'d love to meet you! You can browse our ready-to-wear rack, touch our fabric samples, and discuss bespoke options face-to-face with our lead designer.',
  },

  // ── MEASUREMENTS ─────────────────────────────────────────
  {
    id: 'faq-005',
    category: 'measurements',
    question: 'How do I take my measurements correctly?',
    answer: 'We have a detailed measurement guide on our Bespoke page. In summary: use a soft tape measure, measure in your underwear (or fitted clothing), keep the tape snug but not tight, and have a friend help if possible. We need: Bust/Chest, Waist, Hips, Shoulder Width, Height, and for trousers, your Inseam. If you\'re unsure, send us a WhatsApp message — we\'ll walk you through it or video call to guide you.',
  },

  {
    id: 'faq-006',
    category: 'measurements',
    question: 'What if my measurements don\'t match standard sizes?',
    answer: 'That\'s perfectly fine — in fact, that\'s why we exist! Every human body is beautifully unique, and our bespoke service is designed exactly for this. We work with all body types, curves, and proportions. There is no "standard" body at Elegant Fashion Palace. All our bespoke pieces are made to YOUR exact measurements, not to a size chart.',
  },

  {
    id: 'faq-007',
    category: 'measurements',
    question: 'Do you offer fittings before the final garment is completed?',
    answer: 'Yes, for bespoke orders. We typically schedule 1–2 fitting sessions during the making process. Ibadan-based clients can visit our studio for in-person fittings. For out-of-town or international clients, we ship a toile (a test garment in basic fabric) for you to try on and send feedback before we cut the final fabric. Fittings are included in the bespoke price.',
  },

  // ── FABRICS ───────────────────────────────────────────────
  {
    id: 'faq-008',
    category: 'fabrics',
    question: 'What types of fabric do you work with?',
    answer: 'We work with a wide range of African and international fabrics including: Dutch Wax Ankara (multiple suppliers), Adire (hand-dyed), Batik Cotton, Aso-oke (handwoven), French Lace, Swiss Lace, Embroidered Damask (Jacquard), Chiffon, Georgette, Satin, Ponte Knit, Denim, and Cotton Poplin. For bespoke orders, you can supply your own fabric or choose from our curated fabric library.',
  },

  {
    id: 'faq-009',
    category: 'fabrics',
    question: 'Can I supply my own fabric for a bespoke order?',
    answer: 'Yes! Many clients bring their own fabric — especially Aso-ebi fabric bought in the family group. Simply bring or ship the fabric to our studio before the making process begins. We\'ll advise on how much fabric you\'ll need based on your design and measurements. Note: we cannot accept responsibility for fabric quality if you supply your own.',
  },

  {
    id: 'faq-010',
    category: 'fabrics',
    question: 'Are your Ankara fabrics authentic?',
    answer: 'We source our Ankara from verified Nigerian fabric markets (Balogun, Tejuosho) and from established importers of genuine Dutch Wax from Holland and West Africa. We do not knowingly use imitation or substandard Ankara. If fabric authenticity is important to you, please ask and we\'ll share the fabric grade and source for your specific order.',
  },

  // ── DELIVERY ──────────────────────────────────────────────
  {
    id: 'faq-011',
    category: 'delivery',
    question: 'How long does delivery take?',
    answer: 'Ready-to-wear pieces: 2–5 business days within Ibadan/Oyo State, 3–7 days to other Nigerian states. Bespoke orders: 3–4 weeks from confirmation of design and payment of deposit. Wedding/bridal pieces: 6–10 weeks. International orders: 7–14 business days via DHL/FedEx. Rush orders may be available for an additional fee — ask us on WhatsApp.',
  },

  {
    id: 'faq-012',
    category: 'delivery',
    question: 'Do you deliver to all states in Nigeria?',
    answer: 'Yes! We use reputable courier services (GIG Logistics, DHL, Kwik Delivery) to deliver to all 36 states and the FCT. Delivery fees vary by state. Ibadan/Oyo: ₦1,500–₦3,000. Other states: ₦4,500–₦9,000. International delivery is quoted on request. Tracking details are shared via WhatsApp once your order is dispatched.',
  },

  {
    id: 'faq-013',
    category: 'delivery',
    question: 'What if my item is damaged during delivery?',
    answer: 'All our packages are carefully wrapped in tissue paper and a branded garment bag before dispatch. However, if your item arrives damaged, please photograph it immediately and send us a WhatsApp message within 24 hours of delivery. We will work with the courier to resolve the issue and, if necessary, remake or replace your item at no extra cost to you.',
  },

  // ── BESPOKE ───────────────────────────────────────────────
  {
    id: 'faq-014',
    category: 'bespoke',
    question: 'How does the bespoke order process work?',
    answer: 'Our bespoke process has 5 steps: (1) Consultation — you describe your vision, we discuss design, fabric, and timeline. (2) Measurements — in-studio or via our self-measure guide. (3) Fabric Selection — choose from our library or supply your own. (4) Fittings — 1–2 fitting sessions during construction. (5) Collection/Delivery — pick up in-studio or we ship to you. See our Bespoke page for the full guide.',
  },

  {
    id: 'faq-015',
    category: 'bespoke',
    question: 'How much does a bespoke outfit cost?',
    answer: 'Bespoke pricing starts at ₦45,000 for a single top or skirt and goes up to ₦250,000+ for complex bridal or event gowns. The price depends on design complexity, fabric choice, number of pieces, and embellishment. We provide a full itemized quote after your free consultation. A 50% deposit is required to begin work.',
  },

  {
    id: 'faq-016',
    category: 'bespoke',
    question: 'Can I bring inspiration photos from Instagram or Pinterest?',
    answer: 'Yes, please do! We love when clients come with inspiration images — it makes the design process much faster and ensures we are aligned. You can share photos via WhatsApp before your consultation. We take inspiration as a starting point and work with you to adapt it to African fabrics, your body type, and your personal style.',
  },

  // ── CARE ──────────────────────────────────────────────────
  {
    id: 'faq-017',
    category: 'care',
    question: 'How should I care for my Ankara garments?',
    answer: 'Ankara cotton is durable but benefits from gentle care: (1) Wash in cold or lukewarm water. (2) Hand wash or use machine on delicate cycle. (3) Use mild detergent — avoid bleach. (4) Do not soak for long periods. (5) Iron on medium heat while slightly damp. (6) Store hung or loosely folded — avoid crushing. The colors in quality Dutch Wax Ankara are set and won\'t bleed with proper washing.',
  },

  {
    id: 'faq-018',
    category: 'care',
    question: 'How do I care for lace garments?',
    answer: 'Lace garments require extra care: (1) Dry clean is preferred for formal lace gowns. (2) If hand washing, use cold water and very gentle detergent. (3) Never wring — gently squeeze out water. (4) Lay flat to dry on a clean towel. (5) Iron on the wrong side with a pressing cloth. (6) Store in a garment bag away from direct sunlight. (7) Check for loose threads after each wear and fix before washing.',
  },

  // ── PAYMENT ───────────────────────────────────────────────
  {
    id: 'faq-019',
    category: 'payment',
    question: 'What payment methods do you accept?',
    answer: 'We accept: Bank Transfer (Zenith, GT Bank, Access Bank — account details shared via WhatsApp), Cash (in-studio only), Mobile Money (Opay, Palmpay), and for international orders: Wise, Payoneer, or bank wire transfer. We do not currently accept credit/debit card payments online, but this is coming soon. All payments are confirmed before work begins.',
  },

  // ── SIZING ────────────────────────────────────────────────
  {
    id: 'faq-020',
    category: 'sizing',
    question: 'How do your ready-to-wear sizes run?',
    answer: 'Our ready-to-wear pieces are labelled XS through XXL and correspond to Nigerian/African standard sizing which tends to run slightly differently from European or US sizing. We include a detailed size chart on every product listing. In general: XS (Bust 32", Waist 26", Hips 34"), S (34"/28"/36"), M (36"/30"/38"), L (38"/32"/40"), XL (40"/34"/42"), XXL (42"/36"/44"). If you are between sizes, we recommend sizing up. All measurements are approximate — see our Policy page for our sizing commitment.',
  },

];

// Export for Node.js environments
if (typeof module !== 'undefined') module.exports = FAQ_ITEMS;
