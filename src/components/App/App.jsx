<<<<<<< HEAD
import React, {useEffect, useState } from 'react';
import axios from "axios";
import Header from '../Header/Header.jsx'
import './App.css';
import GroceryList from '../GroceryList/GroceryList.jsx'

=======





  
>>>>>>> master

  useEffect(() => {
    getGroceryList();
  }, []);

<<<<<<< HEAD
function App() {
    let [groceryList, setGroceryList] = useState([]);
=======
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
    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
                <GroceryList 
                    groceryList={groceryList}
                    getGroceryList={getGroceryList}
                />
            </main>
        </div>
        );

>>>>>>> master
}

export default App;
