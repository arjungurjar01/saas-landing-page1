
type SectionHeadingType = {
 children? : React.ReactNode ;
}

function SectionHeading({children}:SectionHeadingType) {
  return <div className="flex w-fit items-center gap-2 mt-16 bg-[#FBEBF4] border border-[#fc32a4] px-4 py-2 rounded-full text-[#fc32a4]"> {children}</div>
}

export default SectionHeading