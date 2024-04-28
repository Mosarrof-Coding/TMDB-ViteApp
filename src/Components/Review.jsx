/* eslint-disable react/prop-types */
import { MdStar } from "react-icons/md";
function Review({ review }) {
  const imgUrl = `https://image.tmdb.org/t/p/original/`;
  let rat = (
    <>
      {review.author_details.rating}.0 <MdStar size={18} />
    </>
  );
  return (
    <>
      <div className="reviewer flex flex-wrap gap-4 text-black rounded-md border p-6">
        <div className="w-14 h-14 rounded-full overflow-hidden bg-green-100 border grid place-items-center">
          {review.author_details.avatar_path ? (
            <span>
              <img src={imgUrl + review.author_details.avatar_path} alt="" />
            </span>
          ) : (
            <small>👼🏿</small>
          )}
        </div>
        <span className="name">
          <h4 className="font-bold text-gray-600">
            A review by{" "}
            <span className="font-bold text-blue-800">{review.author}</span>
          </h4>
          <small className="font-small text-gray-400">
            <span className="px-2 py-[2px] mr-2 mt-1 text-white bg-black border shadow-sm inline-flex gap-1 text-[16px] leading-none items-center rounded-md">
              {rat}
            </span>
            Written by{" "}
            <a href="" className="text-blue-700">
              {review.author}
            </a>{" "}
            on {review.updated_at.slice(0, 10)}
          </small>
        </span>
        <div className="w-full">
          <p className="text-gray-400 text-md text-md font-light">
            {review.content.slice(0, 320)}...
          </p>
        </div>
      </div>
    </>
  );
}

export default Review;
