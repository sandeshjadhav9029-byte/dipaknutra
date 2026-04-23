'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ShoppingCart, Menu, X, Search } from 'lucide-react';
import { useCartStore } from '@/store/cart';
import { categories, siteContent } from '@/data/products';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const itemCount = useCartStore((state) => state.getItemCount());

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[rgba(27,61,47,0.08)]">
      <div className="bg-[#1B3D2F] text-white text-center py-2 text-sm">
        {siteContent.brand.announcement}
      </div>

      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <span className="text-xl font-bold font-serif" style={{ fontFamily: 'Playfair Display, serif' }}>
              <span style={{ color: '#1B3D2F' }}>DIPAK</span>{' '}
              <span style={{ color: '#C89B3C' }}>NUTRA</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-[#1B3D2F] hover:text-[#C89B3C]">Home</Link>
            <Link href="/shop" className="text-sm font-medium text-[#1B3D2F] hover:text-[#C89B3C]">Shop</Link>
            <Link href="/about" className="text-sm font-medium text-[#1B3D2F] hover:text-[#C89B3C]">About</Link>
            <Link href="/contact" className="text-sm font-medium text-[#1B3D2F] hover:text-[#C89B3C]">Contact</Link>
            <Link href="/faq" className="text-sm font-medium text-[#1B3D2F] hover:text-[#C89B3C]">FAQ</Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/shop" className="hidden sm:block">
              <Search className="w-5 h-5 text-[#1B3D2F]" />
            </Link>
            <Link href="/cart" className="relative">
              <ShoppingCart className="w-5 h-5 text-[#1B3D2F]" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-[#C89B3C] text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="md:hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-[rgba(27,61,47,0.08)]">
          <div className="container-custom py-4 space-y-3">
            <Link href="/" className="block py-2 text-[#1B3D2F]" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link href="/shop" className="block py-2 text-[#1B3D2F]" onClick={() => setMobileMenuOpen(false)}>Shop</Link>
            <Link href="/about" className="block py-2 text-[#1B3D2F]" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link href="/contact" className="block py-2 text-[#1B3D2F]" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            <Link href="/faq" className="block py-2 text-[#1B3D2F]" onClick={() => setMobileMenuOpen(false)}>FAQ</Link>
          </div>
        </div>
      )}
    </header>
  );
}