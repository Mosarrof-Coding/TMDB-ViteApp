/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import {
  BsThreeDots,
  BsBookmarkFill,
  BsHeartFill,
  BsListUl,
  BsStarFill,
} from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
// assets
import loaderGif from "../assets/bigloading.gif";

const MovieCard = ({ movie, imgUrl }) => {
  const {
    id,
    title,
    name,
    first_air_date,
    poster_path,
    release_date,
    vote_average,
  } = movie;

  // togglre-1
  const [isVisible, setIsVisible] = useState(false);
  const visibilityRef = useRef(null); // Create a ref for the visibility toggle
  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };
  // Manage visibility based on clicks outside the component
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        visibilityRef.current &&
        !visibilityRef.current.contains(event.target)
      ) {
        setIsVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // togglre-2 rating
  const [visible, setVisible] = useState(false);
  const ratingBoxRef = useRef(null); // Ref to manage clicks outside the box
  const ratingBoxToggle = () => {
    setVisible((prevVisible) => !prevVisible);
  };
  useEffect(() => {
    const handleRatingClickOutside = (event) => {
      if (
        ratingBoxRef.current &&
        !ratingBoxRef.current.contains(event.target)
      ) {
        setVisible(false);
      }
    };
    document.addEventListener("mousedown", handleRatingClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleRatingClickOutside);
    };
  }, []);

  // user score
  let percent = vote_average ? (vote_average * 10).toFixed(0).slice(0, 2) : "0";
  let progressBaar = parseInt(percent);

  // loading state
  const [loaded, setLoaded] = useState(false);
  const handleLoad = () => {
    setLoaded(true);
  };

  // live rating
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [fillPercentage, setFillPercentage] = useState(0);
  const [starValue, setStarValue] = useState("0");

  const handleMouseMove = (index, event) => {
    const { width, left } = event.target.getBoundingClientRect();
    const mouseX = event.clientX - left;
    const percentage = (mouseX / width) * 100;
    setFillPercentage(percentage);
    setHoveredIndex(index);
    if (index >= 0 && index < 1) {
      return setStarValue("2");
    } else if (index >= 1 && index < 2) {
      return setStarValue("4");
    } else if (index >= 2 && index < 3) {
      return setStarValue("6");
    } else if (index >= 3 && index < 4) {
      return setStarValue("8");
    } else if (index >= 4 && index <= 5) {
      return setStarValue("10");
    }
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
    setFillPercentage(0);
  };

  const rated = (e) => {
    e.preventDefault();
    return toast(() => (
      <div>
        <li className="flex items-center gap-2 text-xl font-bold text-green-500 my-1">
          <span>
            <FaCheckCircle />
          </span>
          <span>Success</span>
        </li>
        <li className="text-nowrap text-xl list-none">
          Your rating has been saved!
          <span className="ml-2 font-bold">{starValue ? starValue : 0}</span>
        </li>
      </div>
    ));
  };

  return (
    <div
      key={id}
      className="movieCard h-full min-h-[305px] border rounded-lg hover:shadow-lg hover:bg-white transition-all duration-500 relative"
    >
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          duration: 5000,
          style: {
            background: "#111800",
            color: "#fff",
            boxShadow: "none",
          },
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
      <div className="relative">
        <div className="">
          {loaded ? (
            <Link to={`/Detailpage/${id}`}>
              {poster_path ? (
                <>
                  <div className="">
                    <img
                      src={imgUrl + poster_path}
                      alt={title}
                      className="rounded-t-lg"
                    />
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
        <div
          className="text-black absolute right-2 top-2"
          ref={visibilityRef} // the arena for refing hidden
        >
          <div className="relative">
            <button
              className="w-6 h-6 bg-gray-400 rounded-full grid place-items-center hover:bg-sky-400 transition-all duration-300"
              onClick={toggleVisibility}
            >
              <BsThreeDots size={18} color="#ffffff" />
            </button>
            {isVisible && (
              <ul className="absolute -right-4 top-full min-w-32 bg-gray-100 z-10 rounded text-xs md:text-sm font-medium flex flex-col">
                <li
                  className="flex gap-2 items-center px-2 py-1 lg:py-2 hover:bg-gradient-to-r from-blue-900
                  to-transparent hover:text-white transition-all duration-300 cursor-pointer rounded-tl"
                >
                  <span className="inline-block">
                    <BsListUl size={14} />
                  </span>
                  <span>Add to list</span>
                </li>
                <hr />
                <li
                  className="flex gap-2 items-center px-2 py-1 lg:py-2 hover:bg-gradient-to-r from-blue-900
                  to-transparent hover:text-white transition-all duration-300 cursor-pointer"
                >
                  <span className="inline-block">
                    <BsHeartFill size={14} />
                  </span>
                  <span>Favorite</span>
                </li>
                <hr />
                <li
                  className="flex gap-2 items-center px-2 py-1 lg:py-2 hover:bg-gradient-to-r from-blue-900
                  to-transparent hover:text-white transition-all duration-300 cursor-pointer"
                >
                  <span className="inline-block">
                    <BsBookmarkFill size={14} />
                  </span>
                  <span>Watchlist</span>
                </li>{" "}
                <hr />
                <li
                  className="flex gap-2 items-center px-2 py-1 lg:py-2 hover:bg-gradient-to-r from-blue-900
                  to-transparent hover:text-white transition-all duration-300 cursor-pointer relative rounded-bl"
                  onClick={ratingBoxToggle} // Toggle visibility on click
                  aria-label="Rate your experience"
                >
                  <span className="inline-block">
                    {starValue > 0 ? (
                      <BsStarFill size={14} color="#FBBF24" />
                    ) : (
                      <BsStarFill size={14} />
                    )}
                  </span>
                  <span>Your rating</span>
                  {visible && (
                    <div
                      ref={ratingBoxRef} // Attach ref to the rating box
                      className="ratBox absolute -left-10 lg:left-0 top-full px-4 py-2 z-10 bg-blue-950 rounded"
                    >
                      <Link
                        className="flex items-center gap-1"
                        onClick={rated}
                        to={`/Detailpage/${id}`}
                      >
                        {Array.from({ length: 5 }).map((_, index) => (
                          <li
                            key={index}
                            onMouseMove={(e) => handleMouseMove(index, e)}
                            onMouseLeave={handleMouseLeave}
                            className="transition-all duration-500"
                            style={{
                              position: "relative",
                              width: "24px",
                              height: "24px",
                              cursor: "pointer",
                            }}
                          >
                            {/* Empty Star */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="24"
                              height="24"
                              fill="none"
                              stroke="#FBBF24"
                              strokeWidth="1"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M12 .587l3.668 7.431L23.56 9.75l-5.676 5.538 1.341 7.813L12 18.84l-7.225 3.761 1.34-7.813L.44 9.75l7.892-1.732L12 .587z" />
                            </svg>

                            {/* Filled Star */}
                            <div
                              style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: `${
                                  index < hoveredIndex
                                    ? 100
                                    : index === hoveredIndex
                                    ? fillPercentage
                                    : 0
                                }%`,
                                height: "100%",
                                overflow: "hidden",
                              }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                fill="#F59E0B"
                                stroke="#FBBF24"
                                strokeWidth="1"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M12 .587l3.668 7.431L23.56 9.75l-5.676 5.538 1.341 7.813L12 18.84l-7.225 3.761 1.34-7.813L.44 9.75l7.892-1.732L12 .587z" />
                              </svg>
                            </div>
                          </li>
                        ))}
                      </Link>
                    </div>
                  )}
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
      <div className="movieTxt z-50 bg-[#ffffffde] w-full pl-1 mt-4 sm:mt-0 sm:py-2">
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
        <div className="ovwerLap absolute left-0 top-0 right-0 bottom-0 bg-black/30 rounded-lg cursor-pointer backdrop-blur-[20px]"></div>
      )}
    </div>
  );
};

export default MovieCard;
