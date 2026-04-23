'use client';

import { useEffect, useMemo, useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { categories, products } from '@/data/products';

interface ShopCatalogProps {
  initialCategory: string;
}

export default function ShopCatalog({ initialCategory }: ShopCatalogProps) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState('featured');

  useEffect(() => {
    setCategory(initialCategory);
  }, [initialCategory]);

  const filteredProducts = useMemo(() => {
    const normalizedSearch = search.toLowerCase().trim();

    return [...products]
      .filter((product) => {
        const matchesSearch =
          normalizedSearch.length === 0 ||
          product.name.toLowerCase().includes(normalizedSearch) ||
          product.category.toLowerCase().includes(normalizedSearch) ||
          product.description.toLowerCase().includes(normalizedSearch);

        const productCategory = product.category.toLowerCase().replace(/\s+/g, '-');
        const matchesCategory = category === 'all' || productCategory === category;

        return matchesSearch && matchesCategory;
      })
      .sort((left, right) => {
        if (sortBy === 'price-low') return left.price - right.price;
        if (sortBy === 'price-high') return right.price - left.price;
        if (sortBy === 'name') return left.name.localeCompare(right.name);
        if (sortBy === 'featured') return Number(right.featured) - Number(left.featured);
        return 0;
      });
  }, [category, search, sortBy]);

  return (
    <>
      <section className="page-hero mb-8">
        <div className="max-w-3xl">
          <div className="eyebrow">
            <SlidersHorizontal className="h-4 w-4 text-[#C89B3C]" />
            Browse All Collections
          </div>
          <h1 className="section-title mt-6">A complete shop for premium dry fruits and specialty grades.</h1>
          <p className="section-copy mt-5">
            Filter by category, search by name, and compare prices across the full Dipak Nutra
            catalogue. The store includes raw grades, flavoured cashews, almonds, raisins,
            walnuts, and dates.
          </p>
        </div>
      </section>

      <section className="card-surface mb-8 p-5 md:p-6">
        <div className="grid gap-4 lg:grid-cols-[1.3fr_0.8fr_0.7fr]">
          <label className="relative block">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#1B3D2F]/40" />
            <input
              type="text"
              placeholder="Search by product, category, or flavour"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="input-field pl-11"
            />
          </label>

          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="input-field"
          >
            {categories.map((entry) => (
              <option key={entry.slug} value={entry.slug}>
                {entry.name}
              </option>
            ))}
          </select>

          <select
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
            className="input-field"
          >
            <option value="featured">Sort by Featured</option>
            <option value="name">Sort by Name</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          {categories.map((entry) => {
            const active = category === entry.slug;
            return (
              <button
                key={entry.slug}
                type="button"
                onClick={() => setCategory(entry.slug)}
                className={`chip border ${
                  active
                    ? 'border-[rgba(200,155,60,0.45)] bg-[#1B3D2F] text-[#F7F3EB]'
                    : 'border-[rgba(27,61,47,0.08)] bg-[rgba(255,252,247,0.7)] text-[#1B3D2F]'
                }`}
              >
                {entry.name}
              </button>
            );
          })}
        </div>
      </section>

      <div className="mb-6 flex items-center justify-between gap-4">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#1B3D2F]/54">
          {filteredProducts.length} products available
        </p>
        <p className="text-sm text-[#1B3D2F]/58">Free shipping automatically applies above ₹500.</p>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="card-surface p-10 text-center">
          <h2 className="text-3xl text-[#1B3D2F]">No products matched this filter.</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#1B3D2F]/64">
            Try another category, remove the search term, or switch back to featured sorting to
            review the complete catalogue.
          </p>
        </div>
      )}
    </>
  );
}
