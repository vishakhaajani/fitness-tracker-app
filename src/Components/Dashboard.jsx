// src/Components/Dashboard.js
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { WorkOutContext } from './WorkoutProvider';

const Dashboard = () => {
    const navigate = useNavigate();
    const { workouts, goals } = useContext(WorkOutContext);

    const handleLogWorkoutClick = () => {
        navigate('/workoutlog');
    };

    const handleAddGoalClick = () => {
        navigate('/goals');
    };

    return (
        <div className='p-6' style={{backgroundImage: `url('https://img.reintech.io/variants/f6pm7b57b5v5o9itlpwa4e6due33/3f0c9f12ddc5138b80eee8ca29a3fbea5cd81e79050a059d8d9f8ee1585da977')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center', minHeight: "100vh"}}>
            <h1 className="text-3xl mb-4 font-bold">Dashboard</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4'>
                <div className='bg-gray-100 p-10 rounded'>
                    <div className='flex justify-between items-center'>
                        <h2 className='font-bold text-2xl mb-6'>Recent Workouts</h2>
                        <button
                            onClick={handleLogWorkoutClick}
                            className='bg-orange-300 hover:bg-orange-400 transition text-white py-2 px-4 mb-6 rounded'>
                            Add Workout
                        </button>
                    </div>
                    <div className='grid grid-cols-2 gap-4'>
                        {workouts.map((workout) => (
                            <div key={workout.id} className="bg-white p-4 rounded shadow">
                                <h3 className="font-bold">{workout.activityType}</h3>
                                <p>Duration: {workout.duration} mins</p>
                                <p>Calories Burned: {workout.caloriBurned}</p>
                                <p>Date: {new Date(workout.date).toLocaleDateString()}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='bg-gray-100 p-10 rounded'>
                    <div className='flex justify-between items-center'>
                        <h2 className='font-bold text-2xl mb-6'>Weekly Goal</h2>
                        <button
                            onClick={handleAddGoalClick}
                            className='bg-orange-300 hover:bg-orange-400 transition text-white py-2 px-4 mb-6 rounded'>
                            Add Goal
                        </button>
                    </div>
                    <div className='grid grid-cols-1 gap-4'>
                        <div className="bg-white rounded shadow">
                        {goals.map((goal) => (
                            <div key={goal.id} className="bg-white p-4 rounded shadow">
                                <h3 className="font-bold">Predifine: {goal.selectedGoal}</h3>
                                <p>Own: {goal.goalInput}</p>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
