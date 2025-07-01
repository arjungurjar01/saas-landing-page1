
type StarsType = {
    stars? : number ;
    className? : string ;
}

function PrintStar({stars=0,className=""}:StarsType) {
  return (
        <div>
          {[...Array(stars)].map((_, i) => (
            <span key={i} className={`text-yellow-400 ${className} `}>
              ★
            </span>
          ))}
        </div>
  )
}

export default PrintStar