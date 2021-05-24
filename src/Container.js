import React, { useState, useEffect, useRef } from 'react'
import Counter from "./components/Counter"

function Container() {

    const [groceryList, setGroceryList] = useState([
        { title: "Appels", id: 1 },
        { title: "Bananen", id: 2 },
        { title: "Peren", id: 3 },
    ]);

    const [shoppingList, setShoppingList] = useState([
        { title: "Mango", id: 1 },
        { title: "Sinaasappel", id: 2 },
        { title: "Granaatappel", id: 3 },
    ]);

    function GroceryList() {

        const list = groceryList;
        const setList = setGroceryList;
        const listShopping = shoppingList
        const setListShopping = setShoppingList

        const [inputValue, setInputValue] = useState("")


        useEffect(() => { })

        const handleAddItem = () => {

            const newId = list.length + 1;
            const newList = [...list, { title: inputValue, id: newId }];
            setList(newList);
            setInputValue("");
        }

        const handleRemoveItem = (index) => {
            const newList = [...list]
            newList.splice(index, 1);
            setList(newList);
            handleReplaceItem()
        }

        const handleReplaceItem = () => {
            console.log("Item replaced");
            const newId = listShopping.length + 1;
            const newList = [...shoppingList, { title: groceryList.title, id: newId }]
            setListShopping(newList)
        }

        return (
            <div>
                <h2>Boodschappenlijst</h2>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(event) => setInputValue(event.target.value)}
                />
                <input
                    type="button"
                    value="Voeg toe"
                    onClick={() => handleAddItem()}
                />
                <div>
                    {list.map((item, index) => {
                        return (

                            <li
                                key={item.id}
                                onClick={() => handleRemoveItem(index)}
                            >{item.title}
                            </li>

                        )
                    })}
                </div>
            </div>
        )
    }

    function ShoppingCart() {

        const list = shoppingList;
        const setList = setShoppingList;

        const handleClearBasket = () => {
            const newList = []
            setList(newList);
        }

        return (
            <div>
                <h2>Winkelmand</h2>
                <input
                    type="button"
                    value="Leeg het winkelmandje"
                    onClick={handleClearBasket}
                />
                <div>
                    {list.map((item, index) => {
                        return (
                            <div>
                                <li
                                    key={item.id}
                                >{item.title}
                                </li>
                                <Counter />
                            </div>
                        )
                    })}
                </div>

            </div>
        )
    }
    return (
        <div>
            <GroceryList />
            <ShoppingCart />
        </div>
    )

}

export default Container
