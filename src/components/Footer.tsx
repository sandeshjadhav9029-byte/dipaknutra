import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import { siteContent } from '@/data/products';

const footerLinks = {
  quickLinks: [
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
    { href: '/faq', label: 'FAQ' },
    { href: '/shipping', label: 'Shipping & Returns' },
  ],
  shop: [
    { href: '/shop?category=raw-cashews', label: 'Raw Cashews' },
    { href: '/shop?category=flavored-cashews', label: 'Flavored Cashews' },
    { href: '/shop?category=almonds', label: 'Almonds' },
    { href: '/shop?category=raisins', label: 'Raisins' },
  ],
};

export default function Footer() {
  const { brand } = siteContent;

  return (
    <footer className="bg-[#1B3D2F] text-white mt-16">
      <div className="container-custom py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="text-xl font-bold font-serif">
                DIPAK <span style={{ color: '#C89B3C' }}>NUTRA</span>
              </span>
            </Link>
            <p className="text-sm text-white/70 mb-4">
              Premium dry fruits & natural products. Freshness guaranteed.
            </p>
            <div className="flex items-center gap-2 text-sm text-white/70">
              <Phone className="w-4 h-4" style={{ color: '#C89B3C' }} />
              {brand.phone}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4" style={{ color: '#C89B3C' }}>Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/70">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4" style={{ color: '#C89B3C' }}>Shop</h4>
            <ul className="space-y-2 text-sm text-white/70">
              {footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4" style={{ color: '#C89B3C' }}>Contact</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5" style={{ color: '#C89B3C' }} />
                {brand.phone}
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5" style={{ color: '#C89B3C' }} />
                {brand.email}
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5" style={{ color: '#C89B3C' }} />
                {brand.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} Dipak Nutra. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/50">
            <Link href="/shipping" className="hover:text-white">Privacy Policy</Link>
            <Link href="/shipping" className="hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}