import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import SignInForm from "./pages/SignInForm.jsx";
import SignUpForm from "./pages/SignUpForm.jsx";
import DefaultChatPage from "./pages/DefaultChatPage.jsx";
import ChatPage from "./pages/ChatPage.jsx";
import HomePage  from "./pages/HomePage.jsx";
import UploadPage from "./pages/UploadFile.jsx";
import AlumniBlogs from "./pages/AlumniBlogs.jsx";


const App = () => {
  return (
    <div className="bg-[#181818] min-h-screen text-white">
    <Router > 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<SignInForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/defaultchat" element={<DefaultChatPage />} />
        <Route path="/uploaddata" element={<UploadPage />} />
        <Route path="/blogs" element={<AlumniBlogs />} />


      </Routes>
    </Router>
    </div>
  );
};

export default App;



