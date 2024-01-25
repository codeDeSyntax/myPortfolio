import React from 'react';
import Combo from '../assets/combo.jpg';
import Javascript from '../assets/js.jpg';
import Mern from '../assets/mern.png';

const Portfolio = () => {


    const worksDone = [
        {id:1, preview:Mern , },
        {id:2, preview:Combo , },
        {id:3, preview:Javascript},
        {id:4, preview:Combo , },
        {id:5, preview:Mern , },
        {id:6, preview:Javascript},
    ]
  return (
    <div>
        <div name='portfolio' className='w-full  bg-gradient-to-b from-black to-gray-800 text-white px-3 pb-8'   >
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col  w-full'>
              <div className='pb-3'>
              <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>check out some of my work right here</p>
              </div>

            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0  mx-auto  sm:w-3/4 w-[95 %] pt-4'>
               {
                worksDone.map((work) => (
                    <div className='shadow-md shadow-gray-600 rounded-lg mx-auto sm:w-[80%]'>
                    <img src={work.preview} alt='mern'  className='rounded-md duration-200 hover:scale-105 h-[60%] w-full' />
                    <div className='flex justify-center items-center'>
                        <button className='w-1/2 px-6 py-2 m-4
                        duration-200'>Demo</button>
                        <button className='w-1/2 px-6 py-2 m-4
                        duration-200'>Demo</button>
                    </div>
                </div>
                ))
               }
               
            </div>
        </div>
    </div>
  )
}

export default Portfolio;