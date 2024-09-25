import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../images/logo.jpg"; // If not used, consider removing
import { SideTextOfSigning, SignInInputBoxes, SubmitButton } from "../src/components/Utilities";

const SignUpForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      console.error("Passwords do not match!");
      return; // You can add error handling here
    }

    // Log the details (or implement your signup logic)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);

    // Assuming successful signup, redirect to Chat Page
    navigate('/chat');
  };

  return (
    <div className="grid min-h-screen grid-cols-1 md:grid-cols-2 bg-[#181818]">
      <div className="flex items-center justify-center py-10 px-9 ml-4 h-full">
        <SideTextOfSigning />
      </div>
      
      <div className='flex items-center justify-center px-14 h-full'>
        <form onSubmit={handleSubmit} className="flex flex-col font-medium w-full">
          <h2 className="text-4xl font-bold text-white items-left mb-6">Sign Up</h2>
          <SignInInputBoxes name="Name" type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
          <SignInInputBoxes name="Email" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <SignInInputBoxes name="Password" type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <SignInInputBoxes name="Confirm Password" type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

          <div className="mb-4">
            <input type="checkbox" id="terms" className="mr-2" required />
            <label htmlFor="terms" className="text-white">
                By signing up, you accept the Terms of Service and Privacy Policy
            </label>
          </div>

          <SubmitButton name="Sign Up" message="Already have an account?" to="/login" alt="Log In" />
          </form>
      </div>
    </div>
  );
};

export default SignUpForm;
