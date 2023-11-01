import Link from "next/link";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const Videosection = () => {
  return (
    <div className="h-auto w-full py-12 px-8">
        <div className="w-full justify-center md:justify-start font-header sm:text-4xl text-2xl py-3 px-2 md:px-14 mb-5">
        What our customers say
          </div>
      <div className="sm:py-8 py-3 flex flex-col gap-5 justify-center items-center md:flex-row md:justify-evenly">
        <div className="w-[300px] sm:w-[500px] md:w-[800px] md:px-8 px-3">
          <video
            controls
            autoPlay
            className="w-full h-full shadow-lg rounded-lg"
          >
            <source src="/video.mp4" />
          </video>
        </div>
        <div className="space-y-8">
          <h3 className="font-header text-md md:text-3xl tracking-wider">
            Property Management made easy
          </h3>
          <p className="text-sm text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            earum aliquam eos odit, laborum voluptate facilis reiciendis eius
            vero voluptas fugiat ut nostrum. Corporis neque blanditiis optio
            illo modi tenetur.
          </p>
          <div className="w-max mx-auto md:mx-0">
            <Link
              href="/dashboard"
              className="flex justify-between items-center gap-2 font-header font-semibold rounded-full bg-primaryblue hover:bg-opacity-75 text-white md:text-xs lg:text-base py-2 px-4 lg:py-4 md:px-6 lg:px-8"
            >
              {" "}
              Discover More
              <AiOutlineArrowRight className="w-5 h-5 ml-4" />
            </Link>
          </div>
        </div>
      </div>
      <div className="sm:py-8 py-3 flex flex-col gap-5 justify-center items-center md:flex-row md:justify-evenly">
        <div className="space-y-8 md:px-8 px-3">
          <h3 className="font-header text-md md:text-3xl tracking-wider">
          Higher returns with short-term rentals
          </h3>
          <p className="text-sm text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            earum aliquam eos odit, laborum voluptate facilis reiciendis eius
            vero voluptas fugiat ut nostrum. Corporis neque blanditiis optio
            illo modi tenetur.
          </p>
          <div className="w-max mx-auto md:mx-0">
            <Link
              href="/dashboard"
              className="flex justify-between items-center gap-2 font-header font-semibold rounded-full bg-primaryblue hover:bg-opacity-75 text-white md:text-xs lg:text-base py-2 px-4 lg:py-4 md:px-6 lg:px-8"
            >
              {" "}
              Discover More
              <AiOutlineArrowRight className="w-5 h-5 ml-4" />
            </Link>
          </div>
        </div>
        <div className="w-[300px] sm:w-[700px] md:w-[1000px] md:px-8 px-3">
          <video
            controls
            autoPlay
            className="w-full h-full shadow-lg rounded-lg"
          >
            <source src="/video.mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Videosection;
