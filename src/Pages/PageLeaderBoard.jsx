import BarChart from "../utility/BarChart";
import Leaderboard from "./Leaderboard";

export default function PageLeaderBoard() {
  return (
    <section className="pt-4 lg:pt-12">
      <div className="contizer">
        <div className="flex flex-wrap justify-between items-center gap-4">
          <h2 className="min-w-fit font-bold text-yellow-600 text-lg md:text-xl xl:text-2xl">
            Popularity past 30 Days
          </h2>
          <h2 className="min-w-fit text-blue-600 text-sm md:text-base">
            All day Popularity
          </h2>
        </div>
        <BarChart />
      </div>

      <Leaderboard />
    </section>
  );
}
