/* eslint-disable react/prop-types */
import { MdStar } from "react-icons/md";
export default function Review({ review }) {
  const imgUrl = `https://image.tmdb.org/t/p/original/`;
  let rat = <>{review.author_details.rating}.0</>;
  return (
    <>
      <div className="reviewer flex flex-wrap gap-4 text-black rounded-md border p-2 md:p-4">
        <div className="w-10 lg:w-12 h-10 lg:h-12 rounded-full overflow-hidden bg-green-100 border grid place-items-center">
          {review.author_details.avatar_path ? (
            <span>
              <img src={imgUrl + review.author_details.avatar_path} alt="" />
            </span>
          ) : (
            <small>👼🏿</small>
          )}
        </div>
        <div className="name text-[#ffd428]">
          <h4 className="font-bold text-sm lg:text-base text-gray-600">
            A review by{" "}
            <span className="font-bold text-blue-800">{review.author}</span>
          </h4>
          <small className="text-gray-400">
            <div className="px-1.5 lg:px-2 mr-1 lg:mr-1.5 text-sm lg:text-base inline-flex gap-1 items-center rounded bg-emerald-800">
              <span className="inline-block text-white drop-shadow-lg mt-[1px] lg:mt-0.5 font-light">
                {rat}
              </span>
              <span className="hidden lg:inline-block">
                <MdStar size={18} color="#ffd428" className="drop-shadow-lg" />
              </span>
              <span className="lg:hidden inline-block">
                <MdStar size={16} color="#ffd428" className="drop-shadow-lg" />
              </span>
            </div>
            Written by{" "}
            <a href="" className="text-blue-700">
              {review.author}
            </a>{" "}
            on {review.updated_at.slice(0, 10)}
          </small>
        </div>
        <div className="w-full">
          <p className="text-gray-400 text-sm lg:text-base font-light">
            {review.content.slice(0, 320)}...
          </p>
        </div>
      </div>
    </>
  );
}
