import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaReact, FaHtml5, FaPython, FaCss3, FaJs, FaBootstrap, FaJava } from "react-icons/fa";
import { SiFigma, SiCplusplus, SiNodedotjs, SiTensorflow, SiNumpy, SiOpencv, SiLinux, SiGit,  SiVisualstudiocode, SiMongodb, SiPowerbi, SiMysql, SiMicrosoftsqlserver, SiAdobephotoshop, SiNotion, SiCockroachlabs } from "react-icons/si";
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
        👋 Hello! I'm Shashwat, a Computer Science and Psychology Double Major student at the University of Waterloo. I thrive on the challenge of creating software solutions that not only solve technical problems but also improve the lives of users.<br /><br />

        💡 With my minor in Cognitive Science, I enjoy exploring the intersection of technology and human behavior. I believe technology can be a powerful tool for positive change, and I aspire to use my skills to make a real impact.<br /><br />

        ⭐️ If you'd like to connect, collaborate, or discuss exciting tech projects, I'd love to hear from you. I'm always open to learning and exploring new opportunities!
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
