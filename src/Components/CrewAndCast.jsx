/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function CrewAndCast() {
  const params = useParams();
  const detailMovieUrl = `https://api.themoviedb.org/3/movie/${params.id}?language=en-US', options`;
  const castUrl = `https://api.themoviedb.org/3/movie/${params.id}/credits?language=en-US%27,%20options`;
  const apiKey = `&api_key=629353605eab6723aee2f62b54183d48`;
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

  const [crews, setCrews] = useState([]);
  const [casts, setCasts] = useState([]);
  const movieCast = async () => {
    const res = await fetch(castUrl + apiKey);
    const casts = await res.json();
    setCrews(casts.crew);
    setCasts(casts.cast);
    // console.log(casts.cast);
  };
  useEffect(() => {
    movieCast();
  }, []);

  // Group crew by department
  const groupedCrew = crews.reduce((acc, member) => {
    if (!acc[member.department]) {
      acc[member.department] = [];
    }
    acc[member.department].push(member);
    return acc;
  }, {});

  return (
    <>
      <div className="bg-gray-600">
        <div className="contizer">
          <div className="bb py-2 lg:py-4 flex items-center gap-4 md:gap-6 lg:gap-8">
            <div className="w-16 lg:lg:w-20">
              {detail.poster_path ? (
                <div className=" object-cover overflow-hidden">
                  <img
                    src={imgUrl + detail.poster_path}
                    alt={detail.title}
                    className="rounded lg:rounded-lg"
                  />
                </div>
              ) : (
                <div>
                  <img src={"https://placehold.co/400x500"} alt="" />
                </div>
              )}
            </div>
            <div className="title">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
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
      {/* Casts-Crews */}
      <div className="contizer">
        <div className="flex flex-col md:flex-row gap-8 xl:gap-12 py-6">
          <div className="casts basis-1/2">
            <div className="castnum pb-2 lg:pb-4 xl:pb-8">
              <h2 className="text-xl lg:text-2xl text-rose-600 font-bold border-b-2">
                Cast: <span className="text-gray-500">{casts.length}</span>
              </h2>
            </div>
            <div className="crewInner grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4">
              {casts.map((caster) => (
                <div
                  key={caster.id}
                  className="text-black flex items-center gap-2 md:gap-4 lg:gap-2 xl:gap-4"
                >
                  <div className="img w-20 h-20 rounded-md overflow-hidden">
                    <Link to={`/PopularPeopleDetails/${caster.id}`}>
                      {caster.profile_path ? (
                        <div className="">
                          {" "}
                          <img
                            src={imgUrl + caster.profile_path}
                            alt=""
                            className="rounded-md"
                          />
                        </div>
                      ) : (
                        <div className="w-[80px]">
                          <img
                            src="https://placehold.co/80x80"
                            alt=""
                            className="rounded-md"
                          />
                        </div>
                      )}
                    </Link>
                  </div>
                  <div className="text-black w-fit">
                    <Link>
                      <h3 className="text-md font-semibold hover:text-gray-400 transition-all">
                        {caster.name}
                      </h3>
                    </Link>
                    <small>{caster.character}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="crews basis-1/2">
            <div className="castnum pb-2 lg:pb-4 xl:pb-8">
              <h2 className="text-xl lg:text-2xl text-rose-600 font-bold border-b-2">
                Crew: <span className="text-gray-500">{crews.length}</span>
              </h2>
            </div>
            <div className="crewInner flex flex-col gap-6">
              {Object.entries(groupedCrew).map(([department, members]) => (
                <div key={department}>
                  <h2 className="text-blue-600 text-xl font-medium pb-1">
                    {department}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4">
                    {members.map((member) => (
                      <div
                        key={member.id}
                        className="text-black flex items-center gap-2 md:gap-4 lg:gap-2 xl:gap-4"
                      >
                        <Link to={`/PopularPeopleDetails/${member.id}`}>
                          {member.profile_path ? (
                            <div className="w-20 h-20 overflow-hidden rounded-md">
                              {" "}
                              <img
                                src={imgUrl + member.profile_path}
                                alt=""
                                className="rounded-md"
                              />
                            </div>
                          ) : (
                            <div className="w-[80px]">
                              <img
                                src="https://placehold.co/80x80"
                                alt=""
                                className="rounded-md"
                              />
                            </div>
                          )}
                        </Link>
                        <div>
                          <Link className="text-lg font-medium">
                            {member.name}
                          </Link>
                          <h4>{member.job}</h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CrewAndCast;
