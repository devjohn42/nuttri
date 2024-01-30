import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { testimonials } from "../data/testimonials.js";
import { PiCarrotFill } from "react-icons/pi";

const Testimonials = () => {
  return (
    <AwesomeSlider
      buttonContentRight={
        <PiCarrotFill className=" text-3xl text-[#FF812D] scale-x-[-1]" />
      }
      buttonContentLeft={<PiCarrotFill className=" text-3xl text-[#FF812D]" />}
      className=" h-80 md:h-56"
      mobileTouch={true}
      organicArrows={false}
      bullets={false}
    >
      {testimonials.map((testimonial, index) => {
        return (
          <div
            key={index}
            className=" w-4/5 flex flex-col  items-center gap-y-4"
            style={{ background: "#FAF1E4" }}
          >
            <p className=" text-lg md:text-xl lg:text-2xl text-center">{testimonial.text}</p>
            <div className="flex items-center gap-x-4">
              <img
                src={`../../${testimonial.img}`}
                alt=""
                className=" w-20 h-20 rounded-full object-cover"
              />
              <p className=" text-base md:text-lg lg:text-xl">{testimonial.author}</p>
            </div>
          </div>
        );
      })}
    </AwesomeSlider>
  );
};

export default Testimonials;
