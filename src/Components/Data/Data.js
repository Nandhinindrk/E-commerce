// Data.js
import photo6 from '../Assets/photo6.avif'
import photo4 from '../Assets/photo4.avif'
import kurti from '../Assets/kurti.avif'
import photo7 from '../Assets/photo7.avif'
import photo9 from '../Assets/photo9.avif'
import photo2 from '../Assets/photo2.avif'
import tshirt from '../Assets/tshirt.avif'
import Western1 from '../Assets/western1.avif'
import summer1 from '../Assets/summer1.avif'
import kurti2 from '../Assets/kurti2.jpeg'
import work1 from '../Assets/work1.avif'
import western2 from '../Assets/western2.jpg'
import summer2 from '../Assets/summer2.avif'
import men6 from '../Assets/men6.jpg'
import men7 from '../Assets/men7.avif'
import men8 from '../Assets/men8.avif'
import men9 from '../Assets/men9.avif'
import men10 from '../Assets/men10.avif'
import men11 from '../Assets/men11.avif'
import men12 from '../Assets/men12.avif'
import men13 from '../Assets/men13.jpg'
import men14 from '../Assets/men14.jpg'

export const womensProducts = [
  {
    id: 1,
    name: 'Floral Kurti',
    category: 'Kurti',
    price: 1520,
    image: kurti,
    color:  'White',
    description: "A beautifully crafted Floral Kurti that adds a touch of elegance to your wardrobe. Made from soft, breathable fabric, this kurti features vibrant floral patterns that make it perfect for casual outings and festive occasions. Pair it with leggings or palazzos for a chic look.",
    rating: 4.5, // New property for rating
  },
  {
    id: 2,
    name: 'Office Work Wear',
    category: 'Work wear',
    price: 835,
    image: photo9,
    colors:  'White',
    description:"Designed for the modern professional, this Office Work Wear outfit combines style with comfort. It includes tailored trousers and a stylish blouse made from high-quality fabric that ensures all-day comfort. The subtle yet sophisticated design makes it suitable for meetings and corporate events.",
    rating: 4.2
  },
  {
    id: 3,
    name: 'Casual Western Dress',
    category: 'Western wear',
    price: 1940,
    image: photo7,
    color:  'Black',
    description:"This Casual Western Dress is a must-have for any fashion-forward individual. With its flattering silhouette and trendy design, it’s perfect for a day out or a casual evening. Made from lightweight fabric, this dress ensures you stay cool while looking effortlessly chic.",
    rating: 4.7
  },
  {
    id: 4,
    name: 'Summer Maxi Dress',
    category: 'Summer wear',
    price: 1525,
    image: photo4,
    color: 'Yellow',
    description:"Embrace the warmth of summer with this airy and comfortable Summer Maxi Dress. Featuring a flowy design and vibrant colors, this dress is perfect for beach outings, picnics, or brunch with friends. The lightweight material and adjustable straps ensure a perfect fit.",
    rating: 4.3
  },
  {
    id: 5,
    name: 'Printed Anarkali',
    category: 'Kurti',
    price: 1780,
    image: photo6,
    color:  'Red',
    description:"Celebrate tradition with a modern twist in this Printed Anarkali. The intricate print and flared silhouette give it a classic look, making it ideal for festive celebrations or family gatherings. Pair it with traditional jewelry for a complete ethnic ensemble.",
    rating: 4.6
  },
  {
    id: 6,
    name: 'Evening Gown',
    category: 'Western wear',
    price: 2060,
    image: Western1,
    color:  'Emerald',
    description:"Step into elegance with this stunning Evening Gown, designed for special occasions. The gown features exquisite detailing and a flattering fit that accentuates your silhouette. Perfect for formal events, it ensures you make a lasting impression.",
    rating: 4.8
  },
  {
    id: 7,
    name: 'Casual Tank Top',
    category: 'Summer wear',
    price: 615,
    image: summer1,
    color:  'Pink',
    description:"Stay cool and stylish with this Casual Tank Top. Made from soft, breathable fabric, it’s perfect for layering or wearing alone. Whether you’re heading to the gym or enjoying a day out, this versatile top is a staple for any casual wardrobe.",
    rating: 4.1
  },
  {
    id: 8,
    name: 'Chikankari Kurta',
    category: 'Kurti',
    price: 1230,
    image: kurti2,
    color: 'Green',
    description:"This Chikankari Kurta showcases the timeless art of embroidery, featuring intricate hand-stitched designs that add elegance to any outfit. Perfect for both casual and semi-formal occasions, it can be paired with jeans or traditional bottoms for a chic look.",
    rating: 4.4
  },
  {
    id: 9,
    name: 'Professional Pencil Skirt',
    category: 'Work wear',
    price: 1540,
    image: work1,
    color: 'Black',
    description:"This Professional Pencil Skirt is a wardrobe essential for any working woman. With its sleek design and flattering fit, it pairs perfectly with blouses and blazers. Made from high-quality fabric, it ensures comfort and style during long office hours.",
    rating: 4.3
  },
  {
    id: 10,
    name: 'Denim Jacket',
    category: 'Western wear',
    price: 1545,
    image: western2,
    color: 'Blue',
    description:"A classic Denim Jacket that never goes out of style. Perfect for layering, this jacket features a timeless design that complements any outfit. Whether you’re dressing up or down, it adds a cool edge to your look while keeping you comfortable.",
    rating: 4.5
  },
  {
    id: 11,
    name: 'Boho Maxi Dress',
    category: 'Summer wear',
    price: 1735,
    image: summer2,
    color: 'Brown',
    description:"This Boho Maxi Dress is all about free-spirited style. With its flowing design and vibrant patterns, it’s perfect for music festivals or relaxed outings. Made from soft, breathable fabric, this dress offers comfort without compromising on style.",
    rating: 4.2
  }
];

export const mensProducts = [
  {
    id: 12,
    name: 'Graphic T-shirt',
    category: 'T-shirt',
    price: 1500,
    image: tshirt,
    color: 'White',
    description: "A comfortable classic graphic t-shirt perfect for casual outings.",
    rating: 4.3
  },
  {
    id: 13,
    name: 'Plain Shirt',
    category: 'Shirts',
    price: 3000,
    image: photo2,
    color:'Green',
    description: "A classic  shirt perfect for formal occasions.",
    rating: 4.4
  },
  {
    id: 14,
    name: "Classic Cotton T-Shirt",
    category: "T-shirt",
    price: 600,
    image: men6,
    color: 'White',
    description: "A comfortable classic cotton t-shirt perfect for casual outings.",
    rating: 4.5
  },
  {
    id: 15,
    name: "Slim Fit Denim Jeans",
    category: "Bottoms",
    price: 1599,
    image: men7,
    color: 'Dark Blue',
    description: "Stylish slim fit jeans that provide a modern look.",
    rating: 4.7
  },
  {
    id: 16,
    name: "Casual Denim Jacket",
    category: "Outerwear",
    price: 1499,
    image: men8,
    color: 'Blue', 
    description: "A versatile denim jacket suitable for all seasons.",
    rating: 4.6
  },
  {
    id: 17,
    name: "Formal White Shirt",
    category: "Shirts",
    price: 1299,
    image: men9,
    color: 'White',
    description: "A classic white shirt perfect for formal occasions.",
    rating: 4.8
  },
  {
    id: 18,
    name: "Chino Shorts",
    category: "Bottoms",
    price: 759,
    image: men10,
    color: 'Sandal',
    description: "Comfortable chino shorts ideal for summer outings.",
    rating: 4.4
  },
  {
    id: 19,
    name: "V-Neck Sweater",
    category: "Sweaters",
    price: 700,
    image: men11,
    color:  'Grey',
    description: "A stylish V-neck sweater perfect for layering.",
    rating: 4.5
  },
  {
    id: 20,
    name: "Slim Fit Suit",
    category: "Suits",
    price: 3000,
    image: men12,
    color: 'Navy Blue', 
    description: "A modern slim fit suit for formal events.",
    rating: 4.9
  },
  {
    id: 21,
    name: "Performance Gym Shorts",
    category: "Activewear",
    price: 499,
    image: men13,
    color: 'Black', 
    description: "Lightweight gym shorts designed for maximum comfort during workouts.",
    rating: 4.3
  },
  
  {
    id: 22,
    name: "Fleece Hoodie",
    category: "Outerwear",
    price: 1099,
    image: men14,
    color: 'Red',
    description: "A cozy fleece hoodie perfect for cooler days.",
    rating: 4.4
  }
];


