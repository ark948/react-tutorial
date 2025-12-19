let message = 'This is cool';
import { useState } from "react";

function MyButton() {
    const [count, setCount] = useState(0);
    function handleClick() {
        console.log("Button clicked");
        setCount(count + 1);
    }
    return (
        <button className="avatar" onClick={handleClick}>
            Clicked {count} times.
        </button>
    )
}

export default function App() {
    return (
        <div>
            <MyButton />
            <h4>Message is: {message}</h4>
            <h1>Hello in React</h1>
        </div>
    )
}