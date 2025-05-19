import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const NavOptions = (
    <>
    <li><NavLink to={"/"}>Home</NavLink></li>
    <li><NavLink to={"/auth/sharetips"}>Share a Garden Tip</NavLink></li>
    <li><NavLink to={"/explore"}>Explore Gardeners</NavLink></li>
    <li><NavLink to={"/auth/mytips"}>My Tips</NavLink></li>
    </>
  )
  return (
    <div className=" primary-bg ">
      {/* zzzzzzzzzzzzzzzzzzzzzzzzzzzzzz */}
      <div className="navbar text-white  w-10/12 mx-auto">

        {/* /////////////Navbar Start */}
        <div className="navbar-start py-2">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
             {NavOptions}

            </ul>
          </div>
          <div className="flex items-center gap-2">
            <img src="/images/LeafLinkPNG.png" alt="logo"className="h-10" />
            <h1 className="text-3xl  font-logo">LeafLink</h1>
          </div>
        </div>



        {/* ////////////Navbar Middle */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-xl font-read space-x-5">
            {NavOptions}
          </ul>
        </div>




        {/* /////////////Navbar End */}
        <div className="navbar-end">
        <NavLink to={"/login"}>
          <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 ">Log In</button>
        </NavLink>
        </div>





      </div>
      {/* zzzzzzzzzzzzzzzzzzzzzzzzzzzzzz */}
    </div>
  );
};

export default Navbar;
