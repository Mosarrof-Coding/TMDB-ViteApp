/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function AcademyWinnerCard({ imgUrl, awards, id, year, acyear }) {
  return (
    <>
      <Link className="max-w-[80px]" to={`/PopularPeopleDetails/${id}`}>
        {awards?.profile_path ? (
          <img src={imgUrl + awards?.profile_path} alt="" className="rounded" />
        ) : (
          <div className="min-h-[106px]">
            <img
              src="https://placehold.co/80x120"
              alt=""
              className="rounded-lg shadow-lg"
            />
          </div>
        )}
      </Link>
      <div className="flex flex-col md:flex-row md:gap-2 md:items-center justify-center md:justify-between sm:w-full">
        <div className="">
          <h4 className="name font-bold text-blue-800">
            <span className="text-black">Best -</span>{" "}
            {awards?.known_for_department}
          </h4>
          <Link
            to={`/PopularPeopleDetails/${id}`}
            className="name text-blue-500 fond-bold hover:underline"
          >
            {awards?.name}
          </Link>
        </div>
        <h4 className="oscar text-blue-500 hidden md:block">Oscar</h4>
        <h4 className="nominee text-gray-400 font-semibold">Nominee</h4>
        <h4 className="year text-black font-extralight">{year}</h4>
        <Link
          to="/Pop0WinnersPage"
          className="Academi hidden md:block text-blue-500"
        >
          {acyear}th Academy Awards
        </Link>
      </div>
    </>
  );
}

export default AcademyWinnerCard;
