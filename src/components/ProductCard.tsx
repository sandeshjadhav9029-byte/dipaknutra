'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';
import { Product } from '@/types';
import { useCartStore } from '@/store/cart';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product, 1);
  };

  return (
    <Link href={`/product/${product.slug}`} className="card block">
      <div className="relative aspect-square bg-[#f5f0e8] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-[#b8860b]/30">
          <span className="text-4xl font-bold">{product.category.charAt(0)}</span>
        </div>
        {product.originalPrice && (
          <span className="absolute top-3 left-3 badge bg-red-500">
            {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
          </span>
        )}
        {product.grade && (
          <span className="absolute top-3 right-3 badge">{product.grade}</span>
        )}
      </div>
      <div className="p-4">
        <p className="text-xs text-[#b8860b] font-medium mb-1">{product.category}</p>
        <h3 className="font-semibold text-[#2d1810] mb-1 line-clamp-1">{product.name}</h3>
        <p className="text-xs text-[#2d1810]/60 mb-2">{product.weight}</p>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-[#b8860b]">₹{product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-[#2d1810]/50 line-through ml-2">₹{product.originalPrice}</span>
            )}
          </div>
          <button
            onClick={handleAddToCart}
            className="w-10 h-10 bg-[#b8860b] text-white rounded-full flex items-center justify-center hover:bg-[#8b6914] transition-colors"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </Link>
  );
}