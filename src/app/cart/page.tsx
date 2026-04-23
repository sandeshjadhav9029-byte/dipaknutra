'use client';

import Link from 'next/link';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCartStore } from '@/store/cart';

export default function CartPage() {
  const { items, updateQuantity, removeItem, getTotal } = useCartStore();
  const subtotal = getTotal();
  const shipping = subtotal >= 500 || subtotal === 0 ? 0 : 50;
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <div className="section">
        <div className="container-custom text-center py-16">
          <ShoppingBag className="w-16 h-16 mx-auto text-[#C89B3C]/50" />
          <h1 className="text-2xl text-[#1B3D2F] mt-4">Your cart is empty</h1>
          <p className="text-[#1B3D2F]/60 mt-2 mb-6">Add products to start shopping</p>
          <Link href="/shop" className="btn bg-[#1B3D2F] text-white">Browse Products</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="section">
      <div className="container-custom">
        <h1 className="text-2xl font-bold text-[#1B3D2F] mb-8">Shopping Cart</h1>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.product.id} className="flex gap-4 p-4 bg-white rounded-lg border border-[rgba(27,61,47,0.1)]">
                <div className="w-24 h-24 bg-[#F7F3EB] rounded flex items-center justify-center">
                  <span className="text-xl font-bold text-[#C89B3C]/30">{item.product.weight}</span>
                </div>
                <div className="flex-1">
                  <Link href={`/product/${item.product.slug}`} className="font-medium text-[#1B3D2F] hover:text-[#C89B3C]">
                    {item.product.name}
                  </Link>
                  <p className="text-sm text-[#1B3D2F]/60">{item.product.category}</p>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center border border-[rgba(27,61,47,0.2)] rounded">
                      <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="px-3 py-1 hover:bg-[#F7F3EB]">
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-4 py-1">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="px-3 py-1 hover:bg-[#F7F3EB]">
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <span className="font-bold text-[#1B3D2F]">₹{item.product.price * item.quantity}</span>
                  </div>
                </div>
                <button onClick={() => removeItem(item.product.id)} className="text-red-500 hover:text-red-700">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>

          <div className="lg:sticky lg:top-24 h-fit">
            <div className="p-6 bg-white rounded-lg border border-[rgba(27,61,47,0.1)]">
              <h2 className="text-lg font-bold text-[#1B3D2F] mb-4">Order Summary</h2>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#1B3D2F]/70">Subtotal</span>
                  <span className="font-medium">₹{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#1B3D2F]/70">Shipping</span>
                  <span className="font-medium">{shipping === 0 ? 'Free' : `₹${shipping}`}</span>
                </div>
                <div className="flex justify-between pt-3 border-t border-[rgba(27,61,47,0.1)]">
                  <span className="font-bold">Total</span>
                  <span className="font-bold text-lg">₹{total}</span>
                </div>
              </div>
              <Link href="/checkout" className="btn bg-[#1B3D2F] text-white w-full mt-4">
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}