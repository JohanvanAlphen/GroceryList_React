import React, { useState } from 'react'

function Counter() {

    const [count, setCount] = useState(1)

    const addCountHandler = () => {
        setCount(count + 1);
    };
    const removeCountHandler = () => {
        if (count === 1) {
            return;
        }
        setCount(count - 1);
    };

    return (
        <div>
            Hoeveelheid: {count}
            <button onClick={addCountHandler} className="increase-button">+</button>
            <button onClick={removeCountHandler} className="decrease-button">-</button>
        </div>
    )
}

export default Counter
