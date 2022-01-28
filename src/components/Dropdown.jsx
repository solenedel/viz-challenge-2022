import React, { useState } from "react";
import axios from "axios";

const Dropdown = () => {
  const [data, setData] = useState([]);

  const getData = (ppp) => {
    axios
      .get(`http://localhost:8081/data/${ppp}`)
      .then((res) => {
        setData([...res.data]);
        console.log("DATA TO FRONTEND: ", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div id="dropdown-section">
      <button type="button" onClick={() => getData("ppp1")}>
        ppp1 data
      </button>
      <button type="button" onClick={() => getData("ppp2")}>
        ppp2 data
      </button>
    </div>
  );
};

export default Dropdown;
