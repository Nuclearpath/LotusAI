import React from "react";
import MainHeader from "../components/MainHeader";
import CompCard from "../components/CompCard";
function Comparableproperties() {
  return (
    <div>
      <MainHeader></MainHeader>
      <div className="grid sm:grid-cols-2 grid-cols-1 w-full h-[75vh] gap-4">
        <div className="px-2">
          {" "}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114303.09426162124!2d-71.10340186436356!3d42.331809042713346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3652d0d3d311b%3A0x787cbf240162e8a0!2sBoston%2C%20MA%2C%20USA!5e0!3m2!1sen!2sin!4v1695357710811!5m2!1sen!2sin"
            // width="600"
            // height="450"
            className="w-full sm:h-full h-[50vh] py-6"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="w-full">
          <div className="w-full flex font-Montserrat sm:text-2xl text-xl sm:p-5 p-3 font-semibold">
            Take a look at some comparable properties
          </div>
          <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-8 gap-4 p-4 h-[75vh] overflow-y-scroll">
            <CompCard
              image={"/house.png"}
              price={"2,662,90"}
              area="360 Huntington Ave, Boston"
            ></CompCard>
            <CompCard
              image={"/house.png"}
              price={"2,662,90"}
              area="360 Huntington Ave, Boston"
            ></CompCard>
            <CompCard
              image={"/house.png"}
              price={"2,662,90"}
              area="360 Huntington Ave, Boston"
            ></CompCard>
            <CompCard
              image={"/house.png"}
              price={"2,662,90"}
              area="360 Huntington Ave, Boston"
            ></CompCard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comparableproperties;
