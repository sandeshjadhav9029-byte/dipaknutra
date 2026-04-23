import { HeartHandshake, Leaf, ShieldCheck, Sparkles } from 'lucide-react';
import { siteContent } from '@/data/products';

const principles = [
  {
    icon: Leaf,
    title: 'Natural sourcing',
    copy: 'Products are chosen from trusted farmers and suppliers with a focus on freshness and clean flavour.',
  },
  {
    icon: ShieldCheck,
    title: 'Grade-first quality',
    copy: 'Raw cashew grades like W320, W240, and W180 are presented clearly so customers know what they are buying.',
  },
  {
    icon: HeartHandshake,
    title: 'Responsive support',
    copy: 'Delivery, returns, and checkout communication are built to feel personal and reliable.',
  },
];

export default function AboutPage() {
  const { about, brand } = siteContent;

  return (
    <div className="page-shell">
      <div className="container-custom">
        <section className="page-hero">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <Sparkles className="h-4 w-4 text-[#C89B3C]" />
              About the Brand
            </div>
            <h1 className="section-title mt-6">Dipak Nutra is built around trust, freshness, and calm premium quality.</h1>
            <p className="section-copy mt-5 text-lg">{brand.description}</p>
          </div>
        </section>

        <section className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
            <div className="card-surface p-7 md:p-8">
              <p className="section-kicker">Our Story</p>
              <div className="mt-5 space-y-5 text-sm leading-8 text-[#1B3D2F]/68">
                {about.story.split('\n\n').map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="grid gap-6">
              <div className="rounded-[1.9rem] border border-[rgba(27,61,47,0.08)] bg-[linear-gradient(145deg,rgba(27,61,47,0.96),rgba(19,47,36,0.95))] p-8 text-[#F7F3EB] shadow-[0_24px_60px_rgba(27,61,47,0.16)]">
                <p className="section-kicker text-[#C89B3C]">Mission</p>
                <h2 className="mt-4 text-3xl text-[#F7F3EB]">{about.mission}</h2>
              </div>

              <div className="card-surface p-7">
                <p className="section-kicker">Values</p>
                <div className="mt-5 grid gap-3">
                  {about.values.map((value) => (
                    <div
                      key={value}
                      className="rounded-[1.2rem] border border-[rgba(27,61,47,0.08)] bg-[rgba(247,243,235,0.74)] px-4 py-3 text-sm font-bold uppercase tracking-[0.14em] text-[#1B3D2F]"
                    >
                      {value}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell pt-0">
          <div className="grid gap-4 md:grid-cols-3">
            {principles.map((principle) => (
              <div key={principle.title} className="card-surface p-6">
                <principle.icon className="h-5 w-5 text-[#C89B3C]" />
                <h2 className="mt-5 text-2xl text-[#1B3D2F]">{principle.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[#1B3D2F]/66">{principle.copy}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
