import { useEffect, useState } from 'react';
import { MdClose, MdMenu } from 'react-icons/md';

const linkHoverStyle = `relative text-oldLace select-none outline-none before:bg-[#ffffff] before:w-0 before:h-[2px] before:absolute before:bottom-0 before:left-0 
before:transition-all before:duration-500 hover:before:w-full`;

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);
  const watchingResize = () => {
    if (window.innerWidth >= 1024) {
      setNavOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', watchingResize);
    // console.log(window.innerWidth)
  }, []);
  return (
    <header className="w-full bg-hunterGreen absolute top-0 left-0 p-[0.75rem_0rem] lg:p-[1rem_0rem]">
      <div className="flex items-center justify-around">
        <img
          src="/lightLogo.svg"
          alt="logo"
          className="w-[50px] lg:w-[65px] select-none"
        />
        <div className="flex lg:hidden">
          {navOpen ? (
            <MdClose
              className="text-[2rem] text-oldLace cursor-pointer"
              onClick={() => {
                setNavOpen(!navOpen);
              }}
            />
          ) : (
            <MdMenu
              className="text-[2rem] text-oldLace cursor-pointer"
              onClick={() => {
                setNavOpen(!navOpen);
              }}
            />
          )}
        </div>
        <nav className="hidden lg:flex items-center gap-x-8">
          <a href="" className={`${linkHoverStyle}`}>
            Início
          </a>
          <a href="" className={`${linkHoverStyle}`}>
            Sobre
          </a>
          <a href="" className={`${linkHoverStyle}`}>
            Benefícios
          </a>
          <a href="" className={`${linkHoverStyle}`}>
            Planos
          </a>
          <a href="" className={`${linkHoverStyle}`}>
            Contato
          </a>
        </nav>
      </div>
      <div
        className={
          navOpen
            ? 'bg-hunterGreen w-full p-[0rem_0.5rem_0.5rem_0.5rem] absolute z-10 flex justify-center items-center'
            : 'hidden'
        }
      >
        <nav className="w-full flex flex-col gap-y-1 ">
          <a
            href=""
            className="text-center p-[0.5rem_0rem] bg-oldLace select-none"
          >
            Início
          </a>
          <a
            href=""
            className="text-center p-[0.5rem_0rem] bg-oldLace select-none"
          >
            Sobre
          </a>
          <a
            href=""
            className="text-center p-[0.5rem_0rem] bg-oldLace select-none"
          >
            Benefícios
          </a>
          <a
            href=""
            className="text-center p-[0.5rem_0rem] bg-oldLace select-none"
          >
            Planos
          </a>
          <a
            href=""
            className="text-center p-[0.5rem_0rem] bg-oldLace select-none"
          >
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
