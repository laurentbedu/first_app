import { useEffect, useState } from "react";

function TodoListScreen() {

    const [todoList, setTodoList] = useState([]);

    useEffect(()=>{
        const fecthData = async () => {
            const resp = await fetch("http://localhost:5000/todo");
            const todoListData = await resp.json();
            setTodoList(todoListData.data);
        }
        fecthData();
    }, [])

    return ( <>
        Todos List
        <div>
        {todoList.map(todo => {
            return <div key={todo.id}>{todo.title}</div>
            //return console.log(todo)

        })}
        </div>
    </> );
}

export default TodoListScreen;