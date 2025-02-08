/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import loadingGif from "../assets/bigloading.gif";

function ReleaseDate() {
  const params = useParams();
  const detailMovieUrl = `https://api.themoviedb.org/3/movie/${params.id}?language=en-US`;
  const rlsUrl = `https://api.themoviedb.org/3/movie/${params.id}/release_dates?`;
  const apiKey = `&api_key=629353605eab6723aee2f62b54183d48`;
  const imgUrl = `https://image.tmdb.org/t/p/original/`;

  const [detail, setDetail] = useState({});
  const [releaseDates, setReleaseDates] = useState([]);
  const [countries, setCountries] = useState([]);

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

  // Function to fetch release dates for the movie
  const fetchReleaseDates = async () => {
    try {
      const response = await fetch(rlsUrl + apiKey);
      const data = await response.json();
      setReleaseDates(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  // Function to fetch country data
  const fetchCountries = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      setCountries(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMovieDetail();
    fetchReleaseDates();
    fetchCountries();
  }, [params.id]);

  // Function to get the full name and flag of a country based on its ISO code
  const getCountryInfo = (isoCode) => {
    const country = countries.find((c) => c.cca2 === isoCode);
    return country
      ? { name: country.name.common, flag: country.flags.png }
      : { name: "Loading...", flag: "" };
  };

  // is loading gif
  const [isLoading, setIsLoading] = useState(true);
  const handleLoad = async () => {
    setIsLoading(false);
  };

  const typeMap = {
    1: "Premiere",
    2: "Theatrical (limited)",
    3: "Theatrical",
    4: "Digital",
    5: "Physical",
    6: "TV",
  };

  return (
    <>
      <section className="text-sm lg:text-base">
        {/* Rendering movie details */}
        <div className="bg-gray-600">
          <div className="contizer">
            <div className="bb py-2 lg:py-4 flex items-center gap-2 md:gap-4 lg:gap-8">
              <div className="w-16 lg:w-20">
                {detail.poster_path ? (
                  <div className="object-cover overflow-hidden">
                    <img
                      src={imgUrl + detail.poster_path}
                      alt={detail.title}
                      className="rounded lg:rounded-lg"
                    />
                  </div>
                ) : (
                  <div>
                    <img src={loadingGif} alt="" />
                  </div>
                )}
              </div>
              <div className="title">
                <h3 className="text-xl md:2xl lg:text-3xl font-bold text-white">
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
        {/* Rendering release dates */}
        <div className="contizer">
          <div className="Altbox flex flex-col sm:flex-row justify-between gap-2 lg:gap-6 py-4 lg:py-8">
            {/* countries */}
            <div className="myScrollbar basis-1/4 min-w-fit">
              <div className="rounded lg:rounded-lg overflow-hidden hover:shadow-lg border border-gray-100 hover:border-gray-200 transition-shadow duration-300">
                <div className="flex justify-between items-center gap-2 bg-black text-white py-1 sm:py-2 lg:py-4 px-3 text-lg lg:text-xl font-semibold">
                  <span className="">Countries</span>
                  {/* Displaying the total number of release countries */}
                  <span className="text-gray-300">
                    {releaseDates?.reduce(
                      (count, release) => count + release.release_dates.length,
                      0
                    )}
                  </span>
                </div>
                {releaseDates?.map((release, i) => (
                  <div key={i}>
                    <div className="text-gray-600 py-0.5 lg:py-1 xl:py-1.5 px-3 hover:bg-gray-200 flex justify-between items-center gap-4">
                      {/* Getting country name based on ISO code */}
                      {getCountryInfo(release.iso_3166_1).name}
                      <small className="w-5 lg:w-6 aspect-square rounded-full bg-gray-50 hover:bg-white text-blue-800 grid place-items-center font-semibold">
                        {release?.release_dates.length}
                      </small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* country flag */}
            <div className="myScrollbar basis-3/4 mt-4 sm:mt-0">
              <div className="flex flex-col gap-4 lg:gap-6">
                {releaseDates?.map((release, i) => (
                  <div
                    key={i}
                    className="rounded lg:rounded overflow-hidden border hover:shadow-lg transition-all duration-300 cursor-pointer"
                  >
                    {/* Displaying country name */}
                    <div className="text-gray-600 bg-gray-100 p-2 lg:p-3 font-bold flex gap-2 items-center">
                      {/* Displaying country flag */}
                      {isLoading && (
                        <img
                          className="w-8 h-8 inline-block"
                          src={loadingGif}
                          alt=""
                        />
                      )}
                      <img
                        src={getCountryInfo(release.iso_3166_1).flag}
                        alt=""
                        className={`w-8 shrink-0 ${isLoading ? "hidden" : ""}`}
                        onLoad={handleLoad}
                      />
                      <span>{getCountryInfo(release.iso_3166_1).name}</span>
                    </div>
                    <div className="flex justify-between items-center gap-2 text-black px-2 lg:px-3 py-1 lg:py-2 border-b font-medium">
                      <li className="list-none capitalize text-sm basis-1/2">
                        Date
                      </li>
                      <li className="list-none capitalize text-sm basis-1/2 hidden lg:block">
                        Certification
                      </li>
                      <li className="list-none capitalize text-sm basis-1/2 lg:hidden block">
                        Ctf
                      </li>
                      <li className="list-none capitalize text-sm basis-1/2">
                        Type
                      </li>
                      <li className="list-none capitalize text-sm basis-1/2 hidden lg:block">
                        Language
                      </li>
                      <li className="list-none capitalize text-sm basis-1/2 lg:hidden block">
                        Lan
                      </li>
                      <li className="list-none capitalize text-sm basis-1/2 hidden lg:block">
                        Note
                      </li>
                    </div>
                    {/* Displaying release date details */}
                    {release.release_dates.map((releaseDate, j) => (
                      <div
                        className="flex justify-between items-center gap-2 px-2 lg:px-3 py-1 lg:py-2"
                        key={j}
                      >
                        <li className="text-gray-600 list-none capitalize text-sm basis-1/2">
                          <span className="text-sm font-light">
                            {releaseDate.release_date.slice(0, 10)}
                          </span>
                        </li>
                        <li className="text-pink-300 list-none capitalize text-sm basis-1/2">
                          <span className="text-sm font-light">
                            {releaseDate.certification}
                          </span>
                        </li>
                        <li className="text-gray-600 list-none capitalize text-sm basis-1/2">
                          <span className="text-sm font-light">
                            {typeMap[releaseDate.type] || "Unknown"}
                          </span>
                        </li>
                        <li className="text-gray-600 list-none capitalize text-sm basis-1/2">
                          <span className="text-sm font-light">
                            {releaseDate.iso_639_1}
                          </span>
                        </li>
                        <li className="text-gray-600 list-none capitalize text-sm basis-1/2 hidden lg:block">
                          <span className="text-sm font-light">
                            {releaseDate.note}
                          </span>
                        </li>
                      </div>
                    ))}
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

export default ReleaseDate;
