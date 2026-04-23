import { RefreshCw, ShieldCheck, Truck } from 'lucide-react';

const shippingSections = [
  {
    title: 'Shipping Policy',
    icon: Truck,
    blocks: [
      {
        heading: 'Delivery time',
        items: ['Standard delivery: 5-7 business days', 'Remote locations may take an additional 2-3 days'],
      },
      {
        heading: 'Shipping charges',
        items: ['Free shipping on orders above ₹500', '₹50 shipping charge for orders below ₹500'],
      },
      {
        heading: 'Coverage',
        items: ['Delivery available across India', 'Tracking details shared by SMS and email once dispatched'],
      },
    ],
  },
  {
    title: 'Returns & Refunds',
    icon: RefreshCw,
    blocks: [
      {
        heading: 'Return window',
        items: ['7-day return support for damaged or defective products', 'Product should remain in original packaging for review'],
      },
      {
        heading: 'Refund process',
        items: ['Share the order number and photos with the support team', 'Refunds are processed within 5-7 business days after quality review'],
      },
      {
        heading: 'Non-returnable cases',
        items: ['Opened or used products unless there is a verified quality issue', 'Products past expiry date'],
      },
    ],
  },
];

export default function ShippingPage() {
  return (
    <div className="page-shell">
      <div className="container-custom">
        <section className="page-hero mb-8">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <ShieldCheck className="h-4 w-4 text-[#C89B3C]" />
              Shipping & Returns
            </div>
            <h1 className="section-title mt-6">Clear policies for delivery, returns, and refund support.</h1>
            <p className="section-copy mt-5">
              The policies below match the Dipak Nutra brief: free shipping above ₹500, 5-7 day
              delivery, and 7-day return assistance.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-5xl space-y-6">
          {shippingSections.map((section) => (
            <section key={section.title} className="card-surface p-6 md:p-8">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(27,61,47,0.08)]">
                  <section.icon className="h-5 w-5 text-[#C89B3C]" />
                </div>
                <h2 className="text-3xl text-[#1B3D2F]">{section.title}</h2>
              </div>

              <div className="mt-8 grid gap-5 md:grid-cols-3">
                {section.blocks.map((block) => (
                  <div
                    key={block.heading}
                    className="rounded-[1.5rem] border border-[rgba(27,61,47,0.08)] bg-[rgba(247,243,235,0.74)] p-5"
                  >
                    <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#1B3D2F]/54">
                      {block.heading}
                    </p>
                    <ul className="mt-4 space-y-3 text-sm leading-7 text-[#1B3D2F]/66">
                      {block.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
