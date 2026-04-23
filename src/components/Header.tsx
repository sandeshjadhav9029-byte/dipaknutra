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
            <Link href="/" className="flex flex-col items-center gap-1">
              {/* Monogram + Brand Name */}
              <div className="flex items-center gap-3">
                {/* DN Monogram with Leaf */}
                <div className="relative w-12 h-12">
                  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    {/* D in Forest Green */}
                    <text x="8" y="55" fontSize="38" fontFamily="Georgia, serif" fontWeight="bold" fill="#1B3D2F">D</text>
                    {/* N in Gold */}
                    <text x="38" y="55" fontSize="38" fontFamily="Georgia, serif" fontWeight="bold" fill="#C89B3C">N</text>
                    {/* Leaf on N - elegant curved leaf */}
                    <path d="M52 18 Q65 8 72 18 Q68 32 58 35 Q52 30 52 18" fill="#1B3D2F"/>
                    <path d="M55 22 Q62 16 68 22" stroke="#F7F3EB" strokeWidth="1" fill="none"/>
                    <path d="M56 26 Q60 22 64 26" stroke="#F7F3EB" strokeWidth="0.75" fill="none"/>
                  </svg>
                </div>
                {/* Brand Name */}
                <div className="flex flex-col">
                  <span className="text-xl md:text-2xl font-bold tracking-wider font-serif" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                    <span style={{ color: '#1B3D2F' }}>DIPAK</span> <span style={{ color: '#C89B3C' }}>NUTRA</span>
                  </span>
                  {/* Divider */}
                  <div className="flex items-center gap-2 my-1">
                    <div className="w-12 h-px" style={{ backgroundColor: '#C89B3C' }}></div>
                    <span style={{ color: '#C89B3C' }}>✿</span>
                    <div className="w-12 h-px" style={{ backgroundColor: '#C89B3C' }}></div>
                  </div>
                  {/* Tagline */}
                  <span className="text-[9px] md:text-[10px] tracking-[0.2em] uppercase" style={{ fontFamily: "'Libre Baskerville', Georgia, serif", color: '#1B3D2F' }}>
                    Nature's Goodness, Your Wellness
                  </span>
                </div>
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