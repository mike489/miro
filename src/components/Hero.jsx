import Heroimg from "../assets/img/headerimage.svg";

const Hero = () => {
  return (
    <article className="px-4 md:px-[5%] py-20">
      <section className="flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Text Section */}
        <div className="w-[30%] flex flex-col gap-8 pt-5 md:pt-10  font-bold ">
          <h1 className="font-extrabold text-3xl md:text-4xl w-[85%]">
            Take ideas from better to best
          </h1>
          <p className="max-w-full font-normal text-secondary">
            Miro is your team&apos;s visual platform to connect, collaborate,
            and create — together
          </p>

          <div className="w-full flex flex-col items-center gap-5">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
              className="block w-full rounded-full bg-white px-3 py-2.5 text-base text-gray-900  outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-primary sm:text-sm "
            />
            <button className="bg-primary p-2 rounded-full w-full bg-[#4262FF] text-white font-normal pl-5 pr-5">
              Sign Up free
            </button>
            <h1 className="items-start font-extralight text-sm text-gray-500 mr-20">
              Collaborate with your team within minutes
            </h1>
          </div>
        </div>
        {/* Image Section */}
        <img
          src={Heroimg}
          alt="Hero image"
          className="w-full md:w-1/2 max-w-full md:max-w-[550px] object-cover"
        />
      </section>
    </article>
  );
};

export default Hero;
