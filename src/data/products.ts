import { Product, FAQ } from '@/types';

export const products: Product[] = [
  // Raw Cashews
  {
    id: 'w320',
    name: 'Raw Cashew Nuts W320',
    slug: 'raw-cashew-w320',
    description: 'Premium quality W320 raw cashew nuts. Perfect for everyday snacking and cooking. Rich in minerals and proteins.',
    price: 850,
    originalPrice: 950,
    images: ['/products/cashew-w320.jpg'],
    category: 'Raw Cashews',
    grade: 'W320',
    inStock: true,
    featured: true,
    weight: '1kg'
  },
  {
    id: 'w240',
    name: 'Premium Cashew Nuts W240',
    slug: 'raw-cashew-w240',
    description: 'Superior grade W240 cashew nuts. Bigger size, premium quality. Ideal for gifting and special occasions.',
    price: 1100,
    originalPrice: 1200,
    images: ['/products/cashew-w240.jpg'],
    category: 'Raw Cashews',
    grade: 'W240',
    inStock: true,
    featured: true,
    weight: '1kg'
  },
  {
    id: 'w180',
    name: 'Deluxe Cashew Nuts W180',
    slug: 'raw-cashew-w180',
    description: 'Extra large W180 grade cashew nuts. The finest quality available. Perfect for premium gifting.',
    price: 1400,
    originalPrice: 1550,
    images: ['/products/cashew-w180.jpg'],
    category: 'Raw Cashews',
    grade: 'W180',
    inStock: true,
    featured: false,
    weight: '1kg'
  },
  {
    id: 'w210',
    name: 'Classic Cashew Nuts W210',
    slug: 'raw-cashew-w210',
    description: 'Classic W210 grade cashew nuts. Perfect balance of size and quality. Great for daily consumption.',
    price: 950,
    images: ['/products/cashew-w210.jpg'],
    category: 'Raw Cashews',
    grade: 'W210',
    inStock: true,
    featured: false,
    weight: '1kg'
  },
  {
    id: 'splits',
    name: 'Cashew Splits',
    slug: 'cashew-splits',
    description: 'Natural cashew splits perfect for cooking and baking. Rich, creamy taste in every bite.',
    price: 650,
    images: ['/products/cashew-splits.jpg'],
    category: 'Raw Cashews',
    inStock: true,
    featured: false,
    weight: '1kg'
  },

  // Flavored Cashews
  {
    id: 'cheese',
    name: 'Cheese Flavor Cashews',
    slug: 'flavored-cheese-cashews',
    description: 'Delicious cheese flavored cashews with a perfect blend of creamy cheese and crunchy cashews.',
    price: 450,
    images: ['/products/flavored-cheese.jpg'],
    category: 'Flavored Cashews',
    inStock: true,
    featured: true,
    weight: '250g'
  },
  {
    id: 'pepper',
    name: 'Peppercorn Cashews',
    slug: 'flavored-pepper-cashews',
    description: 'Crushed black peppercorn cashews with a spicy kick. Perfect for those who love bold flavors.',
    price: 450,
    images: ['/products/flavored-pepper.jpg'],
    category: 'Flavored Cashews',
    inStock: true,
    featured: true,
    weight: '250g'
  },
  {
    id: 'lime',
    name: 'Lime & Black Pepper Cashews',
    slug: 'flavored-lime-pepper-cashews',
    description: 'Tangy lime with black pepper combination. A refreshing and zesty flavor experience.',
    price: 450,
    images: ['/products/flavored-lime.jpg'],
    category: 'Flavored Cashews',
    inStock: true,
    featured: true,
    weight: '250g'
  },
  {
    id: 'american-chilli',
    name: 'American Chilli Cashews',
    slug: 'flavored-american-chilli-cashews',
    description: 'Perfectly spiced American chilly cashews. Mild heat with authentic chili flavor.',
    price: 450,
    images: ['/products/flavored-chilli.jpg'],
    category: 'Flavored Cashews',
    inStock: true,
    featured: false,
    weight: '250g'
  },
  {
    id: 'tomato',
    name: 'Tomato Cashews',
    slug: 'flavored-tomato-cashews',
    description: 'Tangy tomato flavored cashews. A unique blend of sweet and tangy flavors.',
    price: 450,
    images: ['/products/flavored-tomato.jpg'],
    category: 'Flavored Cashews',
    inStock: true,
    featured: false,
    weight: '250g'
  },
  {
    id: 'herbs',
    name: 'Herbs & Spice Cashews',
    slug: 'flavored-herbs-cashews',
    description: 'A Perfect blend of herbs and spices. Mediterranean inspired flavor.',
    price: 450,
    images: ['/products/flavored-herbs.jpg'],
    category: 'Flavored Cashews',
    inStock: true,
    featured: false,
    weight: '250g'
  },

  // Almonds
  {
    id: 'california',
    name: 'California Almonds',
    slug: 'california-almonds',
    description: 'Premium California almonds. Rich in vitamin E and antioxidants. Perfect for snacking.',
    price: 750,
    images: ['/products/almonds-california.jpg'],
    category: 'Almonds',
    inStock: true,
    featured: true,
    weight: '1kg'
  },
  {
    id: 'mamra',
    name: 'Mamra Badam',
    slug: 'mamra-badam',
    description: 'Premium Mamra badam (glace almonds). Traditional specialty, rich and nutritious.',
    price: 1200,
    originalPrice: 1400,
    images: ['/products/almonds-mamra.jpg'],
    category: 'Almonds',
    inStock: true,
    featured: true,
    weight: '500g'
  },

  // Raisins
  {
    id: 'black-raisins',
    name: 'Black Raisins',
    slug: 'black-raisins',
    description: 'Premium black raisins. Naturally sweet, iron-rich. Great for cooking and snacking.',
    price: 350,
    images: ['/products/raisins-black.jpg'],
    category: 'Raisins',
    inStock: true,
    featured: false,
    weight: '500g'
  },
  {
    id: 'green-raisins',
    name: 'Green Raisins',
    slug: 'green-raisins',
    description: 'Golden green raisins. Naturally sweetened, fiber-rich dry fruits.',
    price: 380,
    images: ['/products/raisins-green.jpg'],
    category: 'Raisins',
    inStock: true,
    featured: false,
    weight: '500g'
  },
  {
    id: 'golden-raisins',
    name: 'Golden Raisins',
    slug: 'golden-raisins',
    description: 'Premium golden sultanas. Perfect for baking and desserts.',
    price: 400,
    images: ['/products/raisins-golden.jpg'],
    category: 'Raisins',
    inStock: true,
    featured: false,
    weight: '500g'
  },

  // Walnuts
  {
    id: 'walnut-kernel',
    name: 'Walnut Kernels',
    slug: 'walnut-kernels',
    description: 'Premium walnut kernels. Rich in omega-3 fatty acids. Perfect for brain health.',
    price: 900,
    originalPrice: 1000,
    images: ['/products/walnut-kernel.jpg'],
    category: 'Walnuts',
    inStock: true,
    featured: true,
    weight: '500g'
  },

  // Dates
  {
    id: 'dates-medjool',
    name: 'Medjool Dates',
    slug: 'medjool-dates',
    description: 'Premium Medjool dates. Nature\'s candy - naturally sweet and caramel-like.',
    price: 500,
    images: ['/products/dates-medjool.jpg'],
    category: 'Dates',
    inStock: true,
    featured: true,
    weight: '500g'
  },
  {
    id: 'dates ajwa',
    name: 'Ajwa Dates',
    slug: 'ajwa-dates',
    description: 'Premium Ajwa dates from Madina. Traditional specialty with numerous health benefits.',
    price: 800,
    originalPrice: 950,
    images: ['/products/dates-ajwa.jpg'],
    category: 'Dates',
    inStock: true,
    featured: true,
    weight: '500g'
  },
];

export const categories = [
  { name: 'All Products', slug: 'all' },
  { name: 'Raw Cashews', slug: 'raw-cashews' },
  { name: 'Flavored Cashews', slug: 'flavored-cashews' },
  { name: 'Almonds', slug: 'almonds' },
  { name: 'Raisins', slug: 'raisins' },
  { name: 'Walnuts', slug: 'walnuts' },
  { name: 'Dates', slug: 'dates' },
];

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'What is W320, W240, W180 in cashews?',
    answer: 'The "W" stands for "Whole" and the number represents the count per pound. W320 means 320 nuts per pound, W240 means 240 nuts per pound, and so on. Smaller numbers mean bigger cashews.'
  },
  {
    id: '2',
    question: 'How should I store dry fruits?',
    answer: 'Store dry fruits in airtight containers in a cool, dry place. For longer freshness, you can refrigerate them, especially during summer months.'
  },
  {
    id: '3',
    question: 'What is the shelf life of dry fruits?',
    answer: 'Properly stored, dry fruits can last 6-12 months. Roasted and salted varieties should be consumed within 3-6 months for best taste.'
  },
  {
    id: '4',
    question: 'Do you offer bulk discounts?',
    answer: 'Yes, we offer special bulk pricing for orders above 5kg. Contact us for custom quotes on bulk orders.'
  },
  {
    id: '5',
    question: 'What payment methods do you accept?',
    answer: 'We accept UPI/GPay, Bank Transfer, Credit/Debit Cards, and Cash on Delivery. Select your preferred method at checkout.'
  },
  {
    id: '6',
    question: 'How long does delivery take?',
    answer: 'Delivery typically takes 3-7 business days within India. Express delivery options available at checkout.'
  },
  {
    id: '7',
    question: 'What is your return policy?',
    answer: 'We offer a 7-day return policy for damaged or expired products. Please contact us with photos for quick resolution.'
  },
  {
    id: '8',
    question: 'Are your products organic?',
    answer: 'Our raw cashews and dry fruits are naturally processed without harmful chemicals. We source from trusted farmers who follow quality standards.'
  },
];

export const siteContent = {
  brand: {
    name: 'Dipak Nutra',
    tagline: 'Premium Dry Fruits & Natural Products',
    description: 'Your trusted source for premium quality dry fruits, cashews, almonds, and natural products. Freshness guaranteed.',
    phone: '+919930982686',
    email: 'contact@dipaknutra.com',
    address: 'Thane West, Maharashtra – 400601, India',
    instagram: '@dipaknutra',
    facebook: 'DipakNutra'
  },
  about: {
    story: `Dipak Nutra is a premium dry fruits brand dedicated to bringing the finest quality nuts and dried fruits to your doorstep. Founded with a vision to provide authentic, fresh, and healthy dry fruits to every household.

We source our products directly from trusted farmers and follow strict quality control processes to ensure freshness. Our commitment to quality has made us a trusted name among dry fruits lovers across India.

From premium W320 cashews to flavorful varieties, from California almonds to Medjool dates - we offer a wide range of premium dry fruits catering to all your needs.`,
    mission: 'To provide premium quality dry fruits while promoting health and wellness through natural products.',
    values: ['Quality First', 'Freshness Guaranteed', 'Direct Sourcing', 'Customer Satisfaction']
  },
  shipping: {
    policy: `**Shipping Policy**

We strive to deliver your orders promptly and in perfect condition.

**Delivery Time:**
- Standard Delivery: 5-7 business days
- Express Delivery: 2-3 business days (additional charges apply)

**Shipping Charges:**
- Free shipping on orders above ₹500
- ₹50 shipping charge for orders below ₹500

**Delivery Areas:**
We deliver across India. For remote locations, delivery may take additional 2-3 days.

**Order Tracking:**
Once your order is shipped, you will receive tracking details via SMS and email.`,
    returns: `**Return & Refund Policy**

We want you to be completely satisfied with your purchase.

**Returns:**
- 7-day return window for damaged/defective products
- Product must be in original packaging
- Contact us with photos of damage

**Refunds:**
- Refunds processed within 5-7 business days
- Original payment method refund

**Non-Returnable Items:**
- Opened/used products (quality issues only)
- Products past expiry date

**Process:**
1. Contact us with order number and photos
2. We'll arrange pickup or provide instructions
3. Refund processed upon quality check`
  }
};