import React from "react";
import AdminHeader from "./../../components/AdminHeader";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { BiPencil } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import Link from "next/link";
function Moderatorlist() {
  return (
    <div>
      <div>
        <AdminHeader></AdminHeader>
        <div className="w-full sm:px-12 px-3 sm:py-9 py-3">
          <div className="w-full flex shadow-xl rounded-lg px-5 py-5">
            <div className=" flex flex-col  grow">
              <div className="font-Montserrat font-semibold text-custom-yellow text-xl ">
                Moderators
              </div>
              <div className="font-Montserrat text-gray-500 ">
                Manage moderators here
              </div>
            </div>
            <button className="bg-custom-yellow rounded-md text-white px-4">
              Add New Moderator
            </button>
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
                  Number of clients
                </TableColumn>
                <TableColumn className="font-Montserrat font-semibold text-black text-md">
                  Ph No
                </TableColumn>
                <TableColumn className="font-Montserrat font-semibold text-black text-md">
                  Email ID
                </TableColumn>
                <TableColumn className="font-Montserrat font-semibold text-black text-md">
                  Action
                </TableColumn>
                <TableColumn className="font-Montserrat font-semibold text-black text-md">
                  Chat with moderator
                </TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow key="1">
                  <TableCell>Jaclyn</TableCell>
                  <TableCell>Brewington</TableCell>
                  <TableCell>25</TableCell>
                  <TableCell>876 829 30929</TableCell>
                  <TableCell> gm@gmail.com</TableCell>
                  <TableCell>
                    {" "}
                    <div className="w-full flex space-x-2 text-2xl font-semibold justify-center">
                      <Link href="">
                        <RiDeleteBin5Line></RiDeleteBin5Line>
                      </Link>
                      <Link href="">
                        <BiPencil></BiPencil>
                      </Link>
                    </div>
                  </TableCell>
                  <TableCell>
                    {" "}
                    <Link href="" className="underline">
                      Chat
                    </Link>
                  </TableCell>
                </TableRow>
                <TableRow key="2">
                  <TableCell>Jaclyn</TableCell>
                  <TableCell>Brewington</TableCell>
                  <TableCell>25</TableCell>
                  <TableCell>876 829 30929</TableCell>
                  <TableCell> gm@gmail.com</TableCell>
                  <TableCell>
                    {" "}
                    <div className="w-full flex space-x-2 text-2xl font-semibold justify-center">
                      <Link href="">
                        <RiDeleteBin5Line></RiDeleteBin5Line>
                      </Link>
                      <Link href="">
                        <BiPencil></BiPencil>
                      </Link>
                    </div>
                  </TableCell>
                  <TableCell>
                    {" "}
                    <Link href="" className="underline">
                      Chat
                    </Link>
                  </TableCell>
                </TableRow>
                <TableRow key="3">
                  <TableCell>Jaclyn</TableCell>
                  <TableCell>Brewington</TableCell>
                  <TableCell>25</TableCell>
                  <TableCell>876 829 30929</TableCell>
                  <TableCell> gm@gmail.com</TableCell>
                  <TableCell>
                    {" "}
                    <div className="w-full flex space-x-2 text-2xl font-semibold justify-center">
                      <Link href="">
                        <RiDeleteBin5Line></RiDeleteBin5Line>
                      </Link>
                      <Link href="">
                        <BiPencil></BiPencil>
                      </Link>
                    </div>
                  </TableCell>
                  <TableCell>
                    {" "}
                    <Link href="" className="underline">
                      Chat
                    </Link>
                  </TableCell>
                </TableRow>
                <TableRow key="4">
                  <TableCell>Jaclyn</TableCell>
                  <TableCell>Brewington</TableCell>
                  <TableCell>25</TableCell>
                  <TableCell>876 829 30929</TableCell>
                  <TableCell> gm@gmail.com</TableCell>
                  <TableCell>
                    {" "}
                    <div className="w-full flex space-x-2 text-2xl font-semibold justify-center">
                      <Link href="">
                        <RiDeleteBin5Line></RiDeleteBin5Line>
                      </Link>
                      <Link href="">
                        <BiPencil></BiPencil>
                      </Link>
                    </div>
                  </TableCell>
                  <TableCell>
                    {" "}
                    <Link href="" className="underline">
                      Chat
                    </Link>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Moderatorlist;
