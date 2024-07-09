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
    setDiscmovies([...discmovies, ...data.results.slice(0, 9)]); // Append new movies to the existing movie list
  };

  useEffect(() => {
    discMoviesShow();
  }, [page]); // Fetch movies whenever page changes

  const handleLoadMore = () => {
    setPage(page + 1 + 1);
  };

  return (
    <>
      <section className="bg-gray-50 py-8 ">
        <h3 className="text-2xl font-semibold text-yellow-400 pb-2 text-center">
          All Movies
        </h3>
        <div className="contizer">
          <div className="discWrappper flex justify-center flex-wrap gap-2">
            {discmovies.map((movie) => (
              <div
                key={movie.id}
                className="max-w-[156px] text-sm border rounded-md overflow-hidden hover:shadow-md"
              >
                <MovieCard key={movie.id} movie={movie} imgUrl={imgUrl} />
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            <Button
              className="py-2 mt-2 mb-8 px-8 rounded-full bg-gradient-to-r from-[#1DD4AB] to-[#02B5E2] text-lg font-semibold"
              onClick={handleLoadMore}
            >
              Load More
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default DiscoverMovie;
