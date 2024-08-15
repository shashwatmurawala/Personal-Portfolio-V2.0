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
            title="Software Developer"
            subTitle="Dayforce (May 2024 - Present)"
            result="North York"
            des={
              <>
                • Remediated 100+ security vulnerabilities identified by Veracode and SonarQube, ensuring compliance with industry standards and enhancing application security and code quality.<br />
                • Designed and implemented a high-performance streaming application, delivering real-time data processing and ensuring seamless user experience with scalable architecture, supporting 500K+ concurrent users.<br />
                • Refactored and optimized existing C#/.NET codebases, enhancing performance by 30%, maintainability, and scalability by applying SOLID principles and reducing technical debt by 40%.
              </>
            }
          />
          <ResumeCard
            title="Math Orientation Manager"
            subTitle="University of Waterloo (Nov 2023 - Present)"
            result="Waterloo"
            des={
              <>
                • Worked alongside a team to guide Orientation leaders, orchestrating their training, scheduling, and planning for a range of events.<br />
                • Completed all administrative tasks strictly in a strict manner following an outline from Waterloo Orientation to ensure preplanning for Orientation week was complete.
              </>
            }
          />
          <ResumeCard
            title="Soccer Referee"
            subTitle="Ontario Soccer (Jan 2024 - Present)"
            result="Ontario"
            des={
              <>
                • Conducted fair and unbiased officiating for soccer matches, ensuring adherence to league rules and regulations.<br />
                • Applied a comprehensive understanding of soccer rules to make prompt and accurate decisions during gameplay, maintaining a high standard of sportsmanship and integrity.<br />
                • Demonstrated strong interpersonal skills in resolving disputes and conflicts between players fostering a positive and inclusive atmosphere.
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
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Extracurricular Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[2000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Full Stack Web Development Internship Program"
            subTitle="Edureka (Sep 2023 - Dec 2023)"
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
            title="Full Stack Web Development Internship Program"
            subTitle="Edureka (Sep 2023 - Dec 2023)"
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
            title="Full Stack Web Development Internship Program"
            subTitle="Edureka (Sep 2023 - Dec 2023)"
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
            title="Full Stack Web Development Internship Program"
            subTitle="Edureka (Sep 2023 - Dec 2023)"
            result="Remote"
            des={
              <>
                • Actively improving my skills in creating responsive and interactive interfaces using React.js.<br />
                • In the process of mastering Node.js and Express.js to build robust server-side applications efficiently.<br />
                • Currently gaining expertise in MongoDB for effective data management.
              </>
            }
          />  
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
