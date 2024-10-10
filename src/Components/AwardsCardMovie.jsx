import { useEffect, useState } from "react";
import { IoTriangleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import AcademyWinnerCard from "./AcademyWinnerCard";
// assets
import awardSvg from "../assets/awards.svg";
import movieOscars from "../assets/oscarunic.png";

function AwardsCardMovie() {
  const { id } = useParams();
  const peopleUrl = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  const apiKey = `&api_key=629353605eab6723aee2f62b54183d48`;
  const imgUrl = `https://image.tmdb.org/t/p/original/`;
  // hover effect
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [isMouseOver1, setIsMouseOver1] = useState(false);
  const [isMouseOver2, setIsMouseOver2] = useState(false);
  const [isMouseOver3, setIsMouseOver3] = useState(false);
  // movie state
  const [awards, setAwards] = useState([]);

  const fetcthDetails = async () => {
    const res = await fetch(peopleUrl + apiKey);
    const data = await res.json();
    // console.log(data);
    setAwards(data);
  };
  useEffect(() => {
    fetcthDetails();
  }, []);

  return (
    <>
      {/* navigator */}
      <div className="navigate border-b">
        <div className="contizer">
          <div className="navMain py-1 flex justify-center items-center flex-wrap gap-3 sm:gap-6">
            {/* overview  */}
            <div className="dropdown dropdown-hover">
              <div
                tabIndex={0}
                role="button"
                className={`bg-white text-black py-2 hover:text-blue-400 drpp  ${
                  isMouseOver ? "text-blue-400" : ""
                }`}
              >
                <span>Overview</span>
                <span className="hidden sm:inline-block rotate-180 ml-4 mb-[2px]">
                  <IoTriangleSharp size={8} />
                </span>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[10] menu py-2 px-0 shadow-md border bg-base-100 rounded w-36 md:w-52"
                onMouseEnter={() => setIsMouseOver(true)}
                onMouseLeave={() => setIsMouseOver(false)}
              >
                <div className="text-gray-600 flex flex-col gap-1 w-auto">
                  <Link className="py-1 hover:bg-gray-200 px-4">Main</Link>
                  <Link className="py-1 hover:bg-gray-200 px-4">
                    Translations
                  </Link>
                </div>
                <div className="text-gray-600 flex flex-col gap-1 pt-6">
                  <Link className="py-1 hover:bg-gray-200 px-4">Changes</Link>
                  <Link className="py-1 hover:bg-gray-200 px-4">Report</Link>
                  <Link className="py-1 hover:bg-gray-200 px-4">Edit</Link>
                </div>
              </ul>
            </div>
            {/* Media  */}
            <div className="dropdown dropdown-hover">
              <div
                tabIndex={0}
                role="button"
                className={`bg-white text-black py-2 hover:text-blue-400 drpp  ${
                  isMouseOver1 ? "text-blue-400" : ""
                }`}
              >
                <span>Media </span>
                <span className="hidden sm:inline-block rotate-180 ml-4 mb-[2px]">
                  <IoTriangleSharp size={8} />
                </span>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu py-2 px-0 shadow-md border bg-base-100 rounded min-w-fit md:w-52"
                onMouseEnter={() => setIsMouseOver1(true)}
                onMouseLeave={() => setIsMouseOver1(false)}
              >
                <div className="text-gray-600 flex flex-col gap-1">
                  <Link className="py-1 hover:bg-gray-200 px-4 flex items-center justify-between gap-6">
                    <span>Profile</span>
                    <span>14</span>
                  </Link>
                </div>
              </ul>
            </div>
            {/* Fandom  */}
            <div className="dropdown dropdown-hover">
              <div
                tabIndex={0}
                role="button"
                className={`bg-white text-black py-2 hover:text-blue-400 drpp  ${
                  isMouseOver2 ? "text-blue-400" : ""
                }`}
              >
                <span>Fandom </span>
                <span className="hidden sm:inline-block rotate-180 ml-4 mb-[2px]">
                  <IoTriangleSharp size={8} />
                </span>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu py-2 px-0 shadow-md border bg-base-100 rounded min-w-fit md:w-52"
                onMouseEnter={() => setIsMouseOver2(true)}
                onMouseLeave={() => setIsMouseOver2(false)}
              >
                <div className="text-gray-600 flex flex-col gap-1">
                  <ul
                    id="myDiscussion"
                    className="py-1 hover:bg-blue-400 hover:text-white px-4 relative"
                  >
                    <div className=" flex items-center justify-between gap-6 ">
                      <span>Discussion</span>
                      <span>
                        <span className="hidden sm:inline-block rotate-90">
                          <IoTriangleSharp size={8} />
                        </span>
                      </span>
                      <ul
                        id="mydis"
                        className="absolute right-[20%] top-[96%] md:left-[100%] md:top-0 py-2 px-0 shadow-xl bg-base-100 rounded border w-36 lg:w-52"
                      >
                        <div className="text-gray-600 flex flex-col gap-1 w-auto">
                          <Link className="py-1 hover:bg-gray-100 px-4">
                            Overview
                          </Link>
                          <Link className="py-1 hover:bg-gray-100 px-4">
                            General
                          </Link>
                          <Link className="flex justify-between items-center gap-4 px-4 hover:bg-gray-100">
                            <span className="py-1">Content Issue</span>
                            <span className="hidden sm:inline-block">12</span>
                          </Link>
                        </div>
                      </ul>
                    </div>
                  </ul>
                </div>
              </ul>
            </div>
            {/* Share  */}
            <div className="dropdown dropdown-hover">
              <div
                tabIndex={0}
                role="button"
                className={`bg-white text-black py-2 hover:text-blue-400 drpp  ${
                  isMouseOver3 ? "text-blue-400" : ""
                }`}
              >
                <span>Share </span>
                <span className="hidden sm:inline-block rotate-180 ml-4 mb-[2px]">
                  <IoTriangleSharp size={8} />
                </span>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu py-2 px-0 shadow-md border bg-base-100 rounded w-36 lg:md:w-52 right-0 lg:right-auto"
                onMouseEnter={() => setIsMouseOver3(true)}
                onMouseLeave={() => setIsMouseOver3(false)}
              >
                <div className="text-gray-600 flex flex-col gap-1">
                  <Link className="py-1 hover:bg-gray-200 px-4 flex items-center justify-between gap-6">
                    <span>Share link</span>
                  </Link>
                  <Link className="py-1 hover:bg-gray-200 px-4 flex items-center justify-between gap-6">
                    <span>Facebook</span>
                  </Link>
                  <Link className="py-1 hover:bg-gray-200 px-4 flex items-center justify-between gap-6">
                    <span>Tweet</span>
                  </Link>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* awards banner */}
      <div className="m-auto bg-gradient-to-br from-[#271515] from-5% to-[#fff] border-t border-[#d5d5d5]">
        <div className="contizer">
          <div className="py-2 lg:py-4 flex items-center gap-4 lg:gap-8">
            <Link to={`/Detailpage/${id}`} className="w-14 lg:w-20">
              <img
                src={imgUrl + awards.poster_path}
                alt=""
                className="rounded"
              />
            </Link>
            <div className="title">
              <div className="flex flex-col gap-2">
                <Link
                  to={`/Detailpage/${id}`}
                  className="text-lg md:text-2xl lg:text-3xl text-black font-bold"
                >
                  {awards.title}
                </Link>
                <Link
                  to={`/Detailpage/${id}`}
                  className="text-blue-400 hover:text-blue-600 font-semibold"
                >
                  ⬅ Back to main
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* awards content */}
      <div className="contizer">
        <div className="awarImg py-4 md:py-8 border-b">
          <div className="img max-w-[260px] lg:max-w-[460px] relative">
            <img src={awardSvg} alt="svg" />
            <p className="text-[#1f0606] pt-2 md:absolute right-8 bottom-0">
              1 Nomination
            </p>
          </div>
        </div>
        <div className="py-6 mb-12 md:py-8">
          <h3 className="text-lg text-black font-semibold mb-4 hidden md:block">
            Academy Awards
          </h3>{" "}
          <div className="awarImg flex flex-col md:flex-row md:items-center gap-5 lg:gap-8">
            <div className="relative">
              <div className="flex items-center gap-3 lg:gap-5">
                <img
                  src={movieOscars}
                  alt=""
                  className="rounded max-w-[80px] md:max-w-[160px]"
                />
                <h3 className="text-lg text-black font-semibold mb-4 md:hidden ">
                  Academy Awards
                </h3>
              </div>
            </div>
            {/* dynamic avatar */}
            <div className="actresAchivent flex gap-6 md:justify-between text-black w-full">
              <AcademyWinnerCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AwardsCardMovie;
