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

function Userlist() {
  return (
    <div>
      <AdminHeader></AdminHeader>
      <div className="w-full sm:px-12 px-3 sm:py-9 py-3">
        <div className="py-5 flex flex-col px-5 shadow-xl rounded-lg">
          <div className="font-Montserrat font-semibold text-custom-yellow text-xl ">
            Users
          </div>
          <div className="font-Montserrat text-gray-500 ">
            View all new / existing users here
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

export default Userlist;
