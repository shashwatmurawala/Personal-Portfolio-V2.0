import Title from "./Title";
import ProjectsCard from "./ProjectsCard";
import { projectFive, projectFour, projectNine, projectOne, projectThree, projectSix, projectTwo, projectSeven, projectEight } from "../assets";
import { FadeIn } from "./FadeIn";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projectsData = [
  {
    title: "RouteMaster",
    des: "RouteMaster is a website which helps students make a plan based on their major and preferences of minors and specializations.",
    src: projectOne,
    githubUrl: "https://github.com/shashwatmurawala/RouteMaster",
  },
  {
    title: "Drowsiness Detector",
    des: "An application which detects drowsiness amongst drivers and alerts them to move over to the side to rest.",
    src: projectTwo,
    githubUrl: "https://github.com/shashwatmurawala/DrowsinessDetection",
  },
  {
    title: "MHR Bot",
    des: "Created a mental health chat bot which asks you 10 questions and gives you mental health resources based on your university, location, and needs.",
    src: projectThree,
    githubUrl: "https://github.com/shashwatmurawala/MHR-Bot",
  },
  {
    title: "Ambulert",
    des: "An app that warns citizens of an incoming ambulance before it passes to give them enough time to move aside.",
    src: projectFour,
    githubUrl: "https://github.com/shashwatmurawala/Ambulert",
  },
  {
    title: "Food Avalanche",
    des: "A web application which connects restaurants with the homeless so at the end of the day the homeless can pick up any leftover food.",
    src: projectFive,
    githubUrl: "https://github.com/shashwatmurawala/Food-Avalanche",
  },
  {
    title: "Sudoku Solver",
    des: "Made a python program which takes in an image and outputs the image with the solved sudoku numbers on the image.",
    src: projectSix,
    githubUrl: "https://github.com/shashwatmurawala/Sudoku-Solver",
  },
  {
    title: "Foodar",
    des: "Worked with a team to create a web application to give the user the closest 3 restaurants based on their location.",
    src: projectSeven,
    githubUrl: "https://github.com/shashwatmurawala/Foodar",
  },
  {
    title: "Gender and Age Detection",
    des: "Created a program which takes in an image and predicts the gender and age of the person in the image based on a dataset of more than 100,000.",
    src: projectEight,
    githubUrl: "https://github.com/shashwatmurawala/Gender-and-Age-Detection",
  },
  {
    title: "Text to Speech",
    des: "I created a python application which allows a user to type any text which it then converts into speech.",
    src: projectNine,
    githubUrl: "https://github.com/shashwatmurawala/Text-to-Speech",
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3, // Show 3 cards per slide
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

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
        <div className="mt-8">
          <Slider {...sliderSettings}>
            {projectsData.map((project, idx) => (
              <div key={idx}>
                <ProjectsCard
                  title={project.title}
                  des={project.des}
                  src={project.src}
                  githubUrl={project.githubUrl}
                  className="w-96 h-96" // makes the card square
                />
              </div>
            ))}
          </Slider>
        </div>
      </FadeIn>
    </section>
  );
};

export default Projects;