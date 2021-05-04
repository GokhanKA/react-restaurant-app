import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("Gokhan");

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center ">
      <div className="max-w-md w-full mx-auto text-center ">Login</div>
      <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300">
        <form className="space-y-6">
          <div>
            <label className="text-sm font-bold text-gray-600 block">
              Email
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div>
            <label className="text-sm font-bold text-gray-600 block">
              Password
            </label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div>
            <button className="w-full py-2 bg-yellow-400 hover:bg-yellow-500 rounded-md text-white text-sm">
              Login
            </button>
          </div>
          <div className="flex justify-center">
            <Link to="/signup"className="font-medium text-sm text-blue-500">
              Do not have a account?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
