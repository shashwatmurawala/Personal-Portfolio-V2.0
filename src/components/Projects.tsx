import Title from "./Title";
import ProjectsCard from "./ProjectsCard";
import ProjectsCard1 from "./ProjectsCard1";
import ProjectsCard2 from "./ProjectsCard2";
import ProjectsCard3 from "./ProjectsCard3";
import ProjectsCard4 from "./ProjectsCard4";
import ProjectsCard5 from "./ProjectsCard5";
import ProjectsCard6 from "./ProjectsCard6";
import ProjectsCard7 from "./ProjectsCard7";
import ProjectsCard8 from "./ProjectsCard8";
import { projectFive, projectFour, projectNine, projectOne, projectThree, projectSix, projectTwo, projectSeven, projectEight } from "../assets";
import { FadeIn } from "./FadeIn";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title
            title="VISIT MY PORTFOLIO AND GIVE YOUR FEEDBACK"
            des="My Projects"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
          <ProjectsCard
            title="RouteMaster"
            des=" RouteMaster is a website which helps students make a plan based on their major and preferences of minors and specializations."
            src={projectOne}
          />
          <ProjectsCard1
            title="Drowsiness Detector"
            des=" An application which decets drowsiness amongst drivers and alerts them to move over to the side to rest."
            src={projectTwo}
          />
          <ProjectsCard2
            title="MHR Bot"
            des=" Created a mental health chat bot which asks you 10 questions and gives you mental health resources based on your university, location, and needs."
            src={projectThree}
          />
          <ProjectsCard3
            title="Ambulert"
            des=" An app that warms citizens of an incoming ambulence before it passes to give them enough time to move aside."
            src={projectFour}
          />
          <ProjectsCard4
            title="Food Avalanche"
            des=" A web application which connects restaurants with the homeless so at the end of the day the homeless can pick up any leftover food."
            src={projectFive}
          />
          <ProjectsCard5
            title="Sudoku Solver"
            des=" Made a python program which takes in an image and outputs the image with the solved sudoku numbers on the image."
            src={projectSix}
          />
          <ProjectsCard6
            title="Foodar"
            des=" Worked with a team to create a web application to give the user the closest 3 restaurants based on their location."
            src={projectSeven}
          />
          <ProjectsCard7
            title="Gender and Age Detection"
            des=" Created a program which takes in an image and predicts the gender and age of the person in the image based on a dataset of more then 100,000. "
            src={projectEight}
          />
          <ProjectsCard8
            title="Text to Speech"
            des=" I created a python application which allows a user to type any text which it then converts into speech."
            src={projectNine}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Projects;
