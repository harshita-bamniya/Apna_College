import { useState } from "react";

export default function Todo(){
    let[todo,settodo]=useState(["sample"]);
    let[newtodo,setnewtodo]=useState("");

    let add=()=>{
        settodo([...todo,newtodo])
    };

    let updatetodo=(event)=>{
        setnewtodo(event.target.value);
    };

    return (
        <div>
            <h2>Todo</h2>
            <input placeholder="add task" value={newtodo} onChange={updatetodo}></input>
            &nbsp;&nbsp;  &nbsp;&nbsp;
            <button onClick={add}>Add</button>
            <br /><br /><br /><br /><br />
            <hr />
            <h3>Todo List</h3>
            <ul>
                {
                    todo.map((todo)=>(
                         <li>{todo}</li>
                    ))
                }
            </ul>
        </div>
    )
}