import React from 'react'
import { Formik } from "formik";
import * as Yup from "yup";

const DialogForm = () => {
    return (
        <div>
        <Formik
        initialValues={{
          seat: 0,
        }}
        validationSchema={Yup.object({
          
        })}
        onSubmit={(values, { resetForm }) => {
          
        }}
      >
        {({ values, errors, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="text-sm font-bold text-gray-600 block">
                Seat
              </label>
              <input
                id="seat"
                value={values.seat}
                onChange={handleChange}
                type="number"
                className=" w-full p-2 border border-gray-300 rounded mt-1"
              />
              
            </div>
            
           
          </form>
        )}
      </Formik>
        </div>
    )
}

export default DialogForm
