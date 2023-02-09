import { useState } from "react";

function EmptyComponent() {

    const [myState, setMyState] = useState("valeur initiale");
    const [counter, setCounter] = useState(0);
    const [user, setUser] = useState({login:"bedulaurent@gmail.com", pincode:1234})

    const jsonUser = {
        "login": "",
        "pincode": 1234,
        
    }

    const handleClick = (e) => {
        setMyState("nouvelle valeur");
    }

    const handleCounterClick = (e) => {
        setCounter(counter + 1);
    }

    return ( <>
        <h4>State Demo</h4>
        <button className="btn btn-primary" onClick={handleClick}>{myState}</button>
        <div>{myState}</div>
        <button className="btn btn-primary" onClick={handleCounterClick}>+</button>
        <div>{counter}</div>
        <div>{counter}</div>
    </> );
}

export default EmptyComponent;

