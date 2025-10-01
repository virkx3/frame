const products = [
  {
    id: 1,
    name: "Modern Edge Frame - Small",
    price: 399,
    category: "Photo Frames",
    rating: 4.9,
    image: "https://cdn.pixabay.com/photo/2023/04/11/15/51/ai-generated-7917611_1280.jpg",
    available: true,
    description: "Premium modern-edge portrait frame. Great for posters and portraits.",
    specs: ["Material: Acrylic/Glass front", "Orientation: Portrait", "Ready-to-hang"],
    reviews: [{ user: "VIRK User", rating: 5, comment: "Looks great on my wall!" }],
    colors: ["Black"],
    stock: 25
  },
  {
    id: 2,
    name: "Classic Wooden Frame - 5x7",
    price: 299,
    category: "Photo Frames",
    rating: 4.8,
    image: "https://cdn.pixabay.com/photo/2024/05/14/10/51/ai-generated-8760871_1280.png",
    available: true,
    description: "Timeless 5x7 wooden frame with smooth finish.",
    specs: ["Material: Wood", "Orientation: Portrait", "Desk/Wall mount"],
    reviews: [{ user: "Aman", rating: 5, comment: "Solid build quality." }],
    colors: ["Walnut"],
    stock: 40
  },
  {
    id: 3,
    name: "Minimalist Acrylic Frame",
    price: 399,
    category: "Photo Frames",
    rating: 4.9,
    image: "https://cdn.pixabay.com/photo/2024/01/26/15/42/venom-8534168_1280.jpg",
    available: true,
    description: "Clean, minimal acrylic frame that lets the art shine.",
    specs: ["Material: Acrylic", "Orientation: Portrait", "Scratch resistant"],
    reviews: [{ user: "Neha", rating: 5, comment: "Minimal and premium." }],
    colors: ["Clear"],
    stock: 30
  },
  {
    id: 4,
    name: "Gallery Set - 3 Pcs",
    price: 299,
    category: "Photo Frames",
    rating: 4.7,
    image: "https://cdn.pixabay.com/photo/2022/06/05/10/58/action-figures-7243778_1280.jpg",
    available: true,
    description: "Set of 3 frames to create a simple gallery wall.",
    specs: ["Set of 3", "Portrait orientation", "Mounting hardware included"],
    reviews: [{ user: "Rohit", rating: 4.5, comment: "Value for money." }],
    colors: ["Black"],
    stock: 35
  },
  {
    id: 5,
    name: "Desktop Photo Stand",
    price: 399,
    category: "Photo Frames",
    rating: 4.8,
    image: "https://cdn.pixabay.com/photo/2023/12/01/22/27/spiderman-8424632_1280.jpg",
    available: true,
    description: "Compact portrait stand for desks and shelves.",
    specs: ["Free-standing", "Portrait", "Anti-slip base"],
    reviews: [{ user: "Simran", rating: 5, comment: "Perfect desk size." }],
    colors: ["Black"],
    stock: 50
  },
  {
    id: 6,
    name: "Large Poster Frame",
    price: 299,
    category: "Photo Frames",
    rating: 4.7,
    image: "https://cdn.pixabay.com/photo/2021/02/10/13/16/iron-man-6002054_1280.jpg",
    available: true,
    description: "Affordable large poster frame for portrait artwork.",
    specs: ["Lightweight", "Portrait", "Wall mount"],
    reviews: [{ user: "Aisha", rating: 4.6, comment: "Nice budget frame." }],
    colors: ["Black"],
    stock: 28
  },
  {
    id: 7,
    name: "Ornate Gold Frame",
    price: 399,
    category: "Photo Frames",
    rating: 4.9,
    image: "https://cdn.pixabay.com/photo/2023/06/28/20/04/ai-generated-8095124_1280.png",
    available: true,
    description: "Vintage-style ornate frame for elegant portraits.",
    specs: ["Material: Resin/Gold finish", "Portrait", "Wall mount"],
    reviews: [{ user: "Karan", rating: 5, comment: "Royal look!" }],
    colors: ["Gold"],
    stock: 20
  },
  {
    id: 8,
    name: "Deep Box Frame - Black",
    price: 299,
    category: "Photo Frames",
    rating: 4.8,
    image: "https://cdn.pixabay.com/photo/2023/06/28/06/35/ai-generated-8093603_1280.jpg",
    available: true,
    description: "Shadow-style deep box frame in matte black.",
    specs: ["Shadow depth", "Portrait", "Includes spacer"],
    reviews: [{ user: "Meera", rating: 4.8, comment: "Looks premium on wall." }],
    colors: ["Black"],
    stock: 33
  },
  {
    id: 9,
    name: "Metallic Slim Frame",
    price: 399,
    category: "Photo Frames",
    rating: 4.8,
    image: "https://cdn.pixabay.com/photo/2019/02/20/10/51/spiderman-4008954_1280.jpg",
    available: true,
    description: "Slim metallic profile for a modern portrait look.",
    specs: ["Aluminium profile", "Portrait", "Lightweight"],
    reviews: [{ user: "Ishaan", rating: 4.9, comment: "Sleek and sturdy." }],
    colors: ["Silver"],
    stock: 26
  },
  {
    id: 10,
    name: "Square Insta Frame",
    price: 299,
    category: "Photo Frames",
    rating: 4.7,
    image: "https://cdn.pixabay.com/photo/2022/08/09/09/01/black-7374488_1280.png",
    available: true,
    description: "Square portrait-style frame—great for vertical prints.",
    specs: ["Square format", "Portrait display", "Wall/Desk"],
    reviews: [{ user: "Riya", rating: 4.6, comment: "Cute and compact." }],
    colors: ["Black"],
    stock: 45
  }
];

const categories = ['All', 'Photo Frames'];

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

// Notification data (unchanged)
const notifications = [
  { id: 1, type: 'order', title: 'Order Delivered', message: 'Your order #1234 has been delivered successfully', timestamp: new Date(2025, 0, 14, 8, 30).getTime(), isRead: false, icon: 'fa-box-check', color: 'green' },
  { id: 2, type: 'promo', title: 'Special Offer', message: 'Get 50% off on all winter collection items!', timestamp: new Date(2025, 0, 14, 7, 15).getTime(), isRead: false, icon: 'fa-tag', color: 'orange' },
  { id: 3, type: 'news', title: 'New Collection Arrived', message: 'Check out our latest spring collection', timestamp: new Date(2025, 0, 13, 18, 45).getTime(), isRead: true, icon: 'fa-tshirt', color: 'blue' },
  { id: 4, type: 'system', title: 'Profile Updated', message: 'Your profile information has been updated successfully', timestamp: new Date(2025, 0, 13, 15, 20).getTime(), isRead: true, icon: 'fa-user-check', color: 'purple' }
];

// Trending tags data (unchanged)
const trendingTags = [
  { id: 1, name: 'Collection', searches: 15420 },
  { id: 2, name: 'Casual', searches: 12350 },
  { id: 3, name: 'Sport', searches: 11200 }
];

localStorage.setItem('products', JSON.stringify(products));
