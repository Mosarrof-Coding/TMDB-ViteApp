import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <section className="min-h-[50vh] grid place-items-center">
      <div className="contizer">
        <form
          action=""
          className="w-[320px] lg:w-[520px] mx-auto p-2 lg:p-6 my-6 rounded-lg shadow-lg text-gray-800 flex flex-col gap-4 border-t-8 border-blue-700"
        >
          <div className="namee w-full flex flex-col gap-1">
            <h3 className="text-2xl font-semibold text-blue-500">
              Create an Account
            </h3>
            <label htmlFor="name">Name</label>
            <input
              className="w-full py-2 px-4 border rounded-lg"
              type="text"
              name="name"
              id="name"
              placeholder="Name"
            />
          </div>
          <div className="phone w-full flex flex-col gap-1">
            <label htmlFor="phone">Phone</label>
            <input
              className="w-full py-2 px-4 border rounded-lg"
              type="tel"
              name="phone"
              id="phone"
              placeholder="Phone"
            />
          </div>
          <div className="email w-full flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <input
              className="w-full py-2 px-4 border rounded-lg"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
            />
          </div>
          <div className="password w-full flex flex-col gap-1">
            <label htmlFor="password">Password</label>
            <input
              className="w-full py-2 px-4 border rounded-lg"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          </div>
          <input
            type="submit"
            className="py-2 px-16 text-xl font-semibold text-white bg-blue-400 hover:bg-blue-700 rounded-lg cursor-pointer"
            value="Submit"
          />{" "}
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
