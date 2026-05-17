export default function BankStrip() {
  return (
    <section className="py-14 lg:py-16 px-6 lg:px-8" style={{ background: '#F7F5F2' }}>
      <div className="max-w-6xl mx-auto">
        <p
          className="text-center text-sm uppercase tracking-widest font-semibold mb-10"
          style={{ color: '#6B7280' }}
        >
          We work with all major NZ banks &amp; non-bank lenders
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 lg:gap-x-14">
          {[
            { name: 'ANZ',      style: 'font-bold text-2xl', color: '#005596' },
            { name: 'ASB',      style: 'italic font-bold text-2xl', color: '#FFB81C' },
            { name: 'bnz',      style: 'font-bold text-2xl', color: '#0067B1' },
            { name: 'Westpac',  style: 'font-bold text-2xl', color: '#D5002B' },
            { name: 'Kiwibank', style: 'font-bold text-2xl', color: '#007837' },
            { name: 'TSB',      style: 'font-bold text-2xl', color: '#00A551' },
            { name: 'SBS',      style: 'font-bold text-2xl', color: '#E84B4B' },
          ].map((bank) => (
            <span
              key={bank.name}
              className={'opacity-80 hover:opacity-100 transition-opacity ' + bank.style}
              style={{ color: bank.color }}
            >
              {bank.name}
            </span>
          ))}
          <span
            className="text-sm font-medium"
            style={{ color: '#A8B8B2' }}
          >
            and more.
          </span>
        </div>
      </div>
    </section>
  );
}
