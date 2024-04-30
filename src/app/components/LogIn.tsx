'use client'

import React, { useState } from "react";
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from '../firebase/auth'
import '../../styles/globals.css'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if(!isSigningIn) {
        const res= await doSignInWithEmailAndPassword(email, password);
        setIsSigningIn(true);
        console.log(res)
        console.log('Signed In:', !isSigningIn)
    }
  };

  const handleGoogleSignIn = (e:any) => {
    e.preventDefault();
    if(!isSigningIn) {
        setIsSigningIn(true);
        doSignInWithGoogle().catch(err => {
            setIsSigningIn(false);
        });
    }
  }

  return (
      <div className="page-container border-10 border-red bg-gradient-to-b from-blue-300 to-blue-200 h-[70vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mb-10 md:mb-20">
      <div className="max-w-md w-full bg-white p-8 rounded-md shadow-md">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">
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
                className="block w-full px-4 py-3 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
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
                className="block w-full px-4 py-3 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
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
      </div>
    </div>
  );
};

export default Login;
