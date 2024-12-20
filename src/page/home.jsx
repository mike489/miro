import Built from "../components/Built";
import Cloudy from "../components/Cloudy";
import Collaborate from "../components/Collaborate";
import Connect from "../components/Connect";
import Hero from "../components/Hero";
import Testimonial from "../components/Testimonial";
import Trusted from "../components/Trusted";
import Why from "../components/Why";
import Work from "../components/Work";

const Home = () => {
  return (
    <div>
      <Hero />
      <Trusted />
      <Collaborate />
      <Work />
      <Connect />
      <Cloudy />
      <Built />
      <Why />
      <Testimonial />
    </div>
  );
};

export default Home;
