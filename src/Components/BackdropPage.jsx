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
import loadingGif from "../assets/bigloading.gif";

function BackdropPage() {
  const params = useParams();
  const detailMovieUrl = `https://api.themoviedb.org/3/movie/${params.id}?language=en-US`;
  const fullNameUrl = `https://api.themoviedb.org/3/configuration/languages?`;
  const apiKey = `&api_key=629353605eab6723aee2f62b54183d48`;
  const imgUrl = `https://image.tmdb.org/t/p/original/`;
  const [detail, setDetail] = useState({});
  // Function to fetch movie details
  const fetchMovieDetail = async () => {
    try {
      const response = await fetch(detailMovieUrl + apiKey);
      const data = await response.json();
      setDetail(data);
      // console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  // backdrops
  const [backdrops, setBackdrops] = useState([]);
  const fetchBackdrops = async () => {
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

  const [languages, setLanguages] = useState([]);
  const getLang = async () => {
    const res = await fetch(fullNameUrl + apiKey);
    const data = await res.json();
    // console.log(data);
    setLanguages(data);
  };
  const allLanguages = (iso_639_1) => {
    const eLanguage = languages.find((lan) => lan.iso_639_1 === iso_639_1);
    return eLanguage ? eLanguage.english_name : "";
  };
  useEffect(() => {
    fetchBackdrops();
    fetchMovieDetail();
    getLang();
  }, []);

  // img load
  const [img, setImg] = useState(false);
  const imgLoad = () => {
    setImg(true);
  };
  return (
    <>
      <section className="text-sm lg:text-base">
        {/* Rendering movie details */}
        <div className="bg-gray-600">
          <div className="contizer">
            <div className="bb py-2 lg:py-4 flex items-center gap-2 md:gap-4 lg:gap-8">
              <div className="w-14 lg:w-20">
                {detail.poster_path ? (
                  <a
                    href={imgUrl + detail.poster_path}
                    className="object-cover overflow-hidden"
                  >
                    <img
                      src={imgUrl + detail.poster_path}
                      alt={detail.title}
                      className="rounded lg:rounded-lg"
                    />
                  </a>
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
                      <span>({detail.release_date.slice(0, 4)})</span>
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
        {/* backdrops  */}
        <div className="contizer">
          <div className="bacdropMain min-h-[48.3vh] flex flex-col sm:flex-row justify-between gap-2 lg:gap-6 py-4 lg:py-8">
            {/* languages  */}
            <div className="basis-1/4 min-w-[200px]">
              <div className="rounded lg:rounded-lg overflow-hidden hover:shadow-lg border border-gray-100 hover:border-gray-200">
                <div className="flex justify-between items-center gap-2 bg-black text-white py-2 lg:py-4 px-2 lg:px-4 text-lg lg:text-xl font-semibold">
                  <span className="">Backdrops</span>
                  <span className="text-gray-300">
                    <span className="flex gap-2">
                      <RxQuestionMarkCircled />
                      <RxPlusCircled />
                    </span>
                  </span>
                </div>
                <div>
                  {backdrops.map((backdrop, index) => (
                    <div key={index} className="text-black w-full">
                      {backdrop?.iso_639_1 ? (
                        <div className="flex justify-between items-center gap-2 px-2 lg:px-4 py-0.5 lg:py-1 xl:py-1.5 hover:bg-gray-200 transition-all duration-200">
                          <span>{allLanguages(backdrop.iso_639_1)}</span>
                          <span className="w-5 lg:w-6 aspect-square shrink-0 font-medium bg-gray-50 text-blue-800 rounded-full inline-grid place-items-center">
                            1
                          </span>
                        </div>
                      ) : (
                        <span className="flex justify-between items-center gap-2 px-2 lg:px-4 py-0.5 lg:py-1 xl:py-1.5 hover:bg-gray-200 transition-all duration-200">
                          <span className="text-red-500">Not found</span>
                          <span className="w-5 lg:w-6 aspect-square shrink-0 font-medium bg-gray-50 text-red-800 rounded-full inline-grid place-items-center">
                            0
                          </span>
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* backdrops */}
            <div className="basis-3/4 mt-4 sm:mt-0">
              <div className="backWrap w-full myGrid">
                {backdrops.map((backdrop) => (
                  <div key={backdrop?.file_path} className="">
                    <div className="rounded lg:rounded-lg overflow-hidden hover:shadow-lg border border-gray-100 transition-shadow duration-300">
                      {backdrop.file_path ? (
                        <picture>
                          {img ? (
                            <a
                              href={imgUrl + backdrop.file_path}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                src={imgUrl + backdrop.file_path}
                                alt="backdrop"
                              />
                            </a>
                          ) : (
                            <img
                              src={loadingGif}
                              className="w-1/2 mx-auto my-2"
                              onLoad={imgLoad}
                            />
                          )}
                        </picture>
                      ) : (
                        <div>
                          <img src={"https://placehold.co/600x400"} alt="" />
                        </div>
                      )}
                      <div>
                        <div className="text-gray-600 p-2 flex justify-between gap-2 items-center">
                          <span>Info</span>
                          <span>
                            <RxLockClosed />
                          </span>
                        </div>
                        <div className="p-2 border-t">
                          <h3 className="text-black pb-2">Added By: moss</h3>
                          <h6 className="text-gray-800 text-sm font-light">
                            Size
                          </h6>
                          <h4 className="text-black">
                            <div className="flex items-center gap-1 mb-2">
                              <span> {backdrop.width}</span>
                              <span>
                                <RxCross2 />
                              </span>
                              <span>{backdrop.height}</span>
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

export default BackdropPage;
