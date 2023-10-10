import React from "react";
import { AiFillLock } from "react-icons/ai";
import { signIn } from "next-auth/react";
import MainHeader from "./MainHeader";
function NotLoggedIn() {
  return (
    <>
      {/* <MainHeader></MainHeader> */}
      <div className="w-full h-screen flex justify-center items-center">
        <div>
          <AiFillLock className="text-[190px] text-custom-yellow"></AiFillLock>
          <div className="w-full flex justify-center font-semibold text-xl font-Montserrat">
            <button
              onClick={(e) => {
                e.preventDefault();
                signIn("google");
              }}
              className="mr-2 text-custom-yellow"
            >
              Login
            </button>{" "}
            to Continue
          </div>
        </div>
      </div>
    </>
  );
}

export default NotLoggedIn;
