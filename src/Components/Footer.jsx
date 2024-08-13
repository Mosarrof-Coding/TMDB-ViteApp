import logo from "../assets/movielogo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="bg-[#1b1c37] py-8 px-2 lg:px-0 text-left">
        <div className="contizer">
          <div className="footMain max-w-[940px] mx-auto">
            <div className="footItem max-w-[940px] flex flex-col sm:flex-row justify-center gap-8">
              <div className="fLogo min-w-[220px] text-center pt-2">
                <img src={logo} alt="logo" className="max-w-[120px] mx-auto" />
                <span className="inline-block bg-white text-blue-700 text-[18px] font-semibold mt-6 px-3 py-1 rounded-md cursor-pointer">
                  Hi Mosarrof!
                </span>
              </div>
              <div className="max-w-[700px]">
                <div className="footTxt max-w-[700px] flex flex-wrap justify-center gap-4">
                  <div className="flex flex-col gap-1 font-medium w-[160px]">
                    <h3 className="text-lg sm:text-xl font-bold pb-1">
                      THE BASICS
                    </h3>
                    <Link className="text-gray-300 hover:text-gray-400 transition-all text-sm sm:text-base">
                      About TMDB
                    </Link>
                    <Link className="text-gray-300 hover:text-gray-400 transition-all text-sm sm:text-base">
                      Contact Us
                    </Link>
                    <Link className="text-gray-300 hover:text-gray-400 transition-all text-sm sm:text-base">
                      Support Forums
                    </Link>
                    <Link className="text-gray-300 hover:text-gray-400 transition-all text-sm sm:text-base">
                      API
                    </Link>
                    <Link className="text-gray-300 hover:text-gray-400 transition-all text-sm sm:text-base">
                      System Status
                    </Link>
                  </div>
                  <div className="flex flex-col gap-1 font-medium w-[160px]">
                    <h3 className="text-lg sm:text-xl font-bold pb-1">
                      GET INVOLVED
                    </h3>
                    <Link className="text-gray-300 hover:text-gray-400 transition-all text-sm sm:text-base">
                      Contribution Bible
                    </Link>
                    <Link className="text-gray-300 hover:text-gray-400 transition-all text-sm sm:text-base">
                      Add New Movie
                    </Link>
                    <Link className="text-gray-300 hover:text-gray-400 transition-all text-sm sm:text-base">
                      Add New TV Show
                    </Link>
                  </div>
                  <div className="flex flex-col gap-1 font-medium w-[160px]">
                    <h3 className="text-lg sm:text-xl font-bold pb-1">
                      COMMUNITY
                    </h3>
                    <Link className="text-gray-300 hover:text-gray-400 transition-all text-sm sm:text-base">
                      Guidelines
                    </Link>
                    <Link className="text-gray-300 hover:text-gray-400 transition-all text-sm sm:text-base">
                      Discussions
                    </Link>
                    <Link className="text-gray-300 hover:text-gray-400 transition-all text-sm sm:text-base">
                      Leaderboard
                    </Link>
                  </div>
                  <div className="flex flex-col gap-1 font-medium w-[160px]">
                    <h3 className="text-lg sm:text-xl font-bold pb-1">LEGAL</h3>
                    <Link className="text-gray-300 hover:text-gray-400 transition-all text-sm sm:text-base">
                      Terms of Use
                    </Link>
                    <Link className="text-gray-300 hover:text-gray-400 transition-all text-sm sm:text-base">
                      API Terms of Use
                    </Link>
                    <Link className="text-gray-300 hover:text-gray-400 transition-all text-sm sm:text-base">
                      Privacy Policy
                    </Link>
                    <Link className="text-gray-300 hover:text-gray-400 transition-all text-sm sm:text-base">
                      DMCA Policy
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright text-sm text-gray-500 pt-8 text-center">
            All rights reserved &#169;Build e363d1b (6447)
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
