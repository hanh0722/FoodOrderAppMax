import React from "react";
import styles from "./Input.module.css";
const Input = ({ label, input, changeHandler }) => {
  return (
    <div className={styles.input}>
      <label htmlFor={input.id}>{label}</label>
      {/* it will all the key value pair with input object are added as props to input */}
      {/* eg: input: {
                type: text
            } => it will transfer to props */}
      <input onChange={changeHandler} {...input} />
      {/* we can pass event in sample input, if we don't have function changeHandler => it'll not have onChange event */}
    </div>
  );
};

export default Input;
