import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { store } from "../lib/store";

import React, { useEffect } from "react";


import MainHeader from "./../components/MainHeader";
import ChatCard from "../components/ChatCard";
function Chatlist() {
  return (
    <div>
      <MainHeader></MainHeader>
      <div className="w-full flex sm:px-12 px-3 py-6 flex-col">
        <div className="w-full flex justify-between items-center">
          <div className="font-header sm:text-2xl text-xl font-semibold">
            Get in touch with our agent
          </div>
          <button className="sm:px-5 px-1 py-2 font-Montserrat bg-custom-yellow text-white rounded-md">
            New Chat
          </button>
        </div>
        <div className="sm:px-12 px-3 bg-custom-light-yellow py-4 w-full mt-6">
          <div className="text-green-500 font-header text-xl flex items-center">
            <div className="p-3 bg-green-500 rounded-full mr-4"> </div>
            Ongoing Chats
          </div>
          <div className="w-full grid sm:grid-cols-3 grid-cols-1 gap-6 mt-6">
            <ChatCard
              title="20 S Huntington"
              des="Need help with payment portal"
              date="Jul / 10 / 2023"
            ></ChatCard>
          </div>
        </div>
        <div className="sm:px-12 px-3 bg-custom-light-yellow py-4 w-full mt-6">
          <div className="text-black font-header text-xl flex items-center">
            <div className="p-3 bg-red-500 rounded-full mr-4"> </div>
            Chat History
          </div>
          <div className="w-full grid sm:grid-cols-3 grid-cols-1 gap-6 mt-6">
            <ChatCard
              title="20 S Huntington"
              des="Need help with payment portal"
              date="Jul / 10 / 2023"
            ></ChatCard>
            <ChatCard
              title="20 S Huntington"
              des="Need help with payment portal"
              date="Jul / 10 / 2023"
            ></ChatCard>
            <ChatCard
              title="20 S Huntington"
              des="Need help with payment portal"
              date="Jul / 10 / 2023"
            ></ChatCard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chatlist;
