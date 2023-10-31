import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useRouter } from "next/router";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";
import Testimonials from "./Testimonials";
import MainHeader from "./MainHeader";
import Videosection from "./Videosection";
function LandingPage() {
  /*Form value */
  const [location, setLoaction] = useState("");
  const router = useRouter();
  // const settings = {
  //   dots: true,
  //   // infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };

  /*Form Submit */
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <>
        <div className="w-full flex h-full  flex-col">
          <MainHeader page={"landing"}></MainHeader>
          {/* Main section with search bar */}
           {/* <div className="md:flex w-full relative md:px-12 px-3 h-full md:h-[80vh] mb-10">
            <div className="md:w-1/2 w-full flex md:px-3 px-0 md:pt-4 justify-center md:justify-start pt-2">
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
                <div className="w-full h-[50vh] md:h-[75vh]">
                  <Image
                    alt="..."
                    fill
                    priority
                    quality={100}
                    src={"/House 1.png"}
                    className="object-cover object-center"
                  />
                </div>
                <div className="w-full h-[50vh] md:h-[75vh]">
                  <Image
                    alt="..."
                    fill
                    priority
                    quality={100}
                    src={"/house2.webp"}
                    className="object-cover object-center"
                  />
                </div>
                <div className="w-full h-[50vh] md:h-[75vh]">
                  <Image
                    alt="..."
                    fill
                    quality={100}
                    src={"/house3.webp"}
                    className="object-cover object-center"
                  />
                </div>
              </Slider>
              <div 
              // className="w-1/2 h-[50vh] md:h-[75vh]"
              className="md:w-1/2 w-full h-[50vh] md:h-[75vh] flex md:px-3 px-0 md:pt-4 justify-center pt-2"
              >
                  <Image
                    alt="..."
                    fill
                    priority
                    quality={100}
                    src={"/House 1.png"}
                    className="object-cover object-center"
                  />
                </div>
            </div>
            <div className="sm:w-1/2 flex sm:h-full h-auto  flex-col  sm:pl-12 px-3 sm:pt-4  sm:py-0 py-5 w-full sm:overflow-hidden">
              <div className="hidden sm:flex"></div>
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
                  </button>
                </form>
                <div className="border-2 border-custom-yellow relative h-64 ">
                  <div className="w-full sm:space-y-3 space-y-3 bg-custom-light-yellow pb-3  flex flex-col py-5 sm:py-2 absolute h-64 top-5 right-5">
                    <div className="text-custom-yellow sm:text-3xl text-xl flex justify-end sm:pl-0 pl-0 font-header text-right sm:pr-3 pr-1">
                      Unlock the true value of your home with just one click
                    </p>

                    <div className="w-full flex justify-end pr-3">
                      <Link
                        href=""
                        className="flex justify-between items-center font-header font-semibold space-x-5 md:pr-3 pr-1 border-2 rounded-full border-gray-900 py-2 px-5 text-sm"
                      >
                        <Link href="/dashboard"> Discover More</Link>{" "}
                        <AiOutlineArrowRight></AiOutlineArrowRight>
                      </Link>
                    </div>
                </div> 
                  </div>
            <div className="border-2 border-custom-grey rounded-md w-full h-full md:h-auto p-4  flex flex-col items-center  md:flex-row gap-5  md:items-center hover:border-primaryblue shadow-lg">
              <div className="lg:ml-4">
                <Image
                  alt="..."
                  width={180}
                  height={180}

                  quality={100}
                  src={"/unlock.svg"}
                  className="object-cover object-center"
                />
              </div>
              <div className="w-full space-y-2 lg:space-y-4 text-center md:text-left">
                <p className="w-full text-primaryblue text-base lg:text-xl font-header ">
                  Unlock the true value of your home with just one click
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
          </div>
          </div>
          </div> */}

          {/* Property Image section */}
          {/* <div className="w-full h-[50vh] md:h-[75vh] flex justify-center items-center mb-12 pt-3 px-3 sm:px-16">
            <div className="w-full md:w-[70%] relative h-[50vh] md:h-[75vh]">
              <Image
                alt="..."
                fill
                quality={100}
                src={"/House 1.png"}
                className="object-cover object-center mb-3"
              />
            </div>
          </div> */}

          {/* Location section */}
          {/* <div className="h-full  flex justify-center items-center sm:px-16 px-3 py-12 w-full text-center">
            <div className="w-full md:w-[70%] h-full space-y-10 md:space-y-7">
              <div className="md:text-5xl text-[40px] font-header font-normal   leading-tight md:leading-normal">
                Find Out What Your Is
                <span className="text-custom-yellow mx-3">Really</span>
                Worth
              </div>
              <div className="font-header text-sm md:text-xl tracking-wider font-semibold w-full  ">
                The Most Accurate Home Valuation Tool Available To The Public
              </div>
              <form
                className=" md:pt-5 relative"
                onSubmit={(e) => handleSubmit(e)}
              >
                <input
                  type="text"
                  className="w-full sm:w-[80%] mb-2 rounded-lg border-2 text-lg border-custom-yellow p-2 md:py-4 md:px-6 text-gray-900 placeholder:text-custom-grey placeholder:leading-tight placeholder:text-sm md:placeholder:text-base focus:outline-none focus:border-2 focus:border-primaryblue shadow-md"
                  placeholder="Search Zipcode, Address, Location "
                  value={location}
                  onChange={(e) => setLoaction(e.target.value)}
                />
                <button
                  type="submit"
                  className="absolute right-2 sm:right-[72px] lg:right-28 top-1 md:top-7 bg-custom-yellow rounded-3xl p-2.5 hover:bg-opacity-90"
                >
                  <FiSearch className="text-lg md:text-2xl text-white font-bold" />
                </button>
              </form>
              <div className="border-2 relative rounded-lg border-custom-yellow h-32 md:h-40 lg:h-48 shadow-md w-[95%] sm:w-[80%] ml-3 sm:ml-11 lg:ml-24">
                <div className=" w-full space-y-3 bg-custom-light-yellow absolute h-auto md:h-40 lg:h-48 right-4 top-4 rounded-lg py-5 px-4 shadow-sm shadow-custom-light-yellow">
                  <p className="text-custom-yellow md:text-[22px] text-base flex justify-end  font-header text-right px-3">
                    Unlock the true value of your home with just one click
                  </p>

                  <div className="w-full flex justify-end pr-3">
                    <Link
                      href=""
                      className="flex justify-between items-center font-header font-semibold space-x-5 md:pr-3 pr-1 border-2 rounded-full border-gray-900 py-2 px-5 text-sm"
                    >
                      <Link href="/dashboard"> Discover More</Link>{" "}
                      <AiOutlineArrowRight></AiOutlineArrowRight>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* Property Image section */}
          <div className="w-full h-[50vh] md:h-[75vh] flex justify-center items-center mb-12 pt-3 px-3 sm:px-16">
            <div className="w-full md:w-[70%] relative h-[50vh] md:h-[75vh]">
              <Image
                alt="..."
                fill
                quality={100}
                src={"/House 1.png"}
                className="object-cover object-center mb-3"
              />
            </div>
          </div>

          {/* Location section */}
          <div className="h-full  flex justify-center items-center sm:px-16 px-3 py-12 w-full text-center">
            <div className="w-full md:w-[70%] h-full space-y-10 md:space-y-7">
              <div className="md:text-5xl text-[40px] font-header font-normal   leading-tight md:leading-normal">
                Find Out What Your Is
                <span className="text-custom-yellow mx-3">Really</span>
                Worth
              </div>
              <div className="font-header text-sm md:text-xl tracking-wider font-semibold w-full  ">
                The Most Accurate Home Valuation Tool Available To The Public
              </div>
              <form
                className=" md:pt-5 relative"
                onSubmit={(e) => handleSubmit(e)}
              >
                <input
                  type="text"
                  className="w-full sm:w-[80%] mb-2 rounded-lg border-2 text-lg border-custom-yellow p-2 md:py-4 md:px-6 text-gray-900 placeholder:text-custom-grey placeholder:leading-tight placeholder:text-sm md:placeholder:text-base focus:outline-none focus:border-2 focus:border-primaryblue shadow-md"
                  placeholder="Search Zipcode, Address, Location "
                  value={location}
                  onChange={(e) => setLoaction(e.target.value)}
                />
                <button
                  type="submit"
                  className="absolute right-2 sm:right-[72px] lg:right-28 top-1 md:top-7 bg-custom-yellow rounded-3xl p-2.5 hover:bg-opacity-90"
                >
                  <FiSearch className="text-lg md:text-2xl text-white font-bold" />
                </button>
              </form>
              <div className="border-2 relative rounded-lg border-custom-yellow h-32 md:h-40 lg:h-48 shadow-md w-[95%] sm:w-[80%] ml-3 sm:ml-11 lg:ml-24">
                <div className=" w-full space-y-3 bg-custom-light-yellow absolute h-auto md:h-40 lg:h-48 right-4 top-4 rounded-lg py-5 px-4 shadow-sm shadow-custom-light-yellow">
                  <p className="text-custom-yellow md:text-[22px] text-base flex justify-end  font-header text-right px-3">
                    Unlock the true value of your home with just one click
                  </p>

                  <div className="w-full flex justify-end pr-3">
                    <Link
                      href=""
                      className="flex justify-between items-center font-header font-semibold space-x-5 md:pr-3 pr-1 border-2 rounded-full border-gray-900 py-2 px-5 text-sm"
                    >
                      <Link href="/dashboard"> Discover More</Link>{" "}
                      <AiOutlineArrowRight></AiOutlineArrowRight>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Video section */}
          {/* <div className="w-full flex md:px-12 px-3 md:py-12 py-3 h">
            <video controls autoPlay className="w-full h-full">
              <source src="/video.mp4" />
            </video>
          </div> */}
          {/* <Videosection/> */}

          {/* Content section */}
          <section className="h-full md:h-[45vh] w-full md:px-12 px-3 py-12">
            <div className="flex flex-col justify-center items-center gap-6 rounded-lg shadow-lg shadow-custom-light-yellow py-11 px-[8.333%] md:px-6  h-full w-full">
              <h3 className="w-full text-center font-header md:text-4xl text-2xl">
                What makes a Lotuss estimate different ?{" "}
              </h3>
              <p className="font-Montserrat text-center w-full md:w-[80%]">
                Unlike other online home valuation sites, Lotuss uses the
                information only real estate agents and appraisers use: real
                time market data, accurate comps, off-market sales, and even
                lets you select and remove comparable listings, resulting in the
                most accurate home value available to the public. Whether you
                are ready to sell or just curious about the true value of your
                home in today’s market, Lotuss provides the most accurate idea
                of what your pad is worth.
              </p>
            </div>
          </section>

          {/* More resources section */}
          <div className="w-full relative px-3 h-full py-12">
            <div className="w-full absolute bottom-10 h-32 bg-custom-yellow -z-50 -mx-10 md:block hidden"></div>
            <div className="w-full absolute top-52 h-24 bg-custom-light-yellow -z-50 mx-10 md:block hidden"></div>
            <div className="w-full text-center font-header md:text-4xl text-2xl my-8">
              More Resources
            </div>
            {/* <div
              className="flex flex-col justify-center items-center md:flex-row md:justify-start md:gap-10 gap-5"
            >
              <Link
                href="/roi"
                className="w-full sm:w-[450px] md:w-full h-[300px] md:h-[400px] shadow-md shadow-custom-light-yellow flex flex-col gap-5 py-11 px-[8.333%] md:px-6 bg-white rounded-lg hover:scale-[1.025] transition-all duration-1000 ease-linear"
              >
                <div className="w-full flex text-custom-yellow text-2xl font-header">
                  ROI Calculator
                </div>
                <div className="font-Montserrat break-words">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </Link>
              <Link
                href="/timingthemarket"
                className="w-full sm:w-[450px] md:w-full h-[300px] md:h-[400px] shadow-md shadow-custom-light-yellow flex flex-col gap-5 py-11 px-[8.333%] md:px-6 bg-white rounded-lg hover:scale-[1.025] transition-all duration-1000 ease-linear"
              >
                <div className="w-full flex text-custom-yellow text-2xl font-header">
                  Timing the Market
                </div>
                <div className="font-Montserrat text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </Link>
              <Link
                href="/rentvssale"
                className="w-full sm:w-[450px] md:w-full h-[300px] md:h-[400px] shadow-md shadow-custom-light-yellow flex flex-col gap-5 py-11 px-[8.333%] md:px-6 bg-white rounded-lg hover:scale-[1.025] transition-all duration-1000 ease-linear"
              >
                <div className="w-full flex text-custom-yellow text-2xl font-header">
                  Rent v. Sell
                </div>
                <div className="font-Montserrat text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </Link>
            </div> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Link
                href="/roi"
                className="shadow-md shadow-custom-light-yellow rounded-lg bg-white "
              >
                <div className="text-center md:text-left p-8 space-y-3">
                  <h3 className="w-full text-custom-yellow text-2xl font-header hover:underline hover:decoration-4 hover:decoration-custom-light-yellow">

                    ROI Calculator
                  </h3>
                  <p className="font-Montserrat break-words md w-full md:w-[75%] mx-auto md:mx-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div className="h-[500px] w-full relative">
                  <Image
                    alt="..."
                    fill
                    quality={100}
                    src={"/ROI.jpg"}
                    className="object-cover object-bottom rounded-b-md"
                  />
                </div>
              </Link>
              <Link
                href="/timingthemarket"
                className="shadow-md shadow-custom-light-yellow rounded-lg bg-white"
              >
                <div className="text-center md:text-left p-8 space-y-3">
                  <h3 className="w-full text-custom-yellow text-2xl font-header hover:underline hover:decoration-4 hover:decoration-custom-light-yellow">
                    Timing the Market
                  </h3>
                  <p className="font-Montserrat break-words w-full md:w-[75%] mx-auto md:mx-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div className="h-[500px] w-full relative">
                  <Image
                    alt="..."
                    fill
                    quality={100}
                    src={"/TTM.jpg"}
                    className="object-cover object-center rounded-b-md"
                  />
                </div>
              </Link>
              <Link
                href="/rentvssale"
                className="shadow-md shadow-custom-light-yellow rounded-lg bg-white"
              >
                <div className="text-center md:text-left p-8 space-y-3">
                  <h3 className="w-full text-custom-yellow text-2xl font-header hover:underline hover:decoration-4 hover:decoration-custom-light-yellow">
                    Rent v. Sell
                  </h3>
                  <p className="font-Montserrat break-words w-full md:w-[75%] mx-auto md:mx-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div className="h-[500px] w-full relative">
                  <Image
                    alt="..."
                    fill
                    quality={100}
                    src={"/RVS.jpg"}
                    className="object-cover object-bottom rounded-b-md"
                  />
                </div>
              </Link>
              <Link
                href="/roi"
                className="shadow-md shadow-custom-light-yellow rounded-lg bg-white"
              >
                <div className="text-center md:text-left p-8 space-y-3">
                  <h3 className="w-full text-custom-yellow text-2xl font-header hover:underline hover:decoration-4 hover:decoration-custom-light-yellow">
                    ROI Calculator
                  </h3>
                  <p className="font-Montserrat break-words w-full md:w-[75%] mx-auto md:mx-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div className="h-[500px] w-full relative">
                  <Image
                    alt="..."
                    fill
                    quality={100}
                    src={"/ROI.jpg"}
                    className="object-cover object-bottom rounded-b-md"
                  />
                </div>
              </Link>
            </div>
          </div>

        {/* card section */}
        {/* <div className="w-full h-full md:h-[32vh] py-5 px-4 my-10">
          <div className="w-full justify-center md:justify-start font-header sm:text-4xl text-2xl px-2 md:px-14 mb-5">
            Blogs
          </div>
          <div className="flex flex-col justify-center items-center md:flex-row md:justify-center md:items-center gap-5 md:gap-16">
            <Link
              href={"/valueHome"}
              className="flex flex-col justify-center items-center gap-8 shadow-lg rounded-xl p-8 max-w-[320px] hover:scale-110 transition-all duration-1000 delay-200 ease-linear border border-custom-verylight-yellow"
            >
              <Image
                alt="..."
                width={120}
                height={120}
                // fill
                quality={100}
                src={"/value.svg"}
                className="object-cover object-center"
              />
              <p className="hover:underline md:text-lg">
                Why people search for the value of their homes
              </p>
            </Link>
            <Link
              href="/saleHome"
              className="flex flex-col justify-center items-center gap-8 shadow-lg rounded-xl p-8 max-w-[320px] hover:scale-110 transition-all duration-1000 delay-200 ease-linear border border-custom-verylight-yellow"
            >
              <Image
                alt="..."
                width={95}
                height={95}
                // fill
                quality={100}
                src={"/sell.svg"}
                className="object-cover object-center"
              />
              <p className="hover:underline md:text-lg">
                Why people decide to sell their homes
              </p>
            </Link>
          </div> */}
          {/* Blogs*/}
          <div className="w-full relative px-3 h-full ">
            <div className="w-full text-center font-header md:text-4xl text-2xl my-8">
            Blogs
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Link
                href={"/valueHome"}
                className="shadow-md shadow-custom-light-yellow rounded-lg bg-white"
              >
                <div className="h-[500px] w-full relative">
                  <Image
                    alt="..."
                    fill
                    quality={100}
                    src={"/VH.jpg"}
                    className="object-cover object-bottom rounded-t-md"
                  />
                </div>
                <div className="text-center md:text-left p-8 space-y-3">
                  <h3 className="w-full text-custom-yellow text-2xl font-header hover:underline hover:decoration-4 hover:decoration-custom-light-yellow">
                  Why people search for the value of their homes
                  </h3>
                  {/* <p className="font-Montserrat break-words w-full md:w-[75%] mx-auto md:mx-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p> */}
                </div>
              </Link>
              <Link
                href={"/saleHome"}
                className="shadow-md shadow-custom-light-yellow rounded-lg bg-white"
              > 
                <div className="h-[500px] w-full relative">
                  <Image
                    alt="..."
                    fill
                    quality={100}
                    src={"/SH.png"}
                    className="object-cover object-center rounded-t-md"
                  />
                </div>
                <div className="text-center md:text-left p-8 space-y-3">
                  <h3 className="w-full text-custom-yellow text-2xl font-header hover:underline hover:decoration-4 hover:decoration-custom-light-yellow">
                  Why people decide to sell their homes
                  </h3>
                  {/* <p className="font-Montserrat break-words w-full md:w-[75%] mx-auto md:mx-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p> */}
                </div>
              </Link>
            </div>
          </div>
          {/* <div className="w-full h-full md:h-[32vh] py-5 md:px-12 px-3 my-10">
            <div className="w-full justify-center md:justify-start font-header hover:underline hover:decoration-4 hover:decoration-custom-light-yellow md:text-4xl text-2xl px-3 mb-5">
              Blogs
            </div>
            <div className="flex flex-col justify-center items-center sm:flex-row sm:justify-start sm:items-center sm:flex-wrap gap-6">
              <Link
                href={"/valueHome"}
                className="w-[300px] h-[280px] sm:w-84 sm:h-60 flex flex-col items-center gap-8 shadow-lg rounded-lg shadow-custom-light-yellow p-8 max-w-[320px] hover:scale-105 transition-all duration-1000 ease-linear"
              >
                <p className="hover:underline md:text-lg">
                  Why people search for the value of their homes
                </p>
              </Link>
              <Link
                href={"/saleHome"}
                className="w-[300px] h-[280px] sm:w-84 sm:h-60 flex flex-col items-center gap-8 shadow-lg rounded-lg shadow-custom-light-yellow p-8 max-w-[320px] hover:scale-105 transition-all duration-1000 ease-linear"
              >
                <p className="hover:underline md:text-lg">
                  Why people decide to sell their homes
                </p>
              </Link>
            </div>
          </div> */}
          


          {/* Testimonial section */}
          {/* <Testimonials></Testimonials> */}

          {/* Footer section */}
          <div className="mt-24 w-full border-t-2 border-custom-yellow py-5">
            <div className="flex w-full justify-center space-x-5">
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
            <div className="flex w-full justify-center font-Montserrat mt-4 font-medium">
              &copy; All Copyrights Reserved
            </div>
          </div>
        </div>
    </>
  );
}

export default LandingPage;
