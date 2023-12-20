"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const page = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 2]);
  return (
    <div className="flex flex-col justify-center items-center">
      <motion.div
        style={{
          scaleY: scale,
          scaleX: scale,
        }}
        className="fixed top-0 left-0 w-screen h-screen z-[-1]"
      >
        <img
          src="/img/explosion_extended.jpg"
          className="w-screen h-screen object-cover p-0 m-0"
        />
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl md:text-6xl flex justify-center items-center font-bold backdrop-blur-lg p-10 rounded-md">
          Auswirkungen
        </p>
      </motion.div>
      <div className="flex flex-col justify-center items-center text-center gap-3 bg-white w-full sticky top-0 pt-5 pb-10 px-5 mt-[100vh]">
        <p className="text-3xl md:text-5xl text-center text-black">Einschlag</p>
        <p className="text-xl md:text-3xl text-black">
          Die vier Hauptkategorien der Auswirkungen eines Atombombeneinschlags
        </p>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8 text-white bg-white sticky -top-full pb-5 px-5 overflow-x-hidden">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={{
            onscreen: {
              x: 0,
              transition: {
                type: "spring",
                bounce: 0.2,
                duration: 0.8,
              },
            },
            offscreen: {
              x: "-100%",
            },
          }}
        >
          <p className="bg-black rounded p-4 bg-opacity-80 h-full first-letter:text-5xl first-letter:float-left shadow-[#CB5329]  shadow-lg">
            Die erste unmittelbare Auswirkung eines Atombombeneinschlags ist die
            Druckwelle, die durch die immense Hitze der Explosion erzeugt wird.
            Diese Druckwelle hat das Potenzial, Gebäude und Strukturen zu
            zerstören, und sie stellt eine unmittelbare Gefahr für Menschen dar,
            da sie sie gegen Wände oder Objekte schleudern kann. Darüber hinaus
            kann die Druckwelle auch zu erheblichen Gehörschäden führen.
          </p>
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={{
            onscreen: {
              x: 0,
              transition: {
                type: "spring",
                bounce: 0.2,
                duration: 0.8,
              },
            },
            offscreen: {
              x: "100%",
            },
          }}
        >
          <p className="bg-black rounded p-4 bg-opacity-80 h-full first-letter:text-5xl first-letter:float-left shadow-[#CB5329]  shadow-lg">
            Die Hitzestrahlung entsteht aufgrund der immensen Hitze, die während
            der Explosion freigesetzt wird. Sie kann lebensbedrohliche
            Verbrennungen bei Menschen verursachen und hat auch das Potenzial,
            Gebäude und andere Bauwerke durch Feuer zu zerstören.
          </p>
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={{
            onscreen: {
              x: 0,
              transition: {
                type: "spring",
                bounce: 0.2,
                duration: 0.8,
              },
            },
            offscreen: {
              x: "-100%",
            },
          }}
        >
          <p className="bg-black rounded p-4 bg-opacity-80 h-full first-letter:text-5xl first-letter:float-left shadow-[#CB5329] shadow-lg">
            Die Freisetzung von radioaktiver Strahlung erfolgt ebenfalls durch
            die Hitze während einer Explosion. Diese gefährliche Strahlung kann
            Menschen töten, indem sie ihre Zellen schädigt und das Risiko für
            Krebs erhöht. Zusätzlich besitzt sie die Fähigkeit, menschliche DNA
            zu verändern, was zu schwerwiegenden gesundheitlichen
            Beeinträchtigungen führen kann.
          </p>
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={{
            onscreen: {
              x: 0,
              transition: {
                type: "spring",
                bounce: 0.2,
                duration: 0.8,
              },
            },
            offscreen: {
              x: "100%",
            },
          }}
        >
          <p className="bg-black rounded p-4 bg-opacity-80 h-full first-letter:text-5xl first-letter:float-left shadow-[#CB5329]  shadow-lg">
            Elektromagnetische Impulse entstehen aufgrund der extremen Hitze,
            die bei einer Explosion freigesetzt wird. Diese Impulse haben das
            Potenzial, elektronische Geräte zu zerstören und Stromausfälle zu
            verursachen.
          </p>
        </motion.div>
      </div>

      <div className="flex md:flex-row flex-col w-full sticky top-0 overflow-x-hidden bg-white">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={{
            onscreen: {
              x: 0,
              transition: {
                type: "spring",
                bounce: 0.2,
                duration: 0.8,
              },
            },
            offscreen: {
              x: "-100%",
            },
          }}
          className="md:w-1/2 w-full relative"
        >
          <p className="absolute bottom-1 right-1 text-white bg-black p-1 rounded bg-opacity-40 italic">
            Abbildung: Explosionsvergleich
          </p>
          <img src="/img/comparison.jpg" className="h-full w-full" />
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={{
            onscreen: {
              x: 0,
              transition: {
                type: "spring",
                bounce: 0.2,
                duration: 0.8,
              },
            },
            offscreen: {
              x: "100%",
            },
          }}
          className="md:w-1/2 w-full relative"
        >
          <p className="absolute bottom-1 right-1 text-white bg-black p-1 rounded bg-opacity-40 italic">
            Abbildung: Radiusvergleich{" "}
          </p>
          <img src="/img/comparison_2.jpg" className="h-full w-full" />
        </motion.div>
      </div>

      <div className="flex flex-col justify-center items-center text-center gap-3 bg-white text-black pb-10 px-5 pt-5 sticky top-0 overflow-x-hidden">
        <p className="text-3xl md:text-5xl text-center text-black">
          Politische Auswirkung
        </p>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={{
            onscreen: {
              x: 0,
              transition: {
                type: "spring",
                bounce: 0.2,
                duration: 0.8,
              },
            },
            offscreen: {
              x: "-100%",
            },
          }}
        >
          <p className="bg-black rounded p-4 bg-opacity-80 h-full shadow-[#CB5329] shadow-lg text-white">
            Die Entwicklung von Atomwaffen und das Monopol einiger Staaten
            darüber führten zur Entstehung einer nuklearen Hegemonie und der
            Bedrohung durch nukleare Erpressung in den internationalen
            Beziehungen. Die nuklearen Mächte erlangten die Fähigkeit, die
            "Bedrohung durch Atomwaffen" zu nutzen, um ihre nationalen
            Interessen in den internationalen Beziehungen zu sichern.
          </p>
        </motion.div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8 text-white sticky top-0 p-5 bg-white overflow-x-hidden">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={{
            onscreen: {
              x: 0,
              transition: {
                type: "spring",
                bounce: 0.2,
                duration: 0.8,
              },
            },
            offscreen: {
              x: "-100%",
            },
          }}
        >
          <p className="bg-black rounded p-4 bg-opacity-80 h-full first-letter:text-5xl first-letter:float-left shadow-[#CB5329] shadow-lg">
            Sie erhielten die Möglichkeit, die Bedrohung eines Atomkrieges
            einzusetzen, um ihre gewünschten Ziele in Beziehungen zu
            nicht-nuklearen Staaten zu erreichen. Darüber hinaus zwang sie dies
            dazu, ihre nukleare Überlegenheit aufrechtzuerhalten und zu
            verhindern, dass nicht-nukleare Staaten Atomwaffen und
            Atomtechnologie erlangen. Sie entwickelten und erweiterten ständig
            ihre Atommacht und versuchten gleichzeitig immer, nicht-nuklearen
            Staaten dies im Namen des Weltfriedens zu verwehren.
          </p>
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={{
            onscreen: {
              x: 0,
              transition: {
                type: "spring",
                bounce: 0.2,
                duration: 0.8,
              },
            },
            offscreen: {
              x: "100%",
            },
          }}
        >
          <p className="bg-black rounded p-4 bg-opacity-80 h-full first-letter:text-5xl first-letter:float-left shadow-[#CB5329] shadow-lg">
            Der Moskauer Teilabrüstungsvertrag (Partial Test Ban Treaty, PTBT),
            der Nichtverbreitungsvertrag (NPT) und der Vertrag über das
            umfassende Verbot von Nuklearversuchen (Comprehensive Test Ban
            Treaty, CTBT) wurden alle von diesem verborgenen Verlangen geleitet.
            Die Frage der nuklearen Verbreitung gegenüber der Nichtverbreitung
            wurde zu einem Hauptthema in den internationalen Beziehungen, und
            auch heute ist sie ein heiß diskutiertes Thema.
          </p>
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={{
            onscreen: {
              x: 0,
              transition: {
                type: "spring",
                bounce: 0.2,
                duration: 0.8,
              },
            },
            offscreen: {
              x: "-100%",
            },
          }}
        >
          <p className="bg-black rounded p-4 bg-opacity-80 h-full first-letter:text-5xl first-letter:float-left shadow-[#CB5329] shadow-lg">
            Die obige Darstellung zeigt deutlich, dass die Entstehung von
            Atomwaffen die Natur und den Inhalt der internationalen Beziehungen
            materiell beeinflusst hat. Die Atomwaffen waren dafür
            verantwortlich, dass das internationale System sich fast völlig von
            dem klassischen internationalen System unterschied.
          </p>
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={{
            onscreen: {
              x: 0,
              transition: {
                type: "spring",
                bounce: 0.2,
                duration: 0.8,
              },
            },
            offscreen: {
              x: "100%",
            },
          }}
        >
          <p className="bg-black rounded p-4 bg-opacity-80 h-full first-letter:text-5xl first-letter:float-left shadow-[#CB5329] shadow-lg">
            Atomwaffen können jetzt legitim als der Hauptfaktor in den
            internationalen Beziehungen bezeichnet werden. Während der Zeit von
            1945 bis 1990 beeinflussten Atomwaffen die Politik des Kalten
            Krieges. Sie erschwerten die Sicherung von Abrüstung und
            Rüstungskontrolle erheblich und machten sie zu einer komplexen und
            problematischen sowie wenig erfolgreichen Übung. Sie trugen zur
            Schaffung eines Gleichgewichts des Schreckens in den internationalen
            Beziehungen bei.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default page;
