import Head from "next/head";
import Image from "next/image";

import LandingPage from "../components/LandingPage";
// import Chatbot from "../components/Chatbot";

export default function Home() {
  return (
   
    <div className="w-full min-h-screen overflow-y-scroll no-scrollbar flex justify-center sm:px-0 px-0">
     {/* <Chatbot></Chatbot> */}
      <LandingPage></LandingPage>
    </div>
   
  );
}
