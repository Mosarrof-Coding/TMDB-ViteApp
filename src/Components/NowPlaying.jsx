/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { MdChevronRight } from "react-icons/md";

function NowPlaying() {
  const topUrl = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=2', options`;
  const apiKey = `&api_key=${import.meta.env.VITE_TMDB_API_KEY}`;
  const imgUrl = `https://image.tmdb.org/t/p/original/`;

  const [movies, setMovies] = useState([]);
  const topMovies = async () => {
    const res = await fetch(topUrl + apiKey);
    const data = await res.json();
    // console.log(data.results);
    setMovies(data.results);
  };
  useEffect(() => {
    topMovies();
  }, []);

  // genres
  const genreURL = `https://api.themoviedb.org/3/genre/movie/list?language=en%27,%20options`;
  const [gnrmvies, setGnrmvies] = useState([]);
  const genreMovie = async () => {
    const res = await fetch(genreURL + apiKey);
    const genrm = await res.json();
    // console.log(genrm.genres);
    setGnrmvies(genrm.genres);
  };
  useEffect(() => {
    genreMovie();
  }, []);
  return (
    <>
      <section className="py-12">
        <div className="contizer">
          <h2 className="text-2xl font-semibold text-black pb-6">
            Now Playing Movies
          </h2>
          <div className="movieBox flex flex-col xs:flex-row gap-6">
            {/* filterBox  */}
            <form
              action="/action_page.php"
              className="movieDetails max-w-full xs:max-w-[320px] "
            >
              {/* sort  */}
              <div className="sort w-full mb-6">
                {/* accrodion windUi  */}
                <details
                  className="border border-gray-300 rounded-lg shadow-lg group"
                  open
                >
                  <summary className="relative cursor-pointer list-none p-4 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900 border-b">
                    Sort
                    <span className="absolute right-4 transition duration-300 top-[50%] -translate-y-[50%] shrink-0 stroke-slate-700 group-open:rotate-90 bg-white">
                      <MdChevronRight size={24} />
                    </span>
                  </summary>
                  <div className="p-4 ">
                    <h3 className="font-light min-w-fit text-black mb-2">
                      Sort Results By
                    </h3>
                    {/* tailwind select  */}
                    <select
                      className="select bg-gray-300 text-black focus:outline-none rounded select-sm min-w-full"
                      defaultValue="Title A-Z"
                    >
                      <option value="Title A-Z" className="bg-white">
                        Title (A-Z)
                      </option>
                      <option
                        value="Popularity Descending"
                        className="bg-white"
                      >
                        Popularity Descending
                      </option>
                      <option value="Popularity Ascending" className="bg-white">
                        Popularity Ascending
                      </option>
                      <option value="Rating Ascending" className="bg-white">
                        Rating Ascending
                      </option>
                      <option
                        value="Rating Descending"
                        className="bg-white"
                        disabled
                      >
                        Rating Descending
                      </option>
                      <option
                        value="Release Date Descending"
                        className="bg-white"
                      >
                        Release Date Descending
                      </option>
                      <option
                        value="Release Date Ascending"
                        className="bg-white"
                      >
                        Release Date Ascending
                      </option>
                    </select>
                  </div>
                </details>
              </div>
              {/* Filters  */}
              <div className="sort w-full">
                {/* accrodion windUi  */}
                <details
                  className="border border-gray-300 rounded-lg shadow-lg group"
                  open
                >
                  <summary className="relative cursor-pointer list-none p-4 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900 border-b">
                    Filters
                    <span className="absolute right-4 transition duration-300 top-[50%] -translate-y-[50%] shrink-0 stroke-slate-700 group-open:rotate-90 bg-white">
                      <MdChevronRight size={24} />
                    </span>
                  </summary>
                  <div className="box flex flex-col">
                    {/* Show Me  */}
                    <div className="p-4 border-b">
                      <h3 className="font-light text-black mb-2">Show Me</h3>

                      {/* form */}
                      <div className="flex flex-col gap-1 text-black ">
                        <div className="inputgroop flex gap-3">
                          <input
                            type="radio"
                            id="html"
                            name="fav_language"
                            value=""
                          />
                          <label htmlFor="html">Everything</label>
                        </div>
                        <div className="inputgroop flex gap-3">
                          <input
                            type="radio"
                            id="css"
                            name="fav_language"
                            value=""
                          />
                          <label htmlFor="css">Movies I Have not Seen</label>
                        </div>
                        <div className="inputgroop flex gap-3">
                          <input
                            type="radio"
                            id="javascript"
                            name="fav_language"
                            value="JavaScript"
                          />
                          <label htmlFor="javascript">Movies I Have Seen</label>
                        </div>
                      </div>
                    </div>
                    {/* Release Dates  */}
                    <div className="p-4 border-b">
                      <h3 className="font-light text-black mb-2">
                        Release Dates
                      </h3>
                      {/* form */}
                      <div className="flex flex-col gap-2 text-black mb-2">
                        <div className="inputgroop flex gap-3">
                          <input
                            type="checkbox"
                            id="releases"
                            name="releases"
                            value=""
                          />
                          <label htmlFor="releases">Search all releases?</label>
                        </div>
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center gap-2 justify-between">
                            <label htmlFor="datemin">from</label>
                            <input
                              type="date"
                              id="datemin"
                              name="datemin"
                              min="2000-01-02"
                              value={"2000-01-02"}
                              className="border border-blue-400 rounded p-1"
                            />
                          </div>
                          <div className="flex items-center gap-2 justify-between">
                            <label htmlFor="datemax">to</label>
                            <input
                              type="date"
                              id="datemax"
                              name="datemax"
                              max="2041-12-31"
                              className="border border-blue-400 rounded p-1"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* genres  */}
                    <div className="p-4 border-b">
                      <h3 className="font-light text-black mb-2">Genres</h3>
                      {/* genresMovies  */}
                      <div className="gnreMovie flex items-center flex-wrap gap-2 py-2">
                        {gnrmvies.map((gMovie) => (
                          <button
                            className="text-black hover:bg-blue-700 hover:text-white hover:border-transparent inline-block px-3 border rounded-xl cursor-pointer"
                            key={gMovie.id}
                          >
                            {gMovie.name}
                          </button>
                        ))}
                      </div>
                    </div>
                    {/* Certification  */}
                    <div className="p-4 border-b">
                      <h3 className="font-light text-black">Certification</h3>
                    </div>
                    {/* Language */}
                    <div className="p-4 border-b">
                      <h3 className="font-light text-black mb-2">
                        Language{" "}
                        <span className="bg-gray-400 text-white inline-block m-auto text-center rounded-full text-xs w-[13px] h-[13px]">
                          ?
                        </span>
                      </h3>
                      <select
                        name=""
                        id=""
                        className="w-full border p-2 mb-2 text-black rounded"
                      >
                        <option value="country">Country</option>
                        <option value="country">Country</option>
                        <option value="country">Country</option>
                        <option value="country">Country</option>
                        <option value="country">Country</option>
                        <option value="country">Country</option>
                        <option value="country">Country</option>
                      </select>
                    </div>
                    {/* User Score */}
                    <div className="p-4 border-b">
                      <h3 className="font-light text-black">
                        User Score{" "}
                        <span className="bg-gray-400 text-white inline-block m-auto text-center rounded-full text-xs w-[13px] h-[13px]">
                          ?
                        </span>
                      </h3>
                    </div>
                    {/* Minimum User Votes */}
                    <div className="p-4 border-b">
                      <h3 className="font-light text-black">
                        Minimum User Votes
                      </h3>
                    </div>
                    {/* Runtime */}
                    <div className="p-4 border-b">
                      <h3 className="font-light text-black">
                        Minimum User Votes
                      </h3>
                    </div>
                    {/* Runtime */}
                    <div className="p-4 border-b">
                      <h3 className="font-light text-black mb-2">Keywords</h3>
                      <input
                        className="w-full p-2 border text-black text-sm font-light mb-2"
                        type="text"
                        placeholder="Filter by keywords..."
                      />
                    </div>
                  </div>
                </details>
                <button className="btn btn-primary w-full my-4 rounded-full text-white text-lg">
                  Search
                </button>
              </div>
            </form>
            {/* movieDetails dynamic  */}
            <div className="moviesWrapper w-full myGrid">
              {movies.map((movie) => (
                <div key={movie.id} className="">
                  <MovieCard movie={movie} imgUrl={imgUrl} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NowPlaying;
