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
import Videosection from "./Videosection";
function LandingPage() {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

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
      {domLoaded && (
        <div className="w-full flex h-full  flex-col">
          <MainHeader page={"landing"}></MainHeader>
          {/* Main section with search bar */}
          <div className="md:flex w-full relative md:px-12 px-3 h-full md:h-[80vh] mb-10">
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
            </div>

            <div className="md:w-1/2 flex h-full relative  flex-col  md:pl-12 px-3 md:pt-4  md:py-0 py-5 w-full md:overflow-hidden">
              <div className="w-full h-full flex flex-col justify-start gap-10 md:gap-5 ">
                <div className="md:text-5xl text-[40px] font-header font-normal  leading-tight">
                  Find Out What Your Is 
                  <span className="text-custom-yellow mx-3">Really</span>
                  Worth
                </div>
                <div className="font-header text-sm md:text-xl tracking-wider font-semibold w-full lg:w-4/5">
                  The Most Accurate Home Valuation Tool Available To The Public
                </div>
                {/* <form
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
                </form> */}
                <form
                  className="md:pt-12 lg:pt-10 relative"
                  onSubmit={(e) => handleSubmit(e)}
                >
                  <input
                    type="text"
                    // className="mb-8  border-2 border-gray-900 rounded-md w-full py-2 px-3 text-gray-900 placeholder:text-gray-900  placeholder: font-medium leading-tight focus:outline-none "
                    className="w-full mb-2 rounded-md border-2 text-lg border-custom-yellow p-2 md:py-4 md:px-6 text-gray-900 placeholder:text-custom-grey placeholder:leading-tight placeholder:text-sm md:placeholder:text-base focus:outline-none focus:border-2 focus:border-primaryblue shadow-md"
                    placeholder="Search Zipcode, Address, Location "
                    value={location}
                    onChange={(e) => setLoaction(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1 md:top-14  lg:top-[50px] bg-custom-yellow rounded-3xl p-2.5 hover:bg-opacity-90"
                  >
                    <FiSearch className="text-lg md:text-2xl text-white font-bold" />
                  </button>
                </form>
                <div className="border-2 rounded-md border-custom-yellow h-32 md:h-40 lg:h-48 shadow-md md:w-[90%] ml-10 lg:ml-[60px]">
                  <div className="w-[90%] md:w-[85%] space-y-3 bg-custom-light-yellow absolute h-auto md:h-40 lg:h-48 bottom-5 md:bottom-3 lg:-bottom-10 xl:bottom-9 right-7 md:right-5 lg:right-5 rounded-md py-5 px-4 shadow-sm shadow-custom-light-yellow">
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
          </div>
          {/* Video section */}
          {/* <div className="w-full flex md:px-12 px-3 md:py-12 py-3 h">
            <video controls autoPlay className="w-full h-full">
              <source src="/video.mp4" />
            </video>
          </div> */}
          {/* <Videosection/> */}

          {/* Content section */}
          <section className="my-5 h-full md:h-[55vh] w-full md:px-12 px-3">
            <div className="flex flex-col justify-center items-center gap-6 rounded-md shadow-lg shadow-custom-light-yellow py-11 px-[8.333%] md:px-6  h-full w-full">
              <h3  className="w-full text-center font-header md:text-4xl text-2xl">What makes a Lotuss estimate different ? </h3>
              <p className="font-Montserrat text-center w-full md:w-[80%]">Unlike other online home valuation sites, Lotuss uses the information only real estate agents and appraisers use: real time market data, accurate comps, off-market sales, and even lets you select and remove comparable listings, resulting in the most accurate home value available to the public. Whether you are ready to sell or just curious about the true value of your home in today’s market, Lotuss provides the most accurate idea of what your pad is worth.</p>
              </div>
          </section>


          {/* More resources section */}
          <div
            className="md:flex  flex-col w-full space-y-7 relative md:px-12 px-3 h-full"
            id="about"
          >
            <div className="w-full absolute bottom-10 h-32 bg-custom-yellow -z-50 -mx-10 md:block hidden"></div>
            <div className="w-full absolute top-52 h-24 bg-custom-light-yellow -z-50 mx-10 md:block hidden"></div>
            <div className="w-full justify-start font-header md:text-4xl text-2xl">
              More Resources
            </div>
            <div 
            // className="grid place-content-center md:place-content-start md:gap-10 gap-5 md:grid-cols-3 grid-cols-1 md:px-0 "
            className="flex flex-col justify-center items-center md:flex-row md:justify-start md:gap-10 gap-5"
            >
              <Link
                href="/roi"
                className="w-full sm:w-[450px] md:w-full h-[300px] md:h-[400px] shadow-md shadow-custom-light-yellow flex flex-col gap-5 py-11 px-[8.333%] md:px-6 bg-white rounded-md hover:scale-[1.025] transition-all duration-1000 ease-linear"
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
                className="w-full sm:w-[450px] md:w-full h-[300px] md:h-[400px] shadow-md shadow-custom-light-yellow flex flex-col gap-5 py-11 px-[8.333%] md:px-6 bg-white rounded-md hover:scale-[1.025] transition-all duration-1000 ease-linear"
              >
                <div className="w-full flex text-custom-yellow text-2xl font-header">
                  Timing the Market
                </div>
                <div className="font-Montserrat break-words">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </Link>
              <Link
                href="/rentvssale"
                className="w-full sm:w-[450px] md:w-full h-[300px] md:h-[400px] shadow-md shadow-custom-light-yellow flex flex-col gap-5 py-11 px-[8.333%] md:px-6 bg-white rounded-md hover:scale-[1.025] transition-all duration-1000 ease-linear"
              >
                <div className="w-full flex text-custom-yellow text-2xl font-header">
                  Rent v. Sell
                </div>
                <div className="font-Montserrat break-words">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </Link>
            </div>
          </div>
          {/* Blogs*/}
          {/* <div
            className="md:pt-24 pt-8 md:flex  flex-col w-full space-y-7 relative md:px-12 px-3 md:overflow-hidden"
            id="about"
          >
            <div className="w-full justify-start font-header md:text-4xl text-2xl">
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
          </div> */}
          <div className="w-full h-full md:h-[32vh] py-5 md:px-12 px-3 my-10">
            <div className="w-full justify-center md:justify-start font-header md:text-4xl text-2xl px-3 mb-5">
              Blogs
            </div>
            <div className="flex flex-col justify-center items-center sm:flex-row sm:justify-start sm:items-center sm:flex-wrap gap-6">
              <Link
                href={"/valueHome"}
                className="w-[300px] h-[280px] sm:w-84 sm:h-60 flex flex-col items-center gap-8 shadow-lg rounded-md shadow-custom-light-yellow p-8 max-w-[320px] hover:scale-105 transition-all duration-1000 ease-linear"
              >
                {/* <Image
                alt="..."
                width={120}
                height={120}
                // fill
                quality={100}
                src={"/value.svg"}
                className="object-cover object-center"
              /> */}
                <p className="hover:underline md:text-lg">
                  Why people search for the value of their homes
                </p>
              </Link>
              <Link
                href={"/saleHome"}
                className="w-[300px] h-[280px] sm:w-84 sm:h-60 flex flex-col items-center gap-8 shadow-lg rounded-md shadow-custom-light-yellow p-8 max-w-[320px] hover:scale-105 transition-all duration-1000 ease-linear"
              >
                {/* <Image
                alt="..."
                width={95}
                height={95}
                // fill
                quality={100}
                src={"/sell.svg"}
                className="object-cover object-center"
              /> */}
                <p className="hover:underline md:text-lg">
                  Why people decide to sell their homes
                </p>
              </Link>
            </div>
          </div>

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
      )}
    </>
  );
}

export default LandingPage;
