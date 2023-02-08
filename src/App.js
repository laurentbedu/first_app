import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { useState } from "react";
import './App.css';
import LandingScreen from './screens/LandingScreen/LandingScreen';


function App() {

  const [screen, setScreen] = useState("landing")

  return (
    <div className="App container">
      {screen === "landing" && <LandingScreen setScreen={setScreen}/>}
      {screen === "todolist" && <div>Todo List</div>}
    </div>
  );
}

export default App;
