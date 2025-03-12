/* eslint-disable react/no-unescaped-entities */
import logo from "../assets/movielogo.png";
import { Link } from "react-router-dom";
import MagneticButton from "../utility/MagneticButton";

function Footer() {
  return (
    <>
      <footer className="bg-[#202243]">
        <div className="contizer max-w-[1280px] mx-auto">
          <div className="footItem w-full py-2 lg:py-6 flex flex-col lg:flex-row justify-between gap-4 sm:gap-8 lg:gap-12 xl:gap-16">
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
              <Link to={`/my-profile`} className="">
                <MagneticButton />
              </Link>
            </div>
            <div className="min-w-fit lg:pt-8">
              <div className="footTxt flex flex-wrap gap-6 lg:gap-12">
                <ul>
                  <h3 className="text-base sm:text-lg lg:text-xl font-semiBold pb-1 lg:pb-2 text-white">
                    The Basics
                  </h3>
                  <div className="flex flex-col min-w-fit lg:my-1 lg:gap-1">
                    <Link
                      to={"/about_us"}
                      className="hover:text-gray-300 text-gray-400 transition-all text-sm sm:text-base"
                    >
                      About TMDB
                    </Link>
                    <Link
                      to={"/contactUs"}
                      className="hover:text-gray-300 text-gray-400 transition-all text-sm sm:text-base"
                    >
                      Contact Us
                    </Link>
                    <Link
                      to={"/support-forums"}
                      className="hover:text-gray-300 text-gray-400 transition-all text-sm sm:text-base"
                    >
                      Support Forums
                    </Link>
                    <Link className="hover:text-gray-300 text-gray-400 transition-all text-sm sm:text-base">
                      API
                    </Link>
                    <Link
                      to={"system_status"}
                      className="hover:text-gray-300 text-gray-400 transition-all text-sm sm:text-base"
                    >
                      System Status
                    </Link>
                  </div>
                </ul>
                <ul>
                  <h3 className="text-base sm:text-lg lg:text-xl font-semiBold pb-1 lg:pb-2 text-white">
                    Legal
                  </h3>
                  <div className="flex flex-col min-w-fit lg:my-1 lg:gap-1">
                    <Link
                      to={"/termsanduse"}
                      className="hover:text-gray-300 text-gray-400 transition-all text-sm sm:text-base"
                    >
                      Terms of Use
                    </Link>
                    <Link className="hover:text-gray-300 text-gray-400 transition-all text-sm sm:text-base">
                      API Terms of Use
                    </Link>
                    <Link
                      to={"/PrivacyPolicy"}
                      className="hover:text-gray-300 text-gray-400 transition-all text-sm sm:text-base"
                    >
                      Privacy Policy
                    </Link>
                    <Link
                      to={"/DmcaPolicy"}
                      className="hover:text-gray-300 text-gray-400 transition-all text-sm sm:text-base"
                    >
                      DMCA Policy
                    </Link>
                  </div>
                </ul>
                <ul>
                  <h3 className="text-base sm:text-lg lg:text-xl font-semiBold pb-1 lg:pb-2 text-white">
                    Get Involved
                  </h3>
                  <div className="flex flex-col min-w-fit lg:my-1 lg:gap-1">
                    <Link
                      to={"/ContributionBible"}
                      className="hover:text-gray-300 text-gray-400 transition-all text-sm sm:text-base"
                    >
                      Contribution Bible
                    </Link>
                    <Link className="hover:text-gray-300 text-gray-400 transition-all text-sm sm:text-base">
                      Add New Movie
                    </Link>
                    <Link className="hover:text-gray-300 text-gray-400 transition-all text-sm sm:text-base">
                      Add New TV Show
                    </Link>
                  </div>
                </ul>
                <ul>
                  <h3 className="text-base sm:text-lg lg:text-xl font-semiBold pb-1 lg:pb-2 text-white">
                    Community
                  </h3>
                  <div className="flex flex-col min-w-fit lg:my-1 lg:gap-1">
                    <Link className="hover:text-gray-300 text-gray-400 transition-all text-sm sm:text-base">
                      Guidelines
                    </Link>
                    <Link className="hover:text-gray-300 text-gray-400 transition-all text-sm sm:text-base">
                      Discussions
                    </Link>
                    <Link
                      to={"/popularity_movies_30days"}
                      className="hover:text-gray-300 text-gray-400 transition-all text-sm sm:text-base"
                    >
                      Leaderboard
                    </Link>
                  </div>
                </ul>
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
