import React, { useState } from "react";
import Header from "./Header";
import { FiSearch } from "react-icons/fi";
import { useRouter } from "next/router";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsChevronCompactDown } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import Link from "next/link";
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
      <div className="flex w-full h-screen relative">
        <div className="absolute bottom-0 flex w-full justify-center py-4">
          <Link
            className="bg-custom-light-yellow text-custom-yellow p-2 rounded-full  border-custom-yellow border-2"
            href="#hom"
          >
            <BsChevronCompactDown></BsChevronCompactDown>
          </Link>
        </div>
        <div className="w-auto flex h-full px-3 pt-24">
          <img src="./house.png" className="w-auto h-auto"></img>
        </div>
        <div className="w-1/2 flex h-full  flex-col  px-12 ">
          <Header></Header>
          <div className="w-full h-full flex flex-col justify-between">
            <div className="text-5xl font-Montserrat py-3  font-normal leading-normal tracking-wider">
              Lorem ipsum <span className="text-custom-yellow">dolor</span>
              <br></br> sit amet
            </div>
            <div className="font-Montserrat text-base tracking-wider">
              consectetur adipiscing elit, sed do eiusmod tempor incididunt
              <br></br> ut labore et dolore magna aliqua
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
              <div className="w-full space-y-5 bg-custom-light-yellow pb-3  flex flex-col py-5 absolute h-64 top-5 right-5">
                <div className="text-custom-yellow text-3xl flex justify-end pl-24 font-Montserrat text-right pr-3">
                  Unlock the true value of hour <br></br>home with just one
                  click
                </div>

                <div className="pl-5 text-right pr-3 font-Montserrat font-semibold text-sm">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo
                </div>
                <div className="w-full flex justify-end pr-3">
                  <Link
                    href=""
                    className="flex justify-between items-center font-Montserrat font-semibold space-x-5 pr-3 border-2 rounded-full border-gray-900 py-2 px-5 "
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
      <div className="pt-24 flex flex-col w-full space-y-7 relative" id="hom">
        <div className="w-full absolute bottom-10 h-32 bg-custom-yellow -z-50 -mx-10"></div>
        <div className="w-full absolute top-52 h-24 bg-custom-light-yellow -z-50 mx-10"></div>
        <div className="w-full justify-start font-Montserrat text-4xl">
          Why Us?
        </div>{" "}
        <div className="grid gap-10 grid-cols-3 ">
          <div className="w-full h-96 border-2 border-custom-yellow flex flex-col px-5 py-16 justify-between bg-white">
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
          <div className="w-full h-96 border-2 border-custom-yellow flex flex-col px-5 py-16 justify-between bg-white">
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
          <div className="w-full h-96 border-2 border-custom-yellow flex flex-col px-5 py-16 justify-between bg-white">
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
