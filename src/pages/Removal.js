import React from 'react'
import Leftbar from '../components/Leftbar'
import noti from "../assets/Notification.svg"
import { AiOutlineFileExcel } from "react-icons/ai";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Link } from "react-router-dom"
const Upload = () => {
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
                            <AiOutlineFileExcel height={70} />
                            <p className='font-bold text-[#999CA0] text-xs gap-1 flex font-Figtree'>upload-template.xlsx</p>
                            <p className='text-red-400 font-normal font-Figtree'>Remove</p>
                        </div>
                    </div>
                    <Link to="/tags" className='bg-[#605BFF] w-5/12 font-semibold text-xl text-[#FFFFFF] mt-12 p-3 rounded-lg flex flex-row items-center justify-center gap-x-2'><AiOutlineLoading3Quarters /></Link>
                </div>

            </div>
        </div>
    )
}

export default Upload
