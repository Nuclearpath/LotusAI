import React from "react";
import MainHeader from "./../../components/MainHeader";
import {
  BiSolidChevronLeftCircle,
  BiSolidChevronRightCircle,
} from "react-icons/bi";
// import Chatbot from "../../components/Chatbot";
import Link from "next/link";
import Image from "next/image";
import {BsChevronRight} from "react-icons/bs"
import { useSession } from "next-auth/react";
 import { useRouter } from "next/router";
 import { useEffect } from "react";
 function Testquiz() {
   const { data: session, status } = useSession();
   const router = useRouter();

   useEffect(() => {
     if (status === "unauthenticated") {
       router.push("/");
     }
   }, [status]);
   return (
     <div>
       {/* <Chatbot></Chatbot> */}
       <MainHeader page={""}></MainHeader>
       <div className="relative sm:h-84 h-72">
         <Image
           src="/Rect.png"
           alt="rect"
           className="top-0 absolute !w-full !sm:h-auto !h-48 z-10"
           fill
           placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAsICAoIBwsKCQoNDAsNERwSEQ8PESIZGhQcKSQrKigkJyctMkA3LTA9MCcnOEw5PUNFSElIKzZPVU5GVEBHSEX/2wBDAQwNDREPESESEiFFLicuRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUX/wAARCABxAHEDASIAAhEBAxEB/8QAGwAAAgMBAQEAAAAAAAAAAAAAAAUCAwQGAQf/xAAgEAABBQEAAwEBAQAAAAAAAAAAAQIDBDEhERJBMhMi/8QAFwEBAQEBAAAAAAAAAAAAAAAAAQACA//EABYRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAwDAQACEQMRAD8A+uAAEgAApJVIvQYvSuR/QY/pMtIAi+UAmgAASAABJmtYoomXo0tu0UTO6TFQ8gQ9gFl1IAAOoIyO9WkjLZk8IQqiSTp4yTpklm6RZN0cZO4X+ULDDXlw3IvlPINQAAEQC4BGRfDFJMFt+iiZ/Tfbk0TzydFipe4Gb+gDgdwAAZdHjl8NVRVbl0YWH+rRFcl01IKzTTd0jHN3TDNN0hHN01jLo602DaCT2b4OaqzYOq0uBYYYgeNd7IemGgZ7L/CF7l8IL7UmjIC23Jonnk6brkmiWeTqm5As/qBk/qA4n04APHL4apyaYrj+Kc9dk0dXHac7edp0gLJ5elcU3+iiy/qlUT/9G2a6GpLg8qyYczTfg9qvwzUewycL/fhghfw0e/DNhSlfwWWn8U1yv4LLT+KKKrj9EtiToyuP0SWH9UYR/QDN7gaOPsZGT8qSIyfk4RFFxdOevfTobiac/dTTeggs/pSmL9GmwzqlMbOmtGGdRcHtVcEdVMHdXEDQbQrw0e3DJFho88BISu4LLTtGEq8FlnFIktxdElheqObn0SWNU1K1FHkDwB0vtJF/5JHjsU4gqtpohuN06K03RJbbo6HPzx9UpZH03zM6VNZ0tK+s3BxWTBdXZg1rtwtDbEnC/wCFUacLvHC0KJcFtn6M5U4LbKcUdRHbTRLYTo8tponnToaYx+ALfAFpfYgXAAEwWU0TWm6PLKaJrKaAhPM3pU1vTVKnSpqdBtogaMoEMECDKBMFmtkaFvjhXGW/BZZ5U4LbKaM5cFtn6SJbSaKJ06ObX0UzJ0Cy+AJ+ABPrgABosdn6J7P0AAQsl1SpugBltrg1BlAACzW1hZ8ABZUS4LrP0AJE1r6KZtAAKkAAE//Z"
         />
         <div className="z-20 absolute sm:text-xl text-lg text-white sm:px-10 px-2 sm:py-5 py-2">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
           eiusmod tempor incididunt ut labore et dolore magna aliqua?
         </div>
       </div>
       <div className="w-full grid grid-cols-1 px-12 gap-4 sm:grid-cols-2">
         <button className=" border-2 rounded-lg border-black py-3">
           Answer 1
         </button>
         <button className=" border-2 rounded-lg border-black py-3">
           Answer 2
         </button>
         <button className=" border-2 rounded-lg border-black py-3">
           Answer 3
         </button>
         <button className=" border-2 rounded-lg border-black py-3">
           Answer 4
         </button>
       </div>
       <div className="w-full py-5 flex justify-center">
         <Link
           href="/salebyowner/quizSuccess"
           className="bg-custom-yellow text-white px-4 py-2 rounded-md font-Montserrat"
         >
           Submit
         </Link>
       </div>
       <button className="fixed bottom-10 right-10 bg-custom-yellow text-white text-xl rounded-full p-5">
         <BsChevronRight></BsChevronRight>
       </button>
       {/* <div className="sm:px-12 px-3">
        <div className=" mt-6 py-2 bg-custom-light-yellow rounded-lg sm:text-3xl text-2xl justify-center items-center w-full flex font-Montserrat ">
          Real Estate IQ
        </div>
        <div className="w-full flex justify-center">
          <div className="py-12 sm:w-1/2 w-full font-Montserrat px-12 flex flex-col space-y-12 ">
            <button className="w-full border-2 border-gray-950 rounded-lg py-6">
              Answer 1{" "}
            </button>
            <button className="w-full border-2 border-gray-950 rounded-lg py-6">
              {" "}
              Answer 2{" "}
            </button>
            <button className="w-full border-2 border-gray-950 rounded-lg py-6">
              Answer 3{" "}
            </button>
            <div className="w-full justify-center  space-x-4 flex">
              <button className="text-6xl text-custom-yellow">
                <BiSolidChevronLeftCircle></BiSolidChevronLeftCircle>
              </button>
              <button className="text-6xl text-custom-yellow">
                <BiSolidChevronRightCircle></BiSolidChevronRightCircle>
              </button>
            </div>
          </div>
        </div>
      </div> */}
     </div>
   );
 }

 export default Testquiz;
