
import Collaborate from "../components/Collaborate";
import Connect from "../components/Connect";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavBar from "../components/Navbar";
import Trusted from "../components/Trusted";
import Work from "../components/Work";

const Home = () => {
  return (
    <div>
        <NavBar />
      <Hero />
      <Trusted />
      <Collaborate />
      <Work />
      <Connect />
      <Footer />
    </div>
  );
};

export default Home;
