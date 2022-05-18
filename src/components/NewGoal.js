import React from "react";

import "./NewGoal.css";

export default function NewGoal(props) {
  const addGoalHandler = (event) => {
    event.preventDefault();

    const NewGoal = {
      id: Math.random().toString(),
      test: "My New Goal!",
    };

    props.onAddGoal(NewGoal);
  };

  return (
    <form className='new-goal' onSubmit={addGoalHandler}>
      <h1>My Course Goals</h1>
      <input type='text'></input>
      <button type='submit'>Submit</button>
    </form>
  );
}
