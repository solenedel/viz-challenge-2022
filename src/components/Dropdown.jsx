import React from "react";

const Dropdown = ({ setPpp }) => {
  return (
    <div id="dropdown-section">
      <h2>Wage (2011 ppp)</h2>
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
          <label htmlFor="ppp1">$1.90/day</label>
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
          <label htmlFor="ppp1">$3.10/day</label>
        </span>
      </div>

      <div id="dropdown-text">
        This graph shows 3 different measures of poverty by gender in Nigeria
        (2012); <span className="bold-text">Severity Ratio</span>,{" "}
        <span className="bold-text">Poverty Gap</span> and{" "}
        <span className="bold-text">Headcount Ratio</span>, each measured in
        percentage (%). Hover on the bars to see values. Toggle the wage between
        two PPP values.
      </div>
    </div>
  );
};

export default Dropdown;
