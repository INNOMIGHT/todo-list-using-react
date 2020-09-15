import React from "react";
import {Checkbox, Typography, IconButton, ListItem} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close"
function Todo({todo, removeTodo}){

    function onHandleRemove(){
        removeTodo(todo.id)
    }

    return(
        <div className="todo-item">
            <Checkbox checked={todo.completed} type="checkbox"/>
            <ListItem className="spec-item" /><Typography variant="body1">{todo.task}</Typography>
            <IconButton onClick={onHandleRemove}><CloseIcon /></IconButton>
        </div>
    );
}

export default Todo