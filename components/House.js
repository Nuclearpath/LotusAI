import React from "react";
import Image from "next/image";
function House(props) {
  //   // console.log(props.data);
  const { image, name, place, price, description } = props.data;
  return (
    <div className="w-96 flex flex-col  shadow space-y-2 shrink-0 cursor-pointer">
      <div  className="w-full h-52"><Image src={image} fill className="!relative"></Image></div>
      <div className="font-semibold  font-Montserrat">Sold Price $ {price}</div>
      <div className="font-Montserrat text-sm">
        {name},{place}
      </div>
      <div className="font-Montserrat text-sm">{description}</div>
    </div>
  );
}

export default House;
