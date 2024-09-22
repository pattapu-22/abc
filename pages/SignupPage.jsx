import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../images/logo.jpg";

const SignupPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your signup logic here, using the form data
    // Check if passwords match, etc.
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);

    // Assuming successful signup, redirect to Chat Page
    navigate('/chat');
  };

  return (
    <div className="flex min-h-screen bg-black">
      <div className="flex flex-col justify-center w-full max-w-md text-white border-r-2 rounded-2xl">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl text-[#511D52] font-bold text-center mb-4">Welcome to Collegium</h2>
          <h3 className="text-xl font-semibold mb-6 text-center">
            Ready to find your perfect college?
          </h3>
          <img className="w-12 h-24" src={logo} alt="logo of collegium" />
          {/* <img className="w-24 h-24 mb-4" src={logo} alt="Collegium Logo" /> */}
        </div>
      </div>

      <div className="flex justify-center items-center w-full max-w-md ml-4">
        <div className=' '>
        <h2 className="text-4xl font-bold text-white  text-left  mb-6">Sign Up</h2>

        <form onSubmit={handleSubmit} className="flex flex-col font-medium w-full">
          <div className=" mb-4 ">
            
              <label htmlFor="firstName" className="text-sm text-white   font-medium ">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                color="black"
                className="w-full px-3 py-2 border border-gray-300 bg-slate-600 text-black rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="lastName" className="text-sm text-white  font-medium">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="w-full px-3 py-2 border border-gray-300 bg-white text-black rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="text-sm text-white  font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 bg-white text-black rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="text-sm text-white font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 bg-white text-black rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500"
              value={password}
              onChange={(e) => setPassword  (e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="text-sm text-white  font-medium">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full px-3 py-2 border border-gray-300 bg-white text-black rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="checkbox"
              id="terms"
              className="mr-2"
            />
            <label htmlFor="terms" className=" text-white">
              By signing up, you accept the Terms of Service and Privacy Policy
            </label>
          </div>
          <button
              type="submit"
              className="bg-[#511D52] text-white w-40 rounded-full  font-bold py-4 px-8 hover:bg-[#3B123B] flex items-center justify-center"
            >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-white">
          Already have an account? <Link  to="/login"   className="text-blue-600 underline ">Login</Link>
        </p>
      </div>
      </div>
    </div>
  );
};

export default SignupPage;