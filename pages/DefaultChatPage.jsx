import { useState } from 'react';
import logo from "../images/logo.jpg";
import mic from "../images/mic.jpg";
import { Link } from 'react-router-dom';

const DefaultChatPage = () => {
  const [historyData, setHistoryData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false); 

  //text-> input field
  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      // Updating the history 
      const newEntry = {
        title: inputValue,
        message: 'Thank you for consulting Collegium for your queries. We are happy to help you with your requested questions. Feel free to use this this application  where you can get the clarity by one click. '
      };
      setHistoryData(prevHistory => [...prevHistory, newEntry]); // Updating history
      setIsSubmitted(true); // Hiding history
      setInputValue(""); // Clearing the input field
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <aside className="text-[#511D52] w-full flex flex-row h-1/6 bg-black border-b-2 border-gray-500 rounded-2xl">
        {/* Logo and Title */}
        <div className="flex items-center">
          <div className="flex items-center m-5">
            <img src={logo} alt="Collegium Logo" className="h-12 w-12" />
            <h1 className="text-xl text-white font-semibold ml-3">Collegium</h1>
          </div>
        </div>
        {/* Navigation Menu */}
        <nav className="flex-grow flex flex-row justify-end text-lg items-center mr-7">
          <Link to="/login" className="flex items-center justify-center px-6 py-0.5 hover:bg-[#3B123B] rounded-2xl hover:text-white">
            SignIn
          </Link>
          <Link to="/signup" className="flex items-center justify-center px-6 py-0.5 hover:bg-[#3B123B] rounded-2xl hover:text-white">
            SignUp
          </Link>
        </nav>
      </aside> 

      {/* Main Section */}
      <div className="w-full flex-grow flex px-40 flex-col mt-4 bg-black p-2">
        {/* Display chat-like history */}
        <div className="flex-grow text-gray-300 p-4 overflow-y-auto" style={{ maxHeight: '400px' }}>
          {!isSubmitted ? (
            <div className="flex justify-center gap-5 pt-72 items-end">
              <div
                className="border-2 border-gray-500 px-4 py-2 cursor-pointer hover:bg-[#3B123B] rounded-2xl hover:text-white"
                onClick={() => handleSuggestionClick("What is Collegium?")}
              >
                What is Collegium?
              </div>
              <div
                className="border-2 border-gray-500 px-4 py-2 cursor-pointer hover:bg-[#3B123B] rounded-2xl hover:text-white"
                onClick={() => handleSuggestionClick("How does Collegium work?")}
              >
                How does Collegium work?
              </div>
              <div
                className="border-2 border-gray-500 px-4 py-2 cursor-pointer hover:bg-[#3B123B] rounded-2xl hover:text-white"
                onClick={() => handleSuggestionClick("Benefits of Collegium?")}
              >
                Benefits of Collegium?
              </div>
            </div>
          ) : (
            historyData.map((item, index) => (
              <div key={index} className="mt-2">
                <h1 className="text-xl text-white px-3 py-1 bg-slate-800 mb-3 rounded-xl">{item.title}</h1>
                <p className=" text-lg pl-3 ml-20 bg-slate-600 rounded-xl px-3 py-1 text-white">{item.message}</p>               
              </div>
            ))
          )}
        </div>

        {/* Input and buttons at the bottom */}
        <div className="w-full mt-3">
          <div className="flex  justify-between mb-1">
          <button
              className="rounded-2xl border-2 text-white border-gray-500 px-4 py-1"
              onClick={() => setInputValue('')} // Clear button functionality
            >
              Clear
            </button>
            <button
              className="rounded-2xl border-2 text-white border-gray-500 px-4 py-1"
              onClick={handleSubmit}
            >
              Submit
            </button>
            
          </div>

          {/* Input field below buttons */}
          <form onSubmit={handleSubmit} className="relative w-full">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask Collegium"
              className="w-full px-3 py-1 border rounded-lg text-white bg-black pr-10"
              required
            />
            <img
              src={mic}
              alt="Mic"
              className="absolute right-3 top-1/2 transform border-2 border-gray-900 rounded-2xl -translate-y-1/2 h-6 w-6"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default DefaultChatPage;
