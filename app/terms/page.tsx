import Link from 'next/link';

export const metadata = {
  title: 'Disclosure Statement | Base Mortgages',
  description: 'Publicly available disclosure information for Base Mortgages, including licensing, fees, conflicts of interest, and complaints handling.',
};

export default function TermsPage() {
  return (
    <div className="bg-white">
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">

          <p className="text-sm font-semibold text-teal uppercase tracking-widest mb-4">Legal</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight" style={{ letterSpacing: '-0.02em' }}>
            Disclosure Statement
          </h1>
          <p className="text-gray-400 text-sm mb-12">Publicly available information</p>

          <div className="space-y-10 text-gray-600 leading-relaxed text-sm">

            <div>
              <h2 className="font-display text-xl font-bold text-gray-900 mb-3">Licensing Information</h2>
              <p>NZ Financial Services Group Limited (FSP286965) holds a license issued by the Financial Markets Authority to provide financial advice. Base Mortgages is authorised by the license to provide financial advice.</p>
              <p className="mt-3">Karl Plank (FSP1007409) and Vincent Uys (FSP1012855) are Financial Advisers authorised to provide financial advice on behalf of Base Mortgages.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-gray-900 mb-3">Nature and Scope of Advice</h2>
              <p>Base Mortgages provides advice to our clients about their mortgages. Our Financial Advisers provide financial advice in relation to mortgage products.</p>
              <p className="mt-3">We only provide financial advice about products from certain providers. For mortgages, we work with a panel of lenders listed below.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-gray-900 mb-3">Fees and Expenses</h2>
              <p>Generally, Base Mortgages will not charge any fee for the financial advice we provide you. This is possible because we receive commission for the work we undertake.</p>
              <p className="mt-3">However, on occasion we may charge you a one-off fee if you request financial advice and we do not receive commission. In this case you will be made aware of the fee for service and agree to the amount before you are invoiced. The fee amount will be based on an estimate of the time spent on providing the service.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-gray-900 mb-3">Conflicts of Interest and Incentives</h2>
              <p>Base Mortgages and our financial advisers receive commissions from the providers on whose products we give financial advice (banks). If you decide to take out a mortgage, the provider will pay a commission to Base Mortgages and to your financial adviser. The amount of commission is based on the amount of the mortgage.</p>
              <p className="mt-3">As part of our overall process, we sometimes refer our clients to Insurance Advisers. We receive a small referral fee for this service.</p>
              <p className="mt-3">From time to time, product providers may also reward us for the overall business we provide to them. They may give us tickets to sports events, hampers, or other incentives.</p>
              <p className="mt-3">To ensure that our financial advisers prioritise our clients' interests above their own, we follow an advice process that ensures our recommendations are made on the basis of each client's goals and circumstances. All our financial advisers undergo annual training about how to manage conflicts of interest. We maintain registers of conflicts of interests, and the gifts and incentives we receive.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-gray-900 mb-3">Complaints Handling and Dispute Resolution</h2>
              <p>We are always looking for ways to improve our service to you. If something has gone wrong, we want to know. Please send an email to{' '}
                <a href="mailto:karl@basemortgages.co.nz" className="text-teal hover:underline">karl@basemortgages.co.nz</a>{' '}
                and tell us what has happened and how we can resolve matters. If you have any documents or correspondence that will help us understand your complaint, please attach them to your email.
              </p>
              <p className="mt-3">When we receive your complaint, we will:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>acknowledge your complaint within two working days</li>
                <li>gather and evaluate information about your complaint</li>
                <li>respond to you within 20 working days</li>
              </ul>
              <p className="mt-3">If we cannot resolve your complaint to your satisfaction, you can contact Financial Services Complaints Limited – A Financial Ombudsman Service (FSCL). They are an independent, not-for-profit, external dispute resolution service approved by the Minister of Consumer Affairs. FSCL's role is to investigate and fairly resolve complaints. Their service is free.</p>
              <p className="mt-3">FSCL's contact details are:</p>
              <ul className="mt-2 space-y-1">
                <li><a href="https://fscl.org.nz" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">fscl.org.nz</a></li>
                <li>0800 347 257</li>
                <li><a href="mailto:complaints@fscl.org.nz" className="text-teal hover:underline">complaints@fscl.org.nz</a></li>
                <li>FSCL, PO Box 5967, Wellington 6140</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-gray-900 mb-3">Lenders We Work With</h2>
              <p>For mortgages, we work with the following lenders:</p>
              <ul className="grid grid-cols-2 gap-x-8 gap-y-1 mt-3 list-disc pl-6">
                <li>ANZ</li>
                <li>Westpac</li>
                <li>BNZ</li>
                <li>ASB</li>
                <li>Kiwibank</li>
                <li>TSB</li>
                <li>SBS Bank</li>
                <li>The Co-operative Bank</li>
                <li>Heartland Bank</li>
                <li>Bank of China (NZ) Limited</li>
                <li>China Construction Bank (NZ) Limited</li>
                <li>ICBC (NZ) Limited</li>
                <li>Avanti Finance</li>
                <li>Liberty Financial Limited</li>
                <li>Pepper Money</li>
                <li>Unity</li>
                <li>First Mortgage Trust</li>
                <li>General Finance</li>
                <li>Southern Cross</li>
                <li>Cressida Capital</li>
                <li>DBR</li>
                <li>Basecorp Finance</li>
                <li>CFML</li>
                <li>Pallas Capital</li>
                <li>Midlands Funds Management</li>
                <li>Funding Partners</li>
                <li>Finbase</li>
                <li>ASAP Finance Limited</li>
                <li>PROSPA</li>
                <li>BIZCAP</li>
                <li>AIA Go Home Loan</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-gray-900 mb-3">Duties Information</h2>
              <p>Base Mortgages, and anyone who gives financial advice on our behalf, have duties under the Financial Markets Conduct Act 2013 relating to the way that we give advice.</p>
              <p className="mt-3">We are required to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>give priority to your interests by taking all reasonable steps to make sure our advice isn't materially influenced by our own interests</li>
                <li>exercise care, diligence, and skill in providing you with advice</li>
                <li>meet standards of competence, knowledge and skill set by the Code of Professional Conduct for Financial Advice Services (these are designed to make sure that we have the expertise needed to provide you with advice)</li>
                <li>meet standards of ethical behaviour, conduct and client care set by the Code of Professional Conduct for Financial Advice Services (these are designed to make sure we treat you as we should and give you suitable advice)</li>
              </ul>
              <p className="mt-3">This is only a summary of the duties that we have. More information is available by <Link href="/contact" className="text-teal hover:underline">contacting us</Link>, or by visiting the{' '}
                <a href="https://www.fma.govt.nz" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">Financial Markets Authority website</a>.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-gray-900 mb-3">Contact Details</h2>
              <p>Base Mortgages is the Financial Advice Provider, authorised under NZ Financial Services Group Limited (FSP286965).</p>
              <ul className="mt-3 space-y-1">
                <li>Phone: <a href="tel:0272664925" className="text-teal hover:underline">027 266 4925</a></li>
                <li>Email: <a href="mailto:karl@basemortgages.co.nz" className="text-teal hover:underline">karl@basemortgages.co.nz</a></li>
              </ul>
              <p className="mt-4">
                For our full Privacy Policy, please visit our{' '}
                <Link href="/privacy" className="text-teal hover:underline">Privacy Policy page</Link>.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
