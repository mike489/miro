import arrow from "../assets/icon/Sign.svg";
const Collaborate = () => {
  return (
    <article className="py-16 px-[8%]">
      <div className="text-center mb-12 w-1/2 items-center justify-center mx-auto">
        <h2 className="bg-yellow-400 text-sm text-black inline-block p-1 font-medium ml-96 mb-10 rotate-[20deg]">
          YOUR IDEA STARTS HERE
        </h2>
        <h1 className="text-5xl font-bold  text-secondary text-center">
          Collaborate without constraints
        </h1>
      </div>

      <section className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-12">
        <div className=" p-6 max-w-sm">
          <h1 className="text-xl font-bold text-secondary mb-4">
            Free forever
          </h1>
          <p className="text-gray-700">
            Our free plan gives you unlimited team members, 3 boards, and 300+
            expert-made templates. Signing up with your work email lets you
            bring in your team faster. See our pricing plans for more features.
          </p>
        </div>
        <div className="p-6 max-w-sm">
          <h1 className="text-xl font-bold text-secondary  mb-4">
            Easy integrations
          </h1>
          <p className="text-gray-700">
            Our free plan gives you unlimited team members, 3 boards, and 300+
            expert-made templates. Signing up with your work email lets you
            bring in your team faster. See our pricing plans for more features.
          </p>
        </div>
        <div className=" p-6 max-w-sm">
          <h1 className="text-xl font-bold text-secondary mb-4">
            Security first
          </h1>
          <p className="text-gray-700">
            Our free plan gives you unlimited team members, 3 boards, and 300+
            expert-made templates. Signing up with your work email lets you
            bring in your team faster. See our pricing plans for more features.
          </p>
        </div>
      </section>

      <div className="text-center">
        <button className="bg-primary p-3 rounded-full text-white font-medium px-8">
          <img src={arrow} alt="" />
        </button>
      </div>
    </article>
  );
};

export default Collaborate;
