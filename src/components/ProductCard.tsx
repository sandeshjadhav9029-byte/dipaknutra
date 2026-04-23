'use client';

import Link from 'next/link';
import { ArrowUpRight, ShoppingCart, Star } from 'lucide-react';
import { Product } from '@/types';
import { useCartStore } from '@/store/cart';

interface ProductCardProps {
  product: Product;
}

const categoryStyles: Record<string, { glow: string; panel: string; accent: string; label: string }> = {
  'Raw Cashews': {
    glow: 'radial-gradient(circle at 30% 20%, rgba(200,155,60,0.34), transparent 46%)',
    panel: 'linear-gradient(145deg, rgba(255,248,231,0.96), rgba(243,233,210,0.92))',
    accent: '#C89B3C',
    label: 'Whole premium grades',
  },
  'Flavored Cashews': {
    glow: 'radial-gradient(circle at 25% 20%, rgba(27,61,47,0.22), transparent 44%)',
    panel: 'linear-gradient(145deg, rgba(242,246,238,0.98), rgba(229,236,223,0.92))',
    accent: '#1B3D2F',
    label: 'Bold flavour blends',
  },
  Almonds: {
    glow: 'radial-gradient(circle at 70% 20%, rgba(200,155,60,0.28), transparent 44%)',
    panel: 'linear-gradient(145deg, rgba(252,246,239,0.98), rgba(239,228,217,0.92))',
    accent: '#A67D24',
    label: 'Daily wellness staples',
  },
  Raisins: {
    glow: 'radial-gradient(circle at 25% 30%, rgba(116,77,28,0.16), transparent 42%)',
    panel: 'linear-gradient(145deg, rgba(247,238,228,0.98), rgba(235,221,206,0.92))',
    accent: '#8B5B28',
    label: 'Naturally sweet picks',
  },
  Walnuts: {
    glow: 'radial-gradient(circle at 32% 20%, rgba(77,56,36,0.18), transparent 42%)',
    panel: 'linear-gradient(145deg, rgba(247,240,233,0.98), rgba(232,223,213,0.92))',
    accent: '#6B4C2F',
    label: 'Rich kernel crunch',
  },
  Dates: {
    glow: 'radial-gradient(circle at 65% 25%, rgba(123,55,39,0.16), transparent 46%)',
    panel: 'linear-gradient(145deg, rgba(250,240,232,0.98), rgba(238,223,211,0.92))',
    accent: '#8C4A32',
    label: 'Soft caramel sweetness',
  },
};

export default function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);
  const categoryStyle = categoryStyles[product.category] ?? categoryStyles['Raw Cashews'];
  const savings =
    product.originalPrice && product.originalPrice > product.price
      ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
      : null;

  return (
    <article className="card group flex h-full flex-col border-[rgba(27,61,47,0.08)] bg-[rgba(255,252,247,0.84)]">
      <Link href={`/product/${product.slug}`} className="block">
        <div className="relative overflow-hidden p-5">
          <div
            className="relative overflow-hidden rounded-[1.4rem] border border-white/55 p-5"
            style={{
              backgroundImage: `${categoryStyle.glow}, ${categoryStyle.panel}`,
            }}
          >
            <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(255,255,255,0.4),transparent)]" />

            <div className="relative flex items-start justify-between gap-3">
              <div className="space-y-2">
                <span className="chip-gold chip">{product.weight}</span>
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#1B3D2F]/55">
                  {categoryStyle.label}
                </p>
              </div>

              <div className="flex flex-col items-end gap-2">
                {savings ? (
                  <span className="chip chip-forest">{savings}% Off</span>
                ) : (
                  <span className="chip border border-white/65 bg-white/50 text-[#1B3D2F]">
                    Featured
                  </span>
                )}
                {product.grade && (
                  <span className="chip border border-[rgba(27,61,47,0.08)] bg-white/60 text-[#1B3D2F]">
                    {product.grade}
                  </span>
                )}
              </div>
            </div>

            <div className="relative mt-8 flex min-h-36 items-end justify-between gap-4">
              <div className="max-w-[70%]">
                <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[#1B3D2F]/56">
                  {product.category}
                </p>
                <h3 className="mt-2 text-2xl text-[#1B3D2F] transition-colors group-hover:text-[#C89B3C]">
                  {product.name}
                </h3>
              </div>

              <div
                className="relative h-28 w-24 shrink-0 rounded-[1.8rem] border border-white/70 shadow-[0_16px_30px_rgba(27,61,47,0.12)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-3"
                style={{
                  background: `linear-gradient(180deg, rgba(255,255,255,0.7), ${categoryStyle.accent})`,
                }}
              >
                <div className="absolute inset-x-4 top-3 h-4 rounded-full bg-white/55" />
                <div className="absolute inset-x-3 bottom-4 rounded-[1.2rem] border border-white/30 bg-[rgba(27,61,47,0.14)] px-3 py-2 text-center text-[0.68rem] font-bold uppercase tracking-[0.14em] text-white">
                  DN
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>

      <div className="flex flex-1 flex-col px-5 pb-5">
        <p className="text-sm leading-6 text-[#1B3D2F]/68">{product.description}</p>

        <div className="mt-4 flex items-center gap-1 text-[#C89B3C]">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} className="h-3.5 w-3.5 fill-current" />
          ))}
          <span className="ml-2 text-xs font-bold uppercase tracking-[0.14em] text-[#1B3D2F]/52">
            4.9 curated rating
          </span>
        </div>

        <div className="mt-5 flex items-end justify-between gap-4">
          <div className="space-y-1">
            <p className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-[#1B3D2F]/48">
              Starting at
            </p>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-[#1B3D2F]">₹{product.price}</span>
              {product.originalPrice && (
                <span className="text-sm text-[#1B3D2F]/40 line-through">₹{product.originalPrice}</span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href={`/product/${product.slug}`}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(27,61,47,0.12)] bg-[rgba(255,252,247,0.7)] text-[#1B3D2F] hover:border-[rgba(200,155,60,0.45)] hover:text-[#C89B3C]"
              aria-label={`View ${product.name}`}
            >
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <button
              type="button"
              onClick={() => addItem(product, 1)}
              className="btn-primary min-w-[9rem]"
            >
              <ShoppingCart className="h-4 w-4" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
