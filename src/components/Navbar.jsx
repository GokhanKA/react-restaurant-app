import React, {useState} from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isLogin,setIsLogin] = useState(true);

  return (
    <nav
      className="rounded flex justify-between shadow-lg items-center h-16 bg-green-600 text-white relative shadow-sm font-mono"
      role="navigation"
    >
      <Link to="/" className="pl-8">
        <h2 className="font-semibold font-sans">Restaurant-App </h2>
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
      {isLogin ? <div className="pr-8 md:block hidden">
        <Link className="p-4" to="/">
          Home
        </Link>
        <Link className="p-4" to="/">
          Table
        </Link>
        <Link className="p-4" to="/">
          Reservation
        </Link>
        <Link className="p-4" to="/">
          Reporting
        </Link>
        <Link className="p-4" to="/">
          Logout
        </Link>
      </div> : null}
    </nav>
  );
};

export default Navbar;
