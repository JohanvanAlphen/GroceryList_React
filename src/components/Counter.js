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
            {count} stuk(s)
            <button onClick={addCountHandler}>+</button>
            <button onClick={removeCountHandler}>-</button>
        </div>
    )
}

export default Counter
