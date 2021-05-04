import React from "react";
import { Link } from "react-router-dom";

import restaurantLogo from "../assets/crown.svg";

const HomePage = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-col mt-60 ">
        <div className="flex">
          <img
            alt="Restaurant Logo"
            src={restaurantLogo}
            className="h-80 w-full "
          />
        </div>
        <div>
          <div className="flex justify-center">
            <Link to="/login">
              <button className="bg-green-400 hover:bg-green-500 font-bold text-white transform transition-colors duration-200 rounded-full shadow-lg py-3 px-8 mt-3">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
