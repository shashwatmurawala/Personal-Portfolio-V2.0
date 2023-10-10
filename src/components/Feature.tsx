import { FaSuitcase } from "react-icons/fa";
import { RiTwitterFill } from "react-icons/ri";
import { ImBlog } from "react-icons/im";
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
            des="Explore my qualifications, work history, and skills in detail. Download 
            my resume to learn more about me."
            icon={<FaSuitcase />}
          />
          <Card1
            title="Co-op Blog"
            des="
            #MyCoopExperience is a student-written blog offering insights and 
            advice for other co-op students."
            icon={<ImBlog />}
          />
          <Card2
            title="GitHub Education"
            des={
              <>🧩Mission accomplished!! #HackconXI @github @MLHacks<br />
              <br /></>}
            icon={<RiTwitterFill />}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Feature;
