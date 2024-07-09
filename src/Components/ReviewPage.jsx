/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MdStar } from "react-icons/md";

function ReviewPage() {
  const params = useParams();
  const detailMovieUrl = `https://api.themoviedb.org/3/movie/${params.id}?language=en-US', options`;
  const reviewUrl = `https://api.themoviedb.org/3/movie/${params.id}/reviews?`;
  const apiKey = `&api_key=${import.meta.env.VITE_TMDB_API_KEY}`;
  const imgUrl = `https://image.tmdb.org/t/p/original/`;

  const [detail, setDetail] = useState([]);
  const movieDetail = async () => {
    const res = await fetch(detailMovieUrl + apiKey);
    const data = await res.json();
    // console.log(data);
    setDetail(data);
  };

  useEffect(() => {
    movieDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);

  // fetch Reviews api
  const [review, setReview] = useState([]);
  //   const [reviewArr, setReviewArr] = useState([]);
  const reviewCount = async () => {
    const res = await fetch(reviewUrl + apiKey);
    const data = await res.json();
    // console.log(data);
    setReview(data.results);
    const reviewsMap = {};
    data.results.forEach((review) => {
      if (!reviewsMap[review.author]) {
        reviewsMap[review.author] = [];
      }
      reviewsMap[review.author].push(review);
    });
    setReview(reviewsMap);
  };
  useEffect(() => {
    reviewCount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reviewUrl, apiKey]);

  return (
    <>
      <section className="min-h-[63.7vh]">
        <div className="bg-gray-600">
          <div className="contizer">
            {/* banner  */}
            <div className="bb py-4 flex items-center gap-8">
              <div className="w-20">
                {detail.poster_path ? (
                  <div className=" object-cover overflow-hidden">
                    <img
                      src={imgUrl + detail.poster_path}
                      alt={detail.title}
                      className="rounded-lg"
                    />
                  </div>
                ) : (
                  <div>
                    <img src={"https://placehold.co/400x500"} alt="" />
                  </div>
                )}
              </div>
              <div className="title">
                <h3 className=" text-3xl font-bold text-white">
                  {detail.title}{" "}
                  <span>
                    <span className="release_date text-gray-400 font-medium">
                      {detail.release_date ? (
                        <span>({detail.release_date.slice(0, 4)})</span>
                      ) : (
                        <h2>Loading...</h2>
                      )}
                    </span>
                  </span>
                </h3>
                <Link
                  className="hover:text-gray-400 font-semibold"
                  to={`/Detailpage/${params.id}`}
                >
                  ⬅ Back to main
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="contizer">
          {/* Review  */}
          <div className="fullrevBox flex flex-col sm:grid grid-cols-12 py-8">
            <div className="writComment col-span-3 min-w-[240px]">
              <button className="rBtn px-4 py-2 mb-8 bg-[#3a0e0e] rounded-full">
                🖊 Write Review
              </button>
            </div>
            <div className="cards col-span-9">
              <div className="reviewBox">
                {Object.keys(review).map((author) => (
                  <div key={author} className="mb-4 shadow-lg">
                    {review[author].map((review) => (
                      <div
                        key={author}
                        className="reviewer flex flex-wrap gap-4 text-black rounded-md border p-6"
                      >
                        <div className="w-14 h-14 rounded-full overflow-hidden bg-green-100 border grid place-items-center">
                          {review.author_details.avatar_path ? (
                            <span>
                              <img
                                src={imgUrl + review.author_details.avatar_path}
                                alt=""
                              />
                            </span>
                          ) : (
                            <small>👼🏿</small>
                          )}
                        </div>
                        <span className="name">
                          <h4 className="font-bold text-gray-600">
                            A review by{" "}
                            <span className="font-bold text-blue-800">
                              {review.author}
                            </span>
                          </h4>
                          <small className="font-small text-gray-400">
                            <span className="px-2 py-[2px] mr-2 mt-1 text-white bg-black border shadow-sm inline-flex gap-1 text-[16px] leading-none items-center rounded-md">
                              {review.author_details.rating}.0{" "}
                              <MdStar size={18} />
                            </span>
                            Written by{" "}
                            <a href="" className="text-blue-700">
                              {review.author}
                            </a>{" "}
                            on {review.updated_at.slice(0, 10)}
                          </small>
                        </span>
                        <div className="w-full">
                          <p className="text-gray-800 text-md text-md font-normal">
                            {review.content}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ReviewPage;
