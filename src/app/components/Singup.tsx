"use client";

import React, { useState } from "react";
import { doCreateUserWithEmailAndPassword } from "../firebase/auth";
import "../../styles/globals.css";
import Link from "next/link";

const Signup: React.FC<SignupProps> = ({ handleIsSignIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (password === confirmPassword) {
        try {
          const res = await doCreateUserWithEmailAndPassword(email, password);
          console.log(res);
        } catch (error) {
          console.log(error);
        }
    } else setErrorMessage("The passwords must match!")
  };

  return (
    <div className="page-container bg-gradient-to-b from-blue-300 to-white h-[70vh] md:w-[40%] rounded-lg shadow-2xl flex items-center justify-center py-12 px-4 lg:px-8 md:mb-20">
      <div className="max-w-md w-full bg-white p-8 rounded-md shadow-md">
        <div>
          <h2 className="text-lg md:text-2xl font-extrabold text-gray-900 text-center">
            Sign up
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
            <div>
              <label htmlFor="confirm-password" className="sr-only">
                Confirm Password
              </label>
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                autoComplete="current-password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="block w-full px-4 py-3 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-red-500 focus:border-red-500 text-xs md:text-base"
                placeholder="Confirm Password"
                />
            </div>
          </div>
            {errorMessage ?
                <div>
                    <p className="p-2 text-red-500">{errorMessage}</p>
                </div>
                :
                <></>
            }
          <div>
            <button
              type="submit"
              className="w-full py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
            >
              Sign up
            </button>
          </div>
          <div>
            <div
              onClick={handleIsSignIn}
              className="w-full py-3 text-sm font-medium rounded-md hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
            >
              Log in
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
