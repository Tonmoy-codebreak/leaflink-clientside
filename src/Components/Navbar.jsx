import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { RiDashboardFill } from "react-icons/ri";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState("/images/default-avatar.png");

  useEffect(() => {
    if (!user?.photoURL) {
      setImageSrc("/images/default-avatar.png");
      return;
    }

    const img = new Image();
    img.src = user.photoURL;

    img.onload = () => {
      setImageSrc(user.photoURL);
      setImageLoaded(true);
    };

    img.onerror = () => {
      setImageSrc("/images/default-avatar.png");
      setImageLoaded(true);
    };
  }, [user]);

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        Swal.fire("You have been Logged out");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const NavOptions = (
    <>
      <li><NavLink to={"/"}>Home</NavLink></li>
      <li><NavLink to={"/explore"}>Contributors</NavLink></li>
      <li><NavLink to={"/browsetips"}>Browse Tips</NavLink></li>
      {user && (
        <>
          <li><NavLink to={"/auth/sharetips"}>Share a Garden Tip</NavLink></li>
          <li><NavLink to={"/auth/mytips"}>My Tips</NavLink></li>
        </>
      )}
    </>
  );

  return (
    <div className="primary-bg sticky top-0 z-50 shadow-md w-full">
      <div className="navbar w-11/12 mx-auto text-white">
        {/* Navbar Start */}
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[999] p-2 shadow bg-base-100 text-white bg-green-600 rounded-box w-52"
            >
              {NavOptions}
              {user && (
                <li>
                  <button
                    onClick={handleLogout}
                    className="text-white bg-red-500 hover:bg-red-600 transition duration-300 font-medium rounded-lg text-sm px-4 py-2 text-center mt-2"
                  >
                    Log Out
                  </button>
                </li>
              )}
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <img src="https://i.ibb.co/Kc14zZVk/Leaf-Link-PNG.png" alt="logo" className="h-10" />
            <h1 className="text-2xl lg:text-3xl font-logo">LeafLink</h1>
          </div>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg space-x-4 font-read">
            {NavOptions}
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end gap-3">
          {user ? (
            <>
              {/* Dashboard Icon */}
              <Link
                to="/auth/dashboard"
                className="text-white hover:text-green-300 transition"
                title="Dashboard"
              >
                <RiDashboardFill className="text-4xl" />
              </Link>

              {/* Avatar Dropdown */}
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="rounded-full">
                  <div className="relative w-10 h-10">
                    {!imageLoaded && (
                      <span className="absolute inset-0 flex items-center justify-center">
                        <span className="loading loading-spinner loading-xs"></span>
                      </span>
                    )}
                    <div
                      data-tooltip-id="avatarName"
                      data-tooltip-content={user.displayName}
                      data-tooltip-place="left"
                    >
                      <img
                        src={imageSrc}
                        alt="User"
                        className={`w-10 h-10 rounded-full object-cover transition-opacity duration-300 ${
                          imageLoaded ? "opacity-100" : "opacity-0"
                        }`}
                      />
                      <Tooltip id="avatarName" />
                    </div>
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[999] menu p-2 shadow bg-base-100 rounded-box w-32 mt-2 text-black"
                >
                  <li>
                    <button
                      onClick={handleLogout}
                      className="text-white bg-red-500 hover:bg-red-600 font-medium rounded-md text-sm px-4 py-2 text-center"
                    >
                      Log Out
                    </button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <Link to="/user/login">
              <button className="text-white bg-green-500 hover:bg-green-600 font-medium rounded-lg text-sm px-5 py-2.5">
                Log In
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
