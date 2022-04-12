import React from "react";
import style from "./ToDoItem.module.css"
import {AiFillDelete, AiFillEdit} from "react-icons/ai";
import {MdDone} from "react-icons/md";

const ToDoItem = ({todo, setTodos, todos}) => {
    return (
        <div className={style.ToDoItem}>
            <span className={style.ToDoText}>{todo.todo}</span>
            <div>
                <span className={style.icon}>
                    <AiFillEdit/>
                </span>
                <span className={style.icon}>
                    <AiFillDelete/>
                </span>
                <span className={style.icon}>
                    <MdDone/>
                </span>
            </div>
        </div>
    )
}

export default ToDoItem