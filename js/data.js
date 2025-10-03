// ===== PRODUCTS (5 items) =====
const products = [
  {
    id: 1,
    name: "Iron Man Photo Frame",
    price: 399,
    category: "Photo Frames",
    rating: 4.9,
    image: "images/ironman.jpg",
    available: true,
    description: "A4 portrait frame with stylized Iron Man artwork. Matte black frame, glare-reduced front.",
    specs: [
      "Size: A4 (210 × 297 mm), Portrait",
      "Frame: Matte Black, MDF/Aluminium profile",
      "Front: Acrylic/Glass, glare-reduced",
      "Mat: Optional thin white mat",
      "Mount: Wall hook included",
      "Print: HD art (matte/soft-gloss)"
    ],
    reviews: [{ user: "VIRK User", rating: 5, comment: "Looks epic on the wall!" }],
    colors: ["Black"],
    stock: 25
  },
  {
    id: 2,
    name: "Hulk Photo Frame",
    price: 299,
    category: "Photo Frames",
    rating: 4.8,
    image: "images/hulk.jpg",
    available: true,
    description: "A4 portrait frame featuring a bold Hulk-themed illustration. Ready to hang.",
    specs: [
      "Size: A4 (210 × 297 mm), Portrait",
      "Frame: Matte Black",
      "Front: Acrylic/Glass",
      "Finish: Vibrant HD print",
      "Mount: Wall mount included"
    ],
    reviews: [{ user: "Aman", rating: 5, comment: "Strong colors, great finish." }],
    colors: ["Black"],
    stock: 40
  },
  {
    id: 3,
    name: "Thor Photo Frame",
    price: 399,
    category: "Photo Frames",
    rating: 4.9,
    image: "images/thor.jpg",
    available: true,
    description: "A4 portrait deep-box style with Thor/Mjolnir-inspired art and matte premium print.",
    specs: [
      "Size: A4 (210 × 297 mm), Portrait",
      "Frame: Deep box, Matte Black",
      "Front: Acrylic, subtle reflection",
      "Finish: Matte premium print",
      "Mount: Wall mount only"
    ],
    reviews: [{ user: "Neha", rating: 5, comment: "Premium look and feel." }],
    colors: ["Black"],
    stock: 30
  },
  {
    id: 4,
    name: "Captain America Photo Frame",
    price: 449,
    category: "Photo Frames",
    rating: 4.7,
    image: "images/captain.jpg",
    available: true,
    description: "A4 portrait with shield-centric artwork, scratch-resistant HD print.",
    specs: [
      "Size: A4 (210 × 297 mm), Portrait",
      "Frame: Matte Black",
      "Front: Acrylic/Glass",
      "Finish: Scratch-resistant HD print",
      "Mount: Desk or Wall"
    ],
    reviews: [{ user: "Karan", rating: 4.7, comment: "Sharp details and colors." }],
    colors: ["Black"],
    stock: 20
  },
  {
    id: 5,
    name: "Wanda Photo Frame",
    price: 399,
    category: "Photo Frames",
    rating: 5.0,
    image: "images/wanda.jpg",
    available: true,
    description: "A4 portrait frame featuring elegant Wanda-themed artwork with red magical accents.",
    specs: [
      "Size: A4 (210 × 297 mm), Portrait",
      "Frame: Matte Black",
      "Front: Acrylic/Glass",
      "Finish: HD print (gloss/matte)",
      "Mount: Wall hook included"
    ],
    reviews: [{ user: "Simran", rating: 5, comment: "Stunning centerpiece!" }],
    colors: ["Black"],
    stock: 28
  }
];

// ===== CATEGORIES (unchanged) =====
const categories = ['All', 'Photo Frames'];

// ===== PROMOTIONS (unchanged) =====
const promotions = [
  {
    id: 1,
    title: 'Summer Sale',
    discount: '20% OFF',
    code: 'SUMMER20',
    validUntil: '2025-02-01'
  },
  {
    id: 2,
    title: 'New User Special',
    discount: '₹100 OFF',
    code: 'NEWUSER',
    validUntil: '2025-03-01'
  },
  {
    id: 3,
    title: 'Fashion Week',
    discount: '30% OFF',
    code: 'FASHION30',
    validUntil: '2025-01-31'
  }
];

// ===== NOTIFICATIONS (unchanged) =====
const notifications = [
  { id: 1, type: 'order', title: 'Order Delivered', message: 'Your order #1234 has been delivered successfully', timestamp: new Date(2025, 0, 14, 8, 30).getTime(), isRead: false, icon: 'fa-box-check', color: 'green' },
  { id: 2, type: 'promo', title: 'Special Offer', message: 'Get 50% off on all winter collection items!', timestamp: new Date(2025, 0, 14, 7, 15).getTime(), isRead: false, icon: 'fa-tag', color: 'orange' },
  { id: 3, type: 'news', title: 'New Collection Arrived', message: 'Check out our latest spring collection', timestamp: new Date(2025, 0, 13, 18, 45).getTime(), isRead: true, icon: 'fa-tshirt', color: 'blue' },
  { id: 4, type: 'system', title: 'Profile Updated', message: 'Your profile information has been updated successfully', timestamp: new Date(2025, 0, 13, 15, 20).getTime(), isRead: true, icon: 'fa-user-check', color: 'purple' }
];

// ===== TRENDING TAGS (unchanged) =====
const trendingTags = [
  { id: 1, name: 'Collection', searches: 15420 },
  { id: 2, name: 'Casual', searches: 12350 },
  { id: 3, name: 'Sport', searches: 11200 }
];

// Persist products (keep same as your app expects)
localStorage.setItem('products', JSON.stringify(products));
