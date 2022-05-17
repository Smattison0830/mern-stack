import React from 'react';
import GoalList from './components/GoalList'
import './App.css';

export default function App() {

  const courseGoals = [
    {id: "cg1", text: "Finish this course"},
    {id: "cg2", text: "Learn how to create nice MERN websites."},
    {id: "cg3", text: "GET A JOB!"}
  ];

  return (
    <div className="course-goals">
      <GoalList goals={courseGoals} />
    </div>
  );
};