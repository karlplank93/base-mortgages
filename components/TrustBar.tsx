const metrics = [
  { value: '$36M+', label: 'Loans Arranged' },
  { value: '30+',   label: 'Banks & Lenders' },
  { value: '4.9★',  label: 'Google Rating' },
];

const banks = ['ANZ', 'ASB', 'BNZ', 'Westpac', 'Kiwibank'];

export default function TrustBar() {
  return (
    <section className="py-16 px-6 lg:px-8" style={{ background: '#F8F9FB' }}>
      <div className="max-w-7xl mx-auto">
        {/* Metrics */}
        <div className="grid grid-cols-3 gap-8 mb-10 text-center">
          {metrics.map(({ value, label }) => (
            <div key={value}>
              <div className="text-3xl md:text-4xl font-bold text-navy mb-1">{value}</div>
              <div className="text-sm text-gray-500">{label}</div>
            </div>
          ))}
        </div>

        {/* Divider + Banks */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="text-sm text-gray-400 font-medium mr-1">Accredited with:</span>
            {banks.map((bank) => (
              <span
                key={bank}
                className="bg-white border border-gray-200 rounded-xl px-5 py-2.5 text-sm font-semibold text-gray-700"
              >
                {bank}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
