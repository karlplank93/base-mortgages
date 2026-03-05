import { Shield, Star } from 'lucide-react';

const banks = ['ANZ', 'ASB', 'BNZ', 'Westpac', 'Kiwibank'];

export default function TrustBar() {
  return (
    <div style={{ background: '#F5F7FA' }} className="border-b border-[#E6EAF0] py-4">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm">
          <div className="flex items-center gap-2" style={{ color: '#6B7280' }}>
            <Shield className="w-4 h-4 text-teal" />
            <span className="font-medium">Licensed Financial Adviser</span>
          </div>
          <div className="hidden md:block w-px h-4 bg-[#E6EAF0]" />
          <div className="flex items-center gap-3">
            <span className="font-medium" style={{ color: '#6B7280' }}>Accredited with:</span>
            <div className="flex gap-2 flex-wrap">
              {banks.map((bank) => (
                <span key={bank} className="bg-white border border-[#E6EAF0] rounded-md px-2.5 py-1 text-xs font-bold text-navy opacity-80">
                  {bank}
                </span>
              ))}
            </div>
          </div>
          <div className="hidden md:block w-px h-4 bg-[#E6EAF0]" />
          <div className="flex items-center gap-2" style={{ color: '#6B7280' }}>
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="font-medium">4.9★ from 39 Google Reviews</span>
          </div>
        </div>
      </div>
    </div>
  );
}
