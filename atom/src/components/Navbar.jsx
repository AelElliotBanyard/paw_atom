import React from "react";

const Navbar = () => {
  return (
    <div className=" bg-[#5c5c5cae] rounded backdrop-blur-md p-5 flex flex-row justify-evenly items-center overflow-x-hidden ">
      <a
        href="#manhatten"
        className="relative group text-2xl text-white px-2 py-2 sm:hidden"
      >
        <span className="absolute bottom-0 left-0 top-0 w-0 rounded bg-white transition-all group-hover:w-full -z-10"></span>
        <span className="group-hover:text-black">Manhattan-Project</span>
      </a>
      <a
        href="#kernwaffen"
        className="relative group text-2xl text-white px-2 py-2"
      >
        <span className="absolute bottom-0 left-0 top-0 w-0 rounded bg-white transition-all group-hover:w-full -z-10"></span>
        <span className="group-hover:text-black">Kernwaffen</span>
      </a>
      <a
        href="#besitz"
        className="relative group text-2xl text-white px-2 py-2"
      >
        <span className="absolute bottom-0 left-0 top-0 w-0 rounded bg-white transition-all group-hover:w-full -z-10"></span>
        <span className="group-hover:text-black">Besitz</span>
      </a>
      <a
        href="#poliauswirkung"
        className="relative group text-2xl text-white px-2 py-2"
      >
        <span className="absolute bottom-0 left-0 top-0 w-0 rounded bg-white transition-all group-hover:w-full -z-10"></span>
        <span className="group-hover:text-black">Politische Auswirkung</span>
      </a>
      <a
        href="#einschlagundfolgen"
        className="relative group text-2xl text-white px-2 py-2 "
      >
        <span className="absolute bottom-0 left-0 top-0 w-0 rounded bg-white transition-all group-hover:w-full -z-10"></span>
        <span className="group-hover:text-black">Einschlag und Folgen</span>
      </a>
      <a
        href="#differenzen"
        className="relative group text-2xl text-white px-2 py-2"
      >
        <span className="absolute bottom-0 left-0 top-0 w-0 rounded bg-white transition-all group-hover:w-full -z-10"></span>
        <span className="group-hover:text-black">Differenzen</span>
      </a>
    </div>
  );
};

export default Navbar;
