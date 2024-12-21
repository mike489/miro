import Heroimg from "../../assets/img/Brainstorm.svg";

const Admin = () => {
  return (
    <article className="px-4 md:px-[5%] py-16 text-secondary flex flex-col md:flex-row items-center md:items-start gap-10">
      <section className="flex flex-col gap-8 md:w-1/2 font-bold">
        <h1 className="font-normal text-3xl md:text-4xl w-[85%] uppercase">
          Brainstorming
        </h1>
        <p className="font-normal text-[#050038B2]">
          At Yam Consulting Service, we provide tools that revolutionize
          brainstorming sessions. Whether you&apos;re in the ideation phase or
          refining existing concepts, our solutions enable teams to collaborate
          in real-time, regardless of location
          <ul>
            <li className="">
              <span className="font-semibold">Visual Collaboration</span>: Use
              digital whiteboards, mind maps, and flowcharts to turn ideas into
              actionable plans.
            </li>
            <li className="">
              <span className="font-semibold">Team Alignment</span>: Use Keep
              everyone on the same page with centralized tools for documenting
              ideas, sharing feedback, and prioritizing tasks.
            </li>
            <li className="">
              <span className="font-semibold">Innovative Templates</span>: Use
              Access pre-built brainstorming templates to streamline creativity
              and save time.
            </li>
          </ul>
        </p>
        <a href="" className="text-primary font-medium underline">
          Learn more
        </a>
      </section>

      <div className="md:w-1/2">
        <img
          src={Heroimg}
          alt="Hero image"
          className="w-full h-full object-cover"
        />
      </div>
    </article>
  );
};

export default Admin;
