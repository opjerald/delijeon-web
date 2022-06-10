import Hero from "../components/Hero";
import { slider } from "../assets/data/ImageSlider";

const Home = () => {
  return (
    <>
      <Hero slider={slider} />
    </>
  );
};

export default Home;
