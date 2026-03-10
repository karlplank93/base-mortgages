// Inline SVG logos for each NZ bank using their official brand colours

function AnzLogo() {
  return (
    <svg viewBox="0 0 80 32" fill="none" className="h-8 w-auto">
      <rect width="80" height="32" rx="4" fill="#005596"/>
      <text x="40" y="22" textAnchor="middle" fill="white" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="16" letterSpacing="2">ANZ</text>
    </svg>
  );
}

function AsbLogo() {
  return (
    <svg viewBox="0 0 80 32" fill="none" className="h-8 w-auto">
      <rect width="80" height="32" rx="4" fill="#D0021B"/>
      <text x="40" y="22" textAnchor="middle" fill="white" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="16" letterSpacing="2">ASB</text>
    </svg>
  );
}

function BnzLogo() {
  return (
    <svg viewBox="0 0 80 32" fill="none" className="h-8 w-auto">
      <rect width="80" height="32" rx="4" fill="#E04E1A"/>
      <text x="40" y="22" textAnchor="middle" fill="white" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="16" letterSpacing="2">BNZ</text>
    </svg>
  );
}

function WestpacLogo() {
  return (
    <svg viewBox="0 0 110 32" fill="none" className="h-8 w-auto">
      <rect width="110" height="32" rx="4" fill="#CC0000"/>
      <text x="55" y="22" textAnchor="middle" fill="white" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="13" letterSpacing="1">WESTPAC</text>
    </svg>
  );
}

function KiwibankLogo() {
  return (
    <svg viewBox="0 0 110 32" fill="none" className="h-8 w-auto">
      <rect width="110" height="32" rx="4" fill="#007837"/>
      <text x="55" y="22" textAnchor="middle" fill="white" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="12" letterSpacing="1">KIWIBANK</text>
    </svg>
  );
}

function SbsLogo() {
  return (
    <svg viewBox="0 0 80 32" fill="none" className="h-8 w-auto">
      <rect width="80" height="32" rx="4" fill="#1A2F5E"/>
      <text x="40" y="22" textAnchor="middle" fill="white" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="16" letterSpacing="2">SBS</text>
    </svg>
  );
}

function NonBankLogo() {
  return (
    <svg viewBox="0 0 120 32" fill="none" className="h-8 w-auto">
      <rect width="120" height="32" rx="4" fill="#F3F4F6" stroke="#E5E7EB" strokeWidth="1.5"/>
      <text x="60" y="21" textAnchor="middle" fill="#6B7280" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="11" letterSpacing="0.5">+ NON-BANK</text>
    </svg>
  );
}

const lenders = [
  { name: 'ANZ',      Logo: AnzLogo },
  { name: 'ASB',      Logo: AsbLogo },
  { name: 'BNZ',      Logo: BnzLogo },
  { name: 'Westpac',  Logo: WestpacLogo },
  { name: 'Kiwibank', Logo: KiwibankLogo },
  { name: 'SBS',      Logo: SbsLogo },
  { name: 'Non-Bank', Logo: NonBankLogo },
];

export default function Lenders() {
  return (
    <section className="py-24 px-6 lg:px-8 text-center" style={{ background: '#F8F9FB' }}>
      <div className="max-w-4xl mx-auto">
        <p className="text-sm font-semibold text-teal uppercase tracking-widest mb-3">Our Lender Panel</p>
        <h2
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight"
          style={{ letterSpacing: '-0.02em' }}
        >
          Access to New Zealand&apos;s leading banks
        </h2>
        <p className="text-lg text-gray-500 mb-14 max-w-xl mx-auto">
          We&apos;re accredited with all major NZ banks and non-bank lenders, giving you the widest possible choice.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-4">
          {lenders.map(({ name, Logo }) => (
            <div
              key={name}
              className="bg-white rounded-2xl px-6 py-5 flex items-center justify-center border border-gray-100 hover:shadow-card hover:-translate-y-0.5 transition-all duration-200"
              style={{ minWidth: '120px', boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}
            >
              <Logo />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
