import React from 'react'
import { FaGithub, FaTwitter, FaLinkedin, FaDiscord } from "react-icons/fa6";
import logo from "../assets/Vector 7.svg"
const AppBar = () => {
    return (
        <div className='bg-[#605BFF] h-[calc(100dvh)] clipper w-[730px] items-center justify-between'>
            <img src={logo} alt='img' className='bg-[#FCFCFF] rounded-full h-14 w-14 m-10' />
            <div className='items-center flex justify-center mt-96'>
                <h1 className='text-7xl text-[#FFF] relative mr-36 font-bold'>BASE</h1>
            </div>
            <div className='flex flex-row items-center text-white justify-center mr-36 gap-x-8 mt-60'>
                <FaGithub />
                <FaTwitter />
                <FaLinkedin />
                <FaDiscord />
            </div>
        </div>
    )
}

export default AppBar
