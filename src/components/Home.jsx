import React, { useState, useEffect } from "react";
import Graph from "./Graph";
import { BASE_URL } from "../Api_AUTH";

const Home = () => {
  const [items, setItems] = useState([]);
  const [nameTransaction, setNameTransaction] = useState("");
  const [typeTransaction, setTypeTransaction] = useState("");
  const [amountTransaction, setAmountTransaction] = useState(0);
  let total = 0;
  let savingTotal = 0;
  let expenseTotal = 0;
  let investTotal = 0;

  useEffect(() => {
    fetch(BASE_URL + "api/financetracker")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        console.log("this data", data);
      })
      .catch((err) => console.log(err));
  }, []);

  for (let i = 0; i < items.length; i++) {
    if (items[i].Type === "Savings") {
      savingTotal = savingTotal + items[i].Amount;
    } else if (items[i].Type === "Expenses") {
      expenseTotal = expenseTotal + items[i].Amount;
    } else {
      investTotal = investTotal + items[i].Amount;
    }
    total = total + items[i].Amount;
  }

  const onDelete = (id) => {
    fetch(BASE_URL + "api/financetracker/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => console.log(res))
      .then(() => {
        window.location.reload();
      });
  };

  const clearAll = () => {
    fetch(BASE_URL + "api/financetracker/deleteAll", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => console.log(res))
      .then((data) => {
        console.log(data);
        window.location.reload();
      });
  };

  const addData = () => {
    fetch(BASE_URL + "api/financetracker/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        Name: nameTransaction,
        Type: typeTransaction,
        Amount: amountTransaction,
      }),
    })
      .then((res) => console.log(res))
      .then(() => {
        window.location.reload();
      });
  };

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
              onChange={(e) => setNameTransaction(e.target.value)}
            />
            <br />
            <select
              className="input-type"
              onChange={(e) => setTypeTransaction(e.target.value)}
            >
              <option></option>
              <option>Investment</option>
              <option>Expenses</option>
              <option>Savings</option>
            </select>
            <br />
            <input
              type="number"
              placeholder="Amount"
              className="input-amount"
              onChange={(e) => setAmountTransaction(e.target.value)}
            />
            <br />
            <p className="or-paragraph">Or input a csv file</p>
            <input className="file-csv" type="file" />
            <button className="btn-confirm" onClick={addData}>
              Confirm
            </button>
          </div>
          <div className="card-second-container">
            <h2>History</h2>

            <button className="delete-all-btn" onClick={clearAll}>
              Clear
            </button>

            {items.map((i, index) => (
              <div className="history-cont" key={index}>
                <button
                  className="delete-one-btn"
                  onClick={() => onDelete(i.Id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="delete-all-icon"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <p
                  className="history"
                  style={
                    i.Type === "Savings"
                      ? { borderColor: "#6bffb8" }
                      : i.Type === "Expenses"
                      ? { borderColor: "#FF6B6B" }
                      : i.Type === "Investment"
                      ? { borderColor: "yellow" }
                      : { borderColor: "transparent" }
                  }
                >
                  {i.Name} - {i.Type}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <Graph
            data={items}
            totalAmount={total}
            savingsAmount={savingTotal}
            expenseAmount={expenseTotal}
            investAmount={investTotal}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
