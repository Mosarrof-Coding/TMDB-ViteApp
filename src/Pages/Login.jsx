import { useState } from "react";
import {
  FaFacebookF,
  FaGoogle,
  FaTwitter,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    setError(""); // Reset error

    // Dummy API endpoint for demonstration
    const demoApiUrl = "https://example.com/api/login"; // Replace with your actual API endpoint

    try {
      const response = await fetch(demoApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Login failed. Please check your credentials.");
      }

      // eslint-disable-next-line no-unused-vars
      const data = await response.json();
      alert("Login successful!");
      // You can redirect or perform further actions with the response data here
    } catch (error) {
      setError(error.message);
    }
  };

  // Handle social login
  const handleSocialLogin = async (provider) => {
    // Replace with your actual API URL and logic
    const demoApiUrl = `https://example.com/api/login/${provider}`; // Example: `facebook`, `google`, `twitter`

    try {
      const response = await fetch(demoApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Social login failed.");
      }

      // eslint-disable-next-line no-unused-vars
      const data = await response.json();
      alert(
        `Logged in with ${
          provider.charAt(0).toUpperCase() + provider.slice(1)
        }!`
      );
      // You can redirect or perform further actions with the response data here
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section className="min-h-[50vh] grid place-items-center text-sm lg:text-base">
      <div className="contizer w-full">
        <form
          onSubmit={handleSubmit}
          className="w-full sm:w-[420px] lg:w-[520px] mx-auto p-4 lg:p-6 my-4 rounded lg:rounded-lg shadow-lg text-gray-800 flex flex-col gap-3 md:gap-6 border-t-8 border-blue-700"
        >
          <h3 className="text-xl md:text-2xl font-semibold text-blue-500">
            Join TMDB
          </h3>
          {error && <p className="text-red-500">{error}</p>}
          <div className="email w-full flex flex-col gap-1">
            <label className=" font-semibold text-sm" htmlFor="email">
              Email
            </label>
            <input
              className="w-full py-1 md:py-2 px-2 md:px-4 border rounded lg:rounded-lg"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="password w-full flex flex-col gap-1">
            <label className=" font-semibold text-sm" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                className="w-full py-1 md:py-2 px-2 md:px-4 border rounded lg:rounded-lg"
                type={showPassword ? "text" : "password"} // Toggle between text and password
                name="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
                className="absolute right-4 top-[50%] translate-y-[-50%] cursor-pointer"
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}{" "}
                {/* Show eye icon based on state */}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-right block">
              <Link className="text-yellow-400 hover:text-blue-700">
                <small>
                  <strong>Forgot Password?</strong>
                </small>
              </Link>
            </span>
            <input
              type="submit"
              className="py-[2px] md:py-2 px-16 text-base md:text-xl font-semibold text-white bg-blue-400 hover:bg-blue-700 rounded lg:rounded-lg cursor-pointer"
              value="Login"
            />
          </div>
          <p>
            No Account?{" "}
            <Link to="/signup" className="text-blue-500 font-medium">
              Create an Account
            </Link>
          </p>
          <div>
            <p className="text-center mt-2">or Login With</p>
            <div className="flex gap-2 mt-1 md:mt-2">
              <span
                onClick={() => handleSocialLogin("facebook")} // Handle Facebook login
                className="grid place-items-center text-white w-7 md:w-8 bg-gradient-to-br from-pink-400 to-blue-500 hover:shadow-lg rounded-full aspect-square cursor-pointer"
              >
                <FaFacebookF />
              </span>
              <span
                onClick={() => handleSocialLogin("google")} // Handle Google login
                className="grid place-items-center text-white w-7 md:w-8 bg-gradient-to-br from-pink-400 to-blue-500 hover:shadow-lg rounded-full aspect-square cursor-pointer"
              >
                <FaGoogle />
              </span>
              <span
                onClick={() => handleSocialLogin("twitter")} // Handle Twitter login
                className="grid place-items-center text-white w-7 md:w-8 bg-gradient-to-br from-pink-400 to-blue-500 hover:shadow-lg rounded-full aspect-square cursor-pointer"
              >
                <FaTwitter />
              </span>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
