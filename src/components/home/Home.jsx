import "./Home.scss";
import Disease from "./disease/Disease";
import Intro from "./intro/Intro";
import Facts from "./facts/Facts";
import SlickCarousel from "./slick-carousel/SlickCarousel";
import Know from "./know/Know";
import Footer from "./footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Intro />
      <Disease />
      <Facts />
      <SlickCarousel />
      <Know />
      <Footer />
    </div>
  );
};

export default Home;
