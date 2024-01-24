import Button from './global/Button';

const Home = () => {
  return (
    <section className=" bg-home bg-fixed bg-cover bg-center w-full h-screen flex items-center justify-center lg:justify-start">
      <div className="w-full h-screen absolute"></div>
      <div className="bg-oldLace shadow-[3px_3px_10px_rgb(0,0,0,0.8)] w-[90%] lg:w-[850px] xl:w-[1030px] p-[1.25rem] lg:p-[2.5rem] lg:ml-12 absolute  flex flex-col items-start gap-y-[10px]">
        <h1 className="font-bold">
          Bem-vindo a Nuttri! Transformando vidas através da alimentação
          saudável
        </h1>
        <p className="mb-3">
          Conheça nosso programa de acompanhamento e conquiste o corpo que
          sempre sonhou.
        </p>
        <Button />
      </div>
    </section>
  );
};

export default Home;
