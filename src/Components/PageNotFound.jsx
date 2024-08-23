import { Link } from "react-router-dom";
import errorpg from "../assets/404.jpg";
function PageNotFound() {
  return (
    <div className="min-h-[64.5vh] text-3xl text-red-600 grid place-items-center">
      <span>
        <img src={errorpg} alt="" className="max-w-[200px] " />
        <Link
          to={"/"}
          className="text-xl font-medium block text-center text-blue-500 hover:text-blue-600 transition-all duration-300 "
        >
          {"<- Back to Home"}
        </Link>
      </span>
    </div>
  );
}

export default PageNotFound;
