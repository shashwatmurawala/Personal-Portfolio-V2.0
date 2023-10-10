import { useState } from "react";
import Slider from "react-slick";
import { RiStarFill } from "react-icons/ri";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import Title from "./Title";
import { quote, testimonialOne, testimonialTwo, testimonialThree } from "../assets";
import { FadeIn } from "./FadeIn";

function SampleNextArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-0 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-20 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}

const Testimonial = () => {
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (next: any) => {
      setDocActive(next);
    },
    appendDots: (dots: any) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i: any) => (
      <div
        style={
          i === dotActive
            ? {
                width: "12px",
                height: "12px",
                color: "blue",
                background: "#ff014f",
                borderRadius: "50%",
                cursor: "pointer",
              }
            : {
                width: "12px",
                height: "12px",
                color: "blue",
                background: "gray",
                borderRadius: "50%",
                cursor: "pointer",
              }
        }
      ></div>
    ),
  };
  return (
    <section
      id="testimonial"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title title="WHAT CO-WORKERS SAY" des="Testimonial" />
        </div>
        <div className="max-w-6xl mx-auto">
          {/* ================ Slider One ================== */}
          <Slider {...settings}>
            <div className="w-full">
              <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
                <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                  <img
                    className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                    src={testimonialOne}
                    alt="testimonialOne"
                  />
                  <div className="w-full flex flex-col justify-end">
                    <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                      JANA Corporation
                    </p>
                    <h3 className="text-2xl font-bold">Tanvi Bhalla</h3>
                    <p className="text-base tracking-wide text-gray-500">
                      GIS Analyst
                    </p>
                  </div>
                </div>
                <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                  <img className="w-20 lgl:w-32" src={quote} alt="quote" />
                  <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                    <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                      <div>
                        <h3 className="text-xl lgl:text-2xl font-medium tracking-wide text-center">
                          SIMP-QRA
                        </h3>
                        <p className="text-base text-gray-400 mt-3 text-center">
                          May 8, 2023 - August 25, 2023
                        </p>
                      </div>
                      <div className="text-yellow-500 flex gap-1">
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                      </div>
                    </div>
                    <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                      I had the pleasure of supervising Shashwat during his co-op term as a Junior Data Analyst, and I highly recommend him. Shashwat demonstrated a strong aptitude for data analysis and a keen willingness to learn. He was able to quickly adapt to our team's tasks and consistently delivered accurate and insightful results. His positive attitude and effective communication made him an asset to our projects. I am confident that Shashwat will excel in his future endeavors in data analysis. His contributions during his time with us were valuable, and I have no doubt that he will continue to make meaningful contributions to any team that he joins.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* ================ Slider Two ================== */}

            <div className="w-full">
              <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
                <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                  <img
                    className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                    src={testimonialTwo}
                    alt="testimonialTwo"
                  />
                  <div className="w-full flex flex-col justify-end">
                    <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                    JANA Corporation
                    </p>
                    <h3 className="text-2xl font-bold">Yue Liu</h3>
                    <p className="text-base tracking-wide text-gray-500">
                    Integrity Analyst
                    </p>
                  </div>
                </div>
                <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                  <img className="w-20 lgl:w-32" src={quote} alt="quote" />
                  <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                    <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                      <div>
                        <h3 className="text-xl lgl:text-2xl font-medium tracking-wide text-center">
                        SIMP-QRA
                        </h3>
                        <p className="text-base text-gray-400 mt-3 text-center">
                        May 8, 2023 - August 25, 2023
                        </p>
                      </div>
                      <div className="text-yellow-500 flex gap-1">
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                      </div>
                    </div>
                    <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                    I worked with Shashwat on the model Dev project and I really enjoyed working with him. He's a quick learner and has been very helpful on the data work with SQL. I would definitely recommend him as a candidate for any future position.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* ================ Slider Three ================== */}

            <div className="w-full">
              <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
                <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                  <img
                    className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                    src={testimonialThree}
                    alt="testimonialThree"
                  />
                  <div className="w-full flex flex-col justify-end">
                    <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                      JANA Corporation
                    </p>
                    <h3 className="text-2xl font-bold">Aaryan Patel</h3>
                    <p className="text-base tracking-wide text-gray-500">
                    Jr. Software Developer
                    </p>
                  </div>
                </div>
                <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                  <img className="w-20 lgl:w-32" src={quote} alt="quote" />
                  <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                    <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                      <div>
                        <h3 className="text-xl lgl:text-2xl font-medium tracking-wide text-center">
                          Lighthouse TIMP
                        </h3>
                        <p className="text-base text-gray-400 mt-3 text-center">
                          May 8, 2023 - August 25, 2023
                        </p>
                      </div>
                      <div className="text-yellow-500 flex gap-1">
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                      </div>
                    </div>
                    <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                    I have had the opportunity to work with Shashwat while he was a Data Analyst co-op at JANA Corporation. I had the privelege of seeing his 
                    ability to diversify himself in the contributions he has made for the Innovation team. His work ethic, desire to learn, and his exceptional 
                    collaboration skills are some of many reasons why I believe Shashwat will stand out and excel in his future endeavors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </FadeIn>
    </section>
  );
};

export default Testimonial;
