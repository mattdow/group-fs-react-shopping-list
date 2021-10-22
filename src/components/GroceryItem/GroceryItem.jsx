import axios from 'axios';
import {useState} from 'react';
import './GroceryItem.css';

function GroceryItem ({item, getGroceryList}) {



    return (
        <div className="grocery-item">
            <p>{item.item}</p>
            <p>{item.quantity} {item.unit}</p>
        </div>

    )





}

export default GroceryItem;