import React from "react";

const Dropdown = ({ getData }) => {
  // TODO - refactor getData to make more modular if time
  return (
    <div id="dropdown-section">
      <button type="button" onClick={() => getData("ppp1")}>
        ppp1 data
      </button>
      <button type="button" onClick={() => getData("ppp2")}>
        ppp2 data
      </button>
      {/* {data.length && console.log("DATA STATE: ", data[0].gender)} */}
    </div>
  );
};

export default Dropdown;
