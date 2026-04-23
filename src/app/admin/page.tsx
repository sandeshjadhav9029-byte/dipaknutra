'use client';

import { useState } from 'react';
import {
  CircleDollarSign,
  Edit3,
  Eye,
  Package,
  Plus,
  ShoppingCart,
  Trash2,
} from 'lucide-react';
import { products } from '@/data/products';

const tabs = ['products', 'orders', 'content'] as const;

export default function AdminPage() {
  const [tab, setTab] = useState<(typeof tabs)[number]>('products');

  return (
    <div className="page-shell">
      <div className="container-custom">
        <section className="page-hero mb-8">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <Package className="h-4 w-4 text-[#C89B3C]" />
              Admin Workspace
            </div>
            <h1 className="section-title mt-6">A clean control surface for products, orders, and content.</h1>
            <p className="section-copy mt-5">
              This dashboard keeps the admin route aligned with the storefront brand system while
              presenting the project structure requested in the brief.
            </p>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {[
            { label: 'Total products', value: String(products.length), icon: Package },
            { label: 'Total orders', value: '0', icon: ShoppingCart },
            { label: 'Total revenue', value: '₹0', icon: CircleDollarSign },
          ].map((card) => (
            <div key={card.label} className="card-surface p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(27,61,47,0.08)]">
                <card.icon className="h-5 w-5 text-[#C89B3C]" />
              </div>
              <p className="mt-5 text-sm font-bold uppercase tracking-[0.16em] text-[#1B3D2F]/54">
                {card.label}
              </p>
              <p className="mt-3 text-4xl text-[#1B3D2F]">{card.value}</p>
            </div>
          ))}
        </section>

        <section className="card-surface mt-8 p-5 md:p-6">
          <div className="flex flex-wrap gap-3 border-b border-[rgba(27,61,47,0.08)] pb-4">
            {tabs.map((entry) => {
              const active = tab === entry;
              return (
                <button
                  key={entry}
                  type="button"
                  onClick={() => setTab(entry)}
                  className={`chip border ${
                    active
                      ? 'border-[rgba(200,155,60,0.45)] bg-[#1B3D2F] text-[#F7F3EB]'
                      : 'border-[rgba(27,61,47,0.08)] bg-[rgba(255,252,247,0.68)] text-[#1B3D2F]'
                  }`}
                >
                  {entry}
                </button>
              );
            })}
          </div>

          {tab === 'products' && (
            <div className="mt-6">
              <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-3xl text-[#1B3D2F]">Manage products</h2>
                  <p className="mt-2 text-sm text-[#1B3D2F]/62">
                    Add or refine the catalogue in `src/data/products.ts`.
                  </p>
                </div>
                <button type="button" className="btn-primary">
                  <Plus className="h-4 w-4" />
                  Add Product
                </button>
              </div>

              <div className="overflow-x-auto rounded-[1.5rem] border border-[rgba(27,61,47,0.08)]">
                <table className="min-w-full bg-[rgba(255,252,247,0.74)] text-left">
                  <thead className="bg-[rgba(247,243,235,0.92)]">
                    <tr className="text-sm uppercase tracking-[0.14em] text-[#1B3D2F]/56">
                      <th className="px-4 py-4">Product</th>
                      <th className="px-4 py-4">Category</th>
                      <th className="px-4 py-4">Price</th>
                      <th className="px-4 py-4">Stock</th>
                      <th className="px-4 py-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product) => (
                      <tr key={product.id} className="border-t border-[rgba(27,61,47,0.08)]">
                        <td className="px-4 py-4">
                          <p className="font-bold text-[#1B3D2F]">{product.name}</p>
                          <p className="mt-1 text-sm text-[#1B3D2F]/58">{product.weight}</p>
                        </td>
                        <td className="px-4 py-4 text-sm text-[#1B3D2F]/64">{product.category}</td>
                        <td className="px-4 py-4 font-bold text-[#1B3D2F]">₹{product.price}</td>
                        <td className="px-4 py-4">
                          <span
                            className={`chip ${
                              product.inStock
                                ? 'border border-[rgba(27,61,47,0.08)] bg-[rgba(27,61,47,0.08)] text-[#1B3D2F]'
                                : 'border border-[rgba(180,68,44,0.18)] bg-[rgba(180,68,44,0.08)] text-[#8a3f29]'
                            }`}
                          >
                            {product.inStock ? 'In Stock' : 'Out of Stock'}
                          </span>
                        </td>
                        <td className="px-4 py-4">
                          <div className="flex gap-2">
                            {[Eye, Edit3, Trash2].map((Icon, index) => (
                              <button
                                key={`${product.id}-${index}`}
                                type="button"
                                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(27,61,47,0.08)] bg-white/70 text-[#1B3D2F]/70 hover:border-[rgba(200,155,60,0.4)] hover:text-[#C89B3C]"
                              >
                                <Icon className="h-4 w-4" />
                              </button>
                            ))}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {tab === 'orders' && (
            <div className="py-16 text-center">
              <ShoppingCart className="mx-auto h-10 w-10 text-[#C89B3C]" />
              <h2 className="mt-5 text-3xl text-[#1B3D2F]">No orders yet</h2>
              <p className="mt-3 text-sm leading-7 text-[#1B3D2F]/62">
                Orders will appear here once checkout data is connected to a backend or CMS.
              </p>
            </div>
          )}

          {tab === 'content' && (
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {['About Us', 'FAQ', 'Shipping & Returns', 'Contact Details'].map((entry) => (
                <div key={entry} className="rounded-[1.5rem] border border-[rgba(27,61,47,0.08)] bg-[rgba(247,243,235,0.74)] p-5">
                  <p className="text-xl text-[#1B3D2F]">{entry}</p>
                  <p className="mt-2 text-sm leading-7 text-[#1B3D2F]/62">
                    Update this content directly in the data and route files used by the storefront.
                  </p>
                  <button type="button" className="btn-secondary mt-5">
                    <Edit3 className="h-4 w-4" />
                    Edit Content
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
