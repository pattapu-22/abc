import React, { useState } from 'react';
import logo from "../images/logo.jpg";
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 
  const handleSubmit = (e) => {
    e.preventDefault();
    // Log the email and password (if needed)
    console.log('Email:', email);
    console.log('Password:', password);
    // Navigate to Chat Page without authentication
    navigate('/chat'); // Redirects to the Chat Page
  };

  return (
    <div className="flex min-h-screen bg-black">
      <div className=" text-[#511D52] w-1/2 h-screen flex flex-col items-center justify-center border-r-2 border-gray-200 rounded-2xl">
        
          <h2 className="text-4xl text-[#511D52] font-bold text-center mb-4">Welcome to Collegium</h2>
          <h3 className="text-xl font-semibold text-white mb-6 text-center">
            Ready to find your perfect college?
          </h3>
          <img className="w-20 h-20" src={logo} alt="logo of collegium" />
        
      </div>

      <div className="flex flex-col items-center justify-center center w-1/2  bg-black  ml-10">
        <div className="p-4 rounded-lg">
          <h2 className="text-4xl font-bold text-left text-white underline-white mb-6">Sign In</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-white">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-1 border rounded-lg text-black" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-white">Password</label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-1 border rounded-lg text-black" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className=" bg-[#511D52] rounded-full center hover:bg-[#3B123B]  text-white font-semibold py-4 px-8 "
            >
              Sign In
            </button>
            <p className="mt-4 text-center text-white">
          Doesn't have an account? <Link className='underline-offset-2 underline  text-blue-500 hover:text-[#511D52]' to="/signup">SignUp</Link>
        </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
