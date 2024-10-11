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
    <section className="py-8 lg:py-12 bg-gray-50 text-gray-600">
      <div className="contizer">
        {/* heading */}
        <div className="heading flex flex-wrap gap-4 lg:gap-12">
          <h3 className="w-fit text-lg sm:text-xl lg:text-2xl font-semibold text-[#9d4848]">
            Leaderboard
          </h3>
          <div className="flex flex-col gap-1 lg:gap-1.5 text-gray-600">
            <article className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#BFFECF] to-[#21D5A9] shadow-lg mb-[2px]"></span>
              <span className="inline-block text-sm">All Time Popularity</span>
            </article>
            <article className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#FDC070] to-[#D93C63] shadow-lg mb-[2px]"></span>
              <span className="inline-block text-sm">
                This Week's Popularity
              </span>
            </article>
          </div>
        </div>
        {/* progressbar */}
        <div className="leaderBoxs mt-6 lg:mt-8 grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-6 w-full">
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
                className="item flex items-center gap-2 lg:gap-4"
              >
                <div className="img w-12 lg:w-16 aspect-square shrink-0 rounded-full overflow-hidden bg-purple-500">
                  <Link to={`Detailpage/${item.id}`}>
                    <img
                      src={`${imgUrl}${item.poster_path}`}
                      alt={item.title}
                      className="w-full h-full"
                    />
                  </Link>
                </div>
                <div className="flex flex-col lg:gap-0.5 w-full">
                  <h3 className="userName w-fit text-black text-sm font-semibold">
                    {item.title}
                  </h3>
                  <div className="w-full flex items-center">
                    <div
                      className="allTimes h-2 lg:h-2.5 rounded-full bg-gradient-to-r from-[#BFFECF] to-[#21D5A9]"
                      style={{ width: `${allTimeProgress}%` }}
                    ></div>
                    <span className="inline-block ml-2 mt-[2px] text-xs leading-none">
                      {item.popularity.toFixed(0)}
                    </span>
                  </div>
                  <div className="w-full flex items-center">
                    <div
                      className="ThisWeek h-2 lg:h-2.5 rounded-full bg-gradient-to-r from-[#FDC070] to-[#D93C63]"
                      style={{ width: `${weeklyProgress}%` }}
                    ></div>
                    <span className="inline-block ml-2 mt-[2px] text-xs leading-none">
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
