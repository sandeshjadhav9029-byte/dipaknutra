import { faqs } from '@/data/products';

export default function FAQPage() {
  return (
    <div className="section">
      <div className="container-custom">
        <h1 className="text-3xl font-bold text-[#1B3D2F] mb-8">Frequently Asked Questions</h1>
        
        <div className="space-y-4 max-w-3xl">
          {faqs.map((faq) => (
            <details key={faq.id} className="group p-4 bg-white rounded-lg border border-[rgba(27,61,47,0.1)]">
              <summary className="font-medium text-[#1B3D2F] cursor-pointer list-none flex justify-between items-center">
                {faq.question}
                <span className="text-[#C89B3C]">+</span>
              </summary>
              <p className="mt-4 text-[#1B3D2F]/70">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}