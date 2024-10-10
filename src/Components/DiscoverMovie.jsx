/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { Button } from "@material-tailwind/react";

function DiscoverMovie() {
  const [page, setPage] = useState(1);
  const [discmovies, setDiscmovies] = useState([]);
  const imgUrl = `https://image.tmdb.org/t/p/original/`;

  const discMoviesShow = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/discover/movie?page=${page}&sort_by=popularity.desc&api_key=629353605eab6723aee2f62b54183d48`
    );
    const data = await res.json();
    setDiscmovies([...discmovies, ...data.results.slice(0, 9)]);
  };

  useEffect(() => {
    discMoviesShow();
  }, [page]);

  const handleLoadMore = () => {
    setPage(page + 1 + 1);
  };

  return (
    <>
      <div className="bg-gray-50 py-4 lg:py-6">
        <div className="contizer">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#252195] pb-2 text-center">
            All Movies
          </h3>
          <div className="discWrappper myGridDis2 lg:myGridDis">
            {discmovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} imgUrl={imgUrl} />
            ))}
          </div>
          <div className="flex justify-center mt-2 lg:mt-4">
            <Button
              className="mt-2 py-1 md:py-2 px-4 md:px-8 rounded-full bg-gradient-to-r from-[#1DD4AB] to-[#02B5E2] text-base md:text-lg font-semibold"
              onClick={handleLoadMore}
            >
              Load More
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DiscoverMovie;
