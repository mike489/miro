// import React from 'react'
import Heroimg from "../../assets/img/ux.svg";

const HelpDesk = () => {
  return (
    <article className="px-4 md:px-[5%] py-16 text-secondary flex flex-col md:flex-row items-center md:items-start gap-10">
      <section className="flex flex-col gap-8 md:w-1/2 font-bold">
        <h1 className="font-normal text-3xl md:text-4xl w-[85%] uppercase">
          Engineering
        </h1>
        <p className="font-normal text-[#050038B2]">
          Our engineering solutions are designed to address complex challenges,
          ensuring that your software infrastructure is robust, scalable, and
          future-proof.
          <ul>
            <li className="">
              <span className="font-semibold">Custom Software Development</span>
              : Build applications specifically designed for your business
              needs.
            </li>
            <li className="">
              <span className="font-semibold">Code Collaboration</span>:
              Facilitate teamwork with integrated version control and debugging
              tools.
            </li>
            <li className="">
              <span className="font-semibold">Testing and Deployment</span>:
              Accelerate your development lifecycle with automated testing and
              seamless deployment options.
            </li>
            <li className="">
              <span className="font-semibold">Agile Workflow</span>: Align your
              engineering teams with agile processes for faster, more efficient
              results.
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

export default HelpDesk;
