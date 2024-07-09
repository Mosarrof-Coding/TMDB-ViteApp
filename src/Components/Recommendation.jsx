/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Recommendation() {
  const rParams = useParams();
  const recUrl = `https://api.themoviedb.org/3/movie/${rParams.id}/recommendations?language=en-US&page=1%27,%20options`;
  const apiKey = `&api_key=${import.meta.env.VITE_TMDB_API_KEY}`;
  const imgUrl = `https://image.tmdb.org/t/p/original/`;

  const [recos, setRecos] = useState([]);
  const recMovie = async () => {
    try {
      const res = await fetch(recUrl + apiKey);
      const data = await res.json();
      //   console.log(data);
      setRecos(data.results);
    } catch (error) {
      console.error("error occured", error);
    }
  };
  useEffect(() => {
    recMovie();
  }, [rParams.id]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="recomendWrap flex gap-4 overflow-x-auto">
        {recos?.length > 0 ? (
          recos.map((reco) => (
            <div
              key={reco.id}
              className="max-w-[260px] min-w-[260px] rounded-md border hover:shadow overflow-hidden mb-1"
            >
              <Link to={`/Detailpage/${reco.id}`} onClick={scrollToTop}>
                {reco?.backdrop_path ? (
                  <img
                    src={imgUrl + reco.backdrop_path}
                    alt={reco.title || "No title"}
                  />
                ) : (
                  <span className="">
                    <img
                      src={"https://placehold.co/260x147"}
                      alt="No backdrop available"
                    />
                  </span>
                )}
              </Link>
              <div className="py-2 px-1 flex justify-between gap-4 items-center flex-wrap">
                <h4 className="text-black font-semibold text-center">
                  {reco.title ? reco.title.slice(0, 20) : "No title"}
                </h4>
                <p
                  className={`text-gray-700 ${
                    (reco.vote_average * 10).toFixed(0).slice(0, 2) >= 70
                      ? "text-blue-600"
                      : (reco.vote_average * 10).toFixed(0).slice(0, 2) >= 50
                      ? "text-yellow-400"
                      : "text-red-600"
                  }`}
                >
                  {(reco.vote_average * 10).toFixed(0).slice(0, 2)}
                  <span>
                    <small>
                      <sup>%</sup>
                    </small>
                  </span>
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">
            We don't have enough data to suggest any movies. You can help by
            rating movies you've seen.
          </p>
        )}
      </div>
    </>
  );
}

export default Recommendation;
