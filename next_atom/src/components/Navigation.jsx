"use client";
import Link from "next/link";
import React from "react";

const Navigation = () => {
  const [showNav, setShowNav] = React.useState(false);
  const [burgerOpen, setBurgerOpen] = React.useState(false);

  const toggleBurger = () => {
    setBurgerOpen(!burgerOpen);
    setShowNav(!showNav);
  };

  return (
    <div
      className={
        " flex justify-center items-center fixed top-0 right-0 z-50 " +
        (showNav === true ? " w-full h-screen z-30 " : "w-6 h-6")
      }
    >
      <div
        className="flex flex-col justify-center items-center absolute top-1.5 right-1 z-50 bg-black bg-opacity-20 p-2 rounded"
        onClick={toggleBurger}
      >
        <span
          className={
            "bg-white block transition-all duration-300 ease-out h-1 w-6 rounded-sm " +
            (burgerOpen ? "rotate-45 translate-y-1.5" : "-translate-y-0.5")
          }
        ></span>
        <span
          className={
            "bg-white block transition-all duration-300 ease-out h-1 w-6 rounded-sm my-0.5 " +
            (burgerOpen ? "opacity-0" : "opacity-100")
          }
        ></span>
        <span
          className={
            "bg-white block transition-all duration-300 ease-out h-1 w-6 rounded-sm " +
            (burgerOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-0.5")
          }
        ></span>
      </div>

      <div
        className={
          " h-full flex justify-center items-center w-full backdrop-blur-md bg-black bg-opacity-50  transition-transform origin-top-right " +
          (showNav === true ? "scale-100" : " scale-0")
        }
      >
        <div className=" md:w-1/3 flex flex-col justify-center items-center gap-10 text-3xl font-bold text-center">
          <Link
            className="hover:bg-[#DEAF58] hover:bg-opacity-50 hover:rounded p-2 w-full"
            onClick={toggleBurger}
            href="/"
          >
            Startseite
          </Link>
          <Link
            className="hover:bg-[#DEAF58] hover:bg-opacity-50 hover:rounded p-2 w-full"
            onClick={toggleBurger}
            href="/nuc"
          >
            Kernwaffen
          </Link>
          <Link
            className="hover:bg-[#DEAF58] hover:bg-opacity-50 hover:rounded p-2 w-full"
            onClick={toggleBurger}
            href="/effects"
          >
            Auswirkungen
          </Link>
          <Link
            className="hover:bg-[#DEAF58] hover:bg-opacity-50 hover:rounded p-2 w-full"
            onClick={toggleBurger}
            href="/map"
          >
            Besitzer
          </Link>
          <Link
            className="hover:bg-[#DEAF58] hover:bg-opacity-50 hover:rounded p-2 w-full"
            onClick={toggleBurger}
            href="/contact"
          >
            Kontakt
          </Link>
          <Link
            className="hover:bg-[#DEAF58] hover:bg-opacity-50 hover:rounded p-2 w-full"
            onClick={toggleBurger}
            href="/sources"
          >
            Quellen
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
