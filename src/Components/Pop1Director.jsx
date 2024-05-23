/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
function Pop1Director({ directors, dWin, imgUrl }) {
  const { id, profile_path, name, popularity } = directors;

  // user score
  let percent = popularity ? popularity : "20";

  // winner card customise
  const customiseWinner = () => {
    const thisBtn = document.querySelector(".winCards1");
    if (thisBtn) {
      return (thisBtn.parentElement.parentElement.parentElement.style.boxShadow =
        "0 4px 10px 1px #01d2787d");
    }
  };

  // oscar wins
  const makeWinner = (percent, dWin) => {
    if (percent === dWin) {
      return (
        <span
          className={`winCards1 text-md font-semibold px-4 py-1 my-2 rounded-full bg-[#01D277] inline-block text-white ${customiseWinner()}`}
        >
          Winner!
        </span>
      );
    } else {
      return (
        <span className="text-md font-medium px-4 py-1 my-2 rounded-full bg-gray-400 inline-block text-white">
          Nominee
        </span>
      );
    }
  };

  return (
    <>
      <Link
        to={`/AwardsCard/${id}`}
        className="rounded-t-lg overflow-hidden inline-block"
      >
        <img
          src={
            profile_path
              ? imgUrl + profile_path
              : "https://placehold.co/400x600"
          }
          alt=""
        />
      </Link>
      <div className="text p-2 ">
        <div>{makeWinner(percent, dWin)}</div>
        <p className="font-semibold">{name}</p>
        <Link
          to={`/AwardsCard/${id}`}
          className="hover:underline font-extralight text-sm"
        >
          Movie Name
        </Link>
      </div>
    </>
  );
}

export default Pop1Director;
