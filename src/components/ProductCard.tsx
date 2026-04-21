'use client';

import Link from 'next/link';
import { ShoppingCart, Star } from 'lucide-react';
import { Product } from '@/types';
import { useCartStore } from '@/store/cart';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product, 1);
  };

  return (
    <Link 
      href={`/product/${product.slug}`} 
      className="card block group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square bg-gradient-to-br from-[#f5f0e8] to-[#e8dfd0] overflow-hidden flex items-center justify-center p-4">
        {/* Product Image - Kokam Bottle SVG */}
        <div className={`relative w-28 h-36 transition-transform duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}>
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
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.originalPrice && (
            <span className="px-2 py-1 bg-red-500 text-white text-xs font-bold rounded">
              {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
            </span>
          )}
          {product.grade && (
            <span className="px-2 py-1 bg-[#b8860b] text-white text-xs font-bold rounded">
              {product.grade}
            </span>
          )}
          {product.featured && !product.originalPrice && (
            <span className="px-2 py-1 bg-green-600 text-white text-xs font-bold rounded">
              Best Seller
            </span>
          )}
        </div>

        {/* Quick Add Button */}
        <button
          onClick={handleAddToCart}
          className={`absolute bottom-3 right-3 w-10 h-10 bg-[#b8860b] text-white rounded-full flex items-center justify-center hover:bg-[#8b6914] transition-all hover:scale-110 shadow-lg ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
        >
          <ShoppingCart className="w-5 h-5" />
        </button>
      </div>
      
      <div className="p-4">
        <p className="text-xs text-[#b8860b] font-medium mb-1">{product.category}</p>
        <h3 className="font-semibold text-[#2d1810] mb-1 line-clamp-1 group-hover:text-[#b8860b] transition-colors">
          {product.name}
        </h3>
        <p className="text-xs text-[#2d1810]/60 mb-2">{product.weight}</p>
        
        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
          ))}
          <span className="text-xs text-[#2d1810]/60 ml-1">4.9 (128 reviews)</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-[#b8860b]">₹{product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-[#2d1810]/50 line-through">₹{product.originalPrice}</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}