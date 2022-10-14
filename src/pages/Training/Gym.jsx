import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Gym = () => {
  return (
    <div className="w-full bg-black py-16 px-4 text-white h-screen" id="gym">
      <div
        className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-4
    "
      >
        <img
          className="rounded-3xl w-[500px] mx-auto my-4"
          src="https://media.gettyimages.com/photos/ja-morant-of-the-memphis-grizzlies-lifts-weights-during-practice-as-picture-id1227832022?s=2048x2048"
          alt=""
        />
        <div className="flex flex-col justify-center">
          <p className="font-serif p-4">
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              Gym Workouts
            </h1>
            <br />
          </p>
          <p>
            BasketballFit has the best gym workouts for athletes. We prioritize functional movement
            that resembles your sport. Compound exercises and technique is priority. Our gym workouts 
            will help you become more explosive, stronger, and help prevent injury!
          </p>
          <Link to="gymworkouts">
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

export default Gym;
