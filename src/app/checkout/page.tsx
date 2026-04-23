'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Banknote, Check, Landmark, Smartphone, Truck } from 'lucide-react';
import { useCartStore } from '@/store/cart';

const paymentOptions = [
  {
    id: 'cod',
    title: 'Cash on Delivery',
    description: 'Pay when the order reaches your doorstep.',
    icon: Banknote,
  },
  {
    id: 'upi',
    title: 'UPI / GPay / PhonePe',
    description: 'Fast digital payment after order confirmation.',
    icon: Smartphone,
  },
  {
    id: 'bank',
    title: 'Bank Transfer',
    description: 'Suitable for advance payment and larger order values.',
    icon: Landmark,
  },
];

export default function CheckoutPage() {
  const router = useRouter();
  const { items, getTotal, clearCart } = useCartStore();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    pincode: '',
    paymentMethod: 'cod',
  });

  const subtotal = getTotal();
  const shipping = subtotal >= 500 ? 0 : 50;
  const grandTotal = subtotal + shipping;

  useEffect(() => {
    if (items.length === 0 && !orderPlaced) {
      router.replace('/cart');
    }
  }, [items.length, orderPlaced, router]);

  if (orderPlaced) {
    return (
      <div className="page-shell">
        <div className="container-custom">
          <div className="card-surface mx-auto max-w-2xl p-10 text-center md:p-14">
            <div className="mx-auto flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-[rgba(27,61,47,0.08)]">
              <Check className="h-8 w-8 text-[#C89B3C]" />
            </div>
            <h1 className="mt-6 text-4xl text-[#1B3D2F]">Order placed successfully</h1>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#1B3D2F]/64">
              Thank you for choosing Dipak Nutra. The team will contact you shortly to confirm
              payment and delivery details.
            </p>
            <Link href="/" className="btn-primary mt-8">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (items.length === 0) return null;

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setOrderPlaced(true);
    clearCart();
  };

  return (
    <div className="page-shell">
      <div className="container-custom">
        <section className="page-hero mb-8">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <Truck className="h-4 w-4 text-[#C89B3C]" />
              Delivery in 5-7 business days
            </div>
            <h1 className="section-title mt-6">Checkout</h1>
            <p className="section-copy mt-5">
              Complete the form below to place your order. Available payment options include UPI,
              bank transfer, and cash on delivery.
            </p>
          </div>
        </section>

        <form onSubmit={handleSubmit} className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <section className="card-surface p-6 md:p-7">
              <h2 className="text-3xl text-[#1B3D2F]">Personal information</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <input
                  required
                  type="text"
                  placeholder="Full name *"
                  className="input-field"
                  value={form.name}
                  onChange={(event) => setForm({ ...form, name: event.target.value })}
                />
                <input
                  required
                  type="email"
                  placeholder="Email *"
                  className="input-field"
                  value={form.email}
                  onChange={(event) => setForm({ ...form, email: event.target.value })}
                />
                <input
                  required
                  type="tel"
                  placeholder="Phone number *"
                  className="input-field md:col-span-2"
                  value={form.phone}
                  onChange={(event) => setForm({ ...form, phone: event.target.value })}
                />
              </div>
            </section>

            <section className="card-surface p-6 md:p-7">
              <h2 className="text-3xl text-[#1B3D2F]">Delivery address</h2>
              <div className="mt-6 space-y-4">
                <textarea
                  required
                  rows={4}
                  placeholder="Full address *"
                  className="input-field"
                  value={form.address}
                  onChange={(event) => setForm({ ...form, address: event.target.value })}
                />
                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    required
                    type="text"
                    placeholder="City *"
                    className="input-field"
                    value={form.city}
                    onChange={(event) => setForm({ ...form, city: event.target.value })}
                  />
                  <input
                    required
                    type="text"
                    placeholder="PIN code *"
                    className="input-field"
                    value={form.pincode}
                    onChange={(event) => setForm({ ...form, pincode: event.target.value })}
                  />
                </div>
              </div>
            </section>

            <section className="card-surface p-6 md:p-7">
              <h2 className="text-3xl text-[#1B3D2F]">Payment method</h2>
              <div className="mt-6 space-y-4">
                {paymentOptions.map((option) => {
                  const active = form.paymentMethod === option.id;
                  return (
                    <label
                      key={option.id}
                      className={`flex cursor-pointer items-start gap-4 rounded-[1.4rem] border p-4 ${
                        active
                          ? 'border-[rgba(200,155,60,0.42)] bg-[rgba(200,155,60,0.12)]'
                          : 'border-[rgba(27,61,47,0.08)] bg-[rgba(255,252,247,0.72)]'
                      }`}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value={option.id}
                        checked={active}
                        onChange={() => setForm({ ...form, paymentMethod: option.id })}
                        className="mt-1"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <option.icon className="h-5 w-5 text-[#C89B3C]" />
                          <p className="text-lg text-[#1B3D2F]">{option.title}</p>
                        </div>
                        <p className="mt-2 text-sm leading-7 text-[#1B3D2F]/62">{option.description}</p>
                      </div>
                    </label>
                  );
                })}
              </div>
            </section>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <section className="card-surface p-6">
              <h2 className="text-3xl text-[#1B3D2F]">Order summary</h2>
              <div className="mt-6 space-y-4">
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex items-center justify-between gap-4 text-sm text-[#1B3D2F]/64"
                  >
                    <span>
                      {item.product.name} × {item.quantity}
                    </span>
                    <span className="font-bold text-[#1B3D2F]">₹{item.product.price * item.quantity}</span>
                  </div>
                ))}
                <div className="border-t border-[rgba(27,61,47,0.08)] pt-4 text-sm text-[#1B3D2F]/64">
                  <div className="flex items-center justify-between">
                    <span>Subtotal</span>
                    <span className="font-bold text-[#1B3D2F]">₹{subtotal}</span>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <span>Shipping</span>
                    <span className="font-bold text-[#1B3D2F]">{shipping === 0 ? 'Free' : `₹${shipping}`}</span>
                  </div>
                </div>
                <div className="rounded-[1.3rem] border border-[rgba(200,155,60,0.22)] bg-[rgba(200,155,60,0.12)] p-4 text-sm leading-7 text-[#1B3D2F]/68">
                  Orders above ₹500 ship free. Return support is available within 7 days for
                  damaged or defective items.
                </div>
                <div className="flex items-center justify-between border-t border-[rgba(27,61,47,0.08)] pt-4">
                  <span className="text-base font-bold text-[#1B3D2F]">Total</span>
                  <span className="text-2xl font-bold text-[#1B3D2F]">₹{grandTotal}</span>
                </div>
              </div>
              <button type="submit" className="btn-primary mt-6 w-full">
                Place Order
              </button>
              <Link href="/cart" className="btn-secondary mt-3 w-full">
                Back to Cart
              </Link>
            </section>
          </aside>
        </form>
      </div>
    </div>
  );
}
