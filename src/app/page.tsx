import Link from 'next/link';
import {
  ArrowRight,
  Award,
  Leaf,
  ShieldCheck,
  ShoppingBag,
  Sprout,
  Truck,
} from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { categories, products, siteContent } from '@/data/products';

const promises = [
  {
    icon: Leaf,
    title: '100% Natural Selection',
    copy: 'Sourced from trusted farms and packed for clean flavour without unnecessary additives.',
  },
  {
    icon: Award,
    title: 'Premium Handpicked Grades',
    copy: 'From W180 and W240 cashews to Mamra almonds, every batch is selected for visible quality.',
  },
  {
    icon: Truck,
    title: 'Fast Pan-India Delivery',
    copy: 'Standard delivery in 5-7 business days with free shipping on orders above ₹500.',
  },
];

const highlights = [
  { stat: '18+', label: 'Premium dry fruit variants' },
  { stat: '₹350-₹1400', label: 'Price range across collections' },
  { stat: '7 Days', label: 'Return support for damaged orders' },
];

export default function Home() {
  const featuredProducts = products.filter((product) => product.featured).slice(0, 8);

  return (
    <div>
      <section className="section-shell pt-8">
        <div className="container-custom">
          <div className="page-hero">
            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <div className="relative z-10 max-w-3xl">
                <div className="eyebrow animate-rise">
                  <Sprout className="h-4 w-4 text-[#C89B3C]" />
                  Premium Dry Fruits from Thane, Maharashtra
                </div>
                <h1 className="section-title mt-6 animate-rise stagger-1">
                  Nature&apos;s goodness, composed into a refined pantry of everyday wellness.
                </h1>
                <p className="section-copy mt-6 text-lg animate-rise stagger-2">
                  Dipak Nutra curates premium cashews, almonds, raisins, walnuts, and dates with a
                  sharp focus on grade, freshness, and flavour. The result is a storefront built
                  around trusted natural products, not commodity bulk stock.
                </p>
                <div className="mt-8 flex flex-wrap gap-4 animate-rise stagger-3">
                  <Link href="/shop" className="btn-primary">
                    Start Shopping
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="/about" className="btn-secondary">
                    Discover the Brand
                  </Link>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  {highlights.map((highlight) => (
                    <div
                      key={highlight.label}
                      className="rounded-[1.45rem] border border-[rgba(27,61,47,0.08)] bg-[rgba(255,252,247,0.62)] p-4 shadow-[0_16px_36px_rgba(27,61,47,0.08)]"
                    >
                      <p className="text-2xl font-bold text-[#1B3D2F]">{highlight.stat}</p>
                      <p className="mt-2 text-sm text-[#1B3D2F]/62">{highlight.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative z-10">
                <div className="grid gap-4">
                  <div className="rounded-[2rem] border border-[rgba(27,61,47,0.1)] bg-[linear-gradient(145deg,rgba(27,61,47,0.95),rgba(18,45,34,0.94))] p-6 text-[#F7F3EB] shadow-[0_30px_80px_rgba(27,61,47,0.18)]">
                    <div className="flex items-center justify-between">
                      <span className="chip border border-[rgba(247,243,235,0.14)] bg-[rgba(247,243,235,0.08)] text-[#F7F3EB]">
                        Signature Promise
                      </span>
                      <ShieldCheck className="h-5 w-5 text-[#C89B3C]" />
                    </div>
                    <h2 className="mt-6 text-3xl text-[#F7F3EB]">Free shipping above ₹500</h2>
                    <p className="mt-4 text-sm leading-7 text-[rgba(247,243,235,0.72)]">
                      {siteContent.brand.announcement}
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[1.7rem] border border-[rgba(27,61,47,0.08)] bg-[rgba(255,252,247,0.74)] p-5">
                      <p className="section-kicker">Top Seller</p>
                      <h3 className="mt-3 text-2xl text-[#1B3D2F]">Raw Cashews W240</h3>
                      <p className="mt-3 text-sm text-[#1B3D2F]/62">
                        A premium grade with generous size, buttery flavour, and gifting appeal.
                      </p>
                    </div>
                    <div className="rounded-[1.7rem] border border-[rgba(200,155,60,0.24)] bg-[linear-gradient(160deg,rgba(200,155,60,0.18),rgba(255,252,247,0.78))] p-5">
                      <p className="section-kicker">Customer Care</p>
                      <h3 className="mt-3 text-2xl text-[#1B3D2F]">7-day return window</h3>
                      <p className="mt-3 text-sm text-[#1B3D2F]/62">
                        Damaged or defective orders are supported quickly with photo-based review.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container-custom">
          <div className="grid gap-4 md:grid-cols-3">
            {promises.map((promise, index) => (
              <div
                key={promise.title}
                className={`rounded-[1.7rem] border border-[rgba(27,61,47,0.08)] bg-[rgba(255,252,247,0.74)] p-6 shadow-[0_18px_36px_rgba(27,61,47,0.08)] animate-rise stagger-${index + 1}`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(27,61,47,0.08)] text-[#1B3D2F]">
                  <promise.icon className="h-5 w-5 text-[#C89B3C]" />
                </div>
                <h2 className="mt-5 text-2xl text-[#1B3D2F]">{promise.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[#1B3D2F]/64">{promise.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="container-custom">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-kicker">Featured Collection</p>
              <h2 className="mt-3 text-4xl text-[#1B3D2F]">Best sellers for gifting, snacking, and daily rituals.</h2>
              <p className="section-copy mt-4">
                A mix of raw and flavoured signatures selected from the full Dipak Nutra range.
              </p>
            </div>
            <Link href="/shop" className="btn-secondary w-fit">
              View Full Catalogue
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container-custom">
          <div className="rounded-[2rem] border border-[rgba(27,61,47,0.1)] bg-[linear-gradient(145deg,rgba(27,61,47,0.96),rgba(19,47,36,0.95))] px-6 py-10 text-[#F7F3EB] shadow-[0_30px_80px_rgba(27,61,47,0.18)] md:px-10">
            <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="section-kicker text-[#C89B3C]">Shop by Category</p>
                <h2 className="mt-3 text-4xl text-[#F7F3EB]">From classic whole grades to bold seasoned cashews.</h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-[rgba(247,243,235,0.7)]">
                Each category has a distinct buying moment, whether you need premium gifting tins,
                family snack jars, or daily pantry staples.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {categories.slice(1).map((category) => (
                <Link
                  key={category.slug}
                  href={`/shop?category=${category.slug}`}
                  className="group rounded-[1.5rem] border border-[rgba(247,243,235,0.12)] bg-[rgba(247,243,235,0.06)] p-5 hover:border-[rgba(200,155,60,0.48)] hover:bg-[rgba(247,243,235,0.1)]"
                >
                  <div className="flex items-center justify-between">
                    <ShoppingBag className="h-5 w-5 text-[#C89B3C]" />
                    <ArrowRight className="h-4 w-4 text-[#F7F3EB]/65 transition-transform group-hover:translate-x-1" />
                  </div>
                  <h3 className="mt-6 text-2xl text-[#F7F3EB]">{category.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-[rgba(247,243,235,0.65)]">
                    Explore the {category.name.toLowerCase()} range with premium pack sizes and
                    ready-to-order selections.
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="container-custom">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[1.9rem] border border-[rgba(27,61,47,0.08)] bg-[rgba(255,252,247,0.76)] p-8 shadow-[0_20px_46px_rgba(27,61,47,0.08)]">
              <p className="section-kicker">Why Dipak Nutra</p>
              <h2 className="mt-3 text-4xl text-[#1B3D2F]">A premium dry fruit brand with a calm, trustworthy point of view.</h2>
              <p className="mt-5 text-sm leading-7 text-[#1B3D2F]/66">
                The brand combines exact grading, dependable delivery, and thoughtful support, so
                the buying experience feels as considered as the products themselves.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {[
                'Exact brand colours and premium typography',
                'Checkout options for UPI, bank transfer, and COD',
                'FAQ coverage for cashew grades, delivery, and returns',
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[1.6rem] border border-[rgba(27,61,47,0.08)] bg-[linear-gradient(180deg,rgba(255,252,247,0.9),rgba(247,243,235,0.72))] p-6"
                >
                  <Leaf className="h-5 w-5 text-[#C89B3C]" />
                  <p className="mt-5 text-sm leading-7 text-[#1B3D2F]/68">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
