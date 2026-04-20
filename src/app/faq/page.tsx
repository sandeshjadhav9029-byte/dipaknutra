'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '@/data/products';

export default function FAQPage() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="min-h-screen py-12 md:py-16">
      <div className="container-custom">
        <h1 className="text-4xl font-bold text-[#2d1810] mb-2 font-heading text-center">Frequently Asked Questions</h1>
        <p className="text-[#2d1810]/60 text-center mb-12">Find answers to common questions</p>

        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="bg-white border border-[#e8dfd0] rounded-xl overflow-hidden">
              <button
                onClick={() => setOpen(open === faq.id ? null : faq.id)}
                className="w-full p-4 text-left flex justify-between items-center"
              >
                <span className="font-medium text-[#2d1810]">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-[#b8860b] transition-transform ${open === faq.id ? 'rotate-180' : ''}`} />
              </button>
              {open === faq.id && (
                <div className="px-4 pb-4 text-[#2d1810]/70">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}