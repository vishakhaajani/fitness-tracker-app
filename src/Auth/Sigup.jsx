import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Sigup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleRegistration = (e) => {
        e.preventDefault();

        // Validate inputs
        if (!name || !email || !password) {
            toast.error('Form can not be empty!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return false;
        }

        let newUser = {
            id: Math.floor(Math.random() * 10000), // Generate a random id
            name,
            email,
            password
        };

        // Get existing users from localStorage or initialize an empty array if none exist
        let users = JSON.parse(localStorage.getItem("users")) || [];

        // Add new user to the users array
        users.push(newUser);

        // Save the updated users array back to localStorage
        localStorage.setItem("users", JSON.stringify(users));

        // Notify success and clear form
        toast.success("User registered successfully!");
        setName("");
        setEmail("");
        setPassword("");

        // Navigate to login page
        navigate("/login");
    };

    return (
        <div 
            className='flex justify-center items-center min-h-screen' 
            style={{ 
                backgroundImage: `url('https://img.reintech.io/variants/f6pm7b57b5v5o9itlpwa4e6due33/3f0c9f12ddc5138b80eee8ca29a3fbea5cd81e79050a059d8d9f8ee1585da977')`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center' 
            }}
        >
            <div className='bg-white p-8 rounded-lg shadow-lg w-96'>
                <h2 className='text-2xl font-bold text-center mb-6'>Registration</h2>
                <form onSubmit={handleRegistration}>
                    {/* Username */}
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700 font-medium mb-2">Username</label>
                        <input
                            type="text"
                            id="username"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                            placeholder="Enter your username"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    {/* Email */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    {/* Password */}
                    <div className='mb-4'>
                        <label htmlFor="password" className='block text-gray-700 font-medium mb-2'>Password</label>
                        <input
                            type="password"
                            id='password'
                            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none'
                            placeholder='Enter your password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        type='submit'
                        className='w-full text-white bg-orange-300 hover:bg-orange-400 transition font-semibold py-2 rounded-lg duration-300'>
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Sigup;
