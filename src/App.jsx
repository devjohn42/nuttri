
import Home from "./components/Home";
import Nav from "./components/nav";
import About from "./components/About";
import Benefits from "./components/Benefits";
import Service from "./components/Service";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Nav />
      <Home />
      <About />
      <Benefits/>
      <Service/>
      <Pricing/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default App;
