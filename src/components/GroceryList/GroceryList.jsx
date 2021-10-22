import axios from "axios";
import getGroceryList from '../App/App.jsx'


function GroceryList({groceryList, getGroceryList}) {

    console.log("In GroceryList");

    const deleteList = () => {
    console.log('clicked delete');
    axios({
        method: "DELETE",
        url: '/list'
    }).then ((response) => {
        console.log('successfully deleted', response);
        getGroceryList();
    }).catch ((error) => {
        console.log('error', error);
    })
    }

    const resetList = () => {
        console.log('clicked reset');
        axios({
            method: "PUT",
            url: '/list'
        }).then ((response) => {
            console.log('successfully reset', response);
            getGroceryList();
        }).catch ((error) => {
            console.log('error', error); 
        })
    }

    return (
        <>
        <button onClick={deleteList}>Delete</button>
        <button onClick={resetList}>Reset</button>
        <ul>
            { groceryList.map(item => (
                <li key={item.id}>
                    Item:{item.item} Qty:{item.quantity} Unit:{item.unit} Purchased:{item.purchased}
                </li>
            )) 
            }
        </ul>
        </>
    )
}

export default GroceryList;
