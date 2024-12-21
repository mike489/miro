// import React from 'react'
import Heroimg from "../../assets/img/ux.svg";

const TeamLead = () => {
  return (
    <article className="px-4 md:px-[5%] py-16 text-secondary flex flex-col md:flex-row items-center md:items-start gap-10">
      {/* Text Section */}
      <section className="flex flex-col gap-8 md:w-1/2 font-bold">
        <h1 className="font-normal text-xl md:text-2xl w-[85%] uppercase">
          Seamlessly Manage Team Sessions with Efficient Tools
        </h1>
        <p className="font-normal text-[#050038B2]">
          Yam Consulting Service enhances the way you run meetings, training
          sessions, and workshops. Whether you’re organizing an internal team
          meeting or hosting a large-scale workshop, our tools ensure every
          session is productive.
          <ul>
            <li className="">
              <span className="font-semibold">Real-Time Collaboration</span>:
              Engage participants with interactive activities, polls, and shared
              whiteboards.
            </li>
            <li className="">
              <span className="font-semibold">Structured Agendas</span>: Create
              and follow workshop agendas to stay on track and achieve session
              goals.
            </li>
            <li className="">
              <span className="font-semibold">Feedback Mechanisms</span>:
              Collect and analyze participant feedback to improve future
              workshops.
            </li>
            <li className="">
              <span className="font-semibold">Flexible Platforms</span>: Host
              workshops in-person, virtually, or in hybrid formats without
              compromising engagement.
            </li>
          </ul>
        </p>
        <a href="" className="text-primary font-medium underline">
          Learn more
        </a>
      </section>

      {/* Image Section */}
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

export default TeamLead;
