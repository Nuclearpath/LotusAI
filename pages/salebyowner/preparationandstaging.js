import React from "react";
import MainHeader from "../../components/MainHeader";
import { useSession } from "next-auth/react";
import loginRedirect from "../../lib/loginRedirect";
// import Chatbot from "../../components/Chatbot";
function preparationandstaging() {
  const { data: session } = useSession();
  loginRedirect(session);
  return (
    <div>
      {/* <Chatbot></Chatbot> */}
      <MainHeader></MainHeader>
      <div className="sm:px-12 px-3">
        <div className=" mt-6 py-2 bg-custom-light-yellow rounded-lg sm:text-3xl text-2xl justify-center items-center w-full flex font-Montserrat ">
          Staging to Sell
        </div>
        <div className="font-Montserrat w-full justify-center py-6 text-center sm:text-xl text-lg tracking-wider">
          Staging is the icing on the cake that gives your home a professional
          touch. With a few props and the following tips, your home will show
          like a model.
        </div>
        <div className="py-6 w-full font-Montserrat">
          <div className="font-semibold">The front of your home:</div>
          <ol className=" list-outside">
            <li>
              <input
                type="checkbox"
                className="mr-2 w-4 h-4 text-custom-yellow bg-gray-100 border-gray-300 rounded focus:text-custom-yellow dark:text-custom-yellow dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              ></input>
              Clear any debris, remove cobwebs, clean your front door, door bell
              or door knocker, polish the storm door, replace rusted or worn
              hardware.
            </li>
            <li>
              {" "}
              <input
                type="checkbox"
                className="mr-2 w-4 h-4 text-custom-yellow bg-gray-100 border-gray-300 rounded focus:text-custom-yellow dark:text-custom-yellow dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              ></input>{" "}
              Add a fresh doormat.
            </li>
            <li>
              <input
                type="checkbox"
                className="mr-2 w-4 h-4 text-custom-yellow bg-gray-100 border-gray-300 rounded focus:text-custom-yellow dark:text-custom-yellow dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              ></input>
              Add a pot or two of flowers at the front of the house and remove
              any dead plants or empty planters{" "}
            </li>
            <li>
              <input
                type="checkbox"
                className="mr-2 w-4 h-4 text-custom-yellow bg-gray-100 border-gray-300 rounded focus:text-custom-yellow dark:text-custom-yellow dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              ></input>
              Pro tip: Remove any other items from the front yard— storage
              items, lawn care products should be removed.toys,
            </li>
          </ol>
        </div>
        <div className="py-6 w-full font-Montserrat">
          <div className="font-semibold">Interior rooms:</div>
          <ol
            className="
         list-outside"
          >
            <li>
              <input
                type="checkbox"
                className="mr-2 w-4 h-4 text-custom-yellow bg-gray-100 border-gray-300 rounded focus:text-custom-yellow dark:text-custom-yellow dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              ></input>
              Box up everything you can live without during your marketing
              period. Clear all surfaces of every counter, dresser, and table.
              Place a neat basket of “personal items” (remotes, magazines, etc.)
              in a corner if necessary. Once the house feels too bare, you{"'"}
              re ready.
            </li>
            <li>
              {" "}
              <input
                type="checkbox"
                className="mr-2 w-4 h-4 text-custom-yellow bg-gray-100 border-gray-300 rounded focus:text-custom-yellow dark:text-custom-yellow dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              ></input>{" "}
              Remove any collections.
            </li>
            <li>
              {" "}
              <input
                type="checkbox"
                className="mr-2 w-4 h-4 text-custom-yellow bg-gray-100 border-gray-300 rounded focus:text-custom-yellow dark:text-custom-yellow dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              ></input>{" "}
              Replace cleared items with one or two decorative items - be sure
              to add an item of greenery.
            </li>
            <li>
              {" "}
              <input
                type="checkbox"
                className="mr-2 w-4 h-4 text-custom-yellow bg-gray-100 border-gray-300 rounded focus:text-custom-yellow dark:text-custom-yellow dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              ></input>{" "}
              Pictures should be hung at eye level.
            </li>
            <li>
              {" "}
              <input
                type="checkbox"
                className="mr-2 w-4 h-4 text-custom-yellow bg-gray-100 border-gray-300 rounded focus:text-custom-yellow dark:text-custom-yellow dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              ></input>{" "}
              Limit personal photos to a small display on an end table, on the
              stairway walls or in a hallway— never display personal photos in a
              bathroom or in the master bedroom.{" "}
            </li>
            <li>
              {" "}
              <input
                type="checkbox"
                className="mr-2 w-4 h-4 text-custom-yellow bg-gray-100 border-gray-300 rounded focus:text-custom-yellow dark:text-custom-yellow dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              ></input>
              Boxes are OK in garages, unfinished basements, or designated
              storage areas only.
            </li>
            <li>
              {" "}
              <input
                type="checkbox"
                className="mr-2 w-4 h-4 text-custom-yellow bg-gray-100 border-gray-300 rounded focus:text-custom-yellow dark:text-custom-yellow dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              ></input>{" "}
              Pro tip: Weather permitting, open the windows and air out your
              rooms prior to the first day of showings.
            </li>
          </ol>
        </div>
        <div className="py-6 w-full font-Montserrat">
          <div className="font-semibold">Kitchen:</div>
          <ol className=" list-outside">
            <li>
              <input
                type="checkbox"
                className="mr-2 w-4 h-4 text-custom-yellow bg-gray-100 border-gray-300 rounded focus:text-custom-yellow dark:text-custom-yellow dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              ></input>
              Clear all counters and tables of all small items and appliances.
            </li>
            <li>
              <input
                type="checkbox"
                className="mr-2 w-4 h-4 text-custom-yellow bg-gray-100 border-gray-300 rounded focus:text-custom-yellow dark:text-custom-yellow dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              ></input>
              Clear refrigerator of magnets and other items, clear tops of the
              fridge and cabinets.
            </li>
            <li>
              <input
                type="checkbox"
                className="mr-2 w-4 h-4 text-custom-yellow bg-gray-100 border-gray-300 rounded focus:text-custom-yellow dark:text-custom-yellow dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              ></input>
              Polish your sink and floors, re-caulk around sink if needed. Add
              new hardware to cabinets if needed.
            </li>
            <li>
              {" "}
              <input
                type="checkbox"
                className="mr-2 w-4 h-4 text-custom-yellow bg-gray-100 border-gray-300 rounded focus:text-custom-yellow dark:text-custom-yellow dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              ></input>
              Remove 1/3 of items in your pantry.
            </li>
            <li>
              {" "}
              <input
                type="checkbox"
                className="mr-2 w-4 h-4 text-custom-yellow bg-gray-100 border-gray-300 rounded focus:text-custom-yellow dark:text-custom-yellow dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              ></input>
              Pro tip: Empty all trashcans and scrub clean.
            </li>
            <li>
              <input
                type="checkbox"
                className="mr-2 w-4 h-4 text-custom-yellow bg-gray-100 border-gray-300 rounded focus:text-custom-yellow dark:text-custom-yellow dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              ></input>{" "}
              Replace binsin inconspicuous places and place one
              fabric-softenersheet in the bottom of each bin for a subtly fresh
              scent.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default preparationandstaging;
