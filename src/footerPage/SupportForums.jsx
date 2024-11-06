/* eslint-disable react/no-unescaped-entities */
export default function SupportForums() {
  return (
    <div className="bg-gray-50">
      <div className="relative bg-cover bg-center bg-no-repeat text-white overflow-hidden mb-4 md:mb-6 lg:mb-10">
        <div
          className="absolute inset-0 bg-black opacity-50"
          style={{
            backgroundImage:
              "url('https://example.com/path-to-your-image.jpg')", // Replace with your image URL
          }}
        ></div>
        <div className="relative z-10 text-center py-6 sm:py-12 lg:py-20">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-1 sm:mb-2 lg:mb-4">
            Support Forums
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl max-w-3xl mx-auto mb-1 sm:mb-2 lg:mb-4">
            Join the conversation! Get help from our community and contribute to
            discussions.
          </p>
        </div>
      </div>

      <div className="contizer px-4 sm:px-8 lg:px-16">
        <div className="mb-4 md:mb-6 lg:mb-10">
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-semibold text-gray-800 mb-2 md:mb-4 lg:mb-6">
            Community Support
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-700 leading-relaxed mb-4">
            Browse through existing topics or ask a new question in our
            community forum. Our users are here to help.
          </p>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-4">
              Forum Categories
            </h3>
            <ul className="space-y-4">
              <li className="flex justify-between items-center text-sm sm:text-base md:text-lg">
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                >
                  General Inquiries
                </a>
                <span className="text-gray-500">(23 Topics)</span>
              </li>
              <li className="flex justify-between items-center text-sm sm:text-base md:text-lg">
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                >
                  Technical Support
                </a>
                <span className="text-gray-500">(15 Topics)</span>
              </li>
              <li className="flex justify-between items-center text-sm sm:text-base md:text-lg">
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                >
                  Feature Requests
                </a>
                <span className="text-gray-500">(5 Topics)</span>
              </li>
            </ul>

            <div className="mt-6 text-center">
              <a
                href="#"
                className="inline-block px-4 md:px-6 lg:px-10 py-2 sm:py-2.5 lg:py-3 bg-blue-600 text-white rounded text-xs sm:text-base lg:text-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Start New Discussion
              </a>
            </div>
          </div>
        </div>

        <div className="text-center py-4 md:py-6 lg:py-10">
          <h3 className="text-base md:text-xl lg:text-2xl font-semibold text-gray-800 mb-2 md:mb-4 lg:mb-6">
            Connect with Us
          </h3>
          <div className="flex justify-center space-x-6">
            <a
              href="mailto:support@yourdomain.com"
              className="text-blue-600 hover:text-blue-700 transition-colors text-xs sm:text-sm md:text-base lg:text-lg font-medium"
            >
              Email Support
            </a>
            <a
              href="tel:+1234567890"
              className="text-blue-600 hover:text-blue-700 transition-colors text-xs sm:text-sm md:text-base lg:text-lg font-medium"
            >
              Call Support
            </a>
            <a
              href="https://www.facebook.com/yourpage"
              className="text-blue-600 hover:text-blue-700 transition-colors text-xs sm:text-sm md:text-base lg:text-lg font-medium"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
