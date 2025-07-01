import Card from "../components/Card"
import {processData} from "../assets/data"
import { RiFlashlightFill } from "react-icons/ri";
import { GoArrowRight } from "react-icons/go";
import Button from "../components/Button";
import SectionTopContent from "../components/SectionTopContent";

function ProcessSection() {
  return (
    <div className="min-h-screen px-4 md:px-16 flex flex-col items-center bg-[#FAFBFC]">
       
        <SectionTopContent title="Generate AI static ads instantly" description="Transform your product into professional static ads using AI."><RiFlashlightFill className="text-xl"/><span>Simple Process</span></SectionTopContent>
       
        <div className="flex flex-col md:flex-row gap-6 md:gap-4 xl:gap-8">
            {processData.map((item)=>{
                return <Card 
                id={item.id}
                title={item.title} 
                description={item.description}
                image={item.image} />
                

            })}
        </div>

        <div className="mt-12">
          <Button className="gap-2 px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 xl:px-10 xl:py-5 hover:-translate-y-1"><span className="lg:text-lg xl:text-xl">Get Started </span><GoArrowRight className="text-2xl"/></Button>
        </div>
    </div>
  )
}

export default ProcessSection