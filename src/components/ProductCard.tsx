'use client';

import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { Product } from '@/types';
import { useCartStore } from '@/store/cart';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);
  
  const savings = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  return (
    <article className="card">
      <Link href={`/product/${product.slug}`}>
        <div className="aspect-square bg-[#F7F3EB] flex items-center justify-center p-8">
          <span className="text-4xl font-bold text-[#C89B3C]/30">DN</span>
        </div>
      </Link>
      
      <div className="p-4">
        <p className="text-xs text-[#1B3D2F]/60 uppercase tracking-wider mb-1">
          {product.category}
        </p>
        <Link href={`/product/${product.slug}`}>
          <h3 className="text-lg font-semibold text-[#1B3D2F] hover:text-[#C89B3C] mb-2">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-[#1B3D2F]/70 line-clamp-2 mb-3">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xl font-bold text-[#1B3D2F]">₹{product.price}</span>
            {savings && (
              <span className="ml-2 text-sm text-[#1B3D2F]/50 line-through">
                ₹{product.originalPrice}
              </span>
            )}
          </div>
          <button
            onClick={() => addItem(product, 1)}
            className="flex items-center gap-2 px-4 py-2 bg-[#1B3D2F] text-white rounded-md text-sm font-medium hover:bg-[#2A5548]"
          >
            <ShoppingCart className="w-4 h-4" />
            Add
          </button>
        </div>
      </div>
    </article>
  );
}