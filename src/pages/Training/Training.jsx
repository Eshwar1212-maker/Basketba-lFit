import React from "react";
import { Link as Link1 } from "react-scroll";
import { HiArrowNarrowRight } from "react-icons/hi";
import videobg from "../../assets/videobg.mp4"


const Training = () => {
  return (
    <div className="text-white relative h-screen">
        <video
        className='w-full h-full object-cover'
        src={videobg}
        autoPlay
        loop
        muted
      />
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/30 text-center">
        <br /> <br /><br /><br /> <br /><br /> <br /> <br /><br /> <br /><br /> <br />
        <h1 className="font-headerFonts text-center text-white md:text-3xl sm-text-6xl text-4xl md:py-6">
          Welcome to our training page!!
        </h1>
        <p className="font-logoFonts">
          Where we offer the best workouts for young athletes to do in the gym,
          and on the court!
        </p>
        <div className="flex justify-center gap-5">
          <Link1 
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          to="skill">
              <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-red-800 hover:border-red-800">
                Skill workouts
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-3 " />
                </span>
              </button>
          </Link1>
          <Link1
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          to="skill">
              <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-red-800 hover:border-red-800">
                Gym workouts
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-3" />
                </span>
              </button>
          </Link1>
        </div>
      </div>
    </div>
  );
};
export default Training;
