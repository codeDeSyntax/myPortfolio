import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-gradient-to-b from-black to-gray-800'>
        <div className='flex flex-col mx-auto justify-center max-w-screen-lg p-4 h-full'>
            <div className='pb-8'>
                <p className='text-4xl border-b-4 font-bold inline border-gray-500 text-white'>contact</p>
                <p className='py-6 text-white'>submit the form to get in touch with me</p>
            </div>

            <div className='flex justify-center items-center'>
                <form className='flex flex-col w-[100%] md:w-[60%] gap-4'>
                    <input type='text ' 
                    name='name' 
                    placeholder='Enter your name' 
                    className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                    />
                    <input type='text ' 
                    name='email' 
                    placeholder='Enter your email' 
                    className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                    />

                    <textarea name='message' rows={10} className='p-2 bg-transparent text-white focus:outline-none rounded-md border-2'></textarea>

                    <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 py-3 my-8 flex items-center hover:scale-118 duration-300 m-auto rounded-md px-10'>lets talk</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact