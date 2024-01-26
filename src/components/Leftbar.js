import React, { useState, useEffect } from 'react';
import logo from '../assets/Subtract.svg';
import { sidebarLinks } from '../constants/sidebarLinks';
import { CiMenuBurger } from "react-icons/ci";
import { MdShortcut } from "react-icons/md";
const Leftbar = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        // Close sidebar on component mount for small screens
        if (window.innerWidth <= 768) {
            setSidebarOpen(false);
        } else {
            setSidebarOpen(true);
        }

        // Add event listener for resizing to handle responsiveness
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setSidebarOpen(false);
            } else {
                setSidebarOpen(true);
            }
        };

        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={`leftbar-container ${isSidebarOpen ? 'open' : ''}`}>
            <div className='w-full md:w-56 bg-[#FFF]'>
                <div className='bg-[#FCFCFF] flex flex-col md:flex-row items-center'>
                    <img
                        src={logo}
                        alt='img'
                        className='bg-[#FCFCFF] rounded-full h-14 w-14 md:m-10'
                    />
                    <h1 className='font-semibold text-2xl'>Base</h1>
                    {/* Toggle button only on small screens */}
                    {window.innerWidth <= 768 && (
                        <button
                            className='md:hidden ml-auto p-2 focus:outline-none'
                            onClick={toggleSidebar}
                        >
                            {isSidebarOpen ? <MdShortcut /> : <CiMenuBurger />}
                        </button>
                    )}
                </div>
                {/* Conditionally render the sidebar based on the state */}
                {isSidebarOpen && (
                    <div>
                        {sidebarLinks.map((link) => (
                            <div
                                key={link.name}
                                className='flex flex-row gap-x-8 m-2 md:m-10'
                            >
                                <img src={link.icon} alt='icons' />
                                <h3 className='text-[#9A9AA9] font-semibold text-xl'>
                                    {link.name}
                                </h3>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Leftbar;
