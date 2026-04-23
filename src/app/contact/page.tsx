import { Mail, MapPin, Phone } from 'lucide-react';
import { siteContent } from '@/data/products';

export default function ContactPage() {
  const { brand } = siteContent;

  return (
    <div className="section">
      <div className="container-custom">
        <h1 className="text-3xl font-bold text-[#1B3D2F] mb-8">Contact Us</h1>
        
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <div className="p-6 bg-white rounded-lg border border-[rgba(27,61,47,0.1)]">
              <h2 className="font-semibold text-[#1B3D2F] mb-4">Get in Touch</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5" style={{ color: '#C89B3C' }} />
                  <span>{brand.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5" style={{ color: '#C89B3C' }} />
                  <span>{brand.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5" style={{ color: '#C89B3C' }} />
                  <span>{brand.address}</span>
                </div>
              </div>
            </div>
          </div>
          
          <form className="p-6 bg-white rounded-lg border border-[rgba(27,61,47,0.1)]">
            <h2 className="font-semibold text-[#1B3D2F] mb-4">Send a Message</h2>
            <div className="space-y-4">
              <input type="text" placeholder="Your Name" className="input" />
              <input type="email" placeholder="Email" className="input" />
              <textarea placeholder="Message" rows={4} className="input" />
              <button type="submit" className="btn bg-[#1B3D2F] text-white w-full">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}