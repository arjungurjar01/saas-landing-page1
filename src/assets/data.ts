import step1 from "./step-1.avif";
import step2 from "./step-2.avif";
import step3 from "./step-3.avif";
import f1 from "./feature1.jpg";
import f2 from "./feature2.jpg";
import f3 from "./feature3.jpg";
import f4 from "./feature4.jpg";
import { FiDollarSign } from "react-icons/fi";
import { IoTrendingUpSharp } from "react-icons/io5";
import { RiFlashlightFill } from "react-icons/ri";
import type {IconType}  from "react-icons";

interface CardData {
    id:number ;
    image:string;
    title:string;
    description:string ;
}

interface StatData {
  id: number;
  icon: IconType; 
  title: string;
  description: string;
}


export const processData : CardData[] = [{
    id : 1,
    image : step1 ,
    title : "Upload your Product",
    description : "Choose an image of your product."
},
{
    id : 2,
    image : step2 ,
    title : "Pick a Template",
    description : "Select from hundreds of templates."
},
{
    id : 3,
    image : step3 ,
    title : "Create your Ad",
    description : "Download and start marketing."
}] 


export const featureData : CardData[] = [
    {
        id:1,
        image:f1,
        title:"AI Ad Generator",
        description:"Generate conversion-focused creatives. Ready for any platform. Takes seconds."
    },
    {
        id:2,
        image:f2,
        title:"Product Videoshoots",
        description:"Create engaging product videos automatically. Transform static content into dynamic videos."
    },
    {
        id:3,
        image:f3,
        title:"Product Backdrop",
        description:"Generate high-converting marketing texts. Uses proven copywriting frameworks."
    },
    {
        id:4,
        image:f4,
        title:"AI Photo Editor",
        description:"Transform product photos instantly. Professional-grade fashion and e-commerce results."
    }
]

export const statsData : StatData[] = [
    {
        id:1,
        icon: FiDollarSign,
        title:"Cut Costs by 83%",
        description:"Keep thousands in your pocket"
    },
    {
        id:2,
        icon: RiFlashlightFill,
        title:"Create 20x Faster",
        description:"Launch today, not next month"
    },
    {
        id:1,
        icon: IoTrendingUpSharp,
        title:"5.2x ROAS Average",
        description:"Turn viewers into buyers"
    }
]