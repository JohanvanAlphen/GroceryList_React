import React, { useState } from 'react'
import Counter from "./Counter"

function ShoppingCart() {

    const [list, setList] = useState([
        { title: "Mango", id: 1 },
        { title: "Sinasappel", id: 2 },
        { title: "Granaatappel", id: 3 },
    ]);


    const handleAddItem = () => {
        const newList = [...list];
        setList(newList);
    }

    const handleRemoveItem = () => {
        const newList = []
        setList(newList);
    }

    return (
        <div>
            <h2>Winkelmand</h2>
            <input
                type="button"
                value="Leeg het winkelmandje"
                onClick={handleRemoveItem}
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

export default ShoppingCart
