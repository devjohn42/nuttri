import Home from './components/Home';
import Nav from './components/Nav';
import About from './components/About';
import Benefits from './components/Benefits';
import Divisor from './components/global/Divisor';
import Service from './components/Service';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
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
    </>
  );
};

export default App;
