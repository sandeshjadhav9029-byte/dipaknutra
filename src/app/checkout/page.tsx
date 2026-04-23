'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check, Smartphone, Landmark, Banknote } from 'lucide-react';
import { useCartStore } from '@/store/cart';

export default function CheckoutPage() {
  const { items, getTotal, clearCart } = useCartStore();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', phone: '', address: '', city: '', pincode: '', paymentMethod: 'cod',
  });

  const subtotal = getTotal();
  const shipping = subtotal >= 500 ? 0 : 50;
  const total = subtotal + shipping;

  if (orderPlaced) {
    return (
      <div className="section">
        <div className="container-custom text-center py-16">
          <Check className="w-16 h-16 mx-auto text-green-500" />
          <h1 className="text-2xl text-[#1B3D2F] mt-4">Order Placed Successfully!</h1>
          <p className="text-[#1B3D2F]/60 mt-2 mb-6">We will contact you shortly.</p>
          <Link href="/" className="btn bg-[#1B3D2F] text-white">Continue Shopping</Link>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="section">
        <div className="container-custom text-center">
          <h1 className="text-2xl text-[#1B3D2F]">Your cart is empty</h1>
          <Link href="/shop" className="btn bg-[#1B3D2F] text-white mt-4">Shop Now</Link>
        </div>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderPlaced(true);
    clearCart();
  };

  return (
    <div className="section">
      <div className="container-custom">
        <h1 className="text-2xl font-bold text-[#1B3D2F] mb-8">Checkout</h1>

        <form onSubmit={handleSubmit} className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <div className="p-6 bg-white rounded-lg border border-[rgba(27,61,47,0.1)]">
              <h2 className="font-semibold text-[#1B3D2F] mb-4">Personal Information</h2>
              <div className="space-y-4">
                <input required type="text" placeholder="Full Name" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} className="input" />
                <input required type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} className="input" />
                <input required type="tel" placeholder="Phone" value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} className="input" />
              </div>
            </div>

            <div className="p-6 bg-white rounded-lg border border-[rgba(27,61,47,0.1)]">
              <h2 className="font-semibold text-[#1B3D2F] mb-4">Delivery Address</h2>
              <div className="space-y-4">
                <textarea required placeholder="Full Address" value={form.address} onChange={(e) => setForm({...form, address: e.target.value})} className="input" rows={3} />
                <div className="grid grid-cols-2 gap-4">
                  <input required type="text" placeholder="City" value={form.city} onChange={(e) => setForm({...form, city: e.target.value})} className="input" />
                  <input required type="text" placeholder="PIN Code" value={form.pincode} onChange={(e) => setForm({...form, pincode: e.target.value})} className="input" />
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-lg border border-[rgba(27,61,47,0.1)]">
              <h2 className="font-semibold text-[#1B3D2F] mb-4">Payment Method</h2>
              <div className="space-y-3">
                {[
                  { id: 'cod', title: 'Cash on Delivery', icon: Banknote },
                  { id: 'upi', title: 'UPI / GPay', icon: Smartphone },
                  { id: 'bank', title: 'Bank Transfer', icon: Landmark },
                ].map((opt) => (
                  <label key={opt.id} className={`flex items-center gap-3 p-3 rounded border cursor-pointer ${form.paymentMethod === opt.id ? 'border-[#C89B3C] bg-[#C89B3C]/10' : 'border-[rgba(27,61,47,0.1)]'}`}>
                    <input type="radio" name="payment" checked={form.paymentMethod === opt.id} onChange={() => setForm({...form, paymentMethod: opt.id})} />
                    <opt.icon className="w-5 h-5" style={{ color: '#C89B3C' }} />
                    <span className="text-[#1B3D2F]">{opt.title}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:sticky lg:top-24 h-fit">
            <div className="p-6 bg-white rounded-lg border border-[rgba(27,61,47,0.1)]">
              <h2 className="font-semibold text-[#1B3D2F] mb-4">Order Summary</h2>
              <div className="space-y-3 text-sm">
                {items.map((item) => (
                  <div key={item.product.id} className="flex justify-between">
                    <span className="text-[#1B3D2F]/70">{item.product.name} x{item.quantity}</span>
                    <span className="font-medium">₹{item.product.price * item.quantity}</span>
                  </div>
                ))}
                <div className="flex justify-between pt-3 border-t border-[rgba(27,61,47,0.1)]">
                  <span>Total</span>
                  <span className="font-bold text-lg">₹{total}</span>
                </div>
              </div>
              <button type="submit" className="btn bg-[#1B3D2F] text-white w-full mt-4">Place Order</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}