import React from "react";

import "../css/graphstyle.css";
const Graph = (props) => {
  return (
    <div>
      <div className="graph-container">
        <div
          className="bar-1"
          style={{
            height: (props.savingsAmount / props.totalAmount) * 100 + "%",
          }}
        ></div>
        <div
          className="bar-2"
          style={{
            height: (props.expenseAmount / props.totalAmount) * 100 + "%",
          }}
        ></div>
        <div
          className="bar-3"
          style={{
            height: (props.investAmount / props.totalAmount) * 100 + "%",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Graph;
