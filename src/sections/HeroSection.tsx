import React from 'react'
import Button from '../components/Button'
import { IoIosArrowForward } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { FaInstagram } from "react-icons/fa6";
import { FaAmazon } from "react-icons/fa";
import { FaShopify } from "react-icons/fa";
import { FaAppleAlt } from "react-icons/fa";
import { IoLogoVenmo } from "react-icons/io5";
import { BsVimeo } from 'react-icons/bs';

const boxstyle : React.CSSProperties = {
   height: "calc(100vh - 64px)"
}

function HeroSection({}) {
  return (
    <header style={boxstyle} className='flex-1  mx-4 md:mx-8 lg:mx-16 '>
       <div className='px-auto md:px-[6vw] lg:px-[10vw] xl:px-[14vw] 2xl:px-[20vw] flex flex-1  flex-col items-center justify-center text-center gap-4'>
         
         <div className='bg-white rounded-full w-fit px-4 py-2 shadow mt-16 flex '> <FaAppleAlt className='text-xl' /> <IoLogoVenmo className='text-xl' />  <h2 className='ml-2 text-sm font-medium text-gray-600'>Trusted by 390+ businesses</h2> </div>
       
        <div className='my-4 px-2 md:px-0'>
            <h1 className='text-4xl md:text-7xl  font-bold'> <span className='text-gray-800'>Clone high converting </span><span className='text-[#fc32a4]'>ads in seconds</span></h1>
            <h2 className='text-xl md:text-2xl font-normal text-gray-600 px-2 pt-4'>Upload your product image, pick a top-performing layout, and <span className='text-gray-800 font-medium'>get high-converting ads</span> — no designer, no delays.</h2>
        </div>
        
        <div className='flex flex-col md:flex-row gap-4'>
            <Button className='bg-gradient-to-r from-white from-100% !text-black w-[80vw] md:w-auto px-6 py-2 md:px-6 md:py-3 lg:px-8 lg:py-3 shadow-2xl hover:-translate-y-1 transition-transform hover:!from-[#ffffff]'> <FcGoogle className='text-2xl' /> <span className='text-[18px] md:text-[16px] w-auto'>Join with Google </span></Button>
            <Button className='px-6 py-2 md:px-6 md:py-3 lg:px-8 lg:py-3 shadow-2xl w-[80vw] md:w-auto hover:-translate-y-1 '><span className='text-[18px] md:text-[16px] w-auto  '>Start for Free </span><IoIosArrowForward className='text-2xl'/> </Button>
        </div>
        
        <div className='mt-4'>
            <ul className='flex-none md:flex gap-4 list-disc list-inside text-gray-600 custom-marker'>
                <li>Start creating today</li>
                <li>Risk-free</li>
                <li>Cancel anytime</li>
            </ul>
        </div>
        <div className='flex flex-col gap-2 mt-4'>
            <h2 className='text-gray-600 font-medium'>Works seamlessly with:</h2>
            <div className='flex gap-6 md:gap-10 mt-4 px-4'><FcGoogle className='text-2xl' /> <FaInstagram className='text-2xl text-pink-400'/> <FaAmazon className='text-2xl text-yellow-600'/> <FaShopify className='text-2xl text-green-400'/> <FaAppleAlt className='text-2xl'/> <BsVimeo className='text-2xl'/> </div>
        </div>
       </div>
    </header>
  )
}

export default HeroSection