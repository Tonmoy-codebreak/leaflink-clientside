import React, { useContext, useEffect } from "react";
import { FaGoogle } from "react-icons/fa";
import { NavLink, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const LoginPage = () => {
  useEffect(() => {
    document.title = "Log in";
  }, []);
  const location = useLocation();
  const navigate = useNavigate();
  const { loginUser, setUser, signInWithGoogle, resetPass } =
    useContext(AuthContext);
  // handleGoogleLogin
  const handleGoogleLogin = (e) => {
    e.preventDefault();
    signInWithGoogle()
      .then((result) => {
        console.log(result);
        Swal.fire({
          title: "Successfully Logged In",
          icon: "success",
          draggable: true,
        });

        navigate(location.state?.from?.pathname || "/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  // handlelogin
  const handlelogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const email = data.email;
    const password = data.password;

    // log in existing user//////////////////////
    loginUser(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        Swal.fire({
          title: "Successfully Logged In",
          icon: "success",
          draggable: true,
        });
       navigate(location.state?.from?.pathname || "/");
      })
      .catch((error) => {
        const errorCode = error.code;
        
        Swal.fire({
          icon: "error",
          title: errorCode,
        });
      });
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    const email = document.querySelector('input[name="email"]').value;

    if (!email) {
      Swal.fire({
        icon: "warning",
        title: "Please enter your email address first.",
      });
      return;
    }

    resetPass(email)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Password Reset Email Sent!",
          text: "Please check your inbox.",
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: error.code,
          text: error.message,
        });
      });
  };
  return (
    <div className="min-h-screen flex font-read overflow-hidden">
      {/* Left: Login Form */}
      <div className="w-full lg:w-1/4 bg-white flex items-center justify-center  px-8 md:px-20">
        <div className="w-full max-w-md">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            Welcome Back
          </h1>

          {/* Google Sign-in */}
          <button
            onClick={handleGoogleLogin}
            type="button"
            className="flex items-center justify-center w-full gap-3 border border-gray-300 rounded-xl py-3 px-4 text-gray-700 hover:bg-gray-100 transition mb-6"
          >
            <FaGoogle className="text-red-500 text-lg" />
            <span className="font-medium">Continue with Google</span>
          </button>

          {/* Divider */}
          <div className="relative my-6">
            <hr className="border-gray-300" />
            <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-white px-3 text-sm text-gray-500">
              or sign in with email
            </span>
          </div>

          {/* Email & Password Form */}
          <form onSubmit={handlelogin} className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                placeholder="••••••••"
                required
              />
            </div>

            <div className="flex justify-end">
              <a
                onClick={handleResetPassword}
                href="#"
                className="text-sm text-green-600 hover:text-green-800"
              >
                Forgot your password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200"
            >
              Sign In
            </button>
          </form>

          <p className="text-sm text-center mt-6 text-gray-700">
            Don’t have an account?{" "}
            <NavLink to="/register" className="text-red-500 hover:underline">
              Register
            </NavLink>
          </p>
        </div>
      </div>

      {/* Right: Background Image */}
      <div
        className="hidden lg:block lg:w-3/4  bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/loginBanner.jpg')`,
          height: "100vh",
        }}
      ></div>
    </div>
  );
};

export default LoginPage;
