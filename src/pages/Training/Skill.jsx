import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";


const Skill = () => {
  return (
    <div
      className='w-full text-white bg-black py-16 px-4 text-white" '
      id="skill"
    >
      <div
        className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-4
        "
      >
        <img
          className="rounded-3xl w-[500px] mx-auto my-4"
          src="https://i.ytimg.com/vi/WGpVT5uj0VI/maxresdefault.jpg"
          alt=""
        />
        <div className="flex flex-col justify-center">
          <p className="font-serif p-4">
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              Skill Workouts
            </h1>
            <p className="">
              Our skill workouts will help you take your game to the next level. We prioritize all
              aspects, shooting, ball handling, finishing, conditioning, and defense!
            </p>
          </p>
          <Link to="skillworkouts">
          <button
            className="text-white group border-2 px-6 py-3 my-2 w-fit
          flex items-center hover:bg-red-800 hover:border-red-800"
          >
            Lets Go
            <HiArrowNarrowRight className="ml-3" />
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Skill;
