import React, { useCallback, useState } from "react";
import MainHeader from "./../../components/MainHeader";
import {
  BiSolidChevronLeftCircle,
  BiSolidChevronRightCircle,
} from "react-icons/bi";
// import Chatbot from "../../components/Chatbot";
import Link from "next/link";
import Image from "next/image";
import {BsChevronLeft, BsChevronRight} from "react-icons/bs"
import { useSession } from "next-auth/react";
 import { useRouter } from "next/router";
 import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
 function Testquiz() {
   const { data: session, status } = useSession();
   const router = useRouter();

   useEffect(() => {
     if (status === "unauthenticated") {
       router.push("/");
     }
   }, [status]);
   const [index,setIndex]=useState(0);
 const [score,setScore]=useState(0);
   const quiz=[
    {
      ques:`Which items in your home are you contractually obligated to have in working order
      per the Property Condition Paragraph of the MAR contract?`,
      a:`All major appliances`,
      b: `All plumbing, heating`,
      c:`All plumbing, heating, air conditioning, electrical, and
      mechanical systems and appliances`,
      d:`none`,
      answer:`All major appliances`
    },
    {
      ques:`If your buyer finds termite damage in your home, what portion of the repair costs,
      if any, are you obligated to pay?`,
      a:`The first $200.00 of the repair costs`,
      b: `The cost of extermination`,
      c:`Up to 2% of
      the sale price of your house`,
      d:`None—the buyer must pay for the repairs`,
      answer:`The first $200.00 of the repair costs`
    },
    {
      ques:`If your buyer decides to walk away from your contract, what must you legally do to
      place your home back on the market?`,
      a:`Nothing—the house automatically resumes an “active status”`,
      b: `Place new signs up
      and let prospective buyers know the house is available again`,
      c:`Sign a release`,
      d:`none`,
      answer:`Sign a release`
    },
    {
      ques:`How many days does your buyer have to review your HOA or condo documents
      after receipt?`,
      a:`3 days for HOA docs, 5 days for condos`,
      b: `5 days for HOA docs, 10 days for condos`,
      c:`5 days for HOA docs, 7 days for condos`,
      d:`7 days for both`,
      answer:`7 days for both`
    },
    {
      ques:`What types of defects to your home, if any, are you as a seller legally obligated to
      disclose to your buyer?`,
      a:`Defects to the heating, plumbing, air conditioning and mechanical systems`,
      b: `Hidden
      and obvious material defects`,
      c:`Material defects you know or should have known about`,
      d:`Defects which have not yet been repaired or resolved`,
      answer:`Defects which have not yet been repaired or resolved`
    },
    {
      ques:`Which contract contingencies can your buyer use to walk away from your contract
      without explanation?`,
      a:`The home inspection contingency`,
      b: `The financing contingency`,
      c:`The review of
      the HOA or condo documents contingency`,
      d:`None of the above`,
      answer:`None of the above`
    },
    {
      ques:`What does the phrase “date of ratification” refer to?`,
      a:`The date of the contract offer`,
      b: `The date of acceptance of all of the terms of the
      contract`,
      c:`The date the signed contract is delivered to all parties`,
      d:`The date all of
      the contract contingencies are fulfilled`,
      answer:`The date all of
      the contract contingencies are fulfilled`
    },
    {
      ques:`On what criteria are you as a seller legally able to discriminate amongst your
      buyers?`,
      a:`None—it is illegal to discriminate on any basis`,
      b: `On the basis of age or marital
      status`,
      c:`On the basis of familial status`,
      d:`On the basis of financial ability`,
      answer:`On the basis of financial ability`
    },
    {
      ques:`If you have had a leak in your basement that is now fully repaired - must you
      disclose this to your buyer?`,
      a:`No, if the leak is repaired it need not be disclosed`,
      b: `Yes, even if the leak is repaired
      its previous existence must be disclosed`,
      c:`No, not if the leak is not still occurring`,
      d:`None`,
      answer:`None`
    },
    {
      ques:`After receipt of your buyer’s home inspection notice, how many days do you
      have to respond to the repair request to avoid voiding the contract?`,
      a:`One day`,
      b: `Three days`,
      c:`None of the above—non-response does
      not void the contract`,
      d:`The seller must respond the day of notice delivery`,
      answer:`The seller must respond the day of notice delivery`
    },
    {
      ques:`You have not received your buyer’s loan approval letter as of the end of the
      financing contingency period. What happens to the contract?`,
      a:`The contract automatically becomes null and void`,
      b: `The seller must give notice
      to the buyer of intent to void the contract`,
      c:`The contingency automatically
      extends until the approval is delivered`,
      d:`none`,
      answer:`none`
    }
   ]

  //  const pathname = usePathname()
   const searchParams = useSearchParams()
  
   // Get a new searchParams string by merging the current
   // searchParams with a provided key/value pair
   const createQueryString = useCallback(
     (name, value) => {
       const params = new URLSearchParams(searchParams)
       params.set(name, value)
  
       return params.toString()
     },
     [searchParams]
   )
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
          {index +1})&nbsp;{quiz[index].ques}
         </div>
       </div>
       <div className="w-full grid grid-cols-1 px-12 gap-4 sm:grid-cols-2">
         <button className=" border-2 rounded-lg border-black py-3"
         onClick={()=>{
          quiz[index].a === quiz[index].answer ? setScore(o=>o+1) : null
          setIndex(o=> o<quiz.length-1 ?o+1:quiz.length-1)
         }}
         >
         {quiz[index].a}

         </button>
         <button className=" border-2 rounded-lg border-black py-3"
              onClick={()=>{
                quiz[index].b === quiz[index].answer ? setScore(o=>o+1) : null
                setIndex(o=> o<quiz.length-1 ?o+1:quiz.length-1)
               }}
         >
         {quiz[index].b}

         </button>
         <button className=" border-2 rounded-lg border-black py-3"
              onClick={()=>{
                quiz[index].c === quiz[index].answer ? setScore(o=>o+1) : null
                setIndex(o=> o<quiz.length-1 ?o+1:quiz.length-1)
               }}
         >
         {quiz[index].c}

         </button>
         <button className=" border-2 rounded-lg border-black py-3"
              onClick={()=>{
                quiz[index].d === quiz[index].answer ? setScore(o=>o+1) : null
                setIndex(o=> o<quiz.length-1 ?o+1:quiz.length-1)
               }}
         >
         {quiz[index].d}

         </button>
       </div>
    {index === quiz.length-1 &&   <div className="w-full py-5 flex justify-center">
         <Link
          //  href="/salebyowner/quizSuccess"
           href={
            // <pathname>?sort=desc
            `/salebyowner/quizSuccess` + '?' + createQueryString('result', `${score}`)
          }
           className="bg-custom-yellow text-white px-4 py-2 rounded-md font-Montserrat"
         >
           How did you do? 
         </Link>
       </div>}
       <button className="fixed bottom-10 left-24 bg-custom-yellow text-white text-xl rounded-full p-5"
       onClick={()=>setIndex(o=> o>0?o-1:0)}
       >
         <BsChevronLeft></BsChevronLeft>
       </button>
       <button className="fixed bottom-10 right-24 bg-custom-yellow text-white text-xl rounded-full p-5"
       onClick={()=>setIndex(o=> o<quiz.length-1 ?o+1:quiz.length-1)}
       >
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
