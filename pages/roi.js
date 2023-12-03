import React, { useState } from "react";
import MainHeader from "../components/MainHeader";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import CategoryDropdown from "../components/Categorydropdown";
import FeatureTable from "../components/Featuretable";
import { FeatureChart } from "../components/FeatureChart";
import CenterMode from "../components/CenterSlider";

// import Chatbot from "../components/Chatbot";
function Roi() {
  const houseData = {
    house: "20 S Huntington Ave",
    value: 2732900,
    decription: "2BHK , 1 Bath",
    location: "Boston",
    houseNo: "MA - 02446",
    estimate: 2732900,
    avergae: 2342900,
    sales: 7,
  };
  const data = [
    {
      title: "MOST VALUABLE",
      propties: [
        "Stainless Steel Appliances",
        "Natural Gas Utilities",
        "Backyard",
        "Basement",
        "Vinyl Sliding",
      ],
    },
    {
      title: "MOST POPULAR",
      propties: ["Office", "Fireplace", "Deck", "Family Room", "View"],
    },
  ];
const listData=[
  { value: "Floorings", label: "Floorings",featured:[
    { value: "New Carpet", label: "New Carpet" },
    { value: "New Hardwood", label: "New Hardwood" },
    { value: "New Vinyl", label: "New Vinyl" },
  ] },
  { value: "Exterior features", label: "Exterior features",featured:[
    { value: "HVAC replacement", label: "HVAC replacement" },
    { value: "Deck replacement", label: "Deck replacement" },
    { value: "Window replacement", label: "Window replacement" },
    { value: "Roof replacement", label: "Roof replacement" },
    { value: "New exterior siding and trim", label: "New exterior siding and trim" }

  ] },
  { value: "Interior features", label: "Interior features",featured:[
    { value: "Replace lighting throughout", label: "Replace lighting throughout" },
    { value: "Replace hardware throughout", label: "Replace hardware throughout" },
    { value: "Replace electric throughout", label: "Replace electric throughout" },
    { value: "Created home office space", label: "Created home office space" }
  ] },
  { value: "Kitchen", label: "Kitchen",featured:[
    { value: "Complete remodel", label: "Complete remodel" },
    { value: "Light renovations", label: "Light renovations" },
    { value: "Minor fixes", label: "Minor fixes" },
  ] }

]

const rows = [
  {
    key: "1",
    feature: "Hot Tub",
    withAddedImprovements: "$1,834,230",
    rate: "+78K",
  },
  {
    key: "2",
    feature: "Storage Unit",
    withAddedImprovements: "$1,834,230",
    rate: "+64.5k",
  },
];

  // const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { data: session, status } = useSession();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(new Set([]));
  const [feature, setFeature] = useState(new Set([]));


  const [isOpen, setIsOpen] = useState(false);
  const [estimate, setEstimate] = useState([]);
  const [property, setProperty] = useState("");
  const [value, setValue] = useState("");
  const [table, setTable] = useState(rows);


  const handleSubmit = (e) => {
    e.preventDefault();

    const PropertyValue = {
      property,
      value,
    };
    estimate !== ""
      ? setEstimate([...estimate, PropertyValue])
      : alert("You Need To Valid Property Name");

    setProperty("");
    setValue("");
  };

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);

  return (
    <div>
      {/* <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
        <ModalContent>
          {(onClose) => (
            <>
              <div className="h-full w-full flex flex-col justify-center items-center py-10">
                <div className="text-5xl bg-green-500 p-5 rounded-full text-white ">
                  <TiTick></TiTick>
                </div>
                <div className="pt-4 text-green-500 text-2xl font-Montserrat font-semibold">
                  Updates Saved
                </div>
                <div className="text-xl font-Montserrat font-medium">
                  Your New Estimate is{" "}
                  <span className="font-semibold">$2,732,900</span>
                </div>
                <Link className="font-Montserrat underline pt-4" href="/">
                  Click here to view updated dashboard
                </Link>
              </div>
            </>
          )}
        </ModalContent>
      </Modal> */}
      {/* <Chatbot></Chatbot> */}
      <MainHeader page={""}></MainHeader>
      <div className="w-full md:px-12 px-2">
        <div className="flex flex-col justify-start items-start p-3 md:p-8 my-10 rounded-md font-Montserrat gap-4 shadow-md shadow-custom-yellow">
          <div>
            <div className=" font-semibold flex flex-col md:flex-row md:justify-start  md:items-center gap-3">
              Estimated Value for {houseData.house}
              <span className="text-custom-yellow sm:text-xl md:pl-2 text-base font-Montserrat ">
                $ {houseData.value}
              </span>
            </div>
            <div className="mt-3">{houseData.decription}</div>
          </div>

 
            <div className="w-full p-0 md:p-6 text-base rounded-md mb-3">
          <p>Add your recent renovations here</p>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-5"
              >
                {/* <div className="flex flex-col gap-2">
                <label htmlFor="property">Property</label>
                <input
                  type="text"
                  id="property"
                  placeholder="Add property"
                  className="p-2 outline-none border-none rounded-md focus:outline focus:outline-custom-yellow"
                  value={property}
                  required
                  onChange={(e) => setProperty(e.target.value)}
                />
                </div> */}
                {/* <div className="flex flex-col gap-2">
                <label htmlFor="value">Value</label>
                <input
                  type="text"
                  id="value"
                  placeholder="Add value"
                  className="p-2 outline-none border-none rounded-md focus:outline focus:outline-custom-yellow"
                  value={value}
                  required
                  onChange={(e) => setValue(e.target.value)}
                />
                </div> */}

                <CategoryDropdown
                  categories={listData}
                  title={"Category"}
                  selected={selected}
                  setSelected={setSelected}
                />
                <CategoryDropdown categories={listData} title={"Feature"} list={selected}
                feature={feature}
                setFeature={setFeature}
                
                />
                <button
                  type="submit"
                  className="bg-custom-yellow hover:bg-opacity-80 px-10 py-3 sm:py-3 sm:px-12 rounded-md text-white text-lg "
                  onClick={() =>{ setTable(
                    (item)=>([

                    
...item,
                    {
                      key: item.length + 1,
                      feature: feature?.anchorKey,
                      withAddedImprovements: "$1,834,230",
                      rate: "+78K",
                    }
                  ]
                  ))
                  setFeature(new Set([]))
                  setSelected(new Set([]))
                }
                }
                >
                  ADD
                </button>
              </form>
                <div className="py-5">
                  <FeatureTable table={table} setTable={setTable}/>
                  <FeatureChart />
                </div>
             
            </div>
      
        </div>
        {/* <div className="sm:pt-6 pt-3 flex justify-start sm:text-2xl text-2xl font-header w-full">
          Top 10 home features in the U.S. that add value
        </div> */}
        <div className="grid md:grid-cols-2 grid-cols-1 pt-3">
          {data &&
            data.map((e, i) => {
              return (
                <div
                  key={i}
                  className="flex flex-col 2xl font-Montserrat w-full items-start px-3 sm:py-10 py-4"
                >
                  {/* <div className=" border-2 border-gray-700 py-10 sm:px-4 px-2 rounded-lg md:w-10/12 w-full flex justify-center flex-col items-center space-y-5 shadow-lg shadow-custom-yellow"> */}
                  <div className="py-10 sm:px-4 px-2 rounded-lg md:w-10/12 w-full flex justify-center flex-col items-center space-y-5 shadow-md shadow-custom-yellow">
                    <div className="font-semibold font-header">{e.title}</div>
                    <div className="flex w-full border-b-2 border-gray-600"></div>
                    <ol className="list-decimal space-y-5  w-full list-inside ">
                      {e.propties.map((k, j) => {
                        return (
                          <li
                            className="w-full odd:bg-custom-verylight-yellow  px-4 py-3  shadow rounded font-semibold"
                            key={j}
                          >
                            {k}
                          </li>
                        );
                      })}
                    </ol>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <CenterMode/>
    </div>
  );
}

export default Roi;
