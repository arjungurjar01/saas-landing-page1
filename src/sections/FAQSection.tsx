import Accordion from "../components/Accordion";
import Button from "../components/Button";
import SectionTopContent from "../components/SectionTopContent";
import { MdOutlineEmail } from "react-icons/md";
import { faqData } from "../assets/data";

function FAQSection() {
  return (
    <div className="min-h-screen mt-24 px-4 md:px-16 lg:px-24 flex flex-col md:flex-row justify-center ">
      <div className="flex flex-col w-full sm:mx-6 px-4 md:px-2 md:w-1/3 items-start">
        <div className="w-[80%]">
          <SectionTopContent
            className="text-start items-start"
            title="FAQs"
            description="Everything you need to know before you buy. Can't find the answer to your question?"
          ></SectionTopContent>
        </div>
        <div className="">
          <Button className="">
            {" "}
            <MdOutlineEmail className="text-2xl" /> <span>Email</span>
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-10 md:mt-0">
        {faqData.map((item) => {
          return (
            <Accordion
              title={item.title}
              content={item.content}
              icon={<item.icon />}
            ></Accordion>
          );
        })}
      </div>
    </div>
  );
}

export default FAQSection;
