import React from "react";
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

const rows = [
  {
    key: "1",
    feature: "Hot Tub",
    withAddedImprovements: "$1,834,230",
    rate: "+78K",
  },
  {
    key: "2",
    feature: "Storage Unit",
    withAddedImprovements: "$1,834,230",
    rate: "+64.5k",
  },
];

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
    key: "rate",
    label: "RATE",
  },
  {
    key: "action",
    label: "ACTION",
  },
];

export default function App() {
  return (
    <Table aria-label="Example table with dynamic content">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key}>
            <TableCell>{item.feature}</TableCell>
            <TableCell>{item.withAddedImprovements}</TableCell>
            <TableCell>
                <div className="bg-success-500 w-max px-5 py-2 rounded-md text-white">
                {item.rate}
                </div>
                </TableCell>
            <TableCell>
                <Button color="danger" className="text-white text-lg cursor-pointer hover:opacity-70 focus:!outline-none">
                  <RiDeleteBin2Fill size={20}/>
                </Button>
              {/* {item.action} */}
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
