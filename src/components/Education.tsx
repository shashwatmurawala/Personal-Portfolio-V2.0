import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
import CertificateCard from "./CertificateCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2018 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Bachelor of CS"
            subTitle="University of Waterloo"
            result="2022 - Present"
            des="Currently pursuing BCS. Computer Science and Psychology Double Major with a Cognitive Science Minor at the University of Waterloo."
          />
          <ResumeCard
            title="Specialized Program"
            subTitle="OSCSS"
            result=" 2021 - 2022"
            des="Was 1 of 25 students chosen out of Ontario to attend Semester 79 at the Ontario Science Centre Science School."
          />
          <ResumeCard
            title="OSSD"
            subTitle="SATEC @ W.A. Porter C.I."
            result="2018 - 2022"
            des="Completed my Ontario High School Diploma through the Toronto District School Board at SATEC @ W.A. Porter C.I."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Certifications</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <CertificateCard
            title="Security Brown Belt Certification"
            subTitle="Dayforce"
            result="2024"
            des="The Security Brown Belt Certification offers advanced cybersecurity expertise in complex threat analysis and strategic risk management."
            certificateLink="https://www.linkedin.com/in/shashwatmurawala/overlay/1723046911461/single-media-viewer/?profileId=ACoAADxmUrkBsper5p9rPHuQuzXEWDAvXBZa-68"
          />
          <CertificateCard
            title="Security Green Belt Certification"
            subTitle="Dayforce"
            result="2024"
            des="The Security Green Belt Certification provides intermediate cybersecurity skills to protect organizational assets."
            certificateLink="https://www.linkedin.com/in/shashwatmurawala/overlay/1716861365788/single-media-viewer/?profileId=ACoAADxmUrkBsper5p9rPHuQuzXEWDAvXBZa-68"
          />
          <CertificateCard
            title="Introduction to Statistics"
            subTitle="Stanford University"
            result="2023"
            des="Stanford's Introduction to Statistics course imparts crucial statistical thinking skills for data analysis and machine learning."
            certificateLink="https://www.coursera.org/account/accomplishments/certificate/ASGLNZJXDU2W"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
