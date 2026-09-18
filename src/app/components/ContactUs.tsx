import { Mail, MapPin, Phone, Printer, Instagram, Facebook, ExternalLink } from 'lucide-react';

/**
 * ContactUs section for the OSTSOME Singapore storefront.
 * Matches the pattern used by the VN/MY "ContactAndTrust" footer blocks —
 * drop this in above (or as part of) the site footer.
 */
export function ContactUs() {
  const mapEmbedSrc =
    'https://maps.google.com/maps?q=StreamCast+Asia+Pte+Ltd,+102F+Pasir+Panjang+Road,+Singapore+118530&t=&z=15&ie=UTF8&iwloc=&output=embed';
  const mapLinkHref =
    'https://www.google.com/maps/search/?api=1&query=StreamCast+Asia+Pte+Ltd+102F+Pasir+Panjang+Road+Singapore+118530';

  return (
    <section className="bg-[#FFF8F3] py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Left: contact details */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-1">Contact Us</h2>
          <div className="w-14 h-1 bg-[#F16C10] rounded-full mb-6" />

          <div className="space-y-6">
            {/* Regional HQ */}
            <div>
              <p className="font-semibold text-gray-900">
                StreamCast Asia Pte Ltd &ndash; Regional HQ
              </p>
              <div className="flex items-start gap-2 mt-1 text-gray-600">
                <MapPin size={18} className="text-[#F16C10] mt-0.5 shrink-0" />
                <span>
                  102F Pasir Panjang Road #02-03 Citilink Warehouse Complex,
                  Singapore 118530
                </span>
              </div>
              <div className="flex items-center gap-2 mt-1 text-gray-600">
                <Phone size={18} className="text-[#F16C10] shrink-0" />
                <a href="tel:+6562551123" className="hover:text-[#F16C10]">
                  +65 6255 1123
                </a>
              </div>
            </div>

            {/* Regional Distribution Centre */}
            <div>
              <p className="font-semibold text-gray-900">
                StreamCast Asia Pte Ltd &ndash; Regional Distribution Centre
              </p>
              <div className="flex items-start gap-2 mt-1 text-gray-600">
                <MapPin size={18} className="text-[#F16C10] mt-0.5 shrink-0" />
                <span>
                  102F Pasir Panjang Road #05-08 Citilink Warehouse Complex,
                  Singapore 118530
                </span>
              </div>
              <div className="flex items-center gap-2 mt-1 text-gray-600">
                <Phone size={18} className="text-[#F16C10] shrink-0" />
                <a href="tel:+6562721151" className="hover:text-[#F16C10]">
                  +65 6272 1151
                </a>
              </div>
              <div className="flex items-center gap-2 mt-1 text-gray-600">
                <Printer size={18} className="text-[#F16C10] shrink-0" />
                <span>+65 6275 7091</span>
              </div>
            </div>

            {/* Email */}
            <div>
              <p className="font-semibold text-gray-900 mb-1">Email</p>
              <div className="flex items-center gap-2 text-gray-600">
                <Mail size={18} className="text-[#F16C10] shrink-0" />
                <a
                  href="mailto:sca-enquiries@streamcastasia.com"
                  className="hover:text-[#F16C10]"
                >
                  sca-enquiries@streamcastasia.com
                </a>
              </div>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/ostsomesingapore/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="OSTSOME on Instagram"
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-[#F16C10] hover:text-white hover:border-[#F16C10] transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/OutdoorSportsTravel"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="OSTSOME on Facebook"
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-[#F16C10] hover:text-white hover:border-[#F16C10] transition-colors"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Right: map */}
        <div className="relative rounded-2xl overflow-hidden shadow-sm border border-gray-200 h-[420px]">
          <a
            href={mapLinkHref}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-3 left-3 z-10 bg-white rounded-full px-4 py-2 text-sm font-medium text-gray-800 shadow flex items-center gap-1.5 hover:bg-gray-50"
          >
            Open in Maps <ExternalLink size={14} />
          </a>
          <iframe
            title="StreamCast Asia Pte Ltd location"
            src={mapEmbedSrc}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}