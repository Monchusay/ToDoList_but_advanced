import "./App.module.css";
import React, { useState } from "react";
import InputField from "./components/InputField/InputField";
import style from "./App.module.css";
import TodoList from "./components/TodoList/TodoList";

const App = (props) => {

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAdd = (e) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Math.random(), todo, isDone: false }]);
      setTodo("");
    }
  };
  console.log(todos);

  return (
    <div className={style.App}>
      <div className={style.Tasks}>
        <span> Tasks </span>
      </div>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
