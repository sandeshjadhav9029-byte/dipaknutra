'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, Minus, Plus, ShoppingCart, Truck, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { useCartStore } from '@/store/cart';

export default function ProductPage() {
  const params = useParams<{ slug: string }>();
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore((state) => state.addItem);
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    return (
      <div className="section">
        <div className="container-custom text-center">
          <h1 className="text-2xl text-[#1B3D2F]">Product Not Found</h1>
          <Link href="/shop" className="btn bg-[#1B3D2F] text-white mt-4 inline-block">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);
  const savings = product.originalPrice ? product.originalPrice - product.price : 0;

  return (
    <div className="section">
      <div className="container-custom">
        <Link href="/shop" className="inline-flex items-center gap-2 text-sm text-[#1B3D2F]/60 mb-6 hover:text-[#C89B3C]">
          <ArrowLeft className="w-4 h-4" /> Back to Shop
        </Link>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="aspect-square bg-[#F7F3EB] rounded-lg flex items-center justify-center">
            <span className="text-5xl font-bold text-[#C89B3C]/30">{product.weight}</span>
          </div>

          <div>
            <p className="text-sm text-[#C89B3C] uppercase tracking-wider mb-2">{product.category}</p>
            <h1 className="text-3xl font-bold text-[#1B3D2F] mb-4">{product.name}</h1>
            
            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-3xl font-bold text-[#1B3D2F]">₹{product.price}</span>
              {savings > 0 && (
                <span className="text-lg text-[#1B3D2F]/50 line-through">₹{product.originalPrice}</span>
              )}
            </div>

            <p className="text-[#1B3D2F]/70 mb-6">{product.description}</p>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm text-[#1B3D2F]/60">Quantity:</span>
              <div className="flex items-center border border-[rgba(27,61,47,0.2)] rounded">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-3 py-2 hover:bg-[#F7F3EB]">
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 py-2 font-medium">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-2 hover:bg-[#F7F3EB]">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <button
              onClick={() => addItem(product, quantity)}
              className="flex items-center gap-2 bg-[#1B3D2F] text-white px-6 py-3 rounded-md font-medium hover:bg-[#2A5548] mb-6"
            >
              <ShoppingCart className="w-5 h-5" />
              Add to Cart - ₹{product.price * quantity}
            </button>

            <div className="grid grid-cols-2 gap-4 p-4 bg-[#F7F3EB] rounded-lg">
              <div className="flex items-center gap-2">
                <Truck className="w-5 h-5" style={{ color: '#C89B3C' }} />
                <div>
                  <p className="text-sm font-medium text-[#1B3D2F]">Free Shipping</p>
                  <p className="text-xs text-[#1B3D2F]/60">Above ₹500</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5" style={{ color: '#C89B3C' }} />
                <div>
                  <p className="text-sm font-medium text-[#1B3D2F]">7-Day Return</p>
                  <p className="text-xs text-[#1B3D2F]/60">Damaged products</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl font-bold text-[#1B3D2F] mb-6">Related Products</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}