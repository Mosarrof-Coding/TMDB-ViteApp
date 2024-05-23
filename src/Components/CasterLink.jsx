/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const CasterLink = ({ caster: { id, profile_path }, imgUrl }) => {
  return (
    <Link to={`/PopularPeopleDetails/${id}`}>
      {profile_path ? (
        <div className="">
          {" "}
          <img src={imgUrl + profile_path} alt="" className="rounded-md" />
        </div>
      ) : (
        <div className="">
          <img
            src="https://placehold.co/140x210"
            alt=""
            className="rounded-md"
          />
        </div>
      )}
    </Link>
  );
};

export default CasterLink;
