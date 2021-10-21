import React from 'react';

import Header from '../Header/Header.jsx';
import './App.css';
import '../GroceryForm/GroceryForm';
import GroceryForm from '../GroceryForm/GroceryForm';


function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
                <GroceryForm addItem={addItem} />
            </main>
        </div>
    );
}

export default App;
