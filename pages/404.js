import Link from "next/link";
import Image from "next/image";

import Loader from "../components/Loader";

export default function Custom404() {
  return (
    <div>
      {/* <Loader></Loader> */}
      <div className="w-full flex flex-col items-center justify-center h-[100vh] space-y-3">
        <div className="w-64 h-64 ">
          <Image src="/lotus.png" fill className="!relative"></Image>
        </div>
        <div className="font-Montserrat text-5xl font-semibold">404</div>
        <div className="text-xl font-Montserrat font-semibold">
          Page not found!
        </div>
        <div className="text-xl font-semibold font-Montserrat">
          Return to{" "}
          <Link
            href="/"
            className="text-custom-yellow underline font-extrabold text-2xl"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
