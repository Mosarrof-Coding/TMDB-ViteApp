/* eslint-disable react/no-unescaped-entities */
export default function DmcaPolicy() {
  return (
    <div className="bg-gray-50">
      <div className="relative bg-cover bg-center bg-no-repeat text-white overflow-hidden mb-4 md:mb-6 lg:mb-10">
        <div
          className="absolute inset-0 bg-black opacity-50"
          style={{
            backgroundImage: "url('https://your-image-url.com')", // Use your image URL here
          }}
        ></div>
        <div className="relative z-10 text-center py-6 sm:py-12 lg:py-20">
          <h1 className="text-3xl font-extrabold text-white">DMCA Policy</h1>
          <p className="text-lg sm:text-xl text-white max-w-3xl mx-auto mb-6">
            We respect the intellectual property rights of others. If you
            believe that your copyrighted work is being infringed, please follow
            the procedure outlined below.
          </p>
        </div>
      </div>

      <div className="contizer">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            1. Introduction
          </h2>
          <p className="text-base text-gray-700 mb-4">
            This DMCA Policy outlines the process for reporting alleged
            copyright infringements. If you believe that your copyrighted work
            has been infringed on our platform, you can submit a DMCA takedown
            notice.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            2. Reporting Infringement
          </h2>
          <p className="text-base text-gray-700 mb-4">
            To file a DMCA takedown notice, please send a written communication
            that includes the following:
            <ul className="list-disc pl-6 mt-2 text-gray-700">
              <li>
                A description of the copyrighted work you claim has been
                infringed.
              </li>
              <li>
                A description of where the infringing material is located on our
                site (URL or specific location).
              </li>
              <li>
                Your contact information (name, address, email, and phone
                number).
              </li>
              <li>
                A statement that you have a good faith belief that the use of
                the material is unauthorized.
              </li>
              <li>
                A statement under penalty of perjury that the information in
                your notice is accurate.
              </li>
              <li>Your physical or electronic signature.</li>
            </ul>
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            3. Counter-Notice
          </h2>
          <p className="text-base text-gray-700 mb-4">
            If you believe that your content has been removed due to a mistake
            or misidentification, you may file a counter-notice. Your
            counter-notice should include:
            <ul className="list-disc pl-6 mt-2 text-gray-700">
              <li>
                Your contact information (name, address, phone, and email).
              </li>
              <li>
                The content that was removed and the location where it was
                located.
              </li>
              <li>
                A statement under penalty of perjury that you believe the
                content was removed due to a mistake.
              </li>
              <li>Your physical or electronic signature.</li>
            </ul>
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            4. Changes to the DMCA Policy
          </h2>
          <p className="text-base text-gray-700 mb-4">
            We may update this DMCA Policy from time to time. Any changes will
            be posted on this page with an updated revision date.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            5. Contact Information
          </h2>
          <p className="text-base text-gray-700 mb-4">
            If you have any questions about this DMCA Policy or need assistance,
            please contact us at:
            <a
              href="mailto:support@yourdomain.com"
              className="text-blue-600 hover:text-blue-800"
            >
              support@yourdomain.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
