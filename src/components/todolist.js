import React from "react";
import Todo from "./todo"
import {List} from "@material-ui/core";

function ToDoList({todos, removeTodo}){
    console.log("Todolist Activated!")
    return(

        <List>
            {todos.map(todo => (
                <Todo key={todo.id} todo={todo} removeTodo={removeTodo} />
                ))}
        </List>
    )
}

export default ToDoList;