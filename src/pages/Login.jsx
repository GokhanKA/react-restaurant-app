import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";

import { AuthContext } from "../context/authContext";


const Login = () => {
  const { login } = useContext(AuthContext);
  return (
    <div className="min-h-screen bg-gray-200 flex flex-col mt-52">
      <div className="text-center">
        <h1 className="font-bold tracking-wider text-3xl mb-4 w-full text-gray-600">
          Login
        </h1>
      </div>
      <div className="max-w-md w-full rounded mx-auto mt-4 bg-white p-8 border border-gray-300">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid email")
              .required("Email is required"),
            password: Yup.string().required("No password provided."),
          })}
          onSubmit={(values, { resetForm }) => {
            const { email, password } = values;
            login(email, password);
            resetForm();
          }}
        >
          {({ values, errors, handleChange, handleSubmit, touched }) => (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-sm font-bold text-gray-600 block">
                  Email
                </label>
                <input
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                  type="email"
                  className=" w-full p-2 border border-gray-300 rounded mt-1"
                />
                {errors.email && touched.email && (
                  <div className="text-red-600">{errors.email}</div>
                )}
              </div>
              <div>
                <label className="text-sm font-bold text-gray-600 block">
                  Password
                </label>
                <input
                  id="password"
                  value={values.password}
                  onChange={handleChange}
                  type="password"
                  className=" w-full p-2 border border-gray-300 rounded mt-1"
                />
                {errors.password && touched.password && (
                  <div className="text-red-600">{errors.password}</div>
                )}
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full py-2 bg-yellow-400 hover:bg-yellow-500 rounded-md text-white text-sm"
                >
                  Login
                </button>
              </div>
              <div className="flex justify-center">
                <span>Don't have an account?</span>
                <Link
                  to="/signup"
                  className="text-blue-500 hover:underline font-medium hover:text-blue-700 ml-1 "
                >
                  Create one
                </Link>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
