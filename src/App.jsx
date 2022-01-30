import React, { useEffect, useState } from "react";
import axios from "axios";
import PovertyChart from "./components/PovertyChart";
import Dropdown from "./components/Dropdown";

function App() {
  const [graphData, setGraphData] = useState([]);
  const [ppp, setPpp] = useState("ppp1");

  // format data to be graphed, removing unused fields
  const formatDataToGraph = (data) => {
    return data.map((item) => ({
      gender: item.gender,
      severity: (Number(item.sevpov) * 100).toFixed(0),
      poverty_gap: (Number(item.povgap) * 100).toFixed(0),
      headcount: (Number(item.hc) * 100).toFixed(0),
    }));
  };

  // load PPP1 data by default on page load
  useEffect(() => {
    axios
      .get(`http://localhost:8081/data/${ppp}`)
      .then((res) => {
        const formattedData = formatDataToGraph(res.data);
        setGraphData([...formattedData]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ppp]);

  return (
    <div className="App">
      <h1>
        Poverty Measures by Gender <span>(Nigeria, 2012)</span>
      </h1>
      <main>
        <Dropdown setPpp={setPpp} />
        <div style={{ width: "50vw", height: "500px" }}>
          <PovertyChart graphData={graphData} />
        </div>
      </main>
    </div>
  );
}

export default App;
