import Link from 'next/link';
import { Nut, Phone, Mail, MapPin, Heart, Star } from 'lucide-react';
import { siteContent } from '@/data/products';

export default function Footer() {
  const { brand } = siteContent;
  
  const footerLinks = {
    shop: [
      { href: '/shop?category=raw-cashews', label: 'Raw Cashews' },
      { href: '/shop?category=flavored-cashews', label: 'Flavored Cashews' },
      { href: '/shop?category=almonds', label: 'Almonds' },
      { href: '/shop?category=raisins', label: 'Raisins' },
    ],
    company: [
      { href: '/about', label: 'About Us' },
      { href: '/contact', label: 'Contact' },
      { href: '/faq', label: 'FAQ' },
      { href: '/shipping', label: 'Shipping & Returns' },
    ],
  };

  return (
    <footer className="bg-[#2d1810] text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Nut className="w-8 h-8 text-[#b8860b]" />
              <span className="text-xl font-bold font-heading">
                Dipak<span className="text-[#b8860b]">Nutra</span>
              </span>
            </Link>
            <p className="text-white/70 text-sm mb-4">
              {brand.description}
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

          {/* Shop Links */}
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-[#b8860b] text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-[#b8860b] text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
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
              &copy; {new Date().getFullYear()} Dipak Nutra. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/shipping" className="text-white/50 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link href="/shipping" className="text-white/50 hover:text-white text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}