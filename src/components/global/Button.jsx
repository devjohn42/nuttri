import React, { useContext } from 'react';
import { ModalContext } from '../../context/ModalContext';

const Button = () => {
  const { setOpenModal } = useContext(ModalContext);
  return (
    <button
      className="bg-hunterGreen text-oldLace p-[0.5rem_1.3rem] border-[2px] border-hunterGreen hover:rounded-[0.5rem] hover:scale-[1.05] hover:bg-oldLace hover:text-hunterGreen duration-[350ms] cursor-pointer"
      onClick={() => setOpenModal(true)}
    >
      <p className="font-medium uppercase">Saiba Mais</p>
    </button>
  );
};

export default Button;
