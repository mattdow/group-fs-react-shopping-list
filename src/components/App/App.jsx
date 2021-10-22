
import React, {useEffect, useState } from 'react';
import axios from "axios";
import Header from '../Header/Header.jsx'
import './App.css';
import GroceryList from '../GroceryList/GroceryList.jsx'
import GroceryForm from '../GroceryForm/GroceryForm';


function App() {
    let [groceryList, setGroceryList] = useState([]);

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

      const addItem = (newGroceryObject) => {
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

      useEffect(() => {
        getGroceryList();
      }, []);

    return (
        <div className="App">
            <Header />
            <main>
                <GroceryForm addItem={addItem} />

                <GroceryList 
                    groceryList={groceryList}
                    getGroceryList={getGroceryList}
                />

            </main>
        </div>
        );
}

export default App;
