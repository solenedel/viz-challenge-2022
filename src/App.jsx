import React from "react";
import BarChart from "./components/BarChart";
import Dropdown from "./components/Dropdown";

function App() {
  return (
    <div className="App">
      <h1>Poverty Measures by Gender</h1>
      <main>
        <Dropdown />
        <BarChart />
      </main>
    </div>
  );
}

export default App;
