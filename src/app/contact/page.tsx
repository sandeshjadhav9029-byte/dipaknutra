'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { siteContent } from '@/data/products';

export default function ContactPage() {
  const { brand } = siteContent;
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="min-h-screen py-12 flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"><span className="text-4xl">✓</span></div>
          <h1 className="text-2xl font-bold text-[#2d1810] mb-2">Message Sent!</h1>
          <p className="text-[#2d1810]/60">We'll get back to you soon.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 md:py-16">
      <div className="container-custom">
        <h1 className="text-4xl font-bold text-[#2d1810] mb-2 font-heading text-center">Contact Us</h1>
        <p className="text-[#2d1810]/60 text-center mb-12">We'd love to hear from you!</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white border border-[#e8dfd0] rounded-xl p-6 mb-6">
              <h2 className="text-xl font-bold text-[#2d1810] mb-4">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input required type="text" placeholder="Your Name *" className="input-field" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
                <input required type="email" placeholder="Email *" className="input-field" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
                <input required type="tel" placeholder="Phone" className="input-field" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
                <textarea required placeholder="Message *" rows={5} className="input-field" value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
                <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2"><Send className="w-5 h-5" /> Send Message</button>
              </form>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-[#f5f0e8] rounded-xl p-6">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-[#b8860b] mt-1" />
                <div><h3 className="font-bold text-[#2d1810]">Phone</h3><p className="text-[#2d1810]/70">{brand.phone}</p></div>
              </div>
            </div>
            <div className="bg-[#f5f0e8] rounded-xl p-6">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-[#b8860b] mt-1" />
                <div><h3 className="font-bold text-[#2d1810]">Email</h3><p className="text-[#2d1810]/70">{brand.email}</p></div>
              </div>
            </div>
            <div className="bg-[#f5f0e8] rounded-xl p-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#b8860b] mt-1" />
                <div><h3 className="font-bold text-[#2d1810]">Address</h3><p className="text-[#2d1810]/70">{brand.address}</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}