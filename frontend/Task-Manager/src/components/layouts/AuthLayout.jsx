import React from 'react';
import UI_IMG from "../../assets/images/auth-img.png";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex h-screen w-screen bg-white">
      <div className="w-full md:w-[60vw] h-full px-8 sm:px-12 pt-10 pb-8 flex flex-col justify-start">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Task Manager</h2>
        {children}
      </div>

      <div className="hidden md:flex w-[40vw] h-full items-center justify-center bg-blue-100">
        <img src={UI_IMG} className="w-full h-full object-cover" alt="Authentication UI" />
      </div>
    </div>
  );
};

export default AuthLayout;
