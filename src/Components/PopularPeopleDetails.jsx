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

  function insertLineBreaks(text) {
    const secondFullStopIndex = text.indexOf(".", text.indexOf(".") + 1);
    const newText =
      text.slice(0, secondFullStopIndex + 1) +
      "<br><br>" +
      text.slice(secondFullStopIndex + 1);
    return <span dangerouslySetInnerHTML={{ __html: newText }} />;
  }
  return (
    <>
      <section>
        {/* navigator  */}
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
                  className="dropdown-content z-[1] menu py-2 px-0 shadow-md border bg-base-100 rounded min-w-max md:w-52"
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
                          className="absolute left-[20%] top-[96%] md:left-[100%] md:top-0 py-2 px-0 shadow-xl bg-base-100 rounded border w-52"
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
                  className="dropdown-content z-[1] menu py-2 px-0 shadow-md border bg-base-100 rounded min-w-fit md:w-52"
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

        {/* Person Details */}
        <div className="contizer">
          <div className="peopleWrap py-10 flex flex-col sm:grid grid-cols-12 gap-8">
            {/* Personal Info  */}
            <div className="pb-6 w-full sm:col-span-5 md:col-span-4 xl:col-span-3">
              <div className="max-w-full grid place-items-center">
                {peoples.profile_path ? (
                  <span>
                    {loaded ? (
                      <img
                        src={imgUrl + peoples.profile_path}
                        alt=""
                        className="rounded-lg"
                      />
                    ) : (
                      <img src={preLoader} alt="" onLoad={handleLoad} />
                    )}
                  </span>
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
              <div className="flex gap-4 items-center flex-wrap text-black py-3 list-none">
                {externalIds?.facebook_id && (
                  <a
                    href={`https://www.facebook.com/${externalIds?.facebook_id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook size={24} />
                  </a>
                )}
                {externalIds?.twitter_id && (
                  <a
                    href={`https://www.twitter.com/${externalIds?.twitter_id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter size={24} />
                  </a>
                )}
                {externalIds?.instagram_id && (
                  <a
                    href={`https://www.instagram.com/${externalIds?.instagram_id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram size={24} />
                  </a>
                )}
                {externalIds?.tiktok_id && (
                  <a
                    href={`https://www.tiktok.com/${externalIds?.tiktok_id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTiktok size={22} />
                  </a>
                )}
                {externalIds?.youtube_id && (
                  <a
                    href={`https://www.youtube.com/${externalIds?.youtube_id}`}
                    target="_blank"
                    rel="noopener noreferrer"
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
                      className="w-8"
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
                <h3 className="text-xl text-black font-semibold">Biography</h3>
                <div className="py-2 text-gray-600">
                  {peoples.biography && peoples.biography.length > 0 ? (
                    <span className="overflow-hidden block">
                      {appends ? (
                        <div>
                          {insertLineBreaks(peoples.biography.slice(0, 520))}{" "}
                          {peoples.biography.split("").length > 520 && (
                            <div className="" onClick={hnClick}>
                              <span className="inline-flex flex-nowrap">
                                . . . . .{" "}
                              </span>
                              <span className="text-blue-300 font-medium inline-flex items-center gap-1 cursor-pointer hover:text-blue-600 transition-all group relative">
                                Read More{" "}
                                <span className="group-hover:animate-bounce">
                                  <FaChevronRight
                                    size={14}
                                    className="transition-transform group-hover:rotate-90 group-hover:translate-y-1"
                                  />
                                </span>{" "}
                                <div className="w-52 h-[22px] absolute right-[calc(100%-0px)] bottom-0 bg-gradient-to-l from-[#fff] via-white20 z-10"></div>
                              </span>
                            </div>
                          )}
                        </div>
                      ) : (
                        <div> {insertLineBreaks(peoples.biography)}</div>
                      )}
                    </span>
                  ) : (
                    <span className="text-red-400">
                      No Biography Added yet!
                    </span>
                  )}
                </div>
              </div>
              <h3 className="text-xl text-black font-semibold mt-4">
                Personal Info
              </h3>
              {/* Personal Info  */}
              <div className="PersonalInfo mt-2 flex flex-col gap-4">
                <div>
                  <h4 className="text-black font-medium">Id</h4>
                  <small className="text-gray-600">{peoples.id}</small>
                </div>
                <div>
                  <h4 className="text-black font-medium">Known For</h4>
                  <small className="text-gray-600">
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
                  <small className="text-gray-600">
                    {genderMap[peoples.gender] || "Unknown"}
                  </small>
                </div>
                <div>
                  <h4 className="text-black font-medium">Birthday</h4>
                  <small className="text-gray-600">{peoples.birthday}</small>
                </div>
                <div>
                  <h4 className="text-black font-medium">Place of Birth</h4>
                  <small className="text-gray-600">
                    {peoples.place_of_birth}
                  </small>
                </div>
                <div>
                  <h4 className="text-black font-medium pb-1">Also Known As</h4>
                  <small className="text-gray-600 list-none flex flex-col gap-2">
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
                  <div className="text-gray-600 rounded-lg overflow-hidden">
                    <h4 className="py-2 pl-2 text-black font-medium bg-gray-200">
                      100
                    </h4>
                    <small className="py-1 pl-2 font-light bg-gray-300 block">
                      Yes! Looking good!
                    </small>
                  </div>
                </div>
                <div>
                  <Button className="py-2 px-12 rounded-full bg-blue-400 hover:bg-black text-lg font-semibold">
                    EDIT PAGE
                  </Button>
                </div>
                <div>
                  <Link className="text-gray-600 font-light flex gap-2 items-center">
                    <span>
                      <FaKeyboard />
                    </span>
                    <span className="hover:text-blue-400">
                      Keyboard Shortcuts
                    </span>
                  </Link>
                </div>
                <div>
                  <Link className="text-gray-600 font-light flex gap-2 items-center">
                    <span>
                      <FaExclamationCircle />
                    </span>
                    <span className="hover:text-blue-400">Report an Issue</span>
                  </Link>
                </div>
              </div>
            </div>
            {/* biography  */}
            <div className=" w-full sm:col-span-7 md:col-span-8 xl:col-span-9">
              <div className="hidden sm:block">
                <h2 className="text-2xl text-black font-bold mb-8">
                  {peoples.name}
                </h2>
                <h3 className="text-xl text-black font-semibold">Biography</h3>
                <div className="py-2 text-gray-600">
                  {peoples.biography && peoples.biography.length > 0 ? (
                    <span className="overflow-hidden block">
                      {appends ? (
                        <span>
                          {insertLineBreaks(peoples.biography.slice(0, 540))}{" "}
                          {peoples.biography.split("").length > 540 && (
                            <span className="" onClick={hnClick}>
                              <span className="inline-flex flex-wrap">
                                . . . . .{" "}
                              </span>
                              <span className="text-blue-300 font-medium inline-flex items-center gap-1 cursor-pointer hover:text-blue-600 transition-all group relative">
                                Read More{" "}
                                <span className="group-hover:animate-bounce">
                                  <FaChevronRight
                                    size={14}
                                    className="transition-transform duration-300 group-hover:rotate-90 group-hover:translate-y-1"
                                  />
                                </span>{" "}
                                <div className="w-52 h-[22px] absolute right-[calc(100%-0px)] bottom-0 bg-gradient-to-l from-[#fff] via-white20 z-10"></div>
                              </span>
                            </span>
                          )}
                        </span>
                      ) : (
                        <div> {insertLineBreaks(peoples.biography)}</div>
                      )}
                    </span>
                  ) : (
                    <span className="text-red-400">
                      No Biography Added yet!
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-6 mt-4">
                {/* Known For  */}
                <div className="py-2">
                  <h3 className="text-black font-medium mb-2">Known For</h3>
                  <PersonsCredit />
                </div>
                {/* acting  */}
                <div className="databox py-2 ">
                  <div className="flex justify-between items-center gap-4">
                    <div>
                      <h3 className="text-black font-medium">Acting</h3>
                    </div>
                    <div className="flex items-center">
                      <span className="text-blue-300">Clear</span>
                      {/* dropdown/ All  */}
                      <div className="">
                        <details className="dropdown">
                          <summary className="m-1 cursor-pointer text-black text-lg px-6">
                            All
                          </summary>
                          <ul className="py-3 px-0 flex flex-col gap-1 shadow z-[1] bg-base-100 rounded-lg w-44 text-gray-600 menu dropdown-content right-1">
                            <Link className="flex justify-between items-center hover:bg-gray-300 px-3 py-1">
                              <span>Movies</span>
                              <small className="w-6 h-6 grid place-items-center rounded-full bg-gray-200">
                                54
                              </small>
                            </Link>
                            <Link className="flex justify-between items-center hover:bg-gray-300 px-3 py-1">
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
                          <summary className="m-1 cursor-pointer text-black text-lg  px-6 ">
                            Depertment
                          </summary>
                          <ul className="py-3 px-0 flex flex-col gap-1 shadow z-[1] bg-base-100 rounded-lg w-44 text-gray-600 menu dropdown-content right-1">
                            <Link className="flex justify-between items-center hover:bg-gray-300 px-3 py-1">
                              <span>Acting</span>
                              <small className="w-6 h-6 grid place-items-center rounded-full bg-gray-200">
                                54
                              </small>
                            </Link>
                            <Link className="flex justify-between hover:bg-gray-300 px-3 py-1">
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
                  <div className="details rounded mt-4">
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
