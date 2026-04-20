'use client';

import { useState } from 'react';
import { Package, ShoppingCart, DollarSign, Plus, Edit, Trash, Eye } from 'lucide-react';
import { products } from '@/data/products';

export default function AdminPage() {
  const [tab, setTab] = useState('products');

  return (
    <div className="min-h-screen py-8 md:py-12">
      <div className="container-custom">
        <h1 className="text-3xl font-bold text-[#2d1810] mb-8 font-heading">Admin Panel</h1>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white border border-[#e8dfd0] rounded-xl p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#f5f0e8] rounded-full flex items-center justify-center">
                <Package className="w-6 h-6 text-[#b8860b]" />
              </div>
              <div>
                <p className="text-sm text-[#2d1810]/60">Total Products</p>
                <p className="text-2xl font-bold text-[#2d1810]">{products.length}</p>
              </div>
            </div>
          </div>
          <div className="bg-white border border-[#e8dfd0] rounded-xl p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#f5f0e8] rounded-full flex items-center justify-center">
                <ShoppingCart className="w-6 h-6 text-[#b8860b]" />
              </div>
              <div>
                <p className="text-sm text-[#2d1810]/60">Total Orders</p>
                <p className="text-2xl font-bold text-[#2d1810]">0</p>
              </div>
            </div>
          </div>
          <div className="bg-white border border-[#e8dfd0] rounded-xl p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#f5f0e8] rounded-full flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-[#b8860b]" />
              </div>
              <div>
                <p className="text-sm text-[#2d1810]/60">Total Revenue</p>
                <p className="text-2xl font-bold text-[#2d1810]">₹0</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 border-b border-[#e8dfd0] mb-6">
          <button
            onClick={() => setTab('products')}
            className={`px-4 py-3 font-medium ${tab === 'products' ? 'text-[#b8860b] border-b-2 border-[#b8860b]' : 'text-[#2d1810]/60'}`}
          >
            Products
          </button>
          <button
            onClick={() => setTab('orders')}
            className={`px-4 py-3 font-medium ${tab === 'orders' ? 'text-[#b8860b] border-b-2 border-[#b8860b]' : 'text-[#2d1810]/60'}`}
          >
            Orders
          </button>
          <button
            onClick={() => setTab('content')}
            className={`px-4 py-3 font-medium ${tab === 'content' ? 'text-[#b8860b] border-b-2 border-[#b8860b]' : 'text-[#2d1810]/60'}`}
          >
            Content
          </button>
        </div>

        {/* Products Tab */}
        {tab === 'products' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-[#2d1810]">Manage Products</h2>
              <button className="btn-primary flex items-center gap-2">
                <Plus className="w-4 h-4" /> Add Product
              </button>
            </div>
            <div className="bg-white border border-[#e8dfd0] rounded-xl overflow-hidden">
              <table className="w-full">
                <thead className="bg-[#f5f0e8]">
                  <tr>
                    <th className="text-left p-4 font-medium text-[#2d1810]">Product</th>
                    <th className="text-left p-4 font-medium text-[#2d1810]">Category</th>
                    <th className="text-left p-4 font-medium text-[#2d1810]">Price</th>
                    <th className="text-left p-4 font-medium text-[#2d1810]">Stock</th>
                    <th className="text-left p-4 font-medium text-[#2d1810]">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id} className="border-t border-[#e8dfd0]">
                      <td className="p-4">
                        <p className="font-medium text-[#2d1810]">{product.name}</p>
                        <p className="text-sm text-[#2d1810]/60">{product.weight}</p>
                      </td>
                      <td className="p-4 text-[#2d1810]/70">{product.category}</td>
                      <td className="p-4">
                        <span className="font-medium text-[#b8860b]">₹{product.price}</span>
                      </td>
                      <td className="p-4">
                        <span className={`px-2 py-1 rounded-full text-xs ${product.inStock ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                          {product.inStock ? 'In Stock' : 'Out of Stock'}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex gap-2">
                          <button className="p-2 hover:bg-[#f5f0e8] rounded"><Eye className="w-4 h-4 text-[#2d1810]/60" /></button>
                          <button className="p-2 hover:bg-[#f5f0e8] rounded"><Edit className="w-4 h-4 text-[#2d1810]/60" /></button>
                          <button className="p-2 hover:bg-red-50 rounded"><Trash className="w-4 h-4 text-red-500" /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Orders Tab */}
        {tab === 'orders' && (
          <div className="text-center py-12">
            <ShoppingCart className="w-16 h-16 text-[#b8860b]/30 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-[#2d1810] mb-2">No Orders Yet</h2>
            <p className="text-[#2d1810]/60">Orders will appear here when customers place them.</p>
          </div>
        )}

        {/* Content Tab */}
        {tab === 'content' && (
          <div>
            <h2 className="text-xl font-bold text-[#2d1810] mb-6">Manage Content</h2>
            <div className="space-y-4">
              {['About Us', 'FAQ', 'Shipping & Returns', 'Contact Page'].map((page) => (
                <div key={page} className="bg-white border border-[#e8dfd0] rounded-xl p-4 flex justify-between items-center">
                  <span className="font-medium text-[#2d1810]">{page}</span>
                  <button className="btn-secondary text-sm">Edit Content</button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}