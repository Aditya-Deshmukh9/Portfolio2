import React, { useState } from "react";
import logo from "../assets/ani-logo.gif";
import { NAVIGATION_LINKS } from "../constants/index.jsx";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";

function Navbar() {
  const [isMobileMenuOpen, setisMobileMenuOpen] = useState(false);

  const toggleMenuOpen = () => {
    setisMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);

    if (targetElement) {
      const offset = -85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setisMobileMenuOpen(false);
    }
  };
  return (
    <div className="">
      <nav className="fixed left-0 right-0 top-4 z-50">
        {/* Deskstop Menu */}
        <div className="mx-auto hidden max-w-2xl items-center justify-center rounded-lg bg-black/20 py-3 backdrop-blur-md lg:flex">
          <div className="flex justify-center items-center gap-6">
            <div className="">
              <a href="/">
                <img src={logo} alt="logo" width={90} />
              </a>
            </div>
            <div className="">
              <ul className="flex items-center gap-4">
                {NAVIGATION_LINKS.map((item, index) => (
                  <a
                    key={index}
                    className="text-sm hover:text-yellow-400"
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="rounded-lg backdrop-blur-md lg:hidden">
          <div className="flex items-center justify-between">
            <div className="">
              <a href="#">
                <img src={logo} alt="logo" width={90} className="m-2" />
              </a>
            </div>
            <div className="flex items-end">
              <button
                className="focus:outline-none lg:hidden"
                onClick={toggleMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <FaTimes className="m-2 h-6 w-5" />
                ) : (
                  <FaBars className="m-2 h-6 w-5" />
                )}
              </button>
            </div>
          </div>
          {isMobileMenuOpen && (
            <ul className="ml-4 mt-4 flex flex-col gap-4 backdrop-blur-md">
              {NAVIGATION_LINKS.map((item, index) => (
                <li className="block w-full text-xl font-semibold hover:text-yellow-400">
                  {item.label}
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
