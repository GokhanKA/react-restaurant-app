import React from "react";

const SignUp = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center content-center  ">
      <div className="max-w-md w-full mx-auto text-center">Sign Up</div>
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
            <label className="text-sm font-bold text-gray-600 block">
              Password
            </label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div>
            <label className="text-sm font-bold text-gray-600 block">
              Manager Name
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div>
            <button className="w-full py-2 bg-blue-400 hover:bg-blue-500 rounded-md text-white text-sm">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
