import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const PovertyChart = ({ graphData }) => {
  return (
    <BarChart width={600} height={300} data={graphData}>
      <XAxis dataKey="name" stroke="#8884d8" />
      <YAxis />
      <Tooltip />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <Bar dataKey="uv" fill="#8884d8" barSize={30} />
    </BarChart>
  );
};

export default PovertyChart;
