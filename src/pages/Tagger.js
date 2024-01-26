import React, { useState } from 'react'
import Leftbar from '../components/Leftbar'
import noti from "../assets/Notification.svg"
import { AiOutlineFileExcel } from "react-icons/ai";
import { GoUpload } from "react-icons/go";
import { Link } from "react-router-dom"
import data from "../constants/data.json"
import { Dropdown } from 'rsuite';
import DropdownItem from 'rsuite/esm/Dropdown/DropdownItem';
const Tagger = () => {

    const [tags, selectedTags] = useState([])
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
                <div className='items-center justify-center mx-auto w-10/12'>
                    <h1 className='m-6 font-Figtree text-xl font-bold'>Uploads</h1>
                    <table className='flex items-center justify-between bg-slate-400'>
                        <thead className=''>
                            <tr className='w-full'>
                                <th>ID</th>
                                <th>Links</th>
                                <th>Prefix</th>
                                <th>Add tags</th>
                                <th>Selected tags</th>
                            </tr>
                            {data.map((item) => (
                                <>
                                    < tr key={item.id} className='bg-white' >
                                        <td>{item.id}</td>
                                        <td>{item.links}</td>
                                        <td>{item.prefix}</td>
                                        <select onChange={(e) => {
                                            tags.push(e.target.value);
                                            selectedTags(tags)
                                            console.log(e.target.value);
                                        }} className=''>
                                            {

                                                item.select_tags.map((i) => (
                                                    <>
                                                        <option value="" selected disabled hidden>Select Tags</option>
                                                        <option className='rounded-full'>
                                                            {i}
                                                        </option >

                                                    </>

                                                ))
                                            }
                                        </select>
                                        <td>
                                            {/* {
                                                    tags ? (
                                                        <div>
                                                            No tag found
                                                        </div>
                                                    ) : (
                                                        <div>
                                                            {tags}
                                                        </div>
                                                    )
                                                } */}
                                            {tags}
                                        </td>
                                    </tr >
                                </>

                            ))}

                        </thead>
                    </table>


                </div>
            </div>
        </div >
    )
}

export default Tagger
