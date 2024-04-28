/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

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
    // Add more mappings as needed
  };

  return (
    <>
      <section className="min-h-[64vh]">
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
          <div className="Altbox flex flex-col sm:flex-row justify-between gap-4 lg:gap-6 py-8">
            <div className="basis-1/4 min-w-fit">
              <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg pb-2 border border-gray-300">
                <div className="flex justify-between bg-black text-white py-4 mb-2 px-3 text-xl font-semibold">
                  <span className="">Release Dates</span>
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
                    <div className="text-gray-600 py-2 px-3 hover:bg-gray-200 flex justify-between items-center gap-1">
                      {/* Getting country name based on ISO code */}
                      {getCountryInfo(release.iso_3166_1).name}
                      <div className="w-4 h-6 rounded-full bg-gray-200 hover:bg-white text-black grid place-items-center">
                        {release?.release_dates.length}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="basis-3/4">
              <div className="flex flex-col gap-6">
                {releaseDates?.map((release, i) => (
                  <div
                    key={i}
                    className="rounded-lg overflow-hidden shadow-md border hover:shadow-lg transition-all cursor-pointer"
                  >
                    {/* Displaying country name */}
                    <div className="text-gray-600 bg-gray-200 p-3 font-bold flex gap-2 items-center">
                      {/* Displaying country flag */}
                      {isLoading && (
                        <img
                          className="w-8 h-8 inline-block"
                          src="../../public/load-8510_128.gif"
                          alt=""
                        />
                      )}
                      <img
                        src={getCountryInfo(release.iso_3166_1).flag}
                        alt=""
                        className={`w-8 ${isLoading ? "hidden" : ""}`} // Hide the image when isLoading is true
                        onLoad={handleLoad} // Call handleLoad when the image loads
                      />
                      <span>{getCountryInfo(release.iso_3166_1).name}</span>
                    </div>
                    <div className="flex justify-between items-center gap-2 text-black px-3 py-2 border-b font-medium">
                      <li className="list-none capitalize text-sm basis-1/2">
                        Date
                      </li>
                      <li className="list-none capitalize text-sm basis-1/2">
                        Certification
                      </li>
                      <li className="list-none capitalize text-sm basis-1/2">
                        Type
                      </li>
                      <li className="list-none capitalize text-sm basis-1/2">
                        Language
                      </li>
                      <li className="list-none capitalize text-sm basis-1/2">
                        Note
                      </li>
                    </div>
                    {/* Displaying release date details */}
                    {release.release_dates.map((releaseDate, j) => (
                      <div
                        className="flex justify-between items-center gap-2 px-3 py-2"
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
                        <li className="text-gray-600 list-none capitalize text-sm basis-1/2">
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
