import React, { useContext, useEffect, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { NavLink, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const SignUpPage = () => {
  useEffect(() => {
    document.title = "Sign Up";
  }, []);
  const location = useLocation();
  const navigate = useNavigate();

  const { createUser, setUser, signInWithGoogle } = useContext(AuthContext);
  const [passwordError, setPasswordError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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

  const handleRegister = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const name = data.name;
    const email = data.email;
    const password = data.password;
    const photoURL = data.photoURL;

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must be at least 8 characters long and include one uppercase, one lowercase, and one special character."
      );
      setIsLoading(false);
      return;
    } else {
      setPasswordError("");
    }

    // Create new User
    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        // name and photoURL
        return updateProfile(user, {
          displayName: name,
          photoURL: photoURL,
        }).then(() => {
          const updatedUser = {
            ...user,
            displayName: name,
            photoURL: photoURL,
          };
          setUser(updatedUser);
          Swal.fire({
          title: "Successfully Logged In",
          icon: "success",
          draggable: true,
        });
          navigate(`${location.state ? location.state : "/"}`);
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        Swal.fire({
          icon: "error",
          title: errorCode,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="min-h-screen flex font-read overflow-hidden">
      {/* Left: Registration Form */}
      <div className="w-full lg:w-1/4 bg-white flex items-center justify-center py-8 px-8 md:px-20">
        <div className="w-full max-w-md">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            Create Your Account
          </h1>

          {/* Google Sign-up */}
          <button
            onClick={handleGoogleLogin}
            type="button"
            className="flex items-center justify-center w-full gap-3 border border-gray-300 rounded-xl py-3 px-4 text-gray-700 hover:bg-gray-100 transition mb-6"
          >
            <FaGoogle className="text-red-500 text-lg" />
            <span className="font-medium">Sign up with Google</span>
          </button>

          {/* Divider */}
          <div className="relative my-6">
            <hr className="border-gray-300" />
            <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-white px-3 text-sm text-gray-500">
              or use your email
            </span>
          </div>

          {/* Registration Form */}
          <form onSubmit={handleRegister} className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                placeholder="Your full name"
                required
              />
            </div>

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
                htmlFor="photoURL"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Photo URL
              </label>
              <input
                type="url"
                id="photoURL"
                name="photoURL"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                placeholder="https://example.com/your-photo.jpg"
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
                className={`w-full px-4 py-2.5 border ${
                  passwordError ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none`}
                placeholder="••••••••"
                required
              />
              {passwordError && (
                <p className="text-red-500 text-sm mt-1">{passwordError}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200"
              disabled={isLoading}
            >
              {isLoading ? "Creating account..." : "Create Account"}
            </button>
          </form>

          <p className="text-sm text-center mt-6 text-gray-700">
            Already have an account?{" "}
            <NavLink to="/login" className="text-red-500 hover:underline">
              Login
            </NavLink>
          </p>
        </div>
      </div>

      {/* Right: Background Image */}
      <div
        className="hidden lg:block lg:w-3/4 bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/registerBanner.jpg')`,
          height: "100vh",
        }}
      ></div>
    </div>
  );
};

export default SignUpPage;
