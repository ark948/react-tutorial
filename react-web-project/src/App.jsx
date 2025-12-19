let message = 'This is cool';
import { useState } from "react";

function MyButton({ name }) {
    const [count, setCount] = useState(0);
    function handleClick() {
        setCount(count + 1);
    }
    return (
        <div>
            <h3>Button {name}.</h3>
            <button className="avatar" onClick={handleClick}>
                Clicked {count} times.
            </button>
        </div>
    )
}

export default function App() {
    return (
        <div>
            <MyButton name={"A"} />
            <MyButton name={"B"} />
            <h6>Message is: {message}</h6>
            <h1>Hello in React</h1>
        </div>
    )
}