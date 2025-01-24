import { Link } from "react-router-dom";
import Heroimg from "../assets/img/headerimage.svg";

const Hero = () => {
  return (
    <article className="px-4 md:px-[5%] py-10 md:py-20">
      <section className="flex flex-col md:flex-row items-center justify-center gap-10">
        <div className="flex-grow flex flex-col gap-5 md:gap-8 pt-5 md:pt-10 font-bold max-w-[90%] md:max-w-[40%]">
          <h1 className="font-extrabold text-2xl sm:text-3xl md:text-4xl leading-tight">
            Take Your Business from Vision to Reality
          </h1>
          <p className="font-normal text-secondary text-sm sm:text-base leading-relaxed">
            Yam Consulting Service is your trusted partner in IT and software
            solutions. We collaborate, consult, and create innovative software
            tailored to your business needs.
          </p>

          <div className="flex flex-col items-center gap-4 ">
            {/* <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
              className="block w-full max-w-[90%] md:max-w-full rounded-full bg-white px-3 py-2.5 text-sm sm:text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-primary"
            /> */}
            <Link
              to={"/contact us"}
              className="bg-primary text-center px-6 py-2 rounded-full w-full max-w-[90%] md:max-w-full text-white font-normal"
            >
              Contact Us
            </Link>
            <p className="text-sm text-gray-500">
              Empowering businesses with seamless IT solutions
            </p>
          </div>
        </div>

        <img
          src={Heroimg}
          alt="Hero image"
          className="w-full max-w-[90%] md:max-w-[550px] object-contain"
        />
      </section>
    </article>
  );
};

export default Hero;
