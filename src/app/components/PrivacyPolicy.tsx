import { ArrowLeft } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export function PrivacyPolicy({ onBack }: PrivacyPolicyProps) {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-[#F16C10] mb-8 text-sm font-medium"
        >
          <ArrowLeft size={16} />
          Back
        </button>

        <h1 className="text-3xl font-bold text-gray-900 mb-1">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-10">Last updated: 18 September 2026</p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">
          <p>
            StreamCast Asia Pte Ltd (&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;)
            operates ostsome.com (the &ldquo;Site&rdquo;). This Privacy Policy explains how we
            collect, use, disclose, and protect your personal data in accordance with the
            Singapore Personal Data Protection Act 2012 (&ldquo;PDPA&rdquo;).
          </p>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">1. Personal Data We Collect</h2>
            <p>We may collect the following categories of personal data:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Account/FOST membership data</strong>: first name, last name, email
                address, phone number (optional), year of birth (optional), password (stored in
                hashed form)
              </li>
              <li>
                <strong>Order data</strong>: shipping address, billing address, order history,
                payment confirmation details (we do not store full card numbers &mdash; these
                are handled by our payment processor)
              </li>
              <li>
                <strong>Technical data</strong>: IP address, browser type, device information,
                and cookies/similar tracking technologies used for site analytics (e.g., Google
                Analytics, Meta Pixel)
              </li>
              <li>
                <strong>Communications</strong>: any information you provide when contacting
                customer support
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">2. How We Use Your Personal Data</h2>
            <p>We use your personal data to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Create and manage your FOST membership account</li>
              <li>Process and fulfil your orders, including shipping and customer service</li>
              <li>Apply FOST membership benefits (discounts, early access, free shipping)</li>
              <li>Send order confirmations, shipping updates, and account-related notifications</li>
              <li>
                With your consent, send marketing communications about promotions, new
                products, or flash sales (you may opt out at any time)
              </li>
              <li>Improve the Site through analytics (e.g., understanding browsing behaviour, measuring ad performance)</li>
              <li>Detect and prevent fraud or misuse of promotional offers</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">3. Legal Basis for Processing</h2>
            <p>
              We collect and use personal data based on: your consent (e.g., at signup, via the
              checkbox agreeing to our Terms and this Policy); the necessity to perform a
              contract with you (e.g., processing an order); and our legitimate business
              interests (e.g., fraud prevention, site improvement), balanced against your rights
              under the PDPA.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">4. Disclosure of Personal Data</h2>
            <p>We do not sell your personal data. We may share personal data with:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Service providers</strong>: payment processors, shipping/courier
                partners, email/SMS providers, and hosting/analytics providers (e.g., Netlify,
                Shopify, Google, Meta), who process data on our behalf under confidentiality
                obligations
              </li>
              <li>
                <strong>Legal and regulatory authorities</strong>, where required by law or to
                protect our legal rights
              </li>
              <li>
                <strong>Business transfers</strong>: in the event of a merger, acquisition, or
                sale of assets, personal data may be transferred as part of that transaction
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">5. Cookies and Tracking Technologies</h2>
            <p>
              The Site uses cookies and similar technologies (including Google Analytics and
              Meta Pixel) to understand how visitors use the Site and to measure the
              effectiveness of our marketing. You can manage cookie preferences through your
              browser settings; disabling cookies may affect Site functionality.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">6. Data Retention</h2>
            <p>
              We retain personal data for as long as necessary to fulfil the purposes described
              in this Policy, or as required by applicable law (e.g., accounting and tax
              record-keeping requirements under Singapore law). FOST account data is retained
              for as long as your account remains active, plus 1 year after account closure,
              unless deletion is requested earlier.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">7. Data Security</h2>
            <p>
              We implement reasonable technical and organisational measures to protect your
              personal data against unauthorised access, disclosure, alteration, or destruction,
              including encrypted password storage and secure (HTTPS) transmission of data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">8. Your Rights Under the PDPA</h2>
            <p>Subject to applicable exceptions, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Access</strong> the personal data we hold about you</li>
              <li><strong>Correct</strong> inaccurate or incomplete personal data</li>
              <li><strong>Withdraw consent</strong> for marketing communications or specific processing activities at any time</li>
              <li><strong>Request deletion</strong> of your account and associated personal data, subject to our legal retention obligations</li>
            </ul>
            <p>To exercise these rights, contact our Data Protection Officer (see Section 10 below).</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">9. Overseas Transfer of Data</h2>
            <p>
              Some of our service providers (e.g., cloud hosting, analytics) may store or
              process data outside Singapore. Where this occurs, we take steps to ensure such
              recipients provide a standard of protection comparable to the PDPA, as required
              under Singapore law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">10. Data Protection Officer / Contact Us</h2>
            <p>
              If you have questions, concerns, or requests regarding this Privacy Policy or your
              personal data, please contact:
            </p>
            <p className="mt-2">
              <strong className="text-gray-900">Data Protection Officer</strong>
              <br />
              StreamCast Asia Pte Ltd
              <br />
              102F Pasir Panjang Road #02-03 Citilink Warehouse Complex, Singapore 118530
              <br />
              Email:{' '}
              <a href="mailto:sca-enquiries@streamcastasia.com" className="text-[#F16C10] hover:underline">
                sca-enquiries@streamcastasia.com
              </a>
              <br />
              Phone: +65 6255 1123
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">11. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our
              practices or legal requirements. The &ldquo;Last updated&rdquo; date at the top
              will reflect the most recent revision. Material changes will be communicated where
              appropriate.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
