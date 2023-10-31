"use client"
import React from "react";
import MainHeader from "../components/MainHeader";
import CompCard from "../components/CompCard";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect,useState } from "react";
import Link from "next/link";
import { BiLogoTelegram } from "react-icons/bi";
import { Button } from "@nextui-org/button";
function Comparableproperties() {
  const { data: session, status } = useSession();
  const router = useRouter();
const [isOpen,setIsOpen]=useState(false)
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status,router]);
  return (
    <div>
      <MainHeader page={""}></MainHeader>
      <div className="grid md:grid-cols-2 grid-cols-1 w-full  gap-4">
        <div className="px-2">
          {" "}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114303.09426162124!2d-71.10340186436356!3d42.331809042713346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3652d0d3d311b%3A0x787cbf240162e8a0!2sBoston%2C%20MA%2C%20USA!5e0!3m2!1sen!2sin!4v1695357710811!5m2!1sen!2sin"
            // width="600"
            // height="450"
            className="w-full md:h-full h-[50vh] py-6"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="w-full">
          <div className="w-full flex font-font-header sm:text-2xl text-xl sm:p-5 p-3 font-semibold">
            Take a look at some comparable properties
          </div>
          <div className="w-full px-3 py-6 bg-custom-light-yellow flex flex-col justify-center items-center h-[30vh]">
            <div className="w-full text-header flex justify-center font-semibold text-xl">
              {" "}
              Don{"'"}t see a comparable of your interest?
              <button  className="text-custom-yellow underline" onClick={()=>setIsOpen((o)=>!o)}>
                Add your own
              </button>
            </div>
           {isOpen? <div>
            <form className="w-full bg-white flex py-1 px-3 mt-4">
              <input
                type="text"
                className="w-full py-1"
                placeholder="Add more comparable properties"
              ></input>
              <button
                type="submit"
                className="bg-custom-yellow px-2 text-white text-xl"
              >
                <BiLogoTelegram></BiLogoTelegram>
              </button>
            </form>
            {/* <div className="mt-4 w-full justify-between flex text-xl">
              <div className="flex space-x-4">
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </div> */}
            </div>:<div></div>}
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 sm:gap-8 gap-4 p-4">
            <CompCard
              image={"/house1.png"}
              price={"2,662,90"}
              area="360 Huntington Ave, Boston"
            ></CompCard>
            <CompCard
              image={"/house1.png"}
              price={"2,662,90"}
              area="360 Huntington Ave, Boston"
            ></CompCard>
            <CompCard
              image={"/house1.png"}
              price={"2,662,90"}
              area="360 Huntington Ave, Boston"
            ></CompCard>
            <CompCard
              image={"/house1.png"}
              price={"2,662,90"}
              area="360 Huntington Ave, Boston"
            ></CompCard>
          </div>
   
        </div>
      </div>
    </div>
  );
}

export default Comparableproperties;
