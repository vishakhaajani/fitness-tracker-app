import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'; // Import toast

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        // Validate inputs
        if (!email || !password) {
            toast.error("Form can't be empty!");
            return false;
        }

        // Get the users from localStorage
        const users = JSON.parse(localStorage.getItem("users")) || [];

        // Find the user by email and password
        const user = users.find((user) => user.email === email && user.password === password);

        if (user) {
            // User exists and credentials match
            toast.success("Login successfully!");
            navigate("/dashboard");  // Navigate to dashboard after successful login
        } else {
            // Invalid email or password
            toast.error("Invalid email or password!");
        }

        // Clear input fields
        setEmail("");
        setPassword("");
    };

    return (
        <div className='flex justify-center items-center min-h-screen' 
             style={{ backgroundImage: `url('https://img.reintech.io/variants/f6pm7b57b5v5o9itlpwa4e6due33/3f0c9f12ddc5138b80eee8ca29a3fbea5cd81e79050a059d8d9f8ee1585da977')`, 
                      backgroundSize: 'cover', 
                      backgroundPosition: 'center' }}>
            <div className='bg-white p-8 rounded-lg shadow-lg w-96'>
                <h2 className='text-2xl font-bold text-center mb-6'>Login</h2>
                <form onSubmit={handleLogin}>
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
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
