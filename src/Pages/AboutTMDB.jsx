export default function AboutTMDB() {
  return (
    <div className="bg-gray-50">
      <div
        className="relative bg-cover bg-center bg-no-repeat text-white overflow-hidden mb-4 md:mb-6 lg:mb-10"
        style={{
          backgroundImage:
            "url('https://example.com/path-to-movie-database-image.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center py-6 sm:py-12 lg:py-20">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-1 sm:mb-2 lg:mb-4">
            About TMDB
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl max-w-3xl mx-auto mb-1 sm:mb-2 lg:mb-4">
            The Movie Database (TMDB) is a community-driven movie and TV
            database, featuring thousands of titles and images.
          </p>
          <a
            href="#"
            className="inline-block px-4 md:px-6 lg:px-10 py-1 sm:py-1.5 lg:py-2 bg-blue-600 text-white rounded text-xs sm:text-base lg:text-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
      <div className="contizer">
        <div className="mb-4 md:mb-6 lg:mb-10">
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-semibold text-gray-800 mb-2 md:mb-4 lg:mb-6">
            Our Story
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-700 leading-relaxed">
            TMDB was created in 2008 with the goal of providing high-quality,
            user-contributed movie and TV data. Since then, it has grown into
            one of the most popular and reliable resources for film and TV
            information. With over 1.5 million users and contributors, TMDB
            continues to be a community-driven project, offering an open
            platform for everyone to share and discover entertainment.
          </p>
        </div>

        <div className="py-4 md:py-6 lg:py-10">
          <h3 className="text-base md:text-xl lg:text-2xl font-semibold text-gray-800 mb-4 text-center">
            Why Choose TMDB?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center justify-center text-center">
              <h4 className="text-xl sm:text-2xl font-bold text-blue-600 mb-2">
                Global Reach
              </h4>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-700">
                TMDB is available in 180+ countries and supports 39 languages,
                making it accessible worldwide.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <h4 className="text-xl sm:text-2xl font-bold text-blue-600 mb-2">
                High-Quality Media
              </h4>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-700">
                With a growing library of 6 million+ images and metadata, TMDB
                is a trusted source for visual content.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <h4 className="text-xl sm:text-2xl font-bold text-blue-600 mb-2">
                Developer-Friendly
              </h4>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-700">
                TMDB provides a powerful API, trusted by over 1.5 million
                developers and companies globally.
              </p>
            </div>
          </div>
        </div>

        <div className="py-4 md:py-6 lg:py-10">
          <h3 className="text-base md:text-xl lg:text-2xl font-semibold text-gray-800 mb-2 md:mb-4 lg:mb-6 text-center">
            Platform Stats
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
            <div>
              <span className="text-lg sm:text-xl :lg:text-2xl font-bold text-blue-600">
                988,837
              </span>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-700">
                Movies
              </p>
            </div>
            <div>
              <span className="text-lg sm:text-xl :lg:text-2xl font-bold text-blue-600">
                184,692
              </span>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-700">
                TV Shows
              </p>
            </div>
            <div>
              <span className="text-lg sm:text-xl :lg:text-2xl font-bold text-blue-600">
                308,558
              </span>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-700">
                TV Seasons
              </p>
            </div>
            <div>
              <span className="text-lg sm:text-xl :lg:text-2xl font-bold text-blue-600">
                4,917,880
              </span>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-700">
                TV Episodes
              </p>
            </div>
            <div>
              <span className="text-lg sm:text-xl :lg:text-2xl font-bold text-blue-600">
                3,700,197
              </span>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-700">
                People
              </p>
            </div>
            <div>
              <span className="text-lg sm:text-xl :lg:text-2xl font-bold text-blue-600">
                6,473,893
              </span>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-700">
                Images
              </p>
            </div>
            <div>
              <span className="text-lg sm:text-xl :lg:text-2xl font-bold text-blue-600">
                553,142
              </span>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-700">
                Edits Last Week
              </p>
            </div>
          </div>
          <p className="text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-500 mt-4">
            * These numbers are constantly updated as new data and contributions
            come in.
          </p>
        </div>

        <div className="mb-4 md:mb-6 lg:mb-10 text-center">
          <h3 className="text-base md:text-xl lg:text-2xl font-semibold text-gray-800 mb-2 md:mb-4 lg:mb-6">
            Get in Touch
          </h3>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-700 mb-4">
            For more information about TMDB, feel free to reach out. We’d love
            to hear from you!
          </p>
          <a
            href="mailto:info@tmdb.com"
            className="inline-block px-4 md:px-6 lg:px-10 py-1 sm:py-1.5 lg:py-2 bg-blue-600 text-white rounded text-xs sm:text-base lg:text-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
