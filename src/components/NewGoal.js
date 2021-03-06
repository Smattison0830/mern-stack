import React, { useState } from "react";

import "./NewGoal.css";

export default function NewGoal(props) {
  const [enteredText, setEnteredText] = useState("");

  const addGoalHandler = (event) => {
    event.preventDefault();

    const newGoal = {
      id: Math.random().toString(),
      text: enteredText,
    };

    setEnteredText("");

    props.onAddGoal(newGoal);
  };

  const textChangeHandler = (event) => {
    setEnteredText(event.target.value);
  };

  return (
    <form className='new-goal' onSubmit={addGoalHandler}>
      <h1>My Course Goals</h1>
      <input
        type='text'
        value={enteredText}
        onChange={textChangeHandler}></input>
      <button type='submit'>Submit</button>
    </form>
  );
}
