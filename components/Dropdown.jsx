import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import Link from "next/link";
import { SlArrowDown } from "react-icons/sl";

export default function DropdownBtn() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          variant="light"
          className="sm:flex justify-between items-center font-header font-semibold text-base hidden"
        >
          <Link href="/salebyowner">For Sale By Owner</Link>
          <SlArrowDown />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem>
          <Link href="/salebyowner/preparationandstaging" className="text-base">
            Preparation and Staging
          </Link>
        </DropdownItem>
        <DropdownItem>
          <Link
            href="/salebyowner/fsbomarketingchecklist"
            className="text-base"
          >
            FSBO Marketing Checklist
          </Link>
        </DropdownItem>
        <DropdownItem>
          <Link href="/salebyowner/pricing" className="text-base">
            Pricing
          </Link>
        </DropdownItem>
        <DropdownItem>
          <Link href="/salebyowner/safeshowingchecklist" className="text-base">
            Safe Showing Checklist
          </Link>
        </DropdownItem>
        <DropdownItem>
          <Link href="/salebyowner/qualifyingthebuyer" className="text-base">
            Qualifying the buyer
          </Link>
        </DropdownItem>
        <DropdownItem>
          <Link href="/salebyowner/testquiz" className="text-base">
            Test Your Real Estate IQ Quiz
          </Link>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
