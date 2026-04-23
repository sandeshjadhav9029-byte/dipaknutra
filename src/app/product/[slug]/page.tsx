'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
  ArrowLeft,
  Leaf,
  Minus,
  Plus,
  ShieldCheck,
  ShoppingCart,
  Star,
  Truck,
} from 'lucide-react';
import { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { useCartStore } from '@/store/cart';

const productBenefits: Record<string, string[]> = {
  'Raw Cashews': ['Whole premium grades', 'Ideal for gifting and daily snacking', 'Naturally creamy texture'],
  'Flavored Cashews': ['Seasoned in signature flavours', 'Party-friendly snack packs', 'Crunchy ready-to-serve format'],
  Almonds: ['Everyday wellness support', 'Rich in vitamin E', 'Clean pantry staple'],
  Raisins: ['Natural sweetness', 'Great for desserts and breakfast bowls', 'Soft, easy snacking'],
  Walnuts: ['Omega-rich kernels', 'Balanced earthy flavour', 'Popular for premium mixes'],
  Dates: ['Caramel-like sweetness', 'Traditional gifting favourite', 'Soft texture and rich bite'],
};

export default function ProductPage() {
  const params = useParams<{ slug: string }>();
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore((state) => state.addItem);
  const product = products.find((entry) => entry.slug === params.slug);

  if (!product) {
    return (
      <div className="page-shell">
        <div className="container-custom">
          <div className="card-surface mx-auto max-w-xl p-10 text-center">
            <h1 className="text-3xl text-[#1B3D2F]">Product not found</h1>
            <p className="mt-4 text-sm leading-7 text-[#1B3D2F]/64">
              The requested item is unavailable or the product link has changed.
            </p>
            <Link href="/shop" className="btn-primary mt-6">
              Back to Shop
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter((entry) => entry.category === product.category && entry.id !== product.id)
    .slice(0, 4);
  const savings = product.originalPrice ? product.originalPrice - product.price : 0;
  const benefits = productBenefits[product.category] ?? productBenefits['Raw Cashews'];

  return (
    <div className="page-shell">
      <div className="container-custom">
        <Link
          href="/shop"
          className="mb-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-[#1B3D2F]/58 hover:text-[#C89B3C]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Shop
        </Link>

        <section className="card-surface overflow-hidden p-5 md:p-7">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="rounded-[2rem] border border-[rgba(27,61,47,0.08)] bg-[linear-gradient(145deg,rgba(255,252,247,0.95),rgba(240,232,219,0.92))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="chip-gold chip">{product.weight}</span>
                  {product.grade && (
                    <span className="chip ml-2 border border-[rgba(27,61,47,0.08)] bg-white/70 text-[#1B3D2F]">
                      Grade {product.grade}
                    </span>
                  )}
                </div>
                <div className="rounded-full border border-[rgba(27,61,47,0.08)] bg-white/70 px-3 py-2 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#1B3D2F]/62">
                  {product.category}
                </div>
              </div>

              <div className="relative mt-8 flex min-h-[26rem] items-center justify-center rounded-[1.8rem] border border-white/60 bg-[radial-gradient(circle_at_30%_20%,rgba(200,155,60,0.26),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.56),rgba(247,243,235,0.9))] p-8">
                <div className="absolute left-8 top-8 rounded-full border border-[rgba(200,155,60,0.28)] bg-white/75 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#1B3D2F]/60">
                  Dipak Nutra
                </div>
                <div className="relative h-80 w-64 rounded-[2.6rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.72),#C89B3C)] shadow-[0_30px_60px_rgba(27,61,47,0.16)]">
                  <div className="absolute inset-x-10 top-5 h-6 rounded-full bg-white/62" />
                  <div className="absolute inset-x-6 bottom-8 rounded-[1.6rem] border border-white/30 bg-[rgba(27,61,47,0.16)] px-4 py-4 text-center">
                    <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-white/78">
                      Premium Pack
                    </p>
                    <p className="mt-3 text-3xl text-white">DN</p>
                    <p className="mt-3 text-xs uppercase tracking-[0.2em] text-white/72">
                      {product.weight}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-7">
              <div>
                <p className="section-kicker">Premium Dry Fruit</p>
                <h1 className="mt-3 text-5xl text-[#1B3D2F]">{product.name}</h1>
                <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-[#1B3D2F]/62">
                  <span className="flex items-center gap-2">
                    <Star className="h-4 w-4 fill-[#C89B3C] text-[#C89B3C]" />
                    4.9 curated rating
                  </span>
                  <span className="h-1 w-1 rounded-full bg-[#C89B3C]" />
                  <span>In stock and ready to ship</span>
                </div>
                <div className="mt-6 flex items-end gap-3">
                  <span className="text-4xl font-bold text-[#1B3D2F]">₹{product.price}</span>
                  {product.originalPrice && (
                    <>
                      <span className="text-xl text-[#1B3D2F]/38 line-through">₹{product.originalPrice}</span>
                      <span className="chip chip-forest">Save ₹{savings}</span>
                    </>
                  )}
                </div>
                <p className="mt-6 max-w-2xl text-base leading-8 text-[#1B3D2F]/68">
                  {product.description}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="rounded-[1.4rem] border border-[rgba(27,61,47,0.08)] bg-[rgba(255,252,247,0.74)] p-4"
                  >
                    <Leaf className="h-4 w-4 text-[#C89B3C]" />
                    <p className="mt-4 text-sm leading-7 text-[#1B3D2F]/68">{benefit}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-[1.8rem] border border-[rgba(27,61,47,0.08)] bg-[rgba(255,252,247,0.72)] p-6">
                <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="section-kicker">Order Quantity</p>
                    <div className="mt-4 inline-flex items-center rounded-full border border-[rgba(27,61,47,0.12)] bg-white/70 p-1">
                      <button
                        type="button"
                        onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full text-[#1B3D2F] hover:bg-[rgba(27,61,47,0.06)]"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="min-w-[3.5rem] text-center text-lg font-bold text-[#1B3D2F]">
                        {quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => setQuantity((value) => value + 1)}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full text-[#1B3D2F] hover:bg-[rgba(27,61,47,0.06)]"
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => addItem(product, quantity)}
                    className="btn-primary min-w-[16rem]"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    Add to Cart • ₹{product.price * quantity}
                  </button>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div className="rounded-[1.3rem] border border-[rgba(27,61,47,0.08)] bg-[rgba(247,243,235,0.84)] p-4">
                    <div className="flex items-center gap-3">
                      <Truck className="h-4 w-4 text-[#C89B3C]" />
                      <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#1B3D2F]">
                        Shipping
                      </p>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-[#1B3D2F]/64">
                      Free above ₹500. Standard delivery in 5-7 business days across India.
                    </p>
                  </div>
                  <div className="rounded-[1.3rem] border border-[rgba(27,61,47,0.08)] bg-[rgba(247,243,235,0.84)] p-4">
                    <div className="flex items-center gap-3">
                      <ShieldCheck className="h-4 w-4 text-[#C89B3C]" />
                      <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#1B3D2F]">
                        Returns
                      </p>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-[#1B3D2F]/64">
                      7-day support for damaged or defective products with quick review and help.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {relatedProducts.length > 0 && (
          <section className="section-shell pb-0">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <p className="section-kicker">More from this Collection</p>
                <h2 className="mt-3 text-4xl text-[#1B3D2F]">Related products</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
              {relatedProducts.map((entry) => (
                <ProductCard key={entry.id} product={entry} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
