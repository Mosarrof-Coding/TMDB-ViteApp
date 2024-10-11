/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  RxCross2,
  RxLockClosed,
  RxQuestionMarkCircled,
  RxPlusCircled,
} from "react-icons/rx";
import { GiCheckMark } from "react-icons/gi";
function Logos() {
  const params = useParams();
  const detailMovieUrl = `https://api.themoviedb.org/3/movie/${params.id}?language=en-US`;
  const fullNameUrl = `https://api.themoviedb.org/3/configuration/languages?api_key=629353605eab6723aee2f62b54183d48`;
  const imgUrl = `https://image.tmdb.org/t/p/original/`;
  const apiKey = `&api_key=629353605eab6723aee2f62b54183d48`;
  // states
  const [detail, setDetail] = useState({});
  const [logos, setLogos] = useState([]);
  const [languages, setLanguages] = useState([]);
  // movieDeatil
  const fetchMovieDetail = async () => {
    try {
      const response = await fetch(detailMovieUrl + apiKey);
      const data = await response.json();
      setDetail(data);
    } catch (error) {
      console.error(error);
    }
  };
  // logos
  const fetchMovieDetails = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?${apiKey}&append_to_response=images`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch movie details");
      }
      const data = await response.json();
      const logos = data.images.logos;
      // console.log("data.images.logos", data.images.logos);
      setLogos(logos);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };
  // language iso name
  const getName = async () => {
    try {
      const res = await fetch(fullNameUrl);
      const data = await res.json();
      setLanguages(data);
    } catch (error) {
      console.error(error);
    }
  };
  // language iso to full name
  const getFullName = (iso_639_1) => {
    const language = languages.find((lan) => lan.iso_639_1 === iso_639_1);
    return language ? language.english_name : "";
  };
  // call functions
  useEffect(() => {
    fetchMovieDetail();
    fetchMovieDetails();
    getName();
  }, []);

  return (
    <>
      <section className="text-sm md:text-base">
        <div className="bg-gray-600">
          <div className="contizer">
            <div className="bb py-2 lg:py-4 flex items-center gap-2 md:gap-4 lg:gap-8">
              {/* movie banner */}
              <div className="w-14 lg:w-20">
                {detail.poster_path ? (
                  <Link
                    to={`/DetailPage/${params.id}`}
                    className="object-cover overflow-hidden"
                  >
                    <img
                      src={imgUrl + detail.poster_path}
                      alt={detail.title}
                      className="rounded-lg"
                    />
                  </Link>
                ) : (
                  <div>
                    <img src={"https://placehold.co/400x500"} alt="" />
                  </div>
                )}
              </div>
              <div className="title">
                <h3 className="text-lg md:text-xl lg:text-3xl leading-none pb-1 font-semibold text-white">
                  {detail.title}{" "}
                  <span className="release_date text-gray-400 font-medium">
                    {detail.release_date ? (
                      <span>({detail.release_date?.slice(0, 4)})</span>
                    ) : (
                      <span>Loading...</span>
                    )}
                  </span>
                </h3>
                <Link
                  className="hover:text-gray-400 font-medium"
                  to={`/Detailpage/${params.id}`}
                >
                  ⬅ Back to main
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* logos main  */}
        <div className="contizer">
          <div className="bacdropMain flex flex-col sm:flex-row justify-between gap-2 lg:gap-6 py-4 lg:py-8">
            <div className="basis-1/4 min-w-[200px]">
              <div className="rounded-lg overflow-hidden hover:shadow-lg border border-gray-100 hover:border-gray-200 transition-shadow duration-300">
                <div className="flex justify-between items-center gap-2 bg-black text-white py-2 lg:py-4 px-3 text-lg lg:text-xl font-semibold">
                  <span className="">Logos</span>
                  <span className="text-gray-300">
                    <span className="flex gap-2">
                      <RxQuestionMarkCircled color="white" />
                      <RxPlusCircled color="white" />
                    </span>
                  </span>
                </div>
                {/* logos name */}
                {logos.map((logo, index) => (
                  <div key={index} className="text-black w-full">
                    {logo.iso_639_1 ? (
                      <div className="flex justify-between items-center gap-2 hover:bg-gray-200 transition-all duration-200 px-2 py-0.5 lg:py-1 xl:py-1.5">
                        {/* same name push an item  */}
                        <span>{getFullName(logo.iso_639_1)}</span>
                        {/* same name.length  */}
                        <small className="w-5 lg:w-6 aspect-square shrink-0 font-medium bg-gray-50 text-blue-800 rounded-full inline-grid place-items-center">
                          1
                        </small>
                      </div>
                    ) : (
                      <div className="flex justify-between items-center gap-2 hover:bg-gray-200 transition-all duration-200 px-2 py-0.5 lg:py-1 xl:py-1.5">
                        <span className="text-red-500">Not Found</span>
                        <small className="w-5 lg:w-6 aspect-square shrink-0 font-medium bg-gray-50 text-black rounded-full inline-grid place-items-center">
                          n
                        </small>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="basis-3/4 mt-4 sm:mt-0">
              <div className="backWrap myGrid">
                {logos.map((logo, i) => (
                  <div
                    key={i}
                    className="rounded-lg overflow-hidden hover:shadow-lg border border-gray-100 transition-shadow duration-300"
                  >
                    <div className=" overflow-hidden grid items-center px-2 bg-black">
                      {logo.file_path ? (
                        <a
                          href={imgUrl + logo.file_path}
                          rel="noopener noreferrer"
                          target="_blunk"
                          className=""
                        >
                          <img src={imgUrl + logo.file_path} alt="" />
                        </a>
                      ) : (
                        <img src="https://placehold.co/320x480" />
                      )}
                    </div>

                    <div className="text-gray-600 p-2 flex justify-between gap-2 items-center">
                      <span>Info</span>
                      <span>
                        <RxLockClosed />
                      </span>
                    </div>
                    <div className="p-2 border-t">
                      <h3 className="text-black pb-2">Added By: moss</h3>
                      <h6 className="text-gray-800 text-sm font-light">Size</h6>
                      <h4 className="text-black">
                        <div className="flex items-center gap-1 mb-2">
                          <span> {logo.width}</span>
                          <span>
                            <RxCross2 />
                          </span>
                          <span>{logo.height}</span>
                          <span className="font-bold">
                            <GiCheckMark size={12} />
                          </span>
                        </div>
                      </h4>
                      <h4 className="text-gray-800 text-sm font-light py-2">
                        Language
                      </h4>
                      <div className="p-1 bg-gray-200 rounded">
                        <select
                          name=""
                          id=""
                          className="text-black w-full bg-transparent rounded p-0.5 lg:p-1"
                          defaultValue={"English"}
                        >
                          <option value="Bengali">Bengali</option>
                          <option value="English">English</option>
                          <option value="Arabic">Arabic</option>
                          <option value="French">French</option>
                          <option value="Portuguese">Portuguese</option>
                          <option value="Turkiye">Turkiye</option>
                          <option value="日本">日本</option>
                        </select>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Logos;
