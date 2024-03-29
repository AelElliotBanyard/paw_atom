"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 2]);

  return (
    <div>
      <motion.div
        style={{
          scaleY: scale,
          scaleX: scale,
        }}
        className="fixed top-0 left-0 w-screen h-screen z-[-1]"
      >
        <video
          className="m-0 p-0 object-cover h-screen w-screen"
          autoPlay
          muted
          loop
        >
          <source src="/img/explosion.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center rounded-md p-10 text-white gap-2 backdrop-blur-md">
          <h1 className=" text-8xl font-bold tracking-wider">ATOM</h1>
          <h2 className="text-3xl text-center ">Eine bombastische Webseite</h2>
        </div>
        <p className="absolute bottom-2 right-2 md:right-6 text-white bg-black p-1 rounded bg-opacity-40 italic">
          Abbildung: Video Startseite
        </p>
      </motion.div>
      <div className=" mt-[100vh]">
        <div className="w-full flex flex-col justify-center items-center gap-2 bg-white p-5 sticky top-0">
          <p className="w-full text-center text-black md:text-5xl text-3xl">
            Manhattan Project
          </p>
          <p className="w-full text-center text-black md:text-3xl text-xl">
            Der Start der atomaren Kernwaffen
          </p>
        </div>
        <div className="w-full bg-white grid md:grid-cols-2 grid-cols-1 gap-3 p-5 h-full sticky top-0 overflow-x-hidden">
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
            <p className="bg-black rounded p-4 bg-opacity-80 h-full text-white first-letter:text-5xl first-letter:float-left ">
              Das Manhattan-Projekt definiert den Beginn der Entwicklung
              atomarer Kernwaffen. Es handelte sich um ein militärisches
              Forschungs- und Entwicklungsprogramm, das während des Zweiten
              Weltkriegs von den Vereinigten Staaten in Zusammenarbeit mit dem
              Vereinigten Königreich und Kanada durchgeführt wurde. Die
              Initiation der Forschung erfolgte im Dezember 1942 unter der
              Leitung von General Leslie Groves.
              <sup>
                <Link href="/sources" className="text-blue-600 hover:underline">
                  4
                </Link>
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
            <p className="bg-black rounded p-4 bg-opacity-80 h-full text-white first-letter:text-5xl first-letter:float-left">
              Das Projekt wurde von den renommierten Physikern Robert
              Oppenheimer und Enrico Fermi geleitet. Am 16. Juli 1945 erfolgte
              der erste Test einer Atombombe in der Nähe von Alamogordo, New
              Mexico. Dies markierte einen entscheidenden Schritt in der
              Entwicklung dieser bahnbrechenden Waffen. Am 6. August 1945 wurde
              die erste Atombombe über Hiroshima abgeworfen, gefolgt von einer
              weiteren über Nagasaki am 9. August 1945. Die Zerstörungskraft
              dieser Bomben trug maßgeblich zur Kapitulation Japans bei, die am
              15. August 1945 erfolgte. Das Manhattan-Projekt war das erste
              Programm, das die Entwicklung von Kernwaffen vorantrieb und wurde
              später durch die United States Atomic Energy Commission ersetzt.
              <sup>
                <Link href="/sources" className="text-blue-600 hover:underline">
                  4
                </Link>
              </sup>
            </p>
          </motion.div>
        </div>
        <div className="w-full flex md:flex-row flex-col bg-white overflow-x-hidden sticky top-0">
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
                  delay: 0.5,
                },
              },
              offscreen: {
                x: "-100%",
              },
            }}
            className="md:w-1/3 relative"
          >
            <p className="absolute bottom-1 right-1 text-white italic">
              Abbildung: Leslie Groves
            </p>
            <img src="/img/Leslie_Groves.jpg" className="h-full" />
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
                  delay: 0.5,
                },
              },
              offscreen: {
                x: "-100%",
              },
            }}
            className="md:w-1/3 relative"
          >
            <p className="absolute bottom-1 right-1 text-white italic">
              Abbildung: Oppenheimer
            </p>
            <img src="/img/Oppenheimer.jpg" className="h-full" />
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
                  delay: 0.5,
                },
              },
              offscreen: {
                x: "100%",
              },
            }}
            className="md:w-1/3 relative"
          >
            <p className="absolute bottom-1 right-1 text-white italic">
              Abbildung: Enrico Fermi
            </p>
            <img src="/img/Enrico_Fermi.jpg" className="h-full" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
