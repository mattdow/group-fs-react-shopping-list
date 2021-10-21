//import react?

import { useState } from "react";

function GroceryForm ({addItem}) {

    const [newItem, setNewItem] = useState('');
    const [newQuantity, setNewQuantity] = useState('');
    const [newUnit, setNewUnit] = useState ('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const newGroceryObject = {
            item: newItem,
            quantity: newQuantity,
            unit: newUnit
        }

        setNewItem('');
        setNewQuantity('');
        setNewUnit('');
        
        addItem(newGroceryObject);
           
        console.log(newGroceryObject);
    }
    return (
        <>
        <h2>Add an Item</h2>
        <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          placeholder="grocery item"
          value={newItem}
          onChange={(evt) => setNewItem(evt.target.value)}
        />  
        <input
          type="number"
          placeholder="How many?"
          value={newQuantity}
          onChange={(evt) => setNewQuantity(evt.target.value)}
        /> 
         <input
          type="text"
          placeholder="Unit"
          value={newUnit}
          onChange={(evt) => setNewUnit(evt.target.value)}
        /> 
        <button type="submit">Save Item</button>
        </form>
        </>
    );

}

export default GroceryForm;