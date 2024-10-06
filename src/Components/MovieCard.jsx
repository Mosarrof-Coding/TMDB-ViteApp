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
import { IoTriangleSharp } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { VscTriangleDown } from "react-icons/vsc";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

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
  // ul togglre-1
  const [isVisible, setIsVisible] = useState(false);
  const visibilityRef = useRef(null);
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
  const ratingBoxRef = useRef(null);
  const ratingBoxToggle = () => setVisible((prevVisible) => !prevVisible);
  // Manage visibility based on clicks outside the component
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
  // Add-toggler-3
  const [add, setAdd] = useState(false);
  const addRef = useRef(null);
  const addList = () => {
    setAdd(true);
  };
  // Manage visibility based on clicks outside the component
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (addRef.current && !addRef.current.contains(event.target)) {
        setAdd(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  // list-toggler-4
  const [list, setList] = useState(false);
  const listRef = useRef(null);
  const setListing = () => {
    setList(true);
  };
  // Manage visibility based on clicks outside the component
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (listRef.current && !listRef.current.contains(event.target)) {
        setList(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  // user scor
  let percent = vote_average ? (vote_average * 10).toFixed(0).slice(0, 2) : "0";
  let progressBaar = parseInt(percent);
  // loading state
  const [loaded, setLoaded] = useState(false);
  const handleLoad = () => {
    setLoaded(true);
  };

  // Add favorite movie
  const [favorite, setFavorite] = useState(false);
  // Check local storage when the component mounts
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (favorites.includes(id)) {
      setFavorite(true); // Set state if the movie is already favorited
    }
  }, [id]);
  // Function to toggle favorite status
  const favoritize = () => {
    setFavorite(true);
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (!favorites.includes(id)) {
      favorites.push(id); // Add movie ID to favorites
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  };
  const addFavorite = async () => {
    try {
      const response = await axios.post(
        `https://api.themoviedb.org/3/account/20792533/favorite`,
        {
          media_type: "movie",
          media_id: id,
          favorite: true,
        },
        {
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MjkzNTM2MDVlYWI2NzIzYWVlMmY2MmI1NDE4M2Q0OCIsIm5iZiI6MTcyODIwMDYyOC4wMDM5NDcsInN1YiI6IjY1NmY1N2Q4ODgwNTUxMDEzYTRhMDQyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6Ihm8ia8otjxEKvJJ8qn6vxWhzM4OyfnDIF2YXzt2Po",
          },
        }
      );
      console.log(response.data);
      toast.success("Movie added to favorites!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to add to favorites.");
    }
    favoritize();
  };

  return (
    <div
      key={id}
      className="movieCard h-full border rounded-lg hover:shadow-lg hover:bg-white transition-all duration-500 relative"
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

          {/* daisy progress */}
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
        <div className="text-black absolute left-2 top-2" ref={visibilityRef}>
          <div className="relative" ref={addRef}>
            <button
              className="w-6 h-6 bg-gray-400 rounded-full grid place-items-center hover:bg-sky-400 transition-all duration-300"
              onClick={toggleVisibility}
            >
              <BsThreeDots size={18} color="#ffffff" />
            </button>
            {isVisible && (
              <ul
                className="absolute left-2 top-full min-w-32 bg-gray-100 z-10 rounded text-xs md:text-sm font-medium flex flex-col"
                ref={listRef}
              >
                <li
                  className="flex gap-2 items-center px-2 py-1 lg:py-2 hover:bg-gradient-to-r from-blue-900
        to-transparent transition-all duration-300 cursor-pointer rounded-tl relative"
                  onClick={addList}
                  aria-label="addList your experience"
                >
                  <span className="inline-block">
                    <BsListUl size={14} />
                  </span>
                  <span>Add to list</span>
                  {add && (
                    <div className="ratBox absolute left-0 top-[calc(100%+8px)] p-2 z-10 bg-[#57dce3] rounded shadow-xl">
                      <Link
                        // to={`Detailpage/${id}`}
                        className="flex items-center gap-1"
                      >
                        <div className="w-64">
                          <div className="flex items-center gap-2 font-bold text-blue-950 mb-2">
                            <span className="text-base leading-none">+</span>
                            <span className="">Create New List</span>
                          </div>

                          <div className="bg-[#0e1a3d] rounded">
                            <div
                              className="flex items-center p-2 relative"
                              onClick={setListing}
                              aria-label="setListing your experience"
                            >
                              <div type="button" className="w-full text-white">
                                Add to one of your lists...
                              </div>
                              <VscTriangleDown color="white" />
                              {list && (
                                <div className="absolute w-[calc(100%+50px)] left-0 top-full p-2 bg-white rounded shadow-lg">
                                  <div className="flex items-center my-2 border rounded overflow-hidden p-1 lg:p-1.5">
                                    <input
                                      type="text"
                                      name="moss"
                                      id="moss"
                                      placeholder="Add to one of your lists..."
                                      className="w-full focus:outline-none"
                                    />

                                    <CiSearch size={20} />
                                  </div>
                                  <h5 className="p-2 bg-gray-100 font-light">
                                    Add to one of your items:
                                  </h5>
                                  <h4 className="p-2">Moss (4)</h4>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </Link>

                      <IoTriangleSharp
                        size={16}
                        color="#57dce3"
                        className="absolute left-4 -top-3"
                      />
                    </div>
                  )}
                </li>
                <hr />
                <li
                  className="flex gap-2 items-center px-2 py-1 lg:py-2 hover:bg-gradient-to-r from-blue-900
                  to-transparent  transition-all duration-300 cursor-pointer"
                  onClick={addFavorite}
                >
                  <span className="inline-block">
                    {favorite > 0 ? (
                      <BsHeartFill size={14} color="#e4a" />
                    ) : (
                      <BsHeartFill size={14} />
                    )}
                  </span>
                  <span>Favorite</span>
                </li>
                <hr />
                <li
                  className="flex gap-2 items-center px-2 py-1 lg:py-2 hover:bg-gradient-to-r from-blue-900
                  to-transparent  transition-all duration-300 cursor-pointer"
                >
                  <span className="inline-block">
                    <BsBookmarkFill size={14} />
                  </span>
                  <span>Watchlist</span>
                </li>
                <hr />
                <li
                  className="flex gap-2 items-center px-2 py-1 lg:py-2 hover:bg-gradient-to-r from-blue-900
                  to-transparent  transition-all duration-300 cursor-pointer relative rounded-bl"
                  onClick={ratingBoxToggle}
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
                      ref={ratingBoxRef}
                      className="ratBox absolute left-0 top-[calc(100%+8px)] p-2 z-20 bg-[#0e1a3d] rounded shadow-xl"
                    >
                      <Link
                        to={`Detailpage/${id}`}
                        className="flex items-center gap-1"
                        onClick={rated}
                      >
                        {Array.from({ length: 5 }).map((_, index) => (
                          <div
                            key={index}
                            onMouseMove={(e) => handleMouseMove(index, e)}
                            onMouseLeave={handleMouseLeave}
                            className="transition-all duration-500"
                            style={{
                              position: "relative",
                              width: "22px",
                              height: "22px",
                              cursor: "pointer",
                            }}
                          >
                            {/* Empty Star */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="22"
                              height="22"
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
                                width="22"
                                height="22"
                                fill="#F59E0B"
                                stroke="#FBBF24"
                                strokeWidth="1"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M12 .587l3.668 7.431L23.56 9.75l-5.676 5.538 1.341 7.813L12 18.84l-7.225 3.761 1.34-7.813L.44 9.75l7.892-1.732L12 .587z" />
                              </svg>
                            </div>
                          </div>
                        ))}
                      </Link>
                      <IoTriangleSharp
                        size={16}
                        color="#0e1a3d"
                        className="absolute left-4 -top-3"
                      />
                    </div>
                  )}
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
      <div className="movieTxt z-50 w-full pl-1 mt-4 sm:mt-1 sm:py-2">
        <h2 className="text-sm md:text-base font-semibold text-black">
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
        <div className="ovwerLap absolute left-0 top-0 right-0 bottom-0 bg-white/20 rounded-lg cursor-pointer backdrop-blur-md"></div>
      )}
    </div>
  );
};

export default MovieCard;
