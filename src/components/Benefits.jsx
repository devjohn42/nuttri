import Card from './global/Card';
import { motion } from "framer-motion";
import { animations } from "../data/animations.js"

import { cards } from '../data/card';

const Benefits = () => {
  return (
    <div
      id="benefits"
      className=" lg:h-screen flex items-center justify-center"
    >
      <motion.div {...animations.downToUp} className='py-12 flex justify-evenly items-center flex-col gap-y-8'> 

      <h2 className="font-bold uppercase">O que nós te ofereçemos?</h2>
      <div className="grid md:grid-rows-3 md:grid-cols-2 lg:grid-rows-2 lg:grid-cols-3 gap-6 cursor-pointer">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            bg={card.bg}
            icon={card.icon}
            message={card.message}
          />
        ))}
      </div>

      </motion.div>


    </div>
  );
};

export default Benefits;
