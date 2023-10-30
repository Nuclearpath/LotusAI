import React, { useEffect, useState } from "react";
import MainHeader from "../components/MainHeader";
import { AiOutlinePlusCircle } from "react-icons/ai";
// import Link from "next/link";
// import Chatbot from "../components/Chatbot";
import { useRouter } from "next/router";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

import { useSession } from "next-auth/react";
import NotLoggedIn from "../components/NotLoggedIn";
function Editfacts() {
  const { data: session, status } = useSession();

  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status]);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [formValue, setFormValue] = useState({
    sqFt: 0,
    noofBeds: 0,
    fullBaths: 0,
    halfBaths: 0,
  });

  const [newForm, setNewForm] = useState({
    date: 0,
    cost: 0,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      {/* <Chatbot></Chatbot> */}
      <MainHeader page={""}></MainHeader>
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
                Finished Square Feet
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
                Number of Bedrooms
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
        <button
          className="w-full flex  text-2xl font-Montserrat sm:py-6 py-3 items-center"
          href=""
          onClick={onOpen}
        >
          <AiOutlinePlusCircle className="text-custom-yellow mr-5"></AiOutlinePlusCircle>{" "}
          Add New Renovation
        </button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                {/* <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader> */}
                <ModalBody className="sm:px-12 px-3 py-5 flex flex-col space-y-3">
                  <div className="w-full flex font-Montserrat font-semibold text-xl">
                    Add Renovation
                  </div>
                  <form className="w-full flex flex-col space-y-6 text-xl">
                    <div className="w-full flex flex-col space-y-3">
                      <div>Project Type</div>
                      <select className="  z-10  flex-col  text-black border-2 w-full flex  rounded  px-4 py-2">
                        <option className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded w-64">
                          Main Activity
                        </option>
                      </select>
                    </div>
                    <div className="w-full flex flex-col space-y-3">
                      <div>Date Completed</div>
                      <input
                        type="Number"
                        className="  z-10  flex-col  text-black border-2 w-full flex  rounded  px-4 py-2"
                        value={newForm.date}
                        onChange={(e) =>
                          setFormValue({ ...newForm, date: e.target.value })
                        }
                      ></input>
                    </div>
                    <div className="w-full flex flex-col space-y-3">
                      <div>Cost Estimate</div>
                      <input
                        type="Number"
                        className="  z-10  flex-col  text-black border-2 w-full flex  rounded  px-4 py-2"
                        value={newForm.cost}
                        onChange={(e) =>
                          setFormValue({ ...newForm, cost: e.target.value })
                        }
                      ></input>
                    </div>
                    <div className="w-full flex space-x-2">
                      <button className="w-full border-2 border-black py-2">
                        Clear
                      </button>
                      <button className="w-full border-2 border-custom-yellow text-custom-yellow py-2">
                        Add Renovation
                      </button>
                    </div>
                  </form>
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
}

export default Editfacts;
