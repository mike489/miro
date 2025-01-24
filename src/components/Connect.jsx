import Heroimg from "../assets/img/goggl.svg";

const Connect = () => {
  return (
    <article id="AboutUs" className="px-4 sm:px-6 md:px-[8%] py-10 md:py-20">
      <section className="flex flex-col md:flex-row items-center justify-between gap-8">
        <img
          src={Heroimg}
          alt="Hero image"
          className="w-full md:w-1/2 max-w-full md:max-w-[550px] object-cover"
        />
        <div className="w-full md:w-[40%] flex flex-col gap-5 pt-5 md:pt-0 font-bold text-center md:text-left">
          <h1 className="font-extrabold text-2xl sm:text-3xl md:text-4xl w-full md:w-[85%] mx-auto md:mx-0">
            Empower Your Systems, Maximize Efficiency
          </h1>
          <p className="font-normal text-secondary text-sm sm:text-base mx-auto md:mx-0 w-full md:w-auto">
            Our solutions integrate effortlessly with your favorite tools,
            ensuring smooth workflows and optimized productivity. Yam helps you
            streamline operations without disruption.
          </p>
          <a
            href="#"
            className="text-primary font-medium underline text-sm sm:text-base"
          >
            Learn more
          </a>
        </div>
      </section>
    </article>
  );
};

export default Connect;
