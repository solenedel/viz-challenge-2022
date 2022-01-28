import React from "react";

const Dropdown = ({ setPpp }) => {
  // TODO - refactor getData to make more modular if time
  return (
    <div id="dropdown-section">
      <h2>Wage</h2>
      <div className="dropdown">
        <span>
          <input
            type="radio"
            id="ppp1"
            name="ppp"
            value="ppp1"
            defaultChecked
            onClick={() => setPpp("ppp1")}
          />
          <label htmlFor="ppp1">$1.90/day (2011 ppp)</label>
        </span>
        <span>
          {" "}
          <input
            type="radio"
            id="ppp2"
            name="ppp"
            value="ppp2"
            onClick={() => setPpp("ppp2")}
          />
          <label htmlFor="ppp1">$3.10/day (2011 ppp)</label>
        </span>
      </div>

      <div id="dropdown-text">
        This graph shows 3 measures of Poverty for males and females in Nigeria
        (2012); <strong>Severity Ratio</strong>, <strong>Poverty Gap</strong>{" "}
        and <strong>Headcount Ratio</strong>, each measured in percentage (%).
        Hover on the bars to see values. Toggle the wage between two PPP values.
      </div>
    </div>
  );
};

export default Dropdown;
