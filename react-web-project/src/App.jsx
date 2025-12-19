let message = 'This is cool';

function MyButton() {
    return (
        <button className="avatar">
            I'm a button
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