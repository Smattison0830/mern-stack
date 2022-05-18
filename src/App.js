import React from "react";
import GoalList from "./components/GoalList";
import NewGoal from "./components/NewGoal";
import "./App.css";

export default function App() {
  const courseGoals = [
    { id: "cg1", text: "Finish this course" },
    { id: "cg2", text: "Learn how to create nice MERN websites." },
    { id: "cg3", text: "GET A JOB!" },
  ];

  const addNewGoalHandler = (newGoal) => {
    courseGoals.push(newGoal);
    console.log(courseGoals);
  };

  return (
    <div className='course-goals'>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={courseGoals} />
    </div>
  );
}
