import React from "react";
import ReactLogo from "../assets/headerlogo.svg";

function Header() {
  return (
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src={ReactLogo} alt="React Logo" className="w-12 h-12" />
        <h1 className="text-2xl font-bold text-primary-content ml-4">
          My Weather App
        </h1>
      </div>
      <nav>
        <ul className="flex space-x-8">
          <li>
            <a
              href="#"
              className="text-primary-content hover:text-secondary-content transition-colors"
            >
              HOME
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-primary-content hover:text-secondary-content transition-colors"
            >
              SERVICES
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-primary-content hover:text-secondary-content transition-colors"
            >
              ABOUT
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-primary-content hover:text-secondary-content transition-colors"
            >
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
