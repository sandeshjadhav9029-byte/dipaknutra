import { Truck, RefreshCw, ShieldCheck } from 'lucide-react';

export default function ShippingPage() {
  return (
    <div className="section">
      <div className="container-custom">
        <h1 className="text-3xl font-bold text-[#1B3D2F] mb-8">Shipping & Returns</h1>

        <div className="space-y-8 max-w-3xl">
          <div className="p-6 bg-white rounded-lg border border-[rgba(27,61,47,0.1)]">
            <div className="flex items-center gap-3 mb-4">
              <Truck className="w-6 h-6" style={{ color: '#C89B3C' }} />
              <h2 className="text-xl font-semibold text-[#1B3D2F]">Shipping Policy</h2>
            </div>
            <ul className="space-y-2 text-[#1B3D2F]/70">
              <li>• Free shipping on orders above ₹500</li>
              <li>• ₹50 shipping charge for orders below ₹500</li>
              <li>• Standard delivery: 5-7 business days</li>
              <li>• Delivery across India</li>
            </ul>
          </div>

          <div className="p-6 bg-white rounded-lg border border-[rgba(27,61,47,0.1)]">
            <div className="flex items-center gap-3 mb-4">
              <RefreshCw className="w-6 h-6" style={{ color: '#C89B3C' }} />
              <h2 className="text-xl font-semibold text-[#1B3D2F]">Returns & Refunds</h2>
            </div>
            <ul className="space-y-2 text-[#1B3D2F]/70">
              <li>• 7-day return window for damaged products</li>
              <li>• Product must be in original packaging</li>
              <li>• Refunds processed within 5-7 business days</li>
              <li>• Contact with photos required for returns</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}