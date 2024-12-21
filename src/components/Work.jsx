import Heroimg from "../assets/img/headerimage.svg";
import Mobile from "../assets/img/mob.png";

const Work = () => {
  return (
    <article className="px-4 md:px-[8%] py-20">
      <section className="flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Left Section with Text */}
        <div className="flex w-1/2 flex-col gap-8 pt-5 md:pt-10 font-bold">
          <h1 className="font-extrabold text-3xl md:text-4xl w-[85%]">
            Work Anytime, Anywhere
          </h1>
          <p className="max-w-full w-2/3 font-normal text-sm text-secondary">
            In a world of remote and hybrid teams, Yam Consulting Service
            enables seamless collaboration through our cloud-based, efficient
            solutions. Transform your workspace with technology that adapts to
            you.
          </p>
          <a href="" className="text-primary font-medium underline">
            Learn more
          </a>
        </div>

        <section className="flex flex-row items-center justify-center gap-6">
          <img
            src={Heroimg}
            alt="Hero image"
            className="w-[150px] h-[250px] object-cover rounded-t-2xl rounded-b-2xl"
          />
          <img
            src={Mobile}
            alt="Hero image"
            className="w-[150px] h-[250px] object-cover -translate-y-5 rounded-t-2xl rounded-b-2xl"
          />
          <img
            src={Heroimg}
            alt="Hero image"
            className="w-[150px] h-[250px] object-cover rounded-t-2xl rounded-b-2xl"
          />
        </section>
      </section>
    </article>
  );
};

export default Work;
