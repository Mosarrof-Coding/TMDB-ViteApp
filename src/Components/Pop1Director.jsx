/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { Link } from "react-router-dom";
function Pop1Director({ directors, dWin, imgUrl }) {
  const { id, profile_path, name, popularity } = directors;
  let percent = popularity ? popularity : "20";
  const customiseWinner = () => {
    const thisBtn = document.querySelector(".winCards1");
    if (thisBtn) {
      thisBtn.parentElement.parentElement.parentElement.style.boxShadow =
        "0 4px 10px 1px #01d2787d";
    }
  };
  const makeWinner = (percent, win) => {
    if (percent === win) {
      return (
        <span
          className={`winCards1 text-base lg:text-lg font-semibold px-4 py-[2px] my-3 rounded-full bg-[#01D277] inline-block text-white`}
        >
          Winner
        </span>
      );
    } else {
      return (
        <span className="text-base lg:text-lg px-4 py-[2px] my-3 rounded-full bg-gray-400 inline-block text-white">
          Nominee
        </span>
      );
    }
  };
  useEffect(() => {
    customiseWinner();
  }, [percent]);

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
          alt={name}
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
