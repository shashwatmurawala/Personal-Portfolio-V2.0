import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaYoutube, FaLinkedinIn, FaReact, FaGithub, FaInstagram, FaHtml5, FaPython, FaCss3, FaJs, FaLinux, FaBootstrap, FaJava } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs, SiCss3, SiCplusplus, SiNodedotjs, SiTensorflow, SiNumpy, SiOpencv, SiPandas, SiLinux, SiGit, SiKeras, SiVisualstudiocode, SiVisualstudio, SiMongodb, SiPowerbi, SiMysql, SiMicrosoftsqlserver, SiAdobephotoshop, SiMicrosoftoffice, SiNotion, SiCockroachlabs } from "react-icons/si";
import { BsFiletypeSql } from "react-icons/bs";
import { FadeIn } from "./FadeIn";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Software Engineer.", "Data Scientist.", "Machine Learning Engineer.", "Full Stack Developer.", "Professional Coder."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <FadeIn className="w-full lgl:w-1/2 flex flex-col gap-10">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-4xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Shashwat Murawala</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor cursorStyle="|" cursorColor="#ff014f" />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wider">
        I'm a first-year Computer Science student at the University of Waterloo, deeply 
        passionate about disruptive technologies, neuroscience, and AI. My ultimate goal 
        is to pursue a career in AI development and research to create technology for the betterment humanity.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Languages
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaPython />
            </span>
            <span className="bannerIcon">
              <SiCplusplus />
            </span>
            <span className="bannerIcon">
              <FaHtml5 />
            </span>
            <span className="bannerIcon">
              <FaCss3 />
            </span>
            <span className="bannerIcon">
              <FaJs />
            </span>
            <span className="bannerIcon">
              <FaJava />
            </span>
            <span className="bannerIcon">
              <BsFiletypeSql />
            </span>
            <span className="bannerIcon">
              <SiLinux />
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Frameworks
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNodedotjs />
            </span>
            <span className="bannerIcon">
              <FaBootstrap />
            </span>
            <span className="bannerIcon">
              <SiTensorflow />
            </span>
            <span className="bannerIcon">
              <SiNumpy />
            </span>
            <span className="bannerIcon">
              <SiOpencv />
            </span>
            <span className="bannerIcon">
              <SiGit />
            </span>
            <span className="bannerIcon">
              <SiMongodb />
            </span>            
          </div>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Software and Tools
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <SiVisualstudiocode />
            </span>
            <span className="bannerIcon">
              <SiPowerbi />
            </span>
            <span className="bannerIcon">
              <SiMysql />
            </span>
            <span className="bannerIcon">
              <SiMicrosoftsqlserver />
            </span>
            <span className="bannerIcon">
              <SiAdobephotoshop />
            </span>
            <span className="bannerIcon">
              <SiNotion />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
            <span className="bannerIcon">
              <SiCockroachlabs />
            </span>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default LeftBanner;
