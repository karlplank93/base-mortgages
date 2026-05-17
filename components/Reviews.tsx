const reviews = [
  { name: 'James & Tara', initials: 'JT', type: 'First Home Buyers, Auckland',   text: 'Karl made the whole process so straightforward. We were completely overwhelmed as first home buyers, he broke everything down, got us a great rate, and was always available to answer questions.' },
  { name: 'Mark C.',      initials: 'MC', type: 'Property Investor, Wellington',  text: 'We refinanced three properties with Base Mortgages and saved significantly across the portfolio. The strategic advice on splitting fixed terms was something no bank had ever offered us.' },
  { name: 'Sarah R.',     initials: 'SR', type: 'Self-Employed, Christchurch',    text: "I'd been turned down by two banks and thought my chances were gone. Base Mortgages found a solution I didn't know existed and had me approved within a week. Incredible service." },
  { name: 'David & Amy',  initials: 'DA', type: 'Refinancing, Auckland',          text: 'Switched lenders through Base Mortgages and saved over $4,000 in the first year alone. Fast, excellent communication, and Karl clearly knew his stuff.' },
];

const GOOGLE_REVIEWS_URL = 'https://share.google/ynwAl6ap2cyS4csY0';

export default function Reviews() {
  return (
    <section className="py-24 px-6 lg:px-8" style={{ background: '#F7F5F2' }}>
      <div className="max-w-7xl mx-auto">

        <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
          <div>
            <p
              className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: '#006D77' }}
            >
              Client Reviews
            </p>
            <h2
              className="font-display font-bold leading-tight"
              style={{
                fontSize: 'clamp(32px, 4vw, 48px)',
                letterSpacing: '-0.01em',
                color: '#24323D',
              }}
            >
              Real results for real<br />New Zealanders
            </h2>
          </div>
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="text-3xl font-display font-bold" style={{ color: '#006D77' }}>4.9</div>
            <div>
              <div className="text-yellow-400 text-sm tracking-wider">★★★★★</div>
              <div className="text-xs" style={{ color: '#6B7280' }}>View on Google &rarr;</div>
            </div>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-2xl p-6 bg-white border border-gray-100 flex flex-col"
              style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}
            >
              <div className="text-yellow-400 text-sm mb-4 tracking-wider">★★★★★</div>
              <p className="text-sm leading-relaxed italic mb-6 flex-1" style={{ color: '#6B7280' }}>
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0"
                  style={{ background: '#006D77' }}
                >
                  {review.initials}
                </div>
                <div>
                  <div className="font-semibold text-sm" style={{ color: '#24323D' }}>{review.name}</div>
                  <div className="text-xs" style={{ color: '#6B7280' }}>{review.type}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold hover:opacity-80 transition-opacity"
            style={{ color: '#006D77' }}
          >
            Read all reviews on Google &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
