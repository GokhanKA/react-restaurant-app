import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../context/authContext";

const Navbar = () => {
  const { isLogin, logout } = useContext(AuthContext)
  
  return (
    <nav
      className="rounded-b-lg flex justify-between shadow-lg items-center h-16 bg-red-500 text-white relative font-mono"
      role="navigation"
    >
      <Link to="/" className="pl-8">
        <h2 className="font-medium text-xl font-sans">Restaurant App</h2>
      </Link>
      <div className="px-4 cursor-pointer md:hidden">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </div>
      {isLogin ? <div className=""><h2 className="font-medium text-xl font-sans">Gökhan-Ankara</h2></div> : null}
      {isLogin ? (
        
        <div className="pr-8 font-sans font-medium md:block hidden">
          <Link className="p-4 hover:text-gray-500" to="/">
            Home
          </Link>
          <Link className="p-4 hover:text-gray-500" to="/tables">
            Tables
          </Link>
          <Link className="p-4 hover:text-gray-500" to="/">
            Reservations
          </Link>
          <Link className="p-4 hover:text-gray-500" to="/">
            Reportings
          </Link>
          <button
            onClick={logout}
            className="p-4 font-medium hover:text-indigo-600"
          >
            Logout
          </button>
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
