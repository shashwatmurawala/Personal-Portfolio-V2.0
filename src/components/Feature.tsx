import { FaSuitcase, FaLinkedin, FaGithub } from "react-icons/fa";
import Card from "./Card";
import Card1 from "./Card1";
import Title from "./Title";
import { FadeIn } from "./FadeIn";
import Card2 from "./Card2";

const Feature = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <Title title="Features" des="Who am I?" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
          <Card
            title="Resume"
            des="Explore my qualifications, work history, and skills in detail."
            icon={<FaSuitcase />}
          />
          <Card1
            title="LinkedIn"
              des="Connect with me professionally and view my career journey."
            icon={<FaLinkedin />}
          />
          <Card2
            title="GitHub"
            des="Check out my projects and contributions to open source."
            icon={<FaGithub />}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Feature;
