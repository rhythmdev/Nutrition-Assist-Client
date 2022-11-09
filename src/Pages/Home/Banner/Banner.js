import React from "react";
import Typewriter from "typewriter-effect";
import diet from "../../../assets/diet.svg";

const Banner = () => {
  return (
    <div className="my-10 mx-auto">
      <section className="bg-gray-100 text-gray-800 rounded-md">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left  text-6xl font-bold font-mono">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 50,
                strings: [
                  "Hi, I am Barry Allen",
                  "I can help you to",
                  "maintain your nutritions ",
                  "in your health",
                  "and body.",
                ],
              }}
            />
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 ">
            <img src={diet} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
