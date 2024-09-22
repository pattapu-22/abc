import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom"; 
import logo from "../images/logo.jpg";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import DefaultChatPage from "../pages/DefaultChatPage";
import ChatPage from "../pages/ChatPage";


// bg-[#511D52]-color


const MainPage = () => {
  return (
    <div className="flex min-h-screen bg-black">
      {/* Sidebar */}
      <aside className="text-[#511D52] w-1/4 h-screen flex flex-col border-r-2 border-gray-200 rounded-2xl">
        {/* Logo and Title */}
        <div className="flex flex-col items-center  mt-8 border-b">
          <div className="flex items-center mb-10">
            <img
              src={logo}
              alt="Collegium Logo"
              className="h-12 w-12"
            />
            <h1 className="text-xl text-white font-semibold ml-3">Collegium</h1>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-grow flex flex-col justify-center text-lg space-y-8 items-center">
          <Link to="/" className="flex items-center justify-center w-36 py-0.5 hover:bg-[#3B123B] rounded-2xl hover:text-white">
            Home
          </Link>
          <Link to="/login" className="flex items-center justify-center w-36 py-0.5 hover:bg-[#3B123B] rounded-2xl hover:text-white">
            Sign In
          </Link>
          <Link to="/signup" className="flex items-center justify-center w-36 py-0.5 hover:bg-[#3B123B] rounded-2xl hover:text-white">
            Sign Up
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex flex-col justify-center w-3/4 items-center flex-1 text-[#511D52]">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Welcome to Collegium!</h2>
          <h3 className="text-3xl font-semibold text-white mb-6">
            Ready to find your perfect college?
          </h3>
          <p className="text-xl mb-10 m-3 text-white">
            Get started now—it's free! Let Collegium guide you to the colleges
            that match your rank and aspirations.
          </p>
        </div>
        {/* //<button onClick={() => navigate('/about')}>About</button> */}
        <div className="mt-4">
          <Link 
          to="/defaultchat"
          className="bg-[#511D52] text-white font-semibold py-5 px-8 rounded-full hover:bg-[#3B123B] flex items-center justify-center">
            Start Now
          </Link>
        </div>
      </main>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path='/chat' element={<ChatPage  />} />
        <Route path="/defaultchat" element={<DefaultChatPage />} />
      </Routes>
    </Router>
  );
};

export default App;


