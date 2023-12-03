import React from "react";
import MainHeader from "../../components/MainHeader";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Image from "next/image";
import { Checkbox } from "@nextui-org/react";
// import Chatbot from "../../components/Chatbot";
function Safeshowingchecklist() {
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
      <div
        //  className="sm:px-12 px-3"
        className="w-full h-[85-vh] grid sm:grid-cols-2 grid-cols-1"
      >
        <div className="flex flex-col items-center px-3">
          <div className="my-5 py-2 bg-custom-light-yellow rounded-lg sm:text-3xl text-2xl justify-center items-center w-full flex font-header">
            Safe Showing Checklist
          </div>
          <div className="sm:h-[65vh] h-[50vh] mt-4">
            <Image
              src="/safeshowingpage.jpg"
              fill
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAsICAoIBwsKCQoNDAsNERwSEQ8PESIZGhQcKSQrKigkJyctMkA3LTA9MCcnOEw5PUNFSElIKzZPVU5GVEBHSEX/2wBDAQwNDREPESESEiFFLicuRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUX/wAARCABxAHEDASIAAhEBAxEB/8QAGwAAAgMBAQEAAAAAAAAAAAAAAAUCAwQGAQf/xAAgEAABBQEAAwEBAQAAAAAAAAAAAQIDBDEhERJBMhMi/8QAFwEBAQEBAAAAAAAAAAAAAAAAAQACA//EABYRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAwDAQACEQMRAD8A+uAAEgAApJVIvQYvSuR/QY/pMtIAi+UAmgAASAABJmtYoomXo0tu0UTO6TFQ8gQ9gFl1IAAOoIyO9WkjLZk8IQqiSTp4yTpklm6RZN0cZO4X+ULDDXlw3IvlPINQAAEQC4BGRfDFJMFt+iiZ/Tfbk0TzydFipe4Gb+gDgdwAAZdHjl8NVRVbl0YWH+rRFcl01IKzTTd0jHN3TDNN0hHN01jLo602DaCT2b4OaqzYOq0uBYYYgeNd7IemGgZ7L/CF7l8IL7UmjIC23Jonnk6brkmiWeTqm5As/qBk/qA4n04APHL4apyaYrj+Kc9dk0dXHac7edp0gLJ5elcU3+iiy/qlUT/9G2a6GpLg8qyYczTfg9qvwzUewycL/fhghfw0e/DNhSlfwWWn8U1yv4LLT+KKKrj9EtiToyuP0SWH9UYR/QDN7gaOPsZGT8qSIyfk4RFFxdOevfTobiac/dTTeggs/pSmL9GmwzqlMbOmtGGdRcHtVcEdVMHdXEDQbQrw0e3DJFho88BISu4LLTtGEq8FlnFIktxdElheqObn0SWNU1K1FHkDwB0vtJF/5JHjsU4gqtpohuN06K03RJbbo6HPzx9UpZH03zM6VNZ0tK+s3BxWTBdXZg1rtwtDbEnC/wCFUacLvHC0KJcFtn6M5U4LbKcUdRHbTRLYTo8tponnToaYx+ALfAFpfYgXAAEwWU0TWm6PLKaJrKaAhPM3pU1vTVKnSpqdBtogaMoEMECDKBMFmtkaFvjhXGW/BZZ5U4LbKaM5cFtn6SJbSaKJ06ObX0UzJ0Cy+AJ+ABPrgABosdn6J7P0AAQsl1SpugBltrg1BlAACzW1hZ8ABZUS4LrP0AJE1r6KZtAAKkAAE//Z"
              className="!relative"
              alt="..."
            ></Image>
          </div>
        </div>
        <div className="sm:px-12 px-3 h-[85vh] sm:overflow-y-scroll overflow-y-visible no-scrollbar">
          <div className="py-6 w-full font-Montserrat">
            <div className="font-header w-full justify-center sm:text-xl text-lg py-6">
              To securely show your house for sale, it{"'"}s essential to
              protect your property, personal belongings, and ensure the safety
              of potential buyers. Here are some tips for safe secure showings:
            </div>
            <ol className="list-none list-inside space-y-4 leading-5 text-sm">
               <li className="w-full flex items-start  space-x-4">
                 <Checkbox  color="warning" size="lg" radius="none" ></Checkbox>
                Pre-screen potential buyers to ensure they are genuinely
                interested and financially qualified to purchase your home.
              </li>
               <li className="w-full flex items-start  space-x-4">
                 <Checkbox  color="warning" size="lg" radius="none" ></Checkbox>
                Ask potential buyers to provide identification before scheduling
                a showing to create a record of who enters your property.{" "}
              </li>
               <li className="w-full flex items-start  space-x-4">
                 <Checkbox  color="warning" size="lg" radius="none" ></Checkbox>
                Limit access: Allow showings only during specific hours and
                avoid late-night or unscheduled visits.{" "}
              </li>
               <li className="w-full flex items-start  space-x-4">
                 <Checkbox  color="warning" size="lg" radius="none" ></Checkbox>
                If possible, accompany potential buyers during the showing,
                especially buyers without agents.
              </li>
               <li className="w-full flex items-start  space-x-4">
                 <Checkbox  color="warning" size="lg" radius="none" ></Checkbox>
                {" "}
                Keep your valuable items, such as jewelry, cash, and important
                documents, locked away or taken with you during showings.{" "}
              </li>
               <li className="w-full flex items-start  space-x-4">
                 <Checkbox  color="warning" size="lg" radius="none" ></Checkbox>
                Take any prescription medications out of medicine cabinets or
                drawers to prevent theft.{" "}
              </li>
               <li className="w-full flex items-start  space-x-4">
                 <Checkbox  color="warning" size="lg" radius="none" ></Checkbox>
                {" "}
                Protect sensitive personal information such as bills, mail, or
                any documents containing personal details.{" "}
              </li>
               <li className="w-full flex items-start  space-x-4">
                 <Checkbox  color="warning" size="lg" radius="none" ></Checkbox>
                Consider installing a security system with cameras to monitor
                the property during showings and deter any potential theft.{" "}
              </li>
               <li className="w-full flex items-start  space-x-4">
                 <Checkbox  color="warning" size="lg" radius="none" ></Checkbox>
                Ensure all doors and windows are securely locked after the
                showing to prevent unauthorized access.
              </li>
               <li className="w-full flex items-start  space-x-4">
                 <Checkbox  color="warning" size="lg" radius="none" ></Checkbox>
                If you have smart home devices like cameras or voice assistants,
                ensure they are properly configured to protect your privacy
                during showings.{" "}
              </li>
               <li className="w-full flex items-start  space-x-4">
                 <Checkbox  color="warning" size="lg" radius="none" ></Checkbox>
                Don{"'"}t indavertently hamper your negotiating position by
                disclosing the reason you are selling or the terms or price you
                will accept.{" "}
              </li>
               <li className="w-full flex items-start  space-x-4">
                 <Checkbox  color="warning" size="lg" radius="none" ></Checkbox>
                {" "}
                After each showing, follow up with the buyer or buyer{"'"}s
                agent to get feedback, answer questions, and encourage offers.
              </li>
               <li className="w-full flex items-start  space-x-4">
                 <Checkbox  color="warning" size="lg" radius="none" ></Checkbox>
                {" "}
                Make sure you have adequate insurance coverage for your
                property, including liability coverage for potential accidents
                during showings.
              </li>
              {/* <li> Add a fresh doormat.</li>
              <li className="w-full flex items-start  space-x-4">
                 <Checkbox  color="warning" size="lg" radius="none" ></Checkbox>
               Add a pot or two of flowers at the front of the house and remove
               any dead plants or empty planters{" "}
             </li> */}
               {/* <li className="w-full flex items-start  space-x-4">
                 <Checkbox  color="warning" size="lg" radius="none" ></Checkbox>
                Pro tip: Remove any other items from the front yard— storage
                items, lawn care products should be removed.toys,
              </li> */}
            </ol>
          </div>
          <div>
          Remember, your safety and the security of your
                property are of utmost importance during the home selling
                process. Implementing these security tips will help protect your
                interests while showcasing your home to potential buyers.

          </div>
        </div>
      </div>
    </div>
  );
}

export default Safeshowingchecklist;
