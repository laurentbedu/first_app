import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { useState } from "react";
import './App.css';
import EmptyComponent from "./components/EmptyComponent/EmptyComponent";
import LandingScreen from './screens/LandingScreen/LandingScreen';
import TaskDetailScreen from "./screens/TaskDetailScreen/TaskDetailScreen";
import TaskListScreen from "./screens/TasklistScreen/TaskListScreen";
import TodoListScreen from "./screens/TodolistScreen/TodoListScreen";


function App() {

  const [screen, setScreen] = useState("landing");

  const navigate = (e) => {
    setScreen(e.target.id);
  }

  return (
    <div className="App container">
      {screen === "landing" && <LandingScreen setScreen={setScreen}/>}
      {screen === "demo" && <EmptyComponent />}
      <div className="d-flex pt-3 justify-content-center">

        <button className="btn btn-primary me-1" onClick={navigate} id="todolist">Todo List</button>
        <button className="btn btn-primary me-1" onClick={navigate} id="tasklist">Task List</button>
        <button className="btn btn-primary" onClick={navigate} id="task">Task Detail</button>
      </div>
      <div className="pt-3">
        {screen === "todolist" && <TodoListScreen setScreen={setScreen}/>}
        {screen === "tasklist" && <TaskListScreen setScreen={setScreen}/>}
        {screen === "task" && <TaskDetailScreen setScreen={setScreen}/>}
      </div>
      
    </div>
  );
}

export default App;
