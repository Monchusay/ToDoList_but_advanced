import * as React from "react";
import style from "./InputField.module.css"

const InputField = (todo, setTodo) => {
  return  (
    <form className={style.input}>
        <input  placeholder="Enter a task" className={style.inputBox}/>
        <button className={style.inputSubmit}> GO </button>
  </form>
)
};

export default InputField
