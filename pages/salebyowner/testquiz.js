import React from "react";
import MainHeader from "./../../components/MainHeader";
import {
  BiSolidChevronLeftCircle,
  BiSolidChevronRightCircle,
} from "react-icons/bi";
import Chatbot from "../../components/Chatbot";
function testquiz() {
  return (
    <div>
      <Chatbot></Chatbot>
      <MainHeader></MainHeader>
      <div className="sm:px-12 px-3">
        <div className=" mt-6 py-2 bg-custom-light-yellow rounded-lg sm:text-3xl text-2xl justify-center items-center w-full flex font-Montserrat ">
          Real Estate IQ
        </div>
        <div className="w-full flex justify-center">
          <div className="py-12 sm:w-1/2 w-full font-Montserrat px-12 flex flex-col space-y-12 ">
            <button className="w-full border-2 border-gray-950 rounded-lg py-6">
              Answer 1{" "}
            </button>
            <button className="w-full border-2 border-gray-950 rounded-lg py-6">
              {" "}
              Answer 2{" "}
            </button>
            <button className="w-full border-2 border-gray-950 rounded-lg py-6">
              Answer 3{" "}
            </button>
            <div className="w-full justify-center  space-x-4 flex">
              <button className="text-6xl text-custom-yellow">
                <BiSolidChevronLeftCircle></BiSolidChevronLeftCircle>
              </button>
              <button className="text-6xl text-custom-yellow">
                <BiSolidChevronRightCircle></BiSolidChevronRightCircle>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default testquiz;
