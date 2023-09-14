import React from "react";

function House(props) {
  //   console.log(props.data);
  const { image, name, place, price, description } = props.data;
  return (
    <div className="w-96 flex flex-col  shadow space-y-2 shrink-0 cursor-pointer">
      <img src={image} className="w-full h-52"></img>
      <div className="font-semibold  font-Montserrat">Sold Price $ {price}</div>
      <div className="font-Montserrat text-sm">
        {name},{place}
      </div>
      <div className="font-Montserrat text-sm">{description}</div>
    </div>
  );
}

export default House;
