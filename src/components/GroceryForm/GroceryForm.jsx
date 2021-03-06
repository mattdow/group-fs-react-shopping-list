import { useState } from "react";

function GroceryForm({ addItem }) {
  const [newItem, setNewItem] = useState("");
  const [newUnit, setNewUnit] = useState("");
  const [newQuantity, setNewQuantity] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newGroceryObject = {
      item: newItem,
      quantity: newQuantity,
      unit: newUnit,
    };

    setNewItem("");
    setNewQuantity("");
    setNewUnit("");

    addItem(newGroceryObject);

    console.log(newGroceryObject);
  };
  return (
    <>
      <h2>Add an Item</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Grocery item"
          value={newItem}
          onChange={(evt) => setNewItem(evt.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
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
