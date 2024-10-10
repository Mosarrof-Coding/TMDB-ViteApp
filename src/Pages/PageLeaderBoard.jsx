import BarChart from "../utility/BarChart";
import Leaderboard from "./Leaderboard";

export default function PageLeaderBoard() {
  return (
    <section className="pt-4 lg:pt-12">
      <div className="contizer">
        <div className="flex justify-between items-center gap-4 flex-wrap">
          <h2 className="text-yellow-600 font-bold text-lg md:text-xl xl:text-2xl min-w-fit">
            Popularity past 30 Days
          </h2>
          <h2 className="text-blue-600 text-sm md:text-base min-w-fit">
            All day Popularity
          </h2>
        </div>{" "}
        <BarChart />
      </div>

      <Leaderboard />
    </section>
  );
}
