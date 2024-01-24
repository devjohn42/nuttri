import ReactCardFlip from "react-card-flip"
import { useState } from "react"

const Card = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleMouseOver = () => {
        setIsFlipped(!isFlipped)
    };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical" flipSpeedBackToFront={1} flipSpeedFrontToBack={0.8}>
        <div className="w-[150px] bg-hunterGreen" onMouseOver={handleMouseOver}>
        <p className="text-oldLace">Test</p>
        </div>

        <div className="w-[150px] bg-hunterGreen" onMouseOver={handleMouseOver}>
        <p className="text-oldLace">Flipped</p>
        </div>
        

    </ReactCardFlip>
  )
}

export default Card