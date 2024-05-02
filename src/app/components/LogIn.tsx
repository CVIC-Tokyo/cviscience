"use client";

import React, { useState } from "react";
import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
} from "../firebase/auth";
import "../../styles/globals.css";

const Login:React.FC<LoginProps> = ({ getAuth, handleIsSignIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);

  const firebase = require('firebase');
  const firebaseui = require('firebaseui');
  const ui = new firebaseui.auth.AuthUI(firebase.auth());

  

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!isSigningIn) {
      const res = await doSignInWithEmailAndPassword(email, password);
      setIsSigningIn(true);
      handleIsSignIn();
      getAuth(res);
    }
  };

  const handleGoogleSignIn = (e: any) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      doSignInWithGoogle().catch((err) => {
        setIsSigningIn(false);
      });
    }
  };

  return (
    <div className="page-container bg-gradient-to-b from-blue-300 to-white h-[70vh] md:w-[40%] rounded-lg shadow-2xl flex items-center justify-center py-12 px-4 lg:px-8 md:mb-20">
      <div className="max-w-md w-full bg-white p-8 rounded-md shadow-md">
        <div>
          <h2 className="text-lg md:text-2xl font-extrabold text-gray-900 text-center">
            Log in
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="space-y-4">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full px-4 py-3 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 text-xs md:text-base"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full px-4 py-3 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 text-xs md:text-base"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
            >
              Log in
            </button>
          </div>
        </form>
          <div>
            <div
            onClick={handleIsSignIn}
              className="w-full py-3 text-sm font-medium rounded-md hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 cursor-pointer"
            >
              Sign up
            </div>
          </div>
          <div>
            <div
            onClick={handleIsSignIn}
              className="w-full py-3 text-[10px] font-medium rounded-md hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 cursor-pointer"
            >
              Continue without login
            </div>
          </div>
      </div>
    </div>
  );
};

export default Login;
