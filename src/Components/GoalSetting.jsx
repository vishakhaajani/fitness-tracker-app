import React, { useContext, useState } from 'react';
import { WorkOutContext } from './WorkoutProvider';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const GoalSetting = () => {
    const { setGoal } = useContext(WorkOutContext);
    const [selectedGoal, setSelectedGoal] = useState("");
    const [goalInput, setGoalInput] = useState("");
    const navigate = useNavigate();

    const predefinedGoals = [
        "Lose 1 kg this week",
        "Run 10 km this week",
        "Do 150 minutes of exercise",
        "Strength train 3 times",
        "Drink 2 liters of water daily",
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!selectedGoal && !goalInput) {
            toast.error("Please select a goal or enter your own.");
            return;
        }
        
        setGoal({selectedGoal, goalInput})
        navigate('/dashboard'); 
        setSelectedGoal(""); 
        setGoalInput("");
    };

    return (
        <div className='h-screen flex items-center justify-center flex-col' style={{backgroundImage: `url('https://img.reintech.io/variants/f6pm7b57b5v5o9itlpwa4e6due33/3f0c9f12ddc5138b80eee8ca29a3fbea5cd81e79050a059d8d9f8ee1585da977')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',}}>
            <div className='bg-white p-14 rounded-lg shadow-lg'>
                <h1 className='text-2xl mb-6 text-center font-bold'>Set Your Fitness Goal</h1>
                <div className='flex items-center justify-center'>
                    <form onSubmit={handleSubmit} className='w-96'>
                        <label className='block mb-2'>Select a Predefined Goal:</label>
                        <select
                            value={selectedGoal}
                            onChange={(e) => setSelectedGoal(e.target.value)}
                            className='border mb-2 p-2 w-full'
                        >
                            <option value="">-- Select a Goal --</option>
                            {predefinedGoals.map((goal, index) => (
                                <option key={index} value={goal}>{goal}</option>
                            ))}
                        </select>
                        <label className='block mb-2'>Or enter your own goal:</label>
                        <input 
                            type="text" 
                            placeholder='Your custom goal' 
                            value={goalInput} 
                            onChange={(e) => setGoalInput(e.target.value)} 
                            className='border mb-2 p-2 w-full' 
                        />
                        <button type='submit' className='mt-2 bg-orange-300 hover:bg-orange-400 transition text-white py-2 px-4 rounded'>
                            Set Goal
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default GoalSetting;
