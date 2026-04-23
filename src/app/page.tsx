import Link from 'next/link';
import { ArrowRight, Leaf, ShieldCheck, Truck } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { categories, products, siteContent } from '@/data/products';

const features = [
  { icon: Leaf, title: '100% Natural', desc: 'Pure quality dry fruits' },
  { icon: ShieldCheck, title: 'Premium Grade', desc: 'Handpicked selection' },
  { icon: Truck, title: 'Free Shipping', desc: 'On orders above ₹500' },
];

export default function Home() {
  const featuredProducts = products.filter((p) => p.featured).slice(0, 8);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#1B3D2F] text-white">
        <div className="container-custom py-16 md:py-24">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Premium Dry Fruits for Your Wellness
            </h1>
            <p className="text-lg text-white/80 mb-8">
              Discover our curated selection of premium cashews, almonds, raisins, and natural products. 
              Freshness guaranteed with every order.
            </p>
            <div className="flex gap-4">
              <Link href="/shop" className="btn bg-[#C89B3C] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#B88A35]">
                Shop Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/about" className="btn border border-white/30 text-white px-6 py-3 rounded-md font-semibold hover:bg-white/10">
                About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((item) => (
              <div key={item.title} className="flex items-center gap-4 p-4">
                <div className="w-12 h-12 rounded-full bg-[#C89B3C]/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6" style={{ color: '#C89B3C' }} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1B3D2F]">{item.title}</h3>
                  <p className="text-sm text-[#1B3D2F]/60">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-[#1B3D2F]">Shop by Category</h2>
            <Link href="/shop" className="flex items-center gap-1 text-[#C89B3C] font-medium hover:underline">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {categories.slice(1).map((cat) => (
              <Link
                key={cat.slug}
                href={`/shop?category=${cat.slug}`}
                className="text-center p-6 bg-white rounded-lg border border-[rgba(27,61,47,0.1)] hover:border-[#C89B3C] hover:shadow-md transition-all"
              >
                <h3 className="font-medium text-[#1B3D2F]">{cat.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-[#1B3D2F]">Featured Products</h2>
            <Link href="/shop" className="flex items-center gap-1 text-[#C89B3C] font-medium hover:underline">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-[#F7F3EB]">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-bold text-[#1B3D2F] mb-4">
            Ready to Order?
          </h2>
          <p className="text-[#1B3D2F]/70 mb-6 max-w-xl mx-auto">
            Browse our full collection of premium dry fruits. 
            Free shipping on orders above ₹500.
          </p>
          <Link href="/shop" className="btn bg-[#1B3D2F] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#2A5548]">
            Explore Shop
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}