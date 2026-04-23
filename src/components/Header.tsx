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
      <div className="bg-[#1B3D2F] text-white text-center py-2 text-sm">
        <span className="inline-flex items-center gap-2">
          🎉 Free Shipping on orders above ₹500 | Use code: DIPAK10 for 10% OFF above ₹3000
        </span>
      </div>

      {/* Main Header */}
      <div className="bg-[#F7F3EB]/95 backdrop-blur-sm border-b border-[#e8dfd0]">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* LOGO - Based on Brand Spec */}
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-14 h-14">
                <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  {/* Background */}
                  <rect width="120" height="120" rx="12" fill="#F7F3EB"/>
                  
                  {/* D in Forest Green */}
                  <text x="28" y="75" fontSize="48" fontFamily="serif" fontWeight="bold" fill="#1B3D2F">D</text>
                  
                  {/* N in Gold */}
                  <text x="62" y="75" fontSize="48" fontFamily="serif" fontWeight="bold" fill="#C89B3C">N</text>
                  
                  {/* Leaf on N */}
                  <path d="M75 35 Q85 20 95 30 Q90 45 80 50 Q75 45 75 35" fill="#1B3D2F"/>
                  <path d="M78 38 Q85 28 92 35" stroke="#F7F3EB" strokeWidth="1.5" fill="none"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-bold font-serif" style={{ color: '#1B3D2F' }}>
                  DIPAK <span style={{ color: '#C89B3C' }}>NUTRA</span>
                </span>
                <span className="text-[10px] tracking-widest uppercase" style={{ color: '#1B3D2F' }}>nature's goodness, your wellness</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm font-medium text-[#1B3D2F]/80 hover:text-[#C89B3C] transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Shop Dropdown */}
            <div className="hidden lg:block relative">
              <button onClick={() => setShopOpen(!shopOpen)} className="text-sm font-medium text-[#1B3D2F]/80 hover:text-[#C89B3C] transition-colors flex items-center gap-1">
                Shop <ChevronDown className={`w-4 h-4 ${shopOpen ? 'rotate-180' : ''}`} />
              </button>
              {shopOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-[#e8dfd0] rounded-lg shadow-xl py-2 z-50">
                  {categories.slice(1).map((cat) => (
                    <Link key={cat.slug} href={`/shop?category=${cat.slug}`} className="block px-4 py-2 text-sm text-[#1B3D2F] hover:bg-[#F7F3EB] hover:text-[#C89B3C]" onClick={() => setShopOpen(false)}>
                      {cat.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Search & Actions */}
            <div className="flex items-center gap-3">
              <button className="hidden md:flex items-center gap-2 px-4 py-2 bg-[#F7F3EB] rounded-full text-sm text-[#1B3D2F]/60">
                <Search className="w-4 h-4" />
              </button>
              <Link href="/admin" className="hidden md:flex items-center gap-1 text-sm font-medium text-[#1B3D2F]/60 hover:text-[#C89B3C]">
                <User className="w-4 h-4" />
              </Link>
              <Link href="/cart" className="relative">
                <ShoppingCart className="w-6 h-6" style={{ color: '#1B3D2F' }} />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 w-5 h-5 bg-[#C89B3C] text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </Link>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden">
                {mobileMenuOpen ? <X className="w-6 h-6" style={{ color: '#1B3D2F' }} /> : <Menu className="w-6 h-6" style={{ color: '#1B3D2F' }} />}
              </button>
            </div>
          </div>
        </div>

        {/* Category Bar */}
        <div className="hidden lg:block border-t border-[#e8dfd0]">
          <div className="container-custom py-2">
            <div className="flex items-center gap-8 overflow-x-auto">
              {categories.slice(1).map((cat) => (
                <Link key={cat.slug} href={`/shop?category=${cat.slug}`} className="text-sm text-[#1B3D2F]/70 hover:text-[#C89B3C] whitespace-nowrap">
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
              <Link key={link.href} href={link.href} className="block py-3 border-b border-[#e8dfd0]" style={{ color: '#1B3D2F' }} onClick={() => setMobileMenuOpen(false)}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}