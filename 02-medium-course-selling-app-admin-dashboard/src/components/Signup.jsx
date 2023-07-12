import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { API_ROUTES, APP_ROUTES } from "../utils/constants";
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./Navbar";

/// File is incomplete. You need to add input boxes to take input for users to register.
function Signup() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);   
    const [currentpage, setCurrentpage] = useState('signup');


    const signUp = async () => {
    try {
      setIsLoading(true);
      const response = await axios({
        method: 'POST',
        url: API_ROUTES.SIGN_UP,
        data: {
          username,
          password
        }
      });
      if (!response?.data?.token) {
        toast.error('Something went wrong during signing up');
        return;
      }
      toast.success('User registered successfully');
      setTimeout(() => {
        navigate(APP_ROUTES.LANDING_PAGE);
      }, 1000); // Delay of 1 second (adjust as needed)
    } catch (err) {
      console.log('Problem Signing up! Try again', err);
      toast.error('Error registering user');
    } finally {
      setIsLoading(false);
    }
  };
  const backgroundStyle = {
    backgroundImage:
      "url('https://img.freepik.com/free-vector/abstract-white-tone-memphis-social-background_53876-114373.jpg?w=826&t=st=1688832091~exp=1688832691~hmac=d5b0240a51baa06f5bd8a10f02d5bc6d65ff3ee9bab24e55c7028aeb0d8a13ee')",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
    <Navbar currentpage={currentpage}/>
    <div className="w-full h-screen flex justify-center items-center bg-center absolute" style={backgroundStyle}>
      <div className="lg:w-1/3 lg:h-1/2 md:w-1/2 md:h-1/2 sm:w-full sm:h-full h-1/2 shadow-lg rounded-md bg-white p-8 flex flex-col">
        <h1 className="text-center font-medium text-2xl mb-4 font-headerWala">Register to the website</h1>
        <div className="flex flex-1 flex-col justify-evenly">
            <input 
            className="border-2 outline-none p-2 rounded-md"
            type="username"
            placeholder="username"
            value={username}
            onChange={(e)=>{setUsername(e.target.value)}}
            />
            <input
            className="border-2 outline-none p-2 rounded-md"
            type="password"
            placeholder="*******"
            value={password}
            onChange={(e) => { setPassword(e.target.value); }}
          />
            <button
            className="
            flex justify-center
            p-2 rounded-md w-1/2 self-center
            bg-gray-800  text-white hover:bg-gray-800"
            onClick={signUp}
            >
            {
              isLoading ?
                <div className="mr-2 w-5 h-5 border-l-2 rounded-full animate-spin" /> : null
            }
            <span>
              SIGN UP
            </span>
          </button>
        </div>
        <div className="text-center text-sm">
          Already a User?
          <Link to="/login">
            <span className="font-medium text-gray-800 ml-1">
              Sign In
            </span>
          </Link>
        </div>
        </div>
        <ToastContainer />
    </div>
    </>
)}

export default Signup;