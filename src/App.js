import React, { useState } from "react";
import GoalList from "./components/GoalList";
import NewGoal from "./components/NewGoal";
import "./App.css";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([
    { id: "cg1", text: "Finish this course" },
    { id: "cg2", text: "Learn how to create nice MERN websites." },
    { id: "cg3", text: "GET A JOB!" },
  ]);

  const addNewGoalHandler = (newGoal) => {
    // setCourseGoals(courseGoals.concat(newGoal));
    setCourseGoals((prevCourseGoals) => {
      return prevCourseGoals.concat(newGoal);
    });
  };

  return (
    <div className='course-goals'>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={courseGoals} />
    </div>
  );
}
