import Heroimg from "../assets/img/headerimage.svg";
import Mobile from "../assets/img/mob.png";

const Work = () => {
  return (
    <article className="px-4 sm:px-6 md:px-[8%] py-10 md:py-20">
      <section className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10">
        {/* Left Section with Text */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 sm:gap-8 font-bold text-center md:text-left">
          <h1 className="font-extrabold text-2xl sm:text-3xl md:text-4xl w-full md:w-[85%] mx-auto md:mx-0">
            Work Anytime, Anywhere
          </h1>
          <p className="font-normal text-sm sm:text-base text-secondary w-full sm:w-3/4 md:w-2/3 mx-auto md:mx-0">
            In a world of remote and hybrid teams, Yam Consulting Service
            enables seamless collaboration through our cloud-based, efficient
            solutions. Transform your workspace with technology that adapts to
            you.
          </p>
          <a
            href="#"
            className="text-primary font-medium underline text-sm sm:text-base"
          >
            Learn more
          </a>
        </div>

        {/* Right Section with Images */}
        <div className="flex flex-row items-center justify-center gap-4 sm:gap-6">
          <img
            src={Heroimg}
            alt="Hero image"
            className="w-[100px] h-[180px] sm:w-[120px] sm:h-[200px] md:w-[150px] md:h-[250px] object-cover rounded-t-2xl rounded-b-2xl"
          />
          <img
            src={Mobile}
            alt="Mobile image"
            className="w-[100px] h-[180px] sm:w-[120px] sm:h-[200px] md:w-[150px] md:h-[250px] object-cover -translate-y-3 sm:-translate-y-5 rounded-t-2xl rounded-b-2xl"
          />
          <img
            src={Heroimg}
            alt="Hero image"
            className="w-[100px] h-[180px] sm:w-[120px] sm:h-[200px] md:w-[150px] md:h-[250px] object-cover rounded-t-2xl rounded-b-2xl"
          />
        </div>
      </section>
    </article>
  );
};

export default Work;
