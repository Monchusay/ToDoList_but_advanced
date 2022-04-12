import * as React from "react";
import style from "./InputField.module.css";
import {useRef} from "react";

const InputField = ({todo, setTodo, handleAdd}) => {

    const inputRef = useRef(null)

  return (
    <form className={style.input} onSubmit={(e) => handleAdd(e)}>
      <input
          ref={inputRef}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a task"
        className={style.inputBox}
      />
      <button className={style.inputSubmit}> GO </button>
    </form>
  );
};

export default InputField;
