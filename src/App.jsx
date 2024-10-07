// export default App;
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import DiscoverMovie from "./Components/DiscoverMovie";
import Detailpage from "./Components/Detailpage";
import Footer from "./Components/Footer";
import PageNotFound from "./Components/PageNotFound";
import CrewAndCast from "./Components/CrewAndCast";
import ReviewPage from "./Components/ReviewPage";
import Toprated from "./Components/Toprated";
import Popular from "./Components/Popular";
import NowPlaying from "./Components/NowPlaying";
import Upcoming from "./Components/Upcoming";
import AlternativeTitle from "./Components/AlternativeTitle";
import ReleaseDate from "./Components/ReleaseDate";
import PopularPeople from "./Components/PopularPeople";
import PopularPeopleDetails from "./Components/PopularPeopleDetails";
import TopTvs from "./Components/TopTvs";
import BackdropPage from "./Components/BackdropPage";
import PosterPage from "./Components/PosterPage";
import Logos from "./Components/Logos";
import Pop0WinnersPage from "./Components/Pop0WinnersPage";
import AwardsCard from "./Components/AwardsCard";
import AwardsCardMovie from "./Components/AwardsCardMovie";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import CreateList from "./Pages/CreateList";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/DiscoverMovie" element={<DiscoverMovie />} />

          <Route path="/top_rated" element={<Toprated />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/now_playing" element={<NowPlaying />} />
          <Route path="/upcoming" element={<Upcoming />} />

          <Route path="/popularPeople" element={<PopularPeople />} />
          <Route path="/toptv" element={<TopTvs />} />

          <Route path="/Detailpage/:id" element={<Detailpage />} />
          <Route
            path="/movie/:id/full-cast-and-crew"
            element={<CrewAndCast />}
          />
          <Route path="/movie/:id/full-review" element={<ReviewPage />} />
          <Route path="/movie/:id/releaseDate" element={<ReleaseDate />} />
          <Route
            path="/PopularPeopleDetails/:id"
            element={<PopularPeopleDetails />}
          />
          <Route
            path="/movie/:id/alternativeTitle"
            element={<AlternativeTitle />}
          />
          <Route path="/movie/:id/movieBackdrops" element={<BackdropPage />} />
          <Route path="/movie/:id/moviePosters" element={<PosterPage />} />
          <Route path="/movie/:id/logos" element={<Logos />} />

          <Route path="/Pop0WinnersPage" element={<Pop0WinnersPage />} />
          <Route path="/AwardsCard/:id" element={<AwardsCard />} />
          <Route path="/AwardsCardMovie/:id" element={<AwardsCardMovie />} />

          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />

          <Route path="/create-new-list" element={<CreateList />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
      <Footer className="place-self-end" />
    </div>
  );
}

export default App;
