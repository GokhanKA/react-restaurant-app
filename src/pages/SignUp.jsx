import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";

import { AuthContext } from "../context/authContext";


const SignUp = () => {

  const { signup } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col mt-52  ">
      <div className="text-center">
        <h1 className="font-bold tracking-wider text-3xl mb-4 w-full text-gray-600">
          Sign Up
        </h1>
      </div>
      <div className="max-w-md w-full mx-auto mt-4 rounded bg-white p-8 border border-gray-300">
        <Formik
          initialValues={{
            managerName: "",
            email: "",
            password: "",
          }}
          validationSchema={Yup.object({
            managerName: Yup.string().required("Manager name is required"),
            email: Yup.string()
              .email("Invalid email")
              .required("Email is required"),
            password: Yup.string()
              .required("No password provided.")
              .min(6, "Password is too short - should be 6 chars minimum.")
              .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
          })}
          onSubmit={(values, { resetForm }) => {
            const {email, password} = values;
            signup(email, password);
            resetForm();
          }}
        >
          {({ values, errors, handleChange, handleSubmit, touched }) => (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-sm font-bold text-gray-600 block">
                  Manager Name
                </label>
                <input
                  id="managerName"
                  value={values.managerName}
                  onChange={handleChange}
                  type="text"
                  className=" w-full p-2 border border-gray-300 rounded mt-1"
                />
                {errors.managerName && touched.managerName && (
                  <div className="text-red-600">{errors.managerName}</div>
                )}
              </div>
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
                  className="w-full py-2 bg-blue-500 hover:bg-blue-600 rounded-md text-white text-sm"
                >
                  Sign Up
                </button>
                <div className="flex justify-center pt-3">
                  <Link
                    to="/login"
                    className="text-blue-500  font-medium hover:text-blue-700 ml-1 hover:underline"
                  >
                    Already have an account
                  </Link>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignUp;
