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

  // languages
  const [languages, setLanguages] = useState([]);
  const getLang = async () => {
    const res = await fetch(fullNameUrl + apiKey);
    const data = await res.json();

    // Deduplicate by iso_639_1
    const uniqueMap = new Map();

    data.forEach((lang) => {
      if (lang.iso_639_1 && !uniqueMap.has(lang.iso_639_1)) {
        uniqueMap.set(lang.iso_639_1, lang);
      }
    });

    const uniqueLanguages = Array.from(uniqueMap.values());
    setLanguages(uniqueLanguages);
  };

  const allLanguages = (iso_639_1) => {
    const eLanguage = languages.find((lan) => lan.iso_639_1 === iso_639_1);
    return eLanguage ? eLanguage.english_name : "";
  };
  const langCountMap = backdrops.reduce((acc, item) => {
    const code = item.iso_639_1;
    if (code) {
      acc[code] = (acc[code] || 0) + 1;
    }
    return acc;
  }, {});

  const uniqueLanguages = Object.entries(langCountMap); // e.g., [ [ 'en', 3 ], [ 'fr', 1 ] ]

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
            <div className="flex items-center gap-2 md:gap-4 lg:gap-8 py-2 lg:py-4 bb">
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
                <h3 className="pb-1 font-semibold text-white text-lg md:text-xl lg:text-3xl leading-none">
                  {detail.title}{" "}
                  <span className="font-medium text-gray-400 release_date">
                    {detail.release_date ? (
                      <span>({detail.release_date.slice(0, 4)})</span>
                    ) : (
                      <span>Loading...</span>
                    )}
                  </span>
                </h3>
                <Link
                  className="font-semibold hover:text-gray-400"
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
          <div className="flex sm:flex-row flex-col justify-between gap-2 lg:gap-6 py-4 lg:py-8 min-h-[48.3vh] bacdropMain">
            {/* languages  */}
            <div className="min-w-[200px] basis-1/4">
              <div className="shadow-lg border border-gray-100 hover:border-gray-200 rounded lg:rounded-lg overflow-hidden">
                <div className="flex justify-between items-center gap-2 bg-black px-2 lg:px-4 py-2 lg:py-4 font-semibold text-white text-lg lg:text-xl">
                  <span className="">Backdrops</span>
                  <span className="text-gray-300">
                    <span className="flex gap-2">
                      <RxQuestionMarkCircled />
                      <RxPlusCircled />
                    </span>
                  </span>
                </div>
                <div>
                  {uniqueLanguages.map(([code, count], index) => (
                    <div key={index} className="w-full text-black">
                      <div className="flex justify-between items-center gap-2 hover:bg-gray-200 px-2 lg:px-4 py-0.5 lg:py-1 xl:py-1.5 transition-all duration-200">
                        <span>{allLanguages(code)}</span>
                        <span className="inline-grid place-items-center bg-gray-50 rounded-full w-5 lg:w-6 aspect-square font-medium text-blue-800 shrink-0">
                          {count}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* backdrops */}
            <div className="mt-4 sm:mt-0 basis-3/4">
              <div className="w-full backWrap myGrid">
                {backdrops.map((backdrop) => (
                  <div key={backdrop?.file_path} className="">
                    <div className="hover:shadow-lg border border-gray-100 rounded lg:rounded-lg overflow-hidden transition-shadow duration-300">
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
                              className="mx-auto my-2 w-1/2"
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
                        <div className="flex justify-between items-center gap-2 p-2 text-gray-600">
                          <span>Info</span>
                          <span>
                            <RxLockClosed />
                          </span>
                        </div>
                        <div className="p-2 border-t">
                          <h3 className="pb-2 text-black">Added By: moss</h3>
                          <h6 className="font-light text-gray-800 text-sm">
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
                          <h4 className="py-2 font-light text-gray-800 text-sm">
                            Language
                          </h4>
                          <div className="bg-gray-200 p-1 rounded">
                            <select
                              name=""
                              id=""
                              className="bg-transparent p-0.5 lg:p-1 rounded w-full text-black"
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
