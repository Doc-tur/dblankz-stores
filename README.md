# DBlankz Stores
React + Vite storefront by Mukhtar Emiabata Olakunbi.

## Start
```bash
npm install
npm run dev
```
Open the local URL shown by Vite.

## Features
Separate routes, category filtering, sorting, product details, cart Context API with localStorage, checkout modal with delivery and payment steps, demo promo `DBLANKZ10`, and mock order confirmation.

## Important
Demo only. No backend, inventory synchronization, email sending, or real payment processing. Product photos are loaded from Unsplash and require internet access.

## Product catalogue
20 sample products in `src/data/products.js` with name, price, category, image URL, SKU, stock, sizes, colours, material and description. Images load from Unsplash online and require internet access. They are illustrative and may not match the exact sample listing. Replace URLs with actual product photos before selling.

## Offline product images
All 20 product images are bundled as local JPG product visuals in `src/assets/`. No internet image URLs are required.

## Product images
All 20 product JPG files are stored in `src/assets/` and imported as ES modules in `src/data/products.js`. The homepage hero also imports its image from `src/assets/`.
