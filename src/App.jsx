import React, { useState } from "react";
import axios from "axios";
import PovertyChart from "./components/PovertyChart";
import Dropdown from "./components/Dropdown";

function App() {
  const [graphData, setGraphData] = useState([]);

  // format data to be graphed
  const formatDataToGraph = (data) => {
    return data.map((item) => ({
      ...item,
      sevpov: (Number(item.sevpov) * 100).toFixed(2),
      povgap: (Number(item.povgap) * 100).toFixed(2),
      hc: (Number(item.hc) * 100).toFixed(2),
    }));
  };

  // request data for ppp1 OR ppp2 from backend
  const getData = (ppp) => {
    axios
      .get(`http://localhost:8081/data/${ppp}`)
      .then((res) => {
        formatDataToGraph(res.data);
        const formattedData = formatDataToGraph(res.data);
        setGraphData([...formattedData]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="App">
      <h1>Poverty Measures by Gender</h1>
      <main>
        <Dropdown getData={getData} />
        <PovertyChart graphData={graphData} />
      </main>
      {graphData.length && console.log("graphData formatted:", graphData)}
    </div>
  );
}

export default App;
