
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import SignInForm from "./pages/SignInForm.jsx";
import SignUpForm from "./pages/SignUpForm.jsx";
import DefaultChatPage from "./pages/DefaultChatPage.jsx";
import ChatPage from "./pages/ChatPage.jsx";
import HomePage  from "./pages/HomePage.jsx";
import UploadPage from "./pages/UploadFile.jsx";

//const LazyComponent = React.lazy(() => import('./HeavyComponent'));


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<SignInForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/defaultchat" element={<DefaultChatPage />} />
        <Route path="/uploaddata" element={<UploadPage />} />
      </Routes>
    </Router>
  );
};

export default App;



