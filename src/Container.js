import React, { useState, useEffect, } from 'react'
import Counter from "./components/Counter"
import './App.css';
import Dustbin from "./Dustbin.png"

function Container() {

    const [groceryList, setGroceryList] = useState([]);
    const [shoppingList, setShoppingList] = useState([]);

    function GroceryList() {

        const list = groceryList;
        const setList = setGroceryList;
        const listShopping = shoppingList
        const setListShopping = setShoppingList

        const [inputValue, setInputValue] = useState("")

        useEffect(() => { })

        const handleAddItem = () => {
            const newId = list.length + 1;
            const title = inputValue
            if (title === "") return alert("Voeg een boodschap toe");
            setList(prevList => {
                return [...prevList, { title: inputValue, id: newId }]
            })
            setInputValue("");
        }

        const handleRemoveItem = (item) => {
            const newList = [...list].filter(x => x.id !== item.id)
            setList(newList);
            handleReplaceItem(item);
        };

        const handleReplaceItem = (item) => {
            const newId = listShopping.length + 1;
            const newList = [...shoppingList, { title: item.title, id: newId, quantity: 1 }];
            setListShopping(newList);
        };

        return (
            <div className="grocerylist">
                <h2 className="grocerylist__header">Boodschappenlijst</h2>
                <div className="grocerylist__input">
                    <input
                        className="grocerylist__inputfield"
                        type="text"
                        value={inputValue}
                        onChange={(event) => setInputValue(event.target.value)}
                        placeholder="Voeg hier uw boodschap toe..."
                    />
                    <input
                        className="grocerylist__button"
                        type="button"
                        value="Voeg toe"
                        onClick={() => handleAddItem()}
                    />
                </div>
                <div className="grocerylist__div">
                    {list.map((item) => {
                        return (
                            <li
                                className="grocerylist__listitem"
                                key={item.id}
                                onClick={() => handleRemoveItem(item)}
                            >{item.title}
                                <span className="hide">Klik op het item om aan het winkelmandje toe te voegen!</span>
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

        const handleDeleteItem = (item) => {
            const newList = []
            setList(newList);
        }

        return (
            <div className="shoppingbasket">
                <div className="shoppingbasket__header">
                    <h2 >Winkelmand</h2>
                    <input
                        className="shoppingbasket__button"
                        type="button"
                        value="Leeg het winkelmandje"
                        onClick={handleClearBasket}
                    />
                </div>
                <div className="shoppingbasket__items">
                    {list.map((item) => {
                        return (
                            <li
                                className="shoppingbasket__listitem"
                                key={item.id}
                            >{item.title}
                                <div className="dustbin">
                                    <Counter />
                                    <img src={Dustbin} alt="dustbin" onClick={() => handleDeleteItem(item)} className="dustbin-button" />
                                </div>
                            </li>
                        )
                    })}
                </div>
                <div className="shoppingbasket__total">
                    U heeft {shoppingList.filter(todo => todo.title).length} artikel(en) in het winkelmandje.
                </div>
            </div>
        )
    }
    return (
        <div className="container">
            <GroceryList />
            <ShoppingCart />
        </div>
    )
}

export default Container
