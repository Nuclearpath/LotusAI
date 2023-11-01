"use client";
import React from "react";
import MainHeader from "../components/MainHeader";
import CompCard from "../components/CompCard";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import { BiLogoTelegram } from "react-icons/bi";
// import { Button } from "@nextui-org/button";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { property } from "lodash";
function Comparableproperties() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [values, setValues] = useState([]);
  const [propertyValue, setPropertyValue] = useState("");
  const [editId, setEditId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      const editPropertyValue = values.find((edit) => edit.id === editId);
      const updatePropertyValue = values.map((update) =>
        update.id === editPropertyValue.id
          ? (update = { id: update.id, propertyValue })
          : { id: update.id, property: update.property }
      );
      setValues(updatePropertyValue);
      setEditId(0);
      setPropertyValue("");
      return;
    }

    const PropertyValue = {
      id: values.length === 0 ? 1 : values[values.length - 1].id + 1,
      property: propertyValue,
    };
    values !== ""
      ? setValues([...values, PropertyValue])
      : alert("You Need To Valid Property Name");

    if (propertyValue === "") {
    }

    setPropertyValue("");
  };

  const editValue = (id) => {
    const editOne = values.find((value) => value.id === id);
    setPropertyValue(editOne.property);
    setEditId(id);
  };

  const deleteValue = (id) => {
    const filteredLists = values.filter((val) => val.id !== id);
    setValues(filteredLists);
  };

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);

  return (
    <div>
      <MainHeader page={""}></MainHeader>
      <div className="grid md:grid-cols-2 grid-cols-1 w-full  gap-4">
        <div className="px-2">
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
          {/* Form section */}
          <div className="p-4">
            <div className="w-full h-full bg-custom-light-yellow p-6 text-xl ">
              <p>Don{"'"}t see a comparable of your interest?</p>
              <button
                className={` ${
                  isOpen ? "bg-red-600" : "bg-custom-yellow"
                } hover:underline hover:bg-opacity-80 text-white p-2 rounded-md my-2 mb-5`}
                onClick={() => setIsOpen((o) => !o)}
              >
                {isOpen ? "Close" : "Add Your Own"}
              </button>

              {isOpen ? (
                <div>
                  <form onSubmit={handleSubmit} className="flex flex-col justify-start items-center gap-5 lg:flex-row lg:justify-center lg:items-center ">
                    <input
                      type="text"
                      placeholder="Add more comparable properties"
                      className="p-3 w-full sm:w-4/5 outline-none border-none rounded-md focus:outline focus:outline-custom-yellow"
                      required
                      value={propertyValue}
                      onChange={(e) => setPropertyValue(e.target.value)}
                    />
                    {editId ? (
                      <button
                        className="bg-green-600 hover:bg-opacity-80 px-12 py-4 lg:p-3.5 mx-4 rounded-md text-white text-xl"
                        onClick={() => editValue(value.id)}
                      >
                        <TiEdit />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="bg-custom-yellow hover:bg-opacity-80 px-12 py-4 lg:p-3.5 mx-4 rounded-md text-white text-xl"
                      >
                        <BiLogoTelegram></BiLogoTelegram>
                      </button>
                    )}
                  </form>
                  {values.length ? (
                    <ul className="px-2 py-5 md:p-5 overflow-auto max-h-[200px]">
                      {values.map((value) => (
                        <li
                          className="flex justify-between items-center w-full lg:w-4/5 p-2"
                          key={value.id}
                        >
                          <p>{value.property}</p>
                          <div className="flex gap-5">
                            <button
                              className="p-1.5 bg-green-600 text-white rounded-md"
                              onClick={() => editValue(value.id)}
                            >
                              <TiEdit />
                            </button>
                            <button
                              className="p-1.5 bg-red-600 text-white rounded-md"
                              onClick={() => deleteValue(value.id)}
                            >
                              <RiDeleteBin2Fill />
                            </button>
                          </div>
                        </li>
                      ))}
                      {/* <li className="flex justify-between items-center w-4/5 p-2">
                        <p>Hello world</p>
                        <div className="flex gap-5">
                          <button className="p-1.5 bg-green-600 text-white rounded-md">
                            <TiEdit />
                          </button>
                          <button className="p-1.5 bg-red-600 text-white rounded-md">
                            <RiDeleteBin2Fill />
                          </button>
                        </div>
                      </li>
                      <li className="flex justify-between items-center w-4/5 p-2">
                        <p>Hello world</p>
                        <div className="flex gap-5">
                          <button className="p-1.5 bg-green-600 text-white rounded-md">
                            <TiEdit />
                          </button>
                          <button className="p-1.5 bg-red-600 text-white rounded-md">
                            <RiDeleteBin2Fill />
                          </button>
                        </div>
                      </li> */}
                    </ul>
                  ) : (
                    <div></div>
                  )}
                </div>
              ) : (
                <div></div>
              )}
            </div>
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
