import { useEffect, useState } from 'react';
import { MdClose, MdMenu } from 'react-icons/md';
import { Link } from 'react-scroll';

const linkHoverStyle = `relative text-oldLace select-none cursor-pointer outline-none before:bg-[#ffffff] before:w-0 before:h-[2px] before:absolute before:bottom-0 before:left-0 
before:transition-all before:duration-500 hover:before:w-full`;

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);
  const watchingResize = () => {
    if (window.innerWidth >= 1024) {
      setNavOpen(false);
    }
  };

  const handleCloseNav = () => {
    setNavOpen(false);
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
          <Link
            to="home"
            className={`${linkHoverStyle}`}
            smooth={true}
            duration={800}
            delay={300}
          >
            Início
          </Link>
          <Link
            to="about"
            className={`${linkHoverStyle}`}
            smooth={true}
            duration={800}
            delay={300}
          >
            Sobre
          </Link>
          <Link
            to="benefits"
            className={`${linkHoverStyle}`}
            smooth={true}
            duration={800}
            delay={300}
          >
            Benefícios
          </Link>
          <Link
            to="service"
            className={`${linkHoverStyle}`}
            smooth={true}
            duration={800}
            delay={300}
            offset={-110}
          >
            Atendimento
          </Link>
          <Link
            to="pricing"
            className={`${linkHoverStyle}`}
            smooth={true}
            duration={800}
            delay={300}
          >
            Planos
          </Link>
          <Link
            to="contact"
            className={`${linkHoverStyle}`}
            smooth={true}
            duration={800}
            delay={300}
          >
            Contato
          </Link>
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
          <Link
            to="home"
            className="text-center p-[0.5rem_0rem] bg-oldLace select-none"
            smooth={true}
            duration={800}
            delay={300}
            onClick={handleCloseNav}
          >
            Início
          </Link>
          <Link
            to="about"
            className="text-center p-[0.5rem_0rem] bg-oldLace select-none"
            smooth={true}
            duration={800}
            delay={300}
            onClick={handleCloseNav}
          >
            Sobre
          </Link>
          <Link
            to="benefits"
            className="text-center p-[0.5rem_0rem] bg-oldLace select-none"
            smooth={true}
            duration={800}
            delay={300}
            onClick={handleCloseNav}
          >
            Benefícios
          </Link>
          <Link
            to="service"
            className="text-center p-[0.5rem_0rem] bg-oldLace select-none"
            smooth={true}
            duration={800}
            delay={300}
            offset={-110}
            onClick={handleCloseNav}
          >
            Atendimento
          </Link>
          <Link
            to="pricing"
            className="text-center p-[0.5rem_0rem] bg-oldLace select-none"
            smooth={true}
            duration={800}
            delay={300}
            onClick={handleCloseNav}
          >
            Planos
          </Link>
          <Link
            to="contact"
            className="text-center p-[0.5rem_0rem] bg-oldLace select-none"
            smooth={true}
            duration={800}
            delay={300}
            onClick={handleCloseNav}
          >
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
