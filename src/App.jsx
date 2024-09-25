import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import SignInForm from "../pages/SignInForm.jsx";
import SignUpForm from "../pages/SignUpForm.jsx";
import DefaultChatPage from "../pages/DefaultChatPage";
import ChatPage from "../pages/ChatPage";
import HomePage  from "../pages/HomePage.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<SignInForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/defaultchat" element={<DefaultChatPage />} />
      </Routes>
    </Router>
  );
};

export default App;



