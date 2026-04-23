'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  ChevronDown,
  Leaf,
  Menu,
  Search,
  ShieldCheck,
  ShoppingCart,
  Store,
  User,
  X,
} from 'lucide-react';
import BrandLogo from '@/components/BrandLogo';
import { categories, siteContent } from '@/data/products';
import { useCartStore } from '@/store/cart';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/faq', label: 'FAQ' },
  { href: '/shipping', label: 'Shipping & Returns' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const itemCount = useCartStore((state) => state.getItemCount());
  const categoryLinks = categories.slice(1);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-[#1B3D2F] px-4 py-2 text-[#F7F3EB] shadow-[0_10px_30px_rgba(27,61,47,0.22)]">
        <div className="container-custom flex items-center justify-center gap-2 text-center text-[0.68rem] font-bold uppercase tracking-[0.2em] sm:text-[0.72rem]">
          <Leaf className="h-3.5 w-3.5 text-[#C89B3C]" />
          <span>{siteContent.brand.announcement}</span>
        </div>
      </div>

      <div className="border-b border-[rgba(27,61,47,0.08)] bg-[rgba(247,243,235,0.84)] backdrop-blur-xl">
        <div className="container-custom py-3">
          <div className="flex items-center justify-between gap-4">
            <BrandLogo className="shrink-0" />

            <nav className="hidden items-center gap-7 lg:flex">
              <div
                className="relative"
                onMouseLeave={() => setShopOpen(false)}
              >
                <button
                  type="button"
                  onMouseEnter={() => setShopOpen(true)}
                  onClick={() => setShopOpen((open) => !open)}
                  className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-[#1B3D2F]/78 hover:text-[#C89B3C]"
                >
                  Shop
                  <ChevronDown className={`h-4 w-4 ${shopOpen ? 'rotate-180' : ''}`} />
                </button>
                {shopOpen && (
                  <div className="absolute left-0 top-full mt-4 grid w-[30rem] grid-cols-2 gap-3 rounded-[1.6rem] border border-[rgba(27,61,47,0.08)] bg-[rgba(255,252,247,0.96)] p-4 shadow-[0_30px_80px_rgba(27,61,47,0.16)]">
                    {categoryLinks.map((category) => (
                      <Link
                        key={category.slug}
                        href={`/shop?category=${category.slug}`}
                        className="rounded-[1.25rem] border border-[rgba(27,61,47,0.08)] bg-[rgba(247,243,235,0.6)] px-4 py-3 hover:border-[rgba(200,155,60,0.4)] hover:bg-white"
                        onClick={() => setShopOpen(false)}
                      >
                        <span className="block text-sm font-bold uppercase tracking-[0.12em] text-[#1B3D2F]">
                          {category.name}
                        </span>
                        <span className="mt-1 block text-xs text-[#1B3D2F]/60">
                          Curated premium dry fruits in this collection.
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-bold uppercase tracking-[0.14em] text-[#1B3D2F]/78 hover:text-[#C89B3C]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2 sm:gap-3">
              <Link
                href="/shop"
                className="hidden h-11 items-center gap-2 rounded-full border border-[rgba(27,61,47,0.12)] bg-[rgba(255,252,247,0.68)] px-4 text-sm font-bold text-[#1B3D2F]/70 hover:border-[rgba(200,155,60,0.4)] hover:text-[#C89B3C] md:inline-flex"
              >
                <Search className="h-4 w-4" />
                Explore
              </Link>
              <Link
                href="/admin"
                className="hidden h-11 w-11 items-center justify-center rounded-full border border-[rgba(27,61,47,0.12)] bg-[rgba(255,252,247,0.68)] text-[#1B3D2F]/72 hover:border-[rgba(200,155,60,0.4)] hover:text-[#C89B3C] md:inline-flex"
                aria-label="Admin"
              >
                <User className="h-4 w-4" />
              </Link>
              <Link
                href="/cart"
                className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(27,61,47,0.12)] bg-[rgba(255,252,247,0.76)] text-[#1B3D2F] hover:border-[rgba(200,155,60,0.45)] hover:text-[#C89B3C]"
                aria-label="Cart"
              >
                <ShoppingCart className="h-5 w-5" />
                {itemCount > 0 && (
                  <span className="absolute -right-1 -top-1 inline-flex min-h-[1.25rem] min-w-[1.25rem] items-center justify-center rounded-full bg-[#C89B3C] px-1 text-[0.68rem] font-bold text-[#fffdf8]">
                    {itemCount}
                  </span>
                )}
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen((open) => !open)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(27,61,47,0.12)] bg-[rgba(255,252,247,0.76)] text-[#1B3D2F] lg:hidden"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        <div className="hidden border-t border-[rgba(27,61,47,0.08)] lg:block">
          <div className="container-custom flex items-center gap-3 overflow-x-auto py-3">
            {categoryLinks.map((category) => (
              <Link
                key={category.slug}
                href={`/shop?category=${category.slug}`}
                className="chip border border-[rgba(27,61,47,0.08)] bg-[rgba(255,252,247,0.6)] text-[#1B3D2F] hover:border-[rgba(200,155,60,0.45)] hover:text-[#C89B3C]"
              >
                <Store className="h-3.5 w-3.5" />
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-b border-[rgba(27,61,47,0.08)] bg-[rgba(255,252,247,0.95)] shadow-[0_24px_60px_rgba(27,61,47,0.12)] lg:hidden">
          <div className="container-custom grid gap-6 py-6">
            <div className="grid gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-[1.25rem] border border-[rgba(27,61,47,0.08)] bg-[rgba(247,243,235,0.74)] px-4 py-3 text-sm font-bold uppercase tracking-[0.14em] text-[#1B3D2F]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="rounded-[1.6rem] border border-[rgba(27,61,47,0.08)] bg-[linear-gradient(145deg,rgba(27,61,47,0.96),rgba(18,45,34,0.95))] p-5 text-[#F7F3EB]">
              <div className="mb-4 flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#C89B3C]">
                <ShieldCheck className="h-4 w-4" />
                Shop Categories
              </div>
              <div className="grid grid-cols-2 gap-3">
                {categoryLinks.map((category) => (
                  <Link
                    key={category.slug}
                    href={`/shop?category=${category.slug}`}
                    className="rounded-[1.15rem] border border-[rgba(247,243,235,0.14)] bg-[rgba(247,243,235,0.06)] px-3 py-3 text-sm font-bold text-[#F7F3EB]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
