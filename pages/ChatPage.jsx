
import React from 'react';
import logo from "../images/logo.jpg";
import { Link, useNavigate } from 'react-router-dom';

const ChatPage = () => {
  return (
    <div className="flex min-h-screen bg-black">

    <aside className=" text-[#511D52] w-1/4 h-screen flex flex-col border-r-2 border-gray-200 rounded-2xl">
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
            Log Out
          </Link>
          
          <h1 className='flex items-center justify-center w-36 py-0.5 hover:bg-[#3B123B] rounded-2xl hover:text-white'>Settings</h1>
          {/* Nothing written for settings, just a button without any functionality provided till now */}
        </nav>
      </aside>
    
    <main className=' w-3/4'>

      <div className=' flex flex-row m-10  '>
        <div className='  w-full text-white'>
          hi1
        </div>

      </div>
    </main>
    </div> 
  );
};

export default ChatPage;
