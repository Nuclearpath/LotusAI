import {Select, SelectItem} from "@nextui-org/react";
import { useState } from "react";
// import {commonColors} from "@nextui-org/theme";

export default function CategoryDropdown({categories,title,selected,setSelected,list,setFeature,feature}) {
  return (
    <div className="flex justify-center items-center w-full flex-wrap md:flex-nowrap gap-10 ">
    { title=== "Feature"?   <Select 
        isRequired
        label={title} 
        className="max-w-xs md:max-w-lg focus:!outline-none" 
        color={"default"} size="md"
        selectedKeys={feature}
        onSelectionChange={setFeature}
      >
        {categories.find((item)=>item.value === list?.anchorKey)?.featured.map((category) => (
          <SelectItem key={category.value} value={category.value} className="text-lg hover:!bg-custom-yellow active:!bg-none">
            {category.label}    
          </SelectItem>
        ))
        }
      </Select>:
      <Select 
      isRequired
      label={title} 
      className="max-w-xs md:max-w-lg focus:!outline-none" 
      color={"default"} size="md"
      selectedKeys={selected}
      onSelectionChange={setSelected}
    >
      {
      categories.map((category) => (
        <SelectItem key={category.value} value={category.value} className="text-lg hover:!bg-custom-yellow active:!bg-none">
          {category.label}    
        </SelectItem>
      ))
      }
    </Select>}


    </div>
  );
}
