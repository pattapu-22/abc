// import React, { useState, useEffect } from "react";
// import { Button, ButtonWithProps, LogoAndTitile } from "../components/Utilities.jsx";
// import chatpage from "../images/photos/chatpage.png";
// import blog1 from "../images/photos/blog1.png";
// import blog2 from "../images/photos/blog2.png";
// import blog3 from "../images/photos/blog3.png";
// import blog4 from "../images/photos/blog4.png";

// const HomePage = () => {
//   const [text, setText] = useState("");
//   const fullText = "Welcome to Collegium! ";
//   useEffect(() => {
//     let index = 0;
//     const timer = setInterval(() => {
//       if (index < fullText.length) {
//         setText((prev) => prev + fullText[index]);
//         index++;
//       } else {
//         clearInterval(timer); // Stop when the full text is printed
//       }
//     }, 100); // Adjust the speed (in milliseconds) as needed
  
//     return () => clearInterval(timer);
//   }, []);
  
//   return (
//     <div className="grid grid-rows-[auto_1fr] min-h-screen no-scrollbar bg-[#181818]">
//       {/* Top Bar - Sticky Header */}
//       <header className="sticky top-0 z-10 grid grid-cols-[auto_1fr_auto] items-center bg-[#151414] h-20 px-4">
//         {/* Logo and Title at the start of the top bar */}
//         <LogoAndTitile />

//         {/* Navigation Menu in the middle */}
//         <nav className="flex justify-end sm:flex sm:justify-center gap-6">
//           <Button name="Home" route="/" />
//           <Button name="SignIn" route="/login" />
//           <Button name="SignUp" route="/signup" />
//         </nav>

//         {/* Start Now button at the end of the top bar */}
//         <div className="hidden sm:flex sm:justify-end items-center">
//           <ButtonWithProps
//             name="Start Now"
//             height="py-2"
//             width="px-4"
//             background="bg-[#511D52]"
//             onHoverBackground="bg-[#3B123B]"
//             route="/defaultchat"
//           />
//         </div>
//       </header>

//       {/* Main content - Scrollable */}
//       <main className="overflow-y-scroll no-scrollbar sm:p-10  bg-gradient-to-r from-[#161616]  to-[#1f1f1f]">
//         <div className="grid place-items-center min-h-[calc(100vh-5rem)] sm:p-10">
//           <div className="text-center">
//             <h2 className="text-4xl sm:text-4xl text-[#511D52] font-bold mb-4">{text}</h2>
//             <h3 className="text-xl sm:text-3xl font-semibold text-gray-400 mb-6">
//               Ready to find your perfect college?
//             </h3>
//             <p className="text-xl sm:text-xl text-white mb-10">
//               Get started now—it's free! Let Collegium guide you to the colleges that match your rank and aspirations.
//             </p>
//           </div>
//         </div>
//         {/* Scrollable feature section */}
//         <div className="grid grid-cols-1 gap-10 sm:gap-20 px-4 sm:px-8 text-center">


//           {/* Feature 1: Find Your College */}
//           <div className="min-h-[calc(100vh-5rem)] grid grid-cols-2  py-10 ">
//             {/* Left Half */}


//             <div className="flex flex-col justify-center py-2">

//               <div className=" rounded-lg py-4 min-h-full bg-opacity-50 items-center ">
//               <h3 className="text-[#511D52] text-xl sm:text-2xl font-semibold mb-2">Find Your College</h3>

//                 <p className="text-sm sm:text-xl p-3 sm:p-10 md:p-28 text-gray-300">
//                   Discover colleges that align with your academic profile and career goals. Get personalized recommendations based on your rank and preferences.
//                 </p>
//               </div>
//             </div>
//             {/* Right Half */}
//             <div className="flex flex-col justify-center p-2">
//               <div className=" p-4">
//                 <img src={chatpage} alt="Chat Page" />
//               </div>
//             </div>
//           </div>
//           {/* bg-gradient-to-r from-[#1a1a1a] via-blue-950 to-[#111111] */}
//           {/* Feature 2: Alumni Blogs */} 
//           <div className="min-h-[calc(100vh-5rem)] flex items-center  p-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {/* Text Column */}
//               <div className="">
//                 <h3 className="text-[#511D52] text-xl sm:text-2xl text-center font-semibold mb-2">Read Alumni Blogs</h3>
//                 <p className="text-sm sm:text-xl p-3 sm:p-4  md:p-6 text-gray-300">
//                   Stay inspired with stories and experiences shared by college alumni.
//                   Learn from their journey, and get valuable insights about life after college.
//                   Discover inspiring stories and insights from our alumni who navigated their college journeys. 
//                 </p>
//                 {/* <p className="hidden xl:flex text-sm sm:text-xl p-3 sm:p-10 md:p-28 text-gray-300">
//                   These blogs offer personal experiences on overcoming challenges, securing internships, and preparing for life after graduation. 
//                   Each blog serves as a guide, providing practical tips and encouragement to help you make the most of your college years. 
//                   Stay motivated and empowered by the journeys of those who walked the same path and forged their own successful futures.
//                 </p> */}
//               </div>

//               {/* Images Column */}
//               <div className="grid grid-cols-2 gap-0 justify-center items-center">
//                 <img src={blog1} alt="Description 1"  className="p-1"/>
//                 <img src={blog2} alt="Description 2"  className="p-1"/>
//                 <img src={blog3} alt="Description 3"  className="p-1"/>
//                 <img src={blog4} alt="Description 4"  className="p-1"/>
//               </div>
//             </div>
//           </div>

//           {/* Feature 3: Data in Tabular and Text Formats */}
//           <div className="min-h-[calc(100vh-5rem)] flex items-center  p-6">
//             <div>
//               <h3 className="text-[#511D52] text-xl sm:text-2xl  font-semibold mb-2">Data in Text & Table Formats</h3>
//               <p className="text-sm sm:text-xl p-3 sm:p-10 md:p-28 text-gray-300">
//                 View detailed college information in both textual and tabular formats. Easily compare colleges side by side
//                 for a comprehensive analysis.
//               </p>
//               <ul>
//                 Easy toggle between the mode of quering 
//                 maintains the separate history for each mode
//                 no big changes functionally btw 2 modes
//               </ul>
//             </div>
//           </div>

//           {/* Feature 4: User-Friendly Experience */}
//           <div className="min-h-[calc(100vh-5rem)] flex items-center  p-6">
//             <div>
//               <h3 className="text-[#511D52] text-xl sm:text-2xl  font-semibold mb-2">User-Friendly Interface</h3>
//               <p className="text-sm sm:text-xl p-3 sm:p-10 md:p-28 text-gray-300">
//                 Collegium is meticulously designed with user experience in mind, ensuring effortless navigation across all devices. Whether you’re accessing our platform via a smartphone, tablet, or desktop computer, you can expect a consistent and intuitive interface that adapts to your needs. Our commitment to usability means you can browse effortlessly, find the information you need, and engage with our content seamlessly, enhancing your overall experience with Collegium at every touchpoint.

//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="my-8 flex justify-center">
//           <ButtonWithProps
//             name="Start Now"
//             height="py-4 sm:py-5"
//             width="px-6 sm:px-8"
//             background="bg-[#511D52]"
//             onHoverBackground="bg-[#3B123B]"
//             route="/defaultchat"
//           />
//         </div>
//       </main>
//     </div>
//   );
// };

// export default HomePage;


import React, { useState, useEffect } from "react";
import { Button, ButtonWithProps, LogoAndTitile } from "../components/Utilities.jsx";
import chatpage from "../images/photos/chatpage.png";
import blog1 from "../images/photos/blog1.png";
import blog2 from "../images/photos/blog2.png";
import blog3 from "../images/photos/blog3.png";
import blog4 from "../images/photos/blog4.png";

const HomePage = () => {
  const [text, setText] = useState("");
  const fullText = "Welcome to Collegium! ";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setText((prev) => prev + fullText[index]);
        index++;
      } else {
        clearInterval(timer); // Stop when the full text is printed
      }
    }, 100); // Adjust the speed (in milliseconds) as needed

    return () => clearInterval(timer);
  }, [fullText]);

  return (
    <div className="grid grid-rows-[auto_1fr] min-h-screen no-scrollbar bg-[#181818]">
      {/* Top Bar - Sticky Header */}
      <header className="sticky top-0 z-10 grid grid-cols-[auto_1fr_auto] items-center bg-[#151414] h-20 px-4">
        {/* Logo and Title at the start of the top bar */}
        <LogoAndTitile />

        {/* Navigation Menu in the middle */}
        <nav className="flex justify-end sm:flex sm:justify-center gap-6">
          <Button name="Home" route="/" />
          <Button name="SignIn" route="/login" />
          <Button name="SignUp" route="/signup" />
        </nav>

        {/* Start Now button at the end of the top bar */}
        <div className="hidden sm:flex sm:justify-end items-center">
          <ButtonWithProps
            name="Start Now"
            height="py-2"
            width="px-4"
            background="bg-[#511D52]"
            onHoverBackground="bg-[#3B123B]"
            route="/defaultchat"
          />
        </div>
      </header>

      {/* Main content - Scrollable */}
      <main className="overflow-y-scroll no-scrollbar sm:p-10  bg-gradient-to-r from-[#161616]  to-[#1f1f1f]">
        <div className="grid place-items-center min-h-[calc(100vh-5rem)] sm:p-10">
          <div className="text-center">
            <h2 className="text-4xl sm:text-4xl text-[#511D52] font-bold mb-4">{text}</h2>
            <h3 className="text-xl sm:text-3xl font-semibold text-gray-400 mb-6">
              Ready to find your perfect college?
            </h3>
            <p className="text-xl sm:text-xl text-white mb-10">
              Get started now—it's free! Let Collegium guide you to the colleges that match your rank and aspirations.
            </p>
          </div>
        </div>
        {/* Scrollable feature section */}
        <div className="grid grid-cols-1 gap-10 sm:gap-20 px-4 sm:px-8 text-center">

          {/* Feature 1: Find Your College */}
          <div className="min-h-[calc(100vh-5rem)] grid grid-cols-2 py-10 ">
            {/* Left Half */}
            <div className="flex flex-col justify-center py-2">
              <div className="rounded-lg py-4 min-h-full bg-opacity-50 items-center ">
                <h3 className="text-[#511D52] text-xl sm:text-2xl font-semibold mb-2">Find Your College</h3>
                <p className="text-sm sm:text-xl p-3 sm:p-10 md:p-28 text-gray-300">
                  Discover colleges that align with your academic profile and career goals. Get personalized recommendations based on your rank and preferences.
                </p>
              </div>
            </div>
            {/* Right Half */}
            <div className="flex flex-col justify-center p-2">
              <div className="p-4">
                <img src={chatpage} alt="Chat Page" />
              </div>
            </div>
          </div>

          {/* Feature 2: Alumni Blogs */} 
          <div className="min-h-[calc(100vh-5rem)] flex items-center p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Text Column */}
              <div className="">
                <h3 className="text-[#511D52] text-xl sm:text-2xl text-center font-semibold mb-2">Read Alumni Blogs</h3>
                <p className="text-sm sm:text-xl p-3 sm:p-4 md:p-6 text-gray-300">
                  Stay inspired with stories and experiences shared by college alumni.
                  Learn from their journey, and get valuable insights about life after college.
                  Discover inspiring stories and insights from our alumni who navigated their college journeys. 
                </p>
              </div>

              {/* Images Column */}
              <div className="grid grid-cols-2 gap-0 justify-center items-center">
                <img src={blog1} alt="Description 1" className="p-1" />
                <img src={blog2} alt="Description 2" className="p-1" />
                <img src={blog3} alt="Description 3" className="p-1" />
                <img src={blog4} alt="Description 4" className="p-1" />
              </div>
            </div>
          </div>

          {/* Feature 3: Data in Tabular and Text Formats */}
          <div className="min-h-[calc(100vh-5rem)] flex items-center p-6">
            <div>
              <h3 className="text-[#511D52] text-xl sm:text-2xl font-semibold mb-2">Data in Text & Table Formats</h3>
              <p className="text-sm sm:text-xl p-3 sm:p-10 md:p-28 text-gray-300">
                View detailed college information in both textual and tabular formats. Easily compare colleges side by side
                for a comprehensive analysis.
              </p>
              <ul className="list-disc pl-5 text-gray-300 animate-fade-in">
                <li>Easy toggle between the mode of querying.</li>
                <li>Maintains separate history for each mode.</li>
                <li>No big changes functionally between the two modes.</li>
              </ul>
            </div>
          </div>

          {/* Feature 4: User-Friendly Experience */}
          <div className="min-h-[calc(100vh-5rem)] flex items-center p-6">
            <div>
              <h3 className="text-[#511D52] text-xl sm:text-2xl font-semibold mb-2">User-Friendly Interface</h3>
              <p className="text-sm sm:text-xl p-3 sm:p-10 md:p-28 text-gray-300">
                Collegium is meticulously designed with user experience in mind, ensuring effortless navigation across all devices. Whether you’re accessing our platform via a smartphone, tablet, or desktop computer, you can expect a consistent and intuitive interface that adapts to your needs. Our commitment to usability means you can browse effortlessly, find the information you need, and engage with our content seamlessly, enhancing your overall experience with Collegium at every touchpoint.
              </p>
            </div>
          </div>
        </div>

        <div className="my-8 flex justify-center">
          <ButtonWithProps
            name="Start Now"
            height="py-4 sm:py-5"
            width="px-6 sm:px-8"
            background="bg-[#511D52]"
            onHoverBackground="bg-[#3B123B]"
            route="/defaultchat"
          />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
