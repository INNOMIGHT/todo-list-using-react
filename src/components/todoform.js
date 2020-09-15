import React, {useState} from "react";
import uuid from "uuid";
import {Button, TextField} from "@material-ui/core";

function TodoForm({addToDo}){
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    });

    function handleTaskInput(e){
        console.log("Task Change")
        setTodo({...todo, task: e.target.value});
    }

    function handleSubmit(e){
        console.log("Submit")
        e.preventDefault()
        if(todo.task.trim()){
            addToDo({...todo, id: uuid.v4()})
            setTodo({...todo, task: ""})
        }
    }

    return(
        <form className="todo-form" onSubmit={handleSubmit}>
            <TextField
                label="Task"
                name="task"
                onChange={handleTaskInput}
                value={todo.task}
                type="text"
            />
            <Button type="submit">Submit</Button>
        </form>
    )
}

export default TodoForm
