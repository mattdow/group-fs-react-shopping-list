import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Header/Header.jsx";
import "./App.css";

function App() {
  let [groceryList, setGroceryList] = useState([]);

  useEffect(() => {
    getGroceryList();
  }, []);

  const getGroceryList = () => {
    axios
      .get("/list")
      .then((response) => {
        console.log("Grocery list ->", response.data);
        setGroceryList(response.data);
      })
      .catch((err) => {
        console.log("Error getting groceries", err);
      });
  };

  const addItem = () => {
    axios
      .post("/list", newGroceryObject)
      .then((response) => {
        console.log("New object ->", newGroceryObject);
        getGroceryList();
      })
      .catch((err) => {
        console.log("Error Posting ->", err);
      });
  };

  return (
    <div className="App">
      <Header />
      <main>
        <p>Under Construction...</p>
      </main>
    </div>
  );
}

export default App;
