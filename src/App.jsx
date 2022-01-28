import React, { useState } from "react";
import axios from "axios";
import PovertyChart from "./components/PovertyChart";
import Dropdown from "./components/Dropdown";

function App() {
  const [data, setData] = useState([]);

  // request data for ppp1 OR ppp2 from backend
  const getData = (ppp) => {
    axios
      .get(`http://localhost:8081/data/${ppp}`)
      .then((res) => {
        setData([...res.data]);
        // console.log(`DATA for ${ppp} `, res);
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
        <PovertyChart data={data} />
      </main>
    </div>
  );
}

export default App;
