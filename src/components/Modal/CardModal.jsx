import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const CardModal = ({ name, img, linkedin, github, siteLink, site, othersLink, others }) => {
  return (
    <div className="w-[220px] h-[350px] lg:w-[285px] lg:h-[420px] bg-oldLace flex flex-col items-center rounded-[0.5rem] py-2 gap-y-3">
      <div className="w-full flex flex-col items-center gap-y-3">
        <span className="text-[18px] lg:text-[28px] font-medium">{name}</span>
        <div className="w-[95%] flex justify-center ">
          <img src={img} alt="" className="w-full h-full" />
        </div>
        <div className="flex gap-x-3">
          <a href={linkedin} target="_blank" className="w-fit">
            <FaLinkedin className="text-[1.25rem] lg:text-[1.65rem]" />
          </a>
          <a href={github} target="_blank" className="w-fit">
            <FaGithub className="text-[1.25rem] lg:text-[1.65rem]" />
          </a>
        </div>
        <div className="flex  gap-x-3">
          <a
            href={siteLink}
            target="_blank"
            className="text-[0.875rem] lg:text-[1rem] font-medium italic"
          >
            {site}
          </a>
          |
          <a
            href={othersLink}
            target="_blank"
            className="text-[0.875rem] lg:text-[1rem] font-medium italic"
          >
            {others}
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardModal;
