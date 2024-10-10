/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Pop0Picture({ movie, win, imgUrl }) {
  const { id, poster_path, original_title, vote_average } = movie;

  // Store only the first director
  const [director, setDirector] = useState("");

  const fetchDirector = async () => {
    try {
      const creditsRes = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=629353605eab6723aee2f62b54183d48`
      );
      const creditsData = await creditsRes.json();
      const crews = creditsData.crew;

      // Find the first director in the crew list
      const directorData = crews.find(
        (crew) => crew.department === "Directing" && crew.job === "Director"
      );

      // Set the director's name or fallback to 'Unknown Director'
      setDirector(directorData ? directorData.name : "Unknown Director");
      console.log("Director:", directorData ? directorData.name : "None");
    } catch (error) {
      console.error("Error fetching director:", error);
    }
  };

  useEffect(() => {
    fetchDirector();
  }, []);

  // Calculate percentage for vote average
  let percent = vote_average
    ? (vote_average * 10).toFixed(0).slice(0, 2)
    : "20";
  let progressBaar = parseInt(percent);

  // Customise winner card
  const customiseWinner = () => {
    const thisBtn = document.querySelector(".winCards");
    if (thisBtn) {
      return (thisBtn.parentElement.parentElement.parentElement.style.boxShadow =
        "0 4px 10px 1px #01d2787d");
    }
  };

  // Handle Winner or Nominee badge
  const makeWinner = (percent, win) => {
    if (percent === win) {
      return (
        <span
          className={`winCards ${customiseWinner()} text-sm lg:text-base font-medium px-4 py-[1px] my-1.5 lg:my-3 rounded-full bg-[#01D277] inline-block text-white`}
        >
          Winner
        </span>
      );
    } else {
      return (
        <span className="text-sm lg:text-base px-4 py-[1px] my-1.5 lg:my-3 font-medium rounded-full bg-gray-400 inline-block text-white">
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
          <img src={imgUrl + poster_path} alt={original_title} />
        </Link>

        {/* Daisy progress */}
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
        <Link
          to={`/AwardsCardMovie/${id}`}
          className="inline-block font-semibold text-sm lg:text-base leading-none"
        >
          {original_title}
        </Link>
        {/* Display Single Director */}
        <Link to="" className="hover:underline block">
          <small>{director}</small>
        </Link>
      </div>
    </>
  );
}

export default Pop0Picture;
