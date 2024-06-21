import logo from "../assets/mov1.png";
import { Link } from "react-router-dom";
import fetchImages from "./Home";
function Header() {
  return (
    <>
      <header className="header">
        <div className="contizer">
          <nav className="flex flex-wrap gap-2 lg:gap-8 py-3 sm:px-4 justify-between">
            <div className="nav1 flex gap-2 lg:gap-6 flex-col lg:flex-row lg:items-center">
              <div className="logo w-[50px] cursor-pointer">
                <Link to={"/"} onClick={() => fetchImages()}>
                  <img src={logo} alt="logo" />
                </Link>
              </div>
              <ul className="flex justify-between flex-wrap sm:gap-6">
                {/* movies link  */}
                <li className="py-3 mx-2 cursor-pointer text-white hover:text-blue-200 font-semibold relative mli prLi">
                  Movies
                  <ul className="navUl navUl1 font-medium">
                    <Link
                      to={"/popular"}
                      className="hover:bg-gray-200 pl-5 py-1"
                    >
                      Popular
                    </Link>
                    <Link
                      to={"/now_playing"}
                      className="hover:bg-gray-200 pl-5 py-1"
                    >
                      Now Playing
                    </Link>
                    <Link
                      to={"/upcoming"}
                      className="hover:bg-gray-200 pl-5 py-1"
                    >
                      Upcoming
                    </Link>
                    <Link
                      to={"/top_rated"}
                      className="hover:bg-gray-200 pl-5 py-1"
                    >
                      Top Rated
                    </Link>
                  </ul>
                </li>
                <li className="py-3 mx-2 cursor-pointer text-white hover:text-blue-200 font-semibold  relative mli prLi1">
                  TV Shows
                  <ul className="navUl font-medium">
                    <Link className="hover:bg-gray-200 pl-5 py-1">Popular</Link>
                    <Link className="hover:bg-gray-200 pl-5 py-1">
                      Airing Today
                    </Link>
                    <Link className="hover:bg-gray-200 pl-5 py-1">On TV</Link>
                    <Link to="/toptv" className="hover:bg-gray-200 pl-5 py-1">
                      Top Rated
                    </Link>
                  </ul>
                </li>
                <li className="py-3 mx-2 cursor-pointer text-white hover:text-blue-200 font-semibold  relative mli prLi2">
                  People
                  <ul className="navUl font-medium">
                    <Link
                      to={"/popularPeople"}
                      className="hover:bg-gray-200 pl-5 py-1"
                    >
                      Popular People
                    </Link>
                  </ul>
                </li>
                {/* more  */}
                <li className="py-3 mx-2 cursor-pointer text-white hover:text-blue-200 font-semibold relative mli prLi3">
                  More
                  <ul className="navUl font-medium">
                    <Link className="hover:bg-gray-200 px-5 py-1">
                      Discussion
                    </Link>
                    <Link className="hover:bg-gray-200 px-5 py-1">
                      Leaderboard
                    </Link>
                    <Link className="hover:bg-gray-200 px-5 py-1">Support</Link>
                    <a href="#" className="hover:bg-gray-200 px-5 py-1">
                      API
                    </a>
                  </ul>
                </li>
              </ul>
            </div>
            <ul className="hidden sm:flex lg:items-center sm:gap-6 text-[16px]">
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
                <span className="text-[12px] font-medium border py-1 px-2 rounded">
                  EN
                </span>
              </li>
              <li>Login</li>
              <li>Join TMBD</li>
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
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
