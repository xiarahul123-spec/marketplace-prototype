
# Marketplace Prototype (Next.js)

This is a minimal Next.js prototype for the seller-first marketplace MVP.
It includes a Product page with a Trust Beaker visualization and a simple UPI modal.

## Files
- pages/index.js
- pages/product/[id].js
- components/TrustBeaker.js
- components/UpiModal.js
- public/sample-product.jpg

## Quick local run
1. Install Node 18+ (LTS).
2. In project folder:
   npm install
   npm run dev
3. Open http://localhost:3000/product/1

## Deploy to GitHub + Vercel
1. Create a GitHub repository (e.g., marketplace-prototype).
2. Upload all files (or push via git).
3. Sign in to https://vercel.com with your GitHub account and import the repo.
4. Vercel auto-detects Next.js. Click Deploy.
5. Open /product/1 on the Vercel URL.
