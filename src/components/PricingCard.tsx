import { MdDone } from "react-icons/md";
import { FaGift } from "react-icons/fa6";
import Button from "./Button";
import { GoArrowRight } from "react-icons/go";

type PricingCardTypes = {
  title?: string;
  description?: string;
  badge?: React.ReactNode;
  adsNumber? : number ;
  perAdPrice? : number ;
  credits?:number;
  brandKit? : number;
  includeUsers? : number;
  additionalUsers?:string;
  save?:number;
  dummyPrice?: number ;
  finalPrice?: number;
  popular?: boolean ;
};

function PricingCard({ title, description, badge,adsNumber,perAdPrice,credits,brandKit,includeUsers,additionalUsers,save,dummyPrice,finalPrice,popular}: PricingCardTypes) {
  return (
    <div className={`relative flex flex-col p-8 z-10 bg-white rounded-lg w-88 sm:w-88 md:w-58 lg:w-78 xl:w-88 md:h-180 lg:h-160 h-160 transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer ${popular ? 'border-[0.5px] border-[#fc32a4] shadow-[#fc32a4] ' : 'shadow border border-[#FAFBFC]'}`}>
      <div>
        <div className="flex flex-col gap-4">
        <div className="flex gap-4 items-center">
          <span className="bg-[#f9cee6] text-[#fc32a4] w-10 h-10 rounded text-2xl text-center pt-2 pl-2 ">{badge}</span> <span className="text-gray-800 text-2xl font-bold">{title}</span>
        </div>
        <h3 className="text-lg text-gray-800 font-normal">{description}</h3>
      </div>
      {/* ads/month */}
      <div className="flex flex-col gap-1 mt-4 items-center">
        <div className="text-gray-800 text-lg font-bold flex gap-2">
          {" "} <FaGift className="text-2xl text-yellow-500"/>
          {adsNumber} <span>ads/month</span>
        </div>
        <p className="text-gray-600 text-md font-normal">(Just ${perAdPrice} / ad!)</p>
      </div>
      {/* plan details */}
      <div className="mt-2">
        <h2 className="text-gray-700 text-base font-medium mb-2">PLAN DETAILS</h2>
        <ul className="space-y-2">
          <li className="flex items-center gap-2">
            <span className="text-green-500"><MdDone className="text-2xl"/></span>
            <p className=""><span className="text-gray-900 text-base font-semibold">{credits} Credits</span> <span>/ month</span></p>
          </li>
          <li className="flex gap-2">
            <span className="text-green-500 text-xl"><MdDone className="text-2xl"/></span>
            <p className=""><span className="text-gray-900 text-base font-semibold">Brand Kits:</span> <span>{brandKit}</span> </p>
          </li>
          <li className="flex gap-2 items-center">
             <span className="text-green-500 text-xl"><MdDone className="text-2xl"/></span>
            <p className=""> <span className="text-gray-900 text-base font-semibold"> Included Users: </span> <span>{includeUsers}</span>
            </p>
          </li>
          <li className="flex gap-2 items-center">
             <span className="text-green-500 text-xl"><MdDone className="text-2xl"/></span>
            <p className=""><span className="text-gray-900 text-base font-semibold">Additional Users:</span> <span>{additionalUsers}</span>
            </p>
          </li>
        </ul>
      </div>
      </div>


   {/* pricing div */}
      <div className="text-gray-600 mt-10">
         <div className="">
            <p className="text-lg line-through text-gray-400">${dummyPrice}</p>
            <p> <span className="text-gray-800 text-3xl font-bold">{finalPrice}</span> /mo <span className="text-green-400">(save {save}%)</span></p>
         </div>
         <div className="flex flex-col items-center">
            <div className="mt-4 mb-2">
            <Button className={`md:px-4 md:py-2 xl:px-18 xl:py-2 !rounded-full ${popular ? '':'bg-gradient-to-r from-gray-800 from-100% hover:from-gray-700 '} `} > <span className="text-lg">Try For Free</span> <GoArrowRight className="text-2xl"/> </Button>
             </div>
             <div className="flex flex-col items-center gap-2">
                <p className="text-[#fc32a4]">Start 3-day free trial</p>
                <p className="text-center">$0.00 due today, cancel anytime</p>
             </div>
         </div>
      </div>

      {popular && <div className="absolute left-24 md:left-16 text-center -top-4 bg-[#fc32a4] text-white text-base font-medium px-4 py-1 rounded-full">MOST POPULAR</div>}
    </div>
  );
}

export default PricingCard;
