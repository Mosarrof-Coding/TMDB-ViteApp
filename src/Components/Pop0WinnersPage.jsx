/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { IoTriangleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import Pop0Picture from "./Pop0Picture";
import Pop1Director from "./Pop1Director";
import Pop2Editor from "./Pop2Editor";
import Pop3Production from "./Pop3Production";
import Pop4Writer from "./Pop4Writer";
import Pop5Actors from "./Pop5Actors";
import Pop5Actress from "./Pop5Actress";
import MovieHost from "./MovieHost";
import Pop6Animation from "./Pop6Animation";
// assets
import oscars from "../assets/oscars.svg";
import cup from "../assets/cup.png";

function Pop0WinnersPage() {
  const year = new Date().getFullYear();
  const [years, setYears] = useState(year);
  const [win, setWin] = useState();
  // -----------------
  const [winners, setWinners] = useState([]);
  // -----------------
  const [editors, setEditors] = useState([]);
  const [popEdit, setPopEdit] = useState();
  // -----------------
  const [directorss, setDirectorss] = useState([]);
  const [dWin, setDWin] = useState();
  // ----------------
  const [producer, setProducer] = useState([]);
  const [popProduce, setPopProduce] = useState();
  // ----------------
  const [writers, setWriters] = useState([]);
  const [popWrite, setPopWrite] = useState();
  // ----------------
  const [anomations, setAnimations] = useState([]);
  const [popAnimation, setPopAnimation] = useState();
  // ----------cast------
  const [actors, setActors] = useState([]);
  const [popActor, setPopActor] = useState();
  // ----------------
  const [actresses, setActresses] = useState([]);
  const [popActresses, setPopActresses] = useState();

  // -------------
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [isMouseOver3, setIsMouseOver3] = useState(false);

  const fetchWinners = async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=629353605eab6723aee2f62b54183d48&with_awards=true&vote_count.gte=4000&primary_release_year=${
          years - 1
        }&append_to_response=images&sort_by=vote_count.desc`
      );
      const data = await res.json();
      const winners = data.results;
      const voteAverage = winners.map((data) => data.vote_average);
      const winn = Math.max(...voteAverage);
      const winningMovie = winners.find((movie) => movie.vote_average === winn);
      const winMovieId = winningMovie ? winningMovie.id : null;
      const winVal = (winn * 10).toFixed(0).slice(0, 2);
      setWinners(winners);
      setWin(winVal);
      return winMovieId;
    } catch (error) {
      console.error("Error fetching winners:", error);
    }
  };

  // winners api
  const fetchMixQuery = async () => {
    try {
      const winMovieId = await fetchWinners();
      if (winMovieId) {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${winMovieId}?api_key=629353605eab6723aee2f62b54183d48&with_awards=true&language=en-US&append_to_response=videos,external_ids,release_dates,reviews,credits,person,images`
        );
        const data = await res.json();
        // Fetching max popularity for each department {crew}
        const crew = data.credits.crew;
        const crewByDepartment = {};
        crew.forEach((roll) => {
          if (!(roll.job in crewByDepartment)) {
            crewByDepartment[roll.job] = [];
          }
          crewByDepartment[roll.job].push(roll);
        });
        console.log("crewByDepartment:", crewByDepartment);
        const allDirectors = crewByDepartment.Director;
        setDirectorss(allDirectors);
        const maxpopDirectings = Math.max(
          ...allDirectors.map((popDirecting) => popDirecting.popularity)
        );
        setDWin(maxpopDirectings);
        // ------------
        const allEditors = crewByDepartment.Editor;
        setEditors(allEditors);
        const maxPopEdit = Math.max(
          ...crewByDepartment.Editor.map((popEdit) => popEdit.popularity)
        );
        setPopEdit(maxPopEdit);
        //----------------
        const allProducer = crewByDepartment.Producer;
        const uniqueProducers = allProducer.filter(
          (producer, index, self) =>
            index === self.findIndex((p) => p.name === producer.name)
        );
        setProducer(uniqueProducers);
        const maxPopProducer = Math.max(
          ...crewByDepartment.Producer.map(
            (popProduct) => popProduct.popularity
          )
        );
        setPopProduce(maxPopProducer);
        // ---------------
        const allWriting = crewByDepartment.Writer;
        setWriters(
          allWriting.filter(
            (writer, index, self) =>
              index === self.findIndex((p) => p.name === writer.name)
          )
        );
        const maxPopWriting = Math.max(
          ...crewByDepartment.Writer.map((popWriting) => popWriting.popularity)
        );
        setPopWrite(maxPopWriting);
        // ----------------Animation -------
        const Animation = crewByDepartment.Animation;
        setAnimations(Animation);
        // ---------------
        const maxPopAnimation = Math.max(
          ...crewByDepartment.Animation.map(
            (popAnimation) => popAnimation.popularity
          )
        );
        setPopAnimation(maxPopAnimation);

        // Fetching max popularity for each department {cast}
        const cast = data.credits.cast;

        // Separate cast by department
        const castByDepartment = {};
        cast.forEach((role) => {
          if (!(role.known_for_department in castByDepartment)) {
            castByDepartment[role.known_for_department] = [];
          }
          castByDepartment[role.known_for_department].push(role);
        });
        const maxPopActors = Math.max(
          ...castByDepartment.Acting.filter((actor) => actor.gender === 2).map(
            (actor) => actor.popularity
          )
        );
        console.log("castByDepartment:", castByDepartment);

        const Actors = castByDepartment.Acting.filter(
          (actor) => actor.gender === 2
        );
        setPopActor(maxPopActors);
        setActors(Actors);

        const maxPopActres = Math.max(
          ...castByDepartment.Acting.filter(
            (actress) => actress.gender === 1
          ).map((actress) => actress.popularity)
        );
        const Actresses = castByDepartment.Acting.filter(
          (actress) => actress.gender === 1
        );
        setPopActresses(maxPopActres);
        setActresses(Actresses);

        // const maxPopCameras = Math.ceil(
        //   Math.max(
        //     ...castByDepertment.Camera.map((popCamera) => popCamera.popularity)
        //   )
        // );
        // const maxPopCrews = Math.ceil(
        //   Math.max(
        //     ...castByDepertment.Crew.map((popCrew) => popCrew.popularity)
        //   )
        // );
        // const maxPopMakeUps = Math.ceil(
        //   Math.max(
        //     ...castByDepertment["Costume & Make-Up"].map(
        //       (popMakeUp) => popMakeUp.popularity
        //     )
        //   )
        // );
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchWinners();
    fetchMixQuery();
    setYears(year);
  }, []);

  // Award year
  const makeAcademyYear = () => {
    const year = new Date().getFullYear();
    if (year) {
      return year - 1928;
    }
  };

  return (
    <div className="text-black">
      {/* navigator  */}
      <div className="navigatorWinner">
        <div className="navigate border-b">
          <div className="contizer">
            <div className="navMain py-1 flex justify-center items-center flex-wrap gap-3 sm:gap-6">
              {/* overview  */}
              <div className="dropdown dropdown-hover">
                <div
                  tabIndex={0}
                  role="button"
                  className={`bg-white text-black py-2 hover:text-blue-400 drpp  ${
                    isMouseOver ? "text-blue-400" : ""
                  }`}
                >
                  <span>Overview</span>
                  <span className="hidden sm:inline-block rotate-180 ml-4 mb-[2px]">
                    <IoTriangleSharp size={8} />
                  </span>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu py-2 px-0 shadow-md border bg-base-100 rounded min-w-max md:w-52"
                  onMouseEnter={() => setIsMouseOver(true)}
                  onMouseLeave={() => setIsMouseOver(false)}
                >
                  <div className="text-gray-600 flex flex-col gap-1 w-auto">
                    <Link className="py-1 hover:bg-gray-200 px-4">Main</Link>
                    <Link className="py-1 hover:bg-gray-200 px-4">
                      Translations
                    </Link>
                  </div>
                  <div className="text-gray-600 flex flex-col gap-1 pt-6">
                    <Link className="py-1 hover:bg-gray-200 px-4">Changes</Link>
                    <Link className="py-1 hover:bg-gray-200 px-4">Report</Link>
                    <Link className="py-1 hover:bg-gray-200 px-4">Edit</Link>
                  </div>
                </ul>
              </div>
              {/* Share  */}
              <div className="dropdown dropdown-hover">
                <div
                  tabIndex={0}
                  role="button"
                  className={`bg-white text-black py-2 hover:text-blue-400 drpp  ${
                    isMouseOver3 ? "text-blue-400" : ""
                  }`}
                >
                  <span>Share </span>
                  <span className="hidden sm:inline-block rotate-180 ml-4 mb-[2px]">
                    <IoTriangleSharp size={8} />
                  </span>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu py-2 px-0 shadow-md border bg-base-100 rounded min-w-fit md:w-52"
                  onMouseEnter={() => setIsMouseOver3(true)}
                  onMouseLeave={() => setIsMouseOver3(false)}
                >
                  <div className="text-gray-600 flex flex-col gap-1">
                    <Link className="py-1 hover:bg-gray-200 px-1 sm:px-4 flex items-center justify-between gap-6">
                      <span>Share link</span>
                    </Link>
                    <Link className="py-1 hover:bg-gray-200 px-1 sm:px-4 flex items-center justify-between gap-6">
                      <span>Facebook</span>
                    </Link>
                    <Link className="py-1 hover:bg-gray-200 px-1 sm:px-4 flex items-center justify-between gap-6">
                      <span>Tweet</span>
                    </Link>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* winnerBanner */}
      <div className="winnerBanner bg-gradient-to-br from-blue-600 to-green-200">
        <div className="winBox flex gap-8 max-w-[1630px] mx-auto px-8 py-10">
          <div className="relative w-[140px]">
            <div className="absolute left-0 top-[-10px] max-w-[140px] rounded-md overflow-hidden">
              <img src={cup} alt="" />
            </div>
          </div>
          <div>
            <ul className="winTitle flex gap-3 text-white">
              <li>{makeAcademyYear()}th Academy Awards</li>
              <li className="text-white">|</li>
              <li>Aired may 27, {years}</li>
            </ul>
            <div className="oscar max-w-[320px] mt-4">
              <img src={oscars} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* filler */}
      <div className="filler py-6 bg-white"></div>
      <div className="contizer">
        {/* ======================winner crew======================= */}
        <div className="crewlist">
          {/* tv  */}
          <div className="py-6">
            <h3 className="text-2xl font-semibold text-black">Show Info</h3>{" "}
            <div className="Info text-black flex flex-wrap gap-12 my-4">
              <MovieHost />
            </div>
          </div>
          <hr />
          {/* Best Picture/movie */}
          <div className="py-8">
            <h3 className="text-2xl font-semibold text-black">Best Picture</h3>
            <div className="flex flex-col justify-center xs:grid grid-cols-12 gap-4 lg:gap-2 xl:gap-3 py-3">
              {winners.map((movie) => (
                <ul
                  key={movie.id}
                  className="border max-w-full col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2 rounded-lg overflow-hidden"
                >
                  <Pop0Picture key={movie.id} movie={movie} win={win} />
                </ul>
              ))}
            </div>
          </div>
          <hr />
          {/* Best Director  */}
          <div className="py-8">
            <h3 className="text-2xl font-semibold text-black">Best Director</h3>
            <div className="flex flex-col justify-center xs:grid grid-cols-12 gap-4 lg:gap-2 xl:ga-3 py-3">
              {directorss.map(
                (directors) =>
                  directors.popularity > 4 && (
                    <ul
                      className="border max-w-full col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2 rounded-lg"
                      key={directors.id}
                    >
                      <Pop1Director
                        key={directors.id}
                        directors={directors}
                        dWin={dWin}
                      />
                    </ul>
                  )
              )}
            </div>
          </div>
          <hr />
          {/* Best Editor  */}
          <div className="py-8">
            <h3 className="text-2xl font-semibold text-black">
              Best Film Editor
            </h3>
            <div className="flex flex-col justify-center xs:grid grid-cols-12 gap-4 lg:gap-2 xl:ga-3 py-3">
              {editors.map(
                (editor) =>
                  editor.popularity > 2 && (
                    <div
                      className="border max-w-full col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2 rounded-lg overflow-hidden"
                      key={editor.id}
                    >
                      <Pop2Editor
                        key={editor.id}
                        editor={editor}
                        popEdit={popEdit}
                      />
                    </div>
                  )
              )}
            </div>
          </div>
          <hr />
          {/* Best Producer */}
          <div className="py-8">
            <h3 className="text-2xl font-semibold text-black">
              Best Producere
            </h3>
            <div className="flex flex-col justify-center xs:grid grid-cols-12 gap-4 lg:gap-2 xl:ga-3 py-3">
              {producer.map(
                (produce) =>
                  produce.popularity > 0 && (
                    <div
                      className="border max-w-full col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2 rounded-lg overflow-hidden"
                      key={produce.id}
                    >
                      <Pop3Production
                        key={produce.id}
                        produce={produce}
                        popProduce={popProduce}
                      />
                    </div>
                  )
              )}
            </div>
          </div>
          <hr />
          {/* Best Writer */}
          <div className="py-8">
            <h3 className="text-2xl font-semibold text-black">Best Writer</h3>
            <div className="flex flex-col justify-center xs:grid grid-cols-12 gap-4 lg:gap-2 xl:ga-3 py-3">
              {writers.map(
                (write) =>
                  write.popularity > 0 && (
                    <div
                      className="border max-w-full col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2 rounded-lg overflow-hidden"
                      key={write.id}
                    >
                      <Pop4Writer
                        key={write.id}
                        write={write}
                        popWrite={popWrite}
                      />
                    </div>
                  )
              )}
            </div>
          </div>
          <hr />
          {/* Best anomation */}
          <div className="py-8">
            <h3 className="text-2xl font-semibold text-black">
              Best Animation
            </h3>
            <div className="flex flex-col justify-center xs:grid grid-cols-12 gap-4 lg:gap-2 xl:ga-3 py-3">
              {anomations.map(
                (anomation) =>
                  anomation.popularity > 4 && (
                    <div
                      className="border max-w-full col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2 rounded-lg overflow-hidden"
                      key={anomation.id}
                    >
                      <Pop6Animation
                        key={anomation.id}
                        anomation={anomation}
                        popAnimation={popAnimation}
                      />
                    </div>
                  )
              )}
            </div>
          </div>
          <hr />
        </div>
        {/* ======================winner cast======================= */}
        <div className="castList">
          {/* Best Actor  */}
          <div className="py-8">
            <h3 className="text-2xl font-semibold text-black">Best Actor</h3>
            <div className="flex flex-col justify-center xs:grid grid-cols-12 gap-4 lg:gap-2 xl:ga-3 py-3">
              {actors.map(
                (actor) =>
                  actor.popularity > 27 && (
                    <div
                      className="border max-w-full col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2 rounded-lg overflow-hidden"
                      key={actor.id}
                    >
                      <Pop5Actors
                        key={actor.id}
                        actor={actor}
                        popActor={popActor}
                      />
                    </div>
                  )
              )}
            </div>
          </div>
          <hr />
          {/* Best Actoress  */}
          <div className="py-8">
            <h3 className="text-2xl font-semibold text-black">Best actress</h3>
            <div className="flex flex-col justify-center xs:grid grid-cols-12 gap-4 lg:gap-2 xl:ga-3 py-3">
              {actresses.map(
                (actress) =>
                  actress.popularity > 16 && (
                    <div
                      className="border max-w-full col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2 rounded-lg overflow-hidden"
                      key={actress.id}
                    >
                      <Pop5Actress
                        key={actress.id}
                        actress={actress}
                        popActresses={popActresses}
                      />
                    </div>
                  )
              )}
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default Pop0WinnersPage;
