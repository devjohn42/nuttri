import Card from "./global/Card";

import { cards } from "../data/card";


const Benefits = () => {

  
  return (
    <div className=" lg:h-screen py-12 flex justify-evenly items-center flex-col gap-y-5">
      <h2 className="font-bold">O que nós te ofereçemos?</h2>
      <div className="grid grid-rows-2 grid-cols-3 gap-6 cursor-pointer">
      
      {cards.map((ele, index) => <Card key={index} title={ele.title} bg={ele.bg} icon={ele.icon} message={ele.message} />)}
        


      </div>

    </div>
  )
}

export default Benefits