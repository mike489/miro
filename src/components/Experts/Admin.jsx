import Heroimg from "../../assets/img/Brainstorm.svg";

const Admin = () => {
  return (
    <article className="px-4 md:px-[5%] py-16 text-secondary flex flex-col md:flex-row items-center md:items-start gap-10">
      <section className="flex flex-col gap-8 md:w-1/2 font-bold">
        <h1 className="font-normal text-3xl md:text-4xl w-[85%] uppercase">
          Brainstorming
        </h1>
        <p className="font-normal text-[#050038B2]">
          At the heart of our Complaint Management system lies a commitment to
          enhancing the overall customer experience and improving operational
          efficiency. Our goal is to implement a robust support management
          solution that addresses key service challenges and prioritizes
          customer satisfaction.
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
