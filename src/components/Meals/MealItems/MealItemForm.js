import React, {useState} from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
const MealItemForm = ({ id, setAmountHandler }) => {
  const [quantity, setQuantity] = useState(1);
  const [isValid, setIsValid] = useState(true);
  const changeHandler = (event) =>{
    setQuantity(Number(event.target.value));
  }

  const submitHandler = (event) =>{
    event.preventDefault();
    if(quantity <= 0 || quantity > 5){
      setIsValid(false);
      return;
    }
    setAmountHandler(quantity);
  }
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount_" + id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
          onChange: changeHandler
        }}
      />
      <button>Add</button>
      {!isValid && <p>Please enter quantity (1-5)</p>}
    </form>
  );
};

export default MealItemForm;
