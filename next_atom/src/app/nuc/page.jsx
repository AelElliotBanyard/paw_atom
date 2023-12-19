import React from "react";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src="/img/explosion.jpg" className="w-screen h-screen"/>
      <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl flex justify-center items-center font-bold backdrop-blur-lg p-10 rounded-md">
        Kernwaffen
      </p>

      <div className="flex flex-col">
          <div className="flex flex-col justify-center items-center gap-10 bg-white p-5">
            <p className="text-5xl text-black">Unteschied zu Normalen Waffen</p>
            <div className="flex flex-col justify-center items-center w-2/3 gap-8 text-white ">
              <p className="bg-black rounded p-4 bg-opacity-80 h-full first-letter:text-5xl first-letter:float-left shadow-[#CB5329] shadow-lg">
                Der Begriff Kernwaffe bezeichnet eine Waffe, deren Wirkung auf der
                Kernspaltung oder Kernfusion beruht. Die Kernwaffen werden in zwei
                Kategorien unterteilt: Atombomben und Wasserstoffbomben. Die
                Atombombe ist eine Kernwaffe, die ihre Energie aus der Kernspaltung
                gewinnt. Die Wasserstoffbombe ist eine Kernwaffe, die ihre Energie
                aus der Kernfusion gewinnt.
              </p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Implosionsdesign.svg" className="w-2/3" />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-10 bg-white p-5">
            <p className="text-5xl text-black">Ihre Typen und deren Zwecke</p>
            <div className="grid grid-cols-2 gap-8 text-white ">
              <p className="bg-black rounded p-4 bg-opacity-80 h-full first-letter:text-5xl first-letter:float-left shadow-[#CB5329] shadow-lg">
                Der Begriff Kernwaffe bezeichnet eine Waffe, deren Wirkung auf der
                Kernspaltung oder Kernfusion beruht. Die Kernwaffen werden in zwei
                Kategorien unterteilt: Atombomben und Wasserstoffbomben. Die
                Atombombe ist eine Kernwaffe, die ihre Energie aus der Kernspaltung
                gewinnt. Die Wasserstoffbombe ist eine Kernwaffe, die ihre Energie
                aus der Kernfusion gewinnt.
              </p>
              <p className="bg-black rounded p-4 bg-opacity-80 h-full first-letter:text-5xl first-letter:float-left shadow-[#CB5329] shadow-lg">
                Sie erhielten die Möglichkeit, die Bedrohung eines Atomkrieges Neben
                diesen beiden Kategorien gibt es noch die sogenannten schmutzigen
                Bomben. Diese sind keine Kernwaffen, sondern konventionelle
                Sprengsätze, die radioaktives Material enthalten. Die radioaktiven
                Stoffe werden durch die Explosion in die Umgebung verbreitet und
                verseuchen diese. Die schmutzigen Bomben sind keine
                Massenvernichtungswaffen, da sie keine große Zerstörungskraft haben.
                Sie sind aber trotzdem gefährlich, da sie die Umgebung verseuchen
                und so viele Menschen töten können.
              </p>
              <p className="bg-black rounded p-4 bg-opacity-80 h-full first-letter:text-5xl first-letter:float-left shadow-[#CB5329] shadow-lg">
                Neben diesen drei Kategorien gibt es noch die sogenannten
                Neutronenbomben. Diese Kernwaffen sind speziell dafür entwickelt
                worden, um Menschen zu töten, aber die Infrastruktur zu erhalten.
                Die Neutronenbomben sind eine spezielle Form der Atombombe. Sie
                haben eine geringere Sprengkraft als die Atombomben, aber eine
                höhere Strahlung. Die Neutronenbomben sind auch keine
                Massenvernichtungswaffen, da sie keine große Zerstörungskraft haben.
                Sie sind aber trotzdem gefährlich, da sie die Umgebung verseuchen
                und so viele Menschen töten können.
              </p>
              <p className="bg-black rounded p-4 bg-opacity-80 h-full first-letter:text-5xl first-letter:float-left shadow-[#CB5329] shadow-lg">
                Neben diesen vier Kategorien gibt es noch die Kobaltbombe. Diese
                Kernwaffe ist eine spezielle Form der Wasserstoffbombe. Sie ist eine
                Wasserstoffbombe, die mit Kobalt angereichert wurde. Die Kobaltbombe
                ist eine Massenvernichtungswaffe, da sie eine große Zerstörungskraft
                hat.
              </p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default page;
