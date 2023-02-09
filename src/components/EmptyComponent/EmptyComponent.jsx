import { useState } from "react";

function EmptyComponent() {

    const [myState, setMyState] = useState("valeur initiale");

    const handleClick = (e) => {
        setMyState("nouvelle valeur");
    }

    return ( <>
        <h4>To do list ...</h4>
        <button className="btn btn-primary" onClick={handleClick}>{myState}</button>
        <div>{myState}</div>
    </> );
}

export default EmptyComponent;

