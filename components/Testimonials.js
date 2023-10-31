import React from "react";
import { ImQuotesLeft } from "react-icons/im";
import Image from "next/image";

function Testimonials() {
  const reviews = [
    {
      url: "/testimonials.svg",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    },
    {
      url: "/testimonials.svg",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    },
    {
      url: "/testimonials.svg",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    },
    {
      url: "/testimonials.svg",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    },
    {
      url: "/testimonials.svg",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    },
  ];
  return (
    <div className="" id="testimonials">
      <div className=" font-header text-center md:text-left font-medium py-12 md:text-4xl text-2xl md:px-12">
        Testimonials
      </div>
      <div className="md:flex-row flex flex-col w-full bg-custom-light-yellow py-10 px-8 h-full justify-between items-center gap-14 relative">
        <div className="absolute  md:text-3xl text-xl -top-5 left-10 bg-white p-4 rounded-full border-2 border-custom-yellow">
          <ImQuotesLeft className="text-custom-light-yellow" />
        </div>
        <div className="md:w-[35%] w-full flex flex-col gap-5 md:ml-10 lg:ml-20 text-white">
          <div className=" font-Montserrat text-3xl w-full">
            Feedback from our clients
          </div>
          <div className="font-Montserrat text-slate-100 text-justify tracking-tight">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiumdod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud
          </div>
        </div>
        <div className="md:w-[65%]  w-full h-[70vh] md:h-[42vh] overflow-x-scroll flex md:flex-row flex-col  md:space-x-10 space-y-5 no-scrollbar md:pt-0 pt-5 md:px-0 px-6">
          {reviews.map((e, i) => {
            return (
              <div
                key={i}
                className="md:w-64 w-full flex shrink-0 flex-col bg-white p-5 rounded-md space-y-5 h-max"
              >
                <div className="w-full justify-center flex">
                  {/* <Image
                    src={e.url}
                    fill
                    className="!relative object-contain"
            alt={"img"}
                  /> */}
                  <Image
                    alt={"img"}
                    width={250}
                    height={250}
                    quality={100}
                    src={e.url}
                    className="object-cover object-center"
                  />
                </div>
                <div className="w-full font-Montserrat font-semibold text-justify tracking-tight text-xs">
                  {e.comment}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        {/* <div className="w-full flex md:px-12 px-3 sm:py-12 py-3 h">
          <video controls autoPlay className="w-full h-full">
            <source src="/video.mp4" />
          </video>
        </div> */}
      </div>
    </div>
  );
}

export default Testimonials;
