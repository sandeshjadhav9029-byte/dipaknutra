'use client';

import { useState } from 'react';
import { Minus, Plus, Trash, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCartStore } from '@/store/cart';
import Link from 'next/link';

export default function CartPage() {
  const { items, updateQuantity, removeItem, getTotal } = useCartStore();
  const total = getTotal();

  if (items.length === 0) {
    return (
      <div className="min-h-screen py-12 flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="w-16 h-16 text-[#b8860b]/30 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-[#2d1810] mb-2">Your cart is empty</h1>
          <p className="text-[#2d1810]/60 mb-8">Add some delicious dry fruits to get started!</p>
          <Link href="/shop" className="btn-primary">Start Shopping</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 md:py-12">
      <div className="container-custom">
        <h1 className="text-3xl font-bold text-[#2d1810] mb-8 font-heading">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.product.id} className="flex gap-4 p-4 bg-white border border-[#e8dfd0] rounded-xl">
                <div className="w-24 h-24 bg-[#f5f0e8] rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-[#b8860b]/30">{item.product.category.charAt(0)}</span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <div>
                      <Link href={`/product/${item.product.slug}`} className="font-semibold text-[#2d1810] hover:text-[#b8860b]">
                        {item.product.name}
                      </Link>
                      <p className="text-sm text-[#2d1810]/60">{item.product.weight}</p>
                    </div>
                    <p className="font-bold text-[#b8860b]">₹{item.product.price * item.quantity}</p>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center border-2 border-[#e8dfd0] rounded-lg">
                      <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="w-10 h-10 flex items-center justify-center hover:bg-[#f5f0e8]">
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-10 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="w-10 h-10 flex items-center justify-center hover:bg-[#f5f0e8]">
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <button onClick={() => removeItem(item.product.id)} className="text-red-500 hover:text-red-700">
                      <Trash className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white border border-[#e8dfd0] rounded-xl p-6 sticky top-24">
              <h2 className="text-xl font-bold text-[#2d1810] mb-4">Order Summary</h2>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-[#2d1810]/70">Subtotal</span>
                  <span className="font-medium">₹{total}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#2d1810]/70">Shipping</span>
                  <span className="font-medium">{total >= 500 ? 'Free' : '₹50'}</span>
                </div>
                <div className="border-t pt-3 flex justify-between">
                  <span className="font-bold text-[#2d1810]">Total</span>
                  <span className="font-bold text-[#b8860b]">₹{total + (total >= 0 ? 50 : 0)}</span>
                </div>
              </div>
              <Link href="/checkout" className="btn-primary w-full flex items-center justify-center gap-2">
                Checkout <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}