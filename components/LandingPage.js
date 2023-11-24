import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useRouter } from "next/router";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";
import Testimonials from "./Testimonials";
import MainHeader from "./MainHeader";
import Videosection from "./Videosection";
import { data } from "autoprefixer";

const moreResourceData = [
  {ref:"/roi" , title : "ROI Calculator", src : "/ROI.jpg",desc:`
  ROI can be used to compare the profitability of different investments. For example, if you invest $1,000 in a stock that goes up 20% in value, your ROI would be 20%. If you invest $1,000 in a bond that pays 5% interest, your ROI would be 5%
  `},
  {ref:"/timingthemarket?db=main&val=12" , title : "Timing the Market",src : "/TTM.jpg",desc:`
  If you are a long-term investor, the best thing you can do is to invest in property in a desirable location and hold on to it for the long term. This will help you to ride out the ups and downs of the market and maximize your chances of success.
`},
  {ref:"/rentvssale" , title : "Rent vs Sell",src : "/RVS.jpg",

desc:`

Deciding whether to rent or sell your real estate property is a significant financial decision that depends on various factors and circumstances. Both options offer distinct advantages and disadvantages, and the optimal choice hinges on your individual goals and preferences
`},
  {ref:"/" , title : "Additional Resources",src : "/ROI.jpg",desc:`
  Explore a variety of helpful resources to gain a comprehensive understanding of real estate. Learn about market trends, property valuation, financing options, and investment strategies. Enhance your knowledge and make informed decisions.
  `}
]

function LandingPage() {
  /*Form value */
  const [location, setLoaction] = useState("");
  const router = useRouter();
  // const settings = {
  //   dots: true,
  //   // infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };

  /*Form Submit */
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <>
        <div className="w-full flex h-full  flex-col">
          <MainHeader page={"landing"}></MainHeader>
          <div className="w-full flex justify-center flex-col items-center  px-3 sm:px-16">

          <div className="text-2xl md:text-5xl  text-center font-header font-normal   leading-tight md:leading-normal">
                Find Out What Your Home Is
                <span className="text-custom-yellow mx-3">Really</span>
                Worth
              </div>
              <div className="font-header text-sm md:text-xl mt-2 text-center tracking-wider font-semibold w-full  ">
                The Most Accurate Home Valuation Tool Available To The Public
              </div>
              </div>
          {/* Property Image section */}
          <div className="w-full h-[50vh] md:h-[75vh] flex justify-center items-center mb-12  px-3 sm:px-4">
      
            <div className="w-full md:w-[70%] relative h-[50vh] md:h-[65vh]">
              <Image
                alt="..."
                fill
                quality={100}
                placeholder="blur"
                blurDataURL={"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAH9AqYDASIAAhEBAxEB/8QAGQABAQEBAQEAAAAAAAAAAAAAAAIBAwQG/8QAHBABAQEBAQEBAQEAAAAAAAAAAAERAhIDEzFR/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECAwQF/8QAGxEBAQEBAQEBAQAAAAAAAAAAAAERAhIxIVH/2gAMAwEAAhEDEQA/APrAG3nAAGsAa1gDWsBWgA1rGigCDRjRQAGjGisAQGNYAxrBRgwGVlaygypqqmisqa2soJqaqpoJqaqpqCKmqqaImoqqmgioq6igmoq6iqIqaqpoiKmqqaCaiqqaImpqqmgmsbWKjGNYDAAAAa1jQa1gKqNjI2AqNiYqCtiolUBsaxorWsbAa1jQaADQBQAH04CuI1gDRjQaMAa1gK1rAFDGijWCDWsBWjAGgCgMQAYDWDBRgwCsoygysramisqaqpoJqaqpoJqaqpoJqa2pqImoq6igmoqqigmpqqiqJqKuooiaiqqaCairqKImsramgypbWKjGNYAMAaMAa1jQa1jRWxUTGwFNjGwVUbExUBqktFU1LYCmsAa1gK1rAGjAH04wVxaMaDRgDWpaK1qWg1qWg1rAVrUtQaMBWtYA0YCtYMQaMBQYAMGAVNbU0Uqa2poFTW1NBlTW1NQZU1tTQZUVVRVGVFVU1ETUVVRQTU1tTVE1FVUURlRVVFBlRVVNETU1tZQZU1tYqMY1gAwBowBrUtBTYlsFVFRMbAVGxMVBVRsTGgprGiqjUxoKaloNalorRjQaMAfTDBXFowBQzQGtS0VrU60GtS0VrU61BrUtBozTRWtS0GjNNRWsZpoNGaaKDNZoNYzWaBWUrLRSprbU0CppWVBlTW1NBlTW2poMqK21NBlTW2otVGVFVUUE1NbU0E1NbUURlRVVFBlTW1NETWUrKDKylZVQYwAGGg0YA1qWgpsS0VcamNgqlRCoCo1MbBVtiFQFRqWgpqWitaloNaloNGAPptE6arirTU6aCtanTRVaazTQVonW6CjU63RVaanW6grTU63RW63U6aCjWaaK3TWaag3TU6aKrWazWaDdNZrNBus1ms0VtqbTWaBay0tTaBay0tTagWppam0C1FrbU2gy1NrbUWgy1NrbUWqMtTW2otEZai1tqbQZaittTaDKi1tqLRC1Fbam0RlTW2ptAtTpay1Q1mms0Rus1mmg01mmgrW6nW6KrWo1soLipUa3RVxsRKqUF63UaqUVUVERugvW6jW6KvROtBTUt0GtTpoK0ToD6XTWaarkrTU6aCtbqNboK01OmgvTU6aKvTU6agvTU6aCtbqdNFVrdRrdBWmp00VWmp01BWmp1miq1ms00G6zWazRVanTWaBrNNTaDbWWstZaBam0tTaDbU2lqbUC1FrbUWgWptLU2gy1Npam0GWptLU2qMtRa21Fohai1tqLQLUWttRaIy1NrbUWgWptLWWiMtZaWp1Rus1ms0Rums1mgrTU6aC9bqNboq9bKjWygvWyo1Uoq5WyolVKKuVsqJVSguVuo1uir1uolboL1uo1ugvTU6aCtbqdNBWidAfS6anTVclaanTQVrdRrdBWt1Gt0VWmp01Bemp00F6anTRVa3Ua3QVrdRpoq9NRpqC9NTrNFXrNTpoK01Os0FazWazRW6anWaDdZazWWg21Npam0G2ptLU2oFqbS1Nopam0tTaIWptLU2gy1Npam0GWptLU2qMtRa21Fohai1tqLQLUWttRaIWotbai0C1lrLU2iNtTaWptUbrNZrNEbpqdNBWt1GmgvW6jW6KuVuolboq5VSucqpQXKqVzlVKKuVUrnqtBetlRK2UVcqtc9bqC9bqNboq9NTpoL01OmgrROgPpNNTprTivTU6aCtbqNNFXpqNbqCtbqNNBet1Gmir01OmgvTU6aKvTUaaC9NTpqKrTUaaC9NRpoK01Os0VWs1ms0FazU6zQVrLU2s0VtrLWWptQbay1lqbQbam1lqbQbam1lqbQLU2lqbQLU2stTaqFqLS1NoFqLS1NoFqLS1Foham0tRaIWptLUWg21NrLU2qjbU2lqbQbrNTpoitZqdNBWt1Gmiummo1soOmt1z1sorpKrXOVsorpKqVzlbKDprZXOVUqK6St1zlVoL1uo1uir1uo1ugrW6jW6C9NRpoL0ToD6TTUaarkvTUa3QVrdRpoL01Gt0F6ajTRV63UaaC9bqNNFXpqNboL01Gmoq9NRpoL01Gmir1mp1mgvWanTQVrNTrNFXrNTrNBustTrLQVam1lrLUG2ptZam0FWptZam0G2ptZam0C1Npai0G2otLU2qFqLS1FojbUWlqLQLU2lqLRC1Fpam0C1NrLU2iFqbWWptVFWptTam0FazU6zRF6ajWaDpprnrdFdNbrnrdB01UrlK3RXWVsrnKqUV0lbK5ytlRXWVsrnK2UHXWyucrZRXSVuuet0HTW6563RXTTUa3QXpqNNBeiNAfS6ajTVcV6ajTQXpqNboq9NRpoL01Gt0F6ajTRXTTUaaC9brnrdRV6ajTQXpqNNFXpqNNBemo00FaajWaKvWanWaC9ZqNZqCtZanWWgq1lqbWWittTay1NoKtTay1NoNtTay1NojbUWlqLQbam1lqLVG2ptZai0G2otLUWiNtRay1NoFqLS1FojbUWlqLVRtqbU2pvQirU2pvSb0CrWekXpnoR09Hpy9HpR101y9N9IrrK3XKdNnQrtK2VynTZRXaVsrlOmyortK2VylVKK6ytlc5Wyg6yt1zlbKK6arXLW6g66a563QdNbrnporppqNNBeiNAfS6ajTWnFemo00F63XPTQdNNRpoOmmo00Vemo01B001Gmir01Gmg6aajTRV6ajTQXpqNZorprNRpoL1mo01Bes1Gs0Ves1Os0Fay1Op0F2ptTay0FWptTay0G2ptZam0G2ptZam0G2ptZam0G2otZam1RtqLWWptELU2stRaDbUWstRaI21FrL0i9CKvSL0m9IvSir0i9JvSL0MrvSb053pN7VHS9M9ON7ZexNdvR6cPbPYmvR6b6ef22djUr0Tps6cJ2qdI1HedKnThOlToV3nSp04TpU6Rp2lVOnGdKnQrtK2VynTZ0g7StlcpVSiuut1ynTfQOut1y1uiuumuet0HTTXPTUHTRz0UfTaajTWnBemo00F63XPTRXTTUaagvTUaaDppqNNFXrdc9NB001Gmir01GmgvTUaaKvTUaagvWajTRV6zUaaC9ZqNNBWs1Os0VWstRrLQXam1NrLQVam1NqbQVay1NqbQVai1lqbQbam1lqLQVai1l6RelRtqb0y9ItBt6Ray9IvQjb0i9MvTnegVekXpN6c+ulRV6Rek9dOXXYlXekddufXbl12uMV1vaL05XtF+inm12vTL24Xus9VNanDv7Z7cNNTV8O/tvt59Npp4emdrn0eT1W+6aeXsna528U+li+fqjUj2ztU6eXn6LnaLj1TpU6eadrnYuPROlTp550udIuO86bOnGdNnQuO86b6cZ02dBjt6b6cvTfQY6+m+nH030GOvo1z9HoXHX0OXoDH1GmuemtPO6aajTQXpqNNBemo00V001GmgvTUaaDpprnrdFXpqNNB01mo00Vemo01Bemo1miums1GmgvWajWaK6azUazQXrNR6Z6BestRemWgq1l6Ray0VV6ZekWstBV6Tek2ptBV6Tek2ptBV6RemXpFoKvSLWXpF6VG3pF6ZekXoG3pF6TekXoFddOfXSeunPrtUV1059do67ce/pio6dduPX0cuvpa526vxnNdOvoi9WpGb01IaAzqgAAAAAAAAANnVi53XMlFlejn6unP0eWVUrLpMr2T6LnbxTqxc+lhrXl7J2qdPJPqufRNPL1TpU6eafRU7NTHonTfThO2zs0x39N9OHtvo0x39Hpx9Ho0x29Dj6DTH1mmo010eVemo00Vet1z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"}
                src={"/House 1.png"}
                className="object-cover object-center mb-3"
              />
            </div>
          </div>

          {/* Location section */}
          <div className="h-full  flex justify-center items-center sm:px-16 px-3 py-12 w-full text-center">
            <div className="w-full md:w-[70%] h-full space-y-10 md:space-y-7">
              {/* <div className="md:text-5xl text-[40px] font-header font-normal   leading-tight md:leading-normal">
                Find Out What Your Home Is
                <span className="text-custom-yellow mx-3">Really</span>
                Worth
              </div>
              <div className="font-header text-sm md:text-xl tracking-wider font-semibold w-full  ">
                The Most Accurate Home Valuation Tool Available To The Public
              </div> */}
              <form
                className=" md:pt-5 relative"
                onSubmit={(e) => handleSubmit(e)}
              >
                <input
                  type="text"
                  className="w-full sm:w-[80%] mb-2 rounded-lg border-2 text-lg border-custom-yellow p-2 md:py-4 md:px-6 text-gray-900 placeholder:text-custom-grey placeholder:leading-tight placeholder:text-sm md:placeholder:text-base focus:outline-none focus:border-2 focus:border-primaryblue shadow-md"
                  placeholder="Search Zipcode, Address, Location "
                  value={location}
                  onChange={(e) => setLoaction(e.target.value)}
                />
                <button
                  type="submit"
                  className="absolute right-2 sm:right-[72px] lg:right-28 top-1 md:top-7 bg-custom-yellow rounded-3xl p-2.5 hover:bg-opacity-90"
                >
                  <FiSearch className="text-lg md:text-2xl text-white font-bold" />
                </button>
              </form>
              <div className="border-2 relative rounded-lg border-custom-yellow h-32 md:h-40 lg:h-48 shadow-md w-[95%] sm:w-[80%] ml-3 sm:ml-11 lg:ml-24">
                <div className=" w-full space-y-3 bg-custom-light-yellow absolute h-auto md:h-40 lg:h-48 right-4 top-4 rounded-lg py-5 px-4 shadow-sm shadow-custom-light-yellow">
                  <p className="text-custom-yellow md:text-[22px] text-base flex justify-end  font-header text-right px-3">
                    Unlock the true value of your home with just one click
                  </p>

                  <div className="w-full flex justify-end pr-3">
                    <Link
                      href=""
                      className="flex justify-between items-center font-header font-semibold space-x-5 md:pr-3 pr-1 border-2 rounded-full border-gray-900 py-2 px-5 text-sm"
                    >
                      <button onClick={()=>   router.push("/dashboard")}> Discover More</button>{" "}
                      <AiOutlineArrowRight></AiOutlineArrowRight>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Video section */}
          {/* <Videosection/> */}

          {/* Content section */}
          <section className="h-full md:h-[45vh] w-full md:px-12 px-3 py-12">
            <div className="flex flex-col justify-center items-center gap-6 rounded-lg shadow-lg shadow-custom-light-yellow py-11 px-[8.333%] md:px-6  h-full w-full">
              <h3 className="w-full text-center font-header md:text-4xl text-2xl">
                What makes a Lotuss estimate different ?{" "}
              </h3>
              <p className="font-Montserrat text-center w-full md:w-[80%]">
                Unlike other online home valuation sites, Lotuss uses the
                information only real estate agents and appraisers use: real
                time market data, accurate comps, off-market sales, and even
                lets you select and remove comparable listings, resulting in the
                most accurate home value available to the public. Whether you
                are ready to sell or just curious about the true value of your
                home in today’s market, Lotuss provides the most accurate idea
                of what your pad is worth.
              </p>
            </div>
          </section>

          {/* More resources section */}
          <div className="w-full relative px-3 h-full py-12">
            {/* <div className="w-full absolute bottom-10 h-32 bg-custom-yellow -z-50 -mx-10 md:block hidden"></div>
            <div className="w-full absolute top-52 h-24 bg-custom-light-yellow -z-50 mx-10 md:block hidden"></div> */}
            <div className="w-full text-center font-header md:text-4xl text-2xl my-8">
              More Resources
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {moreResourceData.map((data,idx) => (
              <Link
                href={data.ref}
                className="shadow-md shadow-custom-light-yellow rounded-lg bg-white "
                key={idx}
              >
                <div className="text-center md:text-left p-8 space-y-3">
                  <h3 className="w-full text-custom-yellow text-2xl font-header hover:underline hover:decoration-4 hover:decoration-custom-light-yellow">

                    {data.title}
                  </h3>
                  <p className="font-Montserrat break-words md w-full md:w-[75%] mx-auto md:mx-0">
                {data.desc}
                  </p>
                </div>
                <div className="h-[500px] w-full relative">
                  <Image
                    alt="..."
                    fill
                    quality={100}
                    src={data.src}
                    className="object-cover object-bottom rounded-b-md"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCABxAHEDASIAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAAAwQAAQUCBv/EACMQAQACAgMAAwACAwAAAAAAAAABAgMRBCExBRJBIlETYXH/xAAaAQADAQEBAQAAAAAAAAAAAAABAgMABAUG/8QAHREBAQEBAAMBAQEAAAAAAAAAAAECEQMSIRMxQf/aAAwDAQACEQMRAD8A9Wp0p8/Yq5kOwkhXlx7nKfLiznarWcfYZDUeotQKWHoEn0K7WpbpkIpzd24uFgwvkAsNkAtKXOU6kVtBZrItHdcouJ8L5Z0Yv4Tz2c28dUyDe7iLhZMgcZOyzHwaepY3jlm4r7k7isOcf6xqHTisu1plOqDuJIVx9TQvkLWkxkkreS3x9N1No52hfyrdbqLR33KIOTxn8m3p/NPUsnlW9TmOqT+Es2TUgxm79B5WXW+ydeRu3o/hQ63MGTbRw3YfGy701ePfwfy43WnSehYkvisNEl9Rq5CyT0JMgZJH1aF8slbyPlkpex5hur+yB/ZB9A69OqVpKtiZXkT1LF5lvWxyZ6lh86epHGT2vP8AyWeab17LKpmvW297M/JW3n1/RN6ePHJlK6eg4Gb71iW7xrePLfFX/P6l6Tiz1Dk8vj5TytfFPRis9FMM9Gaz05Lk/XVpAySLaQMktMt0rlkneezOaSeSe1s5DqbRxtDeodevVPi1T4SwpLk+Sw+d5Lc5P6xeZG4lTxwbXkvkI1yN/wCijS+SxT9vtDO09TH3MR6f+Lj+U/8AXpeL5DA+Nx/WHoONHUOTz/abFaeHwzWSuIzVx2KddWkvkka0gZAkHpTMTyem8pS/q2YW0NEQ/A69iqfHTmfEKxPkfrI5Vd7bGePWZya+ny1ee5mH7bZ0cf8An43c+Peyv+Lt153yOfU+r4mL6xDW48eE8FNNDDCO71XPw5iHqDjGhCqJYDIPYDI0AplK3g3kK3hSFtD0jrSGDr1yp8WqfEacpmZ2ePWlmZ+YY1ZuaoH07N5YB12pKnXWKpzFBbHBvEW0YZoLAdBIIZVgbjWBuMYtkLXgzkL2PCVxpFoIPVqnxESqpXMQzIjRqRyg/qIonRcZvGiFowzQSEQplSDdEGNS2QvZEPCVyiIIP//Z"
                  />
                </div>
              </Link>
              ))}
            </div>
          </div>

          {/* Blogs*/}
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

          {/* Testimonial section */}
          {/* <Testimonials></Testimonials> */}

          {/* Footer section */}
          <div className="mt-24 w-full border-t-2 border-custom-yellow py-5">
            <div className="flex w-full justify-center space-x-5">
              <Link href="https://www.instagram.com/" target="blank">
                <BsInstagram className="text-3xl text-custom-yellow"></BsInstagram>
              </Link>
              <Link href="https://twitter.com/" target="blank">
                <AiFillTwitterCircle className="text-3xl text-custom-yellow"></AiFillTwitterCircle>
              </Link>
              <Link href="https://www.facebook.com/" target="blank">
                <BiLogoFacebook className="text-3xl text-custom-yellow"></BiLogoFacebook>
              </Link>
            </div>
            <div className="flex w-full justify-center font-Montserrat mt-4 font-medium">
              &copy; All Copyrights Reserved
            </div>
          </div>
        </div>
    </>
  );
}

export default LandingPage;
