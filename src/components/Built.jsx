import { useState } from "react";
import Admin from "./Experts/Admin";
import HelpDesk from "./Experts/HelpDesk";
import TeamLead from "./Experts/TeamLead";
import Customer from "./Experts/Customer";
import ScrumEvents from "./Experts/ScrumEvents";

const Built = () => {
  const [selectedComponent, setSelectedComponent] = useState("Admin");

  const renderComponent = () => {
    switch (selectedComponent) {
      case "Admin":
        return <Admin />;
      case "HelpDesk":
        return <HelpDesk />;
      case "TeamLead":
        return <TeamLead />;
      case "Customer":
        return <Customer />;
      case "ScrumEvents":
        return <ScrumEvents />;
      default:
        return <Admin />;
    }
  };

  return (
    <article className="bg-white">
      <div className="flex flex-col items-start justify-center px-4 sm:px-6 lg:px-20">
        <h1 className="mt-24 text-secondary font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-start">
          Solutions for Every Team
        </h1>
        <h2 className="mt-10 w-full sm:w-3/4 lg:w-1/2 text-[#050038B2] font-light text-sm sm:text-base md:text-lg text-start">
          Whether you’re brainstorming, engineering, managing workshops, or
          engaging with customers, Yam Consulting Service provides the tools to
          elevate your team&apos;s performance.
        </h2>
        <div className="w-full flex flex-wrap items-start justify-center sm:justify-start mt-8 gap-3 sm:gap-6 lg:gap-10">
          {[
            { name: "Admin", label: "Brainstorming" },
            { name: "HelpDesk", label: "Engineering" },
            { name: "TeamLead", label: "Workshops" },
            { name: "Customer", label: "Customer Engagement" },
          ].map((button) => (
            <button
              key={button.name}
              onClick={() => setSelectedComponent(button.name)}
              className={`px-6 py-2 rounded-full font-normal border text-sm sm:text-base ${
                selectedComponent === button.name
                  ? "bg-[#F2F2F2] text-secondary"
                  : "bg-white text-[#767676]"
              }`}
            >
              {button.label}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-5 px-4 sm:px-6">{renderComponent()}</div>
    </article>
  );
};

export default Built;
