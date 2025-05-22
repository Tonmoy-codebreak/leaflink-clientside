import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

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
        console.log("Logged out");
        Swal.fire("You have been Logged out");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const NavOptions = (
    <>
      <li><NavLink to={"/"}>Home</NavLink></li>
      <li><NavLink to={"/explore"}>Explore Gardeners</NavLink></li>
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
    <div className="primary-bg">
      <div className="navbar text-white w-10/12 mx-auto">
        <div className="navbar-start py-2">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round"
                      strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"/>
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {NavOptions}
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <img src="/images/LeafLinkPNG.png" alt="logo" className="h-10" />
            <h1 className="text-3xl font-logo">LeafLink</h1>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-xl font-read space-x-5">
            {NavOptions}
          </ul>
        </div>

        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end md:dropdown-center">
              <div tabIndex={0} role="button" className="rounded-full">
                <div className="relative w-10 h-10">
                  {!imageLoaded && (
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="loading loading-spinner loading-xs"></span>
                    </span>
                  )}
                  <div className="tooltip tooltip-bottom" data-tip={user.displayName || "User"}>
                    <img
                      src={imageSrc}
                      alt="User"
                      className={`w-10 h-10 rounded-full object-cover transition-opacity duration-300 ${
                        imageLoaded ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </div>
                </div>
              </div>
              <ul tabIndex={0} className="dropdown-content menu rounded-box z-1 w-32">
                <li>
                  <button
                    onClick={handleLogout}
                    type="button"
                    className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm mx-auto px-5 py-2.5 my-auto text-center"
                  >
                    Log Out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <NavLink to="/login">
              <button className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                Log In
              </button>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
