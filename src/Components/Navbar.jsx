import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-inherit lg:w-11/12 mx-auto">
        <div className="navbar-start">
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
              <li>
                <a>About Me</a>
              </li>
              <li>
                <a>Skills</a>
              </li>
              <li>
                <a>Projects</a>
              </li>
              <li>
                <a>Contact Me</a>
              </li>
            </ul>
          </div>
          <a className="font-extrabold text-4xl" href="/">
            AKIB
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="text-lg font-semibold">About Me</a>
            </li>
            <li>
              <a className="text-lg font-semibold">Skills</a>
            </li>
            <li>
              <a className="text-lg font-semibold">Projects</a>
            </li>
            <li>
              <a className="text-lg font-semibold">Contact Me</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-inherit shadow-xl rounded-full border-blue-600">Download Resume</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
