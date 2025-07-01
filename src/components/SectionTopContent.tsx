import PrintStar from "./PrintStar";
import SectionHeading from "./SectionHeading"

type ContentType = {
    title? : string ;
    description? : string ;
    stars? : number ;
    children? : React.ReactNode ;
}

function SectionTopContent({title,description,stars = 0,children}:ContentType) {
  return (
    <div className="flex flex-col gap-6 mb-8 items-center text-center">
            {children &&  <SectionHeading> {children} </SectionHeading>}
            <h1 className="text-3xl px-4 sm:text-5xl md:text-6xl xl:text-6xl  font-bold text-gray-800">{title}</h1>
            <h2 className="flex gap-2 text-xl font-normal text-gray-600"> <PrintStar className="text-2xl" stars={stars}/> {description}</h2>
        </div>
  )
}

export default SectionTopContent