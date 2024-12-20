import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./page/home";
import ContactUs from "./page/ContactUs";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
