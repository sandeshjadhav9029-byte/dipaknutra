import { Truck, RefreshCw, Package, Shield } from 'lucide-react';
import { siteContent } from '@/data/products';

export default function ShippingPage() {
  const { shipping } = siteContent;

  const sections = [
    { title: 'Shipping Policy', icon: Truck, content: shipping.policy },
    { title: 'Returns & Refunds', icon: RefreshCw, content: shipping.returns },
  ];

  return (
    <div className="min-h-screen py-12 md:py-16">
      <div className="container-custom">
        <h1 className="text-4xl font-bold text-[#2d1810] mb-2 font-heading text-center">Shipping & Returns</h1>
        <p className="text-[#2d1810]/60 text-center mb-12">Our policies for your convenience</p>

        <div className="max-w-3xl mx-auto space-y-8">
          {sections.map((section) => (
            <div key={section.title} className="bg-white border border-[#e8dfd0] rounded-xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#f5f0e8] rounded-full flex items-center justify-center">
                  <section.icon className="w-6 h-6 text-[#b8860b]" />
                </div>
                <h2 className="text-xl font-bold text-[#2d1810]">{section.title}</h2>
              </div>
              <div className="prose prose-sm max-w-none text-[#2d1810]/80">
                {section.content.split('\n\n').map((para, i) => (
                  <p key={i} className="mb-3">{para}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}