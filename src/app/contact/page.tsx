'use client';

import { useState } from 'react';
import { Check, Mail, MapPin, Phone, Send } from 'lucide-react';
import { siteContent } from '@/data/products';

export default function ContactPage() {
  const { brand } = siteContent;
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="page-shell">
        <div className="container-custom">
          <div className="card-surface mx-auto max-w-2xl p-10 text-center md:p-14">
            <div className="mx-auto flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-[rgba(27,61,47,0.08)]">
              <Check className="h-8 w-8 text-[#C89B3C]" />
            </div>
            <h1 className="mt-6 text-4xl text-[#1B3D2F]">Message sent</h1>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#1B3D2F]/64">
              The Dipak Nutra team will get back to you soon using the contact details you shared.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-shell">
      <div className="container-custom">
        <section className="page-hero mb-8">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <Phone className="h-4 w-4 text-[#C89B3C]" />
              Contact Dipak Nutra
            </div>
            <h1 className="section-title mt-6">Talk to the team about orders, bulk queries, or support.</h1>
            <p className="section-copy mt-5">
              Reach out using the form or use the direct contact details for fast assistance from
              Thane, Maharashtra.
            </p>
          </div>
        </section>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <section className="card-surface p-6 md:p-7">
            <h2 className="text-3xl text-[#1B3D2F]">Send a message</h2>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <input
                required
                type="text"
                placeholder="Your name *"
                className="input-field"
                value={form.name}
                onChange={(event) => setForm({ ...form, name: event.target.value })}
              />
              <input
                required
                type="email"
                placeholder="Email *"
                className="input-field"
                value={form.email}
                onChange={(event) => setForm({ ...form, email: event.target.value })}
              />
              <input
                required
                type="tel"
                placeholder="Phone number *"
                className="input-field"
                value={form.phone}
                onChange={(event) => setForm({ ...form, phone: event.target.value })}
              />
              <textarea
                required
                rows={6}
                placeholder="Message *"
                className="input-field"
                value={form.message}
                onChange={(event) => setForm({ ...form, message: event.target.value })}
              />
              <button type="submit" className="btn-primary w-full">
                <Send className="h-4 w-4" />
                Send Message
              </button>
            </form>
          </section>

          <div className="grid gap-4">
            <div className="card-surface p-6">
              <Phone className="h-5 w-5 text-[#C89B3C]" />
              <h2 className="mt-5 text-2xl text-[#1B3D2F]">Phone</h2>
              <p className="mt-3 text-sm leading-7 text-[#1B3D2F]/66">{brand.phone}</p>
            </div>
            <div className="card-surface p-6">
              <Mail className="h-5 w-5 text-[#C89B3C]" />
              <h2 className="mt-5 text-2xl text-[#1B3D2F]">Email</h2>
              <p className="mt-3 text-sm leading-7 text-[#1B3D2F]/66">{brand.email}</p>
            </div>
            <div className="card-surface p-6">
              <MapPin className="h-5 w-5 text-[#C89B3C]" />
              <h2 className="mt-5 text-2xl text-[#1B3D2F]">Address</h2>
              <p className="mt-3 text-sm leading-7 text-[#1B3D2F]/66">{brand.address}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
