import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import { logo } from "../assets";
import { FadeIn } from "./FadeIn";

const Footer = () => {
  return (
    <FadeIn className="w-full py-5 h-auto border-b-[1px] border-b-black flex flex-row justify-between items-center">
      <div className="flex items-center">
        <div className="text-center">Created By Shashwat Murawala</div>
      </div>
      <div className="flex gap-4">
        <a href="https://github.com/shashwatmurawala" target="_blank">
          <span className="bannerIcon">
            <FaGithub />
          </span>
        </a>
        <a href="https://www.linkedin.com/in/shashwatmurawala/" target="_blank">
          <span className="bannerIcon">
            <FaLinkedinIn />
          </span>
        </a>
        <a href="https://www.instagram.com/shashwat2004_/" target="_blank">
          <span className="bannerIcon">
            <FaInstagram />
          </span>
        </a>
      </div>
    </FadeIn>
  );
};

export default Footer;
