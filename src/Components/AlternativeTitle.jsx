/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function AlternativeTitle() {
  const params = useParams();

  const detailMovieUrl = `https://api.themoviedb.org/3/movie/${params.id}?language=en-US`;
  const altTitle = `https://api.themoviedb.org/3/movie/${params.id}/alternative_titles?`;
  const apiKey = `&api_key=629353605eab6723aee2f62b54183d48`;
  const imgUrl = `https://image.tmdb.org/t/p/original/`;

  const [detail, setDetail] = useState({});
  const [titles, setTitles] = useState([]);
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

  // Function to fetch alternative titles for the movie
  const [cNamse, setcNamse] = useState();
  const fetchAlternativeTitles = async () => {
    try {
      const response = await fetch(altTitle + apiKey);
      const data = await response.json();
      setTitles(data.titles);
      setcNamse(data.titles.length);
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
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setCountries(data);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  useEffect(() => {
    fetchMovieDetail();
    fetchAlternativeTitles();
    fetchCountries();
  }, [params.id]);

  // Function to get the full name and flag of a country based on its ISO code
  const getCountryInfo = (isoCode) => {
    const country = countries.find((c) => c.cca2 === isoCode);
    return country
      ? { name: country.name.common, flag: country.flags.png }
      : { name: "Unknown", flag: "" };
  };
  // Group titles by country ISO code and count occurrences
  const countryCountMap = titles.reduce((acc, title) => {
    const code = title.iso_3166_1;
    acc[code] = (acc[code] || 0) + 1;
    return acc;
  }, {});

  // Convert to array of entries for mapping
  const uniqueCountries = Object.entries(countryCountMap); // [ [ 'US', 2 ], [ 'FR', 1 ] ]
  return (
    <>
      <section className="">
        {/* Rendering movie details */}
        <div className="bg-gray-600">
          <div className="contizer">
            <div className="flex items-center gap-8 py-4 bb">
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
                    <img src={"https://placehold.co/400x500"} alt="" />
                  </div>
                )}
              </div>
              <div className="title">
                <h3 className="font-bold text-white text-xl lg:text-3xl">
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
        {/* Rendering alternative titles */}
        <div className="contizer">
          <div className="flex sm:flex-row flex-col justify-between gap-6 py-8 Altbox">
            <div className="min-w-[220px] basis-1/4">
              <div className="shadow-md hover:shadow-lg pb-2 border border-gray-300 rounded lg:rounded-lg overflow-hidden">
                <div className="flex justify-between gap-2 bg-black mb-2 px-3 py-4 font-semibold text-white text-lg md:text-xl xl:text-2xl">
                  <span className="">Alternative Titles</span>
                  <span className="text-blue-300">{cNamse}</span>
                </div>
                {uniqueCountries.map(([code, count], i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center hover:bg-gray-200 px-3 py-2 text-gray-600">
                      {getCountryInfo(code).name}
                      <div className="place-items-center grid bg-gray-200 hover:bg-white rounded-full w-5 h-6 text-black text-xs">
                        {count}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="basis-3/4">
              <div className="flex flex-col gap-6">
                {titles.map((title, i) => (
                  <div
                    key={i}
                    className="shadow-md hover:shadow-lg border rounded lg:rounded-lg overflow-hidden transition-all cursor-pointer"
                  >
                    {/* Displaying country name */}
                    <div className="flex items-center gap-2 bg-gray-200 p-3 font-bold text-gray-600">
                      {/* Displaying country flag */}
                      <span className="">
                        <img
                          src={getCountryInfo(title.iso_3166_1).flag}
                          alt=""
                          className="w-8"
                        />
                      </span>
                      <span>{getCountryInfo(title.iso_3166_1).name}</span>
                    </div>
                    <div className="flex justify-between items-center gap-2 px-3 py-2 border-b font-medium text-black">
                      <li className="text-sm capitalize list-none basis-1/2">
                        Title
                      </li>
                      <li className="text-sm capitalize list-none basis-1/2">
                        Type
                      </li>
                    </div>
                    {/* Displaying alternative title */}
                    <div className="flex justify-between items-center gap-2 px-3 py-2">
                      <li className="text-gray-600 text-sm capitalize list-none basis-1/2">
                        <span className="font-light text-sm">
                          {title.title}
                        </span>
                      </li>
                      <li className="text-pink-300 text-sm capitalize list-none basis-1/2">
                        <span className="font-light text-sm">{title.type}</span>
                      </li>
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

export default AlternativeTitle;
