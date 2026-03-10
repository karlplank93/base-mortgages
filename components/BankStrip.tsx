// Thin bank logo strip — shown directly under the hero

function AnzLogo() {
  return (
    <svg viewBox="0 0 64 28" className="h-7 w-auto" aria-label="ANZ">
      <rect width="64" height="28" rx="3" fill="#005596" />
      <text x="32" y="19" textAnchor="middle" fill="white"
        fontFamily="Arial Black, Arial, sans-serif" fontWeight="900" fontSize="13" letterSpacing="1.5">
        ANZ
      </text>
    </svg>
  );
}

function WestpacLogo() {
  return (
    <svg viewBox="0 0 90 28" className="h-7 w-auto" aria-label="Westpac">
      <rect width="90" height="28" rx="3" fill="#CC0000" />
      <text x="45" y="19" textAnchor="middle" fill="white"
        fontFamily="Arial, sans-serif" fontWeight="700" fontSize="11" letterSpacing="1">
        WESTPAC
      </text>
    </svg>
  );
}

function BnzLogo() {
  return (
    <svg viewBox="0 0 56 28" className="h-7 w-auto" aria-label="BNZ">
      <rect width="56" height="28" rx="3" fill="#E04E1A" />
      <text x="28" y="20" textAnchor="middle" fill="white"
        fontFamily="Arial, sans-serif" fontWeight="800" fontSize="14" letterSpacing="0.5">
        bnz
      </text>
    </svg>
  );
}

function KiwibankLogo() {
  return (
    <svg viewBox="0 0 96 28" className="h-7 w-auto" aria-label="Kiwibank">
      <rect width="96" height="28" rx="3" fill="#007837" />
      {/* Simple kiwi bird icon */}
      <ellipse cx="12" cy="16" rx="5" ry="6" fill="#5DC88A" />
      <ellipse cx="17" cy="13" rx="2.5" ry="2" fill="#5DC88A" />
      <line x1="19" y1="13" x2="24" y2="12" stroke="#5DC88A" strokeWidth="1.5" strokeLinecap="round" />
      <text x="58" y="19" textAnchor="middle" fill="white"
        fontFamily="Arial, sans-serif" fontWeight="700" fontSize="10" letterSpacing="0.5">
        KIWIBANK
      </text>
    </svg>
  );
}

function AsbLogo() {
  return (
    <svg viewBox="0 0 56 28" className="h-7 w-auto" aria-label="ASB">
      <rect width="56" height="28" rx="3" fill="#D0021B" />
      <text x="28" y="19" textAnchor="middle" fill="white"
        fontFamily="Arial Black, Arial, sans-serif" fontWeight="900" fontSize="13" letterSpacing="1.5">
        ASB
      </text>
    </svg>
  );
}

function SbsLogo() {
  return (
    <svg viewBox="0 0 56 28" className="h-7 w-auto" aria-label="SBS Bank">
      <rect width="56" height="28" rx="3" fill="#E8447A" />
      {/* Simple heart shape */}
      <path d="M18 11 C18 9, 16 8, 14.5 9.5 C13 8, 11 9, 11 11 C11 13, 14.5 16, 14.5 16 C14.5 16, 18 13, 18 11Z"
        fill="white" opacity="0.9" />
      <text x="36" y="19" textAnchor="middle" fill="white"
        fontFamily="Arial, sans-serif" fontWeight="700" fontSize="11" letterSpacing="0.5">
        sbs
      </text>
    </svg>
  );
}

export default function BankStrip() {
  return (
    <div className="border-y border-gray-100 bg-white py-4 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-4 md:gap-6">
        <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest whitespace-nowrap">
          Access to New Zealand&apos;s leading banks
        </span>
        <div className="flex flex-wrap items-center gap-3">
          <AnzLogo />
          <WestpacLogo />
          <BnzLogo />
          <KiwibankLogo />
          <AsbLogo />
          <SbsLogo />
        </div>
      </div>
    </div>
  );
}
