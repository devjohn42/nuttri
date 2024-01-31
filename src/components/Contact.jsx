import { useContext, useState } from 'react';
import { FaFacebook, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { ModalContext } from '../context/ModalContext';

const Contact = () => {
  const { setOpenModal } = useContext(ModalContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const inputStyle = 'outline-none px-4 mb-6 py-2 border-[1px] rounded-md';

  return (
    <div
      id="contact"
      className=" bg-hunterGreen flex w-full justify-center h-screen"
    >
      <div className=" xl:w-2/4 w-full md:w-[95%]  flex flex-col justify-evenly items-center">
        <h2 className=" font-bold uppercase text-oldLace">Fale com a gente!</h2>
        <div className=" bg-oldLace md:w-4/6 flex justify-center">
          <form
            className="lg:text-xl text-lg w-[95%] flex flex-col gap-y-2 p-6 lg:p-12"
            onSubmit={handleSubmit}
          >
            <label htmlFor="Nome">Nome</label>
            <input
              className={inputStyle}
              type="text"
              name="name"
              id="name"
              placeholder="Nome"
              value={formData.name}
              onChange={handleChange}
            />
            <label htmlFor="Email">Email</label>
            <input
              className={inputStyle}
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <label htmlFor="message">Mensagem</label>
            <textarea
              className={`${inputStyle} resize-none h-40`}
              name="message"
              id="message"
              cols="30"
              rows="4"
              placeholder="Escreva aqui"
              value={formData.message}
              onChange={handleChange}
            />
            <button
              type="submit"
              className=" mb-6 text-base py-2 text-oldLace uppercase bg-hunterGreen hover:rounded-[0.5rem] hover:scale-[1.05] border-[2px] border-hunterGreen hover:bg-oldLace hover:text-hunterGreen duration-[350ms] cursor-pointer"
              onClick={() => setOpenModal(true)}
            >
              Enviar
            </button>
            <div className="text-3xl self-center flex gap-x-2">
              <FaWhatsapp /> <FaFacebook /> <FaInstagram />
            </div>
          </form>
        </div>
      </div>
      <div className="xl:w-2/4 hidden lg:flex lg:bg-contactImg lg:bg-center lg:bg-fixed"></div>
    </div>
  );
};

export default Contact;
