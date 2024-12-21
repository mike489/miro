import arrow from "../assets/icon/Sign.svg";

const Collaborate = () => {
  return (
    <article className="py-10 sm:py-16 px-4 sm:px-8 lg:px-[8%]">
      {/* Heading Section */}
      <div className="text-center mb-8 sm:mb-12 max-w-2xl mx-auto">
        <h2 className="bg-yellow-400 text-xs sm:text-sm text-black inline-block px-2 py-1 font-medium mb-4 transform rotate-[10deg]">
          YOUR IDEA STARTS HERE
        </h2>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-secondary">
          Collaborate without constraints
        </h1>
      </div>

      {/* Content Section */}
      <section className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 mb-8 sm:mb-12">
        {[
          {
            title: "Tailored Solutions for Every Business",
            description:
              "Every business is unique, and so are its challenges. That’s why we offer personalized software solutions that align perfectly with your objectives. From startups to enterprises, our scalable systems are designed to support your growth every step of the way.",
          },
          {
            title: "Effortless Integration",
            description:
              "Streamline your operations with software that fits seamlessly into your existing systems. Our team ensures smooth deployment and minimizes downtime, so you can focus on achieving your business goals. No need for disruptions—our solutions adapt to your workflows effortlessly.",
          },
          {
            title: "Cutting-Edge Security",
            description:
              "Security is at the core of everything we do. With Yam, you benefit from enterprise-grade encryption, multi-layered protection, and regular security updates. Safeguard your business data, protect your customers' information, and operate with peace of mind knowing you’re backed by industry-leading security protocols.",
          },
        ].map((item, index) => (
          <div key={index} className="p-4 sm:p-6 max-w-md">
            <h1 className="text-lg sm:text-xl font-bold text-secondary mb-3">
              {item.title}
            </h1>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </section>

      <div className="text-center">
        <button className="bg-primary p-3 sm:p-4 rounded-full text-white font-medium">
          <img src={arrow} alt="arrow" />
        </button>
      </div>
    </article>
  );
};

export default Collaborate;
