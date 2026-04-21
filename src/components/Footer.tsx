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
    <footer className="bg-[#2d1810] text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand with Logo */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative w-12 h-12">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M30 15 L70 15 L70 25 L80 25 L80 35 L85 35 L85 90 C85 95 80 100 75 100 L25 100 C20 100 15 95 15 90 L15 35 L20 35 L20 25 L30 25 Z" fill="#CD853F"/>
                  <ellipse cx="50" cy="15" rx="20" ry="8" fill="#D2691E"/>
                  <rect x="25" y="40" width="50" height="40" rx="3" fill="#fdfbf7"/>
                  <text x="50" y="68" textAnchor="middle" fill="#8B4513" fontSize="24" fontWeight="bold" fontFamily="serif">DN</text>
                  <ellipse cx="35" cy="35" rx="8" ry="15" fill="white" fillOpacity="0.2"/>
                </svg>
              </div>
              <span className="text-xl font-bold font-serif">
                Dipak<span className="text-[#b8860b]">Nutra</span>
              </span>
            </Link>
            <p className="text-white/70 text-sm mb-4">
              Your trusted source for premium quality dry fruits, cashews, almonds, and natural products. Freshness guaranteed.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#b8860b] transition-colors">
                <Star className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#b8860b] transition-colors">
                <Heart className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/70 hover:text-[#b8860b] text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/70 hover:text-[#b8860b] text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-1 text-[#b8860b]" />
                <span className="text-white/70 text-sm">{brand.phone}</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-1 text-[#b8860b]" />
                <span className="text-white/70 text-sm">{brand.email}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 text-[#b8860b]" />
                <span className="text-white/70 text-sm">{brand.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
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