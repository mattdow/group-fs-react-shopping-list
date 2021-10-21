


function GroceryList({groceryList, getGroceryList}) {

    console.log("In GroceryList");
    return (
        <ul>
            { groceryList.map(item => (
                <li key={item.id}>
                    Item:{item.item} Qty:{item.quantity} Number:{item.number} Purchased:{item.purchased}
                </li>
            )) 
            }
        </ul>
    )
}

export default GroceryList;
