/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const apiKey = "629353605eab6723aee2f62b54183d48";
const imgUrl = "https://image.tmdb.org/t/p/original/";
export default function Leaderboard() {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const maxPopularity = 3000;
  useEffect(() => {
    const fetchLeaderboardData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`
        );
        setLeaderboardData(response.data.results.slice(0, 10));
      } catch (error) {
        console.error("Error fetching data from TMDB:", error);
      }
    };
    fetchLeaderboardData();
  }, []);

  return (
    <section className="bg-gray-50 py-8 lg:py-12 text-gray-600">
      <div className="contizer">
        {/* heading */}
        <div className="flex flex-wrap gap-4 lg:gap-12 heading">
          <h3 className="w-fit font-semibold text-[#9d4848] text-lg sm:text-xl lg:text-2xl">
            Leaderboard
          </h3>
          <div className="flex flex-col gap-1 lg:gap-1.5 text-gray-600">
            <article className="flex items-center gap-2">
              <span className="bg-gradient-to-r from-[#BFFECF] to-[#21D5A9] shadow-lg mb-[2px] rounded-full w-2 h-2"></span>
              <span className="inline-block text-sm">All Time Popularity</span>
            </article>
            <article className="flex items-center gap-2">
              <span className="bg-gradient-to-r from-[#FDC070] to-[#D93C63] shadow-lg mb-[2px] rounded-full w-2 h-2"></span>
              <span className="inline-block text-sm">
                This Week's Popularity
              </span>
            </article>
          </div>
        </div>
        {/* progressbar */}
        <div className="gap-3 lg:gap-6 grid grid-cols-1 md:grid-cols-2 mt-6 lg:mt-8 w-full leaderBoxs">
          {leaderboardData.map((item) => {
            const allTimeProgress = Math.min(
              (item.popularity / maxPopularity) * 100,
              100
            );
            const weeklyPopularity = Math.floor(Math.random() * 5000) + 1;
            const weeklyProgress = Math.min(
              (weeklyPopularity / 5000) * 100,
              100
            );

            return (
              <div
                key={item.id}
                className="flex items-center gap-2 lg:gap-4 item"
              >
                <div className="bg-purple-500 rounded-full w-12 lg:w-16 aspect-square overflow-hidden img shrink-0">
                  <Link to={`Detailpage/${item.id}`}>
                    <img
                      src={`${imgUrl}${item.poster_path}`}
                      alt={item.title}
                      className="w-full h-full"
                    />
                  </Link>
                </div>
                <div className="flex flex-col lg:gap-0.5 w-full">
                  <h3 className="w-fit font-semibold text-black text-sm userName">
                    {item.title}
                  </h3>
                  <div className="flex items-center w-full">
                    <div
                      className="bg-gradient-to-r from-[#BFFECF] to-[#21D5A9] rounded-full h-2 lg:h-2.5 allTimes"
                      style={{ width: `${allTimeProgress}%` }}
                    ></div>
                    <span className="inline-block mt-[2px] ml-2 text-xs leading-none">
                      {item.popularity.toFixed(0)}
                    </span>
                  </div>
                  <div className="flex items-center w-full">
                    <div
                      className="bg-gradient-to-r from-[#FDC070] to-[#D93C63] rounded-full h-2 lg:h-2.5 ThisWeek"
                      style={{ width: `${weeklyProgress}%` }}
                    ></div>
                    <span className="inline-block mt-[2px] ml-2 text-xs leading-none">
                      {weeklyPopularity}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
