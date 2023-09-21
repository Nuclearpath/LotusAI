import React from "react";
import { useState } from "react";
function RentVsSellCalculator() {
  const [formValue, setFormValue] = useState({
    homevalue: 0,
    pricePaid: 0,
    originalMortage: 0,
    mortgageBalance: 0,
    interestRate: 0,
    mortgagePayment: 0,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValue);
  };
  return (
    <div className="py-6">
      <form className="w-full " onSubmit={(e) => handleSubmit(e)}>
        <div className="grid sm:grid-cols-3 sm:gap-16 gap-5 grid-cols-1">
          <div className="w-full flex flex-col sm:space-y-4 space-y-2">
            <div className="w-full font-Montserrat sm:text-2xl text-xl">
              Home Value
            </div>
            <input
              type="number"
              value={formValue.homevalue}
              onChange={(e) =>
                setFormValue({ ...formValue, homevalue: e.target.value })
              }
              className="py-3 border-2 border-gray-900 px-3 rounded-lg"
            ></input>
          </div>
          <div className="w-full flex flex-col sm:space-y-4 space-y-2">
            <div className="w-full font-Montserrat sm:text-2xl text-xl">
              Price Paid
            </div>
            <input
              type="Number"
              value={formValue.pricePaid}
              onChange={(e) =>
                setFormValue({ ...formValue, pricePaid: e.target.value })
              }
              className="py-3 border-2 border-gray-900 px-3 rounded-lg"
            ></input>
          </div>
          <div className="w-full flex flex-col sm:space-y-4 space-y-2">
            <div className="w-full font-Montserrat sm:text-2xl text-xl">
              Original Mortage
            </div>
            <input
              type="Number"
              value={formValue.originalMortage}
              onChange={(e) =>
                setFormValue({ ...formValue, originalMortage: e.target.value })
              }
              className="py-3 border-2 border-gray-900 px-3 rounded-lg"
            ></input>
          </div>
          <div className="w-full flex flex-col sm:space-y-4 space-y-2">
            <div className="w-full font-Montserrat sm:text-2xl text-xl">
              Mortgage Balance
            </div>
            <input
              type="Number"
              value={formValue.mortgageBalance}
              onChange={(e) =>
                setFormValue({ ...formValue, mortgageBalance: e.target.value })
              }
              className="py-3 border-2 border-gray-900 px-3 rounded-lg"
            ></input>
          </div>
          <div className="w-full flex flex-col sm:space-y-4 space-y-2">
            <div className="w-full font-Montserrat sm:text-2xl text-xl">
              Interest Rate
            </div>
            <input
              type="Number"
              value={formValue.interestRate}
              onChange={(e) =>
                setFormValue({ ...formValue, interestRate: e.target.value })
              }
              className="py-3 border-2 border-gray-900 px-3 rounded-lg"
            ></input>
          </div>
          <div className="w-full flex flex-col sm:space-y-4 space-y-2">
            <div className="w-full font-Montserrat sm:text-2xl text-xl">
              Mortgage Payment
            </div>
            <input
              type="Number"
              value={formValue.mortgagePayment}
              onChange={(e) =>
                setFormValue({ ...formValue, mortgagePayment: e.target.value })
              }
              className="py-3 border-2 border-gray-900 px-3 rounded-lg"
            ></input>
          </div>
        </div>
        <div className="w-full flex justify-end py-6">
          <button
            type="submit"
            className="bg-custom-yellow text-white px-12 py-3"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default RentVsSellCalculator;
