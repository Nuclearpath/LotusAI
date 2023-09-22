import React from "react";
import MainHeader from "../../components/MainHeader";
import Link from "next/link";
function salebyowner() {
  return (
    <div>
      <MainHeader></MainHeader>
      <div className="sm:px-24 px-6 pb-12">
        <div className="sm:text-3xl text-2xl sm:py-12 py-3 font-Montserrat">
          Sale By Owner
        </div>
        <div className=" flex flex-col space-y-10 sm:pt-0 pt-5">
          <div className="flex flex-col space-y-2 sm:px-12 px-3 sm:py-3 py-3 border-2 border-l-0 border-custom-yellow rounded relative">
            <div className=" absolute sm:h-24 sm:w-24 h-12 w-12 bg-custom-light-yellow sm:top-4 sm:-left-12 -top-4 -left-4 rounded-full flex justify-center items-center sm:text-4xl text-2xl font-threeline  text-custom-yellow stroked">
              1
            </div>
            <div className="text-2xl font-Montserrat font-semibold pl-3">
              Preparation and Staging
            </div>
            <div className="text-lg font-Montserrat pl-3">
              Staging is the icing on the cake that gives your home a
              professional touch. With a few props and the following tips, your
              home will show like a model. <br></br>
              <Link
                href="/salebyowner/preparationandstaging"
                className="text-custom-yellow font-semibold underline underline-offset-1"
              >
                Find out more
              </Link>
            </div>
          </div>
          <div className="flex flex-col space-y-2 sm:px-12 px-3 sm:py-3 py-3 border-2 border-r-0 border-custom-yellow rounded relative">
            <div className=" absolute sm:h-24 sm:w-24 h-12 w-12 bg-custom-light-yellow sm:top-4 sm:-right-12 -top-4 -right-4 rounded-full flex justify-center items-center sm:text-4xl text-2xl font-threeline  text-custom-yellow stroked">
              2
            </div>
            <div className="text-2xl font-Montserrat font-semibold pl-3">
              FSBO Marketing Checklist
            </div>
            <div className="text-lg font-Montserrat pl-3">
              Successfully marketing your home means much more than putting a
              for sale sign in your front yard <br></br>
              <Link
                href="/salebyowner/fsbomarketingchecklist"
                className="text-custom-yellow font-semibold underline underline-offset-1"
              >
                Find out more
              </Link>
            </div>
          </div>
          <div className="flex flex-col space-y-2 sm:px-12 px-3 sm:py-3 py-3 border-2 border-l-0 border-custom-yellow rounded relative">
            <div className=" absolute sm:h-24 sm:w-24 h-12 w-12 bg-custom-light-yellow sm:top-4 sm:-left-12 -top-4 -left-4 rounded-full flex justify-center items-center sm:text-4xl text-2xl font-threeline  text-custom-yellow stroked">
              3
            </div>
            <div className="text-2xl font-Montserrat font-semibold pl-3">
              Pricing
            </div>
            <div className="text-lg font-Montserrat pl-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              <br></br>
              <Link
                href="/salebyowner/pricing"
                className="text-custom-yellow font-semibold underline underline-offset-1"
              >
                Find out more
              </Link>
            </div>
          </div>
          <div className="flex flex-col space-y-2 sm:px-12 px-3 sm:py-3 py-3 border-2 border-r-0 border-custom-yellow rounded relative">
            <div className=" absolute sm:h-24 sm:w-24 h-12 w-12 bg-custom-light-yellow sm:top-4 sm:-right-12 -top-4 -right-4 rounded-full flex justify-center items-center sm:text-4xl text-2xl font-threeline  text-custom-yellow stroked">
              4
            </div>
            <div className="text-2xl font-Montserrat font-semibold pl-3">
              Safe Showing Checklist
            </div>
            <div className="text-lg font-Montserrat pl-3">
              Staging is the icing on the cake that gives your home a
              professional touch. With a few props and the following tips, your
              home will show like a model.<br></br>{" "}
              <Link
                href="/salebyowner/safeshowingchecklist"
                className="text-custom-yellow font-semibold underline underline-offset-1"
              >
                Find out more
              </Link>
            </div>
          </div>
          <div className="flex flex-col space-y-2 sm:px-12 px-3 sm:py-3 py-3 border-2 border-l-0 border-custom-yellow rounded relative">
            <div className=" absolute sm:h-24 sm:w-24 h-12 w-12 bg-custom-light-yellow sm:top-4 sm:-left-12 -top-4 -left-4 rounded-full flex justify-center items-center sm:text-4xl text-2xl font-threeline  text-custom-yellow stroked">
              5
            </div>
            <div className="text-2xl font-Montserrat font-semibold pl-3">
              Qualifying the buyer
            </div>
            <div className="text-lg font-Montserrat pl-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <br></br>{" "}
              <Link
                href="/salebyowner/qualifyingthebuyer"
                className="text-custom-yellow font-semibold underline underline-offset-1"
              >
                Find out more
              </Link>
            </div>
          </div>
          <div className="flex flex-col space-y-2 sm:px-12 px-3 sm:py-3 py-3 border-2 border-r-0 border-custom-yellow rounded relative">
            <div className=" absolute sm:h-24 sm:w-24 h-12 w-12 bg-custom-light-yellow sm:top-4 sm:-right-12 -top-4 -right-4 rounded-full flex justify-center items-center sm:text-4xl text-2xl font-threeline  text-custom-yellow stroked">
              6
            </div>
            <div className="text-2xl font-Montserrat font-semibold pl-3">
              Test Your Real Estate IQ Quiz
            </div>
            <div className="text-lg font-Montserrat pl-3">
              Do you have what it takes to go it alone? Test your real estate
              knowledge<br></br>{" "}
              <Link
                href="/salebyowner/testquiz"
                className="text-custom-yellow font-semibold underline underline-offset-1"
              >
                Find out more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default salebyowner;
