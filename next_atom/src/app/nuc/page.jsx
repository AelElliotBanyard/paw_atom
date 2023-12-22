"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const page = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 2]);
  return (
    <div className="flex flex-col justify-center items-center ">
      <motion.div
        style={{
          scaleY: scale,
          scaleX: scale,
        }}
        className="fixed top-0 left-0 w-screen h-screen z-[-1]"
      >
        <img
          src="/img/explosion_extended.jpg"
          className="w-screen object-cover p-0 m-0 h-screen"
        />
        <p className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl md:text-6xl flex justify-center items-center font-bold backdrop-blur-lg p-10 rounded-md">
          Kernwaffen
        </p>
      </motion.div>

      <div className="flex flex-col justify-center items-center gap-10 bg-white p-5 sticky top-0 mt-[100vh]">
        <p className="text-3xl md:text-5xl text-center text-black">
          Unterschied zu Normalen Waffen
        </p>
        <div className="flex flex-col justify-center items-center md:w-2/3 w-full gap-8 text-white overflow-x-hidden ">
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
              Der Begriff Kernwaffe bezeichnet eine Waffe, deren Wirkung auf der
              Kernspaltung oder Kernfusion beruht. Die Kernwaffen werden in zwei
              Kategorien unterteilt: Atombomben und Wasserstoffbomben. Die
              Atombombe ist eine Kernwaffe, die ihre Energie aus der
              Kernspaltung gewinnt. Die Wasserstoffbombe ist eine Kernwaffe, die
              ihre Energie aus der Kernfusion gewinnt.
              <sup>
                <a href="/sources" className="text-blue-600 hover:underline">
                  5
                </a>
              </sup>
            </p>
          </motion.div>
        </div>
      </div>
      <div className="w-full flex md:flex-row flex-col sticky top-0 shadow-[#CB5329] shadow-lg bg-white overflow-x-hidden">
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
          className="relative w-full md:w-1/3"
        >
          <p className="absolute bottom-1 right-1 text-white bg-black p-1 shadow-[#CB5329] shadow-lg rounded bg-opacity-40 italic">
            Abbildung: Implosionsdesign
          </p>
          <img src="/img/Implosionsdesign.svg" className="w-full" />
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
          className="relative w-full md:w-2/3"
        >
          <p className="absolute bottom-1 right-1 text-white bg-black p-1 rounded bg-opacity-40 italic">
            Abbildung: Grösse der Waffen
          </p>
          <img src="/img/nucsize.webp" className="w-full" />
        </motion.div>
      </div>
      <div className="flex flex-col justify-center items-center gap-10 bg-white p-5 sticky top-0">
        <p className="text-3xl md:text-5xl text-center text-black">
          Ihre Typen und deren Zwecke
        </p>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 text-white  overflow-x-hidden">
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
              Der Begriff Kernwaffe bezeichnet eine Waffe, deren Wirkung auf der
              Kernspaltung oder Kernfusion beruht. Die Kernwaffen werden in zwei
              Kategorien unterteilt: Atombomben und Wasserstoffbomben. Die
              Atombombe ist eine Kernwaffe, die ihre Energie aus der
              Kernspaltung gewinnt. Die Wasserstoffbombe ist eine Kernwaffe, die
              ihre Energie aus der Kernfusion gewinnt.
              <sup>
                <a href="/sources" className="text-blue-600 hover:underline">
                  5
                </a>
              </sup>
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
              Sie erhielten die Möglichkeit, die Bedrohung eines Atomkrieges
              Neben diesen beiden Kategorien gibt es noch die sogenannten
              schmutzigen Bomben. Diese sind keine Kernwaffen, sondern
              konventionelle Sprengsätze, die radioaktives Material enthalten.
              Die radioaktiven Stoffe werden durch die Explosion in die Umgebung
              verbreitet und verseuchen diese. Die schmutzigen Bomben sind keine
              Massenvernichtungswaffen, da sie keine große Zerstörungskraft
              haben. Sie sind aber trotzdem gefährlich, da sie die Umgebung
              verseuchen und so viele Menschen töten können.
              <sup>
                <a href="/sources" className="text-blue-600 hover:underline">
                  5
                </a>
              </sup>
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
              Neben diesen drei Kategorien gibt es noch die sogenannten
              Neutronenbomben. Diese Kernwaffen sind speziell dafür entwickelt
              worden, um Menschen zu töten, aber die Infrastruktur zu erhalten.
              Die Neutronenbomben sind eine spezielle Form der Atombombe. Sie
              haben eine geringere Sprengkraft als die Atombomben, aber eine
              höhere Strahlung. Die Neutronenbomben sind auch keine
              Massenvernichtungswaffen, da sie keine große Zerstörungskraft
              haben. Sie sind aber trotzdem gefährlich, da sie die Umgebung
              verseuchen und so viele Menschen töten können.
              <sup>
                <a href="/sources" className="text-blue-600 hover:underline">
                  5
                </a>
              </sup>
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
              Neben diesen vier Kategorien gibt es noch die Kobaltbombe. Diese
              Kernwaffe ist eine spezielle Form der Wasserstoffbombe. Sie ist
              eine Wasserstoffbombe, die mit Kobalt angereichert wurde. Die
              Kobaltbombe ist eine Massenvernichtungswaffe, da sie eine große
              Zerstörungskraft hat.
              <sup>
                <a href="/sources" className="text-blue-600 hover:underline">
                  5
                </a>
              </sup>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default page;
