import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const [nav, setNav] = useState(false);
  const [user] = useAuthState(auth);
  const handleNav = () => {
    setNav(!nav);
  };
  const logOut = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="font-logoFonts w-full text-3xl text-red-900">BBallFit</h1>
      <ul className="hidden md:flex">
        <li className="p-4 border-b border-gray-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-80 hover:bg-slate-500 duration-300 ...">
          <Link to="/">Home</Link>
        </li>
        <li className="p-4 border-b border-gray-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-80 hover:bg-slate-500 duration-300 ...">
          <Link to="traininghome">Training</Link>
        </li>
        <li className="p-4 border-b border-gray-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-80 hover:bg-slate-500 duration-300 ...">
          <Link to="about">About</Link>{" "}
        </li>
        {user && (
          <li className="p-4 border-b border-gray-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-80 hover:bg-slate-500 duration-300 ...">
            <Link to="/forum">Forum</Link>{" "}
          </li>
        )}
        <li>
          {user && (
            <p
              className="rounded-3xl cursor-pointer bg-slate-700 p-4 border-b border-gray-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-80 hover:bg-slate-900 duration-300 ..."
              onClick={logOut}
            >
              LogOut
            </p>
          )}
        </li>
        <li>
          {user && <p className="">{<img src={user?.photoURL || ""} />}</p>}
        </li>
      </ul>
      <div onClick={handleNav} className="cursor-pointer block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <FaBars size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <ul className="pt-24">
          <li className="p-4 border-b border-gray-600">
            <Link to="/">Home</Link>{" "}
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link to="traininghome">Training</Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link to="about">About</Link>{" "}
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link to="/forum">Forum</Link>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
