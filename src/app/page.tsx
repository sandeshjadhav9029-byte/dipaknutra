import Link from 'next/link';
import { ArrowRight, Nut, Leaf, Truck, Shield, Award } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/data/products';

export default function Home() {
  const featuredProducts = products.filter(p => p.featured).slice(0, 6);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#F7F3EB] to-[#e8dfd0] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#C89B3C]/30 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#1B3D2F]/20 rounded-full blur-3xl" />
        </div>
        <div className="container-custom py-16 md:py-24 relative">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-2 bg-[#C89B3C] text-white font-medium rounded-full mb-4">
              🏆 Premium Quality Guaranteed
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif" style={{ color: '#1B3D2F' }}>
              Premium Dry Fruits for a Healthy Life
            </h1>
            <p className="text-lg mb-8" style={{ color: '#1B3D2F', opacity: 0.7 }}>
              Discover the finest selection of cashews, almonds, raisins & more. 
              Farm-fresh quality delivered to your doorstep. 100% pure, natural & chemical-free.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/shop" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white" style={{ backgroundColor: '#1B3D2F' }}>
                Shop Now <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/about" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold border-2" style={{ borderColor: '#1B3D2F', color: '#1B3D2F' }}>
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
                <Leaf className="w-6 h-6" style={{ color: '#1B3D2F' }} />
              </div>
              <div>
                <h3 className="font-semibold" style={{ color: '#1B3D2F' }}>100% Natural</h3>
                <p className="text-xs" style={{ color: '#1B3D2F', opacity: 0.6 }}>No preservatives</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                <Award className="w-6 h-6" style={{ color: '#C89B3C' }} />
              </div>
              <div>
                <h3 className="font-semibold" style={{ color: '#1B3D2F' }}>Premium Quality</h3>
                <p className="text-xs" style={{ color: '#1B3D2F', opacity: 0.6 }}>Hand-selected</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Truck className="w-6 h-6" style={{ color: '#1B3D2F' }} />
              </div>
              <div>
                <h3 className="font-semibold" style={{ color: '#1B3D2F' }}>Fast Delivery</h3>
                <p className="text-xs" style={{ color: '#1B3D2F', opacity: 0.6 }}>Across India</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6" style={{ color: '#1B3D2F' }} />
              </div>
              <div>
                <h3 className="font-semibold" style={{ color: '#1B3D2F' }}>Quality Assured</h3>
                <p className="text-xs" style={{ color: '#1B3D2F', opacity: 0.6 }}>Lab tested</p>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-2 font-serif" style={{ color: '#1B3D2F' }}>Best Sellers</h2>
              <p style={{ color: '#1B3D2F', opacity: 0.6 }}>Our most popular dry fruits & nuts</p>
            </div>
            <Link href="/shop" className="hidden md:inline-flex items-center gap-2 px-6 py-3 rounded-full border-2" style={{ borderColor: '#1B3D2F', color: '#1B3D2F' }}>
              View All Products <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12 md:hidden">
            <Link href="/shop" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2" style={{ borderColor: '#1B3D2F', color: '#1B3D2F' }}>
              View All Products <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-16 md:py-20" style={{ backgroundColor: '#1B3D2F' }}>
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-serif">Shop by Category</h2>
            <p className="text-white/60">Explore our wide range of premium dry fruits</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {categories.slice(1).map((cat) => (
              <Link key={cat.slug} href={`/shop?category=${cat.slug}`} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-[#C89B3C] transition-all duration-300 group">
                <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-white/20">
                  <Nut className="w-7 h-7 text-[#C89B3C] group-hover:text-white" />
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif" style={{ color: '#1B3D2F' }}>Why Choose Dipak Nutra?</h2>
            <p style={{ color: '#1B3D2F', opacity: 0.6, maxWidth: '600px', margin: '0 auto' }}>We are committed to providing the finest quality dry fruits sourced directly from trusted farmers.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl" style={{ backgroundColor: '#F7F3EB' }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#1B3D2F' }}>
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#1B3D2F' }}>Farm Fresh Quality</h3>
              <p style={{ color: '#1B3D2F', opacity: 0.7 }}>Sourced directly from farms, ensuring maximum freshness and natural taste in every product.</p>
            </div>
            <div className="text-center p-8 rounded-2xl" style={{ backgroundColor: '#F7F3EB' }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#C89B3C' }}>
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#1B3D2F' }}>100% Pure & Natural</h3>
              <p style={{ color: '#1B3D2F', opacity: 0.7 }}>No artificial preservatives, colors, or additives. Just pure, natural goodness.</p>
            </div>
            <div className="text-center p-8 rounded-2xl" style={{ backgroundColor: '#F7F3EB' }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#1B3D2F' }}>
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#1B3D2F' }}>Pan India Delivery</h3>
              <p style={{ color: '#1B3D2F', opacity: 0.7 }}>Fast and reliable delivery across India with secure packaging.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20" style={{ backgroundColor: '#C89B3C' }}>
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-serif">Ready to Order?</h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto text-lg">
            Browse our collection of premium dry fruits and place your order today.
          </p>
          <Link href="/shop" className="inline-flex items-center gap-2 bg-white text-[#C89B3C] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Start Shopping <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}