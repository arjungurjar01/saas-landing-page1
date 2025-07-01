import SectionHeading from "./SectionHeading"

type ContentType = {
    title? : string ;
    description? : string ;
    children? : React.ReactNode ;
}

function SectionTopContent({title,description,children}:ContentType) {
  return (
    <div className="flex flex-col gap-6 mb-8 items-center text-center">
            <SectionHeading> {children} </SectionHeading>
            <h1 className="text-3xl px-4 sm:text-5xl md:text-6xl xl:text-6xl  font-bold text-gray-800">{title}</h1>
            <h2 className="text-xl font-normal text-gray-600">{description}</h2>
        </div>
  )
}

export default SectionTopContent