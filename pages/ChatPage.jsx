import { useState } from 'react';
import logo from "../images/logo.jpg";
import mic from "../images/mic.jpg";
import { Link } from 'react-router-dom';

const ChatPage = () => {
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
      // Update the history 
      const newEntry = {
        title: inputValue,
        message: 'Thank you for consulting Collegium for your queries. We are happy to help you with your requested questions.'
      };
      setHistoryData(prevHistory => [...prevHistory, newEntry]);//updating history
      setIsSubmitted(true);//hiding history
      setInputValue("");//after subnmission clearing the input field
    }
  };

  return (
    <div className="flex min-h-screen bg-black">
      <aside className="text-[#511D52] w-1/4 h-screen flex flex-col border-r-2 border-gray-200 rounded-2xl">
        {/* Logo and Title */}
        <div className="flex flex-col items-center mt-8 border-b">
          <div className="flex items-center mb-10">
            <img src={logo} alt="Collegium Logo" className="h-12 w-12" />
            <h1 className="text-xl text-white font-semibold ml-3">Collegium</h1>
          </div>
        </div>

        {/* History Display */}
        <div className="border-2 m-4 p-2 text-gray-300 border-gray-400 h-full overflow-y-auto" style={{ maxHeight: '400px' }}>
          <h1 className='text-xl '>Chat History</h1>
          {historyData.map((item, index) => (
            <div key={index} className="mb-4">
              <h1 className="truncate text-xl text-[#3B123B]">{item.title}</h1>
              <p className="truncate pl-3 text-gray-500">{item.message}</p>
            </div>
          ))}
        </div>

        {/* Navigation Menu */}
        <nav className="flex-grow flex flex-col justify-end mb-4 text-lg space-y-4 items-center">
          <Link to="/defaultchat" className="flex items-center justify-center w-36 py-0.5 hover:bg-[#3B123B] rounded-2xl hover:text-white">
            Log Out
          </Link>
          <h1 className="flex items-center justify-center w-36 py-0.5 hover:bg-[#3B123B] rounded-2xl hover:text-white">Settings</h1>
        </nav>
      </aside>

      {/* Main Section */}
      <div className="w-3/4 p-2 flex flex-col justify-between">
        <div className="px-10 h-full flex-grow">
          {/* Display chat-like history */}
          <div className=" text-gray-300  p-4 h-full min-h-full overflow-y-auto" style={{ maxHeight: '400px' }}>
            {!isSubmitted ? (
              <div className="flex justify-center gap-5 items-end">
                <div
                  className="border-2 border-gray-500 px-4 mt-72 py-2 cursor-pointer hover:bg-[#3B123B] rounded-2xl hover:text-white"
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
              // Render all historyData instead of the last entry
              historyData.map((item, index) => (
                <div key={index} className="mt-2">
                  <h1 className="text-lg text-white ml-40 py-1 pl-3 bg-[#3b0e3b] my-3 rounded-xl">{item.title}</h1>
                  <div className='flex items-start '>
                  <img src={logo} alt="logo image" className='h-12 w-14 pr-2 pt-1' />
                  <p className="text-xl pl-3  bg-[#e09ee0] rounded-xl px-3 py-1 text-black">{item.message}</p>
                  </div>
                </div>
              ))
            )}
              
          </div>
        </div>

        {/* Input and buttons at the bottom */}
        <div className="px-10 mt-2 pb-4 w-full">
          {/* Submit Button */}
          <div className="flex flex-row justify-between mb-4">
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

export default ChatPage;
