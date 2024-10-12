import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AiOutlineMinus } from "react-icons/ai";
import { BsBookmarkFill, BsHeartFill, BsStarFill } from "react-icons/bs";
import { GoTriangleDown } from "react-icons/go";

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
              <div className="flex items-start gap-2 lg:gap-6">
                <div className="text-black w-9 inline-block">
                  {credit.release_date ? (
                    credit.release_date.slice(0, 4)
                  ) : (
                    <AiOutlineMinus />
                  )}
                </div>
                <div
                  className="circleDot min-w-[14px] h-[14px] rounded-full border border-blue-400 grid place-items-center my-[5px] cursor-pointer group relative"
                  onClick={() => {
                    handleToggle(credit.id);
                  }}
                >
                  {activeId === credit.id && (
                    <span
                      className={`inline-block w-2 h-2 rounded-full bg-blue-600`}
                    ></span>
                  )}
                  {cardIndex === credit.id && (
                    <div
                      className={`ContBox absolute left-[-60px] sm:left-[-72px] md:-left-[74px] bottom-[calc(100%+10px)] flex gap-2 lg:gap-3 w-[310px] xs:w-[420px] sm:w-[330px] md:w-[420px] bg-blue-950 p-2 rounded lg:rounded-lg shadow-lg`}
                    >
                      <Link to={`/Detailpage/${credit.id}`}>
                        {credit.backdrop_path ? (
                          <img
                            src={imgUrl + credit.poster_path}
                            alt="Poster"
                            className="rounded lg:rounded-lg w-[100px] shrink-0"
                          />
                        ) : (
                          <img
                            src="https://placehold.co/100x140"
                            alt="Placeholder"
                            className="rounded lg:rounded-lg w-[100px] shrink-0"
                          />
                        )}
                      </Link>
                      <div className="flex flex-col gap-1 justify-between w-full">
                        <p className="text-white w-fit text-sm font-medium">
                          <span>{credit.title || "Coming Soon"}</span>
                          <span className="inline-block ml-2">⭐⭐⭐⭐</span>
                        </p>
                        <p
                          className="text-sm font-light text-gray-200"
                          style={{ wordBreak: "break-all" }}
                        >
                          {credit.overview
                            ? `${credit.overview.slice(0, 100)}...`
                            : "Coming Soon"}
                        </p>
                        <div className="flex gap-2">
                          <span className="w-6 aspect-square rounded-md bg-blue-600 grid place-items-center">
                            <BsHeartFill size={14} />
                          </span>
                          <span className="w-6 aspect-square rounded-md bg-blue-600 grid place-items-center">
                            <BsBookmarkFill size={14} />
                          </span>
                          <span className="w-6 aspect-square rounded-md bg-blue-600 grid place-items-center">
                            <BsStarFill size={14} />
                          </span>
                        </div>
                      </div>
                      <span className="absolute left-[16.2%] xs:left-[12%] sm:left-[18.4%] md:left-[15.4%] bottom-[-18px]">
                        <GoTriangleDown size={32} color="rgb(23 37 84)" />
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex flex-col">
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
                    <span className="text-gray-600 text-sm"> as</span>
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
