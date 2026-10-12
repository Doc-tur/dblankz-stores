import { backPack, baseBallCap, canvasShoes, chinoTrousers, crossBodyBag, denimJacket, headPhones, hoodie, leatherShoes, poloShirt, portableSpeaker, runningTrainers, smartWatch, smartPhonePro, sneakers, streetSneakers, sunGlasses, weekendSweatShirt, whiteTShirt, wirelessEarbuds, wristWatch } from "../assets/index";
// import productImage1 from "../assets/hoodie.jpg"
// import productImage2 from "../assets/street-sneakers.jpg";
// import productImage3 from "../assets/headphones.jpg";
// import productImage4 from "../assets/wristwatch.jpg";
// import productImage5 from "../assets/white-t-shirt.jpg";
// import productImage6 from "../assets/backpack.jpg";
// import productImage7 from "../assets/smartphone-pro.jpg";
// import productImage8 from "../assets/canvas-shoes.jpg";
// import productImage9 from "../assets/denim-jacket.jpg";
// import productImage10 from "../assets/polo-shirt.jpg";
// import productImage11 from "../assets/running-trainers.jpg";
// import productImage12 from "../assets/leather-shoes.jpg";
// import productImage13 from "../assets/smart-watch.jpg";
// import productImage14 from "../assets/portable-bluetooth-speaker.jpg";
// import productImage15 from "../assets/wireless-earbuds.jpg";
// import productImage16 from "../assets/sunglasses.jpg";
// import productImage17 from "../assets/crossbody-bag.jpg";
// import productImage18 from "../assets/baseball-cap.jpg";
// import productImage19 from "../assets/chino-trousers.jpg";
// import productImage20 from "../assets/weekend-sweatshirt.jpg";

export const products = [
  {
    "id": 1,
    "name": "Urban Classic Hoodie",
    "category": "Clothing",
    "price": 18500,
    "image": hoodie,
    "description": "Soft fleece hoodie with a relaxed streetwear fit.",
    "sku": "DBS-0001",
    "stock": 15,
    "colors": [
      "Black",
      "Grey",
      "Navy"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "material": "Cotton blend",
    "featured": true
  },
  {
    "id": 2,
    "name": "Retro Street Sneakers",
    "category": "Shoes",
    "price": 32500,
    "image": streetSneakers,
    "description": "Everyday sneakers with cushioned support and a durable sole.",
    "sku": "DBS-0002",
    "stock": 18,
    "colors": [
      "Red",
      "Black"
    ],
    "sizes": [
      "39",
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "material": "Synthetic mesh and rubber",
    "featured": true
  },
  {
    "id": 3,
    "name": "Wireless Over-Ear Headphones",
    "category": "Gadgets",
    "price": 45000,
    "image": headPhones,
    "description": "Comfortable Bluetooth headphones for music and calls.",
    "sku": "DBS-0003",
    "stock": 21,
    "colors": [
      "Black",
      "Gold"
    ],
    "sizes": [
      "One Size"
    ],
    "material": "Bluetooth wireless",
    "featured": true
  },
  {
    "id": 4,
    "name": "Minimalist Wristwatch",
    "category": "Accessories",
    "price": 28000,
    "image": wristWatch,
    "description": "A sleek analogue watch for casual and formal outfits.",
    "sku": "DBS-0004",
    "stock": 24,
    "colors": [
      "Silver",
      "Black"
    ],
    "sizes": [
      "Adjustable"
    ],
    "material": "Stainless steel",
    "featured": true
  },
  {
    "id": 5,
    "name": "Essential White T-Shirt",
    "category": "Clothing",
    "price": 12000,
    "image": whiteTShirt,
    "description": "Breathable everyday crew-neck T-shirt.",
    "sku": "DBS-0005",
    "stock": 27,
    "colors": [
      "White",
      "Black"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "material": "Cotton",
    "featured": false
  },
  {
    "id": 6,
    "name": "Everyday Backpack",
    "category": "Accessories",
    "price": 24000,
    "image": backPack,
    "description": "Spacious backpack with convenient compartments.",
    "sku": "DBS-0006",
    "stock": 30,
    "colors": [
      "Black",
      "Grey"
    ],
    "sizes": [
      "One Size"
    ],
    "material": "Polyester",
    "featured": false
  },
  {
    "id": 7,
    "name": "Smartphone Pro",
    "category": "Gadgets",
    "price": 285000,
    "image": smartPhonePro,
    "description": "A modern smartphone concept with a bright display.",
    "sku": "DBS-0007",
    "stock": 33,
    "colors": [
      "Black",
      "Blue"
    ],
    "sizes": [
      "128GB"
    ],
    "material": "Touchscreen device",
    "featured": true
  },
  {
    "id": 8,
    "name": "Canvas Low-Top Shoes",
    "category": "Shoes",
    "price": 22000,
    "image": canvasShoes,
    "description": "Versatile canvas shoes with a classic silhouette.",
    "sku": "DBS-0008",
    "stock": 36,
    "colors": [
      "Black",
      "White"
    ],
    "sizes": [
      "39",
      "40",
      "41",
      "42",
      "43"
    ],
    "material": "Canvas and rubber",
    "featured": false
  },
  {
    "id": 9,
    "name": "Denim Jacket",
    "category": "Clothing",
    "price": 38000,
    "image": denimJacket,
    "description": "Classic denim layering piece for casual outfits.",
    "sku": "DBS-0009",
    "stock": 39,
    "colors": [
      "Blue"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "material": "Denim",
    "featured": true
  },
  {
    "id": 10,
    "name": "Classic Polo Shirt",
    "category": "Clothing",
    "price": 16000,
    "image": poloShirt,
    "description": "Smart casual polo with a comfortable fit.",
    "sku": "DBS-0010",
    "stock": 42,
    "colors": [
      "Navy",
      "White"
    ],
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "material": "Cotton pique",
    "featured": false
  },
  {
    "id": 11,
    "name": "Running Trainers",
    "category": "Shoes",
    "price": 39000,
    "image": runningTrainers,
    "description": "Lightweight trainers designed for active days.",
    "sku": "DBS-0011",
    "stock": 45,
    "colors": [
      "White",
      "Grey"
    ],
    "sizes": [
      "39",
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "material": "Mesh and rubber",
    "featured": false
  },
  {
    "id": 12,
    "name": "Leather Casual Shoes",
    "category": "Shoes",
    "price": 48000,
    "image": leatherShoes,
    "description": "Smart casual shoes with a polished look.",
    "sku": "DBS-0012",
    "stock": 48,
    "colors": [
      "Brown",
      "Black"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "material": "Faux leather",
    "featured": false
  },
  {
    "id": 13,
    "name": "Smart Fitness Watch",
    "category": "Gadgets",
    "price": 55000,
    "image": smartWatch,
    "description": "A wearable concept for fitness and daily notifications.",
    "sku": "DBS-0013",
    "stock": 51,
    "colors": [
      "Black",
      "Silver"
    ],
    "sizes": [
      "One Size"
    ],
    "material": "Digital wearable",
    "featured": true
  },
  {
    "id": 14,
    "name": "Portable Bluetooth Speaker",
    "category": "Gadgets",
    "price": 34000,
    "image": portableSpeaker,
    "description": "Compact wireless speaker for everyday listening.",
    "sku": "DBS-0014",
    "stock": 54,
    "colors": [
      "Black"
    ],
    "sizes": [
      "One Size"
    ],
    "material": "Bluetooth wireless",
    "featured": false
  },
  {
    "id": 15,
    "name": "Wireless Earbuds",
    "category": "Gadgets",
    "price": 26000,
    "image": wirelessEarbuds,
    "description": "Compact earbuds with a portable charging case.",
    "sku": "DBS-0015",
    "stock": 57,
    "colors": [
      "White",
      "Black"
    ],
    "sizes": [
      "One Size"
    ],
    "material": "Wireless audio",
    "featured": false
  },
  {
    "id": 16,
    "name": "Classic Sunglasses",
    "category": "Accessories",
    "price": 14500,
    "image": sunGlasses,
    "description": "Timeless sunglasses for a stylish daytime look.",
    "sku": "DBS-0016",
    "stock": 60,
    "colors": [
      "Black",
      "Brown"
    ],
    "sizes": [
      "One Size"
    ],
    "material": "Acetate frame",
    "featured": false
  },
  {
    "id": 17,
    "name": "Leather Crossbody Bag",
    "category": "Accessories",
    "price": 32000,
    "image": crossBodyBag,
    "description": "Compact crossbody bag with a secure closure.",
    "sku": "DBS-0017",
    "stock": 63,
    "colors": [
      "Tan",
      "Black"
    ],
    "sizes": [
      "One Size"
    ],
    "material": "Faux leather",
    "featured": true
  },
  {
    "id": 18,
    "name": "Baseball Cap",
    "category": "Accessories",
    "price": 9500,
    "image": baseBallCap,
    "description": "Adjustable cap for casual everyday wear.",
    "sku": "DBS-0018",
    "stock": 66,
    "colors": [
      "Black",
      "Beige"
    ],
    "sizes": [
      "Adjustable"
    ],
    "material": "Cotton twill",
    "featured": false
  },
  {
    "id": 19,
    "name": "Casual Chino Trousers",
    "category": "Clothing",
    "price": 27000,
    "image": chinoTrousers,
    "description": "Comfortable chinos for work and weekends.",
    "sku": "DBS-0019",
    "stock": 69,
    "colors": [
      "Khaki",
      "Navy"
    ],
    "sizes": [
      "30",
      "32",
      "34",
      "36"
    ],
    "material": "Cotton twill",
    "featured": false
  },
  {
    "id": 20,
    "name": "Weekend Sweatshirt",
    "category": "Clothing",
    "price": 21500,
    "image": weekendSweatShirt,
    "description": "Cosy crew-neck sweatshirt with a clean finish.",
    "sku": "DBS-0020",
    "stock": 72,
    "colors": [
      "Grey",
      "Cream"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "material": "Cotton blend",
    "featured": false
  }
];
export const money = n => '₦' + n.toLocaleString('en-NG');
