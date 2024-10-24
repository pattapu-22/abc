import React, { useEffect, useRef } from "react";
import { LogoAndTitile, SuggestionsBox, InputField, useSpeechRecognition, useHandleInput, HoverImage, ChatHistory } from "../components/Utilities.jsx";

const ChatPage = () => {
  const { inputValue, setInputValue, historyData, isSubmitted, handleSubmit } = useHandleInput();
  const { handleMicClick } = useSpeechRecognition(setInputValue);
  const chatEndRef = useRef(null);

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
  };

  const handleFileUpload = (file) => {
    console.log("File uploaded:", file.name);
    // Add your file upload logic here, e.g., send to a server
  };

  // Scroll to the bottom of the chat when new messages are added
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [historyData]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 bg-[#232323]">
      {/* Sidebar */}
      <aside className="col-span-1 bg-[#1b1b1b] text-[#511D52] flex flex-col px-1 py-4">
        {/* Logo and Title */}
        <div className="flex flex-row items-center justify-between">
          <LogoAndTitile />
          <HoverImage />
        </div>

        {/* History Display */}
        <div className="hidden bg-[#1c1c1c] mx-2 text-white px-3 sm:flex flex-col mt-10 flex-grow overflow-y-auto">
          <h1 className="text-xl">Chat History</h1>
          {historyData.map((item, index) => (
            <div key={index} className="truncate">
              <h1 className="text-xl text-gray-300  ">{item.title}</h1>
            </div>
          ))}
        </div>
      </aside>

      {/* Main Section */}
      <main className="col-span-3 flex sm:px-16 md:px-20 lg:px-32 xl:px-40  flex-col h-screen relative ">
        {/* Chat Section */}
        <div className="flex-grow overflow-y-auto mt-10 p-4 pb-24"> {/* pb-24 ensures space for the input field */}
          {!isSubmitted ? (
            <div className="flex sm:justify-start lg:justify-center justify-center gap-1 sm:gap-5 pt-72 items-end">
              <SuggestionsBox text="What is Collegium?" onClick={() => handleSuggestionClick("What is Collegium?")} />
              <SuggestionsBox text="How does Collegium work?" onClick={() => handleSuggestionClick("How does Collegium work?")} />
              <SuggestionsBox text="Benefits of Collegium?" onClick={() => handleSuggestionClick("Benefits of Collegium?")} />
            </div>
          ) : (
            
              <ChatHistory historyData={historyData} />
            
          )}
          {/* Auto-scroll to the bottom */}
          <div ref={chatEndRef} />
        </div>

        {/* Input Field Section */}
        <div className="h-20 p-4  absolute bottom-0 left-0 right-0">
          <InputField inputValue={inputValue} setInputValue={setInputValue} handleMicClick={handleMicClick} handleSubmit={handleSubmit} handleFileUpload={handleFileUpload}/>
        </div>
      </main>
    </div>
  );
};

export default ChatPage;
