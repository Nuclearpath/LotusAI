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
import Link from "next/link";
import Image from "next/image";
import {useSearchParams} from "next/navigation";
import CenterMode from "../components/CenterSlider";

function Timingthemarket() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const db=searchParams.get("db");
  const val=searchParams.get("val");
  
  //// console.log(router.query);
  //  // console.log(db);
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
  const [sold,setSold]=useState({
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
  const [bed,setBed]=useState({
    all:true,
   bed0:false,
   bed1:false,
   bed2:false,
   bed3:false,
   bed4:false,
   bed5:false,
   bed6:false
  });
  const [bath,setBath]=useState({
    all:true,
   bath0:false,
   bath1:false,
   bath2:false,
   bath3:false,
   bath4:false,
   bath5:false
  });
  const [living,setLiving]=useState({
    all:true,
   sqft800:false,
   sqft999:false,
   sqft1199:false,
   sqft1399:false,
   sqft1599:false,
   sqft1799:false,
   sqft1999:false,
   sqft2499:false,
   sqft2999:false,
   sqft4000:false,
   sqft4999:false,
   sqft5000:false,

   

  });
  const [days,setDays]=useState({
    all:true,
   day0:false,
   day10:false,
   day20:false,
   day30:false,
   day60:false,
   day90:false,
   day120:false,
   day180:false,
   day360:false,
   day720:false,
   day721:false

  });
  const [bank,setBank]=useState({
    all:true,
    BankMediated:false,
    Foreclosures:false,
    ShortSales:false,
    NonBankMediated:false

  })
  const {
    loading,
    error,
    MainActivity,
    PricingTrends,
    PricingRatio,
    DaysOnMarket,
    PerSqft,
    supplyDemand,
    getGraph,
  } = store();
  const [source, setSource] = useState([]);
  const [sourceName, setSourceName] = useState();
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
    async function fetchMyAPI() {
      if(db && val)
      {
      await getGraph(db,Number(val));
       }
    }
    fetchMyAPI();
    
  }, [db,val]);
  useEffect(() => {
    if (!loading) {
      // if(db==="main")
     setSource([...MainActivity]);
      }
      if(db==="pt")
      {
        setSource([...PricingTrends]);
      }
      if(db==="pr")
      {
        setSource([...PricingRatio]);
      }
      if(db==="ps")
      {
        setSource([...PerSqft]);
      }
      if(db==="days")
      {
        setSource([...DaysOnMarket]);
      }
      if(db==="sd")
      {
        setSource([...supplyDemand]);
      }
    
  }, [loading]);
  const handleYearChange = async (e) => {
    e.preventDefault();
    setLabel(e.target.value);
    router.push(`/timingthemarket?db=${db}&val=${e.target.value}`);
  //  await getGraph(sourceName,label);

  };
  
  const fil = (a) => {
    return a.replace(/\D/g, "");
  };
  // // console.log(source);
  // MainActivity && // console.log(source);
  const handleSourceChange = async (e) => {
    e.preventDefault();
     // console.log(e.target.value);
    switch (e.target.value) {
      
      case "MainActivity":
        // setSourceName("main");
        // await getGraph(sourceName,label);
        router.push(`/timingthemarket?db=main&val=${val}`);

        break;
      case "PricingTrends":
        router.push(`/timingthemarket?db=pt&val=${val}`);
        

        break;
      case "PricingRatio":
        router.push(`/timingthemarket?db=pr&val=${val}`);


        break;
      case "DaysOnMarket":
        
      router.push(`/timingthemarket?db=days&val=${val}`);

        break;
      case "$ Per Sqft":
       // // console.log("tp");
      router.push(`/timingthemarket?db=ps&val=${val}`);

        break;
        case "Supply And Demand":
          router.push(`/timingthemarket?db=sd&val=${val}`); 
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
          backgroundColor: "#475569",
        
        });
        list.m300kto400k && v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.listprice_300Kto399999))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#d97706",
        
        });
        list.m400kto500k && v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.listprice_400Kto499999))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#059669",
        
        });
        list.m500kto600k && v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.listprice_500Kto599999))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#0d9488",
        
        });
        list.m600kto800k && v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.listprice_600Kto799999))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#0284c7",
        
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
      if(lvl.sold)
      {
        sold.all && v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.allHome))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#FFA921",
        });
        sold.u50k && v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.soldpriceu50k))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#dc2626",
        });
        sold.m50kto100k && v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.soldprice_50Kto99999))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#ea580c",
        
        });
        sold.m100kto150k && v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.soldprice_100Kto149999))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#4ade80",
        
        });
        
       
        sold.m150kto200k && v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.soldprice_150Kto199999))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#1e3a8a",
        
        });
        sold.m200kto300k && v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.soldprice_200Kto299999
            ))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#1e3a8a",
        
        });
        sold.m300kto400k && v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.soldprice_300Kto399999))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#1e3a8a",
        
        });
        sold.m400kto500k && v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.soldprice_400Kto499999))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#1e3a8a",
        
        });
        sold.m500kto600k && v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.soldprice_500Kto599999))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#1e3a8a",
        
        });
        sold.m600kto800k && v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.soldprice_600Kto799999))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#1e3a8a",
        
        });
        sold.m800kto1000k && v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.soldprice_800Kto999999))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#1e3a8a",
        
        });
        sold.m1000kto2500k && v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.soldprice_1Mto2499999
            ))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#1e3a8a",
        
        });
        sold.m2500kto5000k && v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.soldprice_25Mto4999999))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#1e3a8a",
        
        });
        sold.a5000k && v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.soldprice_5000000))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#1e3a8a",
        
        });
      }
      if(lvl.market)
      {
     
        days.all &&  v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.allHome))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#FFA921",
        });
        days.day0 &&  v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.market0days))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#FFA921",
        });
        days.day10 &&  v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.market_1to10days))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#FFA921",
        });
        days.day20 &&  v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.market_11to20days))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#FFA921",
        });
        days.day30 &&  v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.market_21to30days))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#FFA921",
        });
        days.day60 &&  v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.market_31to60days))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#FFA921",
        });
        days.day90 &&  v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.market_61to90days))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#FFA921",
        });
        days.day120 &&  v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.market_91to120days))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#FFA921",
        });
        days.day180 &&  v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.market_121to180days))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#FFA921",
        });
        days.day360 &&  v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.market_181to360days))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#FFA921",
        });
        days.day720 &&  v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.market_361to720days))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#FFA921",
        });
        days.day721 &&  v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.market_720days))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#FFA921",
        });
      }
      if(lvl.living)
      {
         
        living.all &&  v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.allHome))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#FFA921",
        });
        living.sqft800 &&  v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.livingAreau_800sqft))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#FFA921",
        });
        living.sqft999 &&  v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.livingArea800to999sqft))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#FFA921",
        });
        living.sqft1199 &&  v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.livingArea1000to1199sqft))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#FFA921",
        });
        living.sqft1399 &&  v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.livingArea1200to1399sqft))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#FFA921",
        });
        living.sqft1599 &&  v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.livingArea1400to1599sqft))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#FFA921",
        });
        living.sqft1799 &&  v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.livingArea1600to1799sqft))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#FFA921",
        });
        living.sqft1999 &&  v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.livingArea1800to1999sqft))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#FFA921",
        });
        living.sqft2499 &&  v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.livingArea2000to2499sqft))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#FFA921",
        });
        living.sqft2999 &&  v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.livingArea2500to2999sqft))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#FFA921",
        });
        living.sqft4000 &&  v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.livingArea3000to4000sqft))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#FFA921",
        });
        living.sqft4999 &&  v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.livingArea4000to4999sqft))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#FFA921",
        });
        living.sqft5000 &&  v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.livingArea5000sqft))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#FFA921",
        });
      }
      if(lvl.bedroom)
      {

        bed.all &&  v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.allHome))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#FFA921",
        });
        bed.bed0 &&  v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.bedroom0))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#FFA921",
        });
        bed.bed1 &&  v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.bedroom1))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#FFA921",
        });
        bed.bed2 &&  v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.bedroom2))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#FFA921",
        });
        bed.bed3 &&  v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.bedroom3))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#FFA921",
        });
        bed.bed4 &&  v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.bedroom4))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#FFA921",
        });
        bed.bed5 &&  v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.bedroom5))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#FFA921",
        });
        bed.bed6 &&  v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.bedroom6))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#FFA921",
        });
      }
      if(lvl.bath)
      {
        bath.all &&  v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.allHome))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#FFA921",
        });
        bath.bath0 &&  v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.bathroom0 ))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#FFA921",
        });
        bath.bath1 &&  v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.bathroom1))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#FFA921",
        });
        bath.bath2 &&  v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.bathroom2))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#FFA921",
        });
        bath.bath3 &&  v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.bathroom3))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#FFA921",
        });
        bath.bath4 &&  v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.bathroom4))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#FFA921",
        });
        bath.bath5 &&  v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.bathroom5))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#FFA921",
        });
      }
      if(lvl.bank)
      {
        bank.all &&  v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.allHome))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#FFA921",
        });
        bank.BankMediated &&  v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.allBankMediated))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#FFA921",
        });
        bank.Foreclosures &&  v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.ForeclosuresREO))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#FFA921",
        });
        bank.NonBankMediated &&  v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.NonBankMediated))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#FFA921",
        });
        bank.ShortSales &&  v.push({
          id: 1,
          label: "",
          focused: true,
          data: source.slice(0, label).map((a) => Number(fil(a.ShortSales))),
          // data:[{data:[1,2]},3,4],
          tension: 0.4,
          backgroundColor: "#FFA921",
        });
      }
        return v;
  }

  const clearData=()=>{
   // // console.log("t");
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
            <p>
            What&apos;s the best time to sell your home? Use this information to get insight into market fluctuations and trends.
            </p>
            <div className="flex sm:w-10/12 w-full py-6 justify-between sm:flex-row flex-col">
              <select
                onChange={async (e) =>await  handleSourceChange(e)}
                className="  z-10  flex-col  bg-custom-yellow  text-white flex  rounded sm:w-64 w-auto px-4 py-2"
              >
                <option
                  selected={db==="main"}
                  value={"MainActivity"}
                  className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded w-64"
                >
                  Market Activity
                </option>
                <option
                selected={db==="pt"}
                  value={"PricingTrends"}
                  className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded w-64"
                >
                  Pricing Trends
                </option>
                <option
                  value={"PricingRatio"}
                  selected={db==="pr"}
                  className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded w-64"
                >
                  Pricing Ratios
                </option>
                <option
                  value={"DaysOnMarket"}
                  selected={db==="days"}
                  className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded w-64"
                >
                  Days on Market
                </option>
                <option
                  vlaue={"$ Per Sqft"}
                  selected={db==="ps"}
                  className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded w-64"
                >
                  $ Per Sqft
                </option>
                <option className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded w-64" 
                vlaue={"Supply And Demand"}
                selected={db==="sd"}>
                  Supply And Demand
                </option>
              </select>
              
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
                        onClick={(e)=>setList({...list,all:!list.all})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2 accent-[#FFA921]"
                      />
                      <div>All</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={list.u50k}
                        onClick={(e)=>setList({...list,u50k:!list.u50k})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2 accent-[#dc2626]"
                      />
                      <div>{"< $50000"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                      checked={list.m50kto100k}
                      onClick={(e)=>setList({...list,m50kto100k:!list.m50kto100k})}
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2 accent-[#ea580c]"
                      />
                      <div>{"$50K to $99,999"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                      checked={list.m100kto150k}
                      onClick={(e)=>setList({...list,m100kto150k:!list.m100kto150k})}
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2 accent-[#4ade80]"
                      />
                      <div>{"$100K to $149,999"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                      checked={list.m150kto200k}
                      onClick={(e)=>setList({...list,m150kto200k:!list.m150kto200k})}
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"$150K to $199,999"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                      checked={list.m200kto300k}
                      onClick={(e)=>setList({...list,m200kto300k:!list.m200kto300k})}
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2 accent-[#1e3a8a]"
                      />
                      <div>{"$200K to $299,999"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                      checked={list.m300kto400k}
                      onClick={(e)=>setList({...list,m300kto400k:!list.m300kto400k})}
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2 accent-slate-600"
                      />
                      <div>{"$300K to $399,999"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                      checked={list.m400kto500k}
                      onClick={(e)=>setList({...list,m400kto500k:!list.m400kto500k})}
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2 accent-[#d97706]"
                      />
                      <div>{"$400K to $499,999"}</div>
                    </div>

                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                      checked={list.m500kto600k}
                      onClick={(e)=>setList({...list,m500kto600k:!list.m500kto600k})}
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2 accent-[#059669]"
                      />
                      <div>{"$500K to $599,999"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                      checked={list.m600kto800k}
                      onClick={(e)=>setList({...list,m600kto800k:!list.m600kto800k})}
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2 accent-[#0d9488]"
                      />
                      <div>{"$600K to $799,999"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                      checked={list.m800kto1000k}
                      onClick={(e)=>setList({...list,m800kto1000k:!list.m800kto1000k})}
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2 accent-[#0284c7]"
                      />
                      <div>{"$800K to $999,999"}</div>
                    </div>

                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                      checked={list.m1000kto2500k}
                      onClick={(e)=>setList({...list,m1000kto2500k:!list.m1000kto2500k})}
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"$1M to $2,499,999"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                      checked={list.m2500kto5000k}
                      onClick={(e)=>setList({...list,m2500kto5000k:!list.m2500kto5000k})}
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"$2.5M to $4,999,999"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                      checked={list.a5000k}
                      onClick={(e)=>setList({...list,a5000k:!list.a5000k})}
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
                        checked={sold.all}
                        onClick={(e)=>setSold({...sold,all:!sold.all})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>All</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={sold.u50k}
                        onClick={(e)=>setSold({...sold,u50k:!sold.u50k})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"< $50000"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                      checked={sold.m50kto100k}
                      onClick={(e)=>setSold({...sold,m50kto100k:!sold.m50kto100k})}
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"$50K to $99,999"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                      checked={sold.m100kto150k}
                      onClick={(e)=>setSold({...sold,m100kto150k:!sold.m100kto150k})}
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"$100K to $149,999"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                      checked={sold.m150kto200k}
                      onClick={(e)=>setSold({...sold,m150kto200k:!sold.m150kto200k})}
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"$150K to $199,999"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                      checked={sold.m200kto300k}
                      onClick={(e)=>setSold({...sold,m200kto300k:!sold.m200kto300k})}
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"$200K to $299,999"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                      checked={sold.m300kto400k}
                      onClick={(e)=>setSold({...sold,m300kto400k:!sold.m300kto400k})}
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"$300K to $399,999"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                      checked={sold.m400kto500k}
                      onClick={(e)=>setSold({...sold,m400kto500k:!sold.m400kto500k})}
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"$400K to $499,999"}</div>
                    </div>

                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                      checked={sold.m500kto600k}
                      onClick={(e)=>setSold({...sold,m500kto600k:!sold.m500kto600k})}
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"$500K to $599,999"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                      checked={sold.m600kto800k}
                      onClick={(e)=>setSold({...sold,m600kto800k:!sold.m600kto800k})}
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"$600K to $799,999"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                      checked={sold.m800kto1000k}
                      onClick={(e)=>setSold({...sold,m800kto1000k:!sold.m800kto1000k})}
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"$800K to $999,999"}</div>
                    </div>

                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                      checked={sold.m1000kto2500k}
                      onClick={(e)=>setSold({...sold,m1000kto2500k:!sold.m1000kto2500k})}
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"$1M to $2,499,999"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                      checked={sold.m2500kto5000k}
                      onClick={(e)=>setSold({...sold,m2500kto5000k:!sold.m2500kto5000k})}
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"$2.5M to $4,999,999"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                      checked={sold.a5000k}
                      onClick={(e)=>setSold({...sold,a5000k:!sold.a5000k})}
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
                        checked={days.all}
                        onClick={(e)=>setDays({...days,all:!days.all})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>All</div>
                    </div>
                    
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                       checked={days.day0}
                       onClick={(e)=>setDays({...days,day0:!days.day0})}
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"0 Days"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={days.day10}
                       onClick={(e)=>setDays({...days,day10:!days.day10})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"1 to 10 Days"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={days.day20}
                       onClick={(e)=>setDays({...days,day20:!days.day20})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"11 to 20 Days"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={days.day30}
                       onClick={(e)=>setDays({...days,day30:!days.day30})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"21 to 30 Days"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={days.day60}
                       onClick={(e)=>setDays({...days,day60:!days.day60})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"31 to 60 Days"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={days.day90}
                       onClick={(e)=>setDays({...days,day90:!days.day90})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"61 to 90 Days"}</div>
                    </div>

                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={days.day120}
                       onClick={(e)=>setDays({...days,day120:!days.day120})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"91 to 120 Days"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={days.day180}
                       onClick={(e)=>setDays({...days,day180:!days.day180})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"121 to 180 Days"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={days.day360}
                       onClick={(e)=>setDays({...days,day360:!days.day360})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"181 to 360 Days"}</div>
                    </div>

                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={days.day720}
                       onClick={(e)=>setDays({...days,day720:!days.day720})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"361 to 720 Days"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={days.day721}
                       onClick={(e)=>setDays({...days,day721:!days.day721})}
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
    living:!lvl.living,
    bedroom:false,
    bath:false,
    bank:false})}}>
                    Living Area SqFt
                  </button>
                  {lvl.living &&<div className=" flex-col hover:flex">
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={living.all}
                        onClick={(e)=>setLiving({...living,all:!living.all})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>All</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={living.sqft800}
                        onClick={(e)=>setLiving({...living,sqft800:!living.sqft800})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"< 800 SqFt"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={living.sqft999}
                        onClick={(e)=>setLiving({...living,sqft999:!living.sqft999})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"800 to 999 SqFt"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={living.sqft1199}
                        onClick={(e)=>setLiving({...living,sqft1199:!living.sqft1199})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"1,000 to 1,199 SqFt"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={living.sqft1399}
                        onClick={(e)=>setLiving({...living,sqft1399:!living.sqft1399})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"1,200 to 1,399 SqFt"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={living.sqft1599}
                        onClick={(e)=>setLiving({...living,sqft1599:!living.sqft1599})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"1,400 to 1,599 SqFt"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={living.sqft1799}
                        onClick={(e)=>setLiving({...living,sqft1799:!living.sqft1799})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"1,600 to 1,799 SqFt"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={living.sqft1999}
                        onClick={(e)=>setLiving({...living,sqft1999:!living.sqft1999})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"1,800 to 1,999 SqFt"}</div>
                    </div>

                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={living.sqft2499}
                        onClick={(e)=>setLiving({...living,sqft2499:!living.sqft2499})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"2,000 to 2,499 SqFt"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={living.sqft2999}
                        onClick={(e)=>setLiving({...living,sqft2999:!living.sqft2999})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"2,500 to 2,999 SqFt"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={living.sqft4000}
                        onClick={(e)=>setLiving({...living,sqft4000:!living.sqft4000})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"3,000 to 4,000 SqFt"}</div>
                    </div>

                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={living.sqft4999}
                        onClick={(e)=>setLiving({...living,sqft4999:!living.sqft4999})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"4,000 to 4,999 SqFt"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={living.sqft5000}
                        onClick={(e)=>setLiving({...living,sqft5000:!living.sqft5000})}
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
    bedroom:!lvl.bedroom,
    bath:false,
    bank:false})}}>
                    Bedrooms
                  </button>
                  {lvl.bedroom &&<div className="flex  flex-col hover:flex">
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={bed.all}
                        onClick={(e)=>setBed({...bed,all:!bed.all})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>All</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={bed.bed0}
                        onClick={(e)=>setBed({...bed,bed0:!bed.bed0})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"0 Bedrooms"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={bed.bed1}
                        onClick={(e)=>setBed({...bed,bed1:!bed.bed1})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"1 Bedroom"}</div>
                    </div>
                   
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={bed.bed2}
                        onClick={(e)=>setBed({...bed,bed2:!bed.bed2})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"2 Bedrooms"}</div>
                    </div>
                   
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={bed.bed3}
                        onClick={(e)=>setBed({...bed,bed3:!bed.bed3})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"3 Bedrooms"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={bed.bed4}
                        onClick={(e)=>setBed({...bed,bed4:!bed.bed4})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"4 Bedrooms"}</div>
                    </div>

                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={bed.bed5}
                        onClick={(e)=>setBed({...bed,bed5:!bed.bed5})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"5 Bedrooms"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={bed.bed6}
                        onClick={(e)=>setBed({...bed,bed6:!bed.bed6})}
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
    bath:!lvl.bath,
    bank:false})}}>
                    Bathrooms
                  </button>
                 {lvl.bath    &&<div className="flex flex-col hover:flex">
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={bath.all}
                        onClick={(e)=>setBath({...bath,all:!bath.all})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>All</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={bath.bath0}
                        onClick={(e)=>setBath({...bath,bath0:!bath.bath0})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"0 Bathrooms"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={bath.bath1}
                        onClick={(e)=>setBath({...bath,bath1:!bath.bath1})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"1 Bathroom"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={bath.bath2}
                        onClick={(e)=>setBath({...bath,bath2:!bath.bath2})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"2 Bathrooms"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={bath.bath3}
                        onClick={(e)=>setBath({...bath,bath3:!bath.bath3})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"3 Bathrooms"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={bath.bath4}
                        onClick={(e)=>setBath({...bath,bath4:!bath.bath4})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"4 Bathrooms"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={bath.bath5}
                        onClick={(e)=>setBath({...bath,bath5:!bath.bath5})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"5+ Bathrooms"}</div>
                    </div>
                  </div>}
                </div>
                <div className="w-full flex flex-col px-3 font-Montserrat">
                  <button className="w-full bg-custom-yellow rounded text-white pt-1 peer flex justify-start px-2"  onClick={()=>{ setLvl({home:false,
    list:false,
    sold:false,
    market:false,
    living:false,
    bedroom:false,
    bath:false,
    bank:!lvl.bank})}}>
                    Bank-Mediated
                  </button>
                  {lvl.bank &&<div className="flex flex-col hover:flex">
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={bank.all}
                        onClick={(e)=>setBank({...bank,all:!bank.all})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>All</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={bank.BankMediated}
                        onClick={(e)=>setBank({...bank,BankMediated:!bank.BankMediated})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"All Bank-Mediated"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={bank.Foreclosures}
                        onClick={(e)=>setBank({...bank,Foreclosures:!bank.Foreclosures})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"Foreclosures (REO)"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={bank.ShortSales}
                        onClick={(e)=>setBank({...bank,ShortSales:!bank.ShortSales})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"Short Sales"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={bank.NonBankMediated}
                        onClick={(e)=>setBank({...bank,NonBankMediated:!bank.NonBankMediated})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"Non-Bank-Mediated"}</div>
                    </div>
                  </div>}
                </div>
              </div>
            </div>
            <div className="sm:w-10/12 flex sm:flex-row flex-col sm:space-y-0 space-y-3  w-full justify-between   bg-custom-light-yellow py-3 px-2 rounded-lg rounded-t-none">
         
              <div className="sm:flex sm:flex-row flex-col sm:space-x-10 space-x-0 sm:space-y-0 space-y-2 sm:justify-start items-center sm:w-auto w-full">
                <div className="flex sm:auto w-full sm:justify-start justify-center">
                  <div className="px-3 py-1 rounded-md  rounded-r-none bg-custom-yellow text-white flex items-center">
                    Show
                  </div>
                  <select
                    className="  z-10  flex-col  bg-gray-100  text-black flex  rounded  px-4 py-2"
                    onChange={async(e) =>await handleYearChange(e)}
                  >
                    <option
                      value={1}
                      selected={val==="1"}
                      className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded w-64"
                    >
                      One Month
                    </option>
                    <option
                      value={3}
                      selected={val==="3"}
                      className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded w-64"
                    >
                      Three Months
                    </option>
                    <option
                      value={6}
                      selected={val==="6"}
                      className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded w-64"
                    >
                      Six Months
                    </option>
                    <option
                      value={12}
                      selected={val==="12"}
                      className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded w-64"
                    >
                      1 year
                    </option>
                    <option
                    value={24}
                      selected={val==="24"}
                      className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded w-64"
                    >
                      2 years
                    </option>
                    <option
                    value={36}
                      selected={val==="36"}
                      className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded w-64"
                    >
                      3 years
                    </option>
                    <option
                       value={48}
                       selected={val==="48"}
                      className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded w-64"
                    >
                      4 years
                    </option>
                    <option
                        value={60}
                        selected={val==="60"}
                      className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded w-64"
                    >
                      5 years
                    </option>
                    <option
                       value={72}
                       selected={val==="72"}
                      className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded w-64"
                    >
                      6 years
                    </option>
                    <option
                       value={84}
                       selected={val==="84"}
                      className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded w-64"
                    >
                      7 years
                    </option>
                    <option
                      v value={96}
                      selected={val==="96"}
                      className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded w-64"
                    >
                      8 years
                    </option>
                    <option
                       value={108}
                       selected={val==="108"}
                      className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded w-64"
                    >
                      9 years
                    </option>
                    <option
                       value={120}
                       selected={val==="120"}
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
                        onClick={(e)=>setList({...list,all:!list.all})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2 accent-[#FFA921]"
                      />
                      <div>All</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={list.u50k}
                        onClick={(e)=>setList({...list,u50k:!list.u50k})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2 accent-[#dc2626]"
                      />
                      <div>{"< $50000"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                      checked={list.m50kto100k}
                      onClick={(e)=>setList({...list,m50kto100k:!list.m50kto100k})}
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2 accent-[#ea580c]"
                      />
                      <div>{"$50K to $99,999"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                      checked={list.m100kto150k}
                      onClick={(e)=>setList({...list,m100kto150k:!list.m100kto150k})}
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2 accent-[#4ade80]"
                      />
                      <div>{"$100K to $149,999"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                      checked={list.m150kto200k}
                      onClick={(e)=>setList({...list,m150kto200k:!list.m150kto200k})}
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"$150K to $199,999"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                      checked={list.m200kto300k}
                      onClick={(e)=>setList({...list,m200kto300k:!list.m200kto300k})}
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2 accent-[#1e3a8a]"
                      />
                      <div>{"$200K to $299,999"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                      checked={list.m300kto400k}
                      onClick={(e)=>setList({...list,m300kto400k:!list.m300kto400k})}
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2 accent-slate-600"
                      />
                      <div>{"$300K to $399,999"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                      checked={list.m400kto500k}
                      onClick={(e)=>setList({...list,m400kto500k:!list.m400kto500k})}
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2 accent-[#d97706]"
                      />
                      <div>{"$400K to $499,999"}</div>
                    </div>

                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                      checked={list.m500kto600k}
                      onClick={(e)=>setList({...list,m500kto600k:!list.m500kto600k})}
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2 accent-[#059669]"
                      />
                      <div>{"$500K to $599,999"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                      checked={list.m600kto800k}
                      onClick={(e)=>setList({...list,m600kto800k:!list.m600kto800k})}
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2 accent-[#0d9488]"
                      />
                      <div>{"$600K to $799,999"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                      checked={list.m800kto1000k}
                      onClick={(e)=>setList({...list,m800kto1000k:!list.m800kto1000k})}
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2 accent-[#0284c7]"
                      />
                      <div>{"$800K to $999,999"}</div>
                    </div>

                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                      checked={list.m1000kto2500k}
                      onClick={(e)=>setList({...list,m1000kto2500k:!list.m1000kto2500k})}
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"$1M to $2,499,999"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                      checked={list.m2500kto5000k}
                      onClick={(e)=>setList({...list,m2500kto5000k:!list.m2500kto5000k})}
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"$2.5M to $4,999,999"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                      checked={list.a5000k}
                      onClick={(e)=>setList({...list,a5000k:!list.a5000k})}
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
                        checked={sold.all}
                        onClick={(e)=>setSold({...sold,all:!sold.all})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>All</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={sold.u50k}
                        onClick={(e)=>setSold({...sold,u50k:!sold.u50k})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"< $50000"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                      checked={sold.m50kto100k}
                      onClick={(e)=>setSold({...sold,m50kto100k:!sold.m50kto100k})}
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"$50K to $99,999"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                      checked={sold.m100kto150k}
                      onClick={(e)=>setSold({...sold,m100kto150k:!sold.m100kto150k})}
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"$100K to $149,999"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                      checked={sold.m150kto200k}
                      onClick={(e)=>setSold({...sold,m150kto200k:!sold.m150kto200k})}
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"$150K to $199,999"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                      checked={sold.m200kto300k}
                      onClick={(e)=>setSold({...sold,m200kto300k:!sold.m200kto300k})}
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"$200K to $299,999"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                      checked={sold.m300kto400k}
                      onClick={(e)=>setSold({...sold,m300kto400k:!sold.m300kto400k})}
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"$300K to $399,999"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                      checked={sold.m400kto500k}
                      onClick={(e)=>setSold({...sold,m400kto500k:!sold.m400kto500k})}
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"$400K to $499,999"}</div>
                    </div>

                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                      checked={sold.m500kto600k}
                      onClick={(e)=>setSold({...sold,m500kto600k:!sold.m500kto600k})}
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"$500K to $599,999"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                      checked={sold.m600kto800k}
                      onClick={(e)=>setSold({...sold,m600kto800k:!sold.m600kto800k})}
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"$600K to $799,999"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                      checked={sold.m800kto1000k}
                      onClick={(e)=>setSold({...sold,m800kto1000k:!sold.m800kto1000k})}
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"$800K to $999,999"}</div>
                    </div>

                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                      checked={sold.m1000kto2500k}
                      onClick={(e)=>setSold({...sold,m1000kto2500k:!sold.m1000kto2500k})}
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"$1M to $2,499,999"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                      checked={sold.m2500kto5000k}
                      onClick={(e)=>setSold({...sold,m2500kto5000k:!sold.m2500kto5000k})}
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"$2.5M to $4,999,999"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                      checked={sold.a5000k}
                      onClick={(e)=>setSold({...sold,a5000k:!sold.a5000k})}
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
                        checked={days.all}
                        onClick={(e)=>setDays({...days,all:!days.all})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>All</div>
                    </div>
                    
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                       checked={days.day0}
                       onClick={(e)=>setDays({...days,day0:!days.day0})}
                        type="checkbox"
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"0 Days"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={days.day10}
                       onClick={(e)=>setDays({...days,day10:!days.day10})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"1 to 10 Days"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={days.day20}
                       onClick={(e)=>setDays({...days,day20:!days.day20})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"11 to 20 Days"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={days.day30}
                       onClick={(e)=>setDays({...days,day30:!days.day30})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"21 to 30 Days"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={days.day60}
                       onClick={(e)=>setDays({...days,day60:!days.day60})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"31 to 60 Days"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={days.day90}
                       onClick={(e)=>setDays({...days,day90:!days.day90})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"61 to 90 Days"}</div>
                    </div>

                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={days.day120}
                       onClick={(e)=>setDays({...days,day120:!days.day120})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"91 to 120 Days"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={days.day180}
                       onClick={(e)=>setDays({...days,day180:!days.day180})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"121 to 180 Days"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={days.day360}
                       onClick={(e)=>setDays({...days,day360:!days.day360})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"181 to 360 Days"}</div>
                    </div>

                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={days.day720}
                       onClick={(e)=>setDays({...days,day720:!days.day720})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"361 to 720 Days"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={days.day721}
                       onClick={(e)=>setDays({...days,day721:!days.day721})}
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
    living:!lvl.living,
    bedroom:false,
    bath:false,
    bank:false})}}>
                    Living Area SqFt
                  </button>
                  {lvl.living &&<div className=" flex-col hover:flex">
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={living.all}
                        onClick={(e)=>setLiving({...living,all:!living.all})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>All</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={living.sqft800}
                        onClick={(e)=>setLiving({...living,sqft800:!living.sqft800})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"< 800 SqFt"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={living.sqft999}
                        onClick={(e)=>setLiving({...living,sqft999:!living.sqft999})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"800 to 999 SqFt"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={living.sqft1199}
                        onClick={(e)=>setLiving({...living,sqft1199:!living.sqft1199})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"1,000 to 1,199 SqFt"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={living.sqft1399}
                        onClick={(e)=>setLiving({...living,sqft1399:!living.sqft1399})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"1,200 to 1,399 SqFt"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={living.sqft1599}
                        onClick={(e)=>setLiving({...living,sqft1599:!living.sqft1599})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"1,400 to 1,599 SqFt"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={living.sqft1799}
                        onClick={(e)=>setLiving({...living,sqft1799:!living.sqft1799})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"1,600 to 1,799 SqFt"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={living.sqft1999}
                        onClick={(e)=>setLiving({...living,sqft1999:!living.sqft1999})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"1,800 to 1,999 SqFt"}</div>
                    </div>

                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={living.sqft2499}
                        onClick={(e)=>setLiving({...living,sqft2499:!living.sqft2499})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"2,000 to 2,499 SqFt"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={living.sqft2999}
                        onClick={(e)=>setLiving({...living,sqft2999:!living.sqft2999})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"2,500 to 2,999 SqFt"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={living.sqft4000}
                        onClick={(e)=>setLiving({...living,sqft4000:!living.sqft4000})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"3,000 to 4,000 SqFt"}</div>
                    </div>

                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={living.sqft4999}
                        onClick={(e)=>setLiving({...living,sqft4999:!living.sqft4999})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"4,000 to 4,999 SqFt"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={living.sqft5000}
                        onClick={(e)=>setLiving({...living,sqft5000:!living.sqft5000})}
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
    bedroom:!lvl.bedroom,
    bath:false,
    bank:false})}}>
                    Bedrooms
                  </button>
                  {lvl.bedroom &&<div className="flex  flex-col hover:flex">
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={bed.all}
                        onClick={(e)=>setBed({...bed,all:!bed.all})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>All</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={bed.bed0}
                        onClick={(e)=>setBed({...bed,bed0:!bed.bed0})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"0 Bedrooms"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={bed.bed1}
                        onClick={(e)=>setBed({...bed,bed1:!bed.bed1})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"1 Bedroom"}</div>
                    </div>
                   
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={bed.bed2}
                        onClick={(e)=>setBed({...bed,bed2:!bed.bed2})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"2 Bedrooms"}</div>
                    </div>
                   
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={bed.bed3}
                        onClick={(e)=>setBed({...bed,bed3:!bed.bed3})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"3 Bedrooms"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={bed.bed4}
                        onClick={(e)=>setBed({...bed,bed4:!bed.bed4})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"4 Bedrooms"}</div>
                    </div>

                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={bed.bed5}
                        onClick={(e)=>setBed({...bed,bed5:!bed.bed5})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"5 Bedrooms"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={bed.bed6}
                        onClick={(e)=>setBed({...bed,bed6:!bed.bed6})}
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
    bath:!lvl.bath,
    bank:false})}}>
                    Bathrooms
                  </button>
                 {lvl.bath    &&<div className="flex flex-col hover:flex">
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={bath.all}
                        onClick={(e)=>setBath({...bath,all:!bath.all})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>All</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={bath.bath0}
                        onClick={(e)=>setBath({...bath,bath0:!bath.bath0})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"0 Bathrooms"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={bath.bath1}
                        onClick={(e)=>setBath({...bath,bath1:!bath.bath1})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"1 Bathroom"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={bath.bath2}
                        onClick={(e)=>setBath({...bath,bath2:!bath.bath2})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"2 Bathrooms"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={bath.bath3}
                        onClick={(e)=>setBath({...bath,bath3:!bath.bath3})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"3 Bathrooms"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={bath.bath4}
                        onClick={(e)=>setBath({...bath,bath4:!bath.bath4})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"4 Bathrooms"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={bath.bath5}
                        onClick={(e)=>setBath({...bath,bath5:!bath.bath5})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"5+ Bathrooms"}</div>
                    </div>
                  </div>}
                </div>
                <div className="w-full flex flex-col px-3 font-Montserrat">
                  <button className="w-full bg-custom-yellow rounded text-white pt-1 peer flex justify-start px-2"  onClick={()=>{ setLvl({home:false,
    list:false,
    sold:false,
    market:false,
    living:false,
    bedroom:false,
    bath:false,
    bank:!lvl.bank})}}>
                    Bank-Mediated
                  </button>
                  {lvl.bank &&<div className="flex flex-col hover:flex">
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={bank.all}
                        onClick={(e)=>setBank({...bank,all:!bank.all})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>All</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={bank.BankMediated}
                        onClick={(e)=>setBank({...bank,BankMediated:!bank.BankMediated})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"All Bank-Mediated"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={bank.Foreclosures}
                        onClick={(e)=>setBank({...bank,Foreclosures:!bank.Foreclosures})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"Foreclosures (REO)"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={bank.ShortSales}
                        onClick={(e)=>setBank({...bank,ShortSales:!bank.ShortSales})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"Short Sales"}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                      <input
                        type="checkbox"
                        checked={bank.NonBankMediated}
                        onClick={(e)=>setBank({...bank,NonBankMediated:!bank.NonBankMediated})}
                        className=" indeterminate:bg-gray-300 border-2 mr-2"
                      />
                      <div>{"Non-Bank-Mediated"}</div>
                    </div>
                  </div>}
                </div>
              </div>
            </div>
       <div className="w-full relative px-3 h-full ">
            <div className="w-full text-center font-header md:text-4xl text-2xl my-8">
            Blogs
            </div>
            <CenterMode/>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                  </p> 
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
            
                </div>
              </Link>
            </div> */}
          </div>
     </div>
     </div>
     
   )}</>
  )
                }

 export default Timingthemarket;
