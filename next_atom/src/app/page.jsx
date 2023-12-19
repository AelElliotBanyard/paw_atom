"use client";
import React from "react";

export default function Home() {
  return (
    <div>
      <div className="relative">
        <img
          src="https://images.news9live.com/wp-content/uploads/2023/08/atombomb.jpg?w=1200&enlarge=true"
          alt="Fat Man"
          className="w-screen h-screen object-cover m-0 p-0 blur"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center bg-white rounded-md bg-opacity-30 p-5 gap-2 ">
          <h1 className="text-6xl font-bold text-black tracking-wider">Atom</h1>
          <h2 className="text-3xl text-black">Eine bombastische Webseite</h2>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-2 bg-gray-300 py-16">
        <h1 className="w-full text-center text-black text-5xl">
          Manhattan Project
        </h1>
        <h2 className="w-full text-center text-black text-3xl">
          Der Start der atomaren Kernwaffen
        </h2>
      </div>
      <div className="w-full flex flex-row">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/37/Leslie_Groves.jpg"
          alt=""
          className="w-1/3 object-cover"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/85/Oppenheimer_%28cropped%29.jpg"
          alt=""
          className="w-1/3 object-cover"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/d4/Enrico_Fermi_1943-49.jpg"
          alt=""
          className="w-1/3 object-cover"
        />
      </div>
      <div className="w-full bg-gray-300">
        <p className="text-black py-8 px-4 text-lg first-letter:text-5xl first-letter:float-left">
          Das Manhattan Projekt definiert den Start der atomaren Kernwaffen. Das
          Projekt war eim militärisches Forschungs- und Entwicklungsprogramm,
          das während des Zweiten Weltkriegs von den Vereinigten Staaten mit
          Unterstützung des Vereinigten Königreichs und Kanadas durchgeführt
          wurde. Ziel war die Entwicklung und der Bau der ersten Atombombe. Die
          Forschung wurde im Dezember 1942 unter der Leitung von General Leslie
          Groves aufgenommen. Das Projekt wurde von den Physikern Robert
          Oppenheimer und Enrico Fermi geleitet. Am 16. Juli 1945 wurde die
          erste Atombombe in der Nähe von Alamogordo, New Mexico, getestet. Am
          6. August 1945 wurde eine Atombombe über Hiroshima abgeworfen, und am
          9. August 1945 wurde eine Atombombe über Nagasaki abgeworfen. Am 15.
          August 1945 kapitulierte Japan. Das Manhattan-Projekt war das erste
          Programm, das Kernwaffen entwickelte. Es wurde später durch das United
          States Atomic Energy Commission ersetzt.
        </p>
      </div>
    </div>
  );
}
