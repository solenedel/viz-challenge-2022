import React from "react";

const Dropdown = ({ setPpp }) => {
  // TODO - refactor getData to make more modular if time
  return (
    <div id="dropdown-section">
      <h2>Wage</h2>
      <div className="dropdown">
        <label htmlFor="ppp1">$1.90/day (2011 ppp)</label>
        <input
          type="checkbox"
          id="ppp1"
          name="ppp1"
          onClick={() => setPpp("ppp1")}
        />
        <label htmlFor="ppp1">$3.10/day (2011 ppp)</label>
        <input
          type="checkbox"
          id="ppp1"
          name="ppp1"
          onClick={() => setPpp("ppp2")}
        />
      </div>

      <div id="dropdown-text">
        This graph shows 3 measures of Poverty: Severity Ratio, Poverty Gap and
        Headcount Ratio for males and females in Nigeria (2012). Hover on the
        bars to see values. Change the wage to see the difference between PPP1
        and PPP2.
      </div>
    </div>
  );
};

export default Dropdown;
