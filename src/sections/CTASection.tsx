import { GoArrowRight } from "react-icons/go"
import Button from "../components/Button"
import SectionTopContent from "../components/SectionTopContent"


function CTASection() {
  return (
    <div className="flex flex-col items-center max-h-screen mt-20 md:mt-4 mb-24">
        <SectionTopContent className="w-full mx-6 lg:w-[60%]" title="Sign up now to boost your sales with AI" description="Join thousands of marketers, brands, and agencies already scaling with Mintly’s instant ad generator."></SectionTopContent>
    <div className="mt-4">
        <Button className="gap-2 px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 xl:px-10 xl:py-5 hover:-translate-y-1">
          <span className="lg:text-lg xl:text-xl">Try Free Now</span>{" "}
          <GoArrowRight className="text-2xl" />{" "}
        </Button>
    </div>
    <p className="text-sm text-gray-500 mt-4 ">3-day free trial.</p>
    </div>
  )
}

export default CTASection