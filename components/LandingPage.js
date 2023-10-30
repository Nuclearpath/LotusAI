import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useRouter } from "next/router";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
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
        <div className="w-full flex h-full  flex-col">
          <MainHeader></MainHeader>
          <div className="sm:flex  w-full h-screen md:h-[85vh] relative sm:px-12 px-3">
            <div className="sm:w-1/2 w-full flex  sm:px-3 px-0 sm:pt-4 h-[80vh] justify-center sm:justify-start pt-2">
              <Slider
                className="w-full"
                infinite={true}
                slidesToShow={1}
                fade={true}
                dots={true}
                autoplay
                autoplaySpeed={4000}
                arrows={false}
                slidesToScroll={1}
              >
                <div className="w-full h-[75vh]">
                  <Image
                    alt="..."
                    fill
                    priority
                    quality={100}
                    src={"/house2.webp"}
                    className="object-cover object-center"
                  />
                </div>
                <div className="w-full h-[75vh]">
                  <Image
                    alt="..."
                    fill
                    quality={100}
                    src={"/house3.webp"}
                    className="object-cover object-center"
                  />
                </div>
              </Slider>
            </div>

            <div className="sm:w-1/2 flex sm:h-full h-auto  flex-col  sm:pl-12 px-3 sm:pt-4  sm:py-0 py-5 w-full sm:overflow-hidden">
              <div className="hidden sm:flex">{/* <Header></Header> */}</div>
              <div className="w-full h-full flex flex-col justify-start sm:space-y-0 space-y-7">
                <div className="sm:text-4xl text-3xl font-header sm:py-3 py-0 sm:pt-0 pt-3  font-normal sm:leading-normal leading-snug tracking-wider">
                  Find Out What Your Is<br></br> Really{" "}
                  <Link href="" className="text-custom-yellow">
                    Worth
                  </Link>
                </div>
                <div className="font-header text-sm md:text-lg tracking-wider  font-semibold">
                  The Most Accurate Home Valuation Tool Available To The Public
                </div>
                <form
                  className="w-full flex relative pt-4"
                  onSubmit={(e) => handleSubmit(e)}
                >
                  <input
                    type="text"
                    className="mb-8  border-2 border-gray-900 rounded-sm w-full py-2 px-3 text-gray-900 placeholder:text-gray-900 font-Montserrat placeholder:font-Montserrat font-medium leading-tight focus:outline-none "
                    placeholder="Search Zipcode, Address, Location "
                    value={location}
                    onChange={(e) => setLoaction(e.target.value)}
                  ></input>
                  <button type="submit" className="absolute right-2 top-3">
                    <FiSearch className="text-xl text-custom-yellow font-semibold mb-4"></FiSearch>
                    {/* submit */}
                  </button>
                </form>
                <div className="border-2 border-custom-yellow relative h-64 ">
                  <div className="w-full sm:space-y-3 space-y-3 bg-custom-light-yellow pb-3  flex flex-col py-5 sm:py-2 absolute h-64 top-5 right-5">
                    <div className="text-custom-yellow sm:text-3xl text-xl flex justify-end sm:pl-0 pl-0 font-header text-right sm:pr-3 pr-1">
                      Unlock the true value of your home with just one click
                    </div>

                    <div className="w-full flex justify-end pr-3">
                      <Link
                        href=""
                        className="flex justify-between items-center font-header font-semibold space-x-5 sm:pr-3 pr-1 border-2 rounded-full border-gray-900 py-2 px-5 "
                      >
                        {" "}
                        <Link href="/dashboard"> Discover More</Link>{" "}
                        <AiOutlineArrowRight></AiOutlineArrowRight>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
              <div className="w-full flex sm:px-12 px-3 sm:py-12 py-3 h">
          <video controls autoPlay className="w-full h-full">
            <source src="/video.mp4" />
          </video>
        </div>

          <div
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
                <div className="font-Montserrat text-center">
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
                <div className="font-Montserrat text-center">
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
                <div className="font-Montserrat text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud
                </div>
              </Link>
            </div>
          </div>
          <div
            className="sm:pt-24 pt-8 sm:flex  flex-col w-full space-y-7 relative sm:px-12 px-3 sm:overflow-hidden"
            id="about"
          >
            <div className="w-full justify-start font-header sm:text-4xl text-2xl">
              Why people search for the value of their homes
            </div>
            <ul className="list-decimal">
              <li className="w-full justify-start font-Montserrat    text-xl">
                <span className="font-header underline font-semibold">
                  Curiosity:
                </span>{" "}
                Many homeowners are naturally curious about the value of their
                biggest asset. They want to stay informed and have a general
                idea of how much their home is worth in the current market.
              </li>
              <li className="w-full justify-start font-Montserrat    text-xl">
                <span className="font-header underline font-semibold">
                  Refinancing:
                </span>{" "}
                Homeowners who are considering refinancing their mortgage may
                want to know the current value of their home to assess their
                options and determine if it{"'"}s a good time to refinance.
              </li>
              <li className="w-full justify-start font-Montserrat    text-xl">
                <span className="font-header underline font-semibold">
                  Selling or Listing:
                </span>{" "}
                Homeowners who are thinking about selling their property or
                listing it for sale often check online home value estimates to
                get an initial idea of what price range they could potentially
                list their home for.
              </li>
              <li className="w-full justify-start font-Montserrat    text-xl">
                <span className="font-header underline font-semibold">
                  Estate Planning:
                </span>{" "}
                When engaging in estate planning, homeowners may need to
                determine the value of their property as part of assessing
                assets and potential inheritance.
              </li>
              <li className="w-full justify-start font-Montserrat    text-xl">
                <span className="font-header underline font-semibold">
                  Property Tax Assessment:
                </span>{" "}
                Some homeowners may want to challenge or verify the accuracy of
                their property tax assessments by comparing it with online
                estimated values.
              </li>
              <li className="w-full justify-start font-Montserrat    text-xl">
                <span className="font-header underline font-semibold">
                  Home Improvement Decisions:
                </span>{" "}
                People considering major renovations or upgrades may want to
                understand how these improvements could potentially impact the
                value of their home before making decisions. idea of how much
                their home is worth in the current market.
              </li>
              <li className="w-full justify-start font-Montserrat    text-xl">
                <span className="font-header underline font-semibold">
                  Property Tax Assessment:
                </span>{" "}
                Property tax is often calculated based on the assessed value of
                a home. Homeowners may want to verify the accuracy of their tax
                assessments to ensure they{"'"}re not overpaying.
              </li>
              <li className="w-full justify-start font-Montserrat    text-xl">
                <span className="font-header underline font-semibold">
                  Home Equity:
                </span>{" "}
                Homeowners may want to know the value of their homes to
                calculate their home equity. This information can be important
                for borrowing against the home{"'"}s equity or for financial
                planning.
              </li>
              <li className="w-full justify-start font-Montserrat    text-xl">
                <span className="font-header underline font-semibold">
                  Insurance Coverage:
                </span>{" "}
                Homeowners may want to ensure that their insurance coverage is
                adequate based on the current value of their property. In case
                of damage or loss, they want to be adequately compensated.
              </li>
              <li className="w-full justify-start font-Montserrat    text-xl">
                <span className="font-header underline font-semibold">
                  Estate Planning:
                </span>{" "}
                When planning their estate, individuals may need to know the
                value of their property to distribute assets among beneficiaries
                or make other financial decisions.
              </li>
              <li className="w-full justify-start font-Montserrat    text-xl">
                <span className="font-header underline font-semibold">
                  Market Research:
                </span>{" "}
                Prospective homebuyers may want to research property values in
                an area they are considering moving to, helping them make
                informed decisions.
              </li>
              <li className="w-full justify-start font-Montserrat    text-xl">
                <span className="font-header underline font-semibold">
                  Planning for Retirement:
                </span>{" "}
                Homeowners approaching retirement may assess their home{"'"}s
                value as part of their retirement planning to determine if
                downsizing or using home equity is a viable option.
              </li>
            </ul>
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
              <Link href="/chatlist">
                <BiLogoFacebook className="text-3xl text-custom-yellow"></BiLogoFacebook>
              </Link>
            </div>
            <Link
              className="flex w-full justify-center font-Montserrat mt-2 font-medium"
              href="/saleHome"
            >
              Why people decide to sell their homes
            </Link>
            <div className="flex w-full justify-center font-Montserrat mt-4 font-medium">
              All Copyrights Reserved
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default LandingPage;
