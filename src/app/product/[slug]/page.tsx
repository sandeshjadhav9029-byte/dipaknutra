'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ShoppingCart, Minus, Plus, Star, Truck, Shield, ArrowLeft } from 'lucide-react';
import { products } from '@/data/products';
import { useCartStore } from '@/store/cart';
import ProductCard from '@/components/ProductCard';

export default function ProductPage() {
  const params = useParams();
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore((state) => state.addItem);
  
  const product = products.find(p => p.slug === params.slug);
  const relatedProducts = products.filter(p => p.category === product?.category && p.id !== product?.id).slice(0, 4);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#2d1810] mb-4">Product Not Found</h1>
          <Link href="/shop" className="btn-primary">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, quantity);
  };

  return (
    <div className="min-h-screen py-8 md:py-12">
      <div className="container-custom">
        <Link href="/shop" className="flex items-center gap-2 text-[#2d1810]/60 hover:text-[#b8860b] mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image */}
          <div className="aspect-square bg-[#f5f0e8] rounded-2xl flex items-center justify-center">
            <span className="text-8xl font-bold text-[#b8860b]/30">{product.category.charAt(0)}</span>
          </div>

          {/* Details */}
          <div>
            <p className="text-sm text-[#b8860b] font-medium mb-2">{product.category}</p>
            <h1 className="text-3xl md:text-4xl font-bold text-[#2d1810] mb-4 font-heading">{product.name}</h1>
            {product.grade && <span className="badge mb-4">Grade {product.grade}</span>}
            
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-bold text-[#b8860b]">₹{product.price}</span>
              {product.originalPrice && (
                <span className="text-xl text-[#2d1810]/50 line-through">₹{product.originalPrice}</span>
              )}
            </div>

            <p className="text-[#2d1810]/70 mb-6">{product.description}</p>

            <div className="flex items-center gap-4 mb-8">
              <span className="text-sm font-medium">Quantity:</span>
              <div className="flex items-center border-2 border-[#e8dfd0] rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 flex items-center justify-center hover:bg-[#f5f0e8]"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 flex items-center justify-center hover:bg-[#f5f0e8]"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="btn-primary w-full flex items-center justify-center gap-2 mb-8"
            >
              <ShoppingCart className="w-5 h-5" /> Add to Cart - ₹{product.price * quantity}
            </button>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-[#f5f0e8] rounded-lg">
                <Truck className="w-5 h-5 text-[#b8860b]" />
                <div>
                  <p className="text-sm font-medium">Free Shipping</p>
                  <p className="text-xs text-[#2d1810]/60">Orders above ₹500</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-[#f5f0e8] rounded-lg">
                <Shield className="w-5 h-5 text-[#b8860b]" />
                <div>
                  <p className="text-sm font-medium">Quality Assured</p>
                  <p className="text-xs text-[#2d1810]/60">Premium grade</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-[#2d1810] mb-6 font-heading">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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