import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="w-full p-[2rem_0rem] flex flex-col gap-y-4 md:flex-row items-center justify-around">
      <img
        src="/greenLogo.png"
        alt=""
        className="w-[50px] sm:w-[70px] md:w-[100px]"
      />
      <nav className="flex gap-x-3 flex-wrap  justify-center">
        <Link
          to="home"
          className="cursor-pointer text-[0.875rem] sm:text-[20px] font-medium"
          smooth={true}
          duration={800}
          delay={300}
        >
          Início
        </Link>
        <Link
          to="about"
          className="cursor-pointer text-[0.875rem] sm:text-[20px] font-medium"
          smooth={true}
          duration={800}
          delay={300}
        >
          Sobre
        </Link>
        <Link
          to="benefits"
          className="cursor-pointer text-[0.875rem] sm:text-[20px] font-medium"
          smooth={true}
          duration={800}
          delay={300}
        >
          Benefícios
        </Link>
        <Link
          to="service"
          className="cursor-pointer text-[0.875rem] sm:text-[20px] font-medium"
          smooth={true}
          duration={800}
          delay={300}
          offset={-110}
        >
          Atendimento
        </Link>
        <Link
          to="pricing"
          className="cursor-pointer text-[0.875rem] sm:text-[20px] font-medium"
          smooth={true}
          duration={800}
          delay={300}
        >
          Planos
        </Link>
        <Link
          to="contact"
          className="cursor-pointer text-[0.875rem] sm:text-[20px] font-medium"
          smooth={true}
          duration={800}
          delay={300}
        >
          Contato
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
