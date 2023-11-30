import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Section = ({ title, images, id, side, children }) => {
  const [height, setHeight] = useState(1);

  useEffect(() => {
    setHeight(document.getElementById("sidething").offsetHeight - 32);
  });
  return (
    <div
      id={id}
      className={
        "h-screen w-full flex items-center " +
        (side === "right" ? "justify-end" : "justify-start")
      }
    >
      <div
        className={
          "group w-2/3 min-h-[50%] bg-[#4C4C4C] bg-opacity-90 p-4 mx-16 relative rounded-md " +
          (side === "right" ? "hover:rounded-s-none" : "hover:rounded-e-none")
        }
        style={
          side === "right"
            ? { boxShadow: "7px 10px 15px -3px rgba(239,68,68,0.75)" }
            : { boxShadow: "-7px 10px 15px -3px rgba(239,68,68,0.75)" }
        }
      >
        <h1 className="font-bold text-2xl text-white">{title}</h1>
        <br />
        <div>{children}</div>
        {images && (
          <div
            id="sidething"
            className={
              "h-full w-2/5 absolute top-0 bg-[#4C4C4C] bg-opacity-90 p-4 scale-x-0 transition-transform group-hover:scale-x-100 " +
              (side === "right"
                ? " -left-[40%] rounded-s-md origin-right"
                : "-right-[40%] rounded-e-md origin-left")
            }
            style={
              side === "right"
                ? { boxShadow: "-7px 10px 15px -3px rgba(239,68,68,0.75)" }
                : { boxShadow: "7px 10px 15px -3px rgba(239,68,68,0.75)" }
            }
          >
            <div style={{ margin: "auto", maxHeight: "100%" }}>
              <Carousel
                useKeyboardArrows={true}
                showThumbs={false}
                showStatus={false}
                className="h-full"
              >
                {images.map((URL, index) => (
                  <div className="slide h-full">
                    <img
                      alt="sample_file"
                      src={URL}
                      key={index}
                      style={{ maxHeight: height, width: "auto" }}
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Section;
