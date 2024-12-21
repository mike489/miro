import { Link } from "react-router-dom";

// import LOGO from "../assets/icon/logo.svg";

import loc from "../assets/icon/loc.svg";
import mail from "../assets/icon/email.svg";
import call from "../assets/icon/call.svg";

// import Facebook from "../assets/icon/facebook-01.svg";
// import Twitter from "../assets/icon/Twitter.svg";

// import Linkedin from "../assets/icon/linkedin-01.svg";
import { useEffect, useState } from "react";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <article
      id="Footer-section"
      className="bg- px-[5%] pt-12 pb-8 text-white w-full"
      style={{
        backgroundRepeat: "no-repeat",
        backgroundColor: "#050038",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <article className="grid grid-col-1 lg:grid-cols-4 items-start pb-24">
        <section className="flex flex-col gap-4">
          <section className="flex flex-col gap-4 lg:pl-[15%] py-16 lg:py-0 capitlize font-bold">
            <h6 className="text-xl lg:text-base mb-6"> LInks</h6>
            <Link
              onClick={() => window.scrollTo(0, 0)}
              // to={ROUTES[0]}
              className="mb-1 text-sm font-neuwelt-ExtraLight"
            >
              Home
            </Link>
            <Link
              onClick={() => window.scrollTo(0, 0)}
              // to={ROUTES[1]}
              className="mb-1 text-sm font-neuwelt-ExtraLight"
            >
              About us
            </Link>
            <Link
              onClick={() => window.scrollTo(0, 0)}
              // to={ROUTES[2]}
              className="mb-1 text-sm font-neuwelt-ExtraLight"
            >
              Service
            </Link>

            <Link
              onClick={() => window.scrollTo(0, 0)}
              // to={ROUTES[3]}
              className="mb-1 text-sm font-neuwelt-ExtraLight"
            >
              Contact us
            </Link>
          </section>
        </section>

        <section className="flex flex-col gap-4 lg:pl-[15%] py-16 lg:py-0 capitlize font-bold">
          <h6 className="text-xl lg:text-base mb-6"> LInks</h6>
          <Link
            onClick={() => window.scrollTo(0, 0)}
            // to={ROUTES[0]}
            className="mb-1 text-sm font-neuwelt-ExtraLight"
          >
            Home
          </Link>
          <Link
            onClick={() => window.scrollTo(0, 0)}
            // to={ROUTES[1]}
            className="mb-1 text-sm font-neuwelt-ExtraLight"
          >
            About us
          </Link>
          <Link
            onClick={() => window.scrollTo(0, 0)}
            // to={ROUTES[2]}
            className="mb-1 text-sm font-neuwelt-ExtraLight"
          >
            Service
          </Link>

          <Link
            onClick={() => window.scrollTo(0, 0)}
            // to={ROUTES[3]}
            className="mb-1 text-sm font-neuwelt-ExtraLight"
          >
            Contact us
          </Link>
        </section>
        <section className="flex flex-col gap-4 capitlize font-bold">
          <h6 className="lg:text-sm mb-6 font-neuwelt-ExtraLight">
            {" "}
            Contact Us Now
          </h6>
          <div className="flex gap-4 items-start justify-start">
            <img src={loc} alt="loaction" className="w-7 h-7" />
            <div className="text-sm font-neuwelt-ExtraLight">
              <p>Bole, Sub City, Bole Building</p>
              <p>Addis Ababa, Ethiopia</p>
            </div>
          </div>
          <div className="flex gap-4 items-start justify-start mt-4 pl-1">
            <img src={mail} alt="email" className="w-6 h-6" />
            <div className="text-sm font-neuwelt-ExtraLight">
              <p>info@yamconsulting.com</p>
            </div>
          </div>
          <div className="flex gap-4 items-start justify-start mt-6 pl-1">
            <img src={call} alt="phone" className="w-6 h-6" />
            <div className="text-sm font-neuwelt-ExtraLight">
              <p>
                +251 <span className="ml-2">912121211</span>
              </p>
              <p>
                +251 <span className="ml-2">912121211</span>
              </p>
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-4 lg:pl-[15%] mt-16 lg:mt-0 capitlize font-bold relative">
          <section className="flex flex-col gap-4 capitlize font-bold">
            <h6 className="lg:text-sm mb-6 font-neuwelt-ExtraLight">
              {" "}
              Contact Us Now
            </h6>
            <div className="flex gap-4 items-start justify-start">
              <img src={loc} alt="loaction" className="w-7 h-7" />
              <div className="text-sm font-neuwelt-ExtraLight">
                <p>Bole, Sub City, Bole Building</p>
                <p>Addis Ababa, Ethiopia</p>
              </div>
            </div>
            <div className="flex gap-4 items-start justify-start mt-4 pl-1">
              <img src={mail} alt="email" className="w-6 h-6" />
              <div className="text-sm font-neuwelt-ExtraLight">
                <p>info@yamconsulting.com</p>
              </div>
            </div>
            <div className="flex gap-4 items-start justify-start mt-6 pl-1">
              <img src={call} alt="phone" className="w-6 h-6" />
              <div className="text-sm font-neuwelt-ExtraLight">
                <p>
                  +251 <span className="ml-2">912121211</span>
                </p>
                <p>
                  +251 <span className="ml-2">912121211</span>
                </p>
              </div>
            </div>
          </section>
        </section>
      </article>

      <p className="w-full text-[16px] text-center capitalize pt-12 border-t">
        Powered by Yam Consulting @ {currentYear}
      </p>
    </article>
  );
};

export default Footer;
