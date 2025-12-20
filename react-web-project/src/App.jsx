import { useState } from "react";

function Square() {
    return <button className="square">1</button>;
}

function Board() {
    return (
        <>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
        </>
    )
}

export default function App() {
    return (
        <>
            <Board />
        </>
    )
}