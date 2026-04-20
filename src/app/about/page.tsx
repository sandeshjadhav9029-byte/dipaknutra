import { Nut, Leaf, Award, Heart } from 'lucide-react';
import { siteContent } from '@/data/products';

export default function AboutPage() {
  const { about, brand } = siteContent;

  return (
    <div className="min-h-screen py-12 md:py-16">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-[#2d1810] mb-6 font-heading text-center">About Dipak Nutra</h1>
          <p className="text-lg text-[#2d1810]/70 mb-12 text-center">{brand.description}</p>

          <div className="prose prose-lg max-w-none mb-12">
            {about.story.split('\n\n').map((para, i) => (
              <p key={i} className="mb-4 text-[#2d1810]/80">{para}</p>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-[#f5f0e8] rounded-xl p-6">
              <h3 className="font-bold text-[#2d1810] mb-3 flex items-center gap-2"><Leaf className="w-5 h-5 text-[#b8860b]" /> Our Mission</h3>
              <p className="text-[#2d1810]/70">{about.mission}</p>
            </div>
            <div className="bg-[#f5f0e8] rounded-xl p-6">
              <h3 className="font-bold text-[#2d1810] mb-3 flex items-center gap-2"><Heart className="w-5 h-5 text-[#b8860b]" /> Our Values</h3>
              <ul className="space-y-1">
                {about.values.map((v, i) => (
                  <li key={i} className="text-[#2d1810]/70">• {v}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-[#2d1810] rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Quality You Can Trust</h2>
            <p className="text-white/70 mb-6">Every product is handpicked and quality checked to ensure you get the best.</p>
            <div className="flex justify-center gap-8">
              <div><div className="text-3xl font-bold text-[#b8860b]">100%</div><div className="text-sm text-white/60">Natural</div></div>
              <div><div className="text-3xl font-bold text-[#b8860b]">5000+</div><div className="text-sm text-white/60">Happy Customers</div></div>
              <div><div className="text-3xl font-bold text-[#b8860b]">4.9</div><div className="text-sm text-white/60">Rating</div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}