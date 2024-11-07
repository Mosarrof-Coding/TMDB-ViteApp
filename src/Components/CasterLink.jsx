/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const CasterLink = ({ caster: { id, profile_path }, imgUrl }) => {
  return (
    <Link
      to={`/PopularPeopleDetails/${id}`}
      className="inline-block rounded overflow-hidden w-28 sm:w-36"
    >
      {profile_path ? (
        <img
          src={imgUrl + profile_path}
          alt=""
          className="w-full hover:scale-110 transition-all duration-300"
        />
      ) : (
        <img
          src="https://placehold.co/140x210"
          alt=""
          className="w-full hover:scale-110 transition-all duration-300"
        />
      )}
    </Link>
  );
};

export default CasterLink;
