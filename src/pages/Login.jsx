import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Lottie from "lottie-react";
import loginLottieData from "../assets/Lottie/login.json";
import AuthContext from "../context/AuthContext";

const Login = () => {
  const { signIn, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const email = form.get("email");
    const password = form.get("password");
    // console.log(email, password);

    signIn(email, password)
      .then((res) => {
        // console.log(res.user);
        setUser(res.user);
        // toast.success("Welcome" + " " + res.user.email);
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        // toast.error(err.message);
        // return;
      });
  };

  const handleGoogleSignIn = () => {};
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
        <div className="w-72 mx-auto">
          <Lottie animationData={loginLottieData}></Lottie>
        </div>
        <h2 className="text-center font-semibold text-2xl">
          Login Your Account
        </h2>
        <form onSubmit={handleSignIn} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <Link to="/forgot" className="label-text-alt link link-hover">
                Forgot password?
              </Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Login</button>
          </div>
        </form>
        <div onClick={handleGoogleSignIn} className="mx-auto my-5">
          <button className="flex justify-arround items-center gap-4 bg-gray-100 btn">
            <FcGoogle className="text-xl" />
            <span className="font-semibold">Login with Google</span>
          </button>
        </div>

        <p className="text-center ">
          Don't have an account?{" "}
          <Link className="text-red-500" to="/register">
            Register
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
