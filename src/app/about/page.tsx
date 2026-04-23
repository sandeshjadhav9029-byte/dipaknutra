import { Leaf, ShieldCheck, HeartHandshake } from 'lucide-react';
import { siteContent } from '@/data/products';

export default function AboutPage() {
  const { about } = siteContent;
  
  const principles = [
    { icon: Leaf, title: 'Natural Sourcing', desc: 'Products from trusted farmers' },
    { icon: ShieldCheck, title: 'Premium Quality', desc: 'Grade-first selection' },
    { icon: HeartHandshake, title: 'Customer Support', desc: 'Responsive and reliable' },
  ];

  return (
    <div className="section">
      <div className="container-custom">
        <h1 className="text-3xl font-bold text-[#1B3D2F] mb-4">About Dipak Nutra</h1>
        <p className="text-[#1B3D2F]/70 max-w-2xl mb-12">{about.story}</p>

        <div className="grid gap-6 md:grid-cols-3 mb-12">
          {principles.map((item) => (
            <div key={item.title} className="p-6 bg-white rounded-lg border border-[rgba(27,61,47,0.1)]">
              <item.icon className="w-6 h-6" style={{ color: '#C89B3C' }} />
              <h3 className="font-semibold text-[#1B3D2F] mt-4 mb-2">{item.title}</h3>
              <p className="text-sm text-[#1B3D2F]/60">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="p-8 bg-[#1B3D2F] rounded-lg text-white">
          <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
          <p className="text-white/80">{about.mission}</p>
        </div>
      </div>
    </div>
  );
}