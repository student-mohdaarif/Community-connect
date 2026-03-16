import React from 'react'
import { Star } from "lucide-react"; 
import { SignIn } from '@clerk/clerk-react';
import bgimg from '../assets/bgimg.png'
import logoimg from '../assets/logoimg.png';
import {Link} from 'react-router-dom';
import sideimg from '../assets/sideimg.jfif';
import passwordimg from '../assets/passwordsize.png';
import rayyanimg from '../assets/rayyanphoto.jpeg';
  
const Login = () => {
  return (
    <div className ='min-h-screen flex flex-col md:flex-row'>
      {/* Background Image */}
     <img src ={bgimg} alt="Background" className="absolute top-0 left-0 -z-1 w-full h-full object-cover" />
     <div className='flex-1 flex flex-col items-start justify-between p-8 md:p-0 lg:pl-20'>
      <Link to = "/">
        <img src={logoimg} alt ="logo" className='h-40 object-contain'/>
      </Link>
    <div className='w-3xl'>
      <div className='flex items-center gap-0 mb-6 max-md:mt-10 ml-8'>
        {/* <h1 className='text-5xl'>Discover, Share, and Connect with Your Community</h1> */}
        <img src={sideimg} alt = "sideimg" className='h-10 md:h-16 rounded-full'/>
        <img src={passwordimg} alt ="passwordimg" className='h-10 md:h-16 rounded-full'/>
        <img src={rayyanimg} alt ="rayyanimg" className='h-10 md:h-16 rounded-full'/>
        <div>
          <div className='flex'>
            {Array(5).fill(0).map((_, i) =>(<Star key = {i} 
            className ='size-5 md:size-6 text-transparent fill-amber-500'/>))}
          </div>
          <p>Rated by Students</p>
        </div>
      </div>
      <h1 className='text-3xl md:text-6xl md:pd-2 font-bold  bg-gradient-to-r from-indigo-950 to-indigo-800 bg-clip-text text-transparent'>
        Discover, Share, and Connect with Your Community
      </h1>
        <p className='text-xl md:text-2xl text-indigo-900'>
          One place to connect, communicate, and grow together.</p>
    </div>
    <span className='md:h-40'></span>
     </div>
     {/* login form */}
     <div className='flex-1 flex items-center justify-center p-6 sm:p-10'>
      <SignIn/>
     </div>
    </div>
  )
}

export default Login
