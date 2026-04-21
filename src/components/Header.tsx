'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ShoppingCart, Menu, X, User, Search, ChevronDown } from 'lucide-react';
import { useCartStore } from '@/store/cart';
import { categories } from '@/data/products';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const itemCount = useCartStore((state) => state.getItemCount());

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/shop', label: 'Shop All', hasDropdown: true },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
    { href: '/faq', label: 'FAQ' },
    { href: '/shipping', label: 'Shipping & Returns' },
  ];

  return (
    <header className="sticky top-0 z-50">
      {/* Announcement Bar */}
      <div className="bg-[#2d1810] text-white text-center py-2 text-sm">
        <span className="inline-flex items-center gap-2">
          🎉 Free Shipping on orders above ₹500 | Use code: DIPAK10 for 10% OFF above ₹3000
        </span>
      </div>

      {/* Main Header */}
      <div className="bg-[#fdfbf7]/95 backdrop-blur-sm border-b border-[#e8dfd0]">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* LOGO */}
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-12 h-12">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  {/* Kokam Bottle Shape - Main body */}
                  <path d="M30 15 L70 15 L70 25 L80 25 L80 35 L85 35 L85 90 C85 95 80 100 75 100 L25 100 C20 100 15 95 15 90 L15 35 L20 35 L20 25 L30 25 Z" fill="#CD853F"/>
                  {/* Neck of bottle */}
                  <ellipse cx="50" cy="15" rx="20" ry="8" fill="#D2691E"/>
                  {/* Label area */}
                  <rect x="25" y="40" width="50" height="40" rx="3" fill="#fdfbf7"/>
                  {/* "DN" text */}
                  <text x="50" y="68" textAnchor="middle" fill="#8B4513" fontSize="24" fontWeight="bold" fontFamily="serif">DN</text>
                  {/* Highlight */}
                  <ellipse cx="35" cy="35" rx="8" ry="15" fill="white" fillOpacity="0.2"/>
                </svg>
              </div>
              <span className="text-xl md:text-2xl font-bold text-[#2d1810] font-serif">
                Dipak<span className="text-[#b8860b]">Nutra</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-[#2d1810]/80 hover:text-[#b8860b] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Shop Dropdown */}
            <div className="hidden lg:block relative">
              <button
                onClick={() => setShopOpen(!shopOpen)}
                className="text-sm font-medium text-[#2d1810]/80 hover:text-[#b8860b] transition-colors flex items-center gap-1"
              >
                Shop <ChevronDown className={`w-4 h-4 ${shopOpen ? 'rotate-180' : ''}`} />
              </button>
              {shopOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-[#e8dfd0] rounded-lg shadow-xl py-2 z-50">
                  {categories.slice(1).map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/shop?category=${cat.slug}`}
                      className="block px-4 py-2 text-sm text-[#2d1810] hover:bg-[#f5f0e8] hover:text-[#b8860b]"
                      onClick={() => setShopOpen(false)}
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Search & Actions */}
            <div className="flex items-center gap-3">
              <button className="hidden md:flex items-center gap-2 px-4 py-2 bg-[#f5f0e8] rounded-full text-sm text-[#2d1810]/60">
                <Search className="w-4 h-4" />
              </button>
              <Link href="/admin" className="hidden md:flex items-center gap-1 text-sm font-medium text-[#2d1810]/60 hover:text-[#b8860b]">
                <User className="w-4 h-4" />
              </Link>
              <Link href="/cart" className="relative">
                <ShoppingCart className="w-6 h-6 text-[#2d1810]" />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 w-5 h-5 bg-[#b8860b] text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </Link>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden">
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Category Bar */}
        <div className="hidden lg:block border-t border-[#e8dfd0]">
          <div className="container-custom py-2">
            <div className="flex items-center gap-8 overflow-x-auto">
              {categories.slice(1).map((cat) => (
                <Link key={cat.slug} href={`/shop?category=${cat.slug}`} className="text-sm text-[#2d1810]/70 hover:text-[#b8860b] whitespace-nowrap">
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#e8dfd0] absolute w-full">
          <div className="container-custom py-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="block py-3 border-b border-[#e8dfd0]" onClick={() => setMobileMenuOpen(false)}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}