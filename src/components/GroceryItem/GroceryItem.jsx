import axios from "axios";
import "./GroceryItem.css";
import { useState } from "react";

function GroceryItem({ item, getGroceryList }) {
  const deleteItem = () => {
    let idToDelete = item.id;
    console.log("Clicked delete", item.item);
    axios({
      method: "DELETE",
      url: `/list/${idToDelete}`,
    })
      .then((response) => {
        console.log("DELETE response is", response);
        getGroceryList();
      })
      .catch((error) => {
        console.log("DELETE error", error);
      });
  };

  const purchaseItem = () => {
    let idToPurchase = item.id;
    console.log("Clicked Buy", item.item);
    axios({
      method: "PUT",
      url: `/list/${idToPurchase}`,
    })
      .then((response) => {
        console.log("PUT purchase response is", response);
        getGroceryList();
      })
      .catch((error) => {
        console.log("PUT purchase error", error);
      });
  };

  return (
    <div className="grocery-item">
      <p>{item.item}</p>
      <p>
        {item.quantity} {item.unit}
      </p>

      <p>
        {item.purchased ? (
          `Purchased`
        ) : (
          <>
            <button onClick={purchaseItem}>Buy</button>
            <button onClick={deleteItem}>Remove</button>
          </>
        )}
      </p>
    </div>
  );
}

export default GroceryItem;
