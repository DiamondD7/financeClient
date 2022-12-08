import React from "react";
import Graph from "./Graph";

const Home = () => {
  return (
    <div>
      <div className="contain">
        <div className="card-main-container">
          <div className="card-container">
            <h1 className="header-transaction">Transaction</h1>
            <input
              type="text"
              placeholder="Transaction Name"
              className="input-name"
            />
            <br />
            <select className="input-type">
              <option></option>
              <option>Investment</option>
              <option>Expense</option>
              <option>Savings</option>
            </select>
            <br />
            <input
              type="number"
              placeholder="Amount"
              className="input-amount"
            />
            <br />
            <button className="btn-confirm">Confirm</button>
          </div>
          <div className="card-second-container">
            <h2>History</h2>
            <p className="history" style={{ borderColor: "#6bffb8" }}>
              Salary - Savings
            </p>
            <br />
            <p className="history" style={{ borderColor: "#FF6B6B" }}>
              Car - Expenses
            </p>
            <br />
            <p className="history" style={{ borderColor: "yellow" }}>
              Stocks - Investment
            </p>
            <br />
          </div>
        </div>
        <div>
          <Graph />
        </div>
      </div>
    </div>
  );
};

export default Home;
