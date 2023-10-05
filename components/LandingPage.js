import React, { useState } from "react";
import Header from "./Header";
import { FiSearch } from "react-icons/fi";
import { useRouter } from "next/router";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsChevronCompactDown } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Link from "next/link";
import Image from "next/image";

import Testimonials from "./Testimonials";
import MainHeader from "./MainHeader";
function LandingPage() {
  /*Form value */
  const [location, setLoaction] = useState("");
  const router = useRouter();

  /*Form Submit */
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/dashboard");
  };
  return (
    <div className="w-full flex h-full  flex-col">
      <MainHeader></MainHeader>
      <div className="sm:flex  w-full sm:h-screen  relative sm:px-12 px-3">
        <div className="absolute bottom-0 flex w-10/12 justify-center py-4 ">
          <Link
            className="bg-custom-light-yellow text-custom-yellow p-2 rounded-full  border-custom-yellow border-2"
            href="#hom"
          >
            <BsChevronCompactDown></BsChevronCompactDown>
          </Link>
        </div>

        <div className="sm:w-1/2 w-full flex sm:h-full h-auto sm:px-3 px-0 sm:pt-4 justify-center sm:justify-start pt-2">
          <Image
            src="/house.png"
            // width={500}
            // height={500}
            fill
            className="object-cover !relative "
            alt="house "
          />
        </div>
        <div className="sm:w-1/2 flex sm:h-full h-auto  flex-col  sm:pl-12 px-3 sm:pt-4  sm:py-0 py-5 w-full sm:overflow-hidden">
          <div className="hidden sm:flex">{/* <Header></Header> */}</div>
          <div className="w-full h-full flex flex-col sm:justify-between justify-start sm:space-y-0 space-y-7">
            <div className="sm:text-4xl text-3xl font-Montserrat sm:py-3 py-0 sm:pt-0 pt-3  font-normal sm:leading-normal leading-snug tracking-wider">
              Lorem ipsum <span className="text-custom-yellow">dolor</span>
              <br></br> sit amet
            </div>
            <div className="font-Montserrat sm:text-base tracking-wider text-sm">
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua
            </div>
            <form
              className="w-full flex relative"
              onSubmit={(e) => handleSubmit(e)}
            >
              <input
                type="text"
                className="  border-2 border-gray-900 rounded-sm w-full py-2 px-3 text-gray-900 placeholder:text-gray-900 font-Montserrat placeholder:font-Montserrat font-medium leading-tight focus:outline-none "
                placeholder="Search Zipcode, Address, Location "
                value={location}
                onChange={(e) => setLoaction(e.target.value)}
              ></input>
              <button type="submit" className="absolute right-2 top-3">
                <FiSearch className="text-xl text-custom-yellow font-semibold"></FiSearch>
                {/* submit */}
              </button>
            </form>
            <div className="border-2 border-custom-yellow relative h-64 ">
              <div className="w-full sm:space-y-3 space-y-3 bg-custom-light-yellow pb-3  flex flex-col py-5 sm:py-2 absolute h-64 top-5 right-5">
                <div className="text-custom-yellow sm:text-3xl text-xl flex justify-end sm:pl-0 pl-0 font-Montserrat text-right sm:pr-3 pr-1">
                  Unlock the true value of hour home with just one click
                </div>

                <div className="sm:pl-5 pl-0 text-right sm:pr-1 pr-1 font-Montserrat font-semibold sm:text-sm text-xs">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo
                </div>
                <div className="w-full flex justify-end pr-3">
                  <Link
                    href=""
                    className="flex justify-between items-center font-Montserrat font-semibold space-x-5 sm:pr-3 pr-1 border-2 rounded-full border-gray-900 py-2 px-5 "
                  >
                    {" "}
                    <span> Discover More</span>{" "}
                    <AiOutlineArrowRight></AiOutlineArrowRight>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="sm:pt-24 pt-8 sm:flex  flex-col w-full space-y-7 relative sm:px-12 px-3 sm:overflow-hidden"
        id="about"
      >
        <div className="w-full absolute bottom-10 h-32 bg-custom-yellow -z-50 -mx-10 sm:block hidden"></div>
        <div className="w-full absolute top-52 h-24 bg-custom-light-yellow -z-50 mx-10 sm:block hidden"></div>
        <div className="w-full justify-start font-Montserrat sm:text-4xl text-2xl">
          Why Us?
        </div>{" "}
        <div className="grid sm:gap-10 gap-5 sm:grid-cols-3 grid-cols-1 sm:px-0 ">
          <div className="w-full sm:h-96 h-auto border-2 border-custom-yellow flex flex-col sm:px-5 sm:py-16 px-2 py-10 sm:justify-between space-y-4  bg-white">
            <div className="w-full flex justify-center text-custom-yellow text-2xl font-Montserrat">
              Live Agent
            </div>
            <div className="font-Montserrat text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud
            </div>
          </div>
          <div className="w-full sm:h-96 h-auto border-2 border-custom-yellow flex flex-col sm:px-5 sm:py-16 px-2 py-10 sm:justify-between space-y-4  bg-white">
            <div className="w-full flex justify-center text-custom-yellow text-2xl font-Montserrat">
              Accurate Estimate
            </div>
            <div className="font-Montserrat text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud
            </div>
          </div>
          <div className="w-full sm:h-96 h-auto border-2 border-custom-yellow flex flex-col sm:px-5 sm:py-16 px-2 py-10 sm:justify-between space-y-4  bg-white">
            <div className="w-full flex justify-center text-custom-yellow text-2xl font-Montserrat">
              Seamless Process
            </div>
            <div className="font-Montserrat text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud
            </div>
          </div>
        </div>
      </div>
      <Testimonials></Testimonials>
      <div className="mt-24 w-full border-t-2 border-custom-yellow py-5">
        <div className="flex w-full justify-center space-x-5">
          {" "}
          <Link href="">
            <BsInstagram className="text-3xl text-custom-yellow"></BsInstagram>
          </Link>
          <Link href="">
            <AiFillTwitterCircle className="text-3xl text-custom-yellow"></AiFillTwitterCircle>
          </Link>
          <Link href="">
            <BiLogoFacebook className="text-3xl text-custom-yellow"></BiLogoFacebook>
          </Link>
        </div>
        <div className="flex w-full justify-center font-Montserrat mt-4 font-medium">
          All Copyrights Reserved
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
