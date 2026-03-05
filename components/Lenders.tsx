const lenders = [
  { name: "ANZ",      subtitle: "New Zealand's largest bank" },
  { name: "ASB",      subtitle: "Personal & business banking" },
  { name: "BNZ",      subtitle: "Bank of New Zealand" },
  { name: "Westpac",  subtitle: "Home lending specialist" },
  { name: "Kiwibank", subtitle: "Kiwi-owned bank" },
  { name: "+ Non-Bank", subtitle: "Alternative lenders" },
];

export default function Lenders() {
  return (
    <section className="py-20 px-6 lg:px-8 text-center" style={{ background: '#F7F9FC' }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-xs font-bold text-teal uppercase tracking-widest mb-3">Our Lender Panel</div>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-4 leading-tight">
          Access to New Zealand's<br />leading banks & lenders
        </h2>
        <p className="text-lg mb-10 max-w-2xl mx-auto" style={{ color: '#6B7280' }}>
          We're accredited with all major NZ banks, giving you the widest possible choice.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {lenders.map((lender) => (
            <div key={lender.name}
              className="bg-white border border-[#E6EAF0] rounded-xl px-7 py-5 min-w-[140px] hover:border-teal hover:shadow-card transition-all duration-300 hover:-translate-y-0.5">
              <div className="font-bold text-base text-navy">{lender.name}</div>
              <div className="text-xs uppercase tracking-wide mt-1" style={{ color: '#6B7280' }}>{lender.subtitle}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
