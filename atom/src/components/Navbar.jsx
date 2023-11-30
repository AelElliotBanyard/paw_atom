import React from "react";

const Navbar = () => {
  return (
    <div className=" flex flex-col gap-2 relative">
      <div className=" bg-[#4C4C4C] rounded opacity-95 text-white text-3xl backdrop-blur-md px-5 flex flex-row justify-evenly items-center overflow-x-hidden shadow-purple-500 shadow-lg">
        <p className="hover:text-purple-500 group/inhalt py-5 ">
          Inhalt
          <div className="group-hover/inhalt:scale-y-100 scale-y-0 transition-transform origin-top absolute top-full left-0 right-0 flex bg-[#4C4C4C] rounded text-white text-3xl opacity-95 backdrop-blur-md p-5 flex-row justify-between items-center overflow-x-hidden shadow-purple-500 shadow-lg">
            <div className="flex flex-row justify-between w-full">
              <a
                href="#manhatten"
                className="relative group text-2xl text-white px-2 py-2 hover:text-purple-500"
              >
                Manhattan-Projekt
              </a>
              <a
                href="#kernwaffen"
                className="relative group text-2xl text-white px-2 py-2 hover:text-purple-500"
              >
                Kernwaffen
              </a>
              <a
                href="#besitz"
                className="relative group text-2xl text-white px-2 py-2 hover:text-purple-500"
              >
                Besitzer
              </a>
              <a
                href="#poliauswirkung"
                className="relative group text-2xl text-white px-2 py-2 hover:text-purple-500"
              >
                Politische Auswirkung
              </a>
              <a
                href="#einschlagundfolgen"
                className="relative group text-2xl text-white px-2 py-2 hover:text-purple-500"
              >
                Einschlag & Folgen
              </a>
              <a
                href="#differenzen"
                className="relative group text-2xl text-white px-2 py-2 hover:text-purple-500"
              >
                Differenzen
              </a>
            </div>
          </div>
        </p>

        <p className="hover:text-purple-500 group/ueber py-5 ">
          Über
          <div className="group-hover/ueber:scale-y-100 scale-y-0 transition-transform origin-top absolute top-full left-0 right-0 flex bg-[#4C4C4C] rounded text-white text-3xl opacity-95 backdrop-blur-md p-5 flex-row justify-evenly items-center overflow-x-hidden shadow-purple-500 shadow-lg">
            <a
              href="#quellen"
              className="relative group text-2xl text-white px-2 py-2 hover:text-purple-500"
            >
              Quellen
            </a>
            <a
              href="#contact"
              className="relative group text-2xl text-white px-2 py-2 hover:text-purple-500"
            >
              Kontakt
            </a>
          </div>
        </p>
      </div>
    </div>
  );
};

export default Navbar;
