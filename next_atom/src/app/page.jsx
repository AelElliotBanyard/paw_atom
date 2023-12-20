"use client";
import React from "react";

export default function Home() {
  return (
    <div>
      <div className="sticky top-0">
        <img
          src="/img/explosion_extended.jpg"
          className="w-screen h-screen object-cover m-0 p-0"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center rounded-md p-10 text-white gap-2 backdrop-blur-md">
          <h1 className=" text-8xl font-bold tracking-wider">ATOM</h1>
          <h2 className="text-3xl text-center ">Eine bombastische Webseite</h2>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-2 bg-white p-5 sticky top-0">
        <p className="w-full text-center text-black md:text-5xl text-3xl">
          Manhattan Project
        </p>
        <p className="w-full text-center text-black md:text-3xl text-xl">
          Der Start der atomaren Kernwaffen
        </p>
      </div>
      <div className="w-full bg-white grid md:grid-cols-2 grid-cols-1 gap-3 p-5 h-full sticky top-0">
        <p className="bg-black rounded p-4 bg-opacity-80 h-full shadow-[#CB5329]  shadow-lg text-white first-letter:text-5xl first-letter:float-left ">
          Das Manhattan-Projekt definiert den Beginn der Entwicklung atomarer
          Kernwaffen. Es handelte sich um ein militärisches Forschungs- und
          Entwicklungsprogramm, das während des Zweiten Weltkriegs von den
          Vereinigten Staaten in Zusammenarbeit mit dem Vereinigten Königreich
          und Kanada durchgeführt wurde. Die Initiation der Forschung erfolgte
          im Dezember 1942 unter der Leitung von General Leslie Groves.
        </p>
        <p className="bg-black rounded p-4 bg-opacity-80 h-full shadow-[#CB5329] shadow-lg text-white first-letter:text-5xl first-letter:float-left">
          Das Projekt wurde von den renommierten Physikern Robert Oppenheimer
          und Enrico Fermi geleitet. Am 16. Juli 1945 erfolgte der erste Test
          einer Atombombe in der Nähe von Alamogordo, New Mexico. Dies markierte
          einen entscheidenden Schritt in der Entwicklung dieser bahnbrechenden
          Waffen. Am 6. August 1945 wurde die erste Atombombe über Hiroshima
          abgeworfen, gefolgt von einer weiteren über Nagasaki am 9. August
          1945. Die Zerstörungskraft dieser Bomben trug maßgeblich zur
          Kapitulation Japans bei, die am 15. August 1945 erfolgte. Das
          Manhattan-Projekt war das erste Programm, das die Entwicklung von
          Kernwaffen vorantrieb und wurde später durch die United States Atomic
          Energy Commission ersetzt.
        </p>
      </div>
      <div className="w-full flex md:flex-row flex-col">
        <div className="md:w-1/3 relative">
          <p className="absolute bottom-1 right-1 text-white italic">
            Abbildung: Leslie Groves
          </p>
          <img
            src="/img/Leslie_Groves.jpg"
            className="h-full"
          />
        </div>
        <div className="md:w-1/3 relative">
          <p className="absolute bottom-1 right-1 text-white italic">
            Abbildung: Oppenheimer
          </p>
          <img
            src="/img/Oppenheimer.jpg"
            className="h-full"
          />
        </div>

        <div className="md:w-1/3 relative">
          <p className="absolute bottom-1 right-1 text-white italic">
            Abbildung: Enrico Fermi
          </p>
          <img
            src="/img/Enrico_Fermi.jpg"
            className="h-full"
          />
        </div>
      </div>
    </div>
  );
}
