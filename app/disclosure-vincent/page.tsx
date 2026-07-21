import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Initial Disclosure Statement | Base Mortgages',
  description: 'Initial Disclosure Statement for Vincent Uys, Financial Adviser at Base Mortgages Limited.',
  robots: { index: false, follow: false },
};

export default function DisclosureVincentPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-16">

        {/* Header */}
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#1fa59a' }}>Legal</p>
          <h1 className="font-display text-4xl font-bold text-gray-900 mb-4" style={{ letterSpacing: '-0.02em' }}>
            Initial Disclosure Statement
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Please read the information set out below carefully. It contains important information about me and Base Mortgages Limited and will help you decide whether I am the right financial adviser for you.
          </p>
        </div>

        {/* Contact Details */}
        <div className="rounded-xl border border-gray-200 overflow-hidden mb-8">
          <table className="w-full text-sm">
            <tbody>
              {[
                ['Financial Adviser', 'Vincent Uys'],
                ['Financial Advice Provider', 'I, Vincent Uys, am providing financial advice on behalf of Base Mortgages Limited (FSP1012855)'],
                ['Physical Address', '1591 Dairy Flat Highway, Auckland, New Zealand 0794'],
                ['Telephone Number', '020 4045 2012'],
                ['Email Address', 'vincent@basemortgages.co.nz'],
              ].map(([label, value], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-6 py-4 font-semibold text-gray-700 w-48 align-top">{label}</td>
                  <td className="px-6 py-4 text-gray-600">
                    {label === 'Email Address'
                      ? <a href="mailto:vincent@basemortgages.co.nz" className="underline" style={{ color: '#1fa59a' }}>{value}</a>
                      : value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Section: Nature and Scope */}
        <Section title="Nature and Scope of the Financial Advice Service">
          <p className="text-gray-600 mb-4">I offer the following financial adviser services:</p>
          <div className="space-y-3 mb-4">
            <p className="text-gray-600"><strong className="text-gray-800">Mortgage lending advice:</strong> Financial advice in relation to commercial lending and residential lending secured against owner occupied and investment properties offered by bank and non-bank lenders.</p>
            <p className="text-gray-600"><strong className="text-gray-800">Asset lending advice:</strong> Financial advice in relation to lending secured against an asset other than real estate (e.g. a car, boat etc) offered by bank and non-bank lenders.</p>
            <p className="text-gray-600"><strong className="text-gray-800">Business/commercial lending advice:</strong> Financial advice in relation to unsecured business lending offered by bank and non-bank lenders.</p>
          </div>
          <p className="text-gray-600 mb-3">I only provide financial advice in relation to products offered by bank and non-bank lenders that Base Mortgages Limited has established terms of business with. These arrangements do not give rise to any contractual requirement or obligation to place any level of business with these lenders. Instead, they reflect a mutual understanding that I or Base Mortgages Limited may place business with these lenders.</p>
          <p className="text-gray-600 mb-3">The bank lenders that Base Mortgages Limited has established terms of business with are AIA, ANZ, ASB, BNZ, Heartland Bank, Kiwibank, SBS Bank, The Co-Operative Bank, TSB, and Westpac Bank.</p>
          <p className="text-gray-600">I can provide details of the non-bank lenders that Base Mortgages Limited has established terms of business with upon request.</p>
        </Section>

        {/* Section: Reliability History */}
        <Section title="Reliability History">
          <p className="text-gray-600">Neither Base Mortgages Limited nor I have been subject to a &ldquo;reliability event&rdquo;. A reliability event is an event that might materially influence you in deciding whether to obtain financial advice from me or Base Mortgages Limited. It includes, for example, bankruptcy, insolvency convictions or being publicly disciplined.</p>
        </Section>

        {/* Section: Fees and Expenses */}
        <Section title="Fees and Expenses">
          <p className="text-gray-600 mb-6">Set out below is important information on the commission and fees that Base Mortgages Limited will earn in connection with the advice that I provide to you. I will set out in writing the specific commission and fees that Base Mortgages Limited will receive prior to settlement.</p>

          <h3 className="font-semibold text-gray-800 mb-3">Bank Lending</h3>
          <div className="space-y-4 mb-6">
            <FeeRow label="Mortgage Lending" text="Base Mortgages Limited receives a commission of up to 0.9% of the loan amount. This commission is paid by the bank directly to Base Mortgages Limited on the settlement date of the loan." />
            <FeeRow label="Rate Refix" text="Base Mortgages Limited receives a fee of up to $200 from some banks if I assist you with refixing your interest rate. This fee is paid by the bank to Base Mortgages Limited on the date that the refixed interest rate takes effect." />
            <FeeRow label="Short Term Lending" text="Where your lending is intended for a short term only, Base Mortgages Limited may charge you a fee based on the estimated number of hours to provide the advice at an hourly rate of $250 (plus GST) per hour. Unless otherwise agreed with you in writing in advance, Base Mortgages Limited will not charge you this fee." />
            <FeeRow label="Trail" text="In some cases, Base Mortgages Limited will receive an ongoing commission of between 0.1% p.a – 1% p.a of your remaining loan balance from the bank for each year that your loan remains with that bank. This commission is paid by the bank to Base Mortgages Limited monthly." />
            <FeeRow label="Business / Commercial Lending" text="Base Mortgages Limited may charge you a fee of up to 1.00% of the loan amount for advice provided in connection with unsecured business or commercial lending from a bank. Unless otherwise agreed with you in writing in advance, we will not charge you this fee." />
            <FeeRow label="Asset Lending" text="Base Mortgages Limited may receive a commission of up to 3% of the loan amount for asset lending from a bank. This commission is paid by the bank to Base Mortgages Limited on the settlement date of the loan." />
          </div>

          <h3 className="font-semibold text-gray-800 mb-3">Non-Bank Lending</h3>
          <div className="space-y-4">
            <FeeRow label="Mortgage Lending" text="Base Mortgages Limited may charge you a fee of up to 1.00% of the loan amount for a residential or commercial loan through a non-bank lender. This fee is usually added to the loan amount and paid to Base Mortgages Limited by the non-bank lender on the settlement date of the loan." />
            <FeeRow label="Business / Commercial Lending" text="Base Mortgages Limited may charge you a fee of up to 1.00% of the loan amount for advice provided in connection with unsecured business or commercial lending from a non-bank lender." />
            <FeeRow label="Asset Lending" text="Base Mortgages Limited may receive a commission of up to 3% of the loan amount for asset lending from a non-bank lender. This commission is paid by the non-bank lender to Base Mortgages Limited on the settlement date of the loan." />
          </div>
        </Section>

        {/* Section: Conflicts of Interest */}
        <Section title="Conflicts of Interest, Commissions and Other Incentives">
          <h3 className="font-semibold text-gray-800 mb-2">Conflicts of Interest</h3>
          <p className="text-gray-600 mb-5">Neither Base Mortgages Limited nor I have any conflicts of interest that exist or that are likely to arise which would influence the advice that I provide to you. If this changes, I will contact you and advise you of the nature and scope of any actual or potential conflicts of interest.</p>

          <h3 className="font-semibold text-gray-800 mb-2">Commissions and Incentives</h3>
          <p className="text-gray-600 mb-5">Base Mortgages Limited receives commission and fees from the lenders that I place business with. The commission and fees that Base Mortgages Limited receives are set out above under &ldquo;Fees and Expenses&rdquo;. At the time of providing advice to you, I will set out the specific commission and fees that Base Mortgages Limited will receive in connection with the advice.</p>

          <h3 className="font-semibold text-gray-800 mb-2">Management of Conflicts of Interest</h3>
          <p className="text-gray-600 mb-3">Base Mortgages Limited, and I, take the following steps to manage actual, potential, or perceived conflicts of interest:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Advisers are not incentivised to promote one lender over another.</li>
            <li>I follow an advice process that ensures that my recommendations are made on the basis of each client&apos;s circumstances, goals, and risk appetite.</li>
            <li>Base Mortgages Limited has a Conflicts of Interest Policy which sets out how to identify conflicts of interest and how to ensure that these conflicts of interest are appropriately managed so that client interests are prioritised at all times.</li>
            <li>All persons within Base Mortgages Limited, including financial advisers, are required to receive training on the identification and management of conflicts of interest.</li>
            <li>I complete a register of conflicts of interest and the gifts and incentives I receive. Base Mortgages Limited monitors these registers.</li>
          </ul>
        </Section>

        {/* Section: Complaints */}
        <Section title="What Should You Do If Something Goes Wrong?">
          <p className="text-gray-600 mb-4">If you have a problem, concern, or complaint about any part of my service, please tell me so I can try to fix the problem. You may contact our internal disputes service by emailing <a href="mailto:complaints@basemortgages.co.nz" className="underline" style={{ color: '#1fa59a' }}>complaints@basemortgages.co.nz</a>.</p>
          <p className="text-gray-600 mb-4">We will be in contact with you within 48 hours of receiving your complaint to either propose a solution to your complaint or provide you with a summary of next steps. If we aren&apos;t able to resolve your complaint immediately, we will investigate and resolve your complaint in accordance with our internal complaints process.</p>
          <p className="text-gray-600 mb-4">If we cannot agree on how to resolve the issue, you can escalate your complaint to Financial Services Complaints Limited (<strong className="text-gray-800">FSCL</strong>). FSCL is an independent dispute resolution scheme. This service is free of charge and will help us resolve any disagreements. More information about FSCL and their dispute resolution process can be found at <a href="http://www.fscl.org.nz/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: '#1fa59a' }}>www.fscl.org.nz</a>.</p>
          <p className="text-gray-600">You can contact FSCL by emailing <a href="mailto:info@fscl.org.nz" className="underline" style={{ color: '#1fa59a' }}>info@fscl.org.nz</a>, calling FSCL on <strong>0800 347 257</strong> (free phone) or 04 472 3725. You can also write to them at PO Box 5967, Lambton Quay, Wellington 6145.</p>
        </Section>

        {/* Section: Declaration */}
        <Section title="Declaration">
          <p className="text-gray-600 mb-6">I, Vincent Uys, declare that, to the best of my knowledge and belief, the information contained in this disclosure statement is true and complete and complies with the disclosure requirements in the Financial Markets Conduct Act 2013 and the Financial Markets Conduct Regulations 2014.</p>
          <p className="text-gray-700 font-semibold">Signed: Vincent Uys</p>
        </Section>

      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <div className="rounded-t-xl px-6 py-3 text-sm font-semibold text-white uppercase tracking-wide" style={{ background: '#1fa59a' }}>
        {title}
      </div>
      <div className="border border-t-0 border-gray-200 rounded-b-xl px-6 py-6">
        {children}
      </div>
    </div>
  );
}

function FeeRow({ label, text }: { label: string; text: string }) {
  return (
    <div className="grid grid-cols-[180px_1fr] gap-4">
      <p className="text-sm font-semibold text-gray-700 italic pt-0.5">{label}</p>
      <p className="text-gray-600 text-sm">{text}</p>
    </div>
  );
}
