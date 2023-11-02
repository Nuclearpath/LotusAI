import {Select, SelectItem} from "@nextui-org/react";
import {commonColors} from "@nextui-org/theme";

export default function CategoryDropdown({categories,title}) {
  return (
    <div className="flex justify-center items-center w-full flex-wrap md:flex-nowrap gap-10 focus:!outline-none">
      <Select 
        label={title} 
        className="max-w-xs " 
        // color={"background"}
      >
        {categories.map((category) => (
          <SelectItem key={category.value} value={category.value} aria-required>
            {category.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}
