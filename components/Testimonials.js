import React from "react";
import { ImQuotesLeft } from "react-icons/im";
import Image from "next/image";

function Testimonials() {
  const reviews = [
    {
      url: "/human.png",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    },
    {
      url: "/human.png",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    },
    {
      url: "/human.png",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    },
    {
      url: "/human.png",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    },
    {
      url: "/human.png",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    },
  ];
  return (
    <div className="" id="testimonials">
      {" "}
      <div className=" font-header font-medium py-12 sm:text-4xl text-2xl sm:px-12 px-3">
        Testimonials
      </div>
      <div className="sm:flex-row flex flex-col w-full bg-custom-light-yellow py-10 px-5 h-full items-center relative">
        <div className="absolute  sm:text-3xl text-xl  -top-5 left-10 bg-white p-4 rounded-full border-2 border-custom-yellow">
          <ImQuotesLeft></ImQuotesLeft>
        </div>
        <div className="sm:w-4/12 w-full flex flex-col space-y-4">
          <div className=" font-Montserrat text-3xl w-full flex justify-center">
            Feedback from our clients
          </div>
          <div className="sm:px-12 px-3 font-Montserrat text-custom-grey text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud
          </div>
        </div>
        <div className="sm:w-8/12 w-full overflow-x-scroll flex sm:flex-row flex-col  sm:space-x-10 space-y-5 no-scrollbar sm:pt-0 pt-5 sm:px-0 px-6">
          {reviews.map((e, i) => {
            return (
              <div
                key={i}
                className="sm:w-64 w-full flex shrink-0 flex-col bg-white p-5 rounded-md space-y-5 "
              >
                <div className="w-full justify-center flex">
                  <Image
                    src={e.url}
                    fill
                    className="!relative object-contain"
            alt={"img"}

                  />
                </div>
                <div className="flex w-full justify-center text-center font-Montserrat font-semibold text-xs">
                  {e.comment}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        {/* <div className="w-full flex sm:px-12 px-3 sm:py-12 py-3 h">
          <video controls autoPlay className="w-full h-full">
            <source src="/video.mp4" />
          </video>
        </div> */}
      </div>
    </div>
  );
}

export default Testimonials;
