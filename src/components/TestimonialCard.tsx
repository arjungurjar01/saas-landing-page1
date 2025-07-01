import PrintStar from "./PrintStar";

type TestimonialCardTypes = {
  dp: string;
  name: string;
  job: string;
  star: number;
  review: string;
};

function TestimonialCard({
  dp,
  name,
  job,
  star,
  review,
}: TestimonialCardTypes) {
  return (
    <div className="flex flex-col w-68 xl:w-80 h-48 p-4 bg-[#FAFBFC] rounded-xl border border-[#FAFBFC] shadow">
      {/* upper div */}
      <div className="flex justify-between">
        {/* info div */}
        <div className="flex">
          <img className="rounded-full w-10 h-10" src={dp} alt="" />
          <div className="flex flex-col ml-4">
            <h2 className="text-gray-800 text-md font-semibold">{name}</h2>
            <h3 className="text-gray-600 text-xs font-normal">{job}</h3>
          </div>
        </div>

        {/* star div */}
        <div>
            <PrintStar stars={star}></PrintStar>
        </div>
        
      </div>

      {/* review  div*/}
      <div className="mt-4 text-gray-800 font-normal">{review}</div>
    </div>
  );
}

export default TestimonialCard;
