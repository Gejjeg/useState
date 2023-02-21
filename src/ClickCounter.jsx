import { useState } from "react"

export function ClickCounter({ initialValue = 0}) {
    const [counter, setCounter] = useState(initialValue)

    const setCount = () => {
        setCounter(count => count + 1)
    }

    return (
        <div>
            <h1>Count: {counter}</h1>
            <button onClick={setCount}>Start Counting</button>
        </div>
    )
}