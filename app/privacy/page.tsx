import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | Base Mortgages',
  description: 'Privacy Policy for Base Mortgages — how we collect, use, and protect your personal information.',
};

export default function PrivacyPage() {
  return (
    <div className="bg-white">
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">

          <p className="text-sm font-semibold text-teal uppercase tracking-widest mb-4">Legal</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight" style={{ letterSpacing: '-0.02em' }}>
            Privacy Policy
          </h1>
          <p className="text-gray-400 text-sm mb-12">Last updated April 2026</p>

          <div className="prose prose-gray max-w-none space-y-10 text-gray-600 leading-relaxed">

            <div>
              <h2 className="font-display text-xl font-bold text-gray-900 mb-3">1. Our commitment to protect your privacy</h2>
              <p>We understand how important it is to protect your personal information. This document sets out our privacy commitment in respect of personal information we hold about you and what we do with that information.</p>
              <p className="mt-3">It is important to us that you are confident that any personal information we hold about you will be treated in a way which ensures protection of your personal information.</p>
              <p className="mt-3">Our commitment in respect of personal information is to abide by the Privacy Principles set out in the Privacy Act 2020 (or any successor legislation) (the Privacy Act) and all other applicable laws. This Privacy Policy applies in addition to, and does not limit, our rights and obligations under the Privacy Act and other applicable laws.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-gray-900 mb-3">2. Who are we</h2>
              <p>References in this Privacy Policy to "we", "us" and "our" means Base Mortgages, acting through a Financial Adviser.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-gray-900 mb-3">3. Your authorisation</h2>
              <p>By providing us with personal information, engaging us to provide you with services, or by using our website, you consent to the collection, use, storage and disclosure of personal information in accordance with this Privacy Policy.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-gray-900 mb-3">4. Changes to our Privacy Policy</h2>
              <p>We may change our Privacy Policy from time to time, by publishing an updated version on this page, to reflect changes in the law and also our business needs so long as the changes do not disadvantage you. By continuing to engage us or use our website you will be deemed to have accepted the updated Privacy Policy.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-gray-900 mb-3">5. What personal information do we collect?</h2>
              <p>When we refer to personal information we mean information that identifies, or is capable of identifying, you. This includes, for example, your name, date of birth, address, contact details, account details and occupation.</p>
              <p className="mt-3">If you engage us to provide services to you, we may collect personal information about your financial situation or goals in order to recommend mortgage and insurance products that we are permitted to advise on (Products).</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-gray-900 mb-3">6. Why do we collect your personal information?</h2>
              <p>We collect your personal information for the purposes of our and relevant third parties' services and relationship with you (refer to section 9 below: "Who do we disclose your personal information to?"). For example:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>responding to your requests or inquiries;</li>
                <li>providing services to you (e.g. to enable us to recommend Products to you);</li>
                <li>sending communications and direct marketing to you about products and services we think may be of interest to you (whether through mail, telephone or electronic means including email and SMS/MMS);</li>
                <li>market research; and</li>
                <li>any other purpose authorised by you or the Privacy Act.</li>
              </ul>
              <p className="mt-3">If you do not wish to receive marketing information, you may 'opt out' at any time by notifying us.</p>
              <p className="mt-3">We may also collect personal information (including credit information and health information) on behalf of the lenders, insurers and other providers of Products that you choose to apply for (Product Providers). Product Providers will have their own Privacy Policy that applies to the information that we collect on their behalf.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-gray-900 mb-3">7. How do we collect your personal information?</h2>
              <p>Generally we will collect your personal information directly from you. For example, we collect your personal information directly from your use of our website and the information that you submit to the website. We also collect your personal information if you use the "contact us" functionality on our website and you provide the personal information during conversations between you and us.</p>
              <p className="mt-3">We may also collect your personal information from:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Kiwi Adviser Network (KAN) and its related bodies corporate;</li>
                <li>credit reporting agencies;</li>
                <li>with your authorisation, banks (e.g. through the use of illion Bank Statements) and employers;</li>
                <li>Product Providers (e.g. during the term of any loan or insurance we have arranged on your behalf, in order to answer your queries or assist you with your financial arrangements as your circumstances change). If applicable, the Product Providers may also periodically disclose your loan balance or premium to us in connection with the payment of ongoing commission to us over the term of your loan or insurance; and</li>
                <li>any other person authorised by you or the Privacy Act.</li>
              </ul>
              <p className="mt-3">If we collect your personal information from someone other than you, we will take reasonable steps to notify you of the collection and the required statutory matters as soon as reasonably practicable, unless an exception under the Privacy Act applies.</p>
              <p className="mt-3">If you provide any personal information about anyone else to us, you confirm that you have collected that personal information in accordance with the Privacy Act and that the individual concerned has:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>authorised the disclosure to us and the collection, use and disclosure of their personal information by us in accordance with this Privacy Policy; and</li>
                <li>been informed of their right to access and request correction of their personal information.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-gray-900 mb-3">8. Updating your personal information</h2>
              <p>We will generally rely on you to ensure the information we hold about you is accurate. If any of your details change, please let us know as soon as possible by contacting us.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-gray-900 mb-3">9. Who do we disclose your personal information to?</h2>
              <p>We may disclose your personal information to the following people if we consider it necessary to do so for the purposes described in section 6 above:</p>
              <ul className="list-disc pl-6 mt-3 space-y-3">
                <li>
                  <strong>KAN and its related bodies corporate:</strong> We share personal information with Kiwi Adviser Network (KAN), in the course of our being a member of their financial services group. This includes information that you provide to us directly, and information we collect or create during the course of our engagement with you including your identity, contact details, and sensitive financial data. This sharing enables us to provide you with our services and allows KAN to meet its monitoring, oversight, and assurance obligations under the Financial Markets Conduct Act 2013 and the Privacy Act. KAN acts as an agency collecting and holding this information. You can view their full Privacy Policy, including their physical address and details on how to exercise your rights to access and correct your information, at{' '}
                  <a href="https://www.kiwiadvisernet.co.nz/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">www.kiwiadvisernet.co.nz/privacy-policy</a>. Please note that this sharing is a condition of our service; if you do not agree, we cannot provide services to you because KAN's oversight is a condition of our membership within their financial services group.
                </li>
                <li>Product Providers and other prospective lenders, third parties or other intermediaries in relation to your finance or insurance requirements (including a prospective lender's mortgage insurer (if any), any person with whom a lender or insurer proposes to enter into contractual arrangements, any person who provides a guarantee or security and any trustee and any assignee or potential assignee of a lender's or insurer's rights);</li>
                <li>our referral partners who can help you with other services;</li>
                <li>contractors or service providers;</li>
                <li>investors, or any entity that has an interest in our business or any entity to whom we consider assigning or transferring any of our rights or obligations or selling all or part of our business;</li>
                <li>anyone who we are legally required or authorised to share your information with, including regulators and government agencies;</li>
                <li>to auditors (such as KAN) to ensure we are providing services to you that are in your best interests, and in accordance with current regulations;</li>
                <li>your employer and referees, as well as credit reporting and identity verification agencies; and</li>
                <li>any other person or entity authorised by you or the Privacy Act.</li>
              </ul>
              <p className="mt-3">You acknowledge and agree that credit reporting agencies may hold your credit information (including default information) on their systems and use such information to provide their credit reporting services, which may include providing your credit information (including default information) to their customers.</p>
              <p className="mt-3">Prior to disclosing any of your personal information to another person or organisation, we will take all reasonable steps to satisfy ourselves that the person or organisation has a commitment to protecting your personal information at least equal to our commitment.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-gray-900 mb-3">10. Do we disclose your personal information to anyone outside New Zealand?</h2>
              <p>We may use cloud storage to store the personal information we hold about you. The cloud storage and the IT servers may be located outside New Zealand.</p>
              <p className="mt-3">We may also disclose personal information to KAN and its related bodies corporate, and third party suppliers and service providers located overseas for some of the purposes listed above.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-gray-900 mb-3">11. Our Website</h2>
              <h3 className="font-semibold text-gray-800 mt-4 mb-2">Cookies and IP addresses</h3>
              <p>When you access our website, we may send a "cookie" (which is a small summary file containing a unique ID number) to your computer. This enables us to recognise your computer each time you visit our website. We also use cookies to measure traffic patterns, to determine which areas of our website have been visited, to measure transaction patterns, to analyse trends, administer the website, track users' movements and gather broad demographic information. We use this to research our users' habits so that we can improve our website and our service offering. Our cookies may record information such as your Internet Protocol (IP) address, your device and browser type, operating system, the pages or features of our site to which you have browsed and the time spent on those pages or features, the frequency with which the site is used by you, the search terms that you have used, the links on our site that you have clicked on or used, and other usage statistics.</p>
              <p className="mt-3">While our cookies do not collect personal information, if you submit your name and email address as part of your usage, then we will link that personal information with the cookies information that we have previously collected from you.</p>
              <p className="mt-3">If you do not wish to receive cookies, you can set your browser so that your computer does not accept them.</p>
              <h3 className="font-semibold text-gray-800 mt-4 mb-2">Security</h3>
              <p>As our website is linked to the internet, and the internet is inherently insecure, we cannot provide any assurance regarding the security of transmission of information you communicate to us online. We also cannot guarantee that the information you supply will not be intercepted while being transmitted over the internet. Accordingly, any personal information or other information which you transmit to us online is transmitted at your own risk.</p>
              <h3 className="font-semibold text-gray-800 mt-4 mb-2">Links and third party advertisements</h3>
              <p>Our website may contain links to other websites operated by third parties. Our website may also display advertisements, which are hosted by third parties.</p>
              <p className="mt-3">We make no representations or warranties in relation to the privacy practices of any third party website or advertisement providers and we are not responsible for other privacy policies or the content of any third party website or advertisements. Third party websites are responsible for informing you about their own privacy practices.</p>
              <p className="mt-3">Our online advertising network partner may use cookies, web beacons or other web tracking techniques to collect non-personally identifiable information about your activities on the website and other websites that you may visit to provide you targeted advertising based upon your interests.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-gray-900 mb-3">12. Are you required to provide personal information to us?</h2>
              <p>You are not required to provide any personal information to us but if you choose not to it might affect our ability to provide services to you and your ability to obtain finance, insurance and other Products from Product Providers.</p>
              <p className="mt-3">In most circumstances it will be necessary for us to identify you in order to successfully do business with you. However, where it is lawful and practicable to do so, we will offer you the opportunity of doing business with us without providing us with personal information, for example, if you make general inquiries about interest rates or current promotional offers.</p>
              <p className="mt-3">You may choose to interact with our website anonymously, but we will not be able to contact you unless you provide your personal information.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-gray-900 mb-3">13. Access and correction to your personal information</h2>
              <p>You may access and request correction of any of the personal information that we hold about you at any time by contacting us. We may charge a fee for our reasonable costs of retrieving and supplying the information to you.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-gray-900 mb-3">14. Further information</h2>
              <p>If you have any questions on our Privacy Policy or your personal information please <Link href="/contact" className="text-teal hover:underline">contact us</Link>.</p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
