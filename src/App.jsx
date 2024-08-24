import Header from "./components/Header.jsx";
import Head from "./components/Head.jsx";
import About from "./components/About.jsx";
import Service from "./components/Service.jsx";
import Faq from "./components/Faq.jsx";
import Contact from "./components/Contact.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div id="home">
        <Head />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="service">
        <Service />
      </div>
      <div id="faq">
        <Faq />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}

export default App;
