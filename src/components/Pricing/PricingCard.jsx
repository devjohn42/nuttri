import React from 'react';
import Button from '../global/Button';

// eslint-disable-next-line react/prop-types
const PricingCard = ({ title, value, description }) => {
  return (
    <div className="w-[320px] h-[480px] sm:w-[390px] md:w-[480px] md:h-[550px] lg:w-[400px] lg:h-[600px] bg-oldLace flex flex-col items-center justify-center gap-y-6">
      <span className="text-[20px] md:text-[28px] font-bold uppercase text-center">
        {title}
      </span>
      <span className="font-bold text-[35px]">{value}</span>
      <div className="bg-teaGreen p-[0rem_1.25rem] h-[250px] lg:h-[300px] flex items-center">
        <p className="font-medium">{description}</p>
      </div>
      <Button />
    </div>
  );
};

export default PricingCard;
