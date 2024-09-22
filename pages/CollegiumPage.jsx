// // src/pages/CollegiumPage.jsx
// import React from 'react';
// import { useAuth } from '../src/context/AuthContext';
// import { useNavigate } from 'react-router-dom';

// const CollegiumPage = () => {

//   const [messages, setMessages] = useState([]);
//   const [selectedSidebarItem, setSelectedSidebarItem] = useState(null);
//   const chatListRef = useRef(null);

//   const handleSidebarItemClick = (item) => {
//     setSelectedSidebarItem(item);
//   };


//   const { logout } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();  // Logs out the user
//     navigate('/chat');  // Redirect to chat page after logout
//   };

//   return (
//     <div className="container mx-auto">
//       <header className="flex justify-between items-center py-4">
//         <div className="logo">
//           Collegium
//         </div>
//         <div className="nav-buttons">
//           <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Sign Up</button>
//           <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Sign In</button>
//         </div>
//       </header>

//       <main className="flex gap-4">
//         <div className="sidebar w-1/4">
//           <h3 className="text-xl font-bold mb-4" onClick={() => handleSidebarItemClick("List of All Engineering Colleges and available Branches in Andhra Pradesh")}>List of All Engineering Colleges and available Branches in Andhra Pradesh</h3>
//           <h3 className="text-xl font-bold mb-4" onClick={() => handleSidebarItemClick("List of All Polytechnic colleges and available Branches in Andhra Pradesh")}>List of All Polytechnic colleges and available Branches in Andhra Pradesh</h3>
//           <h3 className="text-xl font-bold mb-4" onClick={() => handleSidebarItemClick("List of all Engineering Universities in Andhra Pradesh, Govt and private")}>List of all Engineering Universities in Andhra Pradesh, Govt and private</h3>
//         </div>
//         <div className="chat-window w-3/4">
//           <div className="chat-list" ref={chatListRef}>
//             {messages.map((message, index) => (
//               <div key={index} className="chat-message">
//                 {message}
//               </div>
//             ))}
//           </div>
//           <div className="chat-input flex items-center">
//             <input type="text" className="flex-grow px-4 py-2 rounded-md" value={selectedSidebarItem || ''} onChange={(e) => setSelectedSidebarItem(e.target.value)} />
//             <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={handleSendMessage}>Send</button>
//             <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Voice</button>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default Collegium;
