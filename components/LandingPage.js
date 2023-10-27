import React, { useState } from "react";
import Header from "./Header";
import { FiSearch } from "react-icons/fi";
import { useRouter } from "next/router";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsChevronCompactDown } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaXTwitter,FaFacebookF  } from "react-icons/fa6";
import { BiLogoFacebook } from "react-icons/bi";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import { useEffect } from "react";

import Testimonials from "./Testimonials";
import MainHeader from "./MainHeader";
function LandingPage() {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  /*Form value */
  const [location, setLoaction] = useState("");
  const router = useRouter();
  const settings = {
    dots: true,
    // infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  /*Form Submit */
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <>
      {domLoaded && (
        <div className="w-full flex h-full font-Lato flex-col">
          <MainHeader></MainHeader>
          <div className="sm:flex w-full h-full md:h-[80vh] sm:px-12 px-3 flex-col md:flex-row md:items-center md:gap-2">
            <div className="w-full h-[50vh] md:h-full md:w-3/5 py-5  overflow-hidden ">
              <div className="gap-3 columns-2 md:columns-3 p-6 animate-carousel whitespace-nowrap will-change-transform">
                <div className="aspect-square rounded-md relative overflow-hidden mb-3">
                  <Image
                    alt="..."
                    fill
                    quality={100}
                    src={"/house1.webp"}
                    className="object-cover object-center mb-3"
                  />
                </div>
                <div className="aspect-rect rounded-md relative overflow-hidden mb-3">
                  <Image
                    alt="..."
                    fill
                    quality={100}
                    src={"/house3.webp"}
                    className="object-cover object-center mb-3"
                  />
                </div>
                <div className="aspect-square rounded-md relative overflow-hidden mb-3">
                  <Image
                    alt="..."
                    fill
                    quality={100}
                    src={"/house1.webp"}
                    className="object-cover object-center mb-3"
                  />
                </div>
                <div className="aspect-rect rounded-md relative overflow-hidden mb-3">
                  <Image
                    alt="..."
                    fill
                    quality={100}
                    src={"/house3.webp"}
                    className="object-cover object-center mb-3"
                  />
                </div>
                <div className="aspect-rect rounded-md relative overflow-hidden mb-3">
                  <Image
                    alt="..."
                    fill
                    quality={100}
                    src={"/house2.webp"}
                    className="object-cover object-center mb-3"
                  />
                </div>
                <div className="aspect-square rounded-md relative overflow-hidden mb-3">
                  <Image
                    alt="..."
                    fill
                    quality={100}
                    src={"/house1.webp"}
                    className="object-cover object-center mb-3"
                  />
                </div>
                <div className="aspect-rect rounded-md relative overflow-hidden mb-3">
                  <Image
                    alt="..."
                    fill
                    quality={100}
                    src={"/house3.webp"}
                    className="object-cover object-center mb-3"
                  />
                </div>
                <div className="aspect-square rounded-md relative overflow-hidden mb-3">
                  <Image
                    alt="..."
                    fill
                    quality={100}
                    src={"/house2.webp"}
                    className="object-cover object-center mb-3"
                  />
                </div>
                <div className="aspect-square rounded-md relative overflow-hidden mb-3">
                  <Image
                    alt="..."
                    fill
                    quality={100}
                    src={"/house2.webp"}
                    className="object-cover object-center mb-3"
                  />
                </div>
                <div className="aspect-rect rounded-md relative overflow-hidden mb-3">
                  <Image
                    alt="..."
                    fill
                    quality={100}
                    src={"/house1.webp"}
                    className="object-cover object-center mb-3"
                  />
                </div>
                <div className="aspect-square rounded-md relative overflow-hidden mb-3">
                  <Image
                    alt="..."
                    fill
                    quality={100}
                    src={"/house3.webp"}
                    className="object-cover object-center mb-3"
                  />
                </div>
                <div className="aspect-rect rounded-md relative overflow-hidden mb-3">
                  <Image
                    alt="..."
                    fill
                    quality={100}
                    src={"/house2.webp"}
                    className="object-cover object-center mb-3"
                  />
                </div>
              </div>
            </div>

            {/* Search bar section */}

            <div className="w-full md:w-2/5 md:h-full  md:overflow-hidden py-10 px-4  space-y-2 ">
                <div className="w-full md:text-4xl text-3xl font-header md:py-3 py-0 md:pt-0 pt-3  font-bold leading-snug tracking-normal">
                  Find Out What Your Is Really{" "}
                  <span className="text-primaryblue">Worth</span>
                </div>
                <div className="font-header text-md md:text-lg tracking-wider">
                  The Most Accurate Home Valuation Tool Available To The Public
                </div>
                <form
                  className="py-4 relative"
                  onSubmit={(e) => handleSubmit(e)}
                >
                  <input
                    type="text"
                    // className="mb-8  border-2 border-gray-900 rounded-md w-full py-2 px-3 text-gray-900 placeholder:text-gray-900  placeholder: font-medium leading-tight focus:outline-none "
                    className="w-full mb-2 rounded-[2rem] border-2 text-lg border-secondary-darkgrey p-2 md:py-4 md:px-6 text-gray-900 placeholder:text-secondary-darkgrey  placeholder:leading-tight placeholder:text-sm md:placeholder:text-base focus:outline-none focus:border-2 focus:border-primaryblue"
                    placeholder="Search Zipcode, Address, Location "
                    value={location}
                    onChange={(e) => setLoaction(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-5 md:top-6 bg-primaryblue rounded-3xl p-2.5 hover:bg-opacity-90"
                  >
                    <FiSearch className="text-lg md:text-2xl text-white font-bold" />
                    {/* submit */}
                  </button>
                </form>
                {/* <div className="border-2 border-custom-yellow relative h-64 ">
                  <div className="w-full md:space-y-3 space-y-3 bg-custom-light-yellow pb-3  flex flex-col py-5 md:py-2 absolute h-64 top-5 right-5">
                    <div className="text-custom-yellow md:text-3xl text-xl flex justify-end md:pl-0 pl-0 font-header text-right md:pr-3 pr-1">
                      Unlock the true value of your home with just one click
                    </div>

                    <div className="w-full flex justify-end pr-3">
                      <Link
                        href=""
                        className="flex justify-between items-center font-header font-semibold space-x-5 md:pr-3 pr-1 border-2 rounded-full border-gray-900 py-2 px-5 "
                      >
                        {" "}
                        <Link href="/dashboard"> Discover More</Link>{" "}
                        <AiOutlineArrowRight></AiOutlineArrowRight>
                      </Link>
                    </div>
                  </div>
                </div> */}
                <div className="border-2 border-custom-grey rounded-md w-full h-full md:h-[25vh] p-4  flex flex-col items-center  md:flex-row gap-5  md:items-center hover:border-primaryblue">
                  <div className="lg:ml-4">
                  <Image
                    alt="..."
                    width={180}
                    height={180}
                    // fill
                    quality={100}
                    src={"/unlock.svg"}
                    className="object-cover object-center"
                  />
                  </div>
                  <div className="w-full space-y-2 lg:space-y-4 text-center md:text-left">
                  <p className= "w-full text-primaryblue text-base lg:text-xl font-header ">
                      Unlock the true value of your home with just one click
                    </p>
                  <div className="w-max mx-auto md:mx-0">
                      <Link
                        href="/dashboard"
                        className="flex justify-between items-center gap-2 font-header font-semibold rounded-full bg-primaryblue hover:bg-opacity-75 text-white md:text-xs lg:text-base py-2 px-4 lg:py-4 md:px-6 lg:px-8"
                      > Discover More
                        <AiOutlineArrowRight className="w-5 h-5 ml-4"/>
                      </Link>
                    </div>
                  </div>
                </div>
            </div>
          </div>
          
          {/* Video Section */}

          <div className="w-full md:px-12 px-3 sm:py-12 py-3 h">
            <video controls autoPlay className="w-full h-full">
              <source src="/video.mp4" />
            </video>
          </div>

          {/* More Resources section */}

          <div className="w-full h-full py-5 px-4 my-10 relative">
          <div className="w-full justify-center md:justify-start font-header sm:text-4xl text-2xl px-2 md:px-14 mb-5">
              More Resources
            </div>
          <div className="w-full absolute bottom-52 xl:bottom-10 h-32 bg-custom-yellow -z-50 -mx-10 md:block hidden"></div>
            <div className="w-full absolute top-40 xl:top-52 h-24 bg-custom-verylight-yellow -z-50 mx-10 md:block hidden"></div>
            <div className="flex flex-col flex-wrap justify-center items-center md:flex-row md:justify-evenly md:items-center md:gap-5 ">
            <Link  href="/roi" className="flex flex-col justify-between items-center bg-white gap-8 shadow-lg rounded-xl py-10 px-8 max-w-[320px] h-auto md:w-[500px] md:h-[500px ">
                  <Image
                    alt="..."
                    width={150}
                    height={150}
                    // fill
                    quality={100}
                    src={"/ROI.svg"}
                    className="object-cover object-center"
                  />
                  <h3 className="w-full flex justify-center text-custom-yellow hover:text-custom-verylight-yellow text-2xl font-header">
                  ROI Calculator
                </h3>
              <p className=" md:text-base text-justify">Lorem ipsum dolor sit amet,         consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit</p>
            </Link>
            <Link  href="/timingthemarket" className="flex flex-col justify-between items-center gap-8 shadow-lg rounded-xl py-10 px-8 max-w-[320px] h-auto md:w-[500px] md:h-[500px] bg-white ">
                  <Image
                    alt="..."
                    width={150}
                    height={150}
                    // fill
                    quality={100}
                    src={"/TTM.svg"}
                    className="object-cover object-center"
                  />
                  <h3 className="w-full flex justify-center text-custom-yellow hover:text-custom-verylight-yellow  text-2xl font-header">
                  Timing the Market
                </h3>
              <p className=" md:text-base text-justify">Lorem ipsum dolor sit amet,         consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit</p>
            </Link>
            <Link  href="/rentvssale" className="flex flex-col justify-between items-center gap-8 shadow-lg rounded-xl py-10 px-8 max-w-[320px] h-auto md:w-[500px] md:h-[500px] bg-white ">
                  <Image
                    alt="..."
                    width={150}
                    height={150}
                    // fill
                    quality={100}
                    src={"/RS.svg"}
                    className="object-cover object-center"
                  />
                  <h3 className="w-full flex justify-center text-custom-yellow hover:text-custom-verylight-yellow  text-2xl font-header">
                  Rent VS Sell
                </h3>
              <p className=" md:text-base text-justify">Lorem ipsum dolor sit amet,         consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit</p>
            </Link>
            </div>
          </div>

          {/* <div
            className="sm:pt-24 pt-8 sm:flex  flex-col w-full space-y-7 relative sm:px-12 px-3 sm:overflow-hidden"
            id="about"
          >
            <div className="w-full absolute bottom-10 h-32 bg-custom-yellow -z-50 -mx-10 sm:block hidden"></div>
            <div className="w-full absolute top-52 h-24 bg-custom-light-yellow -z-50 mx-10 sm:block hidden"></div>
            <div className="w-full justify-start font-header sm:text-4xl text-2xl">
              More Resources
            </div>{" "}
            <div className="grid sm:gap-10 gap-5 sm:grid-cols-3 grid-cols-1 sm:px-0 ">
              <Link
                href="/roi"
                className="w-full sm:h-96 h-auto border-2 border-custom-yellow flex flex-col sm:px-5 sm:py-16 px-2 py-10 sm:justify-between space-y-4  bg-white"
              >
                <div className="w-full flex justify-center text-custom-yellow text-2xl font-header">
                  ROI Calculator
                </div>
                <div className=" text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud
                </div>
              </Link>
              <Link
                href="/timingthemarket"
                className="w-full sm:h-96 h-auto border-2 border-custom-yellow flex flex-col sm:px-5 sm:py-16 px-2 py-10 sm:justify-between space-y-4  bg-white"
              >
                <div className="w-full flex justify-center text-custom-yellow text-2xl font-header">
                  Timing the Market
                </div>
                <div className=" text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud
                </div>
              </Link>
              <Link
                href="/rentvssale"
                className="w-full sm:h-96 h-auto border-2 border-custom-yellow flex flex-col sm:px-5 sm:py-16 px-2 py-10 sm:justify-between space-y-4  bg-white"
              >
                <div className="w-full flex justify-center text-custom-yellow text-2xl font-header">
                  Rent v. Sell
                </div>
                <div className=" text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud
                </div>
              </Link>
            </div>
          </div> */}

          {/* card section */}
          <div className="w-full h-full md:h-[28vh] py-5 px-4 my-10">
            <div className="flex flex-col justify-center items-center md:flex-row md:justify-center md:items-center gap-5">
            <Link href={"/valueHome"} className="flex flex-col justify-center items-center gap-8 shadow-lg rounded-xl p-8 max-w-[320px] ">
                  <Image
                    alt="..."
                    width={120}
                    height={120}
                    // fill
                    quality={100}
                    src={"/value.svg"}
                    className="object-cover object-center"
                  />
              <p className="hover:underline md:text-lg">Why people search for the value of their homes</p>
            </Link>
            <Link href="/saleHome" className="flex flex-col justify-center items-center gap-8 shadow-lg rounded-xl p-8 max-w-[320px] ">
                  <Image
                    alt="..."
                    width={95}
                    height={95}
                    // fill
                    quality={100}
                    src={"/sell.svg"}
                    className="object-cover object-center"
                  />
              <p className="hover:underline md:text-lg">Why people decide to sell their homes</p>
            </Link>
            </div>
          </div>

          {/* <div
            className="sm:pt-24 pt-8 sm:flex  flex-col w-full space-y-7 relative sm:px-12 px-3 sm:overflow-hidden"
            id="about"
          >
            <div className="w-full justify-start font-header sm:text-4xl text-2xl">
              Why people search for the value of their homes
            </div>
            <ul className="list-decimal">
              <li className="w-full justify-start     text-xl">
                <span className="font-header underline font-semibold">
                  Curiosity:
                </span>{" "}
                Many homeowners are naturally curious about the value of their
                biggest asset. They want to stay informed and have a general
                idea of how much their home is worth in the current market.
              </li>
              <li className="w-full justify-start     text-xl">
                <span className="font-header underline font-semibold">
                  Refinancing:
                </span>{" "}
                Homeowners who are considering refinancing their mortgage may
                want to know the current value of their home to assess their
                options and determine if it{"'"}s a good time to refinance.
              </li>
              <li className="w-full justify-start     text-xl">
                <span className="font-header underline font-semibold">
                  Selling or Listing:
                </span>{" "}
                Homeowners who are thinking about selling their property or
                listing it for sale often check online home value estimates to
                get an initial idea of what price range they could potentially
                list their home for.
              </li>
              <li className="w-full justify-start     text-xl">
                <span className="font-header underline font-semibold">
                  Estate Planning:
                </span>{" "}
                When engaging in estate planning, homeowners may need to
                determine the value of their property as part of assessing
                assets and potential inheritance.
              </li>
              <li className="w-full justify-start     text-xl">
                <span className="font-header underline font-semibold">
                  Property Tax Assessment:
                </span>{" "}
                Some homeowners may want to challenge or verify the accuracy of
                their property tax assessments by comparing it with online
                estimated values.
              </li>
              <li className="w-full justify-start     text-xl">
                <span className="font-header underline font-semibold">
                  Home Improvement Decisions:
                </span>{" "}
                People considering major renovations or upgrades may want to
                understand how these improvements could potentially impact the
                value of their home before making decisions. idea of how much
                their home is worth in the current market.
              </li>
              <li className="w-full justify-start     text-xl">
                <span className="font-header underline font-semibold">
                  Property Tax Assessment:
                </span>{" "}
                Property tax is often calculated based on the assessed value of
                a home. Homeowners may want to verify the accuracy of their tax
                assessments to ensure they{"'"}re not overpaying.
              </li>
              <li className="w-full justify-start     text-xl">
                <span className="font-header underline font-semibold">
                  Home Equity:
                </span>{" "}
                Homeowners may want to know the value of their homes to
                calculate their home equity. This information can be important
                for borrowing against the home{"'"}s equity or for financial
                planning.
              </li>
              <li className="w-full justify-start     text-xl">
                <span className="font-header underline font-semibold">
                  Insurance Coverage:
                </span>{" "}
                Homeowners may want to ensure that their insurance coverage is
                adequate based on the current value of their property. In case
                of damage or loss, they want to be adequately compensated.
              </li>
              <li className="w-full justify-start     text-xl">
                <span className="font-header underline font-semibold">
                  Estate Planning:
                </span>{" "}
                When planning their estate, individuals may need to know the
                value of their property to distribute assets among beneficiaries
                or make other financial decisions.
              </li>
              <li className="w-full justify-start     text-xl">
                <span className="font-header underline font-semibold">
                  Market Research:
                </span>{" "}
                Prospective homebuyers may want to research property values in
                an area they are considering moving to, helping them make
                informed decisions.
              </li>
              <li className="w-full justify-start     text-xl">
                <span className="font-header underline font-semibold">
                  Planning for Retirement:
                </span>{" "}
                Homeowners approaching retirement may assess their home{"'"}s
                value as part of their retirement planning to determine if
                downsizing or using home equity is a viable option.
              </li>
            </ul>
          </div> */}

          {/* Testimonials section */}
          <Testimonials></Testimonials>

          {/* Footer section */}

          <div className="mt-24 w-full border-t-2 border-custom-yellow py-5">
            <div className="flex w-full justify-center space-x-5">
              {" "}
              <Link href="">
                <BsInstagram className="text-3xl text-custom-yellow"></BsInstagram>
              </Link>
              <Link href="">
                <FaXTwitter className="text-3xl text-custom-yellow"></FaXTwitter>
              </Link>
              <Link href="/chatlist">
                <FaFacebookF className="text-3xl text-custom-yellow"></FaFacebookF>
              </Link>
            </div>
            {/* <Link
              className="flex w-full justify-center  mt-2 font-medium"
              href="/saleHome"
            >
              Why people decide to sell their homes
            </Link> */}
            <div className="flex w-full justify-center  mt-4 font-medium">
              All Copyrights Reserved
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default LandingPage;
