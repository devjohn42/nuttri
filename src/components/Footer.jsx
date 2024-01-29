const Footer = () => {
  return (
    <footer className="w-full p-[2rem_0rem] flex flex-col gap-y-4 md:flex-row items-center justify-around">
      <img
        src="/greenLogo.png"
        alt=""
        className="w-[50px] sm:w-[70px] md:w-[100px]"
      />
      <nav className="flex gap-x-3">
        <a href="" className={'text-[1rem] sm:text-[20px] font-medium'}>
          Início
        </a>
        <a href="" className={'text-[1rem] sm:text-[20px] font-medium'}>
          Sobre
        </a>
        <a href="" className={'text-[1rem] sm:text-[20px] font-medium'}>
          Benefícios
        </a>
        <a href="" className={'text-[1rem] sm:text-[20px] font-medium'}>
          Planos
        </a>
        <a href="" className={'text-[1rem] sm:text-[20px] font-medium'}>
          Contato
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
