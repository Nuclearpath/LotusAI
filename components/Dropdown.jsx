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
    <Dropdown >
      <DropdownTrigger>
        <Button
          variant="light "
          className="sm:flex justify-between items-center font-header font-semibold text-base hidden"
        >
            For Sale By Owner
          <SlArrowDown size={10} />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
      <DropdownItem className="hover:!bg-custom-yellow">
          <Link href="/salebyowner" className="text-base">
          For Sale By Owner
          </Link>
        </DropdownItem>
        <DropdownItem className="hover:!bg-custom-yellow">
          <Link href="/salebyowner/preparationandstaging" className="text-base">
            Preparation and Staging
          </Link>
        </DropdownItem>
        <DropdownItem className="hover:!bg-custom-yellow">
          <Link
            href="/salebyowner/fsbomarketingchecklist"
            className="text-base"
          >
         Marketing Checklist
          </Link>
        </DropdownItem>
        <DropdownItem className="hover:!bg-custom-yellow">
          <Link href="/salebyowner/pricing" className="text-base">
            Pricing
          </Link>
        </DropdownItem>
        <DropdownItem className="hover:!bg-custom-yellow">
          <Link href="/salebyowner/safeshowingchecklist" className="text-base">
            Safe Showing Checklist
          </Link>
        </DropdownItem>
        <DropdownItem className="hover:!bg-custom-yellow">
          <Link href="/salebyowner/qualifyingthebuyer" className="text-base">
            Qualifying the Buyer
          </Link>
        </DropdownItem>
        <DropdownItem className="hover:!bg-custom-yellow">
          <Link href="/salebyowner/testquiz" className="text-base">
          Quiz: Test Your Real Estate IQ
          </Link>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
