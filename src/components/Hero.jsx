import React from "react";
import Typed from "react-typed";
import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link as Link1 } from "react-scroll";

const Hero = () => {
  const signIn = async () => {
    const result = await signInWithPopup(auth, provider);
  };
  const logOut = async () => {
    await signOut(auth);
  };
  const [user] = useAuthState(auth);
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <h1 className="font-headerFonts text-center text-white md:text-6xl sm-text-6xl text-4xl md:py-6">
          Welcome to Basketball Fit!
        </h1>
        {user && (
          <p className="text-center">
            Welcome {auth.currentUser?.displayName} !
          </p>
        )}
        <p className="text-white text-center p-8 lg:text-xl md:text-xl sm:text-xs">
          Log in with your google account to join our community of young
          athletes who want to get better at the game we love!
        </p>

        <p className="text-2xl font-logoFonts text-red-900">
          Join if you show{" "}
          <span className="text-white">
            <Typed
              strings={["Discipline", "Excellence", "Passion", "Determination", "Resilience"]}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </span>
        </p>

        <div className="flex justify-center gap-5">
          <div className="">
            {" "}
            {!user ? (
              <button
                className="text-3xl bg-slate-400 w-[200px] rounded-xl font-medium 
                 mx-auto my-6 py-3 text-black transition ease-in-out delay-150
                  hover:-translate-y-1 hover:scale-80 hover:bg-slate-500 duration-300 ..."
                onClick={signIn}
              >
                Sign In!
              </button>
            ) : (
              <>
                <button
                  onClick={logOut}
                  className="text-white text-xl bg-slate-600 w-[100px] rounded-xl font-medium 
                 mx-auto my-6 py-3 transition ease-in-out delay-150
                  hover:-translate-y-1 hover:scale-80 hover:bg-slate-800 duration-300 ..."
                >
                  Log Out
                </button>
              </>
            )}
          </div>
          <div className="my-6">
            <Link1
              to="science"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-red-800 hover:border-red-800">
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-3 " />
                </span>
              </button>
            </Link1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
