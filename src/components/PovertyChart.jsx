import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const PovertyChart = ({ graphData }) => {
  return (
    <BarChart width={600} height={300} data={graphData}>
      <XAxis dataKey="gender" stroke="white" />
      <YAxis />
      <Tooltip />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <Bar dataKey="severity" fill="#8884d8" barSize={30} />
      <Bar dataKey="poverty_gap" fill="#e9aa97" barSize={30} />
      <Bar dataKey="headcount" fill="#84d8bc" barSize={30} />
    </BarChart>
  );
};

export default PovertyChart;
