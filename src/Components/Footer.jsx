import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer border-t border-[#444444] sm:footer-horizontal bg-[#252525] text-[#D5D5D5] items-center p-4">
        <aside className="grid-flow-col items-center">
          <a className="font-extrabold text-4xl" href="/">
            AKIB
          </a>
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        <nav className="grid-flow-col items-center gap-4 md:place-self-center md:justify-self-end">
          <a href="https://www.facebook.com/akib.anjum.5" target="_blank">
            <FaFacebook
              size={24}
              className="hover:text-blue-500 hover:scale-120 duration-150 ease-in"
            />
          </a>
          <a href="https://github.com/Akib-dev1" target="_blank">
            <FaGithubSquare
              size={26}
              className="hover:text-[#D5D5D5] hover:scale-120 duration-150 ease-in"
            />
          </a>
          <a href="https://www.linkedin.com/in/muhammad-akib" target="_blank">
            <FaLinkedin
              size={26}
              className="hover:text-blue-600 hover:scale-120 duration-150 ease-in"
            />
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
