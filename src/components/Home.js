import React from 'react';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import HeroImage from '../assets/heroImage.jpg';

const Home = () => {
  return (
    <div name = "home" className='h-screen bg-gradient-to-b from-black via-black to-gray-800 pb-2'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full text-white'>
                <h2 className='text-4xl sm:text-5xl font-bold'>I am a Front-end developer </h2>
                <p className='text-gray-500 py-4 max-w-md'> I have eight years of experience building and designing software.Currently I love to work on web application using technologies like react, tailwind and Javascript
                </p>

                <div>
                    <button className='group text-white w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer '>
                    Portfolio
                      <span className='group-hover:rotate-90 duration-300'>  <MdOutlineKeyboardArrowRight size={25} className='ml-1'/></span>
                    </button>
                </div>

            </div>

            <div className=' flex justify-center'>
                <img src={HeroImage} alt='img' className='rounded-md w-[40%] md:w-[50%]  '/>
            </div>
        </div>
    </div>
  ) 
}

export default Home