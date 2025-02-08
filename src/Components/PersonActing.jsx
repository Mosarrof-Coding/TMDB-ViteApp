import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AiOutlineMinus } from "react-icons/ai";
import { BsBookmarkFill, BsHeartFill, BsStarFill } from "react-icons/bs";
import { IoTriangleSharp } from "react-icons/io5";

function PersonActing() {
  const params = useParams();
  const apiKey = `&api_key=629353605eab6723aee2f62b54183d48`;
  const cdtUrl = `https://api.themoviedb.org/3/person/${params.id}/combined_credits?language=en-US${apiKey}`;
  const imgUrl = `https://image.tmdb.org/t/p/original/`;

  const [credits, setCredits] = useState([]);
  const [cardIndex, setCardIndex] = useState(false);
  const [activeId, setActiveId] = useState(false);
  const creditsOf = async () => {
    try {
      const res = await fetch(cdtUrl);
      const data = await res.json();
      const sortedData = data.cast.sort(
        (a, b) => new Date(b.release_date) - new Date(a.release_date)
      );
      setCredits(sortedData);
    } catch (error) {
      console.error("Error fetching credits:", error);
    }
  };
  useEffect(() => {
    creditsOf();
  }, [params.id]);

  const handleToggle = (id) => {
    setCardIndex(id);
    setActiveId(id);
  };
  return (
    <>
      <div className="wrp flex flex-col gap-2 sm:gap-4 lg:gap-6 border p-2 lg:p-4">
        {credits.length > 0 ? (
          credits.map((credit) => (
            <div key={credit.id} className="">
              <div className="flex items-start gap-2 lg:gap-6 relative">
                <h4 className="text-black w-9 inline-block">
                  {credit.release_date ? (
                    credit.release_date.slice(0, 4)
                  ) : (
                    <AiOutlineMinus />
                  )}
                </h4>
                <div
                  className="circleDot min-w-[14px] h-[14px] rounded-full border border-blue-400 grid place-items-center group mt-[1px] sm:mt-0.5 lg:mt-1"
                  onClick={() => {
                    handleToggle(credit.id);
                  }}
                >
                  {activeId === credit.id && (
                    <div
                      className={`inline-block w-2 h-2 rounded-full bg-blue-950 cursor-pointer relative`}
                    >
                      <div className="absolute left-1/2 -translate-x-1/2 bottom-[130%]">
                        <IoTriangleSharp
                          color="rgb(23 37 84)"
                          className="rotate-180 text-xl"
                        />
                      </div>
                    </div>
                  )}
                  {/* absolute card */}
                  {cardIndex === credit.id && (
                    <div
                      className={`ContBox absolute left-0 bottom-[calc(100%+6px)] max-w-full md:max-w-xl flex gap-2 lg:gap-3 bg-blue-950 p-2 rounded shadow-lg border-4 border-blue-800`}
                    >
                      <Link to={`/Detailpage/${credit.id}`}>
                        {credit.backdrop_path ? (
                          <img
                            src={imgUrl + credit.poster_path}
                            alt="Poster"
                            className="rounded w-[100px] shrink-0"
                          />
                        ) : (
                          <img
                            src="https://placehold.co/100x140"
                            alt="Placeholder"
                            className="rounded w-[100px] shrink-0"
                          />
                        )}
                      </Link>
                      <div className="flex flex-col gap-0.5 justify-evenly w-full">
                        <div className="text-white w-fit text-xs xs:text-sm lg:text-base font-medium flex flex-wrap">
                          <p>{credit.title || "Coming Soon"}</p>
                          <p className="inline-block ml-2">⭐⭐⭐⭐</p>
                        </div>
                        <p className="text-xs sm:text-sm font-light text-gray-200">
                          {credit.overview
                            ? `${credit.overview.slice(0, 100)}...`
                            : "Coming Soon"}
                        </p>
                        <div className="flex gap-2">
                          <span className="p-1 bg-blue-600 grid place-items-center cursor-pointer">
                            <BsHeartFill className="text-sm" />
                          </span>
                          <span className="p-1 bg-blue-600 grid place-items-center cursor-pointer">
                            <BsBookmarkFill className="text-sm" />
                          </span>
                          <span className="p-1 bg-blue-600 grid place-items-center cursor-pointer">
                            <BsStarFill className="text-sm" />
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex flex-col gap-0.5">
                  <h4 className="text-black w-fit font-semibold">
                    {credit.title || "Coming Soon"}
                  </h4>
                  <span className="text-black w-fit font-light pl-4">
                    <span className="text-gray-600 text-sm">
                      {credit.episode_count && (
                        <span className="text-blue-500">
                          ({credit.episode_count} episode)
                        </span>
                      )}
                    </span>
                    <span className="text-gray-400 text-sm">as</span>
                    <span>{credit.character || <AiOutlineMinus />}</span>
                  </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-red-600">
            There is no Occurrence available now!
          </div>
        )}
      </div>
    </>
  );
}

export default PersonActing;
