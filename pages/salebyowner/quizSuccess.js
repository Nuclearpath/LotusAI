import React from 'react'
import MainHeader from '../../components/MainHeader'
import { CircularProgress } from "@nextui-org/react";
import { useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
 import { useRouter } from "next/router";
 import { useEffect } from "react";

 function QuizSuccess() {
   const [value, setValue] = useState(0);
   const { data: session, status } = useSession();
   const router = useRouter();

   useEffect(() => {
     if (status === "unauthenticated") {
       router.push("/");
     }
   }, [status]);

  useEffect(()=>{
    setValue(Number(router?.query.result) * 10)

  },[router?.query.result])
   return (
     <div>
       <MainHeader page={""}></MainHeader>
       <div className="w-full  sm:px-12  px-3 py-6  h-screen ">
         <div className="bg-custom-light-yellow h-full flex flex-col">
           <div className="w-full flex justify-center py-5 text-4xl font-semibold font-Montserrat">
             Results
           </div>
           <div className="w-full flex justify-center py-5 text-4xl font-semibold font-Montserrat">
             <CircularProgress
               aria-label="Loading..."
               size="lg"
               classNames={{
                 svg: "w-36 h-36 drop-shadow-md",
                 indicator: "stroke-custom-yellow",
                 track: "custom-yellow",
                 value: "text-3xl font-semibold text-custom-yellow",
               }}
               // className='w-96'
               value={value}
               color="warning"
               showValueLabel={true}
             />
           </div>
          {router?.query.result>=8 ? <div className="w-full flex justify-center py-5 text-4xl  font-Montserrat items-center">
             <div>Great-Job!</div>
             <svg
               width="36"
               height="36"
               viewBox="0 0 48 46"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
             >
               <path
                 d="M25.5814 1.82422L30.8392 13.8164C31.037 14.2677 31.3523 14.6577 31.7522 14.9456C32.1521 15.2335 32.6219 15.4088 33.1127 15.4531L45.9212 16.6016C47.3705 16.8125 47.9486 18.5898 46.8978 19.6133L37.2494 27.7187C36.4681 28.375 36.1126 29.4062 36.3275 30.4023L39.1322 43.5312C39.3783 44.9727 37.8666 46.0742 36.5697 45.3906L25.39 38.8438C24.9683 38.5963 24.4883 38.4658 23.9994 38.4658C23.5105 38.4658 23.0304 38.5963 22.6087 38.8438L11.4291 45.3867C10.1361 46.0664 8.62046 44.9688 8.86656 43.5273L11.6712 30.3984C11.8822 29.4023 11.5306 28.3711 10.7494 27.7148L1.09703 19.6172C0.0501501 18.5977 0.628275 16.8164 2.07359 16.6055L14.8822 15.457C15.3729 15.4127 15.8428 15.2374 16.2427 14.9495C16.6426 14.6616 16.9578 14.2716 17.1556 13.8203L22.4134 1.82813C23.0658 0.515626 24.933 0.515626 25.5814 1.82422Z"
                 fill="#FDD835"
               />
             </svg>
             <p>

            Congratulations! You may be ready to sell your own

home.
             </p>
           </div>:
           <div>
You got {Number(router?.query.result) * 10}%

           </div>
           }
           <div className="w-full flex justify-center py-5 text-xl  font-Montserrat">
             You’re almost there, talk to our{" "}
             <Link
               href=""
               className="text-custom-yellow px-2 sm:border-b-2 sm:border-b-custom-yellow sm:border-offset-0 "
             >
               agents
             </Link>{" "}
             to clarify any questions you might have
           </div>
         </div>
       </div>
     </div>
   );
 }

export default QuizSuccess;