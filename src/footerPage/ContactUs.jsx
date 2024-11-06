/* eslint-disable react/no-unescaped-entities */
export default function ContactUs() {
  return (
    <div className="bg-gray-50">
      <div className="relative bg-cover bg-center bg-no-repeat text-white overflow-hidden mb-4 md:mb-6 lg:mb-10">
        <div
          className="absolute inset-0 bg-black opacity-50"
          style={{
            backgroundImage:
              "url('https://example.com/path-to-your-image.jpg')",
          }}
        ></div>
        <div className="relative z-10 text-center py-6 sm:py-12 lg:py-20">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-1 sm:mb-2 lg:mb-4">
            Contact Us
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl max-w-3xl mx-auto mb-1 sm:mb-2 lg:mb-4">
            We're here to assist you! Whether you have questions or need help,
            feel free to reach out.
          </p>
        </div>
      </div>

      <div className="contizer px-4 sm:px-8 lg:px-16">
        <div className="mb-4 md:mb-6 lg:mb-10">
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-semibold text-gray-800 mb-2 md:mb-4 lg:mb-6">
            Get in Touch
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-700 leading-relaxed mb-4">
            If you have any inquiries or need assistance, we’d love to hear from
            you. Fill out the form below or reach out via email.
          </p>
          <form
            action="mailto:info@yourdomain.com"
            method="POST"
            encType="multipart/form-data"
            className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg"
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-xs sm:text-sm md:text-base lg:text-lg font-medium text-gray-700 mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-3 text-xs sm:text-sm md:text-base lg:text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-xs sm:text-sm md:text-base lg:text-lg font-medium text-gray-700 mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-3 text-xs sm:text-sm md:text-base lg:text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-xs sm:text-sm md:text-base lg:text-lg font-medium text-gray-700 mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                required
                className="w-full p-3 text-xs sm:text-sm md:text-base lg:text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              ></textarea>
            </div>

            <div className="mb-4 text-center">
              <button
                type="submit"
                className="inline-block px-4 md:px-6 lg:px-10 py-2 sm:py-2.5 lg:py-3 bg-blue-600 text-white rounded text-xs sm:text-base lg:text-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        <div className="text-center py-4 md:py-6 lg:py-10">
          <h3 className="text-base md:text-xl lg:text-2xl font-semibold text-gray-800 mb-2 md:mb-4 lg:mb-6">
            Other Ways to Reach Us
          </h3>
          <div className="flex justify-center space-x-6">
            <a
              href="mailto:info@yourdomain.com"
              className="text-blue-600 hover:text-blue-700 transition-colors text-xs sm:text-sm md:text-base lg:text-lg font-medium"
            >
              Email Us
            </a>
            <a
              href="tel:+1234567890"
              className="text-blue-600 hover:text-blue-700 transition-colors text-xs sm:text-sm md:text-base lg:text-lg font-medium"
            >
              Call Us
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
