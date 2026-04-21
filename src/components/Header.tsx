'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ShoppingCart, Menu, X, User } from 'lucide-react';
import { useCartStore } from '@/store/cart';
import { categories } from '@/data/products';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const itemCount = useCartStore((state) => state.getItemCount());

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/shop', label: 'Shop' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
    { href: '/faq', label: 'FAQ' },
    { href: '/shipping', label: 'Shipping & Returns' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#fdfbf7]/95 backdrop-blur-sm border-b border-[#e8dfd0]">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-10 h-10">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <ellipse cx="20" cy="20" rx="18" ry="18" fill="#b8860b"/>
                <ellipse cx="20" cy="18" rx="14" ry="14" fill="#8B6914"/>
                <ellipse cx="20" cy="16" rx="10" ry="10" fill="#CD853F"/>
                <ellipse cx="17" cy="14" rx="3" ry="2" fill="white" fillOpacity="0.3"/>
              </svg>
            </div>
            <span className="text-xl md:text-2xl font-bold text-[#2d1810] font-heading">
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

          {/* Desktop Categories Dropdown */}
          <div className="hidden lg:block relative">
            <button
              onClick={() => setCategoryOpen(!categoryOpen)}
              className="text-sm font-medium text-[#2d1810]/80 hover:text-[#b8860b] transition-colors flex items-center gap-1"
            >
              Categories
            </button>
            {categoryOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-[#e8dfd0] rounded-lg shadow-lg py-2">
                {categories.slice(1).map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/shop?category=${cat.slug}`}
                    className="block px-4 py-2 text-sm text-[#2d1810]/80 hover:bg-[#f5f0e8] hover:text-[#b8860b]"
                    onClick={() => setCategoryOpen(false)}
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Link href="/admin" className="hidden md:flex items-center gap-1 text-sm font-medium text-[#2d1810]/60 hover:text-[#b8860b]">
              <User className="w-4 h-4" />
              Admin
            </Link>
            
            <Link href="/cart" className="relative">
              <ShoppingCart className="w-6 h-6 text-[#2d1810]" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-[#b8860b] text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#2d1810]" />
              ) : (
                <Menu className="w-6 h-6 text-[#2d1810]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-[#e8dfd0]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-[#2d1810]/80 hover:text-[#b8860b]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-[#e8dfd0] mt-2">
              <p className="text-xs font-medium text-[#2d1810]/60 mb-2">Categories</p>
              {categories.slice(1).map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/shop?category=${cat.slug}`}
                  className="block py-2 pl-4 text-sm text-[#2d1810]/70"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}