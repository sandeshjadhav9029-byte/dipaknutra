import Link from 'next/link';
import { ArrowRight, Nut, Leaf, Truck, Shield, Award, CheckCircle } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { products, siteContent, categories } from '@/data/products';

export default function Home() {
  const featuredProducts = products.filter(p => p.featured).slice(0, 6);
  const { brand } = siteContent;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#f5f0e8] to-[#e8dfd0] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#b8860b]/30 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#cd853f]/30 rounded-full blur-3xl" />
        </div>
        <div className="container-custom py-16 md:py-24 relative">
          <div className="max-w-2xl">
            <span className="inline-block badge mb-4 animate-fadeIn bg-[#b8860b]">
              🏆 Premium Quality Guaranteed
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2d1810] mb-6 font-heading animate-fadeIn stagger-1">
              Premium Dry Fruits for a Healthy Life
            </h1>
            <p className="text-lg text-[#2d1810]/70 mb-8 animate-fadeIn stagger-2">
              Discover the finest selection of cashews, almonds, raisins & more. 
              Farm-fresh quality delivered to your doorstep. 100% pure, natural & chemical-free.
            </p>
            <div className="flex flex-wrap gap-4 animate-fadeIn stagger-3">
              <Link href="/shop" className="btn-primary flex items-center gap-2 text-lg px-8 py-4">
                Shop Now <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/about" className="btn-secondary text-lg px-8 py-4">
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-white border-b border-[#e8dfd0]">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Leaf className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-[#2d1810]">100% Natural</h3>
                <p className="text-xs text-[#2d1810]/60">No preservatives</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                <Award className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="font-semibold text-[#2d1810]">Premium Quality</h3>
                <p className="text-xs text-[#2d1810]/60">Hand-selected</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Truck className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-[#2d1810]">Fast Delivery</h3>
                <p className="text-xs text-[#2d1810]/60">Across India</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-[#2d1810]">Quality Assured</h3>
                <p className="text-xs text-[#2d1810]/60">Lab tested</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2d1810] mb-2 font-heading">Best Sellers</h2>
              <p className="text-[#2d1810]/60">Our most popular dry fruits & nuts</p>
            </div>
            <Link href="/shop" className="btn-secondary hidden md:inline-flex items-center gap-2">
              View All Products <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12 md:hidden">
            <Link href="/shop" className="btn-secondary inline-flex items-center gap-2">
              View All Products <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-16 md:py-20 bg-[#2d1810]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">Shop by Category</h2>
            <p className="text-white/60">Explore our wide range of premium dry fruits</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {categories.slice(1).map((cat) => (
              <Link 
                key={cat.slug} 
                href={`/shop?category=${cat.slug}`}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-[#b8860b] transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-white/20">
                  <Nut className="w-7 h-7 text-[#b8860b] group-hover:text-white" />
                </div>
                <h3 className="font-semibold text-white text-sm">{cat.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2d1810] mb-4 font-heading">Why Choose Dipak Nutra?</h2>
            <p className="text-[#2d1810]/60 max-w-2xl mx-auto">We are committed to providing the finest quality dry fruits sourced directly from trusted farmers.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-[#f5f0e8] rounded-2xl">
              <div className="w-16 h-16 bg-[#b8860b] rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#2d1810] mb-3">Farm Fresh Quality</h3>
              <p className="text-[#2d1810]/70">Sourced directly from farms, ensuring maximum freshness and natural taste in every product.</p>
            </div>
            <div className="text-center p-8 bg-[#f5f0e8] rounded-2xl">
              <div className="w-16 h-16 bg-[#b8860b] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#2d1810] mb-3">100% Pure & Natural</h3>
              <p className="text-[#2d1810]/70">No artificial preservatives, colors, or additives. Just pure, natural goodness.</p>
            </div>
            <div className="text-center p-8 bg-[#f5f0e8] rounded-2xl">
              <div className="w-16 h-16 bg-[#b8860b] rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#2d1810] mb-3">Pan India Delivery</h3>
              <p className="text-[#2d1810]/70">Fast and reliable delivery across India with secure packaging.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#b8860b] to-[#8B6914]">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">Ready to Order?</h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto text-lg">
            Browse our collection of premium dry fruits and place your order today.
          </p>
          <Link href="/shop" className="inline-flex items-center gap-2 bg-white text-[#b8860b] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Start Shopping <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}