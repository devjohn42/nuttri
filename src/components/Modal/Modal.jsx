import React, { useContext } from 'react';
import CardModal from './CardModal';
import { MdOutlineClose } from 'react-icons/md';

import { ModalContext } from '../../context/ModalContext';

const Modal = () => {
  const { openModal, setOpenModal } = useContext(ModalContext);
  return (
    <>
      {openModal && (
        <div className="w-full h-full bg-hunterGreen/80 backdrop-blur-[10px] z-50 fixed top-0 flex flex-col gap-y-4 items-center justify-evenly">
          <div className="w-full h-[100vh] overflow-y-auto py-8 flex flex-col gap-y-8 lg:gap-y-20 fixed top-0 items-center md:justify-center">
            <div
              className="absolute top-6 right-6 md:top-12 md:right-12"
              onClick={() => setOpenModal(false)}
            >
              <MdOutlineClose className="text-oldLace text-[1.5rem] md:text-[2.5rem] cursor-pointer" />
            </div>
            <h2 className="text-oldLace font-medium uppercase">
              Desenvolvedores
            </h2>
            <div className="flex flex-col items-center justify-center gap-y-10 md:flex-row md:gap-x-20">
              <CardModal
                name="Gabriel Torres"
                img="/modalCard0.png"
                linkedin="https://www.linkedin.com/in/gabriel-torres-2112b6212/"
                github="https://github.com/gtorrespcode"
                siteLink="https://gabriel-torres-portfolio.netlify.app/"
                site="Site Pessoal"
                othersLink="https://estrategiadev.com/"
                others="Outros Projetos"
              />
              <CardModal
                name="João Vitor Cardoso"
                img="/modalCard1.png"
                linkedin="https://www.linkedin.com/in/jo%C3%A3o-vitor-cardoso-barbosa-407173225/"
                github="https://github.com/devjohn42"
                siteLink="https://devjohncode.vercel.app"
                site="Site Pessoal"
                othersLink="https://halloween-party-web.netlify.app/"
                others="Outros Projetos"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
