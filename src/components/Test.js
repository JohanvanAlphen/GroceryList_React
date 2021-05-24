import React from 'react'

function Test() {

    function greeting() {
        console.log("Hello")
        waveHello()
    }
    function waveHello() {
        console.log("Johan")
    }


    return (
        <div>
            <button
                onClick={greeting}
            >Click me</button>

        </div>
    )
}

export default Test
