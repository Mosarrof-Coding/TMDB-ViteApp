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
      <section className="">
        {/* movie header */}
        <div className="bg-gray-600">
          <div className="contizer">
            <div className="bb py-4 flex items-center gap-8">
              <div className="w-20">
                {detail.poster_path ? (
                  <div className="object-cover overflow-hidden">
                    <img
                      src={imgUrl + detail.poster_path}
                      alt={detail.title}
                      className="rounded-lg"
                    />
                  </div>
                ) : (
                  <div>
                    <img src={"https://placehold.co/400x500"} alt="" />
                  </div>
                )}
              </div>
              <div className="title">
                <h3 className="text-3xl font-bold text-white">
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
                  className="hover:text-gray-400 font-semibold"
                  to={`/Detailpage/${params.id}`}
                >
                  ⬅ Back to main
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* logos main  */}
        <div className="contizer min-h-[48.3vh]">
          <div className="bacdropMain flex flex-col sm:flex-row justify-between gap-2 lg:gap-6 py-8">
            <div className="basis-1/4 min-w-[260px]">
              <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg pb-2 border border-gray-300">
                <div className="flex justify-between items-center gap-2 bg-black text-white py-4 mb-2 px-3 text-xl font-semibold">
                  <span className="">Logos</span>
                  <span className="text-gray-300">
                    <span className="flex gap-2">
                      <RxQuestionMarkCircled color="white" />
                      <RxPlusCircled color="white" />
                    </span>
                  </span>
                </div>
                <p className="text-black">
                  {logos.map((logo, index) => (
                    <div key={index}>
                      <div className="px-2 py-1 my-1 bg-gray-200 w-full">
                        {logo.iso_639_1 ? (
                          <div className="flex justify-between gap-2">
                            {/* same name push an item  */}
                            <span>{getFullName(logo.iso_639_1)}</span>
                            {/* same name.length  */}
                            <span className="w-6 h-6 bg-white rounded-full grid place-items-center">
                              1
                            </span>
                          </div>
                        ) : (
                          <span className="flex justify-between gap-2">
                            <span className="text-red-500">Not found</span>
                            <span className="w-6 h-6 bg-red-800 text-white rounded-full grid place-items-center">
                              0
                            </span>
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </p>
              </div>
            </div>
            <div className="basis-3/4">
              <div className="backWrap myGrid">
                {logos.map((logo) => (
                  <div
                    key={logo.file_path}
                    className="border rounded-lg overflow-hidden hover:shadow-md transition-all duration-300"
                  >
                    <div className="min-h-[86px] grid items-center px-2 bg-black relative">
                      <Link>
                        {logo.file_path ? (
                          <img src={imgUrl + logo.file_path} alt="" />
                        ) : (
                          <img src="https://placehold.co/320x480" />
                        )}
                      </Link>

                      <div className="absolute left-0 top-0 right-0 bottom-0 touch-none pointer-events-none bg-gradient-to-r from-[#0000007e] via-[#341c8b00] 20% to-[#ffffff3b]"></div>
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
                      <div className="p-2 bg-gray-200 rounded">
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
