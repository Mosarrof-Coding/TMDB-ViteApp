/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaYoutube,
  FaStar,
  FaBookmark,
  FaHeart,
  FaListUl,
} from "react-icons/fa6";
import { HiOutlineArrowsExpand } from "react-icons/hi";
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { RiFacebookCircleLine, RiTwitterLine } from "react-icons/ri";
import { IoTriangleSharp } from "react-icons/io5";
import { FaPlusCircle } from "react-icons/fa";
import { RxLockClosed, RxCross2 } from "react-icons/rx";
import { GiCheckMark, GiGamepadCross } from "react-icons/gi";
import gifLoding from "../assets/bigloading.gif";

import Review from "./Review";
import CasterLink from "./CasterLink";
import Recommendation from "./Recommendation";
import Video from "./Video";
import Backdrops from "./Backdrops";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// eslint-disable-next-line react/prop-types
function Detailpage() {
  const params = useParams();
  const detailMovieUrl = `https://api.themoviedb.org/3/movie/${params.id}?language=en-US', options`;
  const castUrl = `https://api.themoviedb.org/3/movie/${params.id}/credits?language=en-US%27,%20options`;
  const reviewUrl = `https://api.themoviedb.org/3/movie/${params.id}/reviews?`;
  const apiKey = `&api_key=629353605eab6723aee2f62b54183d48`;
  const imgUrl = `https://image.tmdb.org/t/p/original/`;

  // single use - certification
  const rlsUrl = `https://api.themoviedb.org/3/movie/${params.id}/release_dates?`;

  // Function to fetch release dates for the movie
  const [certifies, setCertifies] = useState([]);
  const fetchReleaseDates = async () => {
    try {
      const response = await fetch(rlsUrl + apiKey);
      const data = await response.json();
      setCertifies(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const [detail, setDetail] = useState([]);
  const movieDetail = async () => {
    try {
      const res = await fetch(detailMovieUrl + apiKey);
      if (!res.ok) {
        throw new Error("Failed to fetch movie details");
      }
      const data = await res.json();
      setDetail(data);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  useEffect(() => {
    fetchReleaseDates();
    movieDetail();
  }, [params.id]);

  // movie duration calculation on runtime
  const runtimeInMinutes = detail.runtime;
  const hours = Math.floor(runtimeInMinutes / 60);
  const minutes = runtimeInMinutes % 60;

  // cast fetch/credits Api
  const [crews, setCrews] = useState([]);
  const [casts, setCasts] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const movieCast = async () => {
    try {
      const res = await fetch(castUrl + apiKey);
      const casts = await res.json();
      const newCast = casts.cast;
      setCrews(casts.crew.slice(0, 6));
      setCasts(newCast);
      // console.log(casts.cast);
      const topContributors = casts.cast.map((contributor, i) => ({
        id: contributor.id,
        name: contributor.name,
        character: contributor.character,
        score: 90 - i * 5,
        profile_path: contributor.profile_path,
      }));

      setCasts(topContributors);
    } catch (error) {
      console.error("Error fetching cast:", error);
    }
  };
  useEffect(() => {
    movieCast();
  }, []);

  const handleShowMore = () => {
    setShowAll(true);
  };

  // keywords Search Api
  const [keyword, setKeywords] = useState([]);
  async function keyWords() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MjkzNTM2MDVlYWI2NzIzYWVlMmY2MmI1NDE4M2Q0OCIsInN1YiI6IjY1NmY1N2Q4ODgwNTUxMDEzYTRhMDQyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2yrG_6wEIgK4kvkPJjBwkRLLhv2sJMA0pUA5DLzkLSg",
      },
    };

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}/keywords`,
        options
      );
      if (!response.ok) throw new Error("Failed to fetch movie keywords");

      const responseData = await response.json();
      setKeywords(responseData.keywords);
    } catch (error) {
      console.error("Error fetching movie keywords:", error);
    }
  }

  useEffect(() => {
    keyWords();
  }, []);

  // fetch Reviews api
  const [review, setReview] = useState([]);
  const [reviewArr, setReviewArr] = useState([]);
  const reviewCount = async () => {
    try {
      const res = await fetch(reviewUrl + apiKey);
      if (!res.ok) {
        throw new Error("Failed to fetch reviews");
      }
      const data = await res.json();
      setReviewArr(data.results);

      const reviewsMap = {};
      data.results.forEach((review) => {
        if (!reviewsMap[review.author]) {
          reviewsMap[review.author] = [];
        }
        reviewsMap[review.author].push(review);
      });
      setReview(reviewsMap);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  useEffect(() => {
    reviewCount();
  }, [reviewUrl, apiKey]);

  // social links
  const linkUrls = `https://api.themoviedb.org/3/movie/${params.id}/external_ids?`;
  const [externalIds, setExternalIds] = useState([]);
  const fetchLinks = async () => {
    try {
      const res = await fetch(linkUrls + apiKey);
      const dataLink = await res.json();
      // console.log(dataLink);
      setExternalIds(dataLink);
    } catch (error) {
      console.error("Error fetching external IDs:", error);
    }
  };
  useEffect(() => {
    fetchLinks();
  }, [params.id]);

  // user score
  let percent = detail.vote_average
    ? (detail.vote_average * 10).toFixed(0).slice(0, 2)
    : "20";
  let progressBaar = parseInt(percent);

  // trailer
  const [showVideo, setShowVideo] = useState(false);

  // hover effect
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [isMouseOver1, setIsMouseOver1] = useState(false);
  const [isMouseOver2, setIsMouseOver2] = useState(false);
  const [isMouseOver3, setIsMouseOver3] = useState(false);

  // last certification as par country
  const countryCode = "US";
  const countryData = certifies?.find(
    (certify) => certify.iso_3166_1 === countryCode
  );

  let lastCertification;
  if (countryData) {
    const lastRelease =
      countryData.release_dates[countryData.release_dates.length - 1];
    lastCertification = lastRelease ? lastRelease.certification : "-";
  } else {
    lastCertification = "-";
  }

  // video portion
  const vidUrls = `https://api.themoviedb.org/3/movie/${params.id}/videos?language=en-US%27,%20options`;

  const [videos, setVideos] = useState([]);
  const videoFetch = async () => {
    try {
      const res = await fetch(vidUrls + apiKey);
      if (!res.ok) {
        throw new Error("Failed to fetch videos");
      }
      const data = await res.json();
      // console.log(data.results.length);
      setVideos(data.results);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  // poster
  const [posters, setPosters] = useState([]);
  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${params.id}?${apiKey}&append_to_response=images`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch movie details");
        }
        const data = await response.json();
        const posters = data.images.posters;
        setPosters(posters);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [params.id]);

  // backdrops
  const [backdrops, setBackdrops] = useState([]);
  const backDrops = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MjkzNTM2MDVlYWI2NzIzYWVlMmY2MmI1NDE4M2Q0OCIsInN1YiI6IjY1NmY1N2Q4ODgwNTUxMDEzYTRhMDQyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2yrG_6wEIgK4kvkPJjBwkRLLhv2sJMA0pUA5DLzkLSg",
      },
    };

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}/images`,
        options
      );
      if (!response.ok) {
        throw new Error("Failed to fetch backdrops");
      }
      const responseData = await response.json();
      setBackdrops(responseData.backdrops);
    } catch (error) {
      console.error("Error fetching backdrops:", error);
    }
  };

  useEffect(() => {
    videoFetch();
    backDrops();
  }, [params.id]);

  // media part control
  const [activeTab, setActiveTab] = useState("mostPopular");
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  // popup toggle
  const [fixed, setFixed] = useState(false);
  const handleFixed = () => {
    setFixed(!fixed);
  };

  // img load
  const [img, setImg] = useState(false);
  const imgLoad = () => {
    setImg(true);
  };
  return (
    <>
      <section className="">
        {/* navigate  */}
        <div className="navigate">
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
                  className="dropdown-content z-[1] menu py-2 px-0 shadow border bg-base-100 rounded min-w-max md:w-52"
                  onMouseEnter={() => setIsMouseOver(true)}
                  onMouseLeave={() => setIsMouseOver(false)}
                >
                  <div className="text-gray-600 flex flex-col gap-1 w-auto">
                    <Link className="py-1 hover:bg-gray-200 px-4">Main</Link>
                    <Link
                      to={`/movie/${params.id}/alternativeTitle`}
                      className="py-1 hover:bg-gray-200 px-4"
                    >
                      Alternative Titles
                    </Link>
                    <Link
                      to={`/movie/${params.id}/full-cast-and-crew`}
                      className="py-1 hover:bg-gray-200 px-4"
                    >
                      Cast & Crew
                    </Link>
                    <Link
                      to={`/movie/${params.id}/releaseDate`}
                      className="py-1 hover:bg-gray-200 px-4"
                    >
                      Release Date
                    </Link>
                    <Link className="py-1 hover:bg-gray-200 px-4">Seasons</Link>
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
                  className="dropdown-content z-[1] menu py-2 px-0 shadow border bg-base-100 rounded min-w-fit md:w-52"
                  onMouseEnter={() => setIsMouseOver1(true)}
                  onMouseLeave={() => setIsMouseOver1(false)}
                >
                  <div className="text-gray-600 flex flex-col gap-1">
                    <Link
                      to={`/movie/${params.id}/movieBackdrops`}
                      className="py-1 hover:bg-gray-200 px-4 flex items-center justify-between gap-6"
                    >
                      <span>Backdrops</span>
                      <span>{backdrops.length}</span>
                    </Link>
                    <Link
                      to={`/movie/${params.id}/logos`}
                      className="py-1 hover:bg-gray-200 px-4 flex items-center justify-between gap-6"
                    >
                      <span>Logos</span>
                      <span>length</span>
                    </Link>
                    <Link
                      to={`/movie/${params.id}/moviePosters`}
                      className="py-1 hover:bg-gray-200 px-4 flex items-center justify-between gap-6"
                    >
                      <span>Poster</span>
                      <span>{posters.length}</span>
                    </Link>
                    <Link
                      to={`/movie/${params.id}/videos`}
                      className="py-1 hover:bg-gray-200 px-4 flex items-center justify-between gap-6"
                    >
                      <span>Videos</span>
                      <span className="flex items-center gap-2">
                        <span>{videos.length}</span>
                        <span className="hidden sm:inline-block rotate-90">
                          <IoTriangleSharp size={8} />
                        </span>
                      </span>
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
                  className="dropdown-content z-[1] menu py-2 px-0 shadow border bg-base-100 rounded min-w-fit md:w-52"
                  onMouseEnter={() => setIsMouseOver2(true)}
                  onMouseLeave={() => setIsMouseOver2(false)}
                >
                  <div className="text-gray-600 flex flex-col gap-1">
                    <Link className="py-1 hover:bg-gray-200 px-4 flex items-center justify-between gap-6">
                      <span>Videos</span>
                      <span>
                        <span className="hidden sm:inline-block rotate-90">
                          <IoTriangleSharp size={8} />
                        </span>
                      </span>
                    </Link>
                    <Link className="py-1 hover:bg-gray-200 px-4 flex items-center justify-between gap-6">
                      <span>Reviews</span>
                    </Link>
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
                  <span>Share</span>
                  <span className="hidden sm:inline-block rotate-180 ml-4 mb-[2px]">
                    <IoTriangleSharp size={8} />
                  </span>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu py-2 px-0 shadow border bg-base-100 rounded min-w-fit md:w-52"
                  onMouseEnter={() => setIsMouseOver3(true)}
                  onMouseLeave={() => setIsMouseOver3(false)}
                >
                  <div className="text-gray-600 flex flex-col gap-1">
                    <Link className="py-1 hover:bg-gray-200 px-1 sm:px-4 flex items-center justify-between gap-6">
                      <span>Share link</span>
                    </Link>
                    <Link className="py-1 hover:bg-gray-200 px-1 sm:px-4 flex items-center justify-between gap-6">
                      <span>Facebook</span>
                    </Link>
                    <Link className="py-1 hover:bg-gray-200 px-1 sm:px-4 flex items-center justify-between gap-6">
                      <span>Tweet</span>
                    </Link>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* banner  */}
        <div
          className={`relative detailBox bg-gradient-to-r from-[#1a1437f4] from-10% via-[#00000089] via-50% to-[#1a1437] to-100% bg-cover overflow-hidden`}
        >
          {/* background img  */}
          <div className="absolute left-0 top-0 right-0 bottom-0 xl:bottom-auto z-[-1] w-full">
            {detail.backdrop_path ? (
              <div className="w-full h-full">
                <img
                  src={imgUrl + detail.backdrop_path}
                  alt={detail.title}
                  className="w-full h-full"
                />
              </div>
            ) : (
              <div className="w-full h-full bg-red-600"></div>
            )}
          </div>
          {/* cntent  */}
          <div className="max-w-[1530px] mx-auto">
            <div className="dpWrapper grid-flow-col sm:grid grid-cols-12 py-5">
              {/* detailImg  */}
              <div className="col-span-6 lg:col-span-3 px-2 xxl:px-0">
                <div
                  className="dImage rounded-xl overflow-hidden relative transition-all duration-1000 cursor-pointer"
                  onClick={handleFixed}
                >
                  {detail.poster_path ? (
                    <div className="object-cover overflow-hidden">
                      <img
                        src={imgUrl + detail.poster_path}
                        alt={detail.title}
                        className="rounded-lg"
                      />
                    </div>
                  ) : (
                    <div className="">
                      <img src={"https://placehold.co/400x600"} alt="" />
                    </div>
                  )}
                  <div className="xpnd opacity-0 invisible absolute bg-[#000000b3] backdrop-blur-[30px] left-0 top-0 right-0 bottom-0 grid place-items-center touch-none pointer-events-none">
                    <span className="flex gap-2 items-center text-xl">
                      <HiOutlineArrowsExpand color="white" />
                      Expand
                    </span>
                  </div>
                </div>
              </div>
              {/* detailText */}
              <div className="detailItem col-span-6 lg:col-span-9 pt-6 sm:pt-0 pl-2 sm:pl-4 lg:pl-8 xs:absolute left-0 top-0 right-0 bottom-0 sm:static bg-[#000000c2] sm:bg-inherit pr-2 xxl:pr-0">
                <h3 className="text-3xl font-bold text-white">
                  {detail.title}
                </h3>
                <h4 className="productionCountry my-1 text-[#e7f739] text-lg">
                  {detail.production_countries > "" ? (
                    <div>
                      Production Country: {detail.production_countries[0].name}
                    </div>
                  ) : (
                    <div>no Production Countries found</div>
                  )}
                </h4>
                <h4>id: {detail.id ? detail.id : "0"}</h4>
                <ul className="flex flex-wrap gap-3 py-1 items-center">
                  {/* so critical  */}
                  <li className="border px-1 rounded">
                    {lastCertification ? lastCertification : ""}
                  </li>
                  <li className="flex items-center">
                    <span className="release_date">
                      {detail.release_date ? detail.release_date : ""}
                    </span>
                    {detail.production_companies > [] || "" || null ? (
                      <span className="">
                        ({detail.production_companies[0].origin_country})
                      </span>
                    ) : (
                      <span>(-)</span>
                    )}
                  </li>
                  {/* issued  */}
                  <li className="flex gap-2">
                    <span>▪</span>
                    {detail.genres ? (
                      <div className="flex flex-wrap gap-1">
                        {detail.genres.map((gnr, index) => (
                          <div key={gnr.id} className="w-fit">
                            <span className="hover:text-gray-400 cursor-pointer">
                              {index === detail.genres.length - 1
                                ? gnr.name
                                : gnr.name + ", "}
                            </span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div>not found</div>
                    )}
                  </li>
                  <li>
                    ▪{" "}
                    <span>
                      <span>{hours ? hours : "0"}h-</span>
                      <span>{minutes ? minutes : "0"}m</span>
                    </span>
                  </li>
                </ul>
                {/* user activities  */}
                <div className="py-4 flex items-center flex-wrap gap-4">
                  {/* daisy progress  */}
                  <div className="flex items-center gap-2 mix-blend-normal">
                    <div
                      className={`noshadow radial-progress text-black border-white border-4 font-medium text-xl ${
                        percent > 70
                          ? "text-green-600"
                          : percent >= 50
                          ? "text-yellow-500"
                          : "text-red-600"
                      }`}
                      style={{ "--value": progressBaar }}
                      role="progressbar"
                    >
                      <div>
                        {percent}
                        <sup className="text-[11px]">%</sup>
                      </div>
                    </div>
                    <span className="">
                      User <br />
                      Score
                    </span>
                  </div>
                  {/* sIcon */}
                  <ul className="sIcin flex flex-wrap gap-2 items-center">
                    <div className="md:tooltip" data-tip="Add to list">
                      <li className="btn w-12 h-12 bg-black border-none rounded-full grid place-items-center">
                        <FaListUl size={16} color="#43a" />
                      </li>
                    </div>
                    <div className="md:tooltip" data-tip="Mark as favorite">
                      <li className="btn w-12 h-12 bg-black border-none rounded-full grid place-items-center">
                        <FaHeart size={18} color="#43a" />
                      </li>
                    </div>
                    <div
                      className="md:tooltip"
                      data-tip="Add to your watchlist"
                    >
                      <li className="btn w-12 h-12 bg-black border-none rounded-full grid place-items-center">
                        <FaBookmark size={16} color="#43a" />
                      </li>
                    </div>
                    <div className="md:tooltip" data-tip="Rate It!">
                      <li className="btn w-12 h-12 bg-black border-none rounded-full grid place-items-center">
                        <FaStar size={18} color="#43a" />
                      </li>
                    </div>
                    {/* trailer */}
                    <div
                      className="md:tooltip "
                      data-tip="Play Trailer"
                      onClick={() => setShowVideo(true)}
                    >
                      <li className="btn w-12 h-12 bg-black border-none rounded-full grid place-items-center">
                        <FaYoutube size={24} color="#43a" />
                      </li>
                    </div>
                    <div>
                      {showVideo && (
                        <div className="absolute w-full letf-0 top-0 right-0 bottom-0 z-[99]">
                          <div
                            className="closeVid w-full text-center py-2 bg-black text-white cursor-pointer"
                            onClick={() => setShowVideo(false)}
                          >
                            Close
                          </div>
                          {
                            <iframe
                              className="w-full aspect-[16/9]"
                              src={detail.homepage}
                              title="Embedded Content"
                              allowFullScreen
                            />
                          }
                        </div>
                      )}
                    </div>
                  </ul>
                </div>
                <h5 className="text-lg text-sky-500 italic">
                  {detail.tagline ? (
                    <span>{detail.tagline}</span>
                  ) : (
                    <span>no tagline</span>
                  )}
                </h5>
                <h4 className="text-xl text-gray-300">Overview</h4>
                <p className="text-gray-300">
                  {detail.overview != "" ? (
                    <span>{detail.overview}</span>
                  ) : (
                    <span>no overvoew found!</span>
                  )}
                </p>
                {/* crew */}
                <ul className="author py-8 ">
                  <li className="min-w-280px">
                    <div className="flex flex-wrap lg:grid grid-cols-12 gap-6">
                      {crews?.map((crew) => (
                        <div key={crew.id} className="col-span-4 py-1">
                          <Link
                            className="inline-block text-md font-semibold hover:text-gray-400 transition-all"
                            to={`/PopularPeopleDetails/${crew.id}`}
                          >
                            {crew.name}
                          </Link>
                          <small className="block py-1">{crew.job}</small>
                        </div>
                      ))}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* popupBox  */}
            {fixed && (
              <div className="popupBox text-black fixed left-0 top-0 right-0 bottom-0 bg-[#000000a1] z-[2] grid place-items-center">
                <div className="relative">
                  {/* popupContent */}
                  <div className="popupContent max-w-[830px] px-[15px]">
                    <Swiper
                      className="w-full overflow-hidden bg-white rounded-lg p-2 relative"
                      modules={[Navigation, Pagination, Scrollbar, A11y]}
                      spaceBetween={8}
                      slidesPerView={1}
                      navigation
                    >
                      {posters.map((pos) => (
                        <SwiperSlide key={pos.file_path} className="w-full">
                          <div className="w-full flex gap-4 ">
                            <div className="popupImg w-[60%] grid place-items-center">
                              {img ? (
                                <img
                                  src={imgUrl + pos?.file_path}
                                  alt=""
                                  className="rounded-lg"
                                />
                              ) : (
                                <img
                                  className=""
                                  src={gifLoding}
                                  alt=""
                                  onLoad={imgLoad}
                                />
                              )}
                            </div>
                            <div className="popupInfo w-[40%] mt-auto pt-16">
                              <div className="py-4 px-3 flex justify-between gap-2 items-center w-full">
                                <span className="cursor-pointer">
                                  <BiSolidDislike />
                                </span>
                                <span className="cursor-pointer">
                                  <BiSolidLike />
                                </span>
                              </div>
                              <div className="text-gray-600 p-2 flex justify-between gap-2 items-center w-full">
                                <span>Info</span>
                                <span>
                                  <RxLockClosed />
                                </span>
                              </div>
                              <div className="p-2 border-t border-b w-full flex flex-col gap-4">
                                <h4 className="flex gap-2 items-center">
                                  <span className="inline-block">Primary</span>
                                  <span className="inline-block">
                                    <GiGamepadCross size={12} />
                                  </span>
                                </h4>
                                <h3 className="text-black pb-2 font-light">
                                  Added By:
                                  <br /> <span className="font-bold">Moss</span>
                                </h3>
                                <div className="text-black">
                                  <h6 className="text-gray-800 text-sm font-light">
                                    Size
                                  </h6>
                                  <div className="flex items-center gap-1 mb-2">
                                    <span> {pos.height}</span>
                                    <span>
                                      <RxCross2 />
                                    </span>
                                    <span>{pos.height}</span>
                                    <span className="font-bold">
                                      <GiCheckMark size={12} />
                                    </span>
                                  </div>
                                </div>
                                <div className="mb-6">
                                  <h4 className="text-gray-800 text-sm font-light py-2">
                                    Language
                                  </h4>
                                  <div className="bg-gray-200 rounded p-2">
                                    <select
                                      name=""
                                      id=""
                                      className="text-black w-full bg-transparent rounded"
                                    >
                                      <option value="moss">Moss</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div className="p-2 mb-20 first-line:Tagged flex justify-between items-center gap-4">
                                <h5>Tagged People</h5>
                                <FaPlusCircle />
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                  <span
                    className="absolute right-8 top-4 z-[7] cursor-pointer hover:text-red-600"
                    onClick={handleFixed}
                  >
                    <RxCross2 size={20} />
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* Top Billed Cast/credit Api  */}
        <div className="contizer">
          <div className="castBox xl:px-6 pb-4 flex flex-col md:grid grid-cols-12 gap-8 py-12">
            {/* part-A  */}
            <div className="avater col-span-8 xl:col-span-9">
              <h3 className="topcast text-2xl font-semibold text-gray-700 pb-2">
                Top Billed Cast
              </h3>
              {/* Cast  */}
              <div>
                {/* cast thumbnile  */}
                <div className="relative">
                  <div className="catsWarpper py-1 flex gap-2 overflow-x-auto">
                    <span className="w-24 bg-gradient-to-l from-white absolute right-0 top-0 bottom-[20px] pointer-events-none touch-none"></span>
                    {casts?.map((caster, index) => (
                      <div
                        key={caster.id}
                        className="border hover:shadow-md rounded-md max-w-[140px] min-w-[140px] "
                        style={{
                          display: index > 8 && !showAll ? "none" : "block",
                        }}
                      >
                        <CasterLink
                          key={caster.id}
                          caster={caster}
                          imgUrl={imgUrl}
                        />
                        <div className="txt py-2 pl-2">
                          <h2 className="text-black text-sm font-medium">
                            {caster.name}
                          </h2>
                          <small className="text-gray-500 italic">
                            {caster.character}
                          </small>
                        </div>
                      </div>
                    ))}
                    {casts.length > 9 && (
                      <div className="min-w-fit px-6 text-black mt-auto mb-auto cursor-pointer">
                        {casts.length > 9 && !showAll && (
                          <h2 className="min-w-fit text-black mt-auto mb-auto cursor-pointer">
                            <button
                              onClick={handleShowMore}
                              className="font-semibold font-lg"
                            >
                              Show More...
                            </button>
                          </h2>
                        )}
                      </div>
                    )}
                  </div>
                </div>
                {/* fullCastAndcrew button  */}
                <div className={`fullCastAndcrew py-5`}>
                  <Link
                    className="topcast text-lg font-medium text-gray-700 hover:text-gray-400 cursor-pointer pb-2"
                    to={`/movie/${params.id}/full-cast-and-crew`}
                  >
                    Full Cast & Crew
                  </Link>
                </div>
              </div>
              <hr />
              {/* Social + reviews */}
              <div className="mediaEtc py-5">
                <div className="socialPath flex items-end flex-wrap gap-8">
                  <h3 className="topcast text-2xl font-semibold text-gray-700 pr-8">
                    Social
                  </h3>
                  <span>
                    <Link
                      className="text-gray-700 rBtn active"
                      onClick={(e) => {
                        e.preventDefault();
                        const reviewMain =
                          document.querySelector(".reviewMain");
                        const discussion =
                          document.querySelector(".discussion");
                        const rBtn = document.querySelector(".rBtn");
                        const dBtn = document.querySelector(".dBtn");
                        {
                          reviewMain.style.display = "block";
                          discussion.style.display = "none";
                          dBtn.classList.remove("active");
                          rBtn.classList.add("active");
                        }
                      }}
                    >
                      Reviews{" "}
                      {reviewArr ? (
                        <span>{reviewArr.length}</span>
                      ) : (
                        <span>(-)</span>
                      )}
                    </Link>
                  </span>
                  <span>
                    <Link
                      className="text-gray-700 dBtn"
                      onClick={(e) => {
                        e.preventDefault();
                        const reviewMain =
                          document.querySelector(".reviewMain");
                        const discussion =
                          document.querySelector(".discussion");
                        const dBtn = document.querySelector(".dBtn");
                        const rBtn = document.querySelector(".rBtn");
                        {
                          reviewMain.style.display = "none";
                          discussion.style.display = "block";
                          dBtn.classList.add("active");
                          rBtn.classList.remove("active");
                        }
                      }}
                    >
                      Discussion 0
                    </Link>
                  </span>
                </div>
                {/* Review  */}
                <div className="reviewMain block ">
                  <div className="reviewBox py-2 mt-4">
                    {Object.keys(review)?.map((author, i) => (
                      <div key={author} className="">
                        {review[author].map(
                          (review) =>
                            i === 0 && (
                              <Review key={review.id} review={review} />
                            )
                        )}
                      </div>
                    ))}
                  </div>
                  {/* Read All Reviews  */}
                  <div className="fullCastAndcrew pt-3">
                    <Link
                      className="topcast text-lg font-medium text-gray-700 hover:text-gray-400 cursor-pointer pb-2"
                      to={`/movie/${params.id}/full-review`}
                    >
                      Read All Reviews
                    </Link>
                  </div>
                </div>
                {/* Discussion  */}
                <div className="discussion hidden">
                  <div className="dynDisc py-2 mt-4 border p-2">
                    <p className="text-red-400">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Debitis repudiandae quam recusandae minus optio labore
                      saepe nemo facilis aliquid accusamus!
                    </p>
                  </div>
                  {/* Read All discussion  */}
                  <div className="fullCastAndcrew pt-3">
                    <Link
                      className="topcast text-lg font-medium text-gray-700 hover:text-gray-400 cursor-pointer pb-2"
                      // to={`/movie/${params.id}/full-review`}
                    >
                      Go to Discussions
                    </Link>
                  </div>
                </div>
              </div>
              <hr />
              {/* Media part */}
              <div className="Media py-5">
                <div className="socialPath flex items-end flex-wrap gap-3 lg:gap-8">
                  <h3 className="topcast text-2xl font-semibold text-gray-700 pr-8">
                    Media
                  </h3>
                  <Link
                    className={`text-gray-700 ${
                      activeTab === "mostPopular" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("mostPopular")}
                    style={{
                      borderBottom:
                        activeTab === "mostPopular" ? "4px solid #333" : "none",
                    }}
                  >
                    Most Popular
                  </Link>
                  <Link
                    className={`text-gray-700 ${
                      activeTab === "videos" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("videos")}
                    style={{
                      borderBottom:
                        activeTab === "videos" ? "4px solid #333" : "none",
                    }}
                  >
                    Videos{" "}
                    <span>
                      {videos.length ? (
                        <span>{videos.length}</span>
                      ) : (
                        <span className="">0</span>
                      )}
                    </span>
                  </Link>
                  <Link
                    className={`text-gray-700 ${
                      activeTab === "backdrops" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("backdrops")}
                    style={{
                      borderBottom:
                        activeTab === "backdrops" ? "4px solid #333" : "none",
                    }}
                  >
                    Backdrops <span>{backdrops.length}</span>
                  </Link>
                  <Link
                    className={`text-gray-700 ${
                      activeTab === "posters" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("posters")}
                    style={{
                      borderBottom:
                        activeTab === "posters" ? "4px solid #333" : "none",
                    }}
                  >
                    Posters <span>{posters.length}</span>
                  </Link>
                </div>
                <div className="py-4 mb-4">
                  {/* Most Popular */}
                  {activeTab === "mostPopular" && (
                    <div className="my-5 flex overflow-x-auto border p-2">
                      <p className="text-red-400">
                        <strong>Most Popular Video: </strong>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Earum et quibusdam excepturi laborum sed cumque ullam
                        est, laboriosam magnam aspernatur at mollitia deleniti
                        omnis minus totam voluptates libero cupiditate
                        reprehenderit consectetur exercitationem quia debitis!
                        Natus laboriosam facilis ab voluptatibus in dolores
                        sapiente quaerat, deleniti recusandae adipisci non
                        ratione nesciunt modi porro eveniet reiciendis ut nulla
                        atque eius, reprehenderit
                      </p>
                    </div>
                  )}
                  {/* video  */}
                  {activeTab === "videos" && (
                    <div className="my-5 flex overflow-x-auto w-full">
                      {videos.map((video, index) => (
                        <div
                          key={index}
                          className="block min-w-full xl:min-w-[50%] aspect-[16/9] xl:w-auto"
                        >
                          <Video video={video} img={img} imgLoad={imgLoad} />
                        </div>
                      ))}
                    </div>
                  )}
                  {/* backdrops  */}
                  {activeTab === "backdrops" && (
                    <div className="my-5 flex overflow-x-auto relative">
                      {backdrops.map((backdrop) => (
                        <div
                          key={backdrop.file_path}
                          className="min-w-[300px] max-w-[320px]"
                        >
                          <Backdrops
                            key={backdrop}
                            backdrop={backdrop}
                            imgUrl={imgUrl}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                  {/* posters  */}
                  {activeTab === "posters" && (
                    <div className="flex overflow-x-auto ">
                      {posters.map((posterUrl) => (
                        <div
                          key={posterUrl.file_path}
                          className="min-w-[160px] max-w-[200px] bg-black grid place-items-center relative"
                        >
                          {img ? (
                            <img
                              src={imgUrl + posterUrl.file_path}
                              alt=""
                              className=""
                            />
                          ) : (
                            <img src={gifLoding} onLoad={imgLoad} />
                          )}
                          <div className="absolute left-0 top-0 right-0 bottom-0 touch-none pointer-events-none bg-gradient-to-r from-[#0000007e] via-[#341c8b00] 20% to-[#ffffff3b]"></div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <hr />
              </div>
              {/* Recommendations */}
              <div className="Recommendations">
                <h3 className="topcast text-2xl font-semibold mb-2 text-black">
                  Recommendations
                </h3>
                <Recommendation />
              </div>
            </div>

            {/* part-B */}
            <div className="castSocialLink col-span-4 xl:col-span-3 pt-1">
              <div className="links text-blue-500 flex gap-2 items-center flex-wrap ">
                {externalIds.facebook_id && (
                  <div className="sm:tooltip" data-tip="Visit Facebook">
                    <a
                      href={`https://www.facebook.com/${externalIds?.facebook_id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <RiFacebookCircleLine size={28} color="black" />
                    </a>
                  </div>
                )}
                {externalIds.twitter_id && (
                  <div className="sm:tooltip" data-tip="Visit Twitter">
                    <a
                      href={`https://www.twitter.com/${externalIds?.twitter_id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <RiTwitterLine size={30} color="black" />
                    </a>
                  </div>
                )}
                {externalIds.instagram_id && (
                  <div className="sm:tooltip" data-tip="Visit Instagram">
                    <a
                      href={`https://www.instagram.com/${externalIds?.instagram_id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram size={26} color="black" />
                    </a>
                  </div>
                )}
                <span className="inline-block font-black text-black">|</span>
                {detail.homepage && (
                  <div className="sm:tooltip" data-tip="Visit Homepage">
                    <Link
                      onClick={() => window.open(detail?.homepage, "_blunk")}
                    >
                      <span className="inline-block">
                        <img
                          src="../../public/link.svg"
                          alt=""
                          className="max-w-9 inline-block -translate-x-[2px]"
                        />
                      </span>
                    </Link>
                  </div>
                )}
              </div>
              <div className="extra flex flex-col gap-6 mt-8">
                <li className="item list-none text-gray-900 font-bold">
                  Status
                  <br />
                  <span className="inline-block font-normal text-gray-600">
                    {detail.status ? detail.status : ""}
                  </span>
                </li>
                <li className="item list-none text-gray-900 font-bold">
                  Original Language
                  <br />
                  <span className="inline-block font-normal text-gray-600">
                    {detail.spoken_languages > 0 ? (
                      <div> {detail.spoken_languages[0].english_name}</div>
                    ) : (
                      <span>not found</span>
                    )}
                  </span>
                </li>
                <li className="item list-none text-gray-900 font-bold">
                  Budget
                  <br />
                  <span className="inline-block font-normal text-gray-600">
                    {detail.budget ? (
                      <div> ${detail.budget.toFixed(2)}</div>
                    ) : (
                      <h2>No budget found</h2>
                    )}
                  </span>
                </li>
                <li className="item list-none text-gray-900 font-bold">
                  Revenue
                  <br />
                  <span className="inline-block font-normal text-gray-600">
                    {detail.revenue ? (
                      <div> ${detail.revenue.toFixed(2)}</div>
                    ) : (
                      <h2>no revenue</h2>
                    )}
                  </span>
                </li>
              </div>
              <div className="keyBox my-12">
                <h3 className="text-black pb-3 font-bold">Keywords</h3>
                <div className="keywords flex gap-2 flex-wrap">
                  {keyword.map((keys) => (
                    <div key={keys.id}>
                      <a
                        href=""
                        className="w-fit px-1 inline-block border list-none capitalize bg-gray-100 rounded-sm hover:shadow-md text-black hover:border-[#eeaaee] text-sm"
                      >
                        {keys?.name}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              <hr />
              <div className="keyBox mt-12">
                <h3 className="text-black pb-3 font-bold">Content Score </h3>
                <div className="contributor rounded-lg overflow-hidden">
                  <div className="bg-black text-white pl-3 py-2">100</div>
                  <div className="bg-gray-200 pl-3 py-[3px] text-sm text-black">
                    Yes! Looking good!
                  </div>
                </div>
              </div>
              {/* top contributor  */}
              <div className="contributormain py-8">
                <h3 className="text-black pb-3 font-bold">Top Contributors</h3>
                <div className="contBox flex flex-col gap-6">
                  <div className="contItem flex flex-wrap gap-4 items-center">
                    <div className="thumb bg-red-600 w-14 h-14 rounded-full grid place-items-center">
                      thum
                    </div>
                    <div className="count">
                      <h5 className="text-black font-medium">343</h5>
                      <small className="text-black font-normal">
                        WardenclyffeTower
                      </small>
                    </div>
                  </div>
                  <div className="contItem flex flex-wrap gap-4 items-center">
                    <div className="thumb bg-red-600 w-14 h-14 rounded-full grid place-items-center">
                      thum
                    </div>
                    <div className="count">
                      <h5 className="text-black font-medium">343</h5>
                      <small className="text-black font-normal">
                        WardenclyffeTower
                      </small>
                    </div>
                  </div>
                  <div className="contItem flex flex-wrap gap-4 items-center">
                    <div className="thumb bg-red-600 w-14 h-14 rounded-full grid place-items-center">
                      thum
                    </div>
                    <div className="count">
                      <h5 className="text-black font-medium">343</h5>
                      <small className="text-black font-normal">
                        WardenclyffeTower
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              {/* Popularity Trend */}
              <div className="contributormain py-8">
                <h3 className="text-black pb-3 font-bold">Popularity Trend</h3>
                <div className="contBox flex flex-col gap-6">
                  <span className="text-red-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Saepe consequuntur consequatur modi. Ea perferendis
                    dignissimos dolor soluta quae, earum cumque?
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Detailpage;
