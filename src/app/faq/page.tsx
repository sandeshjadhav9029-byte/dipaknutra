'use client';

import { useState } from 'react';
import { ChevronDown, CircleHelp } from 'lucide-react';
import { faqs } from '@/data/products';

export default function FAQPage() {
  const [openId, setOpenId] = useState<string>(faqs[0]?.id ?? '');

  return (
    <div className="page-shell">
      <div className="container-custom">
        <section className="page-hero mb-8">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <CircleHelp className="h-4 w-4 text-[#C89B3C]" />
              Frequently Asked Questions
            </div>
            <h1 className="section-title mt-6">Answers about cashew grades, delivery timelines, payments, and returns.</h1>
            <p className="section-copy mt-5">
              The FAQ covers the core concerns mentioned in the Dipak Nutra brief, including W320
              and W240 grade explanations.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-4xl space-y-4">
          {faqs.map((faq) => {
            const isOpen = faq.id === openId;

            return (
              <div key={faq.id} className="card-surface overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? '' : faq.id)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-7"
                >
                  <span className="text-xl text-[#1B3D2F]">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-[#C89B3C] ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-[rgba(27,61,47,0.08)] px-5 py-5 text-sm leading-8 text-[#1B3D2F]/68 md:px-7">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
