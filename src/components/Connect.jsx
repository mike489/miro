import Heroimg from "../assets/img/goggl.svg";

const Connect = () => {
  return (
    <article className="px-4 md:px-[8%] py-20">
      <section className="flex flex-col md:flex-row items-center justify-between ">
        <img
          src={Heroimg}
          alt="Hero image"
          className="w-full md:w-1/2 max-w-full md:max-w-[550px] object-cover"
        />
        <div className="w-[30%] flex flex-col gap-5 pt-5 md:pt-10  font-bold ">
          <h1 className="font-extrabold text-3xl md:text-4xl w-[85%]">
            Empower Your Systems, Maximize Efficiency
          </h1>
          <p className="max-w-full font-normal text-secondary">
            Our solutions integrate effortlessly with your favorite tools,
            ensuring smooth workflows and optimized productivity. Yam helps you
            streamline operations without disruption.
          </p>
          <a href="" className="text-primary font-medium underline">
            Learn more
          </a>
        </div>
      </section>
    </article>
  );
};

export default Connect;
