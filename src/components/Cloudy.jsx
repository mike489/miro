import Cloudyimg from "../assets/img/cloudy.png";

const Cloudy = () => {
  return (
    <article className="relative flex justify-center items-center w-full  px-[10%]">
      {/* Image */}
      <img
        src={Cloudyimg}
        alt="Cloudy background"
        className="w-full h-full object-cover rounded-t-3xl"
      />

      <div className="absolute right-10 top-1/2 transform text-secondary -translate-y-1/2 text-right space-y-4 px-[8%]">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-4xl font-bold  ml-auto">The Yam Way</h1>
          <h1 className="text-4xl font-bold text-center ml-auto">We Work</h1>
          <p className="text-lg w-[40%] text-start ml-auto">
            Our philosophy revolves around innovation, collaboration, and
            customer-centric solutions. We blend cutting-edge technology with a
            personalized approach, helping businesses thrive in a competitive
            digital landscape.
          </p>
        </div>
        <button className="bg-primary p-3 rounded-full text-white font-medium px-8 mr-20">
          View the Report
        </button>
      </div>
    </article>
  );
};

export default Cloudy;
