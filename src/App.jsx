import "./app.scss"
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Expr from "./components/expr/Expr";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WorkExp from "./components/work-exp/WorkExp";
import Skills from "./components/skills/Skills";

const App = () => {
  return <div>
    <Cursor/>
    <section id="Homepage">
      <Navbar/>
      <Hero />
    </section>
    <section id="Services"><Parallax type="services"/></section>
    {/* <section><Services/></section> */}
    {/* Expr is for slider carousel view */}
    {/* <Expr/> */}
    <Skills/>
    {/* <section id="FullTime"><WorkExp type="fulltime"/></section>
    <section id="Intern"><WorkExp type="internship"/></section> */}
    <div id="FullTime"><WorkExp type="fulltime"/></div>
    <div id="Intern"><WorkExp type="internship"/></div>
    <section id="Portfolio"><Parallax type="portfolio"/></section>
    <Portfolio/>
    <section id="Contact">
      <Contact/>
    </section>
  </div>;
};

export default App;
