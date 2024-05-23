/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function PeopleCard({ people, imgUrl }) {
  const { id, name, profile_path } = people;
  // console.log(id);
  // const imgUrl = `https://image.tmdb.org/t/p/original/`;
  return (
    <>
      <div className="max-w-[200px] border hover:shadow-md rounded-t-md overflow-hidden">
        <Link to={`/PopularPeopleDetails/${id}`} className="">
          <img className="" src={imgUrl + profile_path} alt={name} />
        </Link>
        <div className="pl-2 pb-3 pt-1">
          <li className="list-none text-black">{name}</li>
          <li className="list-none">
            {people.known_for.length > 0 ? (
              <span>
                {people.known_for.map((item) => (
                  <span
                    className="text-sm font-light text-gray-600"
                    key={item.id}
                  >
                    {item.original_title}
                    {item.original_title ? (
                      <span>{", "}</span>
                    ) : (
                      <span>{""}</span>
                    )}
                  </span>
                ))}
              </span>
            ) : (
              <h2>Not found</h2>
            )}
          </li>
        </div>
      </div>
    </>
  );
}

export default PeopleCard;
