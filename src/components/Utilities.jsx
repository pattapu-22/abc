import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
//import logo from "../images/logo.jpg";
import logoo from "../images/logoo.svg";
// import mic from "../images/mic.jpeg";
import miccc from "../images/miccc.svg";
//import arrow from "../images/arrow.png";x 
import arroww from "../images/arroww.svg";
// import dots from "../images/dots.jpg";
import dots3 from "../images/dots3.svg";
// import icon from "../images/icon.png";
import eleicon from "../images/eleicon.svg";
// import upload from "../images/upload.png";
import link from "../images/link.svg";

export const Button = ({ name, route }) => {
  return (
    <Link
      to={route}
      className="hover:text-[#511D52] text-gray-200 font-semibold"
    >
      {name}
    </Link>
  );
};

// ButtonWithProps for customized buttonsh'
export const ButtonWithProps = ({
  name,
  height,
  width,
  background,
  onHoverBackground,
  route,
}) => {
  return (
    <Link
      to={route}
      className={`font-semibold text-white rounded-full ${height} ${width} ${background} hover:${onHoverBackground}`}
    >
      {name}
    </Link>
  );
};

// Logo and title
export const LogoAndTitile = () => {
  return (
    <div className="flex items-center">
      <img src={eleicon} alt="Logo" className="h-10 w-12 " />
      <h1 className="text-xl text-white font-semibold ml-3 sm:ml-0 lg:ml-3 ">
        Collegium
      </h1>
    </div>
  );
};

// SuggestionsBox component
export const SuggestionsBox = ({ text, onClick }) => {
  return (
    <div
      className="bg-[#2a2929] px-2 py-2 cursor-pointer rounded-2xl hover:text-white"
      onClick={onClick}
    >
      {text}
    </div>
  );
};

export const InputField = ({
  inputValue,
  setInputValue,
  handleMicClick,
  handleSubmit,
  handleFileUpload,
}) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    try {
      const file = e.target.files[0];
      if (file) {
        setSelectedFile(file);
        handleFileUpload(file); // Process the file
        setInputValue((prev) => prev + ` [${file.name}]`); // Append file name to the input
      } else {
        throw new Error("No file selected");
      }
    } catch (error) {
      console.error("Error while uploading file:", error.message);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="relative w-full flex justify-center"
    >
      <div className="relative w-full sm:px-16 md:px-20 lg:px-32 xl:px-40">
        <div className="relative flex items-center w-full">
          <label
            htmlFor="file-upload"
            className="absolute left-3 flex items-center cursor-pointer"
          >
            <img
              src={link}
              alt="Attach file"
              className="w-6 h-6 rounded-full"
            />
          </label>
          <input
            id="file-upload"
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />

          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask Collegium.."
            className="w-full h-11 pl-12 pr-12 rounded-3xl bg-[#313131] text-white"
            required
          />

          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center">
            {inputValue ? (
              <img
                src={arroww}
                alt="Submit"
                onClick={handleSubmit}
                className="w-8 h-8 bg-slate-300 rounded-full hover:bg-slate-200 cursor-pointer"
              />
            ) : (
              <img
                src={miccc}
                alt="Mic"
                onClick={handleMicClick}
                className="h-8 w-8 cursor-pointer rounded-full"
              />
            )}
          </div>
        </div>
      </div>
    </form>
  );
};
export const useSpeechRecognition = (setInputValue) => {
  const [isListening, setListening] = useState(false);

  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = "en-US";

  const handleMicClick = () => {
    if (!isListening) {
      recognition.start();
      setListening(true);
    }
  };

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    setInputValue(transcript);
    setListening(false);
  };

  recognition.onerror = (event) => {
    console.error("Speech recognition error:", event.error);
    setListening(false);
  };

  recognition.onend = () => {
    setListening(false);
  };

  return { handleMicClick, isListening };
};

// Hook to manage input and history data
export const useHandleInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [historyData, setHistoryData] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    if (inputValue.trim()) {
      const newEntry = {
        title: inputValue,

        message:
          " Thank you for your questions! I'm glad I could assist you and provide the answers you needed. If you have more queries in the future, don't hesitate to reach out.Your satisfaction is our priority,and we're here to help anytime!Have a great day ahead!",
      };
      setHistoryData((prevHistory) => [...prevHistory, newEntry]);
      setIsSubmitted(true);
      setInputValue("");
    }
  };

  return {
    inputValue,
    setInputValue,
    historyData,
    setHistoryData,
    isSubmitted,
    setIsSubmitted,
    handleSubmit,
  };
};
//left side text in the sigin singup pages
export const SideTextOfSigning = () => {
  return (
    <div className=" flex flex-col  items-center justify-center center">
      <h2 className="text-4xl text-[#511D52] font-bold text-center mb-4">
        Welcome to Collegium
      </h2>
      <h3 className="text-xl font-semibold text-white mb-6 text-center">
        Ready to find your perfect college?
      </h3>
      <img
        className="w-24 h-20   items-center"
        src={eleicon}
        alt="logo of collegium"
      />
    </div>
  );
};

//label and input firlds for signin and signup pages
export const SignInInputBoxes = ({ name, type, id, value, onChange }) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="text-sm text-white font-medium">
        {name}
      </label>
      <input
        type={type}
        id={id}
        placeholder={name}
        className="w-full px-3 py-1  bg-[#282828] text-white rounded-lg"
        value={value} // Use the passed value prop
        onChange={onChange}
        required
      />
    </div>
  );
};

//submit button for signin signup pages and to change the pages from signin to signup ,vice versa
export const SubmitButton = ({ name, message, to, alt }) => {
  return (
    <div>
      <button
        type="submit" // This is correct for form submission
        className="bg-[#511D52] text-white w-40 rounded-full font-bold py-2 px-8 hover:bg-[#3B123B] flex items-center justify-center"
      >
        {name}
      </button>
      <p className="mt-4 text-center text-white">
        {message}
        <Link to={to} className="text-blue-600 underline hover:text-[#511D52]">
          {alt}
        </Link>
      </p>
    </div>
  );
};

export const HoverImage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <img
        src={dots3}
        alt="settings"
        onClick={() => setIsOpen(!isOpen)}
        className="w-6 h-6 lg:mr-4 outline outline-2  outline-gray-300  outline-offset-1 rounded-lg py-1 cursor-pointer"
      />
      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute right-8 top-0 bg-[#151515]  text-white p-2 rounded-lg w-32 z-50"
        >
          <ul className="space-y-2 text-sm">
            {["Settings", "Help Center", "Contact"].map((item) => (
              <li
                key={item}
                className="cursor-pointer hover:bg-gray-600 p-1 rounded"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </li>
            ))}
            <li
              className="cursor-pointer hover:bg-gray-600 p-1 rounded"
              onClick={() => {
                setIsOpen(false);
                navigate("/defaultchat");
              }}
            >
              Log Out
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export const ChatHistory = ({ historyData }) => {
  return (
    <div>
      {historyData.map((item, index) => (
        <div key={index} className="mt-5 ">
          <h1 className="text-sm md:text-base text-slate-300 ml-40 px-3 py-1 bg-[#282828] mb-3 rounded-xl">
            {item.title}
          </h1>
          <div className="flex items-start">
            <img
              src={logoo}
              alt="logo"
              className=" hidden md:flex h-10 w-14 pr-2 m-1"
            />
            <p className="text-sm md:text-sm pl-3 rounded-xl px-3 py-1 text-slate-300">
              {item.message}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
 