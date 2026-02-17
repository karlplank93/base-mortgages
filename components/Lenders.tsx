const lenders = [
  { name: "ANZ", subtitle: "New Zealand's largest bank" },
  { name: "ASB", subtitle: "Personal & business banking" },
  { name: "BNZ", subtitle: "Bank of New Zealand" },
  { name: "Westpac", subtitle: "Home lending specialist" },
  { name: "Kiwibank", subtitle: "Kiwi-owned bank" },
  { name: "+ Non-Bank", subtitle: "Alternative lenders" },
];

export default function Lenders() {
  return (
    <section className="bg-gray-50 py-20 px-6 lg:px-8 text-center">
      <div className="max-w-5xl mx-auto">
        <div className="text-xs font-bold text-blue uppercase tracking-widest mb-3">Our Lender Panel</div>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-4 leading-tight">
          Access to New Zealand's<br />leading banks & lenders
        </h2>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          We're accredited with all major NZ banks, giving you the widest possible choice.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {lenders.map((lender) => (
            <div
              key={lender.name}
              className="bg-white border border-gray-300 rounded-xl px-7 py-5 min-w-[140px] hover:border-blue hover:shadow-md transition"
            >
              <div className="font-bold text-base text-navy">{lender.name}</div>
              <div className="text-xs text-gray-500 uppercase tracking-wide mt-1">{lender.subtitle}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
