import React, {useEffect, useState } from 'react';

import Header from '../Header/Header.jsx'
import './App.css';
import GroceryList from '../GroceryList/GroceryList.jsx'



function App() {
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
}

export default App;
