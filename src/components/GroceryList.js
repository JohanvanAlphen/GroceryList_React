import React, { useState, } from 'react'

function GroceryList() {

    const [list, setList] = useState([
        { title: "Appels", id: 1 },
        { title: "Bananen", id: 2 },
        { title: "Peren", id: 3 },
    ]);

    const [inputValue, setInputValue] = useState("")

    const handleAddItem = () => {
        const newList = [...list, { title: inputValue, id: newId }];
        const newId = list.length + 1;
        setList(newList);
        setInputValue("");
    }

    // const handleReplaceItem = (index) => {
    //     const newList = []
    //     for (let i = 0; i < list.length; i++) {
    //         if (index !== i) {
    //             newList.push(list[i]);
    //         }
    //     }
    //     setList(newList);
    // }

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
                        <div>
                            <li
                                key={item.id}
                            // onClick={() => handleReplaceItem(index)}
                            >{item.title}
                            </li>
                        </div>
                    )
                })}

            </div>



        </div>
    )
}

export default GroceryList
