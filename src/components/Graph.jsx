import React from "react";

import "../css/graphstyle.css";
const Graph = (props) => {
  console.log(props.savingsAmount);
  return (
    <div>
      <div className="graph-container">
        <div
          className="bar-1"
          style={{
            height: (props.savingsAmount / props.totalAmount) * 100 + "%",
          }}
        >
          {props.savingsAmount !== 0 ? (
            <p className="percent-label">
              {Math.trunc((props.savingsAmount / props.totalAmount) * 100)}%
            </p>
          ) : (
            ""
          )}
        </div>
        <div
          className="bar-2"
          style={{
            height: (props.expenseAmount / props.totalAmount) * 100 + "%",
          }}
        >
          {props.expenseAmount !== 0 ? (
            <p className="percent-label">
              {Math.trunc((props.expenseAmount / props.totalAmount) * 100)}%
            </p>
          ) : (
            ""
          )}
        </div>
        <div
          className="bar-3"
          style={{
            height: (props.investAmount / props.totalAmount) * 100 + "%",
          }}
        >
          {props.investAmount !== 0 ? (
            <p className="percent-label">
              {Math.trunc((props.investAmount / props.totalAmount) * 100)}%
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Graph;
