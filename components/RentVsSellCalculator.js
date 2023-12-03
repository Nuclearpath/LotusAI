import React, { useEffect } from "react";
import { useState } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
function RentVsSellCalculator() {
  const [val, setVal] = useState(0);
  const [formValue, setFormValue] = useState({
    homevalue: 158000,
    pricePaid: 158000,
    originalMortage: 126400,
    mortgageBalance: 98000,
    interestRate: 5,
    mortgagePayment: 679,
  });
  const [result, setResult] = useState(false);
  const [calc, setCalc] = useState(0);
  const [gval, setGval] = useState([]);
  const [sFormValue, setsFormValue] = useState({
    mortagediff: 0,
    taxes: 2000,
    monthlyrent: 1150,
    appretiationrate: 5,
    yearstohold: 5,
  });

  // console.log(val);
  const handleSubmit = (e) => {
    e.preventDefault();
    setResult(true);
    let years = Number(sFormValue.yearstohold);
    let rent = Number(sFormValue.monthlyrent);
    let rate = Number(formValue.interestRate) / 1200;
    let mortageExpense =
      (Number(formValue.originalMortage) * (rate * (rate + 1) ** 360)) /
      ((rate + 1) ** 360 - 1);
    let otherCost = Number(sFormValue.taxes);
    let homeVal = Number(formValue.homevalue);
    let aRate = Number(sFormValue.appretiationrate);
    let ans = [];
    let mortageBalance = Number(formValue.mortgageBalance);
    let ri = 0;
    for (let i = 0; i < years; i++) {
      let v = [];

      v.push(rent.toFixed(0) * 12);
      v.push(mortageExpense.toFixed(2) * 12);
      v.push(Number(sFormValue.taxes.toFixed(2)));
      v.push(
        Number(
          rent.toFixed(0) * 12 -
            mortageExpense.toFixed(2) * 12 -
            sFormValue.taxes.toFixed(2)
        ).toFixed(0)
      );
      ri += Number(
        rent.toFixed(0) * 12 -
          mortageExpense.toFixed(2) * 12 -
          sFormValue.taxes.toFixed(2)
      );
      v.push(Number(homeVal).toFixed(0));
      v.push(
        Number(Number(Number(homeVal) - Number(mortageBalance))).toFixed(2)
      );
      v.push(
        Number(Number(homeVal) - Number(mortageBalance) + Number(ri)).toFixed(2)
      );
      // console.log(ri);
      let rentIncome = Number(
        Number(homeVal) - Number(mortageBalance) + Number(ri)
      ).toFixed(2);
      let sellNow =
        Number(formValue.homevalue) - Number(formValue.mortgageBalance);
      let diff = Number(rentIncome) - Number(sellNow);
      v.push(sellNow);
      v.push(Number(diff).toFixed(2));
      ans.push(v);
      rent = rent * 1.04;
      homeVal = homeVal + homeVal * (aRate / 100);
      mortageBalance = mortageBalance - mortageExpense * 12;
    }
    console.log(ans);
    setGval([...ans]);
    setCalc(Number(ans[years - 1][8]).toFixed(0));
    // setVal(Math.floor((val+1)%2));
    // console.log(formValue);
  };
  return (
    <>
      {" "}
      {result ? (
        <div className="w-full flex flex-col items-center justify-center px-16">
            <button
              onClick={() => {
                setResult(false);
                setVal(0);
              }}
              className="my-8 text-xl font-normal px-2 py-3  text-white mx-2 rounded-md bg-custom-yellow"
            >
              Calculate again
            </button>
          <div className="sm:text-2xl text-lg px-2 font-normal  sm:font-semibold">
          
            if you {calc > 0 ? "RENT OUT" : "SELL OUT"} your property you{"'"}ll
            have <span className="text-custom-yellow">$ {calc > 0 ? calc : -1 * calc}</span> more wealth in{" "}
            {sFormValue.yearstohold} years verses{" "}
            {calc > 0 ? "selling" : "renting"} your property today.
          </div>
      
          <Line
            datasetIdKey="id"
            data={{
              labels: gval.map((k, i) => i + 1),
              datasets: [
                {
                  id: 1,
                  label: "sell",
                  data: gval.map((k, i) => k[7]),
                  borderColor: "#FFA921",
                  tension: 0.4,
                },
                {
                  id: 2,
                  label: "rent",
                  data: gval.map((k, i) => k[6]),
                  borderColor: "red",
                  tension: 0.4,
                },
              ],
            }}
            options={{
              tooltip: {
                enabled: false,
              },
              scales: {},
              legend: {
                display: false,
              },

              plugins: {},
            }}
          />
          </div>
      ) : (
        <div className="py-6">
          {val === 0 && (
            <form className="w-full " onSubmit={(e) => setVal(1)}>
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
                      setFormValue({
                        ...formValue,
                        interestRate: e.target.value,
                      })
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
                      setsFormValue({
                        ...sFormValue,
                        mortagediff: e.target.value,
                      })
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
                      setsFormValue({
                        ...sFormValue,
                        monthlyrent: e.target.value,
                      })
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
                      setsFormValue({
                        ...sFormValue,
                        yearstohold: e.target.value,
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
                  submit
                </button>
              </div>
            </form>
          )}
        </div>
      )}
    </>
  );
}

export default RentVsSellCalculator;
