import React from "react";
import axios from "axios";
import { useState } from "react";
import { API_ROUTES, APP_ROUTES } from "../utils/constants";
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./Navbar";


function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentpage, setCurrentpage] = useState('login');
const handleLogin = async () => {
  try {
    setIsLoading(true);
    const response = await axios.post(API_ROUTES.LOG_IN, {
      username,
      password
    });

    if (!response || !response.data || !response.data.token) {
      throw new Error('Invalid response or missing token');
    }

    const { token, message } = response.data;
    toast.success(message);
    localStorage.setItem('token', token);
    navigate(APP_ROUTES.LANDING_PAGE);
  } catch (err) {
    console.log('Error during login:', err);
    toast.error('Login failed! Please try again.');
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
        <h1 className="text-center font-medium text-2xl mb-4 font-headerWala">Login to the Dashboard</h1>
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
        </div>
        <button
          className="flex justify-center p-2 rounded-md w-1/2 self-center bg-gray-800 text-white hover:bg-gray-800"
          onClick={handleLogin}
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="mr-2 w-5 h-5 border-l-2 rounded-full animate-spin" />
          ) : null}
          <span>LOGIN</span>
        </button>
        <div className="text-center text-sm py-3">
          New User?{" "}
          <Link to="/signup" className="font-medium text-gray-800 ml-1">
            Sign Up
          </Link>
        </div>
      </div>
      <ToastContainer />
    </div>
    </>
  );
}

export default Login;
