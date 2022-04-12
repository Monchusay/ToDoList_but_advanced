import React from "react";
import style from "./TodoList.module.css"
import ToDoItem from "./ToDoItem/ToDoItem";

const TodoList = ({todos, setTodos}) => {
    return (
        <div className={style.TodoList}>
            {todos.map(todo => (
                <ToDoItem key={todo.id} todo={todo} todos={todos} setTodos={setTodos}/>
            ))}
        </div>
    )
}

export default TodoList