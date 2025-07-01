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
import { FaBolt, FaRocket } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";


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


export const testimonialsData = [
  {
    id: 1,
    image: "https://ui-avatars.com/api/?name=Sarah+Lee&background=random",
    name: "Sarah Lee",
    job: "Founder",
    stars: 5,
    review: "Absolutely incredible experience. The results exceeded my expectations and the team was super helpful!",
  },
  {
    id: 2,
    image: "https://ui-avatars.com/api/?name=James+Wong&background=random",
    name: "James Wong",
    job: "Product Manager",
    stars: 5,
    review: "Seamless and efficient from start to finish. Highly recommended if you care about quality.",
  },
  {
    id: 3,
    image: "https://ui-avatars.com/api/?name=Anjali+Sharma&background=random",
    name: "Anjali Sharma",
    job: "CTO",
    stars: 5,
    review: "Top-notch service and support! The platform helped us grow faster than we imagined.",
  },
  {
    id: 4,
    image: "https://ui-avatars.com/api/?name=Daniel+Green&background=random",
    name: "Daniel Green",
    job: "Developer Advocate",
    stars: 5,
    review: "The best investment I've made for my startup. Clean UI and flawless functionality.",
  },
  {
    id: 5,
    image: "https://ui-avatars.com/api/?name=Maria+Gonzalez&background=random",
    name: "Maria Gonzalez",
    job: "UX Designer",
    stars: 5,
    review: "Loved every bit of it! From UX to support, everything felt professional and personal.",
  },
  {
    id: 6,
    image: "https://ui-avatars.com/api/?name=Akash+Patel&background=random",
    name: "Akash Patel",
    job: "Marketing Head",
    stars: 5,
    review: "It’s rare to find such consistent and reliable quality. Highly satisfied!",
  },
];


interface PricingData {
  id: number;
  badge: IconType; 
  title: string;
  description: string;
  adsNumber:number;
  perAdPrice:number;
  includeUsers:number;
  additionalUsers:string;
  dummyPrice:number;
  finalPrice:number;
  save:number;
  brandKit:number;
  credits:number;
  popular:boolean;
}

export const pricingData : PricingData[] = [
  {
    id: 1,
    badge: RiFlashlightFill,
    title: "Starter",
    description: "Best for creators, small businesses, & early-stage startups.",
    adsNumber: 50,
    perAdPrice: 0.98,
    includeUsers: 2,
    additionalUsers: "$23/mo",
    dummyPrice: 56,
    finalPrice: 40,
    save: 38,
    brandKit:1,
    credits:50,
    popular: false,
  },
  {
    id: 2,
    badge: FaBolt ,
    title: "Pro",
    description: "Ideal for growing teams and scaling campaigns.",
    adsNumber: 150,
    perAdPrice: 0.75,
    includeUsers: 5,
    additionalUsers: "$18/mo",
    dummyPrice: 89,
    finalPrice: 65,
    save: 56,
    brandKit:3,
    credits:300,
    popular: true, //Marked as popular
  },
  {
    id: 3,
    badge: FaRocket,
    title: "Enterprise",
    description: "Designed for large organizations with high-volume needs.",
    adsNumber: 500,
    perAdPrice: 0.60,
    includeUsers: 10,
    additionalUsers: "$15/mo",
    dummyPrice: 149,
    finalPrice: 110,
    save: 80,
    brandKit:50,
    credits:600,
    popular: false,
  },
];



interface FAQData  {
    id: number ;
    title:string;
    content:string;
    icon:IconType;
}

export const faqData : FAQData[] = [
  {
    id: 1,
    title: "What is your return policy?",
    content: "We offer a 30-day money-back guarantee with no questions asked.",
    icon: FaChevronDown,
  },
  {
    id: 2,
    title: "How long does shipping take?",
    content: "Shipping typically takes 3–5 business days depending on your location.",
    icon: FaChevronDown,
  },
  {
    id: 3,
    title: "Can I upgrade my plan later?",
    content: "Yes, you can upgrade or downgrade your plan anytime from your dashboard.",
    icon: FaChevronDown,
  },
  {
    id: 4,
    title: "Is there a free trial available?",
    content: "Absolutely! You can try any plan free for 14 days without entering payment details.",
    icon: FaChevronDown,
  },
  {
    id: 5,
    title: "Do you offer customer support?",
    content: "Yes, our support team is available 24/7 via chat and email.",
    icon: FaChevronDown,
  },
  {
    id: 6,
    title: "Is my data secure?",
    content: "We use enterprise-grade encryption and follow industry best practices to keep your data safe.",
    icon: FaChevronDown,
  },
];
