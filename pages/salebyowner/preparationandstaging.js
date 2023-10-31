import React from "react";
import MainHeader from "../../components/MainHeader";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Image from "next/image";
import { useEffect } from "react";
import { BsCheck2 } from "react-icons/bs";
// import Chatbot from "../../components/Chatbot";
function Preparationandstaging() {
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
      <div className="w-full h-[85-vh] grid sm:grid-cols-2 grid-cols-1">
        <div className="flex flex-col items-center px-3">
        <div className="my-5 py-2 bg-custom-light-yellow rounded-lg sm:text-3xl text-2xl justify-center items-center w-full flex font-header">
          Staging to Sell
        </div>
        <div className="sm:h-[75vh] h-[50vh]">
          <Image
            src="/Checklist.jpg"
            fill
            className="!relative"
            alt="..."
          ></Image>
        </div>
        </div>
        <div className="sm:px-12 px-3 h-[85vh] sm:overflow-y-scroll overflow-y-visible no-scrollbar">
          <div className="font-header w-full justify-center py-6 text-center sm:text-xl text-lg tracking-wider">
            Staging is the icing on the cake that gives your home a professional
            touch. With a few props and the following tips, your home will show
            like a model.
          </div>
          <div className="py-6 w-full font-Montserrat">
            <div className="font-semibold font-header">
              The front of your home:
            </div>
            <ol className=" list-outside">
              <li className="w-full flex items-center space-x-4">
              <BsCheck2 className="w-8 h-8 flex border-2 border-custom-yellow text-custom-yellow shrink-0"></BsCheck2>
              <div>
                Clear any debris, remove cobwebs, clean your front door, door
                bell or door knocker, polish the storm door, replace rusted or
                worn hardware.
                </div>
              </li>
              <li className="w-full flex items-center space-x-4">
              <BsCheck2 className="w-8 h-8 flex border-2 border-custom-yellow text-custom-yellow shrink-0"></BsCheck2>
              <div>
                Add a fresh doormat.
                </div>
              </li>
              <li className="w-full flex items-center space-x-4">
              <BsCheck2 className="w-8 h-8 flex border-2 border-custom-yellow text-custom-yellow shrink-0"></BsCheck2>
              <div>
                Add a pot or two of flowers at the front of the house and remove
                any dead plants or empty planters{" "}
                </div>
              </li>
              <li className="w-full flex items-center space-x-4">
              <BsCheck2 className="w-8 h-8 flex border-2 border-custom-yellow text-custom-yellow shrink-0"></BsCheck2>
              <div>
                Pro tip: Remove any other items from the front yard— storage
                items, lawn care products should be removed.toys,
                </div>
              </li>
            </ol>
          </div>
          <div className="py-6 w-full font-Montserrat">
            <div className="font-semibold font-header">Interior rooms:</div>
            <ol
              className="
         list-outside"
            >
              <li className="w-full flex items-center space-x-4">
              <BsCheck2 className="w-8 h-8 flex border-2 border-custom-yellow text-custom-yellow shrink-0"></BsCheck2>
              <div>
                Box up everything you can live without during your marketing
                period. Clear all surfaces of every counter, dresser, and table.
                Place a neat basket of “personal items” (remotes, magazines,
                etc.) in a corner if necessary. Once the house feels too bare,
                you{"'"}
                re ready.
                </div>
              </li>
              <li className="w-full flex items-center space-x-4">
              <BsCheck2 className="w-8 h-8 flex border-2 border-custom-yellow text-custom-yellow shrink-0 mb-2"></BsCheck2>
              <div>
                Remove any collections.
                </div>
              </li>
              <li className="w-full flex items-center space-x-4">
              <BsCheck2 className="w-8 h-8 flex border-2 border-custom-yellow text-custom-yellow shrink-0 mb-2"></BsCheck2>
              <div>
                Replace cleared items with one or two decorative items - be sure
                to add an item of greenery.
                </div>
              </li>
              <li className="w-full flex items-center space-x-4">
              <BsCheck2 className="w-8 h-8 flex border-2 border-custom-yellow text-custom-yellow shrink-0"></BsCheck2>
              <div>
                Pictures should be hung at eye level.
                </div>
              </li>
              <li className="w-full flex items-center space-x-4">
              <BsCheck2 className="w-8 h-8 flex border-2 border-custom-yellow text-custom-yellow shrink-0"></BsCheck2>
              <div>
                Limit personal photos to a small display on an end table, on the
                stairway walls or in a hallway— never display personal photos in
                a bathroom or in the master bedroom.
                </div>
              </li>
              <li className="w-full flex items-center space-x-4">
              <BsCheck2 className="w-8 h-8 flex border-2 border-custom-yellow text-custom-yellow shrink-0"></BsCheck2>
              <div>
                Boxes are OK in garages, unfinished basements, or designated
                storage areas only.
                </div>
              </li>
              <li className="w-full flex items-center space-x-4">
              <BsCheck2 className="w-8 h-8 flex border-2 border-custom-yellow text-custom-yellow shrink-0"></BsCheck2>
              <div>
                Pro tip: Weather permitting, open the windows and air out your
                rooms prior to the first day of showings.
                </div>
              </li>
            </ol>
          </div>
          <div className="py-6 w-full font-Montserrat">
            <div className="font-semibold font-header">Kitchen:</div>
            <ol className=" list-outside">
            <li className="w-full flex items-center space-x-4">
              <BsCheck2 className="w-8 h-8 flex border-2 border-custom-yellow text-custom-yellow shrink-0 mb-2"></BsCheck2>
              <div>
                Clear all counters and tables of all small items and appliances.
                </div>
              </li>
              <li className="w-full flex items-center space-x-4">
              <BsCheck2 className="w-8 h-8 flex border-2 border-custom-yellow text-custom-yellow shrink-0 "></BsCheck2>
              <div>
                Clear refrigerator of magnets and other items, clear tops of the
                fridge and cabinets.
                </div>
              </li>
              <li className="w-full flex items-center space-x-4">
              <BsCheck2 className="w-8 h-8 flex border-2 border-custom-yellow text-custom-yellow shrink-0"></BsCheck2>
              <div>
                Polish your sink and floors, re-caulk around sink if needed. Add
                new hardware to cabinets if needed.
                </div>
              </li>
              <li className="w-full flex items-center space-x-4">
              <BsCheck2 className="w-8 h-8 flex border-2 border-custom-yellow text-custom-yellow shrink-0 mb-2"></BsCheck2>
              <div>
                Remove 1/3 of items in your pantry.
                </div>
              </li>
              <li className="w-full flex items-center space-x-4">
              <BsCheck2 className="w-8 h-8 flex border-2 border-custom-yellow text-custom-yellow shrink-0"></BsCheck2>
              <div>
                Pro tip: Empty all trashcans and scrub clean.
                </div>
              </li>
              <li className="w-full flex items-center space-x-4">
              <BsCheck2 className="w-8 h-8 flex border-2 border-custom-yellow text-custom-yellow shrink-0"></BsCheck2>
              <div>
                Replace binsin inconspicuous places and place one
                fabric-softenersheet in the bottom of each bin for a subtly
                fresh scent.
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preparationandstaging;
