/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AiOutlineMinus } from "react-icons/ai";
import { BsBookmarkFill, BsHeartFill, BsStarFill } from "react-icons/bs";
import { GoTriangleDown } from "react-icons/go";

function PersonActing() {
  const params = useParams();
  const apiKey = `&api_key=${import.meta.env.VITE_TMDB_API_KEY}`;
  const cdtUrl = `https://api.themoviedb.org/3/person/${params.id}/combined_credits?language=en-US${apiKey}`;

  const imgUrl = `https://image.tmdb.org/t/p/original/`;
  const [credits, setCredits] = useState([]);

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

  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const handleToggle = (index) => {
    setSelectedCardIndex(index === selectedCardIndex ? null : index);
  };

  return (
    <>
      <div className="wrp flex flex-col gap-6 border p-4">
        {credits.length > 0 ? (
          credits.map((credit, index) => (
            <div key={index} className="">
              <div className="flex items-start gap-6">
                <span className="text-black w-8">
                  {credit.release_date ? (
                    credit.release_date.slice(0, 4)
                  ) : (
                    <span className="inline-block w-8 text-center">
                      <AiOutlineMinus />
                    </span>
                  )}
                </span>
                {/* thumbnile visibility  */}
                <div
                  className="circleDot min-w-[14px] h-[14px] rounded-full border border-black grid place-items-center my-[5px] cursor-pointer group relative"
                  onClick={() => handleToggle(index)}
                >
                  <span
                    className={`inline-block w-2 h-2 rounded-full bg-black opacity-0 group-hover:opacity-100`}
                  ></span>

                  {/* card  */}
                  <div
                    className={`ContBox flex gap-4 w-[420px] bg-blue-950 absolute -left-[74px] bottom-[calc(100%+10px)] p-2 rounded-lg shadow-lg ${
                      selectedCardIndex === index ? "" : "hidden"
                    }`}
                  >
                    {/* img  */}
                    <Link to={`/Detailpage/${credit.id}`} className="">
                      {credit.backdrop_path ? (
                        <div className="rounded-lg overflow-hidden min-w-[80px] max-w-[80px]">
                          <img src={imgUrl + credit.poster_path} alt="" />
                        </div>
                      ) : (
                        <div className="rounded-lg overflow-hidden min-w-[80px] max-w-[80px]">
                          <img src="https://placehold.co/80x120" alt="" />
                        </div>
                      )}
                    </Link>
                    {/* text  */}
                    <div className="flex flex-col gap-1 justify-between w-full">
                      <p className="text-white w-fit text-sm font-medium">
                        <span>
                          {credit.title ? (
                            credit.title
                          ) : (
                            <span className="inline-block mx-auto">
                              Coming Soon
                            </span>
                          )}
                        </span>
                        <span className="inline-block ml-2">⭐⭐⭐⭐</span>
                      </p>
                      <p className="text-sm font-light text-gray-200">
                        {credit.overview
                          ? credit.overview.slice(0, 100)
                          : "Coming Soon"}
                        ...
                      </p>
                      {/* icons */}
                      <div className="flex gap-4">
                        <span className="w-7 h-7 rounded-md bg-blue-600 grid place-items-center">
                          <BsHeartFill size={14} />
                        </span>
                        <span className="w-7 h-7 rounded-md bg-blue-600 grid place-items-center">
                          <BsBookmarkFill size={14} />
                        </span>
                        <span className="w-7 h-7 rounded-md bg-blue-600 grid place-items-center">
                          <BsStarFill size={14} />
                        </span>
                      </div>
                    </div>
                    <span className="absolute left-[15.2%] bottom-[-18px]">
                      <GoTriangleDown size={32} color="rgb(23 37 84)" />
                    </span>
                  </div>
                </div>
                {/* title */}
                <div className="flex flex-col">
                  <span className="text-black w-fit font-bold">
                    {credit.title ? (
                      credit.title
                    ) : (
                      <span className="inline-block mx-auto">Coming Soon</span>
                    )}
                  </span>
                  <span className="text-black w-fit font-light pl-4">
                    <span className="text-gray-600 text-sm">
                      {credit.episode_count ? (
                        <span>({credit.episode_count} episode)</span>
                      ) : (
                        ""
                      )}
                    </span>
                    <span className="text-gray-600 text-sm"> as</span>
                    <span>
                      {credit.character ? (
                        credit.character
                      ) : (
                        <span className="inline-block">
                          <AiOutlineMinus />
                        </span>
                      )}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <span className="text-red-600">
            There is no Occurance available now!
          </span>
        )}
      </div>
    </>
  );
}

export default PersonActing;
