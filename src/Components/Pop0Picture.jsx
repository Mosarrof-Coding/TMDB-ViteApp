/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";

function Pop0Picture({ movie, win, imgUrl }) {
  // const id = useParams();
  const { id, poster_path, original_title, vote_average } = movie;

  // user score
  let percent = vote_average
    ? (vote_average * 10).toFixed(0).slice(0, 2)
    : "20";
  let progressBaar = parseInt(percent);

  // winner card customise
  const customiseWinner = () => {
    const thisBtn = document.querySelector(".winCards");
    if (thisBtn) {
      return (thisBtn.parentElement.parentElement.parentElement.style.boxShadow =
        "0 4px 10px 1px #01d2787d");
    }
  };
  // oscar wins
  const makeWinner = (percent, win) => {
    if (percent === win) {
      return (
        <span
          className={`winCards ${customiseWinner()} text-md font-semibold px-4 py-1 my-4 rounded-full bg-[#01D277] inline-block text-white`}
        >
          Winner
        </span>
      );
    } else {
      return (
        <span className="text-md font-medium px-4 py-1 my-4 rounded-full bg-gray-400 inline-block text-white">
          Nominee
        </span>
      );
    }
  };

  return (
    <>
      <li className={`relative`}>
        <Link
          to={`/AwardsCardMovie/${id}`}
          className="rounded-t-lg overflow-hidden inline-block"
        >
          <img src={imgUrl + poster_path} alt="" />
        </Link>
        {/* daisy progress  */}
        <div
          className={`myProgress radial-progress border-4 border-gray-200 text-[10px] font-medium absolute left-2 -bottom-4 ${
            percent >= 70
              ? "text-green-600"
              : percent >= 50
              ? "text-yellow-500"
              : "text-red-600"
          }`}
          style={{ "--value": progressBaar }}
          role="progressbar"
        >
          <p>
            {percent}
            <small>
              <sup>%</sup>
            </small>
          </p>
        </div>
      </li>
      <div className="text p-2">
        <div>{makeWinner(percent, win)}</div>
        <Link to={`/AwardsCardMovie/${id}`} className="font-semibold">
          {original_title}
        </Link>
        <div>
          <Link className="hover:underline">Director's Name</Link>
        </div>
      </div>
    </>
  );
}

export default Pop0Picture;
