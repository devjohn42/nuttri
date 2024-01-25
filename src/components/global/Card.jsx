import ReactCardFlip from "react-card-flip"
import { useState } from "react"


// eslint-disable-next-line react/prop-types
const Card = ({title, bg, icon, message}) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleMouseEnter = () => {
        setIsFlipped(!isFlipped)
    };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical" flipSpeedBackToFront={1} flipSpeedFrontToBack={0.8}>
      
        <div className={`bg-[url(./${bg})] w-96 h-64`}  onMouseEnter={handleMouseEnter}>
        <div className="flex flex-col items-center justify-center gap-y-4 w-ful h-full bg-hunterGreen/70">
        <div className=" w-28 h-28 bg-[#00000080] rounded-full flex items-center justify-center text-oldLace text-6xl">{icon}</div>
        <h3 className="text-oldLace font-bold">{title}</h3>
        </div>
        </div>

        <div className=" w-96 h-64 p-6 bg-hunterGreen flex flex-col items-center justify-center gap-y-4" onMouseEnter={handleMouseEnter}>
        <h3 className="text-oldLace text-center">{message}</h3>
        </div>
        

    </ReactCardFlip>
  )
}

export default Card