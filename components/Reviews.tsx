const reviews = [
  { name: 'James & Tara', initials: 'JT', type: 'First Home Buyers, Auckland',   text: 'Karl made the whole process so straightforward. We were completely overwhelmed as first home buyers — he broke everything down, got us a great rate, and was always available to answer questions.' },
  { name: 'Mark C.',      initials: 'MC', type: 'Property Investor, Wellington',  text: 'We refinanced three properties with Base Mortgages and saved significantly across the portfolio. The strategic advice on splitting fixed terms was something no bank had ever offered us.' },
  { name: 'Sarah R.',     initials: 'SR', type: 'Self-Employed, Christchurch',    text: "I'd been turned down by two banks and thought my chances were gone. Base Mortgages found a solution I didn't know existed and had me approved within a week. Incredible service." },
  { name: 'David & Amy',  initials: 'DA', type: 'Refinancing, Auckland',          text: 'Switched lenders through Base Mortgages and saved over $4,000 in the first year alone. Fast, excellent communication, and Karl clearly knew his stuff.' },
];

export default function Reviews() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
          <div>
            <p className="text-sm font-semibold text-teal uppercase tracking-widest mb-3">Client Reviews</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight" style={{ letterSpacing: '-0.02em' }}>
              Real results for real<br />New Zealanders
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-3xl font-bold text-navy">4.9</div>
            <div>
              <div className="text-yellow-400 text-sm tracking-wider">★★★★★</div>
              <div className="text-xs text-gray-400">Google Reviews</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-2xl p-6 border border-gray-100 flex flex-col"
              style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}
            >
              <div className="text-yellow-400 text-sm mb-4 tracking-wider">★★★★★</div>
              <p className="text-sm leading-relaxed text-gray-600 italic mb-6 flex-1">&ldquo;{review.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0"
                  style={{ background: '#27C1B7' }}
                >
                  {review.initials}
                </div>
                <div>
                  <div className="font-semibold text-sm text-gray-900">{review.name}</div>
                  <div className="text-xs text-gray-400">{review.type}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
