import logo from "../assets/movielogo.png";
import { Link } from "react-router-dom";
import fetchImages from "./Home";
import { useState } from "react";
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openItem, setOpenItem] = useState(null);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="contizer">
          <nav className="flex flex-wrap gap-2 lg:gap-8 py-1 justify-between items-center">
            <div className="flex flex-row-reverse md:flex-row items-center gap-6 lg:gap-12">
              {/* logo  */}
              <div className="logo w-fit cursor-pointer">
                <Link
                  to={"/"}
                  onClick={() => fetchImages()}
                  className="flex items-center"
                >
                  <span className="inline-block pr-8 rounded-[16px] bg-gradient-to-tr from-blue-600 to-green-500 z-50">
                    <img
                      src={logo}
                      alt="logo"
                      className="w-8 sm:w-10 md:w-12"
                    />
                  </span>
                </Link>
              </div>
              {/* pages  */}
              <ul className="hidden md:flex justify-between flex-wrap sm:gap-4">
                {/* movies link  */}
                <li className="py-4 mx-2 cursor-pointer text-white hover:text-blue-200 font-semibold relative mli prLi">
                  Movies
                  <ul className="navUl font-medium border-t-4 border-blue-800">
                    <Link
                      to={"/popular"}
                      className="hover:bg-gray-200 px-3 py-1"
                    >
                      Popular
                    </Link>
                    <Link
                      to={"/now_playing"}
                      className="hover:bg-gray-200 px-3 py-1"
                    >
                      Now Playing
                    </Link>
                    <Link
                      to={"/upcoming"}
                      className="hover:bg-gray-200 px-3 py-1"
                    >
                      Upcoming
                    </Link>
                    <Link
                      to={"/top_rated"}
                      className="hover:bg-gray-200 px-3 py-1"
                    >
                      Top Rated
                    </Link>
                  </ul>
                </li>
                <li className="py-4 mx-2 cursor-pointer text-white hover:text-blue-200 font-semibold  relative mli prLi1">
                  TV Shows
                  <ul className="navUl font-medium border-t-4 border-blue-800">
                    <Link className="hover:bg-gray-200 px-3 py-1">Popular</Link>
                    <Link className="hover:bg-gray-200 px-3 py-1">
                      Airing Today
                    </Link>
                    <Link className="hover:bg-gray-200 px-3 py-1">On TV</Link>
                    <Link to="/toptv" className="hover:bg-gray-200 px-3 py-1">
                      Top Rated
                    </Link>
                  </ul>
                </li>
                <li className="py-4 mx-2 cursor-pointer text-white hover:text-blue-200 font-semibold  relative mli prLi2">
                  People
                  <ul className="navUl font-medium border-t-4 border-blue-800">
                    <Link
                      to={"/popularPeople"}
                      className="hover:bg-gray-200 px-3 py-1"
                    >
                      Popular People
                    </Link>
                  </ul>
                </li>
                {/* more  */}
                <li className="py-4 mx-2 cursor-pointer text-white hover:text-blue-200 font-semibold relative mli prLi3">
                  More
                  <ul className="navUl font-medium border-t-4 border-blue-800">
                    <Link className="hover:bg-gray-200 px-3 py-1">
                      Discussion
                    </Link>
                    <Link className="hover:bg-gray-200 px-3 py-1">
                      Leaderboard
                    </Link>
                    <Link className="hover:bg-gray-200 px-3 py-1">Support</Link>
                    <a href="#" className="hover:bg-gray-200 px-3 py-1">
                      API
                    </a>
                  </ul>
                </li>
              </ul>{" "}
              {/* Menu toggle button */}
              <div className="relative lg:hidden">
                <span
                  className="inline-block rotate-90 font-bold tracking-widest cursor-pointer md:hidden"
                  onClick={toggleMenu}
                >
                  |||
                </span>
                {/* Mobile menu */}
                {isMenuOpen && (
                  <div className="mobileMenu contizer fixed md:hidden left-0 top-0 w-screen z-50 bg-gradient-to-br from-slate-400 to-red-400 py-4 sm:py-7">
                    <ul className="flex flex-col gap-2 xs:gap-3 sm:gap-4">
                      {/* logo  */}
                      <div className="logo w-fit cursor-pointer">
                        <Link to={"/"} className="flex items-center">
                          <span className="inline-block pr-8 rounded-[16px] bg-gradient-to-tr from-blue-600 to-green-500 z-50">
                            <img
                              src={logo}
                              alt="logo"
                              className="w-10 md:w-[50px]"
                            />
                          </span>
                        </Link>
                      </div>
                      {/* Movies link */}
                      <li className="font-semibold relative">
                        <div
                          onClick={() => toggleItem(0)}
                          className="text-blue-200 cursor-pointer"
                        >
                          Movies
                        </div>
                        <ul
                          className={`font-normal flex flex-col gap-1 pt-2 pl-3 border-t-2 ${
                            openItem === 0 ? "block" : "hidden"
                          }`}
                        >
                          <Link
                            to={"/popular"}
                            className="text-white hover:text-gray-300 max-w-fit"
                            onClick={closeMenu}
                          >
                            Popular
                          </Link>
                          <Link
                            to={"/now_playing"}
                            className="text-white hover:text-gray-300 max-w-fit"
                            onClick={closeMenu}
                          >
                            Now Playing
                          </Link>
                          <Link
                            to={"/upcoming"}
                            className="text-white hover:text-gray-300 max-w-fit"
                            onClick={closeMenu}
                          >
                            Upcoming
                          </Link>
                          <Link
                            to={"/top_rated"}
                            className="text-white hover:text-gray-300 max-w-fit"
                            onClick={closeMenu}
                          >
                            Top Rated
                          </Link>
                        </ul>
                      </li>
                      {/* TV Shows link */}
                      <li className="font-semibold relative">
                        <div
                          onClick={() => toggleItem(1)}
                          className=" text-blue-200 cursor-pointer"
                        >
                          TV Shows
                        </div>
                        <ul
                          className={`font-normal flex flex-col gap-1 pt-2 pl-3 border-t-2 ${
                            openItem === 1 ? "block" : "hidden"
                          }`}
                        >
                          <Link
                            className="text-white hover:text-gray-300 max-w-fit"
                            onClick={closeMenu}
                          >
                            Popular
                          </Link>
                          <Link
                            className="text-white hover:text-gray-300 max-w-fit"
                            onClick={closeMenu}
                          >
                            Airing Today
                          </Link>
                          <Link
                            className="text-white hover:text-gray-300 max-w-fit"
                            onClick={closeMenu}
                          >
                            On TV
                          </Link>
                          <Link
                            to="/toptv"
                            className="text-white hover:text-gray-300 max-w-fit"
                            onClick={closeMenu}
                          >
                            Top Rated
                          </Link>
                        </ul>
                      </li>
                      {/* People link */}
                      <li className="font-semibold relative">
                        <div
                          onClick={() => toggleItem(2)}
                          className="text-blue-200 cursor-pointer"
                        >
                          People
                        </div>
                        <ul
                          className={`font-normal flex flex-col gap-1 pt-2 pl-3 border-t-2 ${
                            openItem === 2 ? "block" : "hidden"
                          }`}
                        >
                          <Link
                            to={"/popularPeople"}
                            className="text-white hover:text-gray-300 max-w-fit"
                            onClick={closeMenu}
                          >
                            Popular People
                          </Link>
                        </ul>
                      </li>
                      {/* More link */}
                      <li className="font-semibold relative">
                        <div
                          onClick={() => toggleItem(3)}
                          className="text-blue-200 cursor-pointer"
                        >
                          More
                        </div>
                        <ul
                          className={`font-normal flex flex-col gap-1 pt-2 pl-3 border-t-2 ${
                            openItem === 3 ? "block" : "hidden"
                          }`}
                        >
                          <Link
                            className="text-white hover:text-gray-300 max-w-fit"
                            onClick={closeMenu}
                          >
                            Discussion
                          </Link>
                          <Link
                            className="text-white hover:text-gray-300 max-w-fit"
                            onClick={closeMenu}
                          >
                            Leaderboard
                          </Link>
                          <Link
                            className="text-white hover:text-gray-300 max-w-fit"
                            onClick={closeMenu}
                          >
                            Support
                          </Link>
                          <a
                            href="#"
                            className="text-white hover:text-gray-300 max-w-fit"
                            onClick={closeMenu}
                          >
                            API
                          </a>
                        </ul>
                      </li>
                    </ul>
                    {/* profile */}
                    <ul className="flex flex-col gap-2 xs:gap-3 sm:gap-4 text-[16px] pt-4 sm:pt-6 md:pt-8">
                      <Link
                        className="cursor-pointer max-w-fit"
                        to="/login"
                        onClick={closeMenu}
                      >
                        Login
                      </Link>
                      <Link
                        className="cursor-pointer max-w-fit"
                        to="/signup"
                        onClick={closeMenu}
                      >
                        Join TMBD
                      </Link>
                    </ul>
                    {/* Close button */}
                    <span
                      onClick={closeMenu}
                      className="fixed right-5 top-4 sm:top-7 cursor-pointer text-white hover:text-red-600 text-xl"
                    >
                      Close
                    </span>
                  </div>
                )}
              </div>
            </div>
            {/* accounts */}
            <ul className="md:flex gap-4 text-[16px] hidden">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={4}
                  stroke="currentColor"
                  className="w-[20px] h-[20px] inline-block"
                >
                  <path
                    strokeLinecap="square"
                    strokeLinejoin="square"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </li>
              <li>
                <span className="inline-block text-[12px] font-medium border py-1 px-2 rounded">
                  EN
                </span>
              </li>
              <Link to="/login">Login</Link>
              <Link to="/signup">Join TMBD</Link>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </li>
            </ul>
            <span className="inline-block rotate-90 font-bold tracking-widest cursor-pointer md:hidden">
              |||
            </span>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
