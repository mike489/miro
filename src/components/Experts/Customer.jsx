// import React from 'react'
import Heroimg from "../../assets/img/headerimage.svg";

const Customer = () => {
  return (
    <article className="px-4 md:px-[5%] py-16 text-secondary flex flex-col md:flex-row items-center md:items-start gap-10">
      {/* Text Section */}
      <section className="flex flex-col gap-8 md:w-1/2 font-bold">
        <h1 className="font-normal text-xl md:text-2xl w-[85%] uppercase">
          Enhance Client Interactions with Tailored Software
        </h1>
        <p className="font-normal text-[#050038B2]">
          Building meaningful relationships with your customers has never been
          easier. Yam Consulting Service provides customer engagement solutions
          that help you connect with clients in ways that are personalized,
          effective, and measurable.
          <ul>
            <li className="">
              <span className="font-semibold">CRM Integration</span>: Manage
              customer data, track interactions, and automate follow-ups with
              advanced Customer Relationship Management tools.
            </li>
            <li className="">
              <span className="font-semibold">Omnichannel Communication</span>:
              Stay connected with your clients across email, chat, social media,
              and other channels from one centralized platform.
            </li>
            <li className="">
              <span className="font-semibold">Feedback Mechanisms</span>:
              Collect and analyze participant feedback to improve future
              workshops.
            </li>
            <li className="">
              <span className="font-semibold">Personalized Experiences</span>:
              Use data-driven insights to tailor interactions and exceed
              customer expectations.
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

export default Customer;
