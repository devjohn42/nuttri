const Service = () => {
  return (
    <section
      id="service"
      className="w-full flex flex-col items-center lg:items-stretch gap-y-4 py-6"
    >
      <div className="p-[0rem_1rem] flex flex-col gap-y-6 flex-wrap md:flex-row items-center justify-evenly">
        <img
          src="/online.jpg"
          alt=""
          className="hidden lg:flex md:w-[400px] lg:w-[500px]"
        />
        <div className="w-[300px] sm:w-[350px] md:w-[400px] lg:w-[450px] flex flex-col gap-y-4">
          <h2 className="font-bold">Atendimento Online</h2>
          <div className="flex flex-col gap-y-2">
            <p className="text-justify font-medium">
              Nossa opção de atendimento online foi projetada para oferecer a
              conveniência de receber orientações nutricionais de qualquer
              lugar.
            </p>
            <p className="text-justify font-medium">
              Através de videochamadas interativas, estaremos virtualmente
              conectados para discutir suas metas de saúde, analisar sua
              alimentação atual e traçar um plano nutricional personalizado.
            </p>
          </div>
        </div>
      </div>
      <div className="p-[1rem] flex flex-col gap-y-6 flex-wrap md:flex-row-reverse items-center justify-evenly">
        <div>
          <img
            src="/personal.jpg"
            alt=""
            className="hidden lg:flex md:w-[400px] lg:w-[500px]"
          />
        </div>
        <div className="w-[300px] sm:w-[350px] md:w-[400px] lg:w-[450px] flex flex-col gap-y-4">
          <h2 className="font-bold">Atendimento presencial</h2>
          <div className="flex flex-col gap-y-2">
            <p className="text-justify font-medium">
              Nossa opção de atendimento presencial oferece a oportunidade de
              nos encontrarmos pessoalmente para discutir suas metas de saúde e
              trabalhar juntos em direção a uma jornada de bem-estar.
            </p>
            <p className="text-justify font-medium">
              Durante nossas sessões, poderemos estabelecer uma conexão direta,
              analisar suas necessidades individuais e criar um plano
              nutricional específico para você.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
