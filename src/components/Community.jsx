import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, provider } from "../config/firebase";

import { signInWithPopup } from "firebase/auth";

const Community = () => {
  const [user] = useAuthState(auth);

  const goToForum = () => {};
  const signIn = async () => {
    const result = await signInWithPopup(auth, provider);
  };

  return (
    <div className="w-full bg-black py-16 px-4 text-white">
      <div
        className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-4
    "
      >
        <img
          className="rounded-3xl w-[500px] mx-auto my-4"
          src="https://bod-blog-assets.prod.cd.beachbodyondemand.com/bod-blog/wp-content/uploads/2017/04/Beachbody-blog-basketball-moves.jpg"
          alt=""
        />
        <div className="flex flex-col justify-center">
          <p className="font-serif p-4">
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              Community that will keep eachother going
            </h1>
            <br />
          </p>
          <p>
            Join our Forums page and stay active so you can talk to other
            aspiring hoopers about what your working on! Basketballfit knows
            that getting better is always easier when you have other people to
            talk to.
          </p>
          {user ? 
            <Link to="/forum">
              <button
                className="
        bg-white w-[200px] rounded-xl font-medium mx-auto my-6 py-3
        text-black transition ease-in-out delay-150 hover:-translate-y-1
        hover:scale-80 hover:bg-slate-500 duration-300 ..."
              >
                Forum
              </button>
            </Link>
           : 
            <button
              onClick={signIn}
              className="bg-white w-[200px] rounded-xl font-medium mx-auto my-6 py-3 
              text-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-80
               hover:bg-slate-500 duration-300 ..."
            >
              Log in to continue
            </button>
          }
        </div>
      </div>
    </div>
  );
};

export default Community;
