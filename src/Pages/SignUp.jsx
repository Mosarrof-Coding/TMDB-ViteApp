import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [error, setError] = useState("");
  const [eye, setEye] = useState(true);
  const [retypeEye, setRetypeEye] = useState(true);

  // Toggle visibility for password
  const eyeHandle = () => {
    setEye((prevState) => !prevState);
  };

  // Toggle visibility for retype password
  const retypeEyeHandle = () => {
    setRetypeEye((prevState) => !prevState);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === retypePassword) {
      // Simulate sending data to a server
      const formData = {
        name,
        email,
        phone,
        password,
      };

      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        const data = await response.json();
        console.log("Server Response:", data);
        alert("Form submitted successfully!");
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("There was an error submitting the form. Please try again.");
      }
    } else {
      alert("Passwords do not match. Please try again.");
    }
  };

  return (
    <section className="min-h-[50vh] grid place-items-center">
      <div className="container w-full">
        <form
          className="w-full sm:w-[420px] lg:w-[520px] mx-auto p-2 lg:p-6 my-4 rounded-lg shadow-lg text-gray-800 flex flex-col gap-4 border-t-8 border-blue-700"
          onSubmit={handleSubmit}
        >
          <div className="name w-full flex flex-col gap-1">
            <h3 className="text-2xl font-semibold text-blue-500">
              Create an Account
            </h3>
            <label className="font-semibold text-sm" htmlFor="name">
              Name
            </label>
            <input
              className="w-full py-1 md:py-2 px-2 md:px-4 border rounded-md md:rounded-lg"
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="phone w-full flex flex-col gap-1">
            <label className="font-semibold text-sm" htmlFor="phone">
              Phone
            </label>
            <input
              className="w-full py-1 md:py-2 px-2 md:px-4 border rounded-md md:rounded-lg"
              type="tel"
              name="phone"
              id="phone"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="email w-full flex flex-col gap-1">
            <label className="font-semibold text-sm" htmlFor="email">
              Email
            </label>
            <input
              className="w-full py-1 md:py-2 px-2 md:px-4 border rounded-md md:rounded-lg"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="password w-full flex flex-col gap-1">
            <label className="font-semibold text-sm" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                className="w-full py-1 md:py-2 px-2 md:px-4 border rounded-md md:rounded-lg"
                type={eye ? "password" : "text"}
                name="password"
                id="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                className="absolute right-4 top-[50%] translate-y-[-50%] cursor-pointer"
                onClick={eyeHandle}
              >
                {eye ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>
          <div className="password w-full flex flex-col gap-1">
            <label className="font-semibold text-sm" htmlFor="retypePassword">
              Re-type Password
            </label>
            <div className="relative">
              <input
                className="w-full py-1 md:py-2 px-2 md:px-4 border rounded-md md:rounded-lg"
                type={retypeEye ? "password" : "text"}
                name="retypePassword"
                id="retypePassword"
                placeholder="Re-type Password"
                value={retypePassword}
                onChange={(e) => {
                  setRetypePassword(e.target.value);
                  if (e.target.value !== password) {
                    setError("Passwords do not match");
                  } else {
                    setError("");
                  }
                }}
                required
              />
              <span
                className="absolute right-4 top-[50%] translate-y-[-50%] cursor-pointer"
                onClick={retypeEyeHandle}
              >
                {retypeEye ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <input
            type="submit"
            disabled={password !== retypePassword}
            className="py-1 md:py-2 px-16 text-base md:text-xl font-semibold text-white bg-blue-400 hover:bg-blue-700 rounded-lg cursor-pointer"
            value="Submit"
          />
          <p>
            Already have an Account?{" "}
            <Link to="/login" className="text-blue-500 font-medium">
              Login
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}
