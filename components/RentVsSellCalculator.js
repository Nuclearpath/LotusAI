import React, { useEffect } from "react";
import { useState } from "react";
function RentVsSellCalculator() {
  const [val,setVal]=useState(0);
  const [formValue, setFormValue] = useState({
    homevalue: 0,
    pricePaid: 0,
    originalMortage: 0,
    mortgageBalance: 0,
    interestRate: 0,
    mortgagePayment: 0,
  });
  const [sFormValue,setsFormValue]=useState({
   mortagediff:0,
   taxes:0,
   monthlyrent:0,
   appretiationrate:0,
   yearstohold:0
  });
  
  console.log(val);
  const handleSubmit = (e) => {
    e.preventDefault();
    setVal(Math.floor((val+1)%2));
    // console.log(formValue);
  };
  return (
    <div className="py-6">
      {val === 0 && (
        <form className="w-full " onSubmit={(e) => handleSubmit(e)}>
          <div className="grid sm:grid-cols-3 sm:gap-16 gap-5 grid-cols-1">
            <div className="w-full flex flex-col sm:space-y-4 space-y-2">
              <div className="w-full font-header sm:text-2xl text-xl">
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
              <div className="w-full font-header sm:text-2xl text-xl">
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
              <div className="w-full font-header sm:text-2xl text-xl">
                Original Mortage
              </div>
              <input
                type="Number"
                value={formValue.originalMortage}
                onChange={(e) =>
                  setFormValue({
                    ...formValue,
                    originalMortage: e.target.value,
                  })
                }
                className="py-3 border-2 border-gray-900 px-3 rounded-lg"
              ></input>
            </div>
            <div className="w-full flex flex-col sm:space-y-4 space-y-2">
              <div className="w-full font-header sm:text-2xl text-xl">
                Mortgage Balance
              </div>
              <input
                type="Number"
                value={formValue.mortgageBalance}
                onChange={(e) =>
                  setFormValue({
                    ...formValue,
                    mortgageBalance: e.target.value,
                  })
                }
                className="py-3 border-2 border-gray-900 px-3 rounded-lg"
              ></input>
            </div>
            <div className="w-full flex flex-col sm:space-y-4 space-y-2">
              <div className="w-full font-header sm:text-2xl text-xl">
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
              <div className="w-full font-header sm:text-2xl text-xl">
                Mortgage Payment
              </div>
              <input
                type="Number"
                value={formValue.mortgagePayment}
                onChange={(e) =>
                  setFormValue({
                    ...formValue,
                    mortgagePayment: e.target.value,
                  })
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
      )}
      {val === 1 && (
        <form className="w-full " onSubmit={(e) => handleSubmit(e)}>
          <div className="grid sm:grid-cols-3 sm:gap-16 gap-5 grid-cols-1">
            <div className="w-full flex flex-col sm:space-y-4 space-y-2">
              <div className="w-full font-Montserrat sm:text-2xl text-xl">
                Mortage Difference
              </div>
              <input
                type="number"
                value={sFormValue.mortagediff}
                onChange={(e) =>
                  setsFormValue({ ...sFormValue, mortagediff: e.target.value })
                }
                className="py-3 border-2 border-gray-900 px-3 rounded-lg"
              ></input>
            </div>
            <div className="w-full flex flex-col sm:space-y-4 space-y-2">
              <div className="w-full font-Montserrat sm:text-2xl text-xl">
                Taxes, Ins, Comn Charges
              </div>
              <input
                type="Number"
                value={sFormValue.taxes}
                onChange={(e) =>
                  setsFormValue({ ...sFormValue, taxes: e.target.value })
                }
                className="py-3 border-2 border-gray-900 px-3 rounded-lg"
              ></input>
            </div>
            <div className="w-full flex flex-col sm:space-y-4 space-y-2">
              <div className="w-full font-Montserrat sm:text-2xl text-xl">
                Monthly Rent
              </div>
              <input
                type="Number"
                value={sFormValue.monthlyrent}
                onChange={(e) =>
                  setsFormValue({ ...sFormValue, monthlyrent: e.target.value })
                }
                className="py-3 border-2 border-gray-900 px-3 rounded-lg"
              ></input>
            </div>
            <div className="w-full flex flex-col sm:space-y-4 space-y-2">
              <div className="w-full font-Montserrat sm:text-2xl text-xl">
                Appreciation Rate
              </div>
              <input
                type="Number"
                value={sFormValue.appretiationrate}
                onChange={(e) =>
                  setsFormValue({
                    ...sFormValue,
                    appretiationrate: e.target.value,
                  })
                }
                className="py-3 border-2 border-gray-900 px-3 rounded-lg"
              ></input>
            </div>
            <div className="w-full flex flex-col sm:space-y-4 space-y-2">
              <div className="w-full font-Montserrat sm:text-2xl text-xl">
                Years to Hold
              </div>
              <input
                type="Number"
                value={sFormValue.yearstohold}
                onChange={(e) =>
                  setsFormValue({ ...sFormValue, yearstohold: e.target.value })
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
      )}
    </div>
  );
}

export default RentVsSellCalculator;
