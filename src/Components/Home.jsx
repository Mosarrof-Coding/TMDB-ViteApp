/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import DiscoverMovie from "./DiscoverMovie";
import TrendingMovieDay from "./TrendingMovieDay";
import TrendingMovieWeek from "./TrendingMovieWeek";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Home = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("spiderman");
  const topUrl = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`;
  const serachUrl = `https://api.themoviedb.org/3/search/movie?query=`;
  const apiKey = `&api_key=629353605eab6723aee2f62b54183d48`;
  const imgUrl = `https://image.tmdb.org/t/p/original/`;

  const [images, setImages] = useState([]);
  const fetchImages = async () => {
    const response = await fetch(topUrl + apiKey);
    const data = await response.json();
    setImages(data.results);
  };
  // randome images database selection
  const ranIndexImages = Math.floor(Math.random() * images.length);

  const fetchMovies = async (title = "batman") => {
    const response = await fetch(`${serachUrl}${title}${apiKey}`);
    const data = await response.json();
    setMovies(data.results);
  };

  useEffect(() => {
    fetchImages();
    fetchMovies();
  }, []);

  // switch tab
  const [activeTab, setActiveTab] = useState("popular");
  const handleTabChange = (popular) => {
    setActiveTab(popular);
  };

  // switch btn
  const switchToggle = (e) => {
    const runner = document.querySelector(".runner");
    const content = e.target.innerHTML;
    runner.innerHTML = content;
    e.target.classList.contains("component-1")
      ? (runner.classList.add("leftSwitch"),
        runner.classList.remove("rightSwitch"),
        handleTabChange("popular"))
      : (runner.classList.add("rightSwitch"),
        runner.classList.remove("leftSwitch"),
        handleTabChange("trending"));
  };

  return (
    <main>
      <section className="">
        <div className="max-w-[1530px] mx-auto px-0 xl:px-[15px]">
          {/* banner/searchbar  */}
          <div className="heromain relative">
            <div className="heriImg">
              {images.length > 0 && images.ranIndexImages !== null && (
                <div className="movieList">
                  {
                    <div className="w-full max-h-[400px] overflow-hidden">
                      {images[ranIndexImages].backdrop_path ? (
                        <img
                          src={imgUrl + images[ranIndexImages].backdrop_path}
                          alt=""
                        />
                      ) : (
                        "not found"
                      )}
                    </div>
                  }
                </div>
              )}
            </div>
            <div className="heroAbs flex flex-col gap-4 justify-center  bg-[#1b23fc5c] px-2 sm:px-4 xl:px-8 absolute left-0 top-0 right-0 bottom-0">
              <div className="heroTitle">
                <h1 className="text-3xl text-white [text-shadow:_0px_4px_8px_rgb(0_0_0_/_60%)] xs:text-4xl sm:text-5xl font-bold leading-[1.2] lg:pb-2">
                  Welcome.
                </h1>
                <h2 className="xs:text-xl sm:text-3xl font-semibold text-gray-200 [text-shadow:_0px_4px_8px_rgb(0_0_0_/_60%)]">
                  Millions of movies, TV shows and people to discover. Explore
                  now.
                </h2>
              </div>
              <div className="heroSearch pt-2 sm:pt-6">
                <div className="sGroup w-[calc(100%-4px)] rounded-2xl relative">
                  <input
                    type="text"
                    placeholder="Search for a movie, tv Show, person..."
                    onChange={(e) => setSearch(e.target.value)}
                    className="sm:text-xl text-black py-1 md:py-2 pl-4 lg:pr-32 bg-white w-full rounded-3xl outline-0"
                  />
                  <input
                    type="button"
                    value={"Search"}
                    onClick={() => fetchMovies(search)}
                    className="bg-gradient-to-r from-[#1DD4AB] to-[#02B5E2] sm:text-xl py-1 md:py-2 px-6 rounded-3xl absolute -right-[4px] top-0 bottom-0 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* oscars */}
          <div className="oscar py-6 px-2 sm:px-4 xl:px-8 bg-gradient-to-br from-[#252195] to-[#90CCD7]">
            <img src="../../public/oscars.svg" alt="" className="max-w-64" />
            <Link
              to="/Pop0WinnersPage"
              className="inline-flex gap-2 items-center mt-6 border-2 rounded-full px-3 py-1"
            >
              View the winners
              <span>
                <FaArrowRightLong />
              </span>
            </Link>
          </div>
          {/*Search movie  */}
          <h3 className="text-center text-2xl font-semibold text-yellow-400 pt-8">
            Search Movies
          </h3>
          <div className="contizer">
            <div className="homeWrapper py-2 px-2 lg:px-0 overflow-x-auto bg-[url(./assets/bgArt.svg)] bg-repeat-x bg-[center_bottom_0rem]">
              {movies.length > 0 ? (
                <div className="flex gap-5 mb-5">
                  {movies.map((movie) => (
                    <div key={movie.id} className="min-w-[160px] max-w-[260px]">
                      <MovieCard key={movie.id} movie={movie} imgUrl={imgUrl} />
                    </div>
                  ))}
                </div>
              ) : (
                <h2>Wait...</h2>
              )}
            </div>
          </div>
        </div>
        {/* trend movies  */}
        <div className="pt-8 text-black">
          <div className="contizer">
            <h3 className="w-fit mx-auto text-2xl font-semibold text-yellow-400">
              Trending Movies
            </h3>
            {/* switch btn  */}
            <div className="w-fit mx-auto my-4 border border-[#02b5e241] rounded-2xl flex gap-2 items-center relative">
              <button
                className={`component-1 cursor-pointer text-black px-4 py-0 grid place-items-center z-10`}
                onClick={switchToggle}
              >
                Today
              </button>
              <button
                className="component-2 cursor-pointer text-black px-4 py-0 grid place-items-center z-6"
                onClick={switchToggle}
              >
                This Week
              </button>
              <div className="blueVox absolute w-full top-0 left-0 right-0 bottom-0 z-[-1] pointer-events-none touch-none">
                <div className="runner rounded-2xl inline-block bg-gradient-to-r from-[#1dd4ac86] to-[#075d72] px-4 font-medium text-white">
                  Today
                </div>
              </div>
            </div>
            <div>
              {activeTab === "popular" ? (
                <TrendingMovieDay />
              ) : (
                <TrendingMovieWeek />
              )}
            </div>
          </div>
        </div>
      </section>
      <DiscoverMovie />
    </main>
  );
};

export default Home;
