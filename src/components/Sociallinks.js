import React from 'react'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { MdMailOutline } from 'react-icons/md'
const Sociallinks = () => {

    const socialLinks = [
        {id: 1 , icon:<FaGithub size={25}/>, text:'Github', href:'https://Github.com', style:'rounded-tr-md'},
        {id: 2 , icon:<FaLinkedinIn size={25} />, text:'LinkedIn', href:'https://Linkedin.com'},
        {id: 3 , icon:<MdMailOutline size={25} />, text:'Mail' ,href:'mailto:foo@gmail.com'},
        {id: 4 , icon:<BsFillPersonLinesFill />, text:'contact', href:'./myCv.pdf' ,style:'rounded-br-md', download:true },
    ]
  return (
    <div className='hidden md:hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
           {
            socialLinks.map((eachLink) => 
                <li  className={`flex justify-between items-center w-40 h-14  px-4  bg-gray-500 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px] ${eachLink.style}`} >
                <a key={eachLink.id}
                 href={eachLink.href} 
                 className="flex justify-between items-center w-full text-white text-[16px]"
                 download={eachLink.download}
                 target="_blank" rel="noreferrer" 
                  >
                    {eachLink.text}{eachLink.icon}
                </a>
            </li>
            )
           }
        </ul> 
    </div>
  )
}

export default Sociallinks;