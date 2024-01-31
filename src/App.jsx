import Home from './components/Home';
import Nav from './components/Nav';
import About from './components/About';
import Benefits from './components/Benefits';
import Divisor from './components/global/Divisor';
import Service from './components/Service';
import Pricing from './components/Pricing/Pricing';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Modal from './components/Modal/Modal';
import { ModalProvider } from './context/ModalContext';

const App = () => {
  return (
    <>
      <ModalProvider>
        <Modal />
        <Nav />
        <Home />
        <About />
        <Benefits />
        <Divisor />
        <Service />
        <Pricing />
        <Testimonials />
        <Contact />
        <Footer />
      </ModalProvider>
    </>
  );
};

export default App;
