import React from "react";
import MainHeader from "../../components/MainHeader";
function pricing() {
  return (
    <div>
      <MainHeader></MainHeader>
      <div className="sm:px-12 px-3">
        <div className=" mt-6 py-2 bg-custom-light-yellow rounded-lg sm:text-3xl text-2xl justify-center items-center w-full flex font-Montserrat ">
          Pricing
        </div>

        <div className="py-6 w-full font-Montserrat">
          <div className="font-semibold">BUYERS IN YOUR MARKET</div>
          <ul className="list-disc list-inside">
            <li>
              Buyers are more educated, enlightened, and experienced than ever
              before. Many have made offers on homes and have looked extensively
              for properties.
            </li>
            <li>
              {" "}
              Buyers are saavy about pricing — They know when a home is priced
              improperly.
            </li>
            <li> Buyers expect a top-notch product that shows perfectly.</li>
            <li>
              {" "}
              Homes needed to be made to show perfectly for the debut day on the
              market.
            </li>
          </ul>
        </div>
        <div className="py-6 w-full font-Montserrat">
          <div className="font-semibold">IF YOU OVERPRICE YOUR HOME:</div>
          <ol className="list-disc list-inside">
            <li>
              It makes other homes more attractive and can actually help sell
              the competition
            </li>
            <li> It will be shown to fewer prospective buyers</li>
            <li> Fewer prospects will respond to the advertising</li>
            <li> You may lose buyers who are willing to negotiate</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default pricing;
