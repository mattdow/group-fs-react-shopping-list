import axios from 'axios';
import {useState} from 'react';
import './GroceryItem.css';

function GroceryItem ({item, getGroceryList}) {

    // const deleteItem = () => {
    //     let idToDelete = item.id;
    //     console.log();
    // }


    return (
    
        <div className="grocery-item">
            <p>{item.item}</p>
            <p>{item.quantity} {item.unit}</p>
            <p>
                {item.purchased
                    ? `Purchased`
                    : <><button>Buy</button><button>Remove</button></>
                }   
            </p>
        </div>
    )
}

export default GroceryItem;