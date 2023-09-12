import React from "react";
import Link from "next/link";
function Header() {
  return (
    <div className="w-full flex justify-between py-6">
      <div className="flex justify-between space-x-7 font-Montserrat font-semibold text-base">
        <Link href="">Home</Link>
        <Link href="">About</Link>
        <Link href="">Testimonials</Link>
        <Link href="">Estimate</Link>
      </div>
      <div className="text-custom-yellow font-Montserrat font-normal text-base">
        <Link href="">Sign In </Link> / <Link href="">Register</Link>
      </div>
    </div>
  );
}

export default Header;
