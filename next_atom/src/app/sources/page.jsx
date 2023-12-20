"use client";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const page = () => {
  const [showText, setShowText] = React.useState(false);
  const [showPic, setShowPic] = React.useState(false);

  return (
    <div className="flex flex-col justify-center min-h-screen items-center bg-main bg-center bg-fixed bg-cover">
      <div className="p-10 bg-black bg-opacity-50 backdrop-blur-md w-2/3 break-words flex flex-col gap-4 mb-10 mt-10 shadow-[#CB5329] shadow-lg">
        <p className="w-full text-center text-white text-4xl md:text-6xl pb-10">
          Quellen
        </p>
        <div className=" border-b border-b-white pb-4">
          <div
            className="flex flex-row gap-2"
            onClick={() => setShowPic(!showPic)}
          >
            <p className="md:text-3xl text-2xl w-3/4">Abbildungen </p>
            <IoIosArrowDown
              size={40}
              className={
                " w-1/4 " + (showPic === true ? " rotate-180 " : " rotate-0")
              }
            />
          </div>
          <div
            className={
              "transition-all origin-top duration-500 " +
              (showPic ? "scale-y-100 max-h-[500vh] " : "scale-y-0 max-h-0")
            }
          >
            <p>
              Flagge USA:
              <br />
              <a
                className="text-blue-500 border-b border-b-blue-500"
                href="https://images.rawpixel.com/image_social_landscape/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L3BkbWlzYzJiYXRjaDItbG9jOTc1MTU1NDktaW1hZ2VfNS5qcGc.jpg"
              >
                https://images.rawpixel.com/image_social_landscape/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L3BkbWlzYzJiYXRjaDItbG9jOTc1MTU1NDktaW1hZ2VfNS5qcGc.jpg
              </a>
            </p>
            <p>
              Flagge Russland:
              <br />
              <a
                className="text-blue-500 border-b border-b-blue-500"
                href="https://upload.wikimedia.org/wikipedia/commons/4/40/Российский0_флаг1200px-Flag_of_Russia.png"
              >
                https://upload.wikimedia.org/wikipedia/commons/4/40/Российский0_флаг1200px-Flag_of_Russia.png
              </a>
            </p>
            <p>
              Flagge China:
              <br />
              <a
                className="text-blue-500 border-b border-b-blue-500"
                href="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/China_Flag_-_Alternative.svg/1024px-China_Flag_-_Alternative.svg.png?20160821181037"
              >
                https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/China_Flag_-_Alternative.svg/1024px-China_Flag_-_Alternative.svg.png?20160821181037
              </a>
            </p>
            <p>
              Flagge UK:
              <br />
              <a
                className="text-blue-500 border-b border-b-blue-500"
                href="https://www.publicdomainpictures.net/pictures/340000/nahled/national-flag-of-uk-the-united-kingdom-of-great-britain-and-no-1588673083tIa.jpg"
              >
                https://www.publicdomainpictures.net/pictures/340000/nahled/national-flag-of-uk-the-united-kingdom-of-great-britain-and-no-1588673083tIa.jpg
              </a>
            </p>
            <p>
              Flagge Frankreich:
              <br />
              <a
                className="text-blue-500 border-b border-b-blue-500"
                href="https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_France_%28new%29.png"
              >
                https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_France_%28new%29.png
              </a>
            </p>
            <p>
              Flagge Nordkorea:
              <br />
              <a
                className="text-blue-500 border-b border-b-blue-500"
                href="https://cdn.britannica.com/47/1947-004-44F4E790/Flag-North-Korea.jpg"
              >
                https://cdn.britannica.com/47/1947-004-44F4E790/Flag-North-Korea.jpg
              </a>
            </p>
            <p>
              Flagge Indien:
              <br />
              <a
                className="text-blue-500 border-b border-b-blue-500"
                href="https://upload.wikimedia.org/wikipedia/commons/7/7b/India_flag_300.png"
              >
                https://upload.wikimedia.org/wikipedia/commons/7/7b/India_flag_300.png
              </a>
            </p>
            <p>
              Flagge Pakistan:
              <br />
              <a
                className="text-blue-500 border-b border-b-blue-500"
                href="https://cdn.britannica.com/46/3346-004-D3BDE016/flag-symbolism-Pakistan-design-Islamic.jpg"
              >
                https://cdn.britannica.com/46/3346-004-D3BDE016/flag-symbolism-Pakistan-design-Islamic.jpg
              </a>
            </p>
            <p>
              Flagge Israel:
              <br />
              <a
                className="text-blue-500 border-b border-b-blue-500"
                href="https://upload.wikimedia.org/wikipedia/commons/5/5c/Israel_flag_300.png"
              >
                https://upload.wikimedia.org/wikipedia/commons/5/5c/Israel_flag_300.png
              </a>
            </p>
            <p>
              Implosionsdesign:
              <br />
              <a
                className="text-blue-500 border-b border-b-blue-500"
                href="https://upload.wikimedia.org/wikipedia/commons/f/fc/Implosionsdesign.svg"
              >
                https://upload.wikimedia.org/wikipedia/commons/f/fc/Implosionsdesign.svg
              </a>
            </p>
            <p>
              Grösse Der Waffen:
              <br />
              <a
                className="text-blue-500 border-b border-b-blue-500"
                href="https://cdn10.picryl.com/photo/1987/01/01/a-graph-depicting-soviet-and-nato-longer-range-intermediate-range-nuclear-missiles-4e2c19-1024.jpg"
              >
                https://cdn10.picryl.com/photo/1987/01/01/a-graph-depicting-soviet-and-nato-longer-range-intermediate-range-nuclear-missiles-4e2c19-1024.jpg
              </a>
            </p>
            <p>
              Leslie Groves:
              <br />
              <a
                className="text-blue-500 border-b border-b-blue-500"
                href="https://upload.wikimedia.org/wikipedia/commons/3/37/Leslie_Groves.jpg"
              >
                https://upload.wikimedia.org/wikipedia/commons/3/37/Leslie_Groves.jpg
              </a>
            </p>
            <p>
              Oppenheimer:
              <br />
              <a
                className="text-blue-500 border-b border-b-blue-500"
                href="https://upload.wikimedia.org/wikipedia/commons/8/85/Oppenheimer_%28cropped%29.jpg"
              >
                https://upload.wikimedia.org/wikipedia/commons/8/85/Oppenheimer_%28cropped%29.jpg
              </a>
            </p>
            <p>
              Enrico Fermi:
              <br />
              <a
                className="text-blue-500 border-b border-b-blue-500"
                href="https://upload.wikimedia.org/wikipedia/commons/d/d4/Enrico_Fermi_1943-49.jpg"
              >
                https://upload.wikimedia.org/wikipedia/commons/d/d4/Enrico_Fermi_1943-49.jpg
              </a>
            </p>
            <p>
              Explosionsvergleich:
              <br />
              <a
                className="text-blue-500 border-b border-b-blue-500"
                href="https://pbs.twimg.com/media/FMVfj0QVQAsKJdw.jpg"
              >
                https://pbs.twimg.com/media/FMVfj0QVQAsKJdw.jpg
              </a>
            </p>
            <p>
              Radiusvergleich:
              <br />
              <a
                className="text-blue-500 border-b border-b-blue-500"
                href="https://www.aasc.ucla.edu/cab/imgContent/200708230003.jpg"
              >
                https://www.aasc.ucla.edu/cab/imgContent/200708230003.jpg
              </a>
            </p>
          </div>
        </div>
        <div>
          <div
            className="flex flex-row gap-2"
            onClick={() => setShowText(!showText)}
          >
            <p className="md:text-3xl text-2xl w-3/4">Textquellen </p>
            <IoIosArrowDown
              size={40}
              className={
                " w-1/4 " + (showText === true ? " rotate-180 " : " rotate-0")
              }
            />
          </div>
          <div
            className={
              "transition-all origin-top duration-500 " +
              (showText ? "scale-y-100 max-h-[500vh]" : "scale-y-0 max-h-0")
            }
          >
            <p>
              <sup className="pr-2">1</sup>
              <a
                className="text-blue-500 border-b border-b-blue-500"
                href="https://www.welt.de/geschichte/article205905099/Atombombe-So-entstand-die-Atomwaffe.html"
              >
                Vgl. ucsusa "Nuclear Weapons Worldwide"
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
