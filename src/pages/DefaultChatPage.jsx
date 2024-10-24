import React, { useEffect, useRef } from "react";
import {
  LogoAndTitile,
  Button,
  SuggestionsBox,
  InputField,
  useSpeechRecognition,
  useHandleInput,
  ChatHistory,
} from "../components/Utilities.jsx";

const DefaultChatPage = () => {
  const { inputValue, setInputValue, historyData, isSubmitted, handleSubmit } =
    useHandleInput();
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
    <div className="flex flex-col h-screen bg-[#232323]">
      {/* Aside Section */}
      <aside className="grid grid-cols-[auto_1fr_auto] items-center h-20 px-2 sm:px-4">
        <LogoAndTitile />
        <nav className="flex justify-end gap-6 pr-5">
          <Button name="SignIn" route="/login" />
          <Button name="SignUp" route="/signup" />
        </nav>
      </aside>

      {/* Chat Area */}
      <div className=" px-4 sm:px-16 md:px-20 lg:px-40 xl:px-56  ">
        <div className="flex flex-col  h-[calc(100vh-10rem)]">
          <div className="flex-grow mt-2 overflow-y-auto ">
            {!isSubmitted ? (
              <div className="flex justify-center gap-5 pt-72 items-end">
                <SuggestionsBox
                  text="What is Collegium?"
                  onClick={() => handleSuggestionClick("What is Collegium?")}
                />
                <SuggestionsBox
                  text="How does Collegium work?"
                  onClick={() =>
                    handleSuggestionClick("How does Collegium work?")
                  }
                />
                <SuggestionsBox
                  text="Benefits of Collegium?"
                  onClick={() =>
                    handleSuggestionClick("Benefits of Collegium?")
                  }
                />
              </div>
            ) : (
              // Use ChatHistory component
              <ChatHistory historyData={historyData} />
            )}
            {/* This div is used to automatically scroll to the bottom */}
            <div ref={chatEndRef} />
          </div>
        </div>

        {/* Input Field Section */}
        <div className="h-24 p-4">
          <InputField
            inputValue={inputValue}
            setInputValue={setInputValue}
            handleMicClick={handleMicClick}
            handleSubmit={handleSubmit}
            handleFileUpload={handleFileUpload}
          />
        </div>
      </div>
    </div>
  );
};

export default DefaultChatPage;
