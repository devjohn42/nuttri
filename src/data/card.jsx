import { FaRegHeart } from "react-icons/fa";
import { ImPower } from "react-icons/im";
import { SlLike } from "react-icons/sl";
import { FaHandshake } from "react-icons/fa6";
import { FaHandHoldingHeart } from "react-icons/fa";
import { AiOutlineEdit } from "react-icons/ai";

export const cards = [
  {
    title: "Saúde Duradoura",
    bg: "bg-cardOne",
    icon: <FaRegHeart />,
    message:
      "Personalizamos seu plano para atingir metas como emagrecimento e energia, promovendo resultados reais e sustentáveis.",
  },

  {
    title: "Empoderamento Nutricional",
    bg: "bg-cardTwo",
    icon: <ImPower />,
    message:
      "Educamos sobre nutrição para que você tome decisões informadas e nutritivas, com confiança.",
  },

  {
    title: "Relação Positiva com a Comida",
    bg: "bg-cardThree",
    icon: <SlLike />,
    message:
      "Vamos eliminar culpa alimentar e construir uma mentalidade flexível e prazerosa em relação à comida.",
  },

  {
    title: "Apoio Contínuo",
    bg: "bg-cardFour",
    icon: <FaHandshake />,
    message:
      "Estaremos ao seu lado a cada passo, ajustando o plano conforme necessário e celebrando suas vitórias.",
  },

  {
    title: "Vitalidade Diária",
    bg: "bg-cardFive",
    icon: <FaHandHoldingHeart />,
    message:
      "Vamos criar um futuro cheio de vitalidade, onde você acorda revigorado e pronto para enfrentar o dia.",
  },

  {
    title: "Personalização Total",
    bg: "bg-cardSix",
    icon: <AiOutlineEdit />,
    message:
      "Seu plano é totalmente adaptado às suas preferências e necessidades, garantindo que cada passo seja adequado para você.",
  },
];
