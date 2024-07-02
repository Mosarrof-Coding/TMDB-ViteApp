/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import {
  BsThreeDots,
  BsBookmarkFill,
  BsHeartFill,
  BsListUl,
  BsStarFill,
} from "react-icons/bs";
import { useState } from "react";
// assets
import loaderGif from "../assets/bigloading.gif";

const MovieCard = ({ movie, imgUrl }) => {
  const {
    id,
    title,
    name,
    first_air_date,
    poster_path,
    backdrop_path,
    release_date,
    vote_average,
  } = movie;

  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  // user score
  let percent = vote_average
    ? (vote_average * 10).toFixed(0).slice(0, 2)
    : "20";
  let progressBaar = parseInt(percent);

  // loading state
  const [loaded, setLoaded] = useState(false);
  const handleLoad = () => {
    setLoaded(true);
  };

  return (
    <div
      key={id}
      className="movieCard border rounded-lg hover:shadow-lg transition-all duration-300 relative"
      onClick={toggleVisibility}
    >
      <div className="relative">
        <div className="">
          {loaded ? (
            <Link to={`/Detailpage/${id}`}>
              {poster_path || backdrop_path ? (
                <>
                  <div className="hidden sm:block">
                    <img
                      src={imgUrl + poster_path}
                      alt={title}
                      className="rounded-t-lg"
                    />
                  </div>
                  <div className="sm:hidden">
                    <img src={imgUrl + backdrop_path} alt={title} />
                  </div>
                </>
              ) : (
                <img
                  src="https://placehold.co/160x235"
                  alt=""
                  className="rounded-t-lg"
                />
              )}
            </Link>
          ) : (
            <img src={loaderGif} alt="" onLoad={handleLoad} />
          )}

          {/* daisy progress  */}
          <div
            className={`myProgress radial-progress border-4 border-gray-200 text-[10px] font-medium absolute left-2 -bottom-4 ${
              percent >= 70
                ? "text-green-600"
                : percent >= 50
                ? "text-yellow-500"
                : "text-red-600"
            }`}
            style={{ "--value": progressBaar }}
            role="progressbar"
          >
            <p>
              {percent}
              <small>
                <sup>%</sup>
              </small>
            </p>
          </div>
        </div>
        <div className="text-black absolute right-2 top-2">
          <div className="relative">
            <button
              className="w-6 h-6 bg-gray-400 rounded-full grid place-items-center hover:bg-sky-400"
              onClick={toggleVisibility}
            >
              <BsThreeDots size={18} color="#ffffff" />
            </button>
            {isVisible && (
              <ul className="absolute -right-4 top-full min-w-32 bg-white z-10 rounded py-2 text-sm font-medium flex flex-col gap-1 shadow-lg">
                <li className="flex gap-2 items-center px-2 py-1 hover:bg-blue-900 hover:text-white transition-all duration-300 cursor-pointer">
                  <span className="inline-block">
                    <BsListUl size={14} />
                  </span>
                  <span>Add to list</span>
                </li>
                <hr />
                <li className="flex gap-2 items-center px-2 py-1 hover:bg-blue-900 hover:text-white transition-all duration-300 cursor-pointer">
                  <span className="inline-block">
                    <BsHeartFill size={14} />
                  </span>
                  <span>Favorite</span>
                </li>
                <hr />
                <li className="flex gap-2 items-center px-2 py-1 hover:bg-blue-900 hover:text-white transition-all duration-300 cursor-pointer">
                  <span className="inline-block">
                    <BsBookmarkFill size={14} />
                  </span>
                  <span>Watchlist</span>
                </li>{" "}
                <hr />
                <li className="flex gap-2 items-center px-2 py-1 hover:bg-blue-900 hover:text-white transition-all duration-300 cursor-pointer">
                  <span className="inline-block">
                    <BsStarFill size={14} />
                  </span>
                  <span>Your rating</span>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
      <div className="movieTxt z-50 bg-[#ffffffde] w-full  sm:bg-transparent shadow-md sm:shadow-none pl-1 mt-4 sm:mt-0 sm:py-2">
        <h2 className="font-semibold text-black">
          {title?.slice(0, 16) || name?.slice(0, 12)}
        </h2>
        <p className="text-[14px] text-gray-600 hidden md:block pt-1">
          {release_date || first_air_date ? (
            <span>
              {release_date}
              {first_air_date}
            </span>
          ) : (
            <span>Coming Soon</span>
          )}
        </p>
      </div>
      {isVisible && (
        <div className="ovwerLap absolute left-0 top-0 right-0 bottom-0 bg-gray-950 rounded-lg mix-blend-darken cursor-pointer">
          moss
        </div>
      )}
    </div>
  );
};

export default MovieCard;
