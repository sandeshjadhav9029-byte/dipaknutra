# DIPAK NUTRA - E-Commerce Website Project

## Brand Overview

- **Brand Name:** Dipak Nutra
- **Tagline:** Nature's Goodness, Your Wellness
- **Category:** Natural Food Products (Premium Dry Fruits)
- **Live URL:** https://dipaknutra.com
- **GitHub:** https://github.com/sandeshjadhav9029-byte/dipaknutra

## Brand Colors (EXACT HEX)

| Role | Color | Hex |
|------|-------|-----|
| Primary | Forest Green | #1B3D2F |
| Accent | Gold | #C89B3C |
| Background | Cream | #F7F3EB |

## Tech Stack

- **Framework:** Next.js 16.2.4 with App Router
- **Language:** TypeScript + React 19.2.4
- **Styling:** Tailwind CSS v4
- **State Management:** Zustand v5
- **Icons:** Lucide React
- **Deploy:** Vercel

## Project Structure

```
dipaknutra/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Home (hero, featured products, categories)
│   │   ├── layout.tsx            # Root layout (Header + Footer)
│   │   ├── shop/page.tsx        # Product listing with filters
│   │   ├── cart/page.tsx        # Shopping cart
│   │   ├── checkout/page.tsx    # Checkout with payment options
│   │   ├── about/page.tsx       # About page
│   │   ├── contact/page.tsx     # Contact page
│   │   ├── faq/page.tsx         # FAQ page
│   │   ├── shipping/page.tsx    # Shipping & Returns
│   │   ├── admin/page.tsx       # Admin panel
│   │   └── product/[slug]/page.tsx  # Product detail page
│   ├── components/
│   │   ├── Header.tsx           # Sticky header with DN logo
│   │   ├── Footer.tsx           # Footer with links, contact info
│   │   └── ProductCard.tsx      # Product card component
│   ├── data/
│   │   └── products.ts          # Products, categories, site content
│   ├── store/
│   │   └── cart.ts              # Zustand cart state
│   └── types/
│       └── index.ts             # TypeScript interfaces
└── package.json
```

## Products

### Raw Cashews (Grades W320, W240, W180, W210, Splits)
### Flavored Cashews (Cheese, Pepper, Lime, American Chilli, Tomato, Herbs)
### Almonds (California, Mamra)
### Raisins (Black, Green, Golden)
### Walnuts (Kernel)
### Dates (Medjool, Ajwa)

**Price Range:** ₹350 - ₹1400 per unit

## Contact Information

- **Phone:** +919930982686
- **Email:** contact@dipaknutra.com
- **Address:** Thane West, Maharashtra – 400601, India

## Key Features

1. Add to cart with quantity selection
2. Shopping cart with item management
3. Checkout with payment options (UPI, Bank Transfer, COD)
4. Category-based product filtering
5. Featured products section
6. FAQ page with W320/W240 cashew grade explanations
7. Shipping policy (Free above ₹500, 5-7 days delivery)
8. 7-day return policy

## Logo System

The logo consists of:
- **DN Monogram:** D in Forest Green (#1B3D2F), N in Gold (#C89B3C)
- **Leaf on N:** Forest Green
- **Brand Name:** "DIPAK" (Forest Green) "NUTRA" (Gold)
- **Divider:** Gold lines with floral motif (✿)
- **Tagline:** "Nature's Goodness, Your Wellness" in Libre Baskerville

## Design Guidelines

1. Use brand colors consistently (#1B3D2F, #C89B3C, #F7F3EB)
2. Fonts: Playfair Display for headings, Libre Baskerville for tagline
3. Announcement bar: "Free Shipping on orders above ₹500 | Use code: DIPAK10 for 10% OFF above ₹3000"
4. Use Lucide React icons (not emojis)
5. Mobile-responsive design with sticky header
6. Smooth hover transitions (150-300ms)

## Important Rules

1. **Never** commit sensitive files (.env, credentials)
2. **Always** run `npm run build` before committing to verify no errors
3. **Use** `git add -A && git commit -m "message" && git push` for deployments
4. **Vercel** auto-deploys on git push to main branch

## Common Tasks

- **Add new product:** Edit `src/data/products.ts`
- **Update contact info:** Edit `siteContent` in `src/data/products.ts`
- **Add new page:** Create in `src/app/[page-name]/page.tsx`
- **Test locally:** `npm run dev`