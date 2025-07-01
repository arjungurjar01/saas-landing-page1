type StatsType = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

function StatsCard({ icon, title, description }: StatsType) {
  const parts = title.split(/(\d+\.?\d*%?x?)/);
  return (
    <div className="flex flex-col items-center text-center justify-center rounded-xl w-78 md:w-58 lg:w-78 h-64 bg-transparent border border-[#FAFBFC] shadow cursor-pointer hover:border-[#fc32a4] hover:-translate-y-2 transition-transform duration-300 hover:shadow-2xl">
      <div className="text-7xl h-1/3 ">{icon}</div>
      <div className="">
        <h2 className="text-2xl font-bold text-gray-800">
          {parts.map((part, i) =>
            /\d/.test(part) ? (
              <span key={i} className="text-[#fd4fb2]">
                {part}
              </span>
            ) : (
              <span key={i} className="text-gray-800">
                {part}
              </span>
            )
          )}
        </h2>
        <h3 className="text-md font-normal text-gray-600">{description}</h3>
      </div>
    </div>
  );
}

export default StatsCard;
