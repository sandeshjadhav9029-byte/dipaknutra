'use client';

import Link from 'next/link';
import { ArrowRight, Minus, Plus, ShoppingBag, Trash2, Truck } from 'lucide-react';
import { useCartStore } from '@/store/cart';

export default function CartPage() {
  const { items, updateQuantity, removeItem, getTotal } = useCartStore();
  const subtotal = getTotal();
  const shipping = subtotal >= 500 || subtotal === 0 ? 0 : 50;
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <div className="page-shell">
        <div className="container-custom">
          <div className="card-surface mx-auto max-w-2xl p-10 text-center md:p-14">
            <div className="mx-auto flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-[rgba(27,61,47,0.08)]">
              <ShoppingBag className="h-8 w-8 text-[#C89B3C]" />
            </div>
            <h1 className="mt-6 text-4xl text-[#1B3D2F]">Your cart is empty</h1>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#1B3D2F]/64">
              Add raw cashews, almonds, dates, or any featured collection to continue to checkout.
            </p>
            <Link href="/shop" className="btn-primary mt-8">
              Browse Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-shell">
      <div className="container-custom">
        <section className="page-hero mb-8">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <Truck className="h-4 w-4 text-[#C89B3C]" />
              Free delivery above ₹500
            </div>
            <h1 className="section-title mt-6">Shopping cart</h1>
            <p className="section-copy mt-5">
              Review pack sizes, adjust quantities, and move to checkout with UPI, bank transfer,
              or cash on delivery.
            </p>
          </div>
        </section>

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-4">
            {items.map((item) => (
              <article
                key={item.product.id}
                className="card-surface flex flex-col gap-5 p-5 md:flex-row md:items-center"
              >
                <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-[1.5rem] border border-[rgba(27,61,47,0.08)] bg-[linear-gradient(145deg,rgba(255,252,247,0.95),rgba(240,232,219,0.92))] text-3xl text-[#1B3D2F]">
                  DN
                </div>

                <div className="flex-1">
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <p className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-[#1B3D2F]/46">
                        {item.product.category}
                      </p>
                      <Link
                        href={`/product/${item.product.slug}`}
                        className="mt-2 block text-2xl text-[#1B3D2F] hover:text-[#C89B3C]"
                      >
                        {item.product.name}
                      </Link>
                      <p className="mt-2 text-sm text-[#1B3D2F]/58">{item.product.weight}</p>
                    </div>
                    <p className="text-2xl font-bold text-[#1B3D2F]">₹{item.product.price * item.quantity}</p>
                  </div>

                  <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="inline-flex items-center rounded-full border border-[rgba(27,61,47,0.12)] bg-white/70 p-1">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full text-[#1B3D2F] hover:bg-[rgba(27,61,47,0.06)]"
                        aria-label={`Decrease ${item.product.name}`}
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="min-w-[3rem] text-center text-lg font-bold text-[#1B3D2F]">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full text-[#1B3D2F] hover:bg-[rgba(27,61,47,0.06)]"
                        aria-label={`Increase ${item.product.name}`}
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeItem(item.product.id)}
                      className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-[#1B3D2F]/56 hover:text-red-600"
                    >
                      <Trash2 className="h-4 w-4" />
                      Remove
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="card-surface p-6">
              <h2 className="text-3xl text-[#1B3D2F]">Order summary</h2>
              <div className="mt-6 space-y-4 text-sm text-[#1B3D2F]/66">
                <div className="flex items-center justify-between">
                  <span>Subtotal</span>
                  <span className="font-bold text-[#1B3D2F]">₹{subtotal}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Shipping</span>
                  <span className="font-bold text-[#1B3D2F]">{shipping === 0 ? 'Free' : `₹${shipping}`}</span>
                </div>
                <div className="rounded-[1.3rem] border border-[rgba(200,155,60,0.22)] bg-[rgba(200,155,60,0.12)] p-4 text-[#1B3D2F]">
                  Orders above ₹500 qualify for free shipping automatically.
                </div>
                <div className="flex items-center justify-between border-t border-[rgba(27,61,47,0.08)] pt-4 text-base">
                  <span className="font-bold text-[#1B3D2F]">Total</span>
                  <span className="text-2xl font-bold text-[#1B3D2F]">₹{total}</span>
                </div>
              </div>

              <Link href="/checkout" className="btn-primary mt-6 w-full">
                Proceed to Checkout
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/shop" className="btn-secondary mt-3 w-full">
                Continue Shopping
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
