import React from "react";
import MainHeader from "../../components/MainHeader";
// import Chatbot from "../../components/Chatbot";
function safeshowingchecklist() {
  return (
    <div>
       {/* <Chatbot></Chatbot> */}
      <MainHeader></MainHeader>
      <div className="sm:px-12 px-3">
        <div className=" mt-6 py-2 bg-custom-light-yellow rounded-lg sm:text-3xl text-2xl justify-center items-center w-full flex font-Montserrat ">
          Safe Showing Tips
        </div>

        <div className="py-6 w-full font-Montserrat">
          <div className="font-Montserrat w-full justify-center   sm:text-xl text-lg ">
            To securely show your house for sale, it{"'"}s essential to protect
            your property, personal belongings, and ensure the safety of
            potential buyers. Here are some tips for safe secure showings:
          </div>
          <ol className="list-decimal list-inside">
            <li>
              1.Pre-screen potential buyers to ensure they are genuinely
              interested and financially qualified to purchase your home.
            </li>
            <li>
              Ask potential buyers to provide identification before scheduling a
              showing to create a record of who enters your property.{" "}
            </li>
            <li>
              Limit access: Allow showings only during specific hours and avoid
              late-night or unscheduled visits.{" "}
            </li>
            <li>
              If possible, accompany potential buyers during the showing,
              especially buyers without agents.
            </li>
            <li>
              {" "}
              Keep your valuable items, such as jewelry, cash, and important
              documents, locked away or taken with you during showings.{" "}
            </li>
            <li>
              Take any prescription medications out of medicine cabinets or
              drawers to prevent theft.{" "}
            </li>
            <li>
              {" "}
              Protect sensitive personal information such as bills, mail, or any
              documents containing personal details.{" "}
            </li>
            <li>
              Consider installing a security system with cameras to monitor the
              property during showings and deter any potential theft.{" "}
            </li>
            <li>
              Ensure all doors and windows are securely locked after the showing
              to prevent unauthorized access.
            </li>
            <li>
              If you have smart home devices like cameras or voice assistants,
              ensure they are properly configured to protect your privacy during
              showings.{" "}
            </li>
            <li>
              Don{"'"}t indavertently hamper your negotiating position by
              disclosing the reason you are selling or the terms or price you
              will accept.{" "}
            </li>
            <li>
              {" "}
              After each showing, follow up with the buyer or buyer{"'"}s agent
              to get feedback, answer questions, and encourage offers.
            </li>
            <li>
              {" "}
              Make sure you have adequate insurance coverage for your property,
              including liability coverage for potential accidents during
              showings. Remember, your safety and the security of your property
              are of utmost importance during the home selling process.
              Implementing these security tips will help protect your interests
              while showcasing your home to potential buyers.
            </li>
            <li> Add a fresh doormat.</li>
            <li>
              Add a pot or two of flowers at the front of the house and remove
              any dead plants or empty planters{" "}
            </li>
            <li>
              Pro tip: Remove any other items from the front yard— storage
              items, lawn care products should be removed.toys,
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default safeshowingchecklist;
