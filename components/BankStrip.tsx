const banks: { name: string; file: string }[] = [
  { name: 'ANZ',      file: '/logos/anz.svg' },
  { name: 'ASB',      file: '/logos/asb.svg' },
  { name: 'BNZ',      file: '/logos/bnz.svg' },
  { name: 'Westpac',  file: '/logos/westpac.svg' },
  { name: 'Kiwibank', file: '/logos/kiwibank.svg' },
  { name: 'TSB',      file: '/logos/tsb.svg' },
  { name: 'SBS',      file: '/logos/sbs.svg' },
];

export default function BankStrip() {
  return (
    <section className="py-14 lg:py-16 px-6 lg:px-8" style={{ background: '#FAF7F0' }}>
      <div className="max-w-6xl mx-auto">
        <p
          className="text-center text-sm uppercase tracking-widest font-semibold mb-10"
          style={{ color: '#6B7280' }}
        >
          We work with all major NZ banks &amp; non-bank lenders
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 lg:gap-x-14">
          {banks.map((bank) => (
            <img
              key={bank.name}
              src={bank.file}
              alt={bank.name}
              className="h-9 w-auto opacity-80 hover:opacity-100 transition-opacity"
            />
          ))}
          <span className="text-sm font-medium" style={{ color: '#A8B8B2' }}>
            and more.
          </span>
        </div>
      </div>
    </section>
  );
}
