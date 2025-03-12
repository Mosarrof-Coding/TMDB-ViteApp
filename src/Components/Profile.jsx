/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function Profile({ user }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] px-4 py-6">
      {user ? (
        <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6 text-center">
          <img
            src={user.avatar || "https://via.placeholder.com/150"}
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto border-2 border-blue-500"
          />
          <h2 className="mt-4 text-xl font-semibold text-gray-800">
            {user.name}
          </h2>
          <p className="text-gray-600">{user.email}</p>

          <div className="mt-6 flex flex-col gap-3">
            <Link
              to="/edit-profile"
              className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
            >
              Edit Profile
            </Link>
            <button className="px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700 transition">
              Logout
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h4 className="text-gray-700 text-lg lg:text-2xl font-semibold">
            You are not logged in!
          </h4>
          <div className="mt-4 flex gap-3">
            <Link
              to="/login"
              className="px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 transition"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
            >
              Create an Account
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
