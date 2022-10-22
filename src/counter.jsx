import React, { useState, useEffect } from 'react'

function counter() {
    const [count, setCount] = useState(0)
    const [message, setMessage] = useState('')
    useEffect(() => {
        console.log('render')
    }, [count])

    return (
        <div>
            <input type="text" onChange={(e) => setMessage(e.target.value)} />
            <button onClick={() => { alert(message) }}> Alert </button>
            <hr />
            <h1>Counter: {count}</h1>
            <button onClick={() => {
                setCount(count + 1)
                console.log(count)
            }}> Plus </button>
        </div>
    )
}

export default counter