"use client";
import React, { useEffect } from "react";
import WorldMap from "react-svg-worldmap";

const page = () => {
  let size = 200;
  useEffect(() => {
    size = Math.min(window.innerWidth, window.innerHeight) * 1.2;
  }, []);
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <WorldMap
        color="lightblue"
        backgroundColor="black"
        borderColor="white"
        value-suffix="Atomwaffen"
        valuePrefix="~"
        data={[
          { country: "us", value: 5400 },
          { country: "ru", value: 6000 },
          { country: "cn", value: 400 },
          { country: "uk", value: 120 },
          { coutnry: "fr", value: 290 },
          { country: "kp", value: 50 },
          { country: "in", value: 160 },
          { country: "pk", value: 170 },
          { country: "il", value: 100 },
        ]}
        size={size}
      />
    </div>
  );
};

export default page;
