/* eslint-disable react/no-unescaped-entities */
export default function SystemStatus() {
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
            System Status
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl max-w-3xl mx-auto mb-1 sm:mb-2 lg:mb-4">
            Keep track of the current status of our services. We are committed
            to providing you with a seamless experience.
          </p>
        </div>
      </div>

      <div className="contizer px-4 sm:px-8 lg:px-16">
        <div className="mb-4 md:mb-6 lg:mb-10">
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-semibold text-gray-800 mb-2 md:mb-4 lg:mb-6">
            Current System Status
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-700 leading-relaxed mb-4">
            Our team is constantly monitoring the system to ensure everything is
            running smoothly. Below are the current status updates.
          </p>

          <div className="space-y-6">
            {/* Service 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex justify-between items-center">
              <div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">
                  Website
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-600">
                  The main website is fully operational.
                </p>
              </div>
              <span className="text-green-600 font-medium">Operational</span>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex justify-between items-center">
              <div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">
                  API
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-600">
                  API services are running smoothly with no issues.
                </p>
              </div>
              <span className="text-green-600 font-medium">Operational</span>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex justify-between items-center">
              <div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">
                  User Authentication
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-600">
                  User login and registration are working without interruptions.
                </p>
              </div>
              <span className="text-green-600 font-medium">Operational</span>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex justify-between items-center">
              <div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">
                  Payment Gateway
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-600">
                  Payments are being processed normally.
                </p>
              </div>
              <span className="text-green-600 font-medium">Operational</span>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex justify-between items-center">
              <div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">
                  Email Service
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-600">
                  Email notifications are being sent as expected.
                </p>
              </div>
              <span className="text-green-600 font-medium">Operational</span>
            </div>
          </div>
        </div>

        <div className="text-center py-4 md:py-6 lg:py-10">
          <h3 className="text-base md:text-xl lg:text-2xl font-semibold text-gray-800 mb-2 md:mb-4 lg:mb-6">
            Need Assistance?
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
