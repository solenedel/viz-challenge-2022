import React from "react";

const Dropdown = ({ setPpp }) => {
  // TODO - refactor getData to make more modular if time
  return (
    <div id="dropdown-section">
      <button type="button" onClick={() => setPpp("ppp1")}>
        $1.90/day (2011 ppp)
      </button>
      <button type="button" onClick={() => setPpp("ppp2")}>
        $3.10/day (2011 ppp)
      </button>
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
