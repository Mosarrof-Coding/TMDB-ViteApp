import { useEffect, useState } from "react";

function Cast() {
  const castUrl = `https://api.themoviedb.org/3/person/popular?language=en-US&page=1%27,%20options&api_key=629353605eab6723aee2f62b54183d48`;
  const imgUrl = `https://image.tmdb.org/t/p/original/`;
  const [casts, setCasts] = useState([]);
  const castShow = async () => {
    const res = await fetch(castUrl);
    const cast = await res.json();
    setCasts(cast.results);
    // console.log(cast.results);
  };
  useEffect(() => {
    castShow();
  }, []);
  return (
    <div className="castWrapper flex gap-2 flex-wrap py-12">
      {casts.map((cast) => (
        <div key={cast.id} className="bg-pink-200 border">
          <div className="">
            <img
              className="max-w-[200px]"
              src={imgUrl + cast.profile_path}
              alt=""
            />
          </div>{" "}
          <div className="pt-2 pl-2">
            <h2 className="text-gray-600 py-1 break-all">{cast.name}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cast;
