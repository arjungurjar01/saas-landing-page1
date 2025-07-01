import { useState } from "react"

type AccordionType = {
    title:string;
    content:string;
    icon:React.ReactNode ;
}

function Accordion({title,content,icon}:AccordionType) {
    const [isActive,setIsActive] = useState<boolean>(false);

    return (
    <div className="flex flex-col justify-center mx-4 sm:mx-10 md:mx-2 px-6 py-4 min-h-20 bg-white border-2 border-[#FAFBFC] rounded-xl shadow-2xl  w-82 sm:w-134 md:w-120 lg:w-152 xl:w-160 cursor-pointer transition-all duration-300 ease-linear">
       <div onClick={()=>setIsActive(!isActive)} className="flex items-center justify-between ">
        <h2 className="text-xl text-gray-800 font-medium">{title}</h2>
        <p  className={`  text-[#fc32a4] ${isActive ? 'rotate-180':''} `}>{icon}</p>
       </div>
       <div className="">
        {isActive && <p className={`text-gray-600 font-normal text-lg mt-4 ${isActive ? 'transition-all duration-300 ease-in-out max-h-[500px]': ''}`}>{content}</p>}
       </div>
    </div>
  )
}

export default Accordion