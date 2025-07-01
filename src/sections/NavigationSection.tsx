import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import Button from "../components/Button";
import logo from "../assets/logo.avif" ;
import { useEffect, useRef, useState } from "react";


type NavType = {
 
}



function NavigationSection({}:NavType) {
    const[isOpen,setIsOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null) ;
     
    const handleDropDown = () => {
     setIsOpen((prev) => !prev) ;
    }

    useEffect(()=>{
        const handleClickOutSide = (event:MouseEvent) =>{
            if(dropdownRef.current && !dropdownRef.current.contains(event.target as Node)){
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown",handleClickOutSide) ;
        return () => document.removeEventListener("mousedown",handleClickOutSide)
    },[]);

  return (
    <nav className="flex flex-row justify-between h-16 mx-4 md:mx-16 items-center mt-4" >
        <div className="w-42">
            <img className="w-full" src={logo} alt="logo" />
        </div>
        <div className="relative" ref={dropdownRef} >
        <ul className="hidden sm:flex md:flex sm:gap-2 md:gap-8 font-medium text-gray-600 text-md " >
                <li className="hover:text-[#fc32a4] cursor-pointer">Home</li>
                <li className="hover:text-[#fc32a4] cursor-pointer">Pricing</li>
                <li className="hover:text-[#fc32a4] cursor-pointer">Blog</li>

                 <li className="relative bg-amber-200" >
                <button className="flex items-center gap-2 hover:text-[#fc32a4] cursor-pointer md:w-[80%] md:text-sm" onClick={handleDropDown} >Features <span className="text-sm mt-0.5"><IoIosArrowDown className={`transition-transform ${isOpen ? "rotate-180" : ""}`} /></span></button>
                {isOpen && (
          <ul className="absolute left-0 mt-6 w-52 bg-white border rounded shadow-md z-5 font-medium text-sm text-gray-700">
          <li className="m-2 px-4 py-2 hover:bg-[#fafbfc] cursor-pointer rounded-lg">AI Ad Generator</li>
          <li className="m-2 px-4 py-2 hover:bg-[#fafbfc] cursor-pointer rounded-lg">Product Videos</li>
          <li className="m-2 px-4 py-2 hover:bg-[#fafbfc] cursor-pointer rounded-lg ">Image Generator</li>
          <li className="m-2 px-4 py-2 hover:bg-[#fafbfc] cursor-pointer rounded-lg ">Photo Editor</li>
          <li className="m-2 px-4 py-2 hover:bg-[#fafbfc] cursor-pointer rounded-lg ">Ai Shorts</li>

        </ul>
      )}
        </li>
        </ul>
        
        </div>
        <div>
           <Button className='px-2 py-0.5 md:px-6 md:py-3 lg:px-8 lg:py-3'>  <span className="text-[14px] md:text-[16px] w-auto">Sign In</span> <span><IoIosArrowForward /></span></Button>
        </div>
    </nav>
  )
}

export default NavigationSection