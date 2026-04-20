import Link from 'next/link';
import { ArrowRight, Nut, Leaf, Truck, Shield } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { products, siteContent } from '@/data/products';

export default function Home() {
  const featuredProducts = products.filter(p => p.featured).slice(0, 6);
  const { brand } = siteContent;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[#f5f0e8] overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#b8860b]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#cd853f]/20 rounded-full blur-3xl" />
        </div>
        <div className="container-custom py-20 md:py-32 relative">
          <div className="max-w-2xl">
            <span className="inline-block badge mb-4 animate-fadeIn">Premium Quality Guaranteed</span>
            <h1 className="text-4xl md:text-6xl font-bold text-[#2d1810] mb-6 font-heading animate-fadeIn stagger-1">
              Premium Dry Fruits for a Healthy Life
            </h1>
            <p className="text-lg text-[#2d1810]/70 mb-8 animate-fadeIn stagger-2">
              Discover the finest selection of cashews, almonds, raisins & more. 
              Farm-fresh quality delivered to your doorstep.
            </p>
            <div className="flex flex-wrap gap-4 animate-fadeIn stagger-3">
              <Link href="/shop" className="btn-primary flex items-center gap-2">
                Shop Now <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/about" className="btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#f5f0e8] rounded-full flex items-center justify-center">
                <Leaf className="w-6 h-6 text-[#b8860b]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#2d1810]">100% Natural</h3>
                <p className="text-sm text-[#2d1810]/60">No added preservatives</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#f5f0e8] rounded-full flex items-center justify-center">
                <Nut className="w-6 h-6 text-[#b8860b]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#2d1810]">Premium Quality</h3>
                <p className="text-sm text-[#2d1810]/60">Hand-selected finest nuts</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#f5f0e8] rounded-full flex items-center justify-center">
                <Truck className="w-6 h-6 text-[#b8860b]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#2d1810]">Fast Delivery</h3>
                <p className="text-sm text-[#2d1810]/60">Across India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2d1810] mb-4 font-heading">Featured Products</h2>
            <p className="text-[#2d1810]/60">Our most popular dry fruits & nuts</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/shop" className="btn-secondary inline-flex items-center gap-2">
              View All Products <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Banner */}
      <section className="py-16 md:py-20 bg-[#2d1810]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">Shop by Category</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Raw Cashews', 'Flavored Cashews', 'Almonds', 'Raisins'].map((cat, i) => (
              <Link 
                key={cat} 
                href={`/shop?category=${cat.toLowerCase().replace(' ', '-')}`}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-[#b8860b] transition-colors group"
              >
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20">
                  <Nut className="w-8 h-8 text-[#b8860b] group-hover:text-white" />
                </div>
                <h3 className="font-semibold text-white">{cat}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-[#f5f0e8]">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2d1810] mb-4 font-heading">Ready to Order?</h2>
          <p className="text-[#2d1810]/70 mb-8 max-w-xl mx-auto">
            Browse our collection of premium dry fruits and place your order today. 
            Free shipping on orders above ₹500.
          </p>
          <Link href="/shop" className="btn-primary inline-flex items-center gap-2">
            Start Shopping <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}