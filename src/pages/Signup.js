import React from 'react'

import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

import AppBar from '../components/AppBar1';
const Signup = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = data => console.log(data);

    return (
        <div>
            <div className='flex flex-row w-9/12 items-center justify-between'>
                <AppBar />
                <div className='flex flex-row h-screen items-center justify-center'>
                    <div className='flex flex-col text-black mb-10 '>
                        <h1 className='font-bold mb-4 text-4xl '>Sign In</h1>
                        <p className='font-normal font-lato text-xl '>Sign in to your account</p>
                        <div className='gap-x-10 text-[#858585] flex flex-row mt-3'>
                            <button className='p-4 bg-[#FFFFFF] border'><span className='text-base flex flex-row gap-x-3 items-center justify-between'><FaGoogle />Sign in with Google</span></button>
                            <button className='p-4 bg-[#FFFFFF] border'><span className='text-base flex flex-row gap-x-3 items-center justify-between'><FaApple />Sign in with Apple</span></button>
                        </div>
                        <div className='mt-10 border flex flex-col '>
                            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col text-base font-medium font-lato gap-y-6 p-7 bg-[#FFFFFF]'>
                                {/* <input {...register("firstName", { required: true, maxLength: 20 })} /> */}
                                <div className='flex flex-col gap-1 mb-3'>
                                    <label>Email address</label>
                                    <input type='email' placeholder='' className='border bg-[#EAEAEA] rounded-lg p-2' />
                                </div>
                                <div className='flex flex-col gap-1 mb-3 '>
                                    <label>Password</label>
                                    <input type='password' placeholder='' className='border bg-[#EAEAEA] rounded-lg p-2' />
                                </div>
                                <h1 className='text-[#346BD4]'>Forgot password?</h1>
                                <button type='submit' className='bg-[#605BFF] p-3 rounded-lg text-white font-bold'>Sign in</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Signup
