import React from 'react'
import Leftbar from '../components/Leftbar'
import noti from "../assets/Notification.svg"
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
        <div className='m-96 mt-48 flex items-center justify-center border'>
          <div className='flex flex-col w-96 h-96 items-center justify-center gap-y-20'>
            <p className='font-bold text-[#999CA0] text-xs flex flex-row gap-1'>Drop Your excel sheet here or <p>browse</p></p>
            <button className='bg-[#605BFF] w-96 font-semibold text-xl text-[#FFFFFF]'>Upload</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Upload
