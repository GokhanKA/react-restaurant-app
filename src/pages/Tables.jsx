import React from "react";

import Table from "../components/Table";

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const Tables = () => {
  return (
    <div className="min-h-screen bg-gray-200  m-4 rounded">
      <div className="text-center pt-4">
        <span className="font-bold text-5xl text-gray-600">Tables Layouts</span>
      </div>
      <div className="wrapper flex">
        {  a.map((b) => <Table key={b} num={b}/>) }
      </div>
    </div>
  );
};

export default Tables;
