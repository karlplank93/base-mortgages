const banks = [
  {
    name: 'ANZ',
    logo: 'https://logo.clearbit.com/anz.co.nz',
  },
  {
    name: 'Westpac',
    logo: 'https://logo.clearbit.com/westpac.co.nz',
  },
  {
    name: 'BNZ',
    logo: 'https://logo.clearbit.com/bnz.co.nz',
  },
  {
    name: 'Kiwibank',
    logo: 'https://logo.clearbit.com/kiwibank.co.nz',
  },
  {
    name: 'ASB',
    logo: 'https://logo.clearbit.com/asb.co.nz',
  },
  {
    name: 'SBS Bank',
    logo: 'https://logo.clearbit.com/sbsbank.co.nz',
  },
];

export default function BankStrip() {
  return (
    <div className="border-b border-gray-100 bg-white py-4 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-6 md:gap-8">
        <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest whitespace-nowrap">
          Access to New Zealand&apos;s leading banks
        </span>
        <div className="flex flex-wrap items-center gap-5 md:gap-7">
          {banks.map(({ name, logo }) => (
            <img
              key={name}
              src={logo}
              alt={name}
              className="h-7 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-200"
              title={name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
