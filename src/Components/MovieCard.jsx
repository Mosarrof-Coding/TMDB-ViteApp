/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import loaderGif from "../assets/bigloading.gif";
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

export default function MovieCard({ movie, imgUrl }) {
  const {
    id,
    title,
    name,
    first_air_date,
    poster_path,
    release_date,
    vote_average,
  } = movie;

  // togglre-parentUl
  const [isVisible, setIsVisible] = useState(false);
  const visibilityRef = useRef(null);
  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };
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

  // togglre-Rating
  const [visible, setVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [fillPercentage, setFillPercentage] = useState(0);
  const [starValue, setStarValue] = useState("0");
  const ratingBoxRef = useRef(null);
  const ratingBoxToggle = () => setVisible((prevVisible) => !prevVisible);
  useEffect(() => {
    const savedRating = localStorage.getItem(`userRating-${id}`);
    if (savedRating) {
      setStarValue(savedRating);
    }
  }, [id]);
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
  const handleMouseMove = (index, event) => {
    const { width, left } = event.target.getBoundingClientRect();
    const mouseX = event.clientX - left;
    const percentage = (mouseX / width) * 100;
    setFillPercentage(percentage);
    setHoveredIndex(index);
    if (index >= 0 && index < 1) {
      setStarValue("2");
    } else if (index >= 1 && index < 2) {
      setStarValue("4");
    } else if (index >= 2 && index < 3) {
      setStarValue("6");
    } else if (index >= 3 && index < 4) {
      setStarValue("8");
    } else if (index >= 4 && index <= 5) {
      setStarValue("10");
    }
  };
  const handleMouseLeave = () => {
    setHoveredIndex(-1);
    setFillPercentage(0);
  };
  const rated = (e) => {
    e.preventDefault();
    localStorage.setItem(`userRating-${id}`, starValue);

    return toast(() => (
      <div>
        <li className="flex items-center gap-2 font-bold text-green-500 my-1">
          <span>
            <FaCheckCircle size={20} />
          </span>
          <span className="text-base lg:text-xl">Success</span>
        </li>
        <li className="text-nowrap text-sm lg:text-lg list-none">
          Your rating has been saved!
          <span className="ml-2">{starValue ? starValue : 0}</span>
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

  // create list-toggler-4
  const [list, setList] = useState(false);
  const listRef = useRef(null);
  const setListing = () => {
    setList(true);
  };
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

  // Add favorite---post
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
  const [favorite, setFavorite] = useState(false);
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (favorites.includes(id)) {
      setFavorite(true);
    }
  }, [id]);
  const favoritize = () => {
    setFavorite(true);
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (!favorites.includes(id)) {
      favorites.push(id);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  };

  // Add WatchList----post
  const addWatchList = async () => {
    try {
      const response = await axios.post(
        `https://api.themoviedb.org/3/account/20792533/watchlist`,
        {
          media_type: "movie",
          media_id: id,
          watchlist: true,
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
      toast.success("Movie added to watchlist!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to add to watchlist.");
    }
    watchListed();
  };
  const [watch, setWatch] = useState(() => {
    const savedWatch = localStorage.getItem(`watchStatus-${id}`);
    return savedWatch === "true";
  });
  const watchListed = () => {
    setWatch(true);
    localStorage.setItem(`watchStatus-${id}`, true);
  };
  useEffect(() => {
    localStorage.setItem(`watchStatus-${id}`, watch);
  }, [id, watch]);

  // finding my account id
  // useEffect(() => {
  //   const getAccountId = async () => {
  //     const apiKey = "629353605eab6723aee2f62b54183d48"; // Your API key
  //     const sessionId = "6cb9342a31c4dc0a918437b34f7c252074185c12"; // Your session_id

  //     try {
  //       // Get account details using the session ID
  //       const accountResponse = await axios.get(
  //         `https://api.themoviedb.org/3/account?api_key=${apiKey}&session_id=${sessionId}`
  //       );

  //       const accountId = accountResponse.data.id; // Your account_id
  //       console.log("Your Account ID:", accountId); // Log account_id to the console
  //     } catch (error) {
  //       console.error("Error fetching account ID:", error);
  //     }
  //   };

  //   getAccountId(); // Call the function to get the account ID
  // }, []);

  // Function to fetch the created playlists from TMDB
  const [fetchedLists, setFetchedLists] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPlayLists = async () => {
    const account_id = 20792533;
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/account/${account_id}/lists`,
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MjkzNTM2MDVlYWI2NzIzYWVlMmY2MmI1NDE4M2Q0OCIsIm5iZiI6MTcyODMwMTc0MC4xMTA0NTgsInN1YiI6IjY1NmY1N2Q4ODgwNTUxMDEzYTRhMDQyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Nmlzqvsh3ZCVZLMU9orbON6pZByAt0BW0t6AXPHoLL8`,
            accept: "application/json",
          },
          params: {
            session_id: "6cb9342a31c4dc0a918437b34f7c252074185c12",
          },
        }
      );

      if (response.data) {
        const items = response.data.results.map((item) => (
          <li
            key={item.id}
            className="hover:bg-pink-50 text-blue-500 pl-2 py-0.5 rounded"
          >
            {item.name}
          </li>
        ));
        setFetchedLists(items);
      }
    } catch (error) {
      console.error("Error fetching playlists:", error);
    } finally {
      setIsLoading(false); // End loading
    }
  };

  const handleWatchlistClick = () => {
    fetchPlayLists();
  };

  return (
    <div
      key={id}
      className="movieCard h-full border rounded hover:shadow-lg hover:bg-white transition-all duration-500 relative text-sm lg:text-base"
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
            padding: "6px",
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

      {/* user Activity */}
      <div className="relative">
        {/* picture */}
        {loaded ? (
          <Link to={`/Detailpage/${id}`}>
            {poster_path ? (
              <>
                <div className="">
                  <img
                    src={imgUrl + poster_path}
                    alt={title}
                    className="rounded-t lg:rounded-t"
                  />
                </div>
              </>
            ) : (
              <img
                src="https://placehold.co/160x235"
                alt=""
                className="rounded-t lg:rounded-t"
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

        <div className="text-black absolute left-2 top-4" ref={visibilityRef}>
          <div className="relative" ref={addRef}>
            <button
              className="w-6 h-6 bg-gray-400 rounded-full grid place-items-center hover:bg-sky-400 transition-all duration-300"
              onClick={toggleVisibility}
            >
              <BsThreeDots size={18} color="#ffffff" />
            </button>
            {isVisible && (
              <ul
                className="absolute left-0 top-0 min-w-36 bg-gray-100 z-10 rounded text-xs md:text-sm font-medium flex flex-col"
                ref={listRef}
              >
                <li
                  className="flex gap-2 items-center px-2 py-1 lg:py-2 hover:bg-gradient-to-r from-blue-400
  to-transparent transition-all duration-300 rounded-tl relative"
                  onClick={() => {
                    addList();
                    handleWatchlistClick();
                  }}
                  aria-label="addList your experience"
                >
                  <span className="inline-block">
                    {fetchedLists.length > 0 ? (
                      <BsListUl
                        size={14}
                        color="#ff0000"
                        className="drop-shadow-lg"
                      />
                    ) : (
                      <BsListUl size={14} />
                    )}
                  </span>
                  <span className="cursor-pointer">Add to list</span>
                  {/* Add to list */}
                  {add && (
                    <div className="ratBox absolute -left-4 xs:right-0 sm:-left-2 top-[calc(100%+1px)] w-[calc(100%+60px)] p-2 z-10 bg-[#ffc1c9] rounded shadow-xl">
                      <div
                        // to={`Detailpage/${id}`}
                        className="flex items-center gap-1"
                      >
                        <div className="w-full xs:w-44 sm:w-48 md:w-56">
                          <Link
                            to={`create-new-list`}
                            className="flex items-center gap-1.5 font-semibold text-blue-600 hover:text-blue-900 mb-2"
                          >
                            <span className="text-base leading-none mt-[2px]">
                              +
                            </span>
                            <span className="">Create New List</span>
                          </Link>

                          <div className="bg-[#0e1a3d] rounded">
                            <div
                              className="flex items-center p-1 md:p-2 relative"
                              aria-label="setListing your experience"
                            >
                              <button
                                className="w-full text-white text-left"
                                onClick={setListing}
                              >
                                Add to one of your lists...
                              </button>
                              <VscTriangleDown color="white" />
                              {list && (
                                <div className="absolute w-[calc(100%+40px)] -left-2 xs:right-0 sm:-left-2 top-full p-2 bg-white/95 border border-purple-400 rounded shadow-xl">
                                  <div className="flex items-center my-1 border rounded overflow-hidden p-1 lg:p-1.5">
                                    <input
                                      type="text"
                                      name="moss"
                                      id="moss"
                                      placeholder="Add to one of your lists..."
                                      className="w-full focus:outline-none"
                                      onKeyUp={fetchedLists}
                                    />

                                    <CiSearch size={20} />
                                  </div>{" "}
                                  <div className="movie_playlist max-h-[130px] overflow-y-auto">
                                    <h5 className="p-2 bg-gray-100 text-pink-800">
                                      Add to one of your items:
                                    </h5>
                                    {isLoading ? (
                                      <p className="text-yellow-500 mt-4">
                                        Loading playlists...
                                      </p>
                                    ) : fetchedLists.length > 0 ? (
                                      <li className="cursor-pointer my-0.5">
                                        {fetchedLists}
                                      </li>
                                    ) : (
                                      <p className="text-red-500 mt-4">
                                        No playlists available.
                                      </p>
                                    )}
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {add && (
                    <span className="">
                      <IoTriangleSharp
                        size={16}
                        color="#ffc1c9"
                        className="absolute left-2 -bottom-2 lg:-bottom-1 z-20"
                      />
                    </span>
                  )}
                </li>
                <hr />
                <li
                  className="flex gap-2 items-center px-2 py-1 lg:py-2 hover:bg-gradient-to-r from-blue-400
                  to-transparent  transition-all duration-300 cursor-pointer"
                  onClick={addFavorite}
                >
                  <span className="inline-block">
                    {favorite > 0 ? (
                      <BsHeartFill
                        size={14}
                        color="#e4a"
                        className="drop-shadow-lg"
                      />
                    ) : (
                      <BsHeartFill size={14} />
                    )}
                  </span>
                  <span>Favorite</span>
                </li>
                <hr />
                <li
                  className="flex gap-2 items-center px-2 py-1 lg:py-2 hover:bg-gradient-to-r from-blue-400
                  to-transparent  transition-all duration-300 cursor-pointer"
                  onClick={addWatchList}
                >
                  {watch ? (
                    <span className="inline-block">
                      <BsBookmarkFill
                        size={14}
                        color="#6e75ff"
                        className="drop-shadow-lg"
                      />
                    </span>
                  ) : (
                    <span className="inline-block">
                      <BsBookmarkFill size={14} />
                    </span>
                  )}
                  <span>Watchlist</span>
                </li>
                <hr />
                <li
                  className="flex gap-2 items-center px-2 py-1 lg:py-2 hover:bg-gradient-to-r from-blue-400
                  to-transparent  transition-all duration-300 cursor-pointer relative rounded-bl"
                  onClick={ratingBoxToggle}
                  aria-label="Rate your experience"
                >
                  <span className="inline-block">
                    {starValue > 0 ? (
                      <BsStarFill
                        size={14}
                        color="#FBBF24"
                        className="drop-shadow-lg"
                      />
                    ) : (
                      <BsStarFill size={14} className="animate-pulse" />
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
        <div className="ovwerLap absolute left-0 top-0 right-0 bottom-0 bg-white/20 rounded lg:rounded-lg cursor-pointer backdrop-blur-md"></div>
      )}
    </div>
  );
}
