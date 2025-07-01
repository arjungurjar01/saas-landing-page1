import SectionTopContent from '../components/SectionTopContent'
import { HiMiniTrophy } from "react-icons/hi2";
import StatsCard from '../components/StatsCard';
import { statsData } from '../assets/data';
import Button from '../components/Button';
import { GoArrowRight } from "react-icons/go";

function StatsSection({}) {
  return (
    <div className='min-h-screen px-4 md:px-16 lg:px-4 flex flex-col items-center '>
        <SectionTopContent title='The Mintly Advantage' description='Traditional content creation is slow and expensive. We fixed that.'> <HiMiniTrophy /><span>The Advantage</span> </SectionTopContent>
         
         <div className='flex mt-8 px-4 xl:gap-4'>
          {statsData.map((item)=>{
            return <StatsCard icon={<item.icon/>} title={item.title} description={item.description}  ></StatsCard>

          })}
         </div>
         <div  className='mt-16'>
          <Button className='gap-2 px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 xl:px-10 xl:py-5 hover:-translate-y-1'><span className='lg:text-lg xl:text-xl'>Try Free Now</span> <GoArrowRight className='text-2xl'/> </Button>
         </div>
    </div>
  )
}

export default StatsSection