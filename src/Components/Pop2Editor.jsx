/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
function Pop2Editor({ editor, popEdit }) {
  const { id, profile_path, name, popularity } = editor;
  const imgUrl = `https://image.tmdb.org/t/p/original/`;

  // user score
  let percent = popularity ? popularity : "20";

  // winner card customise
  const customiseWinner = () => {
    const thisBtn = document.querySelector(".winCards2");
    if (thisBtn) {
      return (thisBtn.parentElement.parentElement.parentElement.style.boxShadow =
        "0 4px 10px 1px #01d2787d");
    }
  };
  // oscar wins
  const makeWinner = (percent, popEdit) => {
    if (percent === popEdit) {
      return (
        <span
          className={`winCards2 text-md font-semibold px-4 py-1 my-2 rounded-full bg-[#01D277] inline-block text-white ${customiseWinner()} `}
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
      <Link to={`/AwardsCard/${id}`} className="inline-block">
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
        <div>{makeWinner(percent, popEdit)}</div>
        <p className="font-semibold">{name}</p>
      </div>
    </>
  );
}

export default Pop2Editor;
