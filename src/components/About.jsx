const About = () => {
  return (
    <section
      id="about"
      className="bg-about bg-cover bg-center w-full h-screen relative"
    >
      <div className="bg-hunterGreen w-full lg:w-[850px] p-[1.25rem] sm:p-[3rem] lg:p-[6rem] absolute top-16 lg:right-8 flex flex-col gap-y-5 items-center justify-center">
        <h2 className="text-oldLace font-bold">
          Promovemos Saúde e Bem-Estar Através da Nutrição
        </h2>
        <p className="text-oldLace">
          Bem-vindo à nossa jornada em direção a uma vida mais saudável e
          vibrante! Na Nuttri, nossa missão é inspirar e capacitar você a
          alcançar seus objetivos de saúde por meio de uma abordagem holística à
          nutrição.{' '}
        </p>
      </div>
      <div className="bg-hunterGreen w-full p-[1.75rem_1.25rem] absolute bottom-12 lg:bottom-20 flex flex-col gap-y-4 items-center justify-center">
        <p className="text-oldLace text-center">
          "A nutrição não é apenas sobre o que você coloca em seu prato, mas
          também sobre como você se sente quando se senta à mesa. "
        </p>
        <p className="text-teaGreen">Rhiannon Lambert</p>
      </div>
    </section>
  );
};

export default About;
