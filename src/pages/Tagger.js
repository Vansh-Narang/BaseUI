import React, { useEffect, useState } from 'react'
import Leftbar from '../components/Leftbar'
import noti from "../assets/Notification.svg"
import { AiOutlineFileExcel } from "react-icons/ai";
import { GoUpload } from "react-icons/go";
import { Link } from "react-router-dom"
import data from "../constants/data.json"
import { RxCross2 } from "react-icons/rx";
function Tagger() {
    const [tags, setTags] = useState([]);
    const [selectedTagsMap, setSelectedTagsMap] = useState({});

    const handleTagSelection = (e, itemId) => {
        const selectedTag = e.target.value;

        // Get the current selected tags for the specific item
        const itemSelectedTags = selectedTagsMap[itemId] || [];

        // Remove the tag if it already exists, otherwise add it
        const updatedTags = itemSelectedTags.includes(selectedTag)
            ? itemSelectedTags.filter((tag) => tag !== selectedTag)
            : [...itemSelectedTags, selectedTag];

        // Update the selected tags map
        setSelectedTagsMap({
            ...selectedTagsMap,
            [itemId]: updatedTags,
        });

        // Update the tags array for the specific item
        const updatedData = data.map((item) =>
            item.id === itemId ? { ...item, selectedTags: updatedTags } : item
        );

        // Update the data array in the future, use the updatedData state instead
        // setData(updatedData);
    };

    const handleTagRemoval = (itemId, removedTag) => {
        const itemSelectedTags = selectedTagsMap[itemId] || [];
        const updatedTags = itemSelectedTags.filter((tag) => tag !== removedTag);

        setSelectedTagsMap({
            ...selectedTagsMap,
            [itemId]: updatedTags,
        });
    };

    useEffect(() => {
        console.log(selectedTagsMap);
    }, [selectedTagsMap]);
    return (
        <div className='flex flex-row '>
            <Leftbar />
            <div className='bg-[#FAFAFB]  w-lvw flex flex-col pb-[5%]'>
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
                <div className='w-10/12 self-center flex flex-col'>
                    <h1 className='m-6 font-Figtree text-xl font-bold'>Uploads</h1>
                    <table className='w-full'>
                        <thead className='bg-gray-700'>
                            {/* Inside the table header */}
                            <tr className='w-[100%] bg-[#F5F5F5]'>
                                <th className='p-2'>SI No.</th>
                                <th className='p-2'>Links</th>
                                <th className='p-2'>Prefix</th>
                                <th className='p-2'>Add tags</th>
                                <th className='p-2'>Selected tags</th>
                            </tr>

                            {/* Inside the table body */}
                            {data.map((item) => (
                                <tr key={item.id} className='bg-[#FFFFFF] border w-full'>
                                    <td className='p-2'>{item.id}</td>
                                    {/* <td className='p-2'>{item.links}</td> */}
                                    <a>{item.links}</a>
                                    <td className='p-2'>{item.prefix}</td>
                                    <td className='p-2'>
                                        <select
                                            onChange={(e) => handleTagSelection(e, item.id)}
                                            value={selectedTagsMap[item.id]?.join(', ') || ''}
                                            className=''
                                        >
                                            <option value='' disabled hidden>
                                                Select Tags
                                            </option>
                                            {item.select_tags.map((i) => (
                                                <option className='rounded-full' key={i}>
                                                    {i}
                                                </option>
                                            ))}
                                        </select>
                                    </td>
                                    <td className='p-2'>
                                        <div className='flex flex-row gap-2'>
                                            {selectedTagsMap[item.id]?.map((tag) => (
                                                <div
                                                    key={tag}
                                                    className='cursor-pointer bg-[#605BFF] rounded-lg p-1 text-white flex flex-row items-center max-w-min max-h-min gap-2'
                                                    onClick={() => handleTagRemoval(item.id, tag)}
                                                >
                                                    {tag}<RxCross2 />
                                                    {'  '}
                                                </div>
                                            ))}
                                        </div>
                                    </td>
                                </tr>
                            ))}

                        </thead>
                    </table>


                </div>
            </div>
        </div >
    )
}



export default Tagger