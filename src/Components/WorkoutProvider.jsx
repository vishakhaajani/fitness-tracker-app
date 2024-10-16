// src/Components/WorkoutProvider.js
import React, { createContext, useState } from 'react';

export const WorkOutContext = createContext();

export const WorkoutProvider = ({ children }) => {
    const [workouts, setWorkouts] = useState([]); // Store workout data
    const [goals, setGoals] = useState([]); // Store goals

    const addWorkout = (workout) => {
        setWorkouts([...workouts, { ...workout, id: Date.now() }]); // Add workout with a unique ID
    };

    const setGoal = (newGoal) => {
        setGoals([...goals, {...newGoal, id:Date.now()}]); // Update weekly goal
    };

    return (
        <WorkOutContext.Provider value={{ workouts, goals, addWorkout, setGoal }}>
            {children}
        </WorkOutContext.Provider>
    );
};
