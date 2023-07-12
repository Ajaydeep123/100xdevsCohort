import React from 'react';
import {Link} from 'react-router-dom'


const Navbar = ({currentpage,redirectToSignup, redirectToLogin }) => {

  const isSignupPage = currentpage === 'signup';
  const isLoginPage = currentpage === 'login';
  return (
    <div className="w-full h-16 shadow-xl  flex justify-between items-center bg-powderwala fixed z-10">
      <Link to ="/">
      <img
        src="https://media.licdn.com/dms/image/D4D03AQHKcFjsa4jbUQ/profile-displayphoto-shrink_800_800/0/1684321183885?e=2147483647&v=beta&t=RmnAamuVXaA9SzBOeI9DASoNGvWNwc7gdz4CLe-hiT4"
        alt="Profile Picture"
        className="w-16 rounded-full shadow-xl m-4" 
      />
      </Link>
      <h1 className="text-2xl font-headerWala text-center mx-4">#100xdevs</h1>
      {!isSignupPage && !isLoginPage && (
        <div className="w-52 mx-4 flex justify-around">
          <button className="w-36 h-10 ring-2 ring-green-500 hover:ring-blue-300 rounded-md bg-green-500 hover:bg-slate-100 text-white hover:text-cyan-800 font-semibold" onClick={redirectToLogin}>
            LOGIN
          </button>
        </div>
      )}
    </div>
    
  );
};

export default Navbar;