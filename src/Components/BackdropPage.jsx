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
  const apiKey = `&api_key=${import.meta.env.VITE_TMDB_API_KEY}`;
  const imgUrl = `https://image.tmdb.org/t/p/original/`;
  const [detail, setDetail] = useState({});
  // Function to fetch movie details
  const fetchMovieDetail = async () => {
    try {
      const response = await fetch(detailMovieUrl + apiKey);
      const data = await response.json();
      setDetail(data);
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
      <section className="">
        {/* Rendering movie details */}
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
          <div className="bacdropMain min-h-[48.3vh] flex flex-col sm:flex-row justify-between gap-2 lg:gap-6 py-8">
            {/* languages  */}
            <div className="basis-1/4 min-w-fit">
              <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg pb-2 border border-gray-300">
                <div className="flex justify-between items-center gap-2 bg-black text-white py-4 mb-2 px-3 text-xl font-semibold">
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
                    <div key={index}>
                      <div className="px-2 py-2 hover:bg-gray-200 text-black w-full">
                        {backdrop?.iso_639_1 ? (
                          <div className="flex justify-between gap-2">
                            <span>{allLanguages(backdrop.iso_639_1)}</span>
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
                </div>
              </div>
            </div>
            {/* backdrops */}
            <div className="basis-3/4">
              <div className="backWrap w-full myGrid">
                {backdrops.map((backdrop) => (
                  <div key={backdrop?.file_path} className="">
                    <div className="max-w-[264px] border rounded-lg overflow-hidden shadow">
                      {backdrop.file_path ? (
                        <Link>
                          {img ? (
                            <img src={imgUrl + backdrop.file_path} alt="" />
                          ) : (
                            <img
                              src={loadingGif}
                              className="w-1/2 mx-auto my-2"
                              onLoad={imgLoad}
                            />
                          )}
                        </Link>
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
