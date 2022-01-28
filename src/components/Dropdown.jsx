import React from "react";

const Dropdown = ({ getData }) => {
  // TODO - refactor getData to make more modular if time
  return (
    <div id="dropdown-section">
      <button type="button" onClick={() => getData("ppp1")}>
        $1.90/day (2011 ppp)
      </button>
      <button type="button" onClick={() => getData("ppp2")}>
        $3.10/day (2011 ppp)
      </button>
      <div id="dropdown-text">About this graph.</div>
      {/* {data.length && console.log("DATA STATE: ", data[0].gender)} */}
    </div>
  );
};

export default Dropdown;
