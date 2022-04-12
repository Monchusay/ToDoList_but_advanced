import React, {useEffect, useRef, useState} from "react";
import style from "./ToDoItem.module.css";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";

const ToDoItem = ({ todo, setTodos, todos }) => {
    
  const [edit, setEdit] = useState(false);
  const [editTodo, setEditTodo] = useState(todo.todo);

  const handleDone = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handleEdit = (e, id) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

    const inputRef = useRef(null)

  useEffect(()=>{
      inputRef.current?.focus()
  },[edit])


  return (
    <form className={style.ToDoItem} onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input
            ref={inputRef}
          className={style.ToDoText}
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
        />
      ) : todo.isDone ? (
        <s className={style.ToDoText}>{todo.todo}</s>
      ) : (
        <span className={style.ToDoText}>{todo.todo}</span>
      )}
      <div>
        <span
          className={style.icon}
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span className={style.icon} onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className={style.icon} onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default ToDoItem;
