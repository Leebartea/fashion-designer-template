/**
 * data/testimonials.js
 * =============================================================
 * Elegant Fashion Palace — Customer Testimonials
 * =============================================================
 * EDIT HERE: Replace these with real customer reviews.
 * Each testimonial is displayed in the homepage slider
 * and optionally on other pages.
 */

const TESTIMONIALS = [

  {
    id: 'tst-001',
    name: 'Adaeze Okafor',
    role: 'Bride, Port Harcourt',
    stars: 5,
    review: 'My wedding dress was absolutely breathtaking. The team at Elegant Fashion Palace listened to every detail I described and brought my dream to life. I received so many compliments! The quality of the French lace and the precision of the fitting were beyond what I expected. I will never go anywhere else for my fashion needs.',
    avatar: 'https://loremflickr.com/100/100/woman,nigerian?lock=101',
    location: 'Port Harcourt, Rivers State',
    itemOrdered: 'Bespoke Bridal Gown',
  },

  {
    id: 'tst-002',
    name: 'Funmilayo Adeyemi',
    role: 'Event Planner, Lagos',
    stars: 5,
    review: 'I order Aso-ebi sets for my clients\' events regularly, and Elegant Fashion Palace is my go-to studio. They always deliver on time, the fabric quality is excellent, and they handle large group orders with zero stress. My clients always ask who made their outfits — and I am always proud to share the name.',
    avatar: 'https://loremflickr.com/100/100/african,woman?lock=102',
    location: 'Victoria Island, Lagos',
    itemOrdered: 'Aso-ebi Group Sets (x12)',
  },

  {
    id: 'tst-003',
    name: 'Chiamaka Eze',
    role: 'Corporate Executive, Abuja',
    stars: 5,
    review: 'The Corporate Chic dress I ordered fits like it was poured onto my body. I wore it to a board presentation and three of my colleagues immediately asked for the designer\'s contact. Professional finish, beautiful fabric, and delivered two days ahead of schedule. This is world-class tailoring.',
    avatar: 'https://loremflickr.com/100/100/businesswoman,african?lock=103',
    location: 'Maitama, Abuja',
    itemOrdered: 'Bespoke Corporate Dress',
  },

  {
    id: 'tst-004',
    name: 'Toluwani Badmus',
    role: 'Fashion Enthusiast, Lagos',
    stars: 5,
    review: 'I bought the Butterfly Crop Set for a birthday lunch and honestly I felt like a runway model! The sage green is exactly as shown in the photo, the fabric is light and airy, and the finish on the seams is so clean. Shipping to Lagos Island was fast too. Very happy customer here!',
    avatar: 'https://loremflickr.com/100/100/young,woman,lagos?lock=104',
    location: 'Lekki, Lagos',
    itemOrdered: 'Butterfly Crop Set',
  },

  {
    id: 'tst-005',
    name: 'Ngozi Mbachu',
    role: 'Mother of the Bride, Enugu',
    stars: 5,
    review: 'I was anxious about getting my outfit made online but the process was so smooth. The measurement guide was clear, the WhatsApp communication was prompt and professional, and when the Ankara gown arrived — I cried happy tears. It fit perfectly and the finishing was immaculate. My daughter\'s wedding was perfect partly because of this.',
    avatar: 'https://loremflickr.com/100/100/mature,woman,african?lock=105',
    location: 'Enugu, Enugu State',
    itemOrdered: 'Ankara Mother of the Bride Gown',
  },

  {
    id: 'tst-006',
    name: 'Sade Lawson',
    role: 'Stylist & Content Creator, Lagos',
    stars: 5,
    review: 'As a stylist, I have very high standards. Elegant Fashion Palace consistently exceeds them. I have collaborated with them on three editorial shoots and every piece has been magazine-quality. The attention to detail, especially the hand-finishing on the Adire pieces, shows real craftsmanship. Highly recommend for anyone who wants fashion that tells a story.',
    avatar: 'https://loremflickr.com/100/100/stylist,nigerian,woman?lock=106',
    location: 'Ibadan, Oyo',
    itemOrdered: 'Editorial Collection (Multiple Pieces)',
  },

];

// Export for Node.js environments
if (typeof module !== 'undefined') module.exports = TESTIMONIALS;
