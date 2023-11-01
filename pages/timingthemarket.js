import React from "react";
import MainHeader from "../components/MainHeader";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import randomColor from "randomcolor";
import { ImQuotesLeft } from "react-icons/im";
import { store } from "../lib/store";
import { BsChevronDown } from "react-icons/bs";
import { VscGraph } from "react-icons/vsc";
import { BsGraphUp } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Loader from "./../components/Loader";
import { useState } from "react";
function Timingthemarket() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [label, setLabel] = useState(12);
  const [homeType, setHomeType] = useState({
    all:true,
    detached: false,
    attached: false,
    th: false,
    condo: false,
  });
  const [lvl,setLvl]=useState({
    home:true,
    list:false,
    sold:false,
    market:false,
    living:false,
    bedroom:false,
    bath:false,
    bank:false
  });
  const [list,setList]=useState({
    all:true,
    u50k: false,
    m50kto100k: false,
    m100kto150k: false,
    m150kto200k: false,
    m200kto300k: false,
    m300kto400k: false,
    m400kto500k: false,
    m500kto600k: false,
    m600kto800k: false,
    m800kto1000k: false,
    m1000kto2500k: false,
    m2500kto5000k: false,
    a5000k:false,
  });
  const {
    loading,
    error,
    MainActivity,
    PricingTrends,
    PricingRatio,
    DaysOnMarket,
    PerSqft,
    getGraph,
  } = store();
  const [source, setSource] = useState([]);
  const [sourceName, setSourceName] = useState("MainActivity");
  const fetchData = () => {};
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
    async function fetchMyAPI() {
      await getGraph();
    }

    fetchMyAPI();
  }, []);
  useEffect(() => {
    if (!loading) {
      setSource([...MainActivity]);
    }
  }, [loading]);
  const handleYearChange = (e) => {
    e.preventDefault();
    setLabel(e.target.value);
  };
  const reviews = [
    {
      url: "/human.png",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    },
    {
      url: "/human.png",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    },
    {
      url: "/human.png",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    },
    {
      url: "/human.png",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    },
    {
      url: "/human.png",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    },
  ];
  const fil = (a) => {
    return a.replace(/\D/g, "");
  };
  MainActivity && console.log(source);
  const handleSourceChange = (e) => {
    e.preventDefault();
    switch (e.target.value) {
      case "MainActivity":
        setSource([...MainActivity]);
        setSourceName("MainActivity");
        break;
      case "PricingTrends":
        setSource([...PricingTrends]);
        setSourceName("PricingTrends");
        break;
      case "PricingRatio":
        setSource([...PricingRatio]);
        break;
      case "DaysOnMarket":
        setSource([...DaysOnMarket]);
        break;
      case "PerSqft":
        setSource([...Persqft]);
        break;
    }
  };
  const giveDataSets=()=>{
    const v=[];
    if(lvl.home)
    {
    homeType.all && v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.allHome))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#FFA921",
        });
        homeType.detached && v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.detachedHome))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#dc2626",
        });
        homeType.attached && v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.attachedHome))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#ea580c",
        
        });
        homeType.th && v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.tHome))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#4ade80",
        
        });
        homeType.condo && v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.coopHome))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#1e3a8a",
        
        });
      }
      if(lvl.list)
      {
        list.all && v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.allHome))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#FFA921",
        });
        list.u50k && v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.listpriceU50k))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#dc2626",
        });
        list.m50kto100k && v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.listprice_50Kto99999))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#ea580c",
        
        });
        list.m100kto150k && v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.listprice_100Kto149999))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#4ade80",
        
        });
        
       
        list.m150kto200k && v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.listprice_150Kto199999))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#1e3a8a",
        
        });
        list.m200kto300k && v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.listprice_200Kto299999))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#1e3a8a",
        
        });
        list.m300kto400k && v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.listprice_300Kto399999))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#1e3a8a",
        
        });
        list.m400kto500k && v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.listprice_400Kto499999))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#1e3a8a",
        
        });
        list.m500kto600k && v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.listprice_500Kto599999))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#1e3a8a",
        
        });
        list.m600kto800k && v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.listprice_600Kto799999))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#1e3a8a",
        
        });
        list.m800kto1000k && v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.listprice_800Kto999999))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#1e3a8a",
        
        });
        list.m1000kto2500k && v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.listprice_1Mto2499999
            ))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#1e3a8a",
        
        });
        list.m2500kto5000k && v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.listprice_1Mto2499999))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#1e3a8a",
        
        });
        list.a5000k && v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.listprice_5000000))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#1e3a8a",
        
        });
        
      }
        return v;
  }

  const clearData=()=>{
   // console.log("t");
    setLvl({home:false,
    list:false,
    sold:false,
    market:false,
    living:false,
    bedroom:false,
    bath:false,
    bank:false});
  }

  return (
    <>
      {loading ? (
        <Loader></Loader>
      ) : (
        <div className=" w-full h-screen overflow-y-scroll no-scrollbar">
          <MainHeader page={""}></MainHeader>
          {/* <Chatbot></Chatbot> */}
          <div className="w-full sm:px-12 sm:py-12 px-3 py-6">
            <div className="text-2xl font-header font-medium">
              Timing the Market
            </div>
            <div className="flex sm:w-10/12 w-full py-6 justify-between sm:flex-row flex-col">
              <select
                onChange={(e) => handleSourceChange(e)}
                className="  z-10  flex-col  bg-custom-yellow  text-white flex  rounded sm:w-64 w-auto px-4 py-2"
              >
                <option
                  selected={true}
                  value={"MainActivity"}
                  className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded w-64"
                >
                  Market Activity
                </option>
                <option
                  value={"PricingTrends"}
                  className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded w-64"
                >
                  Pricing Trends
                </option>
                <option
                  value={"PricingRatio"}
                  className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded w-64"
                >
                  Pricing Ratios
                </option>
                <option
                  value={"DaysOnMarket"}
                  className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded w-64"
                >
                  Days on Market
                </option>
                <option
                  vlaue={"PerSqft"}
                  className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded w-64"
                >
                  $ Per Sqft
                </option>
                <option className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded w-64">
                  Supply And Demand
                </option>
              </select>
              <div className="flex sm:items-center items-start sm:flex-row flex-col">
                <div className="flex bg-custom-yellow px-3 py-2 border-2 text-white rounded-md sm:w-auto w-full">
                  <input type="radio" name="act"></input>

                  <div>Actual Values</div>
                </div>
                <div className="flex bg-custom-yellow px-3 py-2 border-2 text-white rounded-md sm:w-auto w-full">
                  <input type="radio" name="act"></input>

                  <div>Change Form</div>
                </div>
                <select className="  z-10  flex-col  bg-gray-100  text-black flex  rounded  px-4 py-2">
                  <option className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded sm:w-64 w-full">
                    Prev Year
                  </option>
                  <option className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded sm:w-64 w-full">
                    Prev Month
                  </option>
                </select>
              </div>
            </div>
            <div className="flex sm:w-10/12 w-full  justify-start bg-custom-light-yellow py-3 px-2 rounded-lg rounded-b-none sm:flex-row flex-col sm:space-y-0 space-y-4">
              <button className="sm:px-2 px-0 py-2 bg-custom-yellow text-white rounded-md mr-4">
                Add Metrices
              </button>
              <select className="  z-10  flex-col  bg-gray-100  text-black flex  rounded  px-4 py-2">
                <option className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded sm:w-64 w-auto">
                  Med Sold $/SqFt (Solds)
                </option>
                <option className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded w-64">
                  Avg Sold $/SqFt (Solds)
                </option>
                <option className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded w-64">
                  Avg List $/SqFt (Solds)
                </option>
                <option className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded w-64">
                  Med List $/SqFt (Solds)
                </option>
                <option className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded w-64">
                  Med List $/SqFt (New Listings)
                </option>
                <option className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded w-64">
                  Avg List $/SqFt (New Listings)
                </option>

                <option className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded w-64">
                  Med List $/SqFt (Active Listings)
                </option>
                <option className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded w-64">
                  Avg List $/SqFt (Active Listings)
                </option>
              </select>
            </div>
            <div className="w-full flex ">
              {/*  */}
              <div className="shadow sm:w-10/12 w-full">
                <Bar
                  datasetIdKey="id"
                //   data=
                    
                //     // {
                //     // labels: ["Chocolate", "Vanilla", "Strawberry"],
                //     // datasets: [
                      
                //     //     {
                //     //         label: "Blue",
                //     //         fillColor: "blue",
                //     //         data: [3,7,4]
                //     //     },
                //     //     {
                //     //         label: "Red",
                //     //         fillColor: "red",
                //     //         data: [4,3,5]
                //     //     },
                //     //     {
                //     //         label: "Green",
                //     //         fillColor: "green",
                //     //         data: [7,2,6]
                //     //     }
                //     // ]}
                // }
                  data={
                    {
                    labels: source.slice(0, label).map((a) => a.month),
                     datasets:giveDataSets(),
                      // [
                    //   homeType.all &&{
                    //     id: 1,
                    //     label: "",
                    //     focused: true,
                    //     data: source.slice(0, label).map((a) => Number(fil(a.allHome))),
                    //     // data:[{data:[1,2]},3,4],
                    //     tension: 0.4,
                    //     backgroundColor: "#FFA921",
                    //   },
                    //   homeType.detached &&{
                    //     id: 1,
                    //     label: "",
                    //     focused: true,
                    //     data: source.slice(0, label).map((a) => Number(fil(a.detachedHome))),
                    //     // data:[{data:[1,2]},3,4],
                    //     tension: 0.4,
                    //     backgroundColor: "#FFA921",
                    //   },
                    // ],
                  }
                }
                  options={{
                    tooltip: {
                      enabled: false,
                    },
                    scales: {
                      x: {
                        display: true,
                      },
                      y: {
                        scaleLabel: {
                          display: true,
                        },
                      },
                    },
                    legend: {},

                    plugins: {
                      legend: {
                        display: false,
                      },
                    },
                  }}
                />
              </div>
              <div className="hidden sm:w-2/12 sm:flex flex-col space-y-1">
                <div className="w-full flex flex-col px-3 font-Montserrat">
                  <button
                    className="w-full bg-custom-yellow rounded text-white pt-1 peer flex justify-start px-2"
                    onClick={()=>{ setLvl({home:!lvl.home,
                      list:false,
                      sold:false,
                      market:false,
                      living:false,
                      bedroom:false,
                      bath:false,
                      bank:false})}}
                  >
                    Home Type/Ownership
                  </button>
                 {lvl.home && <div className=" flex-col hover:flex">
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={homeType.all}
                        onClick={(e)=>setHomeType({...homeType,all:!homeType.all})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>All</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        onClick={(e)=>setHomeType({...homeType,detached:!homeType.detached})}
                        checked={homeType.detached}
                        
                        className="accent-red-600 indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>Detached: All</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        
                        onClick={(e)=>setHomeType({...homeType,attached:!homeType.attached})}
                        checked={homeType.attached}

                        className="accent-orange-600 indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>Attached: All</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        onClick={(e)=>setHomeType({...homeType,th:!homeType.th})}
                        checked={homeType.th}
                        className="accent-green-600 indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>Attached: TH</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        onClick={(e)=>setHomeType({...homeType,condo:!homeType.condo})}
                        checked={homeType.condo}
                        className="accent-blue-600 indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>Attached: Condo/Coop</div>
                    </div>
                  </div>}
                </div>
                <div className="w-full flex flex-col px-3 font-Montserrat">
                  <button className="w-full bg-custom-yellow rounded text-white pt-1 peer flex justify-start px-2" onClick={()=>{ setLvl({home:false,
    list:!lvl.list,
    sold:false,
    market:false,
    living:false,
    bedroom:false,
    bath:false,
    bank:false})}}>
                    List Price
                  </button>
                  {lvl.list && <div className=" flex-col hover:flex">
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={list.all}
                        onClick={(e)=>setHomeType({...homeType,all:!list.all})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>All</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={list.u50k}
                        onClick={(e)=>setHomeType({...homeType,all:!list.u50k})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"< $50000"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                      checked={list.m50kto100k}
                      onClick={(e)=>setHomeType({...homeType,all:!list.m50kto100k})}
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"$50K to $99,999"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                      checked={list.m100kto150k}
                      onClick={(e)=>setHomeType({...homeType,all:!list.m100kto150k})}
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"$100K to $149,999"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                      checked={list.m150kto200k}
                      onClick={(e)=>setHomeType({...homeType,all:!list.m150kto200k})}
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"$150K to $199,999"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                      checked={list.m200kto300k}
                      onClick={(e)=>setHomeType({...homeType,all:!list.m200kto300k})}
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"$200K to $299,999"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                      checked={list.m300kto400k}
                      onClick={(e)=>setHomeType({...homeType,all:!list.m300kto400k})}
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"$300K to $399,999"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                      checked={list.m400kto500k}
                      onClick={(e)=>setHomeType({...homeType,all:!list.m400kto500k})}
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"$400K to $499,999"}</div>
                    </div>

                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                      checked={list.m500kto600k}
                      onClick={(e)=>setHomeType({...homeType,all:!list.m500kto600k})}
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"$500K to $599,999"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                      checked={list.m600kto800k}
                      onClick={(e)=>setHomeType({...homeType,all:!list.m600kto800k})}
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"$600K to $799,999"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                      checked={list.m800kto1000k}
                      onClick={(e)=>setHomeType({...homeType,all:!list.m800kto1000k})}
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"$800K to $999,999"}</div>
                    </div>

                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                      checked={list.m1000kto2500k}
                      onClick={(e)=>setHomeType({...homeType,all:!list.m1000kto2500k})}
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"$1M to $2,499,999"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                      checked={list.m2500kto5000k}
                      onClick={(e)=>setHomeType({...homeType,all:!list.m2500kto5000k})}
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"$2.5M to $4,999,999"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                      checked={list.a5000k}
                      onClick={(e)=>setHomeType({...homeType,all:!list.a5000k})}
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"$5,000,000+"}</div>
                    </div>
                  </div>}
                </div>
                <div className="w-full flex flex-col px-3 font-Montserrat">
                  <button className="w-full bg-custom-yellow rounded text-white pt-1 peer flex justify-start px-2" onClick={()=>{ setLvl({home:false,
    list:false,
    sold:!lvl.sold,
    market:false,
    living:false,
    bedroom:false,
    bath:false,
    bank:false})}}>
                    Sold Price
                  </button>
                  {lvl.sold && <div className=" flex-col hover:flex">
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>All</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"< $50000"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"$50K to $99,999"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"$100K to $149,999"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"$150K to $199,999"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"$200K to $299,999"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"$300K to $399,999"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"$400K to $499,999"}</div>
                    </div>

                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"$500K to $599,999"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"$600K to $799,999"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"$800K to $999,999"}</div>
                    </div>

                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"$1M to $2,499,999"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"$2.5M to $4,999,999"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"$5,000,000+"}</div>
                    </div>
                  </div>}
                </div>
                <div className="w-full flex flex-col px-3 font-Montserrat">
                  <button className="w-full bg-custom-yellow rounded text-white pt-1 peer flex justify-start px-2" onClick={()=>{ setLvl({home:false,
    list:false,
    sold:false,
    market:!lvl.market,
    living:false,
    bedroom:false,
    bath:false,
    bank:false})}}>
                    Days in market
                  </button>
                  {lvl.market &&<div className=" flex-col hover:flex">
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>All</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"< $50000"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"0 Days"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"1 to 10 Days"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"11 to 20 Days"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"21 to 30 Days"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"31 to 60 Days"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"61 to 90 Days"}</div>
                    </div>

                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"91 to 120 Days"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"121 to 180 Days"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"181 to 360 Days"}</div>
                    </div>

                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"361 to 720 Days"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"721+ Days"}</div>
                    </div>
                  </div>}
                </div>
                <div className="w-full flex flex-col px-3 font-Montserrat">
                  <button className="w-full bg-custom-yellow rounded text-white pt-1 peer flex justify-start px-2" onClick={()=>{ setLvl({home:false,
    list:false,
    sold:false,
    market:false,
    living:false,
    bedroom:false,
    bath:false,
    bank:false})}}>
                    Living Area SqFt
                  </button>
                  {lvl.living &&<div className=" flex-col hover:flex">
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>All</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"< 800 SqFt"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"800 to 999 SqFt"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"1,000 to 1,199 SqFt"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"1,200 to 1,399 SqFt"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"1,400 to 1,599 SqFt"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"1,600 to 1,799 SqFt"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"1,800 to 1,999 SqFt"}</div>
                    </div>

                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"2,000 to 2,499 SqFt"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"2,500 to 2,999 SqFt"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"3,000 to 4,000 SqFt"}</div>
                    </div>

                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"4,000 to 4,999 SqFt"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"5,000+ SqFt"}</div>
                    </div>
                  </div>}
                </div>
                <div className="w-full flex flex-col px-3 font-Montserrat">
                  <button className="w-full bg-custom-yellow rounded text-white pt-1 peer flex justify-start px-2" onClick={()=>{ setLvl({home:false,
    list:false,
    sold:false,
    market:false,
    living:false,
    bedroom:false,
    bath:false,
    bank:false})}}>
                    Bedrooms
                  </button>
                  {lvl.bedroom &&<div className="hidden peer-hover:flex flex-col hover:flex">
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>All</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"0 Bedrooms"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"1 Bedroom"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"1,000 to 1,199 SqFt"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"2 Bedrooms"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"1,400 to 1,599 SqFt"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"3 Bedrooms"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"4 Bedrooms"}</div>
                    </div>

                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"5 Bedrooms"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"6+ Bedrooms"}</div>
                    </div>
                  </div>}
                </div>
                <div className="w-full flex flex-col px-3 font-Montserrat">
                  <button className="w-full bg-custom-yellow rounded text-white pt-1 peer flex justify-start px-2">
                    Bathrooms
                  </button>
                  <div className="hidden peer-hover:flex flex-col hover:flex">
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>All</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"0 Bathrooms"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"1 Bathroom"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"2 Bathrooms"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"3 Bathrooms"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"4 Bathrooms"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"5+ Bathrooms"}</div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-col px-3 font-Montserrat">
                  <button className="w-full bg-custom-yellow rounded text-white pt-1 peer flex justify-start px-2">
                    Bank-Mediated
                  </button>
                  <div className="hidden peer-hover:flex flex-col hover:flex">
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>All</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"All Bank-Mediated"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"Foreclosures (REO)"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"Short Sales"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"Non-Bank-Mediated"}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sm:w-10/12 flex sm:flex-row flex-col sm:space-y-0 space-y-3  w-full justify-between   bg-custom-light-yellow py-3 px-2 rounded-lg rounded-t-none">
              <div className="flex space-x-4 sm:w-auto w-full  sm:justify-start justify-center">
                <button className="text-2xl p-2 bg-custom-yellow text-white rounded-md">
                  <VscGraph></VscGraph>
                </button>
                <button className="text-2xl p-2 bg-custom-yellow text-white rounded-md">
                  <BsGraphUp></BsGraphUp>
                </button>
                <button className="text-2xl p-2 bg-custom-yellow text-white rounded-md">
                  <AiOutlineMenu></AiOutlineMenu>
                </button>
              </div>
              <div className="sm:flex sm:flex-row flex-col sm:space-x-10 space-x-0 sm:space-y-0 space-y-2 sm:justify-start items-center sm:w-auto w-full">
                <div className="flex sm:auto w-full sm:justify-start justify-center">
                  <div className="px-3 py-1 rounded-md  rounded-r-none bg-custom-yellow text-white flex items-center">
                    Show
                  </div>
                  <select
                    className="  z-10  flex-col  bg-gray-100  text-black flex  rounded  px-4 py-2"
                    onChange={(e) => handleYearChange(e)}
                  >
                    <option
                      value={1}
                      className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded w-64"
                    >
                      One Month
                    </option>
                    <option
                      value={3}
                      className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded w-64"
                    >
                      Three Months
                    </option>
                    <option
                      value={6}
                      className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded w-64"
                    >
                      Six Months
                    </option>
                    <option
                      value={12}
                      selected={true}
                      className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded w-64"
                    >
                      1 year
                    </option>
                    <option
                      value={24}
                      className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded w-64"
                    >
                      2 years
                    </option>
                    <option
                      value={36}
                      className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded w-64"
                    >
                      3 years
                    </option>
                    <option
                      value={48}
                      className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded w-64"
                    >
                      4 years
                    </option>
                    <option
                      value={60}
                      className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded w-64"
                    >
                      5 years
                    </option>
                    <option
                      value={72}
                      className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded w-64"
                    >
                      6 years
                    </option>
                    <option
                      value={84}
                      className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded w-64"
                    >
                      7 years
                    </option>
                    <option
                      value={96}
                      className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded w-64"
                    >
                      8 years
                    </option>
                    <option
                      value={108}
                      className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded w-64"
                    >
                      9 years
                    </option>
                    <option
                      value={120}
                      className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded w-64"
                    >
                      10 years
                    </option>
                  </select>
                </div>
                <div className="flex sm:w-auto w-full justify-center sm:justify-none">
                  <div className="px-3 py-1 rounded-md  rounded-r-none bg-custom-yellow text-white flex items-center">
                    View By
                  </div>
                  <select className="  z-10  flex-col  bg-gray-100  text-black flex  rounded  px-4 py-2">
                    <option className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded w-64">
                      Months
                    </option>
                    <option className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded w-64">
                      Quaters
                    </option>
                  </select>
                </div>
              </div>
              <div className="sm:hidden sm:w-2/12 flex flex-col space-y-1">
                <div className="w-full flex flex-col px-3 font-Montserrat">
                  <button className="w-full bg-custom-yellow rounded text-white pt-1 peer flex justify-start px-2">
                    Home Type/Ownership
                  </button>
                  <div className="hidden peer-hover:flex flex-col hover:flex">
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>All</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>Detached: All</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>Attached: All</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>Attached: TH</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>Attached: Condo/Coop</div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-col px-3 font-Montserrat">
                  <button className="w-full bg-custom-yellow rounded text-white pt-1 peer flex justify-start px-2">
                    List Price
                  </button>
                  <div className="hidden peer-hover:flex flex-col hover:flex">
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>All</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"< $50000"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"$50K to $99,999"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"$100K to $149,999"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"$150K to $199,999"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"$200K to $299,999"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"$300K to $399,999"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"$400K to $499,999"}</div>
                    </div>

                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"$500K to $599,999"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"$600K to $799,999"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"$800K to $999,999"}</div>
                    </div>

                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"$1M to $2,499,999"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"$2.5M to $4,999,999"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"$5,000,000+"}</div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-col px-3 font-Montserrat">
                  <button className="w-full bg-custom-yellow rounded text-white pt-1 peer flex justify-start px-2">
                    Sold Price
                  </button>
                  <div className="hidden peer-hover:flex flex-col hover:flex">
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>All</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"< $50000"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"$50K to $99,999"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"$100K to $149,999"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"$150K to $199,999"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"$200K to $299,999"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"$300K to $399,999"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"$400K to $499,999"}</div>
                    </div>

                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"$500K to $599,999"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"$600K to $799,999"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"$800K to $999,999"}</div>
                    </div>

                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"$1M to $2,499,999"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"$2.5M to $4,999,999"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"$5,000,000+"}</div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-col px-3 font-Montserrat">
                  <button className="w-full bg-custom-yellow rounded text-white pt-1 peer flex justify-start px-2">
                    Days in market
                  </button>
                  <div className="hidden peer-hover:flex flex-col hover:flex">
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>All</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"< $50000"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"0 Days"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"1 to 10 Days"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"11 to 20 Days"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"21 to 30 Days"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"31 to 60 Days"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"61 to 90 Days"}</div>
                    </div>

                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"91 to 120 Days"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"121 to 180 Days"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"181 to 360 Days"}</div>
                    </div>

                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"361 to 720 Days"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"721+ Days"}</div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-col px-3 font-Montserrat">
                  <button className="w-full bg-custom-yellow rounded text-white pt-1 peer flex justify-start px-2">
                    Living Area SqFt
                  </button>
                  <div className="hidden peer-hover:flex flex-col hover:flex">
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>All</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"< 800 SqFt"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"800 to 999 SqFt"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"1,000 to 1,199 SqFt"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"1,200 to 1,399 SqFt"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"1,400 to 1,599 SqFt"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"1,600 to 1,799 SqFt"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"1,800 to 1,999 SqFt"}</div>
                    </div>

                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"2,000 to 2,499 SqFt"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"2,500 to 2,999 SqFt"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"3,000 to 4,000 SqFt"}</div>
                    </div>

                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"4,000 to 4,999 SqFt"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"5,000+ SqFt"}</div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-col px-3 font-Montserrat">
                  <button className="w-full bg-custom-yellow rounded text-white pt-1 peer flex justify-start px-2" onClick={()=>{ setLvl({home:false,
    list:false,
    sold:false,
    market:false,
    living:false,
    bedroom:!lvl.bedroom,
    bath:false,
    bank:false})}}>
                    Bedrooms
                  </button>
                  {lvl.bedroom &&<div className="hidden peer-hover:flex flex-col hover:flex">
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>All</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"0 Bedrooms"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"1 Bedroom"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"1,000 to 1,199 SqFt"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"2 Bedrooms"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"1,400 to 1,599 SqFt"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"3 Bedrooms"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"4 Bedrooms"}</div>
                    </div>

                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"5 Bedrooms"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"6+ Bedrooms"}</div>
                    </div>
                  </div>}
                </div>
                <div className="w-full flex flex-col px-3 font-Montserrat">
                  <button className="w-full bg-custom-yellow rounded text-white pt-1 peer flex justify-start px-2" onClick={()=>{ setLvl({home:false,
    list:false,
    sold:false,
    market:false,
    living:false,
    bedroom:false,
    bath:false,
    bank:false})}}>
                    Bathrooms
                  </button>
                  {lvl.bath &&<div className="hidden peer-hover:flex flex-col hover:flex">
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>All</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"0 Bathrooms"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"1 Bathroom"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"2 Bathrooms"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"3 Bathrooms"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"4 Bathrooms"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"5+ Bathrooms"}</div>
                    </div>
                  </div>}
                </div>
                <div className="w-full flex flex-col px-3 font-Montserrat">
                  <button className="w-full bg-custom-yellow rounded text-white pt-1 peer flex justify-start px-2" onClick={()=>{ setLvl({home:false,
    list:false,
    sold:false,
    market:false,
    living:false,
    bedroom:false,
    bath:false,
    bank:true})}}>
                    Bank-Mediated
                  </button>
                  {lvl.bank &&<div className="hidden peer-hover:flex flex-col hover:flex">
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>All</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"All Bank-Mediated"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"Foreclosures (REO)"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"Short Sales"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"Non-Bank-Mediated"}</div>
                    </div>
                  </div>
}
                </div>
              </div>
            </div>
       <div className="w-full relative px-3 h-full ">
            <div className="w-full text-center font-header md:text-4xl text-2xl my-8">
            Blogs
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Link
                href={"/valueHome"}
                className="shadow-md shadow-custom-light-yellow rounded-lg bg-white"
              >
                <div className="h-[500px] w-full relative">
                  <Image
                    alt="..."
                    fill
                    quality={100}
                    src={"/VH.jpg"}
                    className="object-cover object-bottom rounded-t-md"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCABxAHEDASIAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAAAwQAAQUCBv/EACMQAQACAgMAAwACAwAAAAAAAAABAgMRBCExBRJBIlETYXH/xAAaAQADAQEBAQAAAAAAAAAAAAABAgMABAUG/8QAHREBAQEBAAMBAQEAAAAAAAAAAAECEQMSIRMxQf/aAAwDAQACEQMRAD8A9Wp0p8/Yq5kOwkhXlx7nKfLiznarWcfYZDUeotQKWHoEn0K7WpbpkIpzd24uFgwvkAsNkAtKXOU6kVtBZrItHdcouJ8L5Z0Yv4Tz2c28dUyDe7iLhZMgcZOyzHwaepY3jlm4r7k7isOcf6xqHTisu1plOqDuJIVx9TQvkLWkxkkreS3x9N1No52hfyrdbqLR33KIOTxn8m3p/NPUsnlW9TmOqT+Es2TUgxm79B5WXW+ydeRu3o/hQ63MGTbRw3YfGy701ePfwfy43WnSehYkvisNEl9Rq5CyT0JMgZJH1aF8slbyPlkpex5hur+yB/ZB9A69OqVpKtiZXkT1LF5lvWxyZ6lh86epHGT2vP8AyWeab17LKpmvW297M/JW3n1/RN6ePHJlK6eg4Gb71iW7xrePLfFX/P6l6Tiz1Dk8vj5TytfFPRis9FMM9Gaz05Lk/XVpAySLaQMktMt0rlkneezOaSeSe1s5DqbRxtDeodevVPi1T4SwpLk+Sw+d5Lc5P6xeZG4lTxwbXkvkI1yN/wCijS+SxT9vtDO09TH3MR6f+Lj+U/8AXpeL5DA+Nx/WHoONHUOTz/abFaeHwzWSuIzVx2KddWkvkka0gZAkHpTMTyem8pS/q2YW0NEQ/A69iqfHTmfEKxPkfrI5Vd7bGePWZya+ny1ee5mH7bZ0cf8An43c+Peyv+Lt153yOfU+r4mL6xDW48eE8FNNDDCO71XPw5iHqDjGhCqJYDIPYDI0AplK3g3kK3hSFtD0jrSGDr1yp8WqfEacpmZ2ePWlmZ+YY1ZuaoH07N5YB12pKnXWKpzFBbHBvEW0YZoLAdBIIZVgbjWBuMYtkLXgzkL2PCVxpFoIPVqnxESqpXMQzIjRqRyg/qIonRcZvGiFowzQSEQplSDdEGNS2QvZEPCVyiIIP//Z"
                  />
                </div>
                <div className="text-center md:text-left p-8 space-y-3">
                  <h3 className="w-full text-custom-yellow text-2xl font-header hover:underline hover:decoration-4 hover:decoration-custom-light-yellow">
                  Why people search for the value of their homes
                  </h3>
                  {/* <p className="font-Montserrat break-words w-full md:w-[75%] mx-auto md:mx-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p> */}
                </div>
              </Link>
              <Link
                href={"/saleHome"}
                className="shadow-md shadow-custom-light-yellow rounded-lg bg-white"
              > 
                <div className="h-[500px] w-full relative">
                  <Image
                    alt="..."
                    fill
                    quality={100}
                    src={"/SH.png"}
                    className="object-cover object-center rounded-t-md"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCABxAHEDASIAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAAAwQAAQUCBv/EACMQAQACAgMAAwACAwAAAAAAAAABAgMRBCExBRJBIlETYXH/xAAaAQADAQEBAQAAAAAAAAAAAAABAgMABAUG/8QAHREBAQEBAAMBAQEAAAAAAAAAAAECEQMSIRMxQf/aAAwDAQACEQMRAD8A9Wp0p8/Yq5kOwkhXlx7nKfLiznarWcfYZDUeotQKWHoEn0K7WpbpkIpzd24uFgwvkAsNkAtKXOU6kVtBZrItHdcouJ8L5Z0Yv4Tz2c28dUyDe7iLhZMgcZOyzHwaepY3jlm4r7k7isOcf6xqHTisu1plOqDuJIVx9TQvkLWkxkkreS3x9N1No52hfyrdbqLR33KIOTxn8m3p/NPUsnlW9TmOqT+Es2TUgxm79B5WXW+ydeRu3o/hQ63MGTbRw3YfGy701ePfwfy43WnSehYkvisNEl9Rq5CyT0JMgZJH1aF8slbyPlkpex5hur+yB/ZB9A69OqVpKtiZXkT1LF5lvWxyZ6lh86epHGT2vP8AyWeab17LKpmvW297M/JW3n1/RN6ePHJlK6eg4Gb71iW7xrePLfFX/P6l6Tiz1Dk8vj5TytfFPRis9FMM9Gaz05Lk/XVpAySLaQMktMt0rlkneezOaSeSe1s5DqbRxtDeodevVPi1T4SwpLk+Sw+d5Lc5P6xeZG4lTxwbXkvkI1yN/wCijS+SxT9vtDO09TH3MR6f+Lj+U/8AXpeL5DA+Nx/WHoONHUOTz/abFaeHwzWSuIzVx2KddWkvkka0gZAkHpTMTyem8pS/q2YW0NEQ/A69iqfHTmfEKxPkfrI5Vd7bGePWZya+ny1ee5mH7bZ0cf8An43c+Peyv+Lt153yOfU+r4mL6xDW48eE8FNNDDCO71XPw5iHqDjGhCqJYDIPYDI0AplK3g3kK3hSFtD0jrSGDr1yp8WqfEacpmZ2ePWlmZ+YY1ZuaoH07N5YB12pKnXWKpzFBbHBvEW0YZoLAdBIIZVgbjWBuMYtkLXgzkL2PCVxpFoIPVqnxESqpXMQzIjRqRyg/qIonRcZvGiFowzQSEQplSDdEGNS2QvZEPCVyiIIP//Z"
                  />
                </div>
                <div className="text-center md:text-left p-8 space-y-3">
                  <h3 className="w-full text-custom-yellow text-2xl font-header hover:underline hover:decoration-4 hover:decoration-custom-light-yellow">
                  Why people decide to sell their homes
                  </h3>
                  {/* <p className="font-Montserrat break-words w-full md:w-[75%] mx-auto md:mx-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p> */}
                </div>
              </Link>
            </div>
          </div>
     </div>
     </div>
     
   )}</>
  )
                }

 export default Timingthemarket;
