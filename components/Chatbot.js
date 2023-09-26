import Link from "next/link";
import {FaRobot} from "react-icons/fa"
export default function Chatbot(){
    return (
<Link href="/chat" className="flex sm:text-xl text-md fixed bottom-10 right-10 space-x-4  z-10 items-center bg-custom-yellow text-white px-8 py-4  rounded-full font-Montserrat">
<FaRobot></FaRobot>
<div>Need Help?</div>
</Link>
    );
}