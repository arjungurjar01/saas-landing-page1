import { WiStars } from "react-icons/wi";
import SectionTopContent from "../components/SectionTopContent";
import Button from "../components/Button";
import Card from "../components/Card";
import { featureData } from "../assets/data";

function FeatureSection() {
  return (
    <div className="min-h-screen px-4 md:px-16 lg:px-4 flex flex-col items-center">
      <SectionTopContent
        title="Create. Optimize. Scale."
        description="Transform your marketing with AI-powered tools that create, optimize, and analyze your content automatically"
      >
        <WiStars className="text-xl" /> <span>All-In-One Platform</span>
      </SectionTopContent>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4 lg:gap-4 xl:gap-8 md:px-4 xl:px-6">
        {featureData.map((item) => {
          return (
            <Card
              title={item.title}
              description={item.description}
              image={item.image}
              classNameBoolean={true}
              className="hover:!border-0"
            ></Card>
          );
        })}
      </div>
      <div className="mt-8">
        <Button className="gap-2 px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 xl:px-10 xl:py-5 hover:-translate-y-1">
          <span className="lg:text-lg xl:text-xl">Try For Free Now</span>{" "}
          <WiStars className="text-2xl" />{" "}
        </Button>
      </div>
    </div>
  );
}

export default FeatureSection;
