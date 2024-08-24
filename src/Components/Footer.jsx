import logo from "../assets/movielogo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="bg-[#202243]">
        <div className="contizer">
          <div className="footItem w-full lg:max-w-[940px] mx-auto py-2 sm:py-4 md:py-6 lg:py-8 flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
            <div className="min-w-fit">
              <img
                src={logo}
                alt="logo"
                className="w-[60px] sm:w-[80px] md:w-[100px] lg:w-[120px]"
              />
              <span className="inline-block bg-white text-blue-700 text-sm sm:text-lg font-semibold mt-2 lg:mt-3 xl:mt-4 px-3 py-[1px] md:py-1 rounded-md cursor-pointer whitespace-nowrap">
                Hi Mosarrof!
              </span>
            </div>
            <div className="min-w-fit">
              <div className="footTxt flex flex-wrap justify-center md:justify-between gap-4">
                <div>
                  <h3 className="text-base sm:text-base lg:text-xl font-semiBold pb-1 lg:pb-2 text-blue-400">
                    THE BASICS
                  </h3>
                  <div className="flex flex-col font-medium min-w-fit">
                    <Link className="hover:text-gray-300 text-gray-400 transition-all text-sm sm:text-base md:text-lg">
                      About TMDB
                    </Link>
                    <Link className="hover:text-gray-300 text-gray-400 transition-all text-sm sm:text-base md:text-lg">
                      Contact Us
                    </Link>
                    <Link className="hover:text-gray-300 text-gray-400 transition-all text-sm sm:text-base md:text-lg">
                      Support Forums
                    </Link>
                    <Link className="hover:text-gray-300 text-gray-400 transition-all text-sm sm:text-base md:text-lg">
                      API
                    </Link>
                    <Link className="hover:text-gray-300 text-gray-400 transition-all text-sm sm:text-base md:text-lg">
                      System Status
                    </Link>
                  </div>
                </div>{" "}
                <div className="hidden lg:block">
                  <h3 className="text-base sm:text-base lg:text-xl font-semiBold pb-1 lg:pb-2 text-blue-400">
                    LEGAL
                  </h3>
                  <div className="flex flex-col font-medium min-w-fit">
                    <Link className="hover:text-gray-300 text-gray-400 transition-all text-sm sm:text-base md:text-lg">
                      Terms of Use
                    </Link>
                    <Link className="hover:text-gray-300 text-gray-400 transition-all text-sm sm:text-base md:text-lg">
                      API Terms of Use
                    </Link>
                    <Link className="hover:text-gray-300 text-gray-400 transition-all text-sm sm:text-base md:text-lg">
                      Privacy Policy
                    </Link>
                    <Link className="hover:text-gray-300 text-gray-400 transition-all text-sm sm:text-base md:text-lg">
                      DMCA Policy
                    </Link>
                  </div>
                </div>
                <div className="hidden md:block">
                  <h3 className="text-base sm:text-base lg:text-xl font-semiBold pb-1 lg:pb-2 text-blue-400">
                    GET INVOLVED
                  </h3>
                  <div className="flex flex-col font-medium min-w-fit">
                    <Link className="hover:text-gray-300 text-gray-400 transition-all text-sm sm:text-base md:text-lg">
                      Contribution Bible
                    </Link>
                    <Link className="hover:text-gray-300 text-gray-400 transition-all text-sm sm:text-base md:text-lg">
                      Add New Movie
                    </Link>
                    <Link className="hover:text-gray-300 text-gray-400 transition-all text-sm sm:text-base md:text-lg">
                      Add New TV Show
                    </Link>
                  </div>
                </div>
                <div className="">
                  <h3 className="text-base sm:text-base lg:text-xl font-semiBold pb-1 lg:pb-2 text-blue-400">
                    COMMUNITY
                  </h3>
                  <div className="flex flex-col font-medium min-w-fit">
                    <Link className="hover:text-gray-300 text-gray-400 transition-all text-sm sm:text-base md:text-lg">
                      Guidelines
                    </Link>
                    <Link className="hover:text-gray-300 text-gray-400 transition-all text-sm sm:text-base md:text-lg">
                      Discussions
                    </Link>
                    <Link className="hover:text-gray-300 text-gray-400 transition-all text-sm sm:text-base md:text-lg">
                      Leaderboard
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright text-xs sm:text-sm text-gray-500 py-2 md:py-3 lg:py-4 text-center bg-[#1b1c37]">
          All rights reserved &#169;Build e363d1b (6447)
        </div>
      </footer>
    </>
  );
}

export default Footer;
