import React from "react";
import Link from "next/link";

function MainHeader() {
  return (
    <div>
      <div className="w-full flex justify-between  px-6 shadow items-center">
        <Link href="/" className="">
          <img src="/logo.png" className="scale-50 h-24"></img>
        </Link>
        <div className="flex justify-between space-x-10 font-Montserrat font-semibold text-base">
          <Link href="">Home</Link>
          <Link href="">About</Link>
          <Link href="">Testimonials</Link>
          <Link href="">Estimate</Link>
        </div>
        <div className="text-custom-yellow font-Montserrat font-normal text-base">
          <Link href="">Sign In </Link> / <Link href="">Register</Link>
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
