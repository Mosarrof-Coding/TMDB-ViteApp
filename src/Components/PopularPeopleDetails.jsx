/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import {
  FaTwitter,
  FaInstagram,
  FaTiktok,
  FaKeyboard,
  FaExclamationCircle,
  FaFacebook,
  FaYoutube,
  FaChevronRight,
} from "react-icons/fa";
import { Button } from "@material-tailwind/react";
import { IoTriangleSharp } from "react-icons/io5";
// assets
import preLoader from "../assets/bigloading.gif";

import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import PersonsCredit from "./PersonsCredit";
import PersonActing from "./PersonActing";

function PopularPeopleDetails() {
  const params = useParams();
  const peopleUrl = `https://api.themoviedb.org/3/person/${params.id}?language=en-US&page=1%27,%20options`;
  const apiKey = `&api_key=629353605eab6723aee2f62b54183d48`;
  const imgUrl = `https://image.tmdb.org/t/p/original/`;

  const [peoples, setPeoples] = useState([]);
  const peopleDetail = async () => {
    const res = await fetch(peopleUrl + apiKey);
    const data = await res.json();
    // console.log(data);
    setPeoples(data);
  };
  useEffect(() => {
    peopleDetail();
  }, [params.id]);

  // externalIds
  const exIdUrls = `https://api.themoviedb.org/3/person/${params.id}/external_ids?`;
  const [externalIds, setExternalIds] = useState({});
  const fetcExId = async () => {
    try {
      const res = await fetch(exIdUrls + apiKey);
      const dataLink = await res.json();
      // console.log(dataLink);
      setExternalIds(dataLink);
    } catch (error) {
      console.error("Error fetching external IDs:", error);
    }
  };
  useEffect(() => {
    fetcExId();
  }, [params.id]);

  // gender
  const genderMap = {
    1: "Female",
    2: "Male",
  };

  // hover effect
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [isMouseOver1, setIsMouseOver1] = useState(false);
  const [isMouseOver2, setIsMouseOver2] = useState(false);
  const [isMouseOver3, setIsMouseOver3] = useState(false);

  const [loaded, setLoaded] = useState(false);
  const handleLoad = () => {
    setLoaded(true);
  };

  // append rest text
  const [appends, setAppends] = useState(true);
  const hnClick = () => {
    setAppends(false);
  };

  return (
    <>
      <section>
        {/* navigator  */}
        <div className="navigate border-b">
          <div className="contizer">
            <div className="navMain text-sm lg:text-base lg:py-1 flex justify-center items-center flex-wrap gap-2 sm:gap-4 lg:gap-6">
              {/* overview  */}
              <div className="dropdown dropdown-hover">
                <div
                  tabIndex={0}
                  role="button"
                  className={`bg-white text-black py-1 lg:py-2 hover:text-blue-400 drpp ${
                    isMouseOver ? "text-blue-400" : ""
                  }`}
                >
                  <span>Overview</span>
                  <span className="hidden sm:inline-block rotate-180 ml-2 lg:mb-[2px]">
                    <IoTriangleSharp size={8} />
                  </span>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu py-1 lg:py-2 px-0 shadow-lg bg-white border-t-4 border-blue-600 rounded-b w-[calc(100%+60px)] "
                  onMouseEnter={() => setIsMouseOver(true)}
                  onMouseLeave={() => setIsMouseOver(false)}
                >
                  <div className="text-gray-600 leading-[1] flex flex-col w-auto">
                    <Link className="py-0.5 lg:py-1 hover:bg-gray-200 px-2 lg:px-4">
                      Main
                    </Link>
                    <Link className="py-0.5 lg:py-1 hover:bg-gray-200 px-2 lg:px-4">
                      Translations
                    </Link>
                  </div>
                  <div className="text-gray-600 leading-[1] flex flex-col pt-2 sm:pt-3 lg:pt-5">
                    <Link className="py-0.5 lg:py-1 hover:bg-gray-200 px-2 lg:px-4">
                      Changes
                    </Link>
                    <Link className="py-0.5 lg:py-1 hover:bg-gray-200 px-2 lg:px-4">
                      Report
                    </Link>
                    <Link className="py-0.5 lg:py-1 hover:bg-gray-200 px-2 lg:px-4">
                      Edit
                    </Link>
                  </div>
                </ul>
              </div>
              {/* Media  */}
              <div className="dropdown dropdown-hover">
                <div
                  tabIndex={0}
                  role="button"
                  className={`bg-white text-black py-1 lg:py-2 hover:text-blue-400 drpp ${
                    isMouseOver1 ? "text-blue-400" : ""
                  }`}
                >
                  <span>Media </span>
                  <span className="hidden sm:inline-block rotate-180 ml-2 lg:mb-[2px]">
                    <IoTriangleSharp size={8} />
                  </span>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu py-1 lg:py-2 px-0 shadow-lg bg-white border-t-4 border-blue-600 rounded-b  md:w-52"
                  onMouseEnter={() => setIsMouseOver1(true)}
                  onMouseLeave={() => setIsMouseOver1(false)}
                >
                  <div className="text-gray-600 leading-[1] flex flex-col">
                    <Link className="py-0.5 lg:py-1 hover:bg-gray-200 px-2 lg:px-4 flex items-center justify-between gap-6">
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
                  className={`bg-white text-black py-1 lg:py-2 hover:text-blue-400 drpp ${
                    isMouseOver2 ? "text-blue-400" : ""
                  }`}
                >
                  <span>Fandom </span>
                  <span className="hidden sm:inline-block rotate-180 ml-2 lg:mb-[2px]">
                    <IoTriangleSharp size={8} />
                  </span>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu py-1 lg:py-2 px-0 shadow-lg bg-white border-t-4 border-blue-600 rounded-b md:w-52"
                  onMouseEnter={() => setIsMouseOver2(true)}
                  onMouseLeave={() => setIsMouseOver2(false)}
                >
                  <div className="text-gray-600 leading-[1] flex flex-col">
                    <ul
                      id="myDiscussion"
                      className="py-1 hover:bg-blue-400 hover:text-white px-2 lg:px-4 relative"
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
                          className="absolute right-[50%] sm:left-[50%] top-[96%]  md:left-[100%] md:top-0 py-1 lg:py-2 px-0 shadow-lg bg-white border-t-4 border-blue-600 rounded-b w-[calc(100%+60px)] "
                        >
                          <div className="text-gray-600 leading-[1] flex flex-col w-auto">
                            <Link className="py-1 hover:bg-gray-100 px-2 lg:px-4">
                              Overview
                            </Link>
                            <Link className="py-1 hover:bg-gray-100 px-2 lg:px-4">
                              General
                            </Link>
                            <Link className="flex justify-between items-center py-1 gap-4 px-2 lg:px-4 hover:bg-gray-100">
                              <span>Content Issue</span>
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
                  className={`bg-white text-black py-1 lg:py-2 hover:text-blue-400 drpp ${
                    isMouseOver3 ? "text-blue-400" : ""
                  }`}
                >
                  <span>Share </span>
                  <span className="hidden sm:inline-block rotate-180 ml-2 lg:mb-[2px]">
                    <IoTriangleSharp size={8} />
                  </span>
                </div>
                <ul
                  tabIndex={0}
                  className="right-0 sm:right-auto dropdown-content py-1 lg:py-2 px-0 shadow-lg bg-white border-t-4 border-blue-600 rounded-b w-[calc(100%+60px)] min-w-fit text-nowrap"
                  onMouseEnter={() => setIsMouseOver3(true)}
                  onMouseLeave={() => setIsMouseOver3(false)}
                >
                  <div className="text-gray-600 leading-[1] flex flex-col">
                    <Link className="py-0.5 lg:py-1 hover:bg-gray-200 px-2 lg:px-4">
                      <span>Share link</span>
                    </Link>
                    <Link className="py-0.5 lg:py-1 hover:bg-gray-200 px-2 lg:px-4">
                      <span>Facebook</span>
                    </Link>
                    <Link className="py-0.5 lg:py-1 hover:bg-gray-200 px-2 lg:px-4">
                      <span>Tweet</span>
                    </Link>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Person Details */}
        <div className="contizer">
          <div className="w-full flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 py-6 sm:py-6 lg:py-10">
            {/* Personal Info */}
            <div className="w-full sm:w-[30%]">
              <h2 className="text-xl lg:text-2xl text-purple-600 font-bold mb-1 sm:hidden">
                {peoples.name}
              </h2>
              <div className="grid place-items-center ">
                {peoples.profile_path ? (
                  <div>
                    {loaded ? (
                      <img
                        src={imgUrl + peoples.profile_path}
                        alt="img"
                        className="rounded lg:rounded-lg w-full"
                      />
                    ) : (
                      <img src={preLoader} alt="" onLoad={handleLoad} />
                    )}
                  </div>
                ) : (
                  <span>
                    <img
                      src={`https://placehold.co/400x600`}
                      alt=""
                      className="rounded-xl"
                    />
                  </span>
                )}
              </div>
              {/* social link  */}
              <div className="flex gap-2 lg:gap-4 items-center flex-wrap text-black py-3 list-none ">
                {externalIds?.facebook_id && (
                  <a
                    href={`https://www.facebook.com/${externalIds?.facebook_id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-rose-700 transition-all"
                  >
                    <FaFacebook size={24} />
                  </a>
                )}
                {externalIds?.twitter_id && (
                  <a
                    href={`https://www.twitter.com/${externalIds?.twitter_id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-rose-700 transition-all"
                  >
                    <FaTwitter size={24} />
                  </a>
                )}
                {externalIds?.instagram_id && (
                  <a
                    href={`https://www.instagram.com/${externalIds?.instagram_id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-rose-700 transition-all"
                  >
                    <FaInstagram size={24} />
                  </a>
                )}
                {externalIds?.tiktok_id && (
                  <a
                    href={`https://www.tiktok.com/${externalIds?.tiktok_id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-rose-700 transition-all"
                  >
                    <FaTiktok size={22} />
                  </a>
                )}
                {externalIds?.youtube_id && (
                  <a
                    href={`https://www.youtube.com/${externalIds?.youtube_id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-rose-700 transition-all"
                  >
                    <FaYoutube size={26} />
                  </a>
                )}
                {peoples?.homepage && (
                  <span className="inline-flex items-center gap-2">
                    {" | "}
                    <a
                      href={peoples.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 hover:scale-95 transition-all"
                    >
                      <div>
                        <img src="../../public/link.svg" alt="" />
                      </div>
                    </a>
                  </span>
                )}
              </div>
              {/* biography mobile device */}
              <div className="sm:hidden">
                <h3 className="text-lg xl:text-xl text-black font-semibold">
                  Biography
                </h3>
                <div className="py-2 text-gray-600">
                  {peoples.biography && peoples.biography.length > 0 ? (
                    <span className="overflow-hidden block">
                      {appends ? (
                        <div>
                          {peoples.biography.slice(0, 520)}
                          {peoples.biography.split("").length > 520 && (
                            <div className="inline-block" onClick={hnClick}>
                              <span className="inline-flex text-xl">....</span>
                              <span className="text-blue-300 inline-flex items-center gap-1 cursor-pointer hover:text-blue-600 transition-all duration-500 group relative">
                                Read More{" "}
                                <span className="group-hover:animate-bounce">
                                  <FaChevronRight
                                    size={12}
                                    className="transition-transform group-hover:rotate-90 group-hover:translate-y-1"
                                  />
                                </span>{" "}
                                <div className="w-32 absolute right-[calc(100%-0px)] bottom-0 bg-gradient-to-l from-[#fff] via-white/40 z-10 touch-none pointer-events-none text-transparent">
                                  moss
                                </div>
                              </span>
                            </div>
                          )}
                        </div>
                      ) : (
                        <p className="leading-[1.5]">{peoples.biography}</p>
                      )}
                    </span>
                  ) : (
                    <span className="text-red-400">
                      No Biography Added yet!
                    </span>
                  )}
                </div>
              </div>
              <h3 className=" text-lg lg:text-xl text-black font-semibold mt-4 ">
                Personal Info
              </h3>
              {/* Personal Info  */}
              <div className="PersonalInfo flex flex-col gap-2 ">
                <div>
                  <h4 className="text-black font-medium">Id</h4>
                  <small className="text-gray-600 leading-[1]">
                    {peoples.id}
                  </small>
                </div>
                <div>
                  <h4 className="text-black font-medium">Known For</h4>
                  <small className="text-gray-600 leading-[1]">
                    {peoples.known_for_department}
                  </small>
                </div>
                <div>
                  <h4 className="text-black font-medium">Known Credits</h4>
                  <small className="text-red-600">
                    {peoples.popularity?.toFixed(0)}
                  </small>
                </div>
                <div>
                  <h4 className="text-black font-medium">Gender</h4>
                  <small className="text-gray-600 leading-[1]">
                    {genderMap[peoples.gender] || "Unknown"}
                  </small>
                </div>
                <div>
                  <h4 className="text-black font-medium">Birthday</h4>
                  <small className="text-gray-600 leading-[1]">
                    {peoples.birthday}
                  </small>
                </div>
                <div>
                  <h4 className="text-black font-medium">Place of Birth</h4>
                  <small className="text-gray-600 leading-[1]">
                    {peoples.place_of_birth}
                  </small>
                </div>
                <div>
                  <h4 className="text-black font-medium pb-1">Also Known As</h4>
                  <small className="text-gray-600 leading-[1] list-none flex flex-col gap-2">
                    {peoples.also_known_as &&
                    peoples.also_known_as.length > 0 ? (
                      peoples.also_known_as.map((alias, index) => (
                        <li key={index}>{alias}</li>
                      ))
                    ) : (
                      <>
                        <li className="text-red-700">
                          No alternative names found!😢
                        </li>
                        {/* Add more conditions here if needed */}
                      </>
                    )}
                  </small>
                </div>
                <div>
                  <h4 className="text-black font-medium pb-1">
                    Content Score{" "}
                  </h4>
                  <div className="text-gray-600 leading-[1] rounded lg:rounded-lg overflow-hidden">
                    <h4 className="py-2 pl-2 text-black font-medium bg-gray-200">
                      100
                    </h4>
                    <small className="py-1 pl-2 font-light bg-gray-300 block">
                      Yes! Looking good!
                    </small>
                  </div>
                </div>
                <div>
                  <Button className="py-1 lg:py-2 px-6 md:px-10 lg:px-12 rounded-full bg-blue-400 hover:bg-black text-sm sm:text-base lg:text-xl font-semibold">
                    Edite Page
                  </Button>
                </div>
                <div>
                  <Link className="text-gray-600 leading-[1] font-light flex gap-2 items-center">
                    <span>
                      <FaKeyboard />
                    </span>
                    <span className="hover:text-blue-400">
                      Keyboard Shortcuts
                    </span>
                  </Link>
                </div>
                <div>
                  <Link className="text-gray-600 leading-[1] font-light flex gap-2 items-center">
                    <span>
                      <FaExclamationCircle />
                    </span>
                    <span className="hover:text-blue-400">Report an Issue</span>
                  </Link>
                </div>
              </div>
            </div>
            {/* biography */}
            <div className="w-full sm:w-[70%]">
              <div className="hidden sm:block">
                <h2 className="text-2xl text-purple-600 font-bold mb-2">
                  {peoples.name}
                </h2>
                <div className="pb-2 text-gray-600">
                  {peoples.biography && peoples.biography.length > 0 ? (
                    <span className="overflow-hidden block">
                      {appends ? (
                        <span>
                          {peoples.biography.slice(0, 540)}{" "}
                          {peoples.biography.split("").length > 540 && (
                            <span className="" onClick={hnClick}>
                              <span className="inline-flex flex-wrap">
                                . . . .{" "}
                              </span>
                              <span className="text-blue-300 inline-flex items-center gap-1 cursor-pointer hover:text-blue-600 transition-all duration-500 group relative">
                                Read More{" "}
                                <span className="group-hover:animate-bounce">
                                  <FaChevronRight
                                    size={12}
                                    className="transition-transform duration-500 group-hover:rotate-90 group-hover:translate-y-1"
                                  />
                                </span>{" "}
                                <div className="w-36 absolute right-[calc(100%-0px)] bottom-0 bg-gradient-to-l from-[#fff] via-white/60 z-10 touch-none pointer-events-none text-transparent">
                                  moss
                                </div>
                              </span>
                            </span>
                          )}
                        </span>
                      ) : (
                        <p className="leading-[1.5]">{peoples.biography}</p>
                      )}
                    </span>
                  ) : (
                    <span className="text-red-400">
                      No Biography Added yet!
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8">
                {/* Known For  */}
                <div className=" ">
                  <h3 className="text-emerald-800 font-medium">Known For</h3>
                  <div className="overflow-x-auto">
                    <PersonsCredit />
                  </div>
                </div>
                {/* acting */}
                <div className="databox ">
                  <div className="flex justify-between items-center gap-2 sm:gap-4 py-1 lg:py-2">
                    <h3 className="text-purple-800 font-medium">Acting</h3>
                    <div className="flex items-center">
                      <span className="text-blue-300">Clear</span>
                      {/* dropdown/ All  */}
                      <div className="">
                        <details className="dropdown">
                          <summary className="m-1 cursor-pointer text-black px-3 sm:px-6">
                            All
                          </summary>
                          <ul className="py-3 px-0 flex flex-col shadow z-[1] bg-base-100 rounded lg:rounded-lg w-fit sm:w-44 text-gray-600 leading-[1] menu dropdown-content right-1">
                            <Link className="flex justify-between gap-1 items-center hover:bg-gray-300 px-3 py-1">
                              <span>Movies</span>
                              <small className="w-6 h-6 grid place-items-center rounded-full bg-gray-200">
                                54
                              </small>
                            </Link>
                            <Link className="flex justify-between gap-1 items-center hover:bg-gray-300 px-3 py-1 text-nowrap">
                              <span>Tv Shows</span>
                              <small className="w-6 h-6 grid place-items-center rounded-full bg-gray-200">
                                22
                              </small>
                            </Link>
                          </ul>
                        </details>
                      </div>
                      <div className="">
                        <details className="dropdown">
                          <summary className="m-1 cursor-pointer text-black px-3 lg:px-6 ">
                            Depertment
                          </summary>
                          <ul className="py-3 px-0 flex flex-col shadow z-[1] bg-base-100 rounded lg:rounded-lg w-fit sm:w-44 text-gray-600 leading-[1] menu dropdown-content right-1">
                            <Link className="flex justify-between items-center hover:bg-gray-300 px-3 py-1">
                              <span>Acting</span>
                              <small className="w-6 h-6 grid place-items-center rounded-full bg-gray-200">
                                54
                              </small>
                            </Link>
                            <Link className="flex justify-between gap-2 hover:bg-gray-300 px-3 py-1">
                              <span>Productions</span>
                              <small className="w-6 h-6 grid place-items-center rounded-full bg-gray-200">
                                22
                              </small>
                            </Link>
                          </ul>
                        </details>
                      </div>
                    </div>
                  </div>
                  <div className="details rounded">
                    <PersonActing />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PopularPeopleDetails;
