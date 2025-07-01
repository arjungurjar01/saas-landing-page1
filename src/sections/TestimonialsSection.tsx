import { testimonialsData } from "../assets/data";
import SectionTopContent from "../components/SectionTopContent";
import { FaStar } from "react-icons/fa";
import TestimonialCard from "../components/TestimonialCard";
import Button from "../components/Button";
import { GoArrowRight } from "react-icons/go";

function TestimonialsSection() {
  return (
    <div className="min-h-screen px-4 md:px-16 lg:px-4 flex flex-col items-center ">
      <SectionTopContent
        title="Loved by Brands Worldwide"
        description="See how businesses are transforming their marketing with Mintly"
      >
        {" "}
        <FaStar className="text-2xl" /> <span> Success Stories </span>{" "}
      </SectionTopContent>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  xl:gap-8">
        {testimonialsData.map((item) => {
          return (
            <TestimonialCard
              dp={item.image}
              name={item.name}
              job={item.job}
              star={item.stars}
              review={item.review}
            ></TestimonialCard>
          );
        })}
      </div>

      <div className="mt-12">
        <Button className="gap-2 px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 xl:px-10 xl:py-5 hover:-translate-y-1">
          <span className="lg:text-lg xl:text-xl">Try Free Now</span>{" "}
          <GoArrowRight className="text-2xl" />{" "}
        </Button>
      </div>
    </div>
  );
}

export default TestimonialsSection;
