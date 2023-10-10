import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Work Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[2000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Full Stack Web Development Internship Program"
            subTitle="Edureka (Sep 2023 - Present)"
            result="Remote"
            des={
              <>
                • Actively improving my skills in creating responsive and interactive interfaces using React.js.<br />
                • In the process of mastering Node.js and Express.js to build robust server-side applications efficiently.<br />
                • Currently gaining expertise in MongoDB for effective data management.
              </>
            }
          />
          <ResumeCard
            title="Campus Ambassador"
            subTitle="Velocity (Aug 2023 - Present)"
            result="Waterloo"
            des={
              <>
                • Collaborated on event planning to foster entrepreneurial thinking.<br />
                • Cultivated a sense of community among like-minded students
              </>
            }
          />
          <ResumeCard
            title="Math Ambassador"
            subTitle="University of Waterloo (Aug 2023 - Present)"
            result="Waterloo"
            des={
              <>
                • Emails with prospective students<br />
                • Mentorship<br />
                • Outreach and engagement programming<br />
                • Communications outreach
              </>
            }
          />
          
          <ResumeCard
            title="Data Analyst"
            subTitle="JANA Corporation (May 2023 - Aug 2023)"
            result="Remote"
            des={
              <>
                • Conducting data analysis, research, report writing, and data loading tasks related to pipeline integrity management.<br />
                • Developing software using Python and SQL for data processing and analysis.<br />
                • Collaborating with JANA's teams to provide quality data and insights for gas distribution and transmission companies' integrity management programs.
              </>
            }
          />
          <ResumeCard
            title="Store Associate"
            subTitle="University of Waterloo (Aug 2022 - Jan 2023)"
            result="Waterloo"
            des={
              <>
                • Google's hiring process is an important part of our culture.<br />
                • Googlers care deeply about their teams and the people who make them up.
              </>
            }
          />
          <ResumeCard
            title="Summer Student, Subway Janitor"
            subTitle="Toronto Transit Commission (Jul 2022 - Aug 2022)"
            result="Toronto"
            des={
              <>
                • Maintained a safe and clean environment.<br />
                • Completed detailed cleanings of closed subway stations overnight.
              </>
            }
          />
          <ResumeCard
            title="Student Host"
            subTitle="Ontario Science Centre (Dec 2021 - Jan 2022)"
            result="North York"
            des={
              <>
                • Provided customer service to a sufficient degree.<br />
                • Enthusiastically and proactively engaged with visitors.
              </>
            }
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Organization Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[2000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Head Delegate (University of Waterloo)"
            subTitle="CUSEC: Canadian University Software Engineering Conference (Apr 2023 - Present)"
            result="Waterloo"
            des={
              <>
                • Promoting CUSEC to students, building relationships with clubs/societies and recruiting delegates.<br />
                • Assisting in organizing travel and accommodations for the group attending the conference.
              </>
            }
          />
          <ResumeCard
            title="Outreach Coordinator"
            subTitle="University of Waterloo Data Science Club (Apr 2023 - Present)"
            result="Waterloo"
            des={
              <>
                • Responsible for collaborations and sponsorships.<br />
                • Actively contacting companies, faculty, and other organizations for sponsorships and collaborations.<br />
                • Creating sponsorship packages and pitch DSC to potential collaborators.
              </>
            }
          />
          <ResumeCard
            title="Office Worker"
            subTitle="University of Waterloo MATHSOC (Sep 2023 - Present)"
            result="Waterloo"
            des={
              <>
                • Committed to in-person collaboration within the MathSoc Office.<br />
                • Maintained a customer-friendly atmosphere and supported office operations.
              </>
            }
          />
          <ResumeCard
            title="Head Pink Tie"
            subTitle="University of Waterloo MATHSOC (Apr 2023 - Sep 2023)"
            result="Waterloo"
            des={
              <>
                • Co-leading First-Year students alongside other pink tie leaders.
              </>
            }
          />
          <ResumeCard
            title="Tie Guard"
            subTitle="University of Waterloo MATHSOC (Apr 2023 - Sep 2023)"
            result="Waterloo"
            des={
              <>
                • Taking shifts at the math "Ask Me" booth and Tie Guard Tent.
              </>
            }
          />
          <ResumeCard
            title="Cartoon Reviewer"
            subTitle="University of Waterloo MATHSOC (Sep 2022 - Jun 2023)"
            result="Waterloo"
            des={
              <>
                • Evaluating and critiquing MathSoc comics before release.<br />
                • Providing insights and context about the comics.
              </>
            }
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
