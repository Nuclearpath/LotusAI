import Link from "next/link";
import {FaRobot} from "react-icons/fa"
import {Popover, PopoverTrigger, PopoverContent} from "@nextui-org/react";
import { useState } from "react";
import { FaFrog } from "react-icons/fa";
export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("");
  return (
    <Popover
      placement="left-end"
      isOpen={isOpen}
      onOpenChange={(open) => setIsOpen(open)}
      className="w-full "
      classNames={{
        base: "sm:px-8 sm:py-4 px-4 py-2 bg-blue-800",
      }}
    >
      <PopoverTrigger>
        <button className="flex sm:text-xl text-md fixed bottom-10 right-10 space-x-4  z-10 items-center bg-custom-yellow text-white sm:px-8 sm:py-4 px-4 py-2  rounded-full font-Montserrat hover:border-none">
          <FaFrog></FaFrog>
          {!isOpen && <div>Need Help?</div>}
        </button>
      </PopoverTrigger>
      <PopoverContent className="bg-custom-light-yellow px-0 py-0 sm:w-auto w-full sm:h-auto h-screen shadow-5xl">
        <div className="sm:w-[400px] sm:h-[400px]  w-full h-full bg-custom-light-yellow px-0 py-0 flex flex-col items-center">
          <div className=" font-bold pt-4 text-xl">Chat with us</div>
          <div className="w-full px-4  font-Montserrat flex justify-start py-4 ">
            <div className="w-10/12 bg-white px-1 py-2 rounded-lg rounded-bl-none">
              Why are you selling your home?
            </div>
          </div>
          <div className="w-full px-4  font-Montserrat flex justify-end py-4 ">
            <div className="w-10/12 bg-white px-1 py-2 rounded-lg rounded-br-none">
              Upgrading to a new house
            </div>
          </div>
          <form className=" bottom-2 fixed w-full px-2">
            <input
              className="w-full rounded-md p-2 font-Montserrat"
              placeholder="Type Your Message"
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></input>
          </form>
        </div>
      </PopoverContent>
    </Popover>
  );
}