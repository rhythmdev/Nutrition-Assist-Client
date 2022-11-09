import React from "react";
import left from "../../../assets/left.svg";

const HomeExtraInfo = () => {
  return (
    <div className="my-16">
      {/* info extra 1 */}
      <section className=" bg-gray-100 text-gray-800 rounded-md">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 ">
            <img src={left} alt="" />
          </div>

          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left md:mt-16">
            <h2 className="text-4xl font-bold font-mono">
              Individual Nutrition <br />
              Counseling & Coaching
            </h2>
            <p className="text-gray-700 my-5">
              Nutrition and lifestyle play a much bigger role in health,
              healing, and medicine than they get credit for! This is not about
              a fad or trend. It’s about a huge need infusing itself into the
              way we eat, exercise, sleep, work, age, and almost every other
              aspect of our lives.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeExtraInfo;
