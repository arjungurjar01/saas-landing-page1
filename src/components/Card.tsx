import { GoArrowRight } from "react-icons/go";

type CardTypes = {
  image?: string;
  title?: string;
  description?: string;
  id?: number;
  className? : string; 
  classNameBoolean? : boolean;
};
function Card({ image, title, description, id ,className = "",classNameBoolean = false}: CardTypes) {
  return (
    <div className={`relative flex flex-col group w-84 md:w-58   bg-white rounded-lg shadow-xl  border border-transparent cursor-pointer   ${classNameBoolean ? 'hover:border-b-[#fc32a4] sm:w-58 lg:w-58 ':'lg:w-78 xl:w-86 p-8 hover:border-[#fc32a4] hover:-translate-y-2 transition-transform duration-300 hover:shadow-2xl'} ${className}`}>
      <div className={` h-44 ${classNameBoolean ? 'p-0' : 'p-4 bg-[#f5f6f8] shadow-xs relative flex  justify-center items-center rounded-md'} `}>
        <img className={`h-40 object-cover   ${classNameBoolean ? 'w-full rounded-t-md h-full ' : 'transition-all duration-300  group-hover:scale-110'} `} src={image} alt="steps" />
        {id && <div className="absolute top-0 right-0 z-50 bg-[#fc32a4] rounded-full w-10 h-10 text-center pt-1 text-white text-xl font-semibold">{id}</div>}
      </div>
      <div className={`flex flex-col gap-2 mt-6 mb-2 ${classNameBoolean ? 'p-4' : ''}`}>
         <div className="flex items-center gap-4">
                    <h1 className={`text-gray-800 text-xl font-bold ${classNameBoolean ? 'group-hover:text-[#fc32a4]' : ''}`}>{title}</h1>
                    {classNameBoolean && <p><GoArrowRight className="text-2xl font-bold text-[#fc32a4]"/></p>}
         </div>
        <p className="text-gray-600 text-base font-normal">{description}</p>
      </div>
      {classNameBoolean && <span className="absolute left-0 bottom-0 h-[6px] w-0 bg-gradient-to-r from-[#fc32a4] from-55% to-white transition-all duration-300 group-hover:w-full rounded-b-xl "></span>
 } 
    </div>
  );
}

export default Card;
