import React from "react";

const Navbar = () => {
  const [contentActive, setContentActive] = React.useState(false);
  const [aboutActive, setAboutActive] = React.useState(false);
  return (
    <div className=" flex flex-col gap-2">
      <div className=" bg-[#4C4C4C] rounded opacity-95 text-white text-3xl backdrop-blur-md p-5 flex flex-row justify-evenly items-center overflow-x-hidden shadow-purple-500 shadow-lg">
        <p className="hover:text-purple-500 group/inhalt">Inhalt</p>
        <p>Über</p>
      </div>
      <div className=" flex bg-[#4C4C4C] rounded text-white text-3xl opacity-95 backdrop-blur-md p-5 flex-row justify-evenly items-center overflow-x-hidden shadow-purple-500 shadow-lg">
          <div className="group-hover/inhalt:scale-100 scale-0">
            <a
              href="#manhatten"
              className="relative group text-2xl text-white px-2 py-2"
            >
              Manhattan-Projekt
            </a>
            <a
              href="#kernwaffen"
              className="relative group text-2xl text-white px-2 py-2"
            >
              Kernwaffen
            </a>
            <a
              href="#besitz"
              className="relative group text-2xl text-white px-2 py-2"
            >
              Besitzer
            </a>
            <a
              href="#poliauswirkung"
              className="relative group text-2xl text-white px-2 py-2"
            >
              Politische Auswirkung
            </a>
            <a
              href="#einschlagundfolgen"
              className="relative group text-2xl text-white px-2 py-2 "
            >
              Einschlag & Folgen
            </a>
            <a
              href="#differenzen"
              className="relative group text-2xl text-white px-2 py-2"
            >
              Differenzen
            </a>
          </div>
        {aboutActive && (
          <div>
            <a href="#quellen">Quellen</a>
            <a href="#contact"> Kontakt</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
