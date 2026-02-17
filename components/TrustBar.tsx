import { Shield, Star } from 'lucide-react';

export default function TrustBar() {
  const banks = ['ANZ', 'ASB', 'BNZ', 'Westpac', 'Kiwibank'];

  return (
    <div className="bg-gray-50 border-b border-gray-200 py-5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-sm">
          <div className="flex items-center gap-2 text-gray-600">
            <Shield className="w-4 h-4 text-blue" />
            <span className="font-medium">Licensed Financial Adviser</span>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="text-gray-600 font-medium">Accredited with major banks:</span>
            <div className="flex gap-2">
              {banks.map((bank) => (
                <span key={bank} className="bg-white border border-gray-300 rounded-md px-3 py-1 text-xs font-bold text-navy">
                  {bank}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 text-gray-600">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="font-medium">Google ★★★★★ Reviews</span>
          </div>
        </div>
      </div>
    </div>
  );
}
