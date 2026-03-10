const banks = ['ANZ', 'ASB', 'BNZ', 'Westpac', 'Kiwibank'];

const metrics = [
  { value: '$36M+', label: 'Loans Arranged' },
  { value: '30+',   label: 'Banks & Lenders' },
  { value: '4.9★',  label: 'Google Rating' },
];

export default function TrustBar() {
  return (
    <section style={{ background: '#0A2E6B' }} className="py-14 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Trust Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12 text-center">
          {metrics.map(({ value, label }) => (
            <div key={value}>
              <div className="font-display text-5xl font-bold mb-1" style={{ color: '#27C1B7' }}>{value}</div>
              <div className="text-white/70 text-sm font-medium">{label}</div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-10" />

        {/* Bank Logos */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <span className="text-white/50 text-sm font-medium mr-2">Accredited with:</span>
          {banks.map((bank) => (
            <span key={bank}
              className="bg-white/10 border border-white/15 rounded-lg px-5 py-2.5 text-sm font-bold text-white hover:bg-white/20 transition">
              {bank}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
