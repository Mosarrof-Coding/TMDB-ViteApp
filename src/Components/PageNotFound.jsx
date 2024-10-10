import { Link } from "react-router-dom";
import errorpg from "../assets/404.jpg";
import { FiArrowLeft } from "react-icons/fi";
function PageNotFound() {
  return (
    <div className="min-h-[60vh] grid place-items-center text-xl md:text-2xl lg:text-3xl text-red-600">
      <div>
        <img
          src={errorpg}
          alt=""
          className="w-[100px] md:w-[140px] lg:w-[200px]"
        />
        <Link
          to={"/"}
          className="text-base lg:text-xl font-medium block text-center text-blue-400 hover:text-blue-800 transition-all duration-300 "
        >
          <div className="inline-flex items-center">
            <FiArrowLeft /> <span className="mt-[2px]"> Back to Home</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
