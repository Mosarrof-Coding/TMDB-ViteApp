/* eslint-disable react/no-unescaped-entities */
import logo from "../assets/movielogo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="bg-[#202243]">
        <div className="contizer">
          <div className="footItem w-full py-2 lg:py-6 flex flex-col lg:flex-row justify-between gap-4">
            <div className="max-w-fit">
              <img
                src={logo}
                alt="logo"
                className="w-[50px] sm:w-[60px] md:w-[70px] lg:w-[80px]"
              />
              <p className="pt-1 lg:pt-2 text-sm lg:text-base">
                Don't miss "The Dark Knight," where Batman faces the chaotic
                Joker in a battle for Gotham's soul. Both films offer
                unforgettable action, stunning visuals, and gripping narratives
                that will keep you on the edge of your seat!
              </p>
              <Link
                to=""
                className="inline-block bg-white text-blue-700 text-sm sm:text-base font-semibold mt-2 lg:mt-4 px-3 md:py-[1px] rounded-full cursor-pointer whitespace-nowrap"
              >
                Hi Mosarrof!
              </Link>
            </div>
            <div className="min-w-fit lg:pt-8">
              <div className="footTxt flex flex-wrap gap-6">
                <div>
                  <h3 className="text-base sm:text-base lg:text-xl font-semiBold pb-1 lg:pb-2 text-blue-400">
                    THE BASICS
                  </h3>
                  <div className="flex flex-col font-medium min-w-fit">
                    <Link className="hover:text-gray-300 text-gray-400 transition-all text-sm sm:text-base">
                      About TMDB
                    </Link>
                    <Link className="hover:text-gray-300 text-gray-400 transition-all text-sm sm:text-base">
                      Contact Us
                    </Link>
                    <Link className="hover:text-gray-300 text-gray-400 transition-all text-sm sm:text-base">
                      Support Forums
                    </Link>
                    <Link className="hover:text-gray-300 text-gray-400 transition-all text-sm sm:text-base">
                      API
                    </Link>
                    <Link className="hover:text-gray-300 text-gray-400 transition-all text-sm sm:text-base">
                      System Status
                    </Link>
                  </div>
                </div>{" "}
                <div className="">
                  <h3 className="text-base sm:text-base lg:text-xl font-semiBold pb-1 lg:pb-2 text-blue-400">
                    LEGAL
                  </h3>
                  <div className="flex flex-col font-medium min-w-fit">
                    <Link className="hover:text-gray-300 text-gray-400 transition-all text-sm sm:text-base">
                      Terms of Use
                    </Link>
                    <Link className="hover:text-gray-300 text-gray-400 transition-all text-sm sm:text-base">
                      API Terms of Use
                    </Link>
                    <Link className="hover:text-gray-300 text-gray-400 transition-all text-sm sm:text-base">
                      Privacy Policy
                    </Link>
                    <Link className="hover:text-gray-300 text-gray-400 transition-all text-sm sm:text-base">
                      DMCA Policy
                    </Link>
                  </div>
                </div>
                <div className="">
                  <h3 className="text-base sm:text-base lg:text-xl font-semiBold pb-1 lg:pb-2 text-blue-400">
                    GET INVOLVED
                  </h3>
                  <div className="flex flex-col font-medium min-w-fit">
                    <Link className="hover:text-gray-300 text-gray-400 transition-all text-sm sm:text-base">
                      Contribution Bible
                    </Link>
                    <Link className="hover:text-gray-300 text-gray-400 transition-all text-sm sm:text-base">
                      Add New Movie
                    </Link>
                    <Link className="hover:text-gray-300 text-gray-400 transition-all text-sm sm:text-base">
                      Add New TV Show
                    </Link>
                  </div>
                </div>
                <div className="">
                  <h3 className="text-base sm:text-base lg:text-xl font-semiBold pb-1 lg:pb-2 text-blue-400">
                    COMMUNITY
                  </h3>
                  <div className="flex flex-col font-medium min-w-fit">
                    <Link className="hover:text-gray-300 text-gray-400 transition-all text-sm sm:text-base">
                      Guidelines
                    </Link>
                    <Link className="hover:text-gray-300 text-gray-400 transition-all text-sm sm:text-base">
                      Discussions
                    </Link>
                    <Link className="hover:text-gray-300 text-gray-400 transition-all text-sm sm:text-base">
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
