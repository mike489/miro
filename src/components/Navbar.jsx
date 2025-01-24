import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/icon/logo.svg";

const NavBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="p-5 bg-white shadow-md">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        {/* Logo and Links */}
        <div className="flex items-center space-x-8">
          <a href="/" className="flex items-center">
            <img src={Logo} alt="Logo" className="h-8" />
          </a>
          <ul className="hidden md:flex space-x-8">
            <li>
              <a
                href="#"
                className="text-secondary font-semibold hover:text-primary"
              >
                Overview
              </a>
            </li>
            <li>
              <a
                href="#feature"
                className="text-secondary font-semibold hover:text-primary"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#Faq"
                className="text-secondary font-semibold hover:text-primary"
              >
                FAQ
              </a>
            </li>
            <li>
              <Link
                to={"/KnowledgeBase"}
                className="text-secondary font-semibold hover:text-primary"
              >
                Knowledge Base
              </Link>
            </li>
          </ul>
        </div>

        {/* Sign In Button */}
        <div className="hidden md:block space-x-4">
          <Link
            to={"/contact us"}
            className="bg-primary font-light p-2 hover:bg-blue-800 rounded-full text-white px-5"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden bg-primary p-2 px-5 rounded-full text-white "
        >
          Menu
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col space-y-4">
            <li>
              <a
                href="#"
                className="block text-secondary font-semibold hover:text-primary"
              >
                Overview
              </a>
            </li>
            <li>
              <a
                href="#feature"
                className="block text-secondary font-semibold hover:text-primary"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#Faq"
                className="block text-secondary font-semibold hover:text-primary"
              >
                FAQ
              </a>
            </li>
            <li>
              <Link
                to={"/KnowledgeBase"}
                className="block text-secondary font-semibold hover:text-primary"
              >
                Knowledge Base
              </Link>
            </li>
            <li>
              <div className="flex flex-row items-center space-x-4">
                <Link to={"/signIn"} className="   text-[#050038] ">
                  Login
                </Link>
                <Link
                  to={"/contact us"}
                  className="bg-primary p-2 hover:bg-blue-800 rounded-full text-white text-center"
                >
                  Sign In
                </Link>
              </div>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
