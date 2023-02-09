import { useState } from "react";
import PincodeInput from "../../components/PincodeInput/PincodeInput";

function LandingScreen(props) {

    const {setScreen, property} = props;

    const [propertyState, setPropertyState] = useState(property);
    
    return ( <div className="text-center pt-2">
        <h1>{propertyState}</h1>
        <PincodeInput title="Pin Code" color="blue" setScreen={setScreen} propertyState={propertyState} setPropertyState={setPropertyState}/>
    </div> )
}

export default LandingScreen;