import ReactCardFlip from "react-card-flip";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Card = ({ title, bg, icon, message }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // const handleMouseEnter = () => {
  //   setIsFlipped(!isFlipped);
  // };

  const handleMouseOver = () => {
    setIsFlipped(true);
  }

  const handleMouseOut = () => {
    setIsFlipped(false)
  }

  return (
    <ReactCardFlip
      isFlipped={isFlipped}
      flipDirection="vertical"
      flipSpeedBackToFront={1}
      flipSpeedFrontToBack={0.8}
    >
      <div
        className={`${bg} bg-cover w-64 h-52 xl:w-96 xl:h-64`}
        onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}
      >
        <div className="flex flex-col items-center justify-center gap-y-4 h-full bg-hunterGreen/70">
          <div className="w-14 h-14  md:w-16 md:h-16  xl:w-28 xl:h-28 bg-[#00000080] rounded-full flex items-center justify-center text-oldLace text-2xl  lg:text-3xl xl:text-6xl">
            {icon}
          </div>
          <h3 className=" px-6 text-oldLace font-bold text-center">{title}</h3>
        </div>
      </div>

      <div
        className="p-6 bg-hunterGreen flex flex-col items-center justify-center gap-y-4 w-64 h-52 xl:w-96 xl:h-64"
        onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}
      >
        <h3 className="text-oldLace text-center">{message}</h3>
      </div>
    </ReactCardFlip>
  );
};

export default Card;
