import React from 'react';
import { useEffect,useRef } from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import { APP_ROUTES } from '../utils/constants';
import VanillaTilt from 'vanilla-tilt';
function Landing() {
  const navigate = useNavigate();
  const tiltRef = useRef(null);
  const navigateToSignup = () => {
    navigate('/signup');
  };

  const navigateToLogin = () => {
    navigate('/login');
  };
  const navigateToHome = () =>{
    navigate('/')
  }

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 10,
        speed: 400,
        glare: true,
        'max-glare': 0.5,
      });
    }
  }, []);

    const backgroundStyle = {
    backgroundImage: "url('https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1600')",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
      const backgroundStyle1 = {
    backgroundImage: "url('https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1600",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
      const backgroundStyle2 = {
    backgroundImage: "url('https://images.pexels.com/photos/5952651/pexels-photo-5952651.jpeg?auto=compress&cs=tinysrgb&w=1600')",
    backgroundPosition: "center", 
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
      const backgroundStyle3 = {
    backgroundImage: "url('https://images.pexels.com/photos/5935787/pexels-photo-5935787.jpeg?auto=compress&cs=tinysrgb&w=1600')",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  
   return (
    <div className='overflow-x-hidden'>
    <Navbar  redirectToLogin={navigateToLogin} redirectToHome={navigateToHome} />      
      <div className=' w-full lg:h-screen  sm:h-auto sm:pb-52  top-16 bg-acchaSafed relative '>
        <div className='lg:h-1/3 lg:mb-10  md:h-1/3 sm:h-60 min-[320px]:h-1/4
         w-full flex justify-between gap-3 min-[320px]:pl-0 p-10 m-auto overflow-hidden container md:p-12' >
          <img className='w-20 h-20 lg:absolute left-28 top-48 object-cover' src="https://img.icons8.com/?size=512&id=8g6WJkjf0vaP&format=png" alt="React" />
          <img className='w-20 h-20 object-cover lg:block sm:hidden min-[320px]:hidden md:hidden lg:absolute left-96 ' src="https://img.icons8.com/?size=512&id=54087&format=png" alt="Node js" />
          <img className='w-20 h-20 object-cover lg:absolute right-96 ' src="https://img.icons8.com/?size=512&id=kg46nzoJrmTR&format=png" alt="Express js" />
          <img className='w-20 h-20 object-cover lg:absolute top-32 left-1/3 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 ' src="https://cdn.iconscout.com/icon/free/png-512/free-mongodb-5-1175140.png?f=avif&w=256" alt="Mongodb " />
          <img className='w-20 h-20 object-cover lg:block sm:hidden md:hidden min-[320px]:hidden lg:absolute top-32 right-1/3 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2' src="https://img.icons8.com/?size=512&id=EXZGX2xYvaYn&format=png" alt="Recoil" />
          <img className='w-20 h-20 object-cover lg:absolute right-36 lg:inset-y-44' src="https://img.icons8.com/?size=512&id=10lIo9AfRXQs&format=png" alt="TS " />
        </div>
        <h1 className='font-bodySection m-auto font-bold text-center tracking-wide lg:text-6xl lg:mb-10 md:text-6xl sm:text-4xl min-[320px]:text-4xl min-[320px]:pb-5 md:mx-10 antialiased'>Become a <span className='bg-gradient-to-r from-blue-500'>100x Engineer.</span>
        </h1>
        <h1 className='font-bodySection text-3xl min-[320px]:pb-1  sm:mx-10 md:mx-10 tracking-wide text-center'>Make your first open source contribution</h1>
        <h2 className='font-bodySection text-2xl  leading-loose text-gray-700 tracking-wide text-center m-6 pl-10  min-[320px]:text-sm md:mx-10 sm:mx-10'>100xDevs is the Fullstack learning platfrom for Developers and Open Source enthusiasts to build skills and confidence for $15 USD/month.</h2>
        <div className='w-full h-14  min-[320px]:h-10 flex flex-row gap-4 justify-center '>
          <button
           className=" w-36 min-[320px]:w-24 ring-2 ring-blue-500 hover:ring-blue-300 rounded-md bg-white hover:bg-slate-100 text-black font-semibold"
           onClick={navigateToSignup}
           >Join Us</button>
          <button className=" w-36 min-[320px]:w-24 ring-2 ring-blue-500 hover:ring-blue-300 rounded-md bg-white hover:bg-slate-100 text-black font-semibold">Community</button>
        </div>
  
       </div>
       <div className='w-full  h-screen flex flex-col gap-20  relative top-16 lg:p-20 md:gap-10 p-5 md:mb-20 sm:mb-20 bg-acchaSafed'>
        <div className='flex justify-center md:gap-10 sm:gap-10 '>
          <div className="max-w-sm drop-shadow-lg lg:w-1/3  lg:max-w-full lg:flex ">
            <div className="h-48 sm:h-36 sm:w-64 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={backgroundStyle} title="Woman holding a mug">
            </div>
            <div className="sm:w-64   drop-shadow-lg bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="mb-7">
                <p className="text-sm text-gray-600 flex items-center">
                  <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                  </svg>
                  Members only
                </p>
                <div className="text-gray-900 font-bodySection text-left text-xl mb-2 bg-green-200 p-2">Want to Make your first opensource contribution?</div>
                <p className="text-gray-700 text-base">Learn how to contribute to, create, and maintain open source projects!</p>
              </div>
              <div className="flex items-center">
                <img className="w-10 h-10 rounded-full mr-4" src="https://media.licdn.com/dms/image/D4D03AQHKcFjsa4jbUQ/profile-displayphoto-shrink_800_800/0/1684321183885?e=2147483647&v=beta&t=RmnAamuVXaA9SzBOeI9DASoNGvWNwc7gdz4CLe-hiT4" alt="Avatar of Jonathan Reinink"/>
                <div className="text-sm">
                  <p className="text-gray-900 leading-none">Ajaydeep</p>
                  <p className="text-gray-600">Aug 18</p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-sm drop-shadow-lg lg:w-1/3  lg:max-w-full lg:flex">
            <div className="h-48 sm:h-36 sm:w-64 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={backgroundStyle1} title="Woman holding a mug">
            </div>
            <div className="sm:w-64   drop-shadow-lg bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="mb-7">
                <p className="text-sm text-gray-600 flex items-center">
                  <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                  </svg>
                  Members only
                </p>
                <div className="text-gray-900 font-bodySection text-left text-xl mb-2 bg-green-200 p-2">Create a Back-End App with JavaScript.</div>
                <p className="text-gray-700 text-base">Learn how to build back-end web APIs using Express.js, Node.js, SQL, and a Node.js-SQLite database library.</p>
              </div>
              <div className="flex items-center">
                <img className="w-10 h-10 rounded-full mr-4" src="https://media.licdn.com/dms/image/D4D03AQHKcFjsa4jbUQ/profile-displayphoto-shrink_800_800/0/1684321183885?e=2147483647&v=beta&t=RmnAamuVXaA9SzBOeI9DASoNGvWNwc7gdz4CLe-hiT4" alt="Avatar of Jonathan Reinink"/>
                <div className="text-sm">
                  <p className="text-gray-900 leading-none">Ajaydeep</p>
                  <p className="text-gray-600">July 22</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-center md:gap-10 sm:gap-10'>
          <div className="max-w-sm drop-shadow-lg lg:w-1/3  lg:max-w-full lg:flex">
            <div className="h-48 sm:h-36 sm:w-64 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={backgroundStyle2} title="Woman holding a mug">
            </div>
            <div className="sm:w-64   drop-shadow-lg bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="mb-7">
                <p className="text-sm text-gray-600 flex items-center">
                  <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                  </svg>
                  Members only
                </p>
                <div className="text-gray-900 font-bodySection text-left text-xl mb-2 bg-green-200 p-2">Create an Advanced Web App with React and Redux</div>
                <p className="text-gray-700 text-base">Learn how to build advanced web applications with React and Redux.</p>
              </div>
              <div className="flex items-center">
                <img className="w-10 h-10 rounded-full mr-4" src="https://media.licdn.com/dms/image/D4D03AQHKcFjsa4jbUQ/profile-displayphoto-shrink_800_800/0/1684321183885?e=2147483647&v=beta&t=RmnAamuVXaA9SzBOeI9DASoNGvWNwc7gdz4CLe-hiT4" alt="Avatar of Jonathan Reinink"/>
                <div className="text-sm">
                  <p className="text-gray-900 leading-none">Ajaydeep</p>
                  <p className="text-gray-600">June 23</p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-sm drop-shadow-lg lg:w-1/3  lg:max-w-full lg:flex">
            <div className="h-48 sm:h-36 sm:w-64 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={backgroundStyle} title="Woman holding a mug">
            </div>
            <div className="sm:w-64   drop-shadow-lg bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="mb-7">
                <p className="text-sm text-gray-600 flex items-center">
                  <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                  </svg>
                  Members only
                </p>
                <div className="text-gray-900 font-bodySection text-left text-xl mb-2 bg-green-200 p-2">Pass the Technical Interview with JavaScript</div>
                <p className="text-gray-700 text-base">Learn about the computer science concepts of DSA and build implementations from scratch in modern JavaScript.</p>
              </div>
              <div className="flex items-center">
                <img className="w-10 h-10 rounded-full mr-4" src="https://media.licdn.com/dms/image/D4D03AQHKcFjsa4jbUQ/profile-displayphoto-shrink_800_800/0/1684321183885?e=2147483647&v=beta&t=RmnAamuVXaA9SzBOeI9DASoNGvWNwc7gdz4CLe-hiT4" alt="Avatar of Jonathan Reinink"/>
                <div className="text-sm">
                  <p className="text-gray-900 leading-none">Ajaydeep</p>
                  <p className="text-gray-600">Aug 18</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
       </div>
       <div className='w-full h-screen bg-acchaBlack relative '>
        <div className=' w-full h-1/2 p-20 md:mb-4 '>
          <h1 className="font-headerWala tracking-widest text-acchaSafed ">Online Fullstack <br></br> and, Open-source Courses</h1>
          <h1 className="font-bodyWala tracking-widest text-5xl sm:text-4xl sm:leading-normal leading-relaxed text-acchaSafed pb-9 pt-4">Celebrate with <span className='rounded-r-md bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 hover:text-black'> digital<br></br> certificates </span></h1>
          <p  className="font-sans tracking-widest text-l md:text-base sm:text-base  sm:leading-normal leading-relaxed text-acchaSafed pb-10 md:pb-4">Upon completion of each course you'll receive a personalised,<br /> digital certificate to celebrate your achievement 🎉</p>
          <button className='bg-acchaSafed p-3 rounded-lg ring-2 sm:p-2 ring-gray-500 hover:ring-blue-300 '>
            Join Courses
          </button>
        </div>
        <div ref={tiltRef} className='w-full h-1/2 flex justify-around items-center flex-wrap pb-24 md:pb-0'>
          <div className='card w-60'>
               <img src="https://images.template.net/52438/Free-Software-Development-Certificate-Template-format.jpg" className='object-cover h-60 ' alt="" />
           </div>
            <div className='card w-60'>
               <img src="https://images.template.net/52438/Free-Software-Development-Certificate-Template-format.jpg" className='object-cover h-60 ' alt="" />
           </div>
            <div className='card w-60'>
               <img src="https://images.template.net/52438/Free-Software-Development-Certificate-Template-format.jpg" className='object-cover h-60' alt="" />
           </div>
           </div>
          </div>  
       <div className='w-full h-screen bg-acchaSafed overflow-hidden  relative'>
        <div className='w-full h-full p-20 md:mb-2 overflow-hidden' >
        <h1 className="font-headerWala text-center md:text-lg tracking-widest text-black ">Online Fullstack <br></br> and, Open-source Courses</h1>
        <h1 className="font-bodyWala text-center tracking-widest text-5xl sm:text-4xl sm:leading-normal leading-relaxed text-black pb-9 md:pb-4 pt-4"><span className='text-white rounded-l-md rounded-r-md bg-gradient-to-r hover:from-green-400 hover:to-blue-500 from-pink-500 to-yellow-500 hover:text-black'> Learn-by-doing </span> with the best<br></br>in the industry</h1>
        <p  className="font-sans text-center tracking-widest text-l md:text-base sm:text-base  sm:leading-normal leading-relaxed text-black pb-10 md:pb-4">Learn from our growing team of Educators who have decades of experience <br></br> designing products for millions of people.</p>
        <h1 className='text-center m-5  md:m-0'>
        <button className='bg-black text-white  rounded-lg ring-2 sm:p-2 ring-gray-500 hover:ring-blue-300 '>
            Join Courses
        </button>
        </h1>
        <div className='flex justify-center gap-40 lg:mt-10'>
        <div className='embed-responsive embed-responsive-21by9 w-1/3  md:mt-8 h-full  bg-black rounded-lg shadow-2xl'>
              <video src="https://d33g7sdvsfd029.cloudfront.net/paid_course3/2023-05-21-0.6258578055979667.mp4" muted autoPlay controls controlsList='nodownload' className="embed-responsive-item bg-no-repeat h-full rounded-lg shadow-2xl  object-contain"></video>
        </div>
        <div className='embed-responsive embed-responsive-21by9 w-1/3 mt-40 md:mt-8 h-full bg-black rounded-xl shadow-2xl'>
              <video src="https://d33g7sdvsfd029.cloudfront.net/paid_course3/2023-05-21-0.6258578055979667.mp4" muted controls controlsList='nodownload' className="embed-responsive-item bg-no-repeat h-full rounded-lg shadow-2xl object-contain"></video>
        </div>
        </div>
        </div>
  
       </div>
        <div className='w-full h-screen relative flex justify-center items-center bg-acchaBlack'>
            <div className=' w-9/12 h-4/6 absolute top-20 '>
            <h1 className='text-center font-bodyWala text-3xl md:2xl  text-white'>
              Frequently Asked Questions
            </h1>
            <div className="w-full h-5/6 mt-10 flex flex-col gap-4  text-white ">
              <span>
              <h1>1.What will be the language of communication?</h1>
              <p>English</p>
              </span>
              

              <span><h1>2.Will I have access to the course after it ends?</h1>
              <p>You will have access to the videos for 1 year</p></span>

              <span><h1>3.How many sessions can be logged in at the same time?</h1>
              <p>You can log in with a maximum of 2 sessions simultaneously.</p></span>

              <span><h1>4.How many times can i watch a video?</h1>
              <p>As many times as you like. Watch it 10 times or 100 times. Totally on you</p></span>

              <span><h1>5.Can i check and change the video quality?</h1>
              <p>Yes of course. We take audio, video and content quality very seriously. Also, some videos in this course are marked for preview, so that you can test the quality</p>
              </span>

              <span><h1>6.Do you offer Refunds?</h1>
              <p>WE DON'T OFFER REFUNDS AT THIS PLATFORM. Sorry, we are not a marketplace, where quality can be misled by fake reviews.</p></span>
            </div>
            </div>

            <div className='w-full flex flex-col items-center gap-10  rounded-t-3xl bg-white h-48 absolute bottom-0 '>
                  <h1 className="text-2xl rounded font-headerWala bg-black text-white px-8 py-1 mt-14 ">#100xdevs</h1>
                  <h1 className='font-bodySection  px-20 text-black text-center flex  gap-5'>
                    <a href="#" className='hover:text-xl hover:text-blue-400 hover:font-bold'>Terms & Conditions</a>
                    <a href="#" className='hover:text-xl hover:text-blue-400 hover:font-bold'>Privacy Policy</a>
                    <a href="#" className='hover:text-xl hover:text-blue-400 hover:font-bold'>Refunds & Cancellation Policy</a>
                  </h1>
            </div>
        </div>
       </div>
  );
}

export default Landing
