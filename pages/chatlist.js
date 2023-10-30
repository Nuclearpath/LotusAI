// import { useSession } from "next-auth/react";
// import { useRouter } from "next/router";
// import { store } from "../lib/store";
// import React, { useEffect } from "react";
// import MainHeader from "./../components/MainHeader";
// import ChatCard from "../components/ChatCard";
import React, { useState } from "react";
// import AdminHeader from "./../../components/AdminHeader";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { useRouter } from "next/router";
import { FiSearch } from "react-icons/fi";
import MainHeader from "../components/MainHeader";
function Chatlist() {
  const [location, setLoaction] = useState("");
  const router = useRouter();
  /*Form Submit */
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/dashboard");
  };
  return (
    // <div>
    //   <MainHeader page={""}></MainHeader>
    //   <div className="w-full flex sm:px-12 px-3 py-6 flex-col">
    //     <div className="w-full flex justify-between items-center">
    //       <div className="font-header sm:text-2xl text-xl font-semibold">
    //         Get in touch with our agent
    //       </div>
    //       <button className="sm:px-5 px-1 py-2 font-Montserrat bg-custom-yellow text-white rounded-md">
    //         New Chat
    //       </button>
    //     </div>
    //     <div className="sm:px-12 px-3 bg-custom-light-yellow py-4 w-full mt-6">
    //       <div className="text-green-500 font-header text-xl flex items-center">
    //         <div className="p-3 bg-green-500 rounded-full mr-4"> </div>
    //         Ongoing Chats
    //       </div>
    //       <div className="w-full grid sm:grid-cols-3 grid-cols-1 gap-6 mt-6">
    //         <ChatCard
    //           title="20 S Huntington"
    //           des="Need help with payment portal"
    //           date="Jul / 10 / 2023"
    //         ></ChatCard>
    //       </div>
    //     </div>
    //     <div className="sm:px-12 px-3 bg-custom-light-yellow py-4 w-full mt-6">
    //       <div className="text-black font-header text-xl flex items-center">
    //         <div className="p-3 bg-red-500 rounded-full mr-4"> </div>
    //         Chat History
    //       </div>
    //       <div className="w-full grid sm:grid-cols-3 grid-cols-1 gap-6 mt-6">
    //         <ChatCard
    //           title="20 S Huntington"
    //           des="Need help with payment portal"
    //           date="Jul / 10 / 2023"
    //         ></ChatCard>
    //         <ChatCard
    //           title="20 S Huntington"
    //           des="Need help with payment portal"
    //           date="Jul / 10 / 2023"
    //         ></ChatCard>
    //         <ChatCard
    //           title="20 S Huntington"
    //           des="Need help with payment portal"
    //           date="Jul / 10 / 2023"
    //         ></ChatCard>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div>
      <MainHeader page={""}></MainHeader>
    <div className="w-full sm:px-12 px-3 sm:py-9 py-3">
        <div className="py-5 flex flex-col px-5 shadow-xl rounded-lg">
          <div className="w-full  flex flex-col justify-center gap-3 md:flex-row md:justify-between items-center">
            <div>
              <div className="font-Montserrat font-semibold text-custom-yellow text-xl ">
                Users
              </div>
              <div className="font-Montserrat text-gray-500 ">
                View all new / existing users here
              </div>
            </div>
            <form
              className="relative w-full md:w-[60%] lg:w-[40%]"
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
                className="absolute right-2 top-1 md:top-2 bg-custom-yellow rounded-3xl p-2.5 hover:bg-opacity-90"
              >
                <FiSearch className="text-lg md:text-2xl text-white font-bold" />
              </button>
            </form>
          </div>
        </div>
        <div className="py-12">
          <Table
            classNames={{
              th: "py-6 text-center",
              td: "py-6 font-Montserrat ",
              tr: "odd:bg-custom-light-yellow !py-6 text-center",
            }}
          >
            <TableHeader>
              <TableColumn className="font-Montserrat font-semibold text-black text-md">
                FirstName
              </TableColumn>
              <TableColumn className="font-Montserrat font-semibold text-black text-md">
                LastName
              </TableColumn>
              <TableColumn className="font-Montserrat font-semibold text-black text-md">
                Address
              </TableColumn>
              <TableColumn className="font-Montserrat font-semibold text-black text-md">
                Ph No
              </TableColumn>
              <TableColumn className="font-Montserrat font-semibold text-black text-md">
                Email ID
              </TableColumn>
              <TableColumn className="font-Montserrat font-semibold text-black text-md">
                Property Estimate
              </TableColumn>
              <TableColumn className="font-Montserrat font-semibold text-black text-md">
                Link to dashboard
              </TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key="1">
                <TableCell>Jaclyn</TableCell>
                <TableCell>Brewington</TableCell>
                <TableCell>20 S Huntington</TableCell>
                <TableCell>876 829 30929</TableCell>
                <TableCell> gm@gmail.com</TableCell>
                <TableCell> 134,5456$</TableCell>
                <TableCell> View</TableCell>
              </TableRow>
              <TableRow key="2">
                <TableCell>Jaclyn</TableCell>
                <TableCell>Brewington</TableCell>
                <TableCell>20 S Huntington</TableCell>
                <TableCell>876 829 30929</TableCell>
                <TableCell> gm@gmail.com</TableCell>
                <TableCell> 134,5456$</TableCell>
                <TableCell> View</TableCell>
              </TableRow>
              <TableRow key="3">
                <TableCell>Jaclyn</TableCell>
                <TableCell>Brewington</TableCell>
                <TableCell>20 S Huntington</TableCell>
                <TableCell>876 829 30929</TableCell>
                <TableCell> gm@gmail.com</TableCell>
                <TableCell> 134,5456$</TableCell>
                <TableCell> View</TableCell>
              </TableRow>
              <TableRow key="4">
                <TableCell>Jaclyn</TableCell>
                <TableCell>Brewington</TableCell>
                <TableCell>20 S Huntington</TableCell>
                <TableCell>876 829 30929</TableCell>
                <TableCell> gm@gmail.com</TableCell>
                <TableCell> 134,5456$</TableCell>
                <TableCell> View</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
      </div>
  );
}

export default Chatlist;
