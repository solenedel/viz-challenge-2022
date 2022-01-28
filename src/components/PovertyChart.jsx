import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const PovertyChart = ({ graphData }) => {
  return (
    <BarChart width={600} height={300} data={graphData}>
      <XAxis dataKey={graphData.gender} stroke="#8884d8" />
      <YAxis />
      <Tooltip />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <Bar dataKey="sevpov" fill="#8884d8" barSize={30} />
      <Bar dataKey="povgap" fill="#84d8b5" barSize={30} />
      <Bar dataKey="hc" fill="#c7d884" barSize={30} />
    </BarChart>
  );
};

export default PovertyChart;
