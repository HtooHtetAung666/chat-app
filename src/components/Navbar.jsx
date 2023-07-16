import React from "react";
import { UserAuth } from "../context/AuthContext";

export const Navbar = () => {
  const { currentUser, logOut } = UserAuth();

  const handleLogOut = async () => {
    try {
      await logOut();
    }catch(error) {
      console.log(error);
    }
  }

  return (
    <div className="w-full fixed z-10 p-5 bg-gray-700">
      <div className="flex items-center justify-between md:pl-10 lg:pl-44 md:pr-4">
        <h1 className="text-xl md:text-2xl lg:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-[#e779c1] font-bold">
          ChatApp
        </h1>
        {
          currentUser
          ? <button onClick={handleLogOut} className="btn btn-outline btn-secondary">Log out</button>
          : ''
        }
      </div>
    </div>
  );
};
