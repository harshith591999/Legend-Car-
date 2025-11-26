import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const DropDownField = ({ item, handleInputChange }) => {
  return (
    <div>
      <Select
        onValueChange={(value) => handleInputChange(item.name, value)}
        required={item.required}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder={item.label} />
        </SelectTrigger>
        <SelectContent>
          {item?.options.map((value, index) => (
            <div key={index}>
              <SelectItem value={value}>{value}</SelectItem>
            </div>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
export default DropDownField;
