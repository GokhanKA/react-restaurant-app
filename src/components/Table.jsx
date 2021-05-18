import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import AddTableDialog from "./AddTableDialog";

const Table = () => {
  const [isShowDialog, setIsShowDialog] = useState(false);

  const handleSubmit = () => {
    // Handle submit....
  };

  const handleCloseDialog = () => {
    setIsShowDialog(!isShowDialog);
  };

  const DialogActions = () => {
    return (
      <div className=" px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <button
          type="button"
          className={`w-full inline-flex justify-center rounded-md border 
          border-transparent shadow-sm px-4 py-2 bg-green-600 text-base
          font-medium text-white hover:bg-green-700 focus:outline-none
          focus:ring-2 focus:ring-offset-2 
          focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm`}
          onClick={handleSubmit}
        >
          Create
        </button>
        <button
          type="button"
          className="mt-3 w-full inline-flex justify-center rounded-md
          border border-gray-300 shadow-sm px-4 py-2 bg-white text-base 
          font-medium text-gray-700 hover:bg-gray-50 focus:outline-none
          focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
          sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          onClick={handleCloseDialog}
        >
          Cancel
        </button>
      </div>
    );
  };

  return (
    <div>
      <button className="relative px-4 pt-4 font-bold text-sm ">
        <div
          className="bg-gray-300 p-6 rounded-lg shadow-lg text-center"
          onClick={handleCloseDialog}
        >
          <div className="mt-1">#Table</div>
          <div className="mt-4">
            <span className="text-center">Seat</span>
          </div>
        </div>
      </button>
      {isShowDialog && (
        <AddTableDialog
          title={"Create Table"}
          handleCloseDialog={handleCloseDialog}
          size="w-1/4"
          color={"bg-green"}
        >
          <div>
            <Formik
              initialValues={{
                seat: 0,
              }}
              validationSchema={Yup.object({})}
              onSubmit={(values) => {
                const { seat } = values;
                handleSubmit(seat);
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
            <DialogActions />
          </div>
        </AddTableDialog>
      )}
    </div>
  );
};

export default Table;
