import { ArrowLeft } from 'lucide-react';

interface TermsOfServiceProps {
  onBack: () => void;
}

export function TermsOfService({ onBack }: TermsOfServiceProps) {
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

        <h1 className="text-3xl font-bold text-gray-900 mb-1">Terms of Service</h1>
        <p className="text-sm text-gray-500 mb-10">Last updated: 18 September 2026</p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">
          <p>
            Welcome to OSTSOME (&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;), operated
            by StreamCast Asia Pte Ltd, a company registered in Singapore with its registered
            office at 102F Pasir Panjang Road #02-03 Citilink Warehouse Complex, Singapore
            118530. These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use
            of ostsome.com (the &ldquo;Site&rdquo;) and any purchases made through it. By
            accessing or using the Site, creating a FOST membership account, or placing an
            order, you agree to be bound by these Terms.
          </p>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">1. Eligibility</h2>
            <p>
              You must be at least 18 years old, or the age of legal majority in your
              jurisdiction, to create an account or make a purchase on the Site. By
              registering, you represent that you meet this requirement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">2. FOST Membership</h2>
            <p>2.1 FOST membership is free to join and open to anyone who creates an account on the Site.</p>
            <p>
              2.2 Membership benefits (including any discount codes, early access to sales, or
              free shipping thresholds) are subject to change at our discretion and may be
              modified, suspended, or withdrawn at any time with reasonable notice.
            </p>
            <p>
              2.3 We reserve the right to suspend or terminate a FOST account for suspected
              fraud, abuse of promotional offers, or breach of these Terms.
            </p>
            <p>
              2.4 Discount codes and automatic discounts tied to FOST membership are
              non-transferable, cannot be combined with other offers unless explicitly stated,
              and have no cash value.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">3. Orders and Payment</h2>
            <p>
              3.1 All prices displayed on the Site are in Singapore Dollars (SGD) and are
              inclusive/exclusive of GST as indicated at checkout.
            </p>
            <p>
              3.2 We reserve the right to refuse or cancel any order at our discretion,
              including in cases of suspected fraud, pricing errors, or product unavailability.
              If payment has already been processed for a cancelled order, we will issue a full
              refund.
            </p>
            <p>3.3 Product images are for illustrative purposes; actual products may vary slightly in appearance.</p>
            <p>
              3.4 Payment is processed through our third-party payment provider(s). We do not
              store your full payment card details on our servers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">4. Shipping and Delivery</h2>
            <p>
              4.1 Estimated delivery timeframes are provided at checkout and are not
              guaranteed. We are not liable for delays caused by circumstances beyond our
              reasonable control (including courier delays, customs, or force majeure events).
            </p>
            <p>
              4.2 Risk of loss and title for products pass to you upon delivery to the shipping
              address provided.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              5. Returns, Refunds, and Exchanges
            </h2>
            <p>
              5.1 You may request a return or exchange within 14 days of delivery, provided the
              item is unused, in its original packaging, and accompanied by proof of purchase.
            </p>
            <p>
              5.2 Final sale and clearance items, and opened earphones or other audio products
              (for hygiene reasons), are not eligible for return or exchange.
            </p>
            <p>
              5.3 Refunds, once approved, will be processed to the original payment method
              within 7 to 10 business days.
            </p>
            <p>
              5.4 This section does not affect your statutory rights under the Consumer
              Protection (Fair Trading) Act 2003 or other applicable Singapore consumer
              protection law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">6. Product Warranties</h2>
            <p>
              Products sold on the Site may carry manufacturer warranties. Warranty claims
              should be directed to{' '}
              <a href="mailto:sca-enquiries@streamcastasia.com" className="text-[#F16C10] hover:underline">
                sca-enquiries@streamcastasia.com
              </a>
              . We do not provide additional warranties beyond those offered by the manufacturer
              unless expressly stated on the product page.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">7. Intellectual Property</h2>
            <p>
              All content on the Site &mdash; including text, graphics, logos, product
              photography, and the OSTSOME name and branding &mdash; is owned by or licensed to
              us and protected under Singapore and international intellectual property law. You
              may not reproduce, distribute, or create derivative works from this content
              without our prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">8. User Conduct</h2>
            <p>
              You agree not to: (a) use the Site for any unlawful purpose; (b) attempt to gain
              unauthorized access to our systems; (c) interfere with the Site&rsquo;s operation
              (including via bots, scraping, or denial-of-service attempts); or (d) submit false
              or misleading information when creating an account or placing an order.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">9. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by Singapore law, OSTSOME and StreamCast Asia Pte
              Ltd shall not be liable for any indirect, incidental, special, or consequential
              damages arising from your use of the Site, except where such liability cannot be
              excluded by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">10. Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. Continued use of the Site after
              changes are posted constitutes acceptance of the revised Terms. Material changes
              will be highlighted where practicable.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">11. Governing Law</h2>
            <p>
              These Terms are governed by the laws of Singapore. Any disputes arising from these
              Terms shall be subject to the exclusive jurisdiction of the courts of Singapore.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">12. Contact Us</h2>
            <p>For questions about these Terms, contact us at:</p>
            <p className="mt-2">
              <strong className="text-gray-900">StreamCast Asia Pte Ltd</strong>
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
        </div>
      </div>
    </div>
  );
}