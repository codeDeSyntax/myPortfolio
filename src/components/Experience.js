import React from 'react'
import github from '../assets/github.png'
import HTMl from '../assets/html.png'
import javascript from '../assets/javascript.png'
import node from '../assets/node.png'
import reactImage from '../assets/react.png'
import tailwind from '../assets/tailwind.png'

const techs = [
    {id:1 , preview:node , style:'shadow-green-600' ,title:'Nodejs'},
    {id:2 , preview:reactImage, style:'shadow-blue-600' , title:'react'},
    {id:3 , preview:HTMl ,style:'shadow-orange-500', title:'HTML'},
    {id:4 , preview:tailwind , style:'shadow-sky-600', title:'Tailwind'},
    {id:5 , preview:github ,style:'shadow-gray-500' , title:'Github'},
    {id:6 , preview:javascript , style:'shadow-yellow-500', title:'JS '},
]
const Experience = () => {
  return (
    <div name='experience' className='w-full   h-screen bg-gradient-to-b from-gray-800  to-black'>
        <div className='max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full text-white'> 
            <div className='px-4'>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'> 
                    Experience
                </p>
                <p className='py-6'>These are the technologies I have worked with</p>
            </div>

            <div className=' w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-5'>
                {
                    techs.map((tech) => (
                        <div key={tech.id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${tech.style}`}>
                    <img src={tech.preview} alt='html' className='w-20 mx-auto'/>
                    <p className='mt-4'>{tech.title}</p>
                </div>
                    ))
                }
            </div>
        </div>
    </div>
  ) 
}

export default Experience