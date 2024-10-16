import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { WorkOutContext } from './WorkoutProvider';
import { toast } from 'react-toastify';


const WorkoutLog = () => {
    const { addWorkout } = useContext(WorkOutContext);
    const [activityType, setActivityType] = useState("");
    const [duration, setDuration] = useState("");
    const [caloriBurned, setCaloriBurned] = useState("");
    const [date, setDate] = useState("");
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!activityType || !duration || !caloriBurned || !date){
            toast.error("Form can't be empty!");
            return false;
        }

        addWorkout({ activityType, duration, caloriBurned, date });
        navigate('/dashboard'); // Navigate back to dashboard after submitting the form
    }

    return (
        <div className=' h-screen flex items-center justify-center flex-col' style={{backgroundImage: `url('https://img.reintech.io/variants/f6pm7b57b5v5o9itlpwa4e6due33/3f0c9f12ddc5138b80eee8ca29a3fbea5cd81e79050a059d8d9f8ee1585da977')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',}}>
            <div className='bg-white py-14'>
                <h1 className='text-2xl mb-6 text-bold text-center'>Log Workout</h1>
                <div className=' flex items-center justify-center'>
                    <form onSubmit={handleSubmit} className='w-3/4'>
                        <select
                            value={activityType}
                            onChange={(e) => setActivityType(e.target.value)}
                            className='border mb-2 p-2 w-full'
                        >
                            <option value="">Select an activity</option>
                            <option value="Running">Running</option>
                            <option value="Cycling">Cycling</option>
                            <option value="Swimming">Swimming</option>
                            <option value="Weight Lifting">Weight Lifting</option>
                            <option value="Yoga">Yoga</option>
                            <option value="HIIT">HIIT</option>
                            <option value="Walking">Walking</option>
                            <option value="Dancing">Dancing</option>
                            <option value="Boxing">Boxing</option>
                        </select>

                        <input
                            type="number"
                            placeholder='Duration (mins)'
                            value={duration}
                            onChange={(e) => setDuration(e.target.value)}
                            className='border mb-2 p-2 w-full'
                        />
                        <input
                            type="number"
                            placeholder='Calories Burned'
                            value={caloriBurned}
                            onChange={(e) => setCaloriBurned(e.target.value)}
                            className='border mb-2 p-2 w-full'
                        />
                        <input
                            type="date"
                            placeholder='Date'
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className='border mb-2 p-2 w-full'
                        />
                        <button
                            type='submit'
                            className='bg-orange-300 hover:bg-orange-400 transition text-white py-2 px-4 rounded mt-2'>Log Workout</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default WorkoutLog;
