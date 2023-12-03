import React, { useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@nextui-org/react";
import { RiDeleteBin2Fill } from "react-icons/ri";



const columns = [
  {
    key: "feature",
    label: "FEATURE",
  },
  {
    key: "With Added Improvements",
    label: "WITH ADDED IMPROVEMENTS",
  },
  {
    key: "action",
    label: "ACTION",
  },
];

export default function App({table,setTable}) {
  return (
    <Table aria-label="Example table with dynamic content">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key} className="bg-custom-light-yellow">{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={table} className="flex justify-between items-center">
        {(item) => (
          <TableRow key={item.key}>
            <TableCell className="w-[60%]">{item.feature}</TableCell>
            <TableCell className="flex items-center gap-5">
              {item.withAddedImprovements}
              <div className="bg-success-500 w-max px-4 py-2 rounded-md text-white">
                {item.rate}
              </div>
            </TableCell>
            <TableCell>
              <Button
                color="danger"
                className="text-white text-lg cursor-pointer hover:opacity-70 focus:!outline-none"
                onClick={()=>setTable((element)=>element.filter((a)=>a.key !== item.key))}
              >
                <RiDeleteBin2Fill size={20} />
              </Button>
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

{
  /* <Tooltip color="danger" content="Delete">
    <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <RiDeleteBin2Fill />
              </span>
            </Tooltip> */
}
