/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

function TrendingMovieWeek() {
  const apiKey = `api_key=629353605eab6723aee2f62b54183d48`;
  const trendUrl = `https://api.themoviedb.org/3/trending/movie/week?${apiKey}&language=en-US', options`;
  const imgUrl = `https://image.tmdb.org/t/p/original/`;

  const [trends, setTrends] = useState([]);
  const trendMovie = async () => {
    const res = await fetch(trendUrl);
    const data = await res.json();
    setTrends(data.results);
  };
  useEffect(() => {
    trendMovie();
  }, []);
  return (
    <>
      <div className="trenWrap flex gap-3 lg:gap-5 overflow-x-auto">
        {trends.map((movie) => (
          <div
            key={movie.id}
            className="min-w-[130px] max-w-[180px] lg:min-w-[160px] lg:max-w-[260px] mb-4"
          >
            <MovieCard key={movie.id} movie={movie} imgUrl={imgUrl} />
          </div>
        ))}
      </div>
    </>
  );
}

export default TrendingMovieWeek;
