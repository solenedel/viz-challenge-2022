import React, { useState } from "react";
import axios from "axios";

const Dropdown = () => {
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

  // TODO - refactor getData to make more modular if time
  return (
    <div id="dropdown-section">
      <button type="button" onClick={() => getData("ppp1")}>
        ppp1 data
      </button>
      <button type="button" onClick={() => getData("ppp2")}>
        ppp2 data
      </button>
      {data.length && console.log("DATA STATE: ", data[0].gender)}
    </div>
  );
};

export default Dropdown;
