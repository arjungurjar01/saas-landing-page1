
import SectionTopContent from '../components/SectionTopContent'
import PricingCard from '../components/PricingCard'
import { pricingData } from '../assets/data';
function PricingSection() {
  return (
    <div className='min-h-screen mt-20 px-4 md:px-16 lg:px-4 flex flex-col items-center'>
        <SectionTopContent title='Create High-Converting Ads in Seconds ⚡' description='347+ happy brands and over 50,000 ads generated' stars={5}></SectionTopContent>
        <h2 className='bg-green-100 px-6 py-2 border border-green-200 rounded-full text-lg font-normal text-gray-800'> ✅ Save up to 44% — Only 4 spots left! Ends 7/1</h2>
         <div className='flex flex-col md:flex-row gap-4  mt-6'>
          {
            pricingData.map((item)=>{
                return <PricingCard badge={<item.badge/>} title={item.title} description={item.description} adsNumber={item.adsNumber} perAdPrice={item.perAdPrice} includeUsers={item.includeUsers} additionalUsers={item.additionalUsers} dummyPrice={item.dummyPrice} finalPrice={item.finalPrice} save={item.save} popular={item.popular} brandKit={item.brandKit} credits={item.credits}></PricingCard>

            })
          }
         </div>
         <div className='mt-6'>
            <p className='text-gray-400 text-sm font-normal'>Try Mintly risk-free. Cancel at anytime during your trial.</p>
         </div>
    </div>
  )
}

export default PricingSection