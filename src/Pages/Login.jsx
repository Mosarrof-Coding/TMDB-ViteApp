import { Link } from "react-router-dom";

export default function Login() {
  return (
    <section className="min-h-[50vh] grid place-items-center">
      <div className="contizer">
        <form
          action=""
          className="w-[300px] lg:w-[520px] mx-auto p-4 lg:p-6 rounded-lg shadow-lg text-gray-800 flex flex-col gap-6 border-t-8 border-blue-700"
        >
          {" "}
          <h3 className="text-2xl font-semibold text-blue-500">Join TMBD</h3>
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
            value="Login"
          />{" "}
          <p>
            No Account?{" "}
            <Link to="/signup" className="text-blue-500 font-medium">
              Create an Account
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}
