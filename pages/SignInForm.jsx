import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../images/logo.jpg";
import { SideTextOfSigning, SignInInputBoxes, SubmitButton } from "../src/components/Utilities";

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Log the email and password (if needed)
    console.log('Email:', email);
    console.log('Password:', password);
    // Navigate to Chat Page without authentication (replace with actual login logic)
    navigate('/chat');
  };

  return (
    <div className="grid min-h-screen grid-cols-1 md:grid-cols-2 bg-[#181818]">
      {/* Left Side Text Container */}
      <div className="flex items-center justify-center py-10 px-9 ml-4 h-full">
        <SideTextOfSigning />
      </div>

      {/* Right Side Form Container */}
      <div className="flex items-center justify-center px-14 h-full">
        <form onSubmit={handleSubmit} className="flex flex-col font-medium w-full">
          <h2 className="text-4xl font-bold text-white mb-4">Sign In</h2>
          <SignInInputBoxes name="Email" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <SignInInputBoxes name="Password" type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <SubmitButton name="Sign In" message="Don't have an account?" to="/signup" alt="SignUp" />
        </form>
      </div>
    </div>
  );
};

export default SignInForm;

