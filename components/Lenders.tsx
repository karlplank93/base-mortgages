const lenders = ['ANZ', 'ASB', 'BNZ', 'Westpac', 'Kiwibank', '+ Non-Bank'];

export default function Lenders() {
  return (
    <section className="py-24 px-6 lg:px-8 text-center bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-xs font-bold text-teal uppercase tracking-widest mb-3">Our Lender Panel</div>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-5 leading-tight">
          Access to New Zealand&apos;s<br />leading banks &amp; lenders
        </h2>
        <p className="text-lg mb-12 max-w-2xl mx-auto" style={{ color: '#6B7280' }}>
          We&apos;re accredited with all major NZ banks, giving you the widest possible choice.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {lenders.map((name) => (
            <div key={name}
              className="bg-white border border-[#E6EAF0] rounded-xl px-8 py-5 min-w-[130px] hover:border-teal hover:shadow-card transition-all duration-300 hover:-translate-y-0.5">
              <div className="font-bold text-base text-navy opacity-70">{name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
