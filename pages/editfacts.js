import React, { useState } from "react";
import MainHeader from "../components/MainHeader";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Link from "next/link";
import Chatbot from "../components/Chatbot";
function Editfacts() {
  const [formValue, setFormValue] = useState({
    sqFt: 0,
    noofBeds: 0,
    fullBaths: 0,
    halfBaths: 0,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <Chatbot></Chatbot>
      <MainHeader></MainHeader>
      <div className="w-full flex flex-col sm:py-12 py-6 sm:px-12 px-3">
        <div className="w-full flex sm:text-4xl text-2xl font-Montserrat sm:py-6 py-3">
          Edit House Facts
        </div>
        <div className="w-full py-6 bg-custom-light-yellow font-Montserrat">
          <form
            className="w-full grid sm:grid-cols-2 grid-cols-1 sm:gap-12 gap-4"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className="w-full flex-col flex space-y-2 sm:px-6 px-3">
              <div className="w-full sm:text-2xl text-xl font-Montserrat">
                Sq. Ft.
              </div>
              <input
                type="text"
                className="border-2 border-black rounded-lg px-2 py-3"
                value={formValue.sqFt}
                onChange={(e) =>
                  setFormValue({ ...formValue, sqFt: e.target.value })
                }
              ></input>
            </div>
            <div className="w-full flex-col flex space-y-2 sm:px-6 px-3">
              <div className="w-full sm:text-2xl text-xl font-Montserrat">
                No of Bedrooms
              </div>
              <input
                type="text"
                className="border-2 border-black rounded-lg px-2 py-3"
                value={formValue.noofBeds}
                onChange={(e) =>
                  setFormValue({ ...formValue, noofBeds: e.target.value })
                }
              ></input>
            </div>
            <div className="w-full flex-col flex space-y-2 sm:px-6 px-3">
              <div className="w-full sm:text-2xl text-xl font-Montserrat">
                Full Baths
              </div>
              <input
                type="text"
                className="border-2 border-black rounded-lg px-2 py-3"
                value={formValue.fullBaths}
                onChange={(e) =>
                  setFormValue({ ...formValue, fullBaths: e.target.value })
                }
              ></input>
            </div>
            <div className="w-full flex-col flex space-y-2 sm:px-6 px-3">
              <div className="w-full sm:text-2xl text-xl font-Montserrat">
                Half Baths
              </div>
              <input
                type="text"
                className="border-2 border-black rounded-lg px-2 py-3"
                value={formValue.halfBaths}
                onChange={(e) =>
                  setFormValue({ ...formValue, halfBaths: e.target.value })
                }
              ></input>
            </div>
          </form>
        </div>
      </div>
      <div className="w-full flex flex-col sm:py-6 py-3 sm:px-12 px-3">
        <Link
          className="w-full flex  text-2xl font-Montserrat sm:py-6 py-3 items-center"
          href=""
        >
          <AiOutlinePlusCircle className="text-custom-yellow mr-5"></AiOutlinePlusCircle>{" "}
          Add New Renovation
        </Link>
      </div>
    </div>
  );
}

export default Editfacts;
