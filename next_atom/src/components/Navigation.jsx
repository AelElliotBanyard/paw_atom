"use client";
import Link from "next/link";
import React from "react";
import { TiThMenu } from "react-icons/ti";

const Navigation = () => {
  const [showNav, setShowNav] = React.useState(false);

  return (
    <div className={"md:nav nav-sm " + (showNav ? "w-screen h-screen " : "")}>
      <div
        className={
          " absolute top-0 right-0 transition-transform m-2 z-10 bg-black bg-opacity-20 rounded " +
          (showNav === true ? " rotate-90 " : " rotate-0")
        }
        onClick={(e) => setShowNav(!showNav)}
      >
        <TiThMenu size={48} />
      </div>

      <div
        className={
          " h-full flex justify-center items-center w-full backdrop-blur-md md:bg-black bg-transparent bg-opacity-50 transition-transform origin-top-right " +
          (showNav === true ? "scale-100" : " scale-0")
        }
      >
        <div className=" md:w-1/3 flex flex-col justify-center items-center gap-10 text-3xl font-bold text-center">
          <Link
            className="hover:bg-[#DEAF58] hover:bg-opacity-50 hover:rounded p-2 w-full"
            onClick={(e) => setShowNav(false)}
            href="/"
          >
            Startseite
          </Link>
          <Link
            className="hover:bg-[#DEAF58] hover:bg-opacity-50 hover:rounded p-2 w-full"
            onClick={(e) => setShowNav(false)}
            href="/nuc"
          >
            Kernwaffen
          </Link>
          <Link
            className="hover:bg-[#DEAF58] hover:bg-opacity-50 hover:rounded p-2 w-full"
            onClick={(e) => setShowNav(false)}
            href="/effects"
          >
            Auswirkungen
          </Link>
          <Link
            className="hover:bg-[#DEAF58] hover:bg-opacity-50 hover:rounded p-2 w-full"
            onClick={(e) => setShowNav(false)}
            href="/map"
          >
            Karte
          </Link>
          <Link
            className="hover:bg-[#DEAF58] hover:bg-opacity-50 hover:rounded p-2 w-full"
            onClick={(e) => setShowNav(false)}
            href="/contact"
          >
            Kontakt
          </Link>
          <Link
            className="hover:bg-[#DEAF58] hover:bg-opacity-50 hover:rounded p-2 w-full"
            onClick={(e) => setShowNav(false)}
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
