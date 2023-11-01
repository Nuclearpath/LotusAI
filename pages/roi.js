import React, { useState } from "react";
import MainHeader from "../components/MainHeader";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import Loader from "./../components/Loader";
import { TiTick } from "react-icons/ti";
import { BiLogoTelegram } from "react-icons/bi";

// import Chatbot from "../components/Chatbot";
function Roi() {
  const houseData = {
    house: "20 S Huntington Ave",
    value: 2732900,
    decription: "2BHK , 1 Bath",
    location: "Boston",
    houseNo: "MA - 02446",
    estimate: 2732900,
    avergae: 2342900,
    sales: 7,
  };
  const data = [
    {
      title: "MOST VALUABLE",
      propties: [
        "Stainless Steel Appliances",
        "Natural Gas Utilities",
        "Backyard",
        "Basement",
        "Vinyl Sliding",
      ],
    },
    {
      title: "MOST POPULAR",
      propties: ["Office", "Fireplace", "Deck", "Family Room", "View"],
    },
  ];
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { data: session, status } = useSession();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [estimate, setEstimate] = useState([]);
  const [property, setProperty] = useState("");
  const [value, setValue] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();

    const PropertyValue = {
      property,
      value
    };
    estimate !== ""
      ? setEstimate([...estimate, PropertyValue])
      : alert("You Need To Valid Property Name");

    setProperty("");
    setValue("")
  }

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);

  return (
    <div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
        <ModalContent>
          {(onClose) => (
            <>
              <div className="h-full w-full flex flex-col justify-center items-center py-10">
                <div className="text-5xl bg-green-500 p-5 rounded-full text-white ">
                  <TiTick></TiTick>
                </div>
                <div className="pt-4 text-green-500 text-2xl font-Montserrat font-semibold">
                  Updates Saved
                </div>
                <div className="text-xl font-Montserrat font-medium">
                  Your New Estimate is{" "}
                  <span className="font-semibold">$2,732,900</span>
                </div>
                <Link className="font-Montserrat underline pt-4" href="/">
                  Click here to view updated dashboard
                </Link>
              </div>
            </>
          )}
        </ModalContent>
      </Modal>
      {/* <Chatbot></Chatbot> */}
      <MainHeader page={""}></MainHeader>
      <div className="w-full sm:px-12 px-3">
        <div className="flex flex-col justify-center items-center px-1 py-2 my-4 rounded-md font-Montserrat">
          <div>
            <div className=" font-semibold flex items-center">
              Estimated Value for {houseData.house}
              <span className="text-custom-yellow sm:text-xl pl-2 text-base font-Montserrat sm:block flex">
                $ {houseData.value}
              </span>
            </div>
            <div>{houseData.decription}</div>
            <button
              className=" underline sm:text-xl text-base py-3"
              onClick={() => setOpen(!open)}
            >
              Get Revised Estimate
            </button>
          </div>
          
          {open ? (
            <div className="w-full md:w-3/5 bg-custom-light-yellow p-6 text-base rounded-md">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center items-center gap-5">
                <input
                  type="text"
                  placeholder="Add property"
                  className="p-2 w-4/5 md:w-1/3 outline-none border-none rounded-md focus:outline focus:outline-custom-yellow"
                  value={property}
                  required
                  onChange={(e) => setProperty(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Add value"
                  className="p-2 w-4/5 md:w-1/3 outline-none border-none rounded-md focus:outline focus:outline-custom-yellow"
                  value={value}
                  required
                  onChange={(e) => setValue(e.target.value)}
                />
                <button
                  type="submit"
                  className="bg-custom-yellow hover:bg-opacity-80 px-10 py-3 sm:p-2.5 rounded-md text-white text-xl"
                >
                  <BiLogoTelegram></BiLogoTelegram>
                </button>
              </form>
              {estimate.length ? (
                <ul className="p-5 overflow-auto max-h-[200px]">
                  {estimate.map((val,idx) => (
                    <li
                      // className="flex justify-between items-center w-1/2 p-2"
                      key={idx}
                    >
                      <div className="flex justify-evenly items-center">
                      <p>{val.property}</p>
                      <p>{val.value}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <div></div>
              )}
            </div>
          ) : (
            <div></div>
          )}
          <div className="py-3">
            <button
              className="font-header bg-custom-yellow hover:bg-opacity-80 font-semibold  rounded-full  py-2 px-5 "
              onClick={onOpen}
            >
              Upgrade
            </button>
          </div>
        </div>
        <div className="sm:pt-6 pt-3 flex justify-start sm:text-2xl text-2xl font-header w-full">
          Top 10 home features in the U.S. that add value
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 pt-3">
          {data &&
            data.map((e, i) => {
              return (
                <div
                  key={i}
                  className="flex flex-col 2xl font-Montserrat w-full items-start px-3 sm:py-10 py-4"
                >
                  <div className=" border-2 border-gray-700 py-10 sm:px-4 px-2 rounded-lg md:w-10/12 w-full flex justify-center flex-col items-center space-y-5">
                    <div className="font-semibold font-header">{e.title}</div>
                    <div className="flex w-full border-b-2 border-gray-600"></div>
                    <ol className="list-decimal space-y-5  w-full list-inside ">
                      {e.propties.map((k, j) => {
                        return (
                          <li
                            className="w-full odd:bg-custom-verylight-yellow  px-4 py-3  shadow rounded font-semibold"
                            key={j}
                          >
                            {k}
                          </li>
                        );
                      })}
                    </ol>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Roi;
