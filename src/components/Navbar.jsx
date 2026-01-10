import React, { useState } from "react";
import { LINKS } from "../constants";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setisMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setisMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScroll = (event, targetId) => {
    event.preventDefault();

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });

      setisMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-4 z-50 flex w-full items-center justify-center">
      <div className="flex w-full items-center justify-between overflow-y-hidden p-4 backdrop-blur-lg lg:m-2 lg:w-[50rem] lg:rounded-full lg:shadow-lg">
        <a
          href="#home"
          onClick={(e) => handleScroll(e, "home")}
          className="cursor-pointer"
        >
          <img
            src={logo}
            alt="logo"
            width={80}
            height={80}
            className="object-contain"
          />
        </a>

        <div className="hidden space-x-6 lg:flex">
          {LINKS.map((link, index) => (
            <a
              key={index}
              href={`#${link.targetId}`}
              onClick={(e) => handleScroll(e, link.targetId)}
              className={`text-sm text-white/80 hover:opacity-50 ${
                index !== 0 ? "border-l-2 border-neutral-300/20 pl-4" : ""
              }`}
            >
              {link.text}
            </a>
          ))}
        </div>

        <div className="lg:hidden">
          <button onClick={toggleMobileMenu} className="text-white">
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="mt-2 w-full backdrop-blur-lg lg:hidden">
          {LINKS.map((link, index) => (
            <a
              key={index}
              href={`#${link.targetId}`}
              onClick={(e) => handleScroll(e, link.targetId)}
              className="block p-4 text-center uppercase tracking-tight text-white hover:opacity-70"
            >
              {link.text}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
