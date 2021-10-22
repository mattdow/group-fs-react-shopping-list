import GroceryItem from '../GroceryItem/GroceryItem'


function GroceryList({groceryList, getGroceryList}) {

    console.log("In GroceryList");
    return (
        <ul>
            { groceryList.map(item => (
                <GroceryItem
                    item={item}
                    key={item.id}
                    getGroceryList={getGroceryList} />
            )) 
            }
        </ul>
    )
}

export default GroceryList;
