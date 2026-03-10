const lenders = ['ANZ', 'ASB', 'BNZ', 'Westpac', 'Kiwibank', '+ Non-Bank'];

export default function Lenders() {
  return (
    <section className="py-24 px-6 lg:px-8 text-center" style={{ background: '#F8F9FB' }}>
      <div className="max-w-4xl mx-auto">
        <p className="text-sm font-semibold text-teal uppercase tracking-widest mb-3">Our Lender Panel</p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight" style={{ letterSpacing: '-0.02em' }}>
          Access to New Zealand&apos;s leading banks
        </h2>
        <p className="text-lg text-gray-500 mb-12 max-w-xl mx-auto">
          We&apos;re accredited with all major NZ banks, giving you the widest possible choice.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {lenders.map((name) => (
            <div
              key={name}
              className="bg-white border border-gray-200 rounded-2xl px-8 py-5 min-w-[130px] hover:border-teal hover:shadow-card transition-all duration-200"
            >
              <div className="font-bold text-base text-gray-700">{name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
