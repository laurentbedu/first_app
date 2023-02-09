import { useState } from "react";

function EmptyComponent() {

    const [myState, setMyState] = useState("valeur initiale");
    const [counter, setCounter] = useState(0);

    const handleClick = (e) => {
        setMyState("nouvelle valeur");
    }

    const handleCounterClick = (e) => {
        setCounter(counter + 1);
    }

    return ( <>
        <h4>To do list ...</h4>
        <button className="btn btn-primary" onClick={handleClick}>{myState}</button>
        <div>{myState}</div>
        <button className="btn btn-primary" onClick={handleCounterClick}>+</button>
        <div>{counter}</div>
        <div>{counter}</div>
    </> );
}

export default EmptyComponent;

