import logo from "../assets/movielogo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="bg-[#202243]">
        <div className="contizer">
          <div className="footMain w-full lg:max-w-[940px] mx-auto py-8 px-2 lg:px-0 text-left">
            <div className="footItem w-full flex flex-col md:flex-row gap-8 lg:gap-12">
              <div className="pt-2 mx-auto">
                <img src={logo} alt="logo" className="w-[100px] lg:w-[120px]" />
                <span className="inline-block bg-white text-blue-700 text-base sm:text-lg md:text-xl font-semibold mt-4 px-3 py-1 rounded-md cursor-pointer whitespace-nowrap">
                  Hi Mosarrof!
                </span>
              </div>
              <div className="w-full md:max-w-[700px]">
                <div className="footTxt flex flex-wrap justify-evenly gap-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semiBold pb-2 text-blue-400">
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
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semiBold pb-2 text-blue-400">
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
                  <div>
                    <h3 className="text-lg sm:text-xl font-semiBold pb-2 text-blue-400">
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
                  <div>
                    <h3 className="text-lg sm:text-xl font-semiBold pb-2 text-blue-400">
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright text-xs sm:text-sm text-gray-500 py-4 text-center bg-[#1b1c37]">
          All rights reserved &#169;Build e363d1b (6447)
        </div>
      </footer>
    </>
  );
}

export default Footer;
