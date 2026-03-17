// Simulated Amazon Product Database
const products = [
    // Electronics
    
       {
  id: "ELEC-001",
  name: "Yesteel 9 Pairs Gold Hoop Earrings for Women",
  price: "PKR 2,651.03",
  listPrice: "PKR 22,834.07",
  category: "Jewelry",
  subCategory: "Earrings",
  brand: "Yesteel",
  image: "https://m.media-amazon.com/images/I/81SFI8Zv8nL._AC_SY675_.jpg",
  tag: "Bestseller",
  badgeClass: "sale",
   amazonLink: "https://amzn.to/3NhYyuF",
  rating: 4.8,
  reviewCount: 12450,
  desc: "9 pairs of trendy gold hoop earrings for women. High-quality fashion jewelry at an affordable price. Perfect for daily wear, parties, gifts, and special occasions.",
  features: [
    "9 different pairs of hoop earrings",
    "Gold-tone fashion design",
    "Lightweight and comfortable",
    "Suitable for daily wear",
    "Great gift option"
  ]
},
    
       {
id: "ELEC-002",
  name: "Chunky Gold Hoop Earrings for Women: 9 Pairs 14k Gold-Plated Resin Hoop Earrings",
  price: "PKR2,790.71",
  category: "Jewelry",
  subCategory: "Earrings",
  image: "https://m.media-amazon.com/images/I/816Nys8TfYL._AC_SY675_.jpg",
  tag: "Bestseller",
  badgeClass: "sale",
   amazonLink: "https://amzn.to/4710yOG",
  rating: 4.8,
  reviewCount: 12450,
  desc: "Unique Design: This value pack comes with 9 pairs of different acrylic earrings, Including tear drop shape, water drop shape and C shape，adding a beautiful comprehensive set to your earring collection.",
  features: [
    "9 Pairs Set – Multiple designs in one value pack",
    "Trendy Shapes – Tear drop, water drop & C-shape styles",
    "Lightweight and comfortable",
    "Suitable for daily wear",
    "Great gift option"
  ]
},
    {
        id: "ELEC-00",
        name: "Glamnetic Press On Nails - Frosted Cranberry | Short Almond Fake Nails in Deep Red with Jelly Finish, Salon Quality Holiday Nails | 15 Sizes - 30 Nail Kit with Glue",
        price: "PKR5,022.63 ",
        category: "Jewelry",
        image: "https://m.media-amazon.com/images/I/616jaPJhuCL._SL1500_.jpg",
        tag: "15% OFF",
        badgeClass: "sale",
        amazonLink: "https://amzn.to/40xaxaN",
        rating: 4.9,
        reviewCount: "2,100",
        desc: "Upgrade your style and daily routine with this high-quality product designed for comfort, durability, and modern use.",
        features: ["Styling avalible in different colors"]
    },

    // Fashion & Accessories
    {
        id: "FASH-0010",
        name: "Good Molecules Yerba Mate Wake Up Eye Gel - Hydrating Under Eye Gel Cream with Hyaluronic Acid and Caffeine - Target Dark Circles and Puffiness - Skin Care for Face",
        price: "PKR1,666.76",
        oldPrice: null,
        category: "Beauty",
        image: "https://m.media-amazon.com/images/I/71QsFtfDUCL._SL1500_.jpg",
        tag: "Premium",
        badgeClass: "new",
        amazonLink: "https://amzn.to/40Clp79",
        rating: 4.6,
        reviewCount: "1,240",
        desc: "Infused with powerful ingredients like Yerba Mate, Hyaluronic Acid, and Caffeine, it helps to deeply hydrate the under-eye area while improving skin texture and brightness. The cooling gel formula absorbs quickly, leaving your skin feeling fresh, smooth, and energized.",
        features: ["Reduces dark circles & puffiness"]
    },
    {
        id: "FASH-002",
        name: "Classic Aviator Sunglasses",
        price: "45.00",
        oldPrice: "65.00",
        category: "Accessories",
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800",
        tag: "Deal",
        badgeClass: "sale",
        amazonLink: "#",
        rating: 4.5,
        reviewCount: "3,400",
        desc: "Protect your eyes in style with these polarized, UV400 classic aviator shades.",
        features: ["Polarized Lenses", "UV400 Protection", "Lightweight Frame"]
    },

    // Home & Kitchen
    {
        id: "HOME-001",
        name: "Ergonomic Mesh Office Chair",
        price: "245.00",
        oldPrice: "299.00",
        category: "Home & Office",
        image: "https://images.unsplash.com/photo-1505797149-43b0ad766a6e?w=800",
        tag: "Top Rated",
        badgeClass: "sale",
        amazonLink: "#",
        rating: 4.5,
        reviewCount: "5,600",
        desc: "Breathable mesh and adjustable lumbar support for comfortable, long working hours.",
        features: ["360-degree swivel", "Adjustable Armrests", "Heavy-duty Base"]
    },
    {
        id: "HOME-002",
        name: "Smart Coffee Maker & Espresso Machine",
        price: "159.00",
        oldPrice: null,
        category: "Home & Kitchen",
        image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=800",
        tag: "Must Have",
        badgeClass: "new",
        amazonLink: "#",
        rating: 4.7,
        reviewCount: "4,105",
        desc: "Brew café-quality coffee at home with this app-controlled smart coffee machine.",
        features: ["App Controlled", "Built-in Grinder", "Auto-Clean"]
    },
    {
        id: "HOME-003",
        name: "Ceramic Non-Stick Cookware Set (12 PC)",
        price: "129.99",
        oldPrice: "199.99",
        category: "Home & Kitchen",
        image: "https://images.unsplash.com/photo-1584990347449-a6e0fb62d1ea?w=800",
        tag: "35% OFF",
        badgeClass: "sale",
        amazonLink: "#",
        rating: 4.8,
        reviewCount: "8,300",
        desc: "Healthy, toxin-free cooking with this complete, beautiful ceramic pot and pan set.",
        features: ["Toxin-Free", "Oven Safe", "Dishwasher Safe"]
    },

    // Beauty & Health
    {
        id: "BEAU-001",
        name: "Advanced Hydration Facial Serum",
        price: "34.00",
        oldPrice: null,
        category: "Beauty",
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800",
        tag: "Bestseller",
        badgeClass: "new",
        amazonLink: "#",
        rating: 4.9,
        reviewCount: "15,200",
        desc: "Dermatologist-tested serum with Hyaluronic Acid for deep, all-day hydration.",
        features: ["Hyaluronic Acid", "Fragrance Free", "Vegan"]
    },
    {
        id: "BEAU-002",
        name: "Sonic Electric Toothbrush",
        price: "89.00",
        oldPrice: "120.00",
        category: "Health",
        image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800",
        tag: "Deal",
        badgeClass: "sale",
        amazonLink: "#",
        rating: 4.7,
        reviewCount: "11,500",
        desc: "Remove up to 10x more plaque with 4 brushing modes and smart pressure sensor.",
        features: ["4 Modes", "Pressure Sensor", "Travel Case Included"]
    }
];

const categories = ["Electronics", "Accessories", "Home & Office", "Home & Kitchen", "Beauty", "Health"];

// Utility to generate Star Ratings HTML
function generateStars(rating) {
    let starsHtml = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
        starsHtml += '<i class="fas fa-star"></i>';
    }
    if (hasHalfStar) {
        starsHtml += '<i class="fas fa-star-half-alt"></i>';
    }
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        starsHtml += '<i class="far fa-star"></i>';
    }
    return starsHtml;
}