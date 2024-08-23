/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { IoTriangleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import AcademyWinnerCard from "./AcademyWinnerCard";
// assets
import awardSvg from "../assets/awards.svg";
import oscarunic from "../assets/oscarunic.png";

function AwardsCard() {
  const { id } = useParams();
  const peopleUrl = `https://api.themoviedb.org/3/person/${id}?language=en-US`;
  const apiKey = `&api_key=629353605eab6723aee2f62b54183d48`;
  const imgUrl = `https://image.tmdb.org/t/p/original/`;

  const [awards, setAwards] = useState([]);
  // hover effect
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [isMouseOver1, setIsMouseOver1] = useState(false);
  const [isMouseOver2, setIsMouseOver2] = useState(false);
  const [isMouseOver3, setIsMouseOver3] = useState(false);

  const fetcthDetails = async () => {
    const res = await fetch(peopleUrl + apiKey);
    const data = await res.json();
    console.log("now-", data);
    setAwards(data);
  };
  useEffect(() => {
    fetcthDetails();
  }, []);

  // Award year
  const year = new Date().getFullYear();
  const makeAcademyYear = () => {
    if (year) {
      return year - 1928;
    }
  };

  return (
    <>
      {/* navigator */}
      <div className="navigate border-b">
        <div className="contizer">
          <div className="navMain py-1 flex justify-center items-center flex-wrap gap-4 lg:gap-6">
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
                className="dropdown-content z-[1] menu py-2 px-0 shadow border bg-base-100 rounded w-[calc(100%+80px)] min-w-fit"
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
                className="dropdown-content z-[1] menu py-2 px-0 shadow border bg-base-100 rounded w-[calc(100%+80px)] min-w-fit"
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
                className="dropdown-content z-[1] menu py-2 px-0 shadow border bg-base-100 rounded w-[calc(100%+80px)] min-w-fit"
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
                        className="absolute right-[50%] sm:left-[50%] top-[96%]  md:left-[100%] md:top-0 py-2 px-0 shadow-xl bg-base-100 rounded border w-[calc(100%+80px)] min-w-fit"
                      >
                        <div className="text-gray-600 flex flex-col gap-1 w-auto">
                          <Link className="py-1 hover:bg-gray-100 px-4">
                            Overview
                          </Link>
                          <Link className="py-1 hover:bg-gray-100 px-4">
                            General
                          </Link>
                          <Link className="flex justify-between items-center gap-4 px-4 hover:bg-gray-100">
                            <span>
                              <Link className="py-1 ">Content Issue</Link>
                            </span>
                            <span className="inline-block">12</span>
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
                className="dropdown-content z-[1] right-0 sm:right-auto menu py-2 px-0 shadow border bg-base-100 rounded w-[calc(100%+80px)] min-w-fit"
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
      <div className="m-auto bg-gradient-to-br from-[#d5d5d5] from-5% to-[#fff] border-t border-[#d5d5d5]">
        <div className="contizer">
          <div className="py-2 md:py-4 flex items-center gap-5 lg:gap-8">
            <Link className="max-w-[70px]" to={`/PopularPeopleDetails/${id}`}>
              {awards.profile_path ? (
                <img
                  src={imgUrl + awards.profile_path}
                  alt=""
                  className="rounded"
                />
              ) : (
                <div className="min-h-[106px]">
                  <img
                    src="https://placehold.co/70x105"
                    alt=""
                    className="rounded-lg shadow-lg"
                  />
                </div>
              )}
            </Link>
            <div className="title">
              <div className="flex flex-col gap-2">
                <Link
                  to={`/PopularPeopleDetails/${id}`}
                  className="text-xl lg:text-3xl text-black font-bold"
                >
                  {awards.name}
                </Link>
                <Link
                  className="text-blue-400 hover:text-blue-600 font-semibold"
                  to="/Pop0WinnersPage"
                >
                  ⬅ Back to main
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* awards content */}
      <div className="content min-h-[45vh] aspect-auto">
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
            </h3>
            <div className="awarImg flex flex-col md:flex-row md:items-center gap-8">
              <div className="relative">
                <div className="flex items-center gap-5">
                  <img
                    src={oscarunic}
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
                <AcademyWinnerCard
                  imgUrl={imgUrl}
                  awards={awards}
                  id={id}
                  year={year}
                  acyear={makeAcademyYear()}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AwardsCard;
