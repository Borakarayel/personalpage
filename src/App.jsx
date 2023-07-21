import Experties from "./components/Experties/Experties.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import People from "./components/People/People.jsx";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import Works from "./components/Works/Works.jsx";
import css from "./styles/app.module.scss";

const App = () => {
  return (
    <div className={css.container}>
      <Header />
      <Hero />
      <Experties />
      <Works />
      <Portfolio /> 
      {/* <People /> */}
      <Footer/>
    </div>
  );
};

export default App;
