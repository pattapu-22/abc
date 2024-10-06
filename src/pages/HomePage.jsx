//import React, { Suspense } from "react";
import { Button, ButtonWithProps, LogoAndTitile } from "../components/Utilities.jsx";

//const Utilities = React.lazy(() => import("../src/components/Utilities"));

// const Button = React.lazy(() => import('../src/components/Utilities/Button'));
// const ButtonWithProps = React.lazy(() => import('../src/components/Utilities/ButtonWithProps'));
// const LogoAndTitile = React.lazy(() => import('../src/components/Utilities/LogoAndTitile'));


const HomePage = () => {
  return (
    <div className="grid grid-rows-[auto_1fr] min-h-screen bg-[#181818]">
      {/* Top Bar */}
      <header className="grid grid-cols-[auto_1fr_auto] items-center bg-[#181818] text-white h-20 px-4">
        {/* Logo and Title at the start of the top bar */}
        <LogoAndTitile />

        {/* Navigation Menu in the middle */}
        <nav className="flex justify-end sm:flex sm:justify-center gap-6">
          <Button name="Home" route="/" />
          <Button name="SignIn" route="/login" />
          <Button name="SignUp" route="/signup" />
        </nav>

        {/* Start Now button at the end of the top bar */}
        <div className=" hidden sm:flex sm:justify-end items-center">
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

      {/* Main content */}
      <main className="grid place-items-center text-[#511D52] p-4 sm:p-10">
        <div className="text-center">
          <h2 className="text-2xl sm:text-4xl font-bold mb-4">Welcome to Collegium!</h2>
          <h3 className="text-xl sm:text-3xl font-semibold text-gray-300 mb-6">
            Ready to find your perfect college?
          </h3>
          <p className="text-lg sm:text-xl m-3 text-white">
            Get started now-it's free! Let Collegium guide you to the colleges that match your rank and aspirations.
          </p>
        </div>
        <div>
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

