'use client';

import { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/data/products';

interface ShopPageProps {
  initialCategory: string;
}

export default function ShopPage({ initialCategory }: ShopPageProps) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  
  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter((p) => p.category.toLowerCase().replace(/ /g, '-') === selectedCategory);

  return (
    <div className="section">
      <div className="container-custom">
        <h1 className="text-3xl font-bold text-[#1B3D2F] mb-8">Shop</h1>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setSelectedCategory(cat.slug)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === cat.slug
                  ? 'bg-[#1B3D2F] text-white'
                  : 'bg-white text-[#1B3D2F] border border-[rgba(27,61,47,0.2)] hover:border-[#C89B3C]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <p className="text-center text-[#1B3D2F]/60 py-12">
            No products found in this category.
          </p>
        )}
      </div>
    </div>
  );
}