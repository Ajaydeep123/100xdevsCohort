import React from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import { APP_ROUTES } from '../utils/constants';
function Landing() {
  const navigate = useNavigate();

  const navigateToSignup = () => {
    navigate('/signup');
  };

  const navigateToLogin = () => {
    navigate('/login');
  };
  const navigateToHome = () =>{
    navigate('/')
  }
   return (
    <>
    <Navbar  redirectToLogin={navigateToLogin} redirectToHome={navigateToHome} />      
      <div className=' w-full h-screen  top-16 bg-acchaSafed relative '>
        <div className='lg:h-1/3 md:h-1/3 sm:h-60 min-[320px]:h-1/4
         w-full flex justify-between gap-3 min-[320px]:pl-0 p-10 m-auto overflow-hidden container md:p-12' >
          <img className='w-20 h-20 lg:absolute left-28 top-48 object-cover' src="https://img.icons8.com/?size=512&id=8g6WJkjf0vaP&format=png" alt="React" />
          <img className='w-20 h-20 object-cover lg:block sm:hidden min-[320px]:hidden md:hidden lg:absolute left-96 ' src="https://img.icons8.com/?size=512&id=54087&format=png" alt="Node js" />
          <img className='w-20 h-20 object-cover lg:absolute right-96 ' src="https://img.icons8.com/?size=512&id=kg46nzoJrmTR&format=png" alt="Express js" />
          <img className='w-20 h-20 object-cover lg:absolute top-32 left-1/3 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 ' src="https://cdn.iconscout.com/icon/free/png-512/free-mongodb-5-1175140.png?f=avif&w=256" alt="Mongodb " />
          <img className='w-20 h-20 object-cover lg:block sm:hidden md:hidden min-[320px]:hidden lg:absolute top-32 right-1/3 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2' src="https://img.icons8.com/?size=512&id=EXZGX2xYvaYn&format=png" alt="Recoil" />
          <img className='w-20 h-20 object-cover lg:absolute right-36 lg:inset-y-44' src="https://img.icons8.com/?size=512&id=10lIo9AfRXQs&format=png" alt="TS " />
        </div>
        <h1 className='font-bodySection m-auto font-bold text-center tracking-wide lg:text-6xl md:text-6xl sm:text-4xl min-[320px]:text-4xl min-[320px]:pb-5 md:mx-10 antialiased'>Become a <span className='bg-gradient-to-r from-blue-500'>100x Engineer.</span>
        </h1>
        <h1 className='font-bodySection text-3xl min-[320px]:pb-1  sm:mx-10 md:mx-10 tracking-wide text-center'>Make your first open source contribution</h1>
        <h2 className='font-bodySection text-2xl  leading-loose text-gray-700 tracking-wide text-center m-6  min-[320px]:text-sm md:mx-10 sm:mx-10'>100xDevs is the Fullstack learning platfrom for Developers and Open Source enthusiasts to build skills and confidence for $15 USD/month.</h2>
        <div className='w-full h-14  min-[320px]:h-10 flex flex-row gap-4 justify-center '>
          <button
           className=" w-36 min-[320px]:w-24 ring-2 ring-blue-500 hover:ring-blue-300 rounded-md bg-white hover:bg-slate-100 text-black font-semibold"
           onClick={navigateToSignup}
           >Join Us</button>
          <button class=" w-36 min-[320px]:w-24 ring-2 ring-blue-500 hover:ring-blue-300 rounded-md bg-white hover:bg-slate-100 text-black font-semibold">Community</button>
        </div>
  
       </div>
       <div className='w-full h-screen bg-acchaSafed relative'>
        <div className='columns-3x absolute'>
            <img class="w-full aspect-video ..." src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREiKK0MLBSufP9ZTCHsZY-a_k-i_LZydymClGiUZj4&s" />
            <img class="w-full aspect-square ..." src="..." />
        </div>
       </div>
       <div className='w-full h-screen bg-acchaBlack relative'></div>
       <div className='w-full h-5/6 bg-acchaSafed relative'></div>
       <div className='w-full h-screen bg-acchaBlack relative'></div>
       <div className='w-full h-screen bg-acchaSafed relative'></div>


    </>
  );
}

export default Landing;
