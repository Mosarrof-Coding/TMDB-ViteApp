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
      const response = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,flags,cca2"
      );
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
            <div className="flex items-center gap-2 md:gap-4 lg:gap-8 py-2 lg:py-4 bb">
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
                <h3 className="font-bold text-white text-xl lg:text-3xl md:2xl">
                  {detail.title}{" "}
                  <span className="font-medium text-gray-400 release_date">
                    {detail.release_date ? (
                      <span>({detail.release_date?.slice(0, 4)})</span>
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
        {/* Rendering release dates */}
        <div className="contizer">
          <div className="flex sm:flex-row flex-col justify-between gap-2 lg:gap-6 py-4 lg:py-8 Altbox">
            {/* countries */}
            <div className="min-w-fit myScrollbar basis-1/4">
              <div className="hover:shadow-lg border border-gray-100 hover:border-gray-200 rounded lg:rounded-lg overflow-hidden transition-shadow duration-300">
                <div className="flex justify-between items-center gap-2 bg-black px-3 py-1 sm:py-2 lg:py-4 font-semibold text-white text-lg lg:text-xl">
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
                    <div className="flex justify-between items-center gap-4 hover:bg-gray-200 px-3 py-0.5 lg:py-1 xl:py-1.5 text-gray-600">
                      {/* Getting country name based on ISO code */}
                      {getCountryInfo(release.iso_3166_1).name}
                      <small className="place-items-center grid bg-gray-50 hover:bg-white rounded-full w-5 lg:w-6 aspect-square font-semibold text-blue-800">
                        {release?.release_dates.length}
                      </small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* country flag */}
            <div className="mt-4 sm:mt-0 myScrollbar basis-3/4">
              <div className="flex flex-col gap-4 lg:gap-6">
                {releaseDates?.map((release, i) => (
                  <div
                    key={i}
                    className="hover:shadow-lg border rounded lg:rounded overflow-hidden transition-all duration-300 cursor-pointer"
                  >
                    {/* Displaying country name */}
                    <div className="flex items-center gap-2 bg-gray-100 p-2 lg:p-3 font-bold text-gray-600">
                      {/* Displaying country flag */}
                      {isLoading && (
                        <img
                          className="inline-block w-8 h-8"
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
                    <div className="flex justify-between items-center gap-2 px-2 lg:px-3 py-1 lg:py-2 border-b font-medium text-black">
                      <li className="text-sm capitalize list-none basis-1/2">
                        Date
                      </li>
                      <li className="hidden lg:block text-sm capitalize list-none basis-1/2">
                        Certification
                      </li>
                      <li className="lg:hidden block text-sm capitalize list-none basis-1/2">
                        Ctf
                      </li>
                      <li className="text-sm capitalize list-none basis-1/2">
                        Type
                      </li>
                      <li className="hidden lg:block text-sm capitalize list-none basis-1/2">
                        Language
                      </li>
                      <li className="lg:hidden block text-sm capitalize list-none basis-1/2">
                        Lan
                      </li>
                      <li className="hidden lg:block text-sm capitalize list-none basis-1/2">
                        Note
                      </li>
                    </div>
                    {/* Displaying release date details */}
                    {release.release_dates.map((releaseDate, j) => (
                      <div
                        className="flex justify-between items-center gap-2 px-2 lg:px-3 py-1 lg:py-2"
                        key={j}
                      >
                        <li className="text-gray-600 text-sm capitalize list-none basis-1/2">
                          <span className="font-light text-sm">
                            {releaseDate.release_date.slice(0, 10)}
                          </span>
                        </li>
                        <li className="text-pink-300 text-sm capitalize list-none basis-1/2">
                          <span className="font-light text-sm">
                            {releaseDate.certification}
                          </span>
                        </li>
                        <li className="text-gray-600 text-sm capitalize list-none basis-1/2">
                          <span className="font-light text-sm">
                            {typeMap[releaseDate.type] || "Unknown"}
                          </span>
                        </li>
                        <li className="text-gray-600 text-sm capitalize list-none basis-1/2">
                          <span className="font-light text-sm">
                            {releaseDate.iso_639_1}
                          </span>
                        </li>
                        <li className="hidden lg:block text-gray-600 text-sm capitalize list-none basis-1/2">
                          <span className="font-light text-sm">
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
