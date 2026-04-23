import Link from 'next/link';
import { Phone, Mail, MapPin, Star, Heart } from 'lucide-react';
import { siteContent } from '@/data/products';

export default function Footer() {
  const { brand } = siteContent;
  
  const footerLinks = {
    quickLinks: [
      { href: '/about', label: 'About Us' },
      { href: '/contact', label: 'Contact Us' },
      { href: '/faq', label: 'FAQ' },
      { href: '/shipping', label: 'Shipping Policy' },
      { href: '/shipping', label: 'Return Policy' },
      { href: '/shipping', label: 'Privacy Policy' },
    ],
    shop: [
      { href: '/shop?category=raw-cashews', label: 'Raw Cashews' },
      { href: '/shop?category=flavored-cashews', label: 'Flavored Cashews' },
      { href: '/shop?category=almonds', label: 'Almonds' },
      { href: '/shop?category=raisins', label: 'Raisins' },
      { href: '/shop?category=walnuts', label: 'Walnuts' },
      { href: '/shop?category=dates', label: 'Dates' },
    ],
  };

  return (
    <footer className="bg-[#1B3D2F] text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand with Logo - Based on Brand Spec */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="relative w-14 h-14">
                <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <rect width="120" height="120" rx="12" fill="#F7F3EB"/>
                  <text x="28" y="75" fontSize="48" fontFamily="serif" fontWeight="bold" fill="#1B3D2F">D</text>
                  <text x="62" y="75" fontSize="48" fontFamily="serif" fontWeight="bold" fill="#C89B3C">N</text>
                  <path d="M75 35 Q85 20 95 30 Q90 45 80 50 Q75 45 75 35" fill="#1B3D2F"/>
                  <path d="M78 38 Q85 28 92 35" stroke="#F7F3EB" strokeWidth="1.5" fill="none"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold font-serif" style={{ color: '#F7F3EB' }}>
                  DIPAK <span style={{ color: '#C89B3C' }}>NUTRA</span>
                </span>
              </div>
            </Link>
            <p className="text-white/70 text-sm mb-4">
              Your trusted source for premium quality dry fruits, cashews, almonds, and natural products. Freshness guaranteed.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#C89B3C] transition-colors">
                <Star className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#C89B3C] transition-colors">
                <Heart className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-[#C89B3C]">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/70 hover:text-[#C89B3C] text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold mb-4 text-[#C89B3C]">Shop</h4>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/70 hover:text-[#C89B3C] text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-[#C89B3C]">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-1" style={{ color: '#C89B3C' }} />
                <span className="text-white/70 text-sm">{brand.phone}</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-1" style={{ color: '#C89B3C' }} />
                <span className="text-white/70 text-sm">{brand.email}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1" style={{ color: '#C89B3C' }} />
                <span className="text-white/70 text-sm">{brand.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider with Gold */}
        <div className="flex items-center justify-center gap-4 my-8">
          <div className="h-px flex-1 bg-[#C89B3C]"></div>
          <div className="w-2 h-2 rounded-full bg-[#C89B3C]"></div>
          <div className="h-px flex-1 bg-[#C89B3C]"></div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} Dipak Nutra. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/shipping" className="text-white/50 hover:text-white text-sm">Privacy Policy</Link>
              <Link href="/shipping" className="text-white/50 hover:text-white text-sm">Terms of Service</Link>
              <Link href="/shipping" className="text-white/50 hover:text-white text-sm">Refund Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}