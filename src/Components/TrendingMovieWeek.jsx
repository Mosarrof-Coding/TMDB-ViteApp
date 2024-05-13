/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

function TrendingMovieWeek() {
  const apiKey = `api_key=629353605eab6723aee2f62b54183d48`;
  const trendUrl = `https://api.themoviedb.org/3/trending/movie/week?${apiKey}&language=en-US', options`;

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
      <section>
        <div className="contizer">
          <div className="trenWrap flex gap-4 overflow-x-auto">
            {trends.map((movie) => (
              <div key={movie.id} className="min-w-[160px] mb-4">
                <MovieCard key={movie.id} movie={movie} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default TrendingMovieWeek;
