'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCartStore } from '@/store/cart';

export default function CheckoutPage() {
  const router = useRouter();
  const { items, getTotal, clearCart } = useCartStore();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', phone: '', address: '', city: '', pincode: '', paymentMethod: 'cod'
  });

  const total = getTotal();
  const shipping = total >= 500 ? 0 : 50;
  const grandTotal = total + shipping;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderPlaced(true);
    clearCart();
  };

  if (typeof window === 'undefined') return null;

  if (orderPlaced) {
    return (
      <div className="min-h-screen py-12 flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">✓</span>
          </div>
          <h1 className="text-3xl font-bold text-[#2d1810] mb-4">Order Placed Successfully!</h1>
          <p className="text-[#2d1810]/70 mb-8">Thank you for your order. We will contact you shortly for confirmation.</p>
          <button onClick={() => router.push('/')} className="btn-primary">Continue Shopping</button>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    router.push('/cart');
    return null;
  }

  return (
    <div className="min-h-screen py-8 md:py-12">
      <div className="container-custom">
        <h1 className="text-3xl font-bold text-[#2d1810] mb-8 font-heading">Checkout</h1>
        
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white border border-[#e8dfd0] rounded-xl p-6">
              <h2 className="text-xl font-bold text-[#2d1810] mb-4">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input required type="text" placeholder="Full Name *" className="input-field" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
                <input required type="email" placeholder="Email *" className="input-field" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
                <input required type="tel" placeholder="Phone Number *" className="input-field md:col-span-2" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
              </div>
            </div>

            <div className="bg-white border border-[#e8dfd0] rounded-xl p-6">
              <h2 className="text-xl font-bold text-[#2d1810] mb-4">Delivery Address</h2>
              <div className="space-y-4">
                <textarea required placeholder="Full Address *" rows={3} className="input-field" value={form.address} onChange={e => setForm({...form, address: e.target.value})} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input required type="text" placeholder="City *" className="input-field" value={form.city} onChange={e => setForm({...form, city: e.target.value})} />
                  <input required type="text" placeholder="PIN Code *" className="input-field" value={form.pincode} onChange={e => setForm({...form, pincode: e.target.value})} />
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#e8dfd0] rounded-xl p-6">
              <h2 className="text-xl font-bold text-[#2d1810] mb-4">Payment Method</h2>
              <div className="space-y-3">
                <label className="flex items-center gap-3 p-4 border-2 border-[#b8860b] rounded-lg cursor-pointer">
                  <input type="radio" name="payment" value="cod" checked onChange={() => setForm({...form, paymentMethod: 'cod'})} />
                  <span className="font-medium">Cash on Delivery (COD)</span>
                </label>
                <label className="flex items-center gap-3 p-4 border-2 border-[#e8dfd0] rounded-lg cursor-pointer">
                  <input type="radio" name="payment" value="upi" onChange={() => setForm({...form, paymentMethod: 'upi'})} />
                  <span className="font-medium">UPI / GPay / PhonePe</span>
                </label>
                <label className="flex items-center gap-3 p-4 border-2 border-[#e8dfd0] rounded-lg cursor-pointer">
                  <input type="radio" name="payment" value="bank" onChange={() => setForm({...form, paymentMethod: 'bank'})} />
                  <span className="font-medium">Bank Transfer</span>
                </label>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white border border-[#e8dfd0] rounded-xl p-6 sticky top-24">
              <h2 className="text-xl font-bold text-[#2d1810] mb-4">Order Summary</h2>
              <div className="space-y-3 mb-6">
                {items.map((item) => (
                  <div key={item.product.id} className="flex justify-between text-sm">
                    <span className="text-[#2d1810]/70">{item.product.name} x {item.quantity}</span>
                    <span>₹{item.product.price * item.quantity}</span>
                  </div>
                ))}
                <div className="border-t pt-3 flex justify-between">
                  <span className="text-[#2d1810]/70">Subtotal</span>
                  <span>₹{total}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#2d1810]/70">Shipping</span>
                  <span>{shipping === 0 ? 'Free' : `₹${shipping}`}</span>
                </div>
                <div className="border-t pt-3 flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-[#b8860b]">₹{grandTotal}</span>
                </div>
              </div>
              <button type="submit" className="btn-primary w-full">Place Order</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}