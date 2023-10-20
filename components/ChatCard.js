import React from "react";
import Link from "next/link";
function ChatCard({ title, des, date }) {
  return (
    <div className="w-full bg-white justify-center flex flex-col items-center p-3 space-y-4 rounded-md">
      <div className="w-full text-xl font-header flex justify-center font-semibold">
        {title}
      </div>
      <div className="text-gray-500 font-Montserrat w-full">{des}</div>
      <div className="w-full justify-between flex">
        <Link
          href="/"
          className="text-custom-yellow underline font-semibold font-Montserrat"
        >
          View Chat
        </Link>
        <div className="text-gray-500 font-Montserrat">{date}</div>
      </div>
    </div>
  );
}

export default ChatCard;
