import Cloudyimg from "../assets/img/cloudy.png";

const Cloudy = () => {
  return (
    <article className="relative flex justify-center items-center w-full px-4 sm:px-8 lg:px-[10%]">
      {/* Image */}
      <img
        src={Cloudyimg}
        alt="Cloudy background"
        className="w-full h-full object-cover rounded-t-3xl"
      />

      <div className="absolute inset-0 flex flex-col justify-center items-end px-4 sm:px-8 lg:px-[11%] space-y-4">
        <div className="text-center sm:text-right space-y-4">
          <h1 className="text-2xl sm:text-xl md:text-2xl lg:text-4xl font-bold md:mr-36 mr-0">
            The Yam Way
          </h1>
          <h1 className="text-2xl sm:text-xl lg:text-4xl font-bold md:mr-44 mr-0">
            We Work
          </h1>
          <p className="text-sm sm:text-sms lg:text-lg ml-auto md:w-1/2 sm:w-1/2 md:text-start sm:items-center">
            Our philosophy revolves around innovation, collaboration, and
            customer-centric solutions. We blend cutting-edge technology with a
            personalized approach, helping businesses thrive in a competitive
            digital landscape.
          </p>
        </div>
        <button className="bg-primary p-2 md:p-2 sm:p-1 rounded-full text-white font-medium px-6 sm:px-5 md:mr-40">
          View the Report
        </button>
      </div>
    </article>
  );
};

export default Cloudy;
