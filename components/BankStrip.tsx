const banks: { name: string; src: string; height: string }[] = [
  { name: 'ANZ',      src: '/logos/anz.svg',      height: 'h-7' },
  { name: 'ASB',      src: '/logos/asb.svg',      height: 'h-7' },
  { name: 'BNZ',      src: '/logos/bnz.svg',      height: 'h-7' },
  {
    name: 'Westpac',
    src: 'https://www.westpac.co.nz/_resources/themes/app/dist/images/westpac-logo.png',
    height: 'h-8',
  },
  { name: 'Kiwibank', src: '/logos/kiwibank.svg', height: 'h-7' },
  {
    name: 'TSB',
    src: 'https://www.tsb.co.nz/themes/TSB/logo.svg',
    height: 'h-9',
  },
  { name: 'SBS Bank', src: '/logos/sbs.svg',      height: 'h-7' },
];

export default function BankStrip() {
  return (
    <section className="relative overflow-hidden pt-8 pb-20 lg:pt-10 lg:pb-28 px-6 lg:px-8" style={{ background: '#FAF7F0' }}>
      <div className="max-w-6xl mx-auto">
        <p
          className="text-center text-xs font-bold uppercase tracking-widest mb-8"
          style={{ color: '#C9A063' }}
        >
          Trusted lenders we work with
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 lg:gap-x-14">
          {banks.map((bank) => (
            <img
              key={bank.name}
              src={bank.src}
              alt={bank.name}
              className={`${bank.height} w-auto opacity-90 hover:opacity-100 transition-opacity`}
            />
          ))}
          <span className="text-sm font-medium" style={{ color: '#A8B8B2' }}>
            and more.
          </span>
        </div>
      </div>

      {/* Mint curve at bottom, bridges BankStrip (cream) into HowWeHelp (mint) */}
      <svg
        className="absolute bottom-0 left-0 w-full pointer-events-none"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        style={{ height: 'clamp(60px, 8vw, 120px)' }}
        aria-hidden="true"
      >
        <path
          d="M 0,120 L 0,80 Q 360,10 720,50 T 1440,40 L 1440,120 Z"
          fill="#C7E8DE"
        />
      </svg>
    </section>
  );
}
