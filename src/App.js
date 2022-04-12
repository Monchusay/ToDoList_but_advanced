import "./App.module.css";
import React, { useState } from "react";
import InputField from "./components/InputField";
import style from "./App.module.css"

const App = (props) => {

    const [todo, setTodo] = useState()

  return (
    <div className={style.App}>
      <div className={style.Tasks}>
        <span> Tasks </span>
      </div>
      <InputField todo={todo} setTodo={setTodo}/>
    </div>
  );
};

export default App;
