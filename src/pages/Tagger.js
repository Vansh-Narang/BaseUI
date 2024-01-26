import React from 'react'
import Leftbar from '../components/Leftbar'
import noti from "../assets/Notification.svg"
import { AiOutlineFileExcel } from "react-icons/ai";
import { GoUpload } from "react-icons/go";
import { Link } from "react-router-dom"
import data from "../constants/data.json"
const Tagger = () => {
    return (
        <div className='flex flex-row'>
            <Leftbar />
            <div className='bg-[#FAFAFB] h-lvh w-lvw flex flex-col'>
                <div className='m-6 flex flex-row items-center justify-between'>
                    <h1 className='font-semibold text-2xl'>Upload CSV</h1>
                    <div className='flex flex-row gap-x-5'>
                        <img src={noti} height={20} width={20} alt='xyz' />
                        <div className='bg-[#9A9AA9] border rounded-full h-6 w-6 mr-3'>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <div className='mt-48 flex flex-col items-center justify-center border w-5/12'>
                        <div className='flex flex-col h-80 items-center justify-center gap-y-2'>
                            <AiOutlineFileExcel />
                            <p className='font-bold text-[#999CA0] text-xs gap-1 flex font-Figtree'>Drop Your excel sheet here or <p className='text-[#605BFF]'>browse</p></p>
                        </div>
                    </div>
                    <Link to="/" className='bg-[#605BFF] w-5/12 font-semibold text-xl text-[#FFFFFF] mt-12 p-3 rounded-lg flex flex-row items-center justify-center gap-x-2 cursor-not-allowed opacity-50'><GoUpload />Upload</Link>
                </div>
                <div className='items-center justify-center'>
                    <h1 className='m-6 font-Figtree text-xl font-bold'>Uploads</h1>
                    <div className='bg-blue-500 items-center justify-between ml-10'>
                        {
                            data.map((i) => (
                                <div className='bg-blue-500'>
                                    hi
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Tagger
