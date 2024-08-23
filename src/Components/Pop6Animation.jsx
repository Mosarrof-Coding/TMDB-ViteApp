/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Pop6Animation({ anomation, popAnimation, imgUrl }) {
  const { id, profile_path, name, popularity } = anomation;

  // User score
  let percent = popularity ? popularity : "20";

  // Function to customize the winner's card with shadow
  const customiseWinner = () => {
    const thisBtn = document.querySelector(`.winCards-${id}`);
    if (thisBtn) {
      thisBtn.parentElement.parentElement.parentElement.style.boxShadow =
        "0 4px 10px 1px #01d2787d";
    }
  };

  // Determine if the animation is a winner or nominee
  const makeWinner = (percent, win) => {
    if (percent === win) {
      return (
        <span
          className={`winCards-${id} text-base lg:text-lg font-semibold px-4 py-[2px] my-3 rounded-full bg-[#01D277] inline-block text-white`}
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

  // UseEffect to customize winner shadow effect
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
      <div className="text p-2">
        <div>{makeWinner(percent, popAnimation)}</div>
        <p className="font-semibold">{name}</p>
      </div>
    </>
  );
}

export default Pop6Animation;
