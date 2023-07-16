import React, { useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { currentUser, signInWithGoogle } = UserAuth();
  const navigate = useNavigate();

  console.log(currentUser);

  const handleLogIn = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (currentUser) {
      navigate("/chat");
    }
  }, [currentUser]);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold text-deep-purple">Hello there</h1>
          <p className="py-6">
            Welcome to the web chat app where you can chat with friends from
            across the world
          </p>
          <button onClick={handleLogIn} className="btn btn-secondary">
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};
