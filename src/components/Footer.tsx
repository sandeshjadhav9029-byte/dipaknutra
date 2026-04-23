import Link from 'next/link';
import { Mail, MapPin, Phone, ShieldCheck, Truck } from 'lucide-react';
import BrandLogo from '@/components/BrandLogo';
import { siteContent } from '@/data/products';

const footerLinks = {
  company: [
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
    { href: '/faq', label: 'FAQ' },
    { href: '/shipping', label: 'Shipping & Returns' },
  ],
  collections: [
    { href: '/shop?category=raw-cashews', label: 'Raw Cashews' },
    { href: '/shop?category=flavored-cashews', label: 'Flavored Cashews' },
    { href: '/shop?category=almonds', label: 'Almonds' },
    { href: '/shop?category=raisins', label: 'Raisins' },
    { href: '/shop?category=walnuts', label: 'Walnuts' },
    { href: '/shop?category=dates', label: 'Dates' },
  ],
};

export default function Footer() {
  const { brand } = siteContent;

  return (
    <footer className="mt-12 border-t border-[rgba(27,61,47,0.08)] bg-[linear-gradient(180deg,#17362a,#10261d)] text-[#F7F3EB]">
      <div className="container-custom py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.7fr_0.7fr_0.9fr]">
          <div className="max-w-md">
            <BrandLogo inverse className="mb-5" />
            <p className="text-sm leading-7 text-[rgba(247,243,235,0.76)]">
              Premium dry fruits selected for flavour, freshness, and everyday wellness.
              Curated from trusted farms and packed for households that care about quality.
            </p>

            <div className="mt-6 grid gap-3">
              <div className="chip border border-[rgba(247,243,235,0.12)] bg-[rgba(247,243,235,0.06)] text-[#F7F3EB]">
                <Truck className="h-3.5 w-3.5 text-[#C89B3C]" />
                Free shipping above ₹500
              </div>
              <div className="chip border border-[rgba(247,243,235,0.12)] bg-[rgba(247,243,235,0.06)] text-[#F7F3EB]">
                <ShieldCheck className="h-3.5 w-3.5 text-[#C89B3C]" />
                7-day return support
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#C89B3C]">
              Company
            </h3>
            <ul className="space-y-3 text-sm text-[rgba(247,243,235,0.74)]">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-[#C89B3C]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#C89B3C]">
              Collections
            </h3>
            <ul className="space-y-3 text-sm text-[rgba(247,243,235,0.74)]">
              {footerLinks.collections.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-[#C89B3C]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#C89B3C]">
              Contact
            </h3>
            <ul className="space-y-4 text-sm text-[rgba(247,243,235,0.74)]">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-[#C89B3C]" />
                <span>{brand.phone}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-[#C89B3C]" />
                <span>{brand.email}</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#C89B3C]" />
                <span>{brand.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="my-10 flex items-center gap-3">
          <span className="h-px flex-1 bg-[rgba(200,155,60,0.36)]" />
          <span className="h-2 w-2 rounded-full bg-[#C89B3C]" />
          <span className="h-px flex-1 bg-[rgba(200,155,60,0.36)]" />
        </div>

        <div className="flex flex-col gap-3 text-sm text-[rgba(247,243,235,0.54)] md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Dipak Nutra. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <Link href="/shipping" className="hover:text-[#C89B3C]">
              Shipping Policy
            </Link>
            <Link href="/shipping" className="hover:text-[#C89B3C]">
              Refund Policy
            </Link>
            <Link href="/contact" className="hover:text-[#C89B3C]">
              Customer Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
