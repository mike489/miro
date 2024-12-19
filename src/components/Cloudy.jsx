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

      {/* Overlay Content */}
      <div className="absolute right-10 top-1/2 transform  text-secondary -translate-y-1/2 text-right space-y-4 px-[8%]">
        <h1 className="text-4xl font-bold text-center">The Ways</h1>
        <h1 className="text-4xl font-bold text-center">We Work</h1>
        <p className="text-lg">How has our relationship with work changed?</p>
        <button className="bg-primary p-3 rounded-full text-white font-medium px-8 mr-20">
          View the Report
        </button>
      </div>
    </article>
  );
};

export default Cloudy;
