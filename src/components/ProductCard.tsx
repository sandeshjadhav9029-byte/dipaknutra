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

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product, 1);
  };

  return (
    <Link href={`/product/${product.slug}`} className="card block">
      <div className="relative aspect-square bg-gradient-to-br from-[#f5f0e8] to-[#e8dfd0] overflow-hidden flex items-center justify-center p-4">
        <div className="relative w-32 h-40">
          <svg viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <defs>
              <linearGradient id={`grad-${product.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#CD853F" />
                <stop offset="100%" stopColor="#8B4513" />
              </linearGradient>
            </defs>
            <path d="M25 0H55V10H65V20H70V90C70 95.5228 65.5228 100 60 100H20C14.4772 100 10 95.5228 10 90V20H15V10H25V0Z" fill={`url(#grad-${product.id})`}/>
            <ellipse cx="40" cy="8" rx="20" ry="5" fill="#D2691E"/>
            <ellipse cx="40" cy="65" rx="25" ry="20" fill="#A0522D" fillOpacity="0.3"/>
            <ellipse cx="32" cy="55" rx="8" ry="6" fill="white" fillOpacity="0.2"/>
          </svg>
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
            className="w-10 h-10 bg-[#b8860b] text-white rounded-full flex items-center justify-center hover:bg-[#8b6914] transition-all hover:scale-110"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </Link>
  );
}